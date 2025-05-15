import Image from 'next/image';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import Button from '../../components/Button';
import {
    getBlogPostById,
    parseFileId,
    readAllBlogPostFiles,
} from '../blog.utils';
import styles from './Blog.module.scss';

export async function generateStaticParams() {
    const entries = await readAllBlogPostFiles();

    return entries.map((entry) => ({
        id: parseFileId(entry),
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blogPost = await getBlogPostById(id);

    if (!blogPost) return {};

    return {
        title: blogPost.title,
        description: blogPost.description,
        openGraph: {
            title: blogPost.title,
            description: blogPost.description,
            type: 'article',
            publishedTime: blogPost.date?.toISOString(),
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blogPost = await getBlogPostById(id);
    if (!blogPost) return;

    const htmlContent = (
        await remark().use(remarkHtml).process(blogPost.content)
    ).toString();

    return (
        <section className={styles.post}>
            <Button text="Go Back" link="/blog" />

            <article className={styles.article}>
                <h1>{blogPost.title}</h1>
                <p>{blogPost.date?.toDateString()}</p>
                <Image
                    src={blogPost.featuredImage}
                    alt={blogPost.title}
                    width={200}
                    height={600}
                />
                <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>
        </section>
    );
}
