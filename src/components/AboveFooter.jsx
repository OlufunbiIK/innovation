import React from "react";
import image from "../../src/assets/images/image 5.svg";
import arrow from "../../src/assets/images/Arrow 1 (1).svg";

export default function AboveFooter() {
	return (
		<div className="mx-2 md:mx-20 flex flex-col md:flex-row items-center py-10 justify-center gap-16">
			<div className="flex flex-col md:w-[30%]">
				<p>3RD FLOOR, 23A JENSON STREET, LEKKI PHASE 1, LAGOS STATE.</p>
				<p>+234-8144530215</p>
				<p>SARMVICS@GMAIL.COM</p>
			</div>
			<div className="">
				<img src={image} alt="" />
			</div>
			<div className="flex flex-col justify-center space-y-4">
				<p className="whitespace-nowrap">Got a project in mind?</p>
				<div className="flex flex-row gap-2 py-5 px-3 border-[1px] border-black justify-center items-center">
					<button className="uppercase whitespace-nowrap underline">
						Contact Us
					</button>
					<img src={arrow} alt="" />
				</div>
			</div>
		</div>
	);
}
