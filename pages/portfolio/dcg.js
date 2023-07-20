import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Button from '../../components/button';

export default function DCG() {
	return (
		<Layout>
			<Head>
				<title>Diversity Community Group | emma grey</title>
			</Head>
			<h1>Diversity Community Group</h1>
			<p>
				Diversity Community Group is a community of global DEIB
				(Diversity, Equity, Inclusion, and Belonging) Practitioners.
				DCG's founder wanted a website made for the group to commemorate
				their first year anniversary.
			</p>
			<p>
				I worked with Alex, the UX Designer I had worked with before on
				the Life Nailed project with Diverse Design Collective. Alex was
				the website design lead, and I supported her by doing some
				wireframing and creating UI elements for the page. We utilized
				Figma's designing and prototyping capabilities, creating a
				design system for DCG's brand and applying it through our phases
				of wireframing.
			</p>
			<p>
				My main role was the web developer so I translated the high
				fidelity prototypes to a website hosted by Wix.
			</p>
			<Button
				link="https://dcgforyou.wixsite.com/d-c-g"
				text="Go to DCG's website"
			></Button>
			<Image
				src="/images/dcg-devices.png"
				width="0"
				height="0"
				sizes="100vw"
				className={styles.img}
				alt="Jam House website displayed on desktop and tablet"
			/>

			<p>
				At the same time I was developing the site, I offered to revamp
				DCG's intake process. I saw improvements that could be made in
				the organization and consolidation of member data, and I heard
				complaints about how it needs to be less of a hands-on process.
				<br></br>
				<br></br>
				The use of Airtable instead of Google to house DCG's member
				database became the answer.
				<br></br>
				<br></br>
				With Airtable, I designed an automated process of member intake.
				After a member fills out the intake form, their answers are
				added to an airtable spreadsheet and the member is sent an
				automated email saying their form answers will be reviewed. When
				DCG's founder wants to accept them into DCG, they check a
				checkbox, and that triggers an automated email to be sent. It
				welcomes them into the group with a list of resources and a
				video introduction from the founder herself. In addition to this
				email, their user data is sent to a spreadsheet that houses
				official members of DCG. With these automations, the founder
				only has to click on a checkbox and onboarding is done for them.
			</p>

			<Image
				src="/images/dcg-desktop.png"
				width="0"
				height="0"
				sizes="100vw"
				className={styles.img}
				alt="Jam House website displayed on desktop and tablet"
			/>
			<Button
				link="https://dcgforyou.wixsite.com/d-c-g"
				text="Go to DCG's website"
			></Button>
		</Layout>
	);
}
