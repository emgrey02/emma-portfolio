import Layout from '../components/layout';
import Head from 'next/head';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About Emma</title>
			</Head>
			<h1>About</h1>
			<p>Here's a little bit about myself!</p>
			<p>
				My name is Emma (she/her). After I completed a bachelor's degree
				in Clarinet Performance in 2019, I began to transition to a
				career in Web Design and Development. Playing instruments isn't
				feasible for me anymore because of the onset of an auto-immune
				disease called Scleroderma. While it has caused struggle in my
				life, I am more dedicated and passionate about making the web
				(and the world) less ableist. It's disappointing how generally
				inaccessible the web is to our disabled population (which is 15%
				of the world!).
			</p>
			<p>
				Currently I'm working on an Associate's degree in Interface
				Design and Web Development with the goal of landing an
				entry-level frontend developer position. I will graduate in May
				of 2023. I have the most experience developing with HTML, CSS,
				and JavaScript, and I've dabbled in frameworks like Svelte and
				React. As I continue coding and learning, I want to keep
				contributing to open-source projects and start working on larger
				projects with others.
			</p>
			<p>
				Thanks for being here! Please feel free to contact me about
				anything!
			</p>
		</Layout>
	);
}
