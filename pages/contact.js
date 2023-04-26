import Layout from '../components/layout';
import ContactForm from '../components/contact-form';
import utilStyles from '../styles/utils.module.scss';
import Head from 'next/head';

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Contact Emma</title>
			</Head>
			<h1>Contact Emma</h1>
			<div>
				<ul className={utilStyles.list}>
					<li>
						<a href="https://www.linkedin.com/in/emma-grey-289321190/">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://www.github.com/emgrey02">Github</a>
					</li>
				</ul>
			</div>
			<ContactForm></ContactForm>
		</Layout>
	);
}
