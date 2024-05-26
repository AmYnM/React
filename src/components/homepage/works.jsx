import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./sterling.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Sterling Software Pvt Ltd</div>
							<div className="work-subtitle">
								Graduate Engineer Trainee
							</div>
							<div className="work-duration">JAN 2022 - NOV 2023</div>
						</div>

						<div className="work">
							<img
								src="./play.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Pistos IOT Solutions</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">DEC 2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
