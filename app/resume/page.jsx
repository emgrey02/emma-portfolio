import Button from '../components/Button';
import { darkerGrotesque } from '../styles/fonts';
import styles from '../styles/Home.module.scss';

export const metadata = {
    title: 'resume',
    description:
        "this is emma grey's resume. she is a front-end web developer and designer specializing in responsive websites and modern frameworks like Next.js and Tailwind CSS.",
    keywords:
        'emma, emma resume, portfolio, web developer, designer, front-end, responsive websites, Next.js, Tailwind CSS',
};

export default function Resume() {
    return (
        <section className={styles.cont}>
            <Button text="Go Back" link="/" />
            <h1 className={darkerGrotesque.className}>Resume</h1>
            <div className={styles.resumeCont}>
                <div>
                    <p>
                        Creative and detail-oriented Front-End Web Developer
                        with hands-on experience maintaining and enhancing
                        WordPress websites. Currently serving as Office &
                        Marketing Manager at GreenRose Design, combining
                        technical web skills with diverse marketing and
                        administrative responsibilities. Skilled in creating
                        responsive, accessible web content with a keen eye for
                        design and usability.
                    </p>

                    <h3>Education</h3>

                    <div>
                        <h4>
                            Raritan Valley Community College -- Branchburg NJ
                        </h4>
                        <p>
                            Associate of Applied Science in Interface Design and
                            Web Development
                        </p>
                        <p>June 2021 - May 2023</p>
                        <p>GPA: 4.0</p>
                    </div>
                    <div>
                        <h4>Ithaca College -- Ithaca NY</h4>
                        <p>Bachelor of Music in Clarinet Performance</p>
                        <p>Minors in Mathematics and Jazz Studies</p>
                        <p>August 2015- May 2019</p>
                        <p>GPA: 3.7</p>
                    </div>

                    <h3>Experience</h3>

                    <div>
                        <h4>
                            Office & Marketing Manager for GreenRose
                            Design-Build
                        </h4>
                        <p>March 2023 - NOW</p>
                        <p>Independent Contractor</p>
                        <p>
                            Maintains and updates GreenRose Design’s WordPress
                            website, ensuring responsive, accessible layouts and
                            strong SEO. Creates and schedules social media
                            assets and printed advertisements to align with
                            brand strategy. Manages financial records and
                            reporting using QuickBooks. Organizes digital file
                            systems, scans and uploads documentation for
                            internal records.
                        </p>
                    </div>
                    <div>
                        <h4>
                            Web Designer/Developer with Diversity Community
                            Group (DCG)
                        </h4>
                        <p>January 2023 - August 2023</p>
                        <p>Volunteer</p>
                        <p>
                            Helped design a website for the group’s first year
                            anniversary. Worked closely with the group’s founder
                            and presented materials weekly for review.
                            Translated wireframes into a website built with Wix.
                            Continue working with DCG to redesign their intake
                            process with Airtable, update website with upcoming
                            events, and help begin to build a directory of DEI
                            practitioners.
                        </p>
                    </div>
                    <div>
                        <h4>
                            Web Designer/Developer with Diverse Design
                            Collective (DDC)
                        </h4>
                        <p>May 2022 - September 2022</p>
                        <p>Volunteer</p>
                        <p>
                            Collaborated with a team on the design and
                            development of a life coach’s website. Translated
                            wireframes into a website built with Wix.{' '}
                        </p>
                    </div>

                    <h3>Awards</h3>

                    <div>
                        <h4>Nota Bene Award</h4>
                        <p>Raritan Valley Community College</p>
                        <p>April 2022</p>
                        <p>
                            Nominated by a faculty member for a website I made
                            that included dark/light mode function,
                            acknowledging my “creative strength and ingenuity”.
                        </p>
                    </div>
                    <div>
                        <h4>Responsive Web Design Certificate</h4>
                        <p>freecodecamp.org</p>
                        <p>May 2021</p>
                        <p>Represents 300 hours of coursework</p>
                    </div>

                    <h3>Projects</h3>

                    <div>
                        <h4>streamd - Movie & TV Discovery Website</h4>
                        <a href="https://streamd.vercel.app/">
                            https://streamd.vercel.app
                        </a>
                        <p>Dec 2024</p>
                        <p>
                            Developed a responsive web app inspired by IMDb and
                            Letterboxd for browsing, rating, and saving movies &
                            tv shows. Integrated a RESTful API from The Movie
                            Database (TMDB) to dynamically fetch and display
                            film data. Implemented user authentication and
                            sign-in functionality for creating personalized
                            watchlists. Designed a sleek, user-friendly
                            interface using Nextjs & Tailwind CSS.
                        </p>
                    </div>
                    <div>
                        <h4>Jam House - Website</h4>
                        <a href="https://jam-house.netlify.app/">
                            https://jam-house.netlify.app
                        </a>
                        <p>Raritan Valley Community College</p>
                        <p>Dec 2022</p>
                        <p>
                            Collaborated with a team on the design and
                            development of a website where the user can create
                            music with ease and joy. Features a 16-note
                            sequencer with drum and synthesizer sounds. Fully
                            keyboard accessible, with keyboard shortcuts to
                            facilitate usability. Includes a professional mode
                            to change the key or octave of the synthesizer.
                            Utilized ToneJS to create the sequencer, in addition
                            to vanilla HTML and SCSS.
                        </p>
                    </div>
                    <div>
                        <h4>Style Stage - CSS Stylesheet</h4>
                        <a href="https://stylestage.dev/styles/drawing-board">
                            https://stylestage.dev/styles/drawing-board
                        </a>
                        <p>Raritan Valley Community College</p>
                        <p>May 2022</p>
                        <p>
                            Designed a webpage from scratch using SCSS. Started
                            with an HTML file and submitted my own stylesheet as
                            a community contribution to Stephanie Eckles’
                            project. Requirements included being fully
                            accessible: proper color contrast, skip-navigation
                            link, 200% zoom check, image alt text, and more.
                            Used latest CSS techniques like clamp(), list
                            counter, nth-child selectors, pseudo elements, and
                            clip-paths.
                        </p>
                    </div>
                    <div>
                        <h4>Statalog - Fitbit Watch App</h4>
                        <p>Personal Project</p>
                        <p>January 2022</p>
                        <p>
                            Created a watch-face application using the Fitbit
                            SDK for Fitbit Versa 3. It is an analog clock that
                            presents the time, date, calories, heart rate, step
                            count, and stair count. The user can edit the colors
                            of the hour hand and minute hand, as well as toggle
                            any of the stats. Created with SVG code.
                        </p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>908.552.8244</li>
                        <li>emgrey02@gmail.com</li>
                        <li>Bernardsville, NJ USA</li>
                    </ul>
                    <div>
                        <h3>Design</h3>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>InDesign</li>
                            <li>XD</li>
                            <li>Figma</li>
                            <li>Canva</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Coding</h3>
                        <ul>
                            <li>Visual Studio</li>
                            <li>Visual Studio Code</li>
                            <li>Github</li>
                            <li>JavaScript</li>
                            <li>Typescript</li>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>React</li>
                            <li>NextJS</li>
                            <li>Tailwind CSS</li>
                            <li>Astrojs</li>
                            <li>Svelte</li>
                            <li>Unity/C#</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Other</h3>
                        <ul>
                            <li>Airtable</li>
                            <li>Asana</li>
                            <li>
                                Google - Docs, Sheets, Calendar, Gmail, Drive,
                                Slides, Forms, Meet
                            </li>
                            <li>Zoom</li>
                            <li>Wix</li>
                            <li>Squarespace</li>
                            <li>Wordpress</li>
                            <li>
                                Microsoft - Teams, OneDrive, Outlook, Excel,
                                PowerPoint, Word, OneNote
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
