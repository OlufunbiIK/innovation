import React from "react";
import darkArrow from "../../src/assets/images/Arrow 1 (1).svg";
import { Link } from "react-router-dom";
import building from "../../src/assets/images/Vertical low angle shot of a white concrete building.svg";
import secondbuilding from "../../src/assets/images/Monochromatic urban minimal landscape (1).svg";
import vector from "../../src/assets/images/Vector (3).svg";

export default function AboutUs() {
	return (
		<div className="flex flex-col lg:h-screen lg:flex-row items-center justify-center gap-10 md:px-20 px-2 py-5 ">
			<div className="lg:w-[40%] w-full">
				<div className="mb-5 xl:mb-7">
					<p className="text-[#000000] mb-1 md:text-[20px] xl:text-[26px]">
						Great design stands out.<br></br> Exceptional design
						becomes a part of your experience
					</p>
					<img src={vector} alt="" />
				</div>

				<p className="text-[#000000] md:text-[16px] xl:text-[20px]">
					At INNOVAT, we create architectural designs that seamlessly
					blend beauty and functionality. Our meticulous approach
					ensures every detail enhances your daily life. Collaborate
					with our experienced team to transform your vision into a
					stunning, intuitive space.
				</p>

				<div className="flex items-center gap-2 mt-5">
					<p className="uppercase underline text-400 text-[20px]">
						Learn more
					</p>
					<img src={darkArrow} alt="" />
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center gap-3 md:w-[60%] w-full">
				<div>
					<img src={secondbuilding} alt="" />
				</div>
				<div>
					<img src={building} alt="" />
				</div>
			</div>
		</div>
	);
}
