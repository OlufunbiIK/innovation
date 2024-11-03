import React from "react";
import image1 from "../../src/assets/images/image 1.svg";
import image2 from "../../src/assets/images/image 2.svg";
import image3 from "../../src/assets/images/image 3.svg";

export default function UnderAbout() {
	const projects = [
		{
			image: image1,
			title: "Customized Designs",
			details:
				"We tailor each design to meet your specific needs and preferences, creating unique spaces that reflect your vision",
		},
		{
			image: image3,
			title: "Experienced Architects ",
			details:
				"Our skilled architects bring years of expertise to every project, ensuring innovative and practical design solutions",
		},
		{
			image: image2,
			title: "Seamless Project Management",
			details:
				"From concept to completion, we manage every aspect of your project with precision and care",
		},
	];
	return (
		<div className="w-full flex md:flex-row flex-col md:px-20 gap-4 md:gap-0 px-2 items-center justify-center my-16">
			{projects.map((item, index) => (
				<div key={item.index}>
					<img src={item.image} alt="" />
					<div>{item.title}</div>
					<div>{item.details}</div>
				</div>
			))}
		</div>
	);
}
