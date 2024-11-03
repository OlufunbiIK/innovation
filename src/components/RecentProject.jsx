import React, { useState } from "react";
import vector from "../../src/assets/images/Vector (3).svg";
import arrow from "../../src/assets/images/Arrow 1 (1).svg";
import houseone from "../../src/assets/images/3d geometric abstract background.svg";
import housetwo from "../../src/assets/images/3d rendering of abstract building.svg";
import housethree from "../../src/assets/images/Low angle shot of axis towers in tbilisi georgia under a blue sky.svg";
import housefour from "../../src/assets/images/Luxury pool villa spectacular contemporary design digital art real estate home house and property ge.svg";
import housefive from "../../src/assets/images/Futuristic interior of one of the architecture's in guangzhou, china..svg";
import housesix from "../../src/assets/images/Cool staircase with lights in a modern building.svg";
import houseseven from "../../src/assets/images/Luxury pool villa spectacular contemporary design digital art real estate home house and property ge.svg";

export default function RecentProject() {
	const [viewProjects, setViewProjects] = useState(false);
	const toggleViewProjects = () => {
		setViewProjects(!viewProjects);
	};
	const twohouses = [
		{ image: housetwo, title: "White Cubic", date: "Jul, 2024" },
		{ image: houseone, title: "Villa Parasca", date: "Aug, 2024" },
	];
	const threehouses = [
		{ image: housethree, title: "Twins Theatre", date: "Jul,2024" },
		{ image: housefour, title: "Grand Home", date: "Jun. 2024" },
		{ image: housefive, title: "White House", date: "Jun, 2024" },
	];
	const threeshouses = [
		{ image: housesix, title: "", date: "" },
		{
			title: "Great buildings that move the spirit have always been rare. In every case they are unique, poetic, products of the heart",
		},
		{ image: houseseven, title: "", date: "" },
	];

	return (
		<div className="w-full md:px-20 px-2">
			<div className="flex flex-row items-center justify-between">
				<div>
					<p className="lg:text-[40px] whitespace-nowrap">
						Some of our recent projects
					</p>
				</div>
				<div className="flex flex-row items-center justify-center gap-1 md:gap-2">
					<p className="uppercase lg:text-[20px] whitespace-nowrap">
						view more
					</p>
					<img src={arrow} alt="" />
				</div>
			</div>
			<img src={vector} alt="" />
			<div>
				<div className="flex md:flex-row flex-col-reverse my-5 md:my-10 justify-between gap-4 items-center px-2">
					{twohouses.map((item, index) => (
						<div key={index}>
							<div>
								<img src={item.image} alt="" />
							</div>
							{item.title}
							<div></div>
							<div className="">{item.date}</div>
						</div>
					))}
				</div>
				<div className="flex md:flex-row flex-col-reverse my-5 md:my-10 justify-between gap-4 items-center px-2">
					{threehouses.map((item, index) => (
						<div key={index}>
							<div>
								<img src={item.image} alt="" />
							</div>
							{item.title}
							<div></div>
							<div className="">{item.date}</div>
						</div>
					))}
				</div>
				<div className="flex md:flex-row flex-col-reverse my-5 md:my-10 justify-between gap-4 items-center px-2">
					{threeshouses.map((item, index) => (
						<div key={index}>
							<div>
								<img src={item.image} alt="" />
							</div>
							{item.title}
							<div></div>
							<div className="">{item.date}</div>
						</div>
					))}
				</div>
			</div>
			<div
				onClick={toggleViewProjects}
				className="w-full flex flex-row gap-2 border-black border-[1px] px-2 py-2 justify-center items-center"
			>
				<p className="underline">
					{viewProjects ? "See Less Projects" : "View All Projects"}
				</p>
				<img src={arrow} alt="" />
			</div>
			{viewProjects && (
				<div>
					<div className="flex md:flex-row flex-col-reverse my-5 md:my-10 justify-between gap-4 items-center px-2">
						{twohouses.map((item, index) => (
							<div key={index}>
								<div>
									<img src={item.image} alt="" />
								</div>
								{item.title}
								<div></div>
								<div className="">{item.date}</div>
							</div>
						))}
					</div>
					<div className="flex md:flex-row flex-col-reverse my-5 md:my-10 justify-between gap-4 items-center px-2">
						{threehouses.map((item, index) => (
							<div key={index}>
								<div>
									<img src={item.image} alt="" />
								</div>
								{item.title}
								<div></div>
								<div className="">{item.date}</div>
							</div>
						))}
					</div>
					<div className="flex md:flex-row flex-col-reverse my-5 md:my-10 justify-between gap-4 items-center px-2">
						{threeshouses.map((item, index) => (
							<div key={index}>
								<div>
									<img src={item.image} alt="" />
								</div>
								{item.title}
								<div></div>
								<div className="">{item.date}</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
