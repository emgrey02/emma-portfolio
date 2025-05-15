import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import { darkerGrotesque } from '../styles/fonts';
import styles from '../styles/Home.module.scss';
import { getAllBlogPosts, sortBlogPosts } from './blog.utils';

export const metadata = {
    title: "emma's blog",
    description:
        "this is emma's blog, where she shares her thoughts and experiences as a front-end web developer and designer.",
    keywords:
        "emma, emma's blog, portfolio, web developer, designer, front-end, responsive websites, Next.js, Tailwind CSS",
};

export default async function BlogHomePage() {
    const blogPosts = await getAllBlogPosts();
    blogPosts.sort(sortBlogPosts).reverse();

    return (
        <section className={styles.blogPosts}>
            <h1 className={darkerGrotesque.className}>My Blog</h1>
            <Button text="Go Back" link="/" />
            <ul>
                {blogPosts.map((blogPost) => (
                    <li key={blogPost.id}>
                        <Link
                            className={styles.textCont}
                            href={`/blog/${blogPost.id}`}
                        >
                            <h2 id="title">{blogPost.title}</h2>
                            <Image
                                src={blogPost.featuredImage}
                                alt={blogPost.title}
                                width={300}
                                height={300}
                            />
                            <p>
                                {blogPost.date.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
