const config = {
	title: "Joseph Lynn's - Personal Website",
	author: {
		name: "Joseph Lynn",
		summary:
			"A web developer based in Tampa, Florida who enjoys building web applications with a great user experience. You can view my projects on GitHub, professional profile on LinkedIn, or download my resume.",
	},
	description: "Personal Website for Joseph Lynn, Frontend Web Developer",
	social: {
		twitter: "joe1ynn",
		devBlog: "joelynn",
		linkedIn: "joseph-lynn",
		github: "Joelynn94",
	},
	siteLogo: "/icons/logo.png",
	siteImage: "/images/preview.png",
	siteLinks: [
		{
			label: "Home",
			url: "/",
		},
		{
			label: "Blog",
			url: "/blog",
		},
		{
			label: "Projects",
			url: "/projects",
		},
	],
	userLinks: [
		{
			label: "GitHub",
			url: "https://github.com/Joelynn94",
			icon: "/icons/github-square.svg",
		},
		{
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/joseph-lynn/",
			icon: "/icons/linkedin.svg",
		},
		{
			label: "Dev Blog",
			url: "https://dev.to/joelynn",
			icon: "/icons/dev.svg",
		},
	],
	copyright: "Copyright © 2021. Joseph Lynn", // Copyright string for the footer of the website and RSS feed.
	siteRss: "/rss.xml", // Path to the RSS file.
	siteRssTitle: "Joseph Lynn Dev Website RSS feed", // Title of the RSS feed
	siteFBAppID: "", // FB Application ID for using app insights
	googleAnalyticsID: "G-F94EMPY5VL", // GA tracking ID.
};

export default config;
