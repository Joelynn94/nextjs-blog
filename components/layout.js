import Head from "next/head";
import config from "../lib/config";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/icons/favicon.ico" />
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width" />
				<meta
					name="keywords"
					content="Joseph Lynn, JavaScript Developer, React Developer, Web Development, Freelance Web Designer, Freelance Developer, Web Design Services"
				/>
				<meta
					name="description"
					content="Personal website for Joseph Lynn, a Frontend Web Developer based in Tampa, Florida. Focus on running your business, while I focus on growing your business."
				/>
				<meta
					property="og:image"
					content={`https://nextjs-blog-brown-iota.vercel.app${config.siteImage}`}
				/>
				<meta name="og:type" content="website" />
				<meta name="og:title" content={config.description} />
				<meta name="og:url" content="https://josephlynn.com" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content={config.social.twitter} />
				<meta name="twitter:title" content={config.title} />
				<meta name="twitter:description" content={config.description} />
				<meta
					name="twitter:image"
					content={`https://nextjs-blog-brown-iota.vercel.app${config.siteImage}`}
				/>
			</Head>
			<header className={styles.header}>
				<Navbar config={config} />
			</header>
			<main className={styles.container}>{children}</main>
			<Footer config={config} />
		</>
	);
};

export default Layout;
