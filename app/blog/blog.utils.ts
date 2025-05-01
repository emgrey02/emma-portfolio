import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';
import { BlogPost } from './blog.types';

export const getBlogPostById = cache(fetchBlogPostById);

export async function fetchBlogPostById(
    id: string,
): Promise<BlogPost | undefined> {
    const allBlogPostFiles = await readAllBlogPostFiles();
    const blogPostFile = allBlogPostFiles.find(
        (entry) => parseFileId(entry) === id,
    );
    if (!blogPostFile) return undefined;
    return mapFileToBlogPost(blogPostFile);
}

export const blogPostsFolder = path.join(process.cwd(), 'blog-posts');

export async function readAllBlogPostFiles() {
    const dirEntries = await fs.promises.readdir(blogPostsFolder, {
        recursive: true,
        withFileTypes: true,
    });
    return dirEntries.filter((entry) => entry.isFile());
}

export async function getAllBlogPosts() {
    const blogPostFiles = await readAllBlogPostFiles();
    return Promise.all(blogPostFiles.map(mapFileToBlogPost));
}

export function sortBlogPosts(a: BlogPost, b: BlogPost) {
    if (a.date > b.date) return 1;
    return -1;
}

async function mapFileToBlogPost(file: fs.Dirent): Promise<BlogPost> {
    const fileContents = await fs.promises.readFile(getFilePath(file), {
        encoding: 'utf8',
    });
    const matterData = matter(fileContents);

    return {
        id: parseFileId(file),
        title: matterData.data.title,
        date: matterData.data.date,
        description: matterData.data.description,
        featuredImage: matterData.data.featuredImage,
        content: matterData.content,
    };
}

function getFilePath(file: fs.Dirent): string {
    return path.join(file.parentPath, file.name);
}

export function parseFileId(file: fs.Dirent): string {
    return file.name.replace(/\.md$/, ''); // remove the '.md' file extension
}
