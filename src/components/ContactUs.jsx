import React from "react";
import frame from "../../src/assets/images/Frame 8 (4).svg";
import arrow from "../../src/assets/images/Arrow 1 (1).svg";
import AboveFooter from "./AboveFooter";

export default function ContactUs() {
	return (
		<div className="">
			<div className=" border-b-[1px] border-black">
				<div className="flex flex-col md:flex-row gap-3 justify-between md:mx-20 px-2 py-4">
					<div>
						<img src={frame} alt="" />
					</div>
					<div>
						<ul className="flex flex-row gap-5">
							<div className="flex flex-row gap-1">
								<li>Home</li>
								<img src={arrow} alt="" />
							</div>
							<div className="flex flex-row gap-1">
								<li>Projects</li>
								<img src={arrow} alt="" />
							</div>
							<div className="flex flex-row gap-1">
								<li>Blogs</li>
								<img src={arrow} alt="" />
							</div>
							<div className="flex flex-row gap-1">
								<li>Careers</li>
								<img src={arrow} alt="" />
							</div>
						</ul>
					</div>
				</div>
			</div>
			<AboveFooter />
		</div>
	);
}
