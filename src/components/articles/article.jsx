import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./style/article.css";
import myArticles from "../../data/articles";

const Article = () => {
	// const { date, title, description, mediumLink } = props;

	return (
		// <React.Fragment>
		// 	<div className="article">
		// 		<div className="article-left-side">
		// 			<div className="article-date">
		// 				|&nbsp;&nbsp;&nbsp;{date}
		// 			</div>
		// 		</div>

		// 			<div className="article-right-side">
		// 				<div className="article-title">{title}</div>
		// 				<div className="article-description">{description}</div>
		// 				<div className="article-link">
		// 					<div className="homepage-article-link">
		// 					<a href={mediumLink} target="_blank" rel="noopener noreferrer">
		// 						Read Article
		// 					<FontAwesomeIcon
		// 						style={{ fontSize: "10px" }}
		// 						icon={faChevronRight}
		// 					/>
		// 					</a>
		// 					</div>
		// 				</div>
		// 			</div>
		// 	</div>
		// </React.Fragment>
		<div>
			{myArticles.map((article, index) => (
				<div key={index} className="article">
					<div className="article-left-side">
						<div className="article-date">|&nbsp;&nbsp;&nbsp;{article().date}
						</div>
						<div className="article-right-side">
							<div className="article-title">{article().title}
							</div>
							<div className="article-description">{article().description}
							</div>
							<div className="article-link">
								<a href={article().mediumLink} target="_blank" rel="noopener noreferrer">
									Discover Now
									<FontAwesomeIcon style={{ fontSize: "10px" }} icon={faChevronRight} />
								</a>
								</div>
							</div>
						</div>
					</div>
			))}
		</div>
	);
};

export default Article;
