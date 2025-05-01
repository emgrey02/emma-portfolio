import Image from 'next/image';
import Link from 'next/link';
import { darkerGrotesque } from '../styles/fonts';
import styles from '../styles/Home.module.scss';
import { getAllBlogPosts, sortBlogPosts } from './blog.utils';

export const metadata = {
    title: 'Blog',
};

export default async function BlogHomePage() {
    const blogPosts = await getAllBlogPosts();
    blogPosts.sort(sortBlogPosts).reverse();

    return (
        <section className={styles.blogPosts}>
            <h1 className={darkerGrotesque.className}>My Blog</h1>
            <ul>
                {blogPosts.map((blogPost) => (
                    <li key={blogPost.id}>
                        <Link href={`/blog/${blogPost.id}`}>
                            <Image
                                src={blogPost.featuredImage}
                                alt={blogPost.title}
                                width={200}
                                height={200}
                            />
                            {blogPost.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
