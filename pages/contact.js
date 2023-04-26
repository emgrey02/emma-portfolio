import Layout from '../components/layout';
import ContactForm from '../components/contact-form';
import Head from 'next/head';

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Contact Emma</title>
			</Head>
			<h1>Contact Emma</h1>
			<ContactForm></ContactForm>
		</Layout>
	);
}
