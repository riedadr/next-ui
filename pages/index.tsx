import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ThemeSwitch from "../components/ThemeSwitch";

const Home: NextPage = () => {

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p>
					installed Extensions:{" "}
					<span className="text-draculaGreen">Tailwind</span>,{" "}
					<span className="text-draculaPurple">NextUI</span>
				</p>
				<ThemeSwitch />
			</main>
		</div>
	);
};

export default Home;
