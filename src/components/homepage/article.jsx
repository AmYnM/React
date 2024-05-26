import React from "react";
import myArticles from "../../data/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";
const Article = () => {
	//const { title, description, date, mediumLink } = props;

		return (
		<div>
			{myArticles.map((article, index) => (
				<div key={index} className="article">
				<div className="homepage-article">
					<div className="homepage-article-content">
						<div className="homepage-article-date">
							|&nbsp;&nbsp;&nbsp;{article().date}
						</div>
						<div className="homepage-article-title">{article().title}</div>
						<div className="homepage-article-description">
							{article().description}
						</div>
						<div className="homepage-article-link">
							<a href={article().mediumLink} target="_blank" rel="noopener noreferrer">
								Read Article
								<FontAwesomeIcon style={{ fontSize: "10px" }} icon={faChevronRight} />
							</a>
						</div>
					</div>
				</div>
				</div>
			))}
		</div>
	);
}
export default Article;
