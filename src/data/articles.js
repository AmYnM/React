import React from "react";

export function article_1() {
	return {
		id: 1,
		date: "21 May 2024",
		title: "Navigating the Future: A Brief Exploration of Node.js",
		description:
			"A succinct overview of Node.js, its relevance in web development, and glimpses into its evolving landscape.",
		keywords: [
			"Future of Node JS",
			"Ameen",
			"Ameenul M",
			"Ameenul Muthaliff",
		],
		mediumLink: "https://medium.com/@muthaliff/navigating-the-future-a-brief-exploration-of-node-js-c9dc7d0a9898",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
				<h1>Article 1</h1>
				<img
					src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JCjQPNAfJj47fx2UpsAxsw.jpeg"
					alt="random"
					className="randImage"
				/>
			</div>
			<iframe
				src="https://medium.com/@muthaliff/navigating-the-future-a-brief-exploration-of-node-js-c9dc7d0a9898"
				title="Article from Medium"
				width="100%"
				height="600px"
			></iframe>
			</React.Fragment>
		),
	};
}

export function article_2() {
	return {
		id: 2,
		date: "21 May 2024",
		title: "Mastering MERN: Building Dynamic Web Applications with MongoDB, Express.js, React, and Node.js",
		description:
			"'Mastering MERN' is a comprehensive guide to building dynamic web applications using MongoDB, Express.js, React, and Node.js.",
		style: ``,
		keywords: [
			"MERN Stack in Web Applications",
			"Ameen",
			"Ameenul M",
			"Ameenul Muthaliff",
		],
		mediumLink: "https://muthaliff.medium.com/mastering-mern-building-dynamic-web-applications-with-mongodb-express-js-react-and-node-js-ca66ddbcfe64",
		body: (
			<React.Fragment>
				<div className="article-content"></div>
				<h1>Article 2</h1>
				<iframe
				src="https://muthaliff.medium.com/mastering-mern-building-dynamic-web-applications-with-mongodb-express-js-react-and-node-js-ca66ddbcfe64"
				title="Article from Medium"
				width="100%"
				height="600px"
			></iframe>
			</React.Fragment>
		),
	};
}

export function article_3() {
	return {
		id: 3,
		date: "22 May 2024",
		title: "Unraveling the Potential of Blockchain Technology: A Primer",
		description:
			"Blockchain technology has emerged as a disruptive force, promising to revolutionize industries, redefine trust, and reshape the way we transact and interact online. In this article, we’ll delve into the fundamentals of blockchain technology, explore its potential applications, and discuss the implications for the future.",
		style: ``,
		keywords: [
			"Blockchain Technology",
			"Smart Contract",
			"Ameen",
			"Ameenul M",
			"Ameenul Muthaliff",
		],
		mediumLink: "https://medium.com/@muthaliff/unraveling-the-potential-of-blockchain-technology-a-primer-8c57123ec066",
		body: (
			<React.Fragment>
				<div className="article-content"></div>
				<h1>Article 3</h1>
				<iframe
				src="https://medium.com/@muthaliff/unraveling-the-potential-of-blockchain-technology-a-primer-8c57123ec066"
				title="Article from Medium"
				width="100%"
				height="600px"
			></iframe>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
