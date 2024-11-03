import React from "react";
import career from "../../src/assets/images/Full shot roofers working together with helmets.svg";

export default function Career() {
	return (
		<div className="relative h-screen w-full mt-5">
			{/* Background Image */}
			<img
				src={career}
				alt="Career Background"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			{/* Overlay Content */}
			<div className="relative flex h-full">
				<div className="absolute top-0 left-0 h-full w-1/4 border-l-2 border-r-2 border-white flex items-center justify-center">
					<p className="flex absolute bottom-4 text-white text-[14px] md:text-[20px] lg:text-4xl text-center  px-2">
						Construction
					</p>
				</div>
				<div className="absolute top-0 left-1/4 h-full w-1/4 border-l-2 border-r-2 border-white flex items-center justify-center">
					<p className="flex absolute bottom-4 text-white text-[14px] md:text-[20px] lg:text-4xl text-center  px-2">
						Interior Design
					</p>
				</div>
				<div className="absolute top-0 right-1/4 h-full w-1/4 border-l-2 border-r-2 border-white flex items-center justify-center">
					<p className="flex absolute bottom-4 text-white text-[14px] md:text-[20px] lg:text-4xl text-center  px-2">
						Architecture
					</p>
				</div>
				<div className="absolute top-0 right-0 h-full w-1/4 border-l-2 border-r-2 border-white flex items-center justify-center">
					<p className="flex absolute bottom-4 text-white text-[14px] md:text-[20px] lg:text-4xl text-center  px-2">
						Complete Furniture
					</p>
				</div>
			</div>
		</div>
	);
}
