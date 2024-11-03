import React from "react";
import arrow from "../../src/assets/images/Arrow 1 (1).svg";
import blog from "../../src/assets/images/Frame 43.svg";

export default function Blog() {
	return (
		<div className="bg-[#F8F8F7]">
			<div className="md:px-20 px-2 pt-10 py-5">
				<div className="flex flex-col md:flex-row md:justify-between text-center md:text-left gap-4 items-center">
					<h1 className="md:w-[50%] text-[30px] md:text-[50px] xl:text-[70px]">
						We're Here to Assist You
					</h1>
					<p className="md:w-[50%] text-[16px] md:text-[18px] xl:text-[20px]">
						Need assistance quickly? Our sales consultants <br></br>
						are available and ready to support you <br></br>whenever
						you need
					</p>
				</div>
				<div className="flex flex-col md:flex-row gap-5 md:gap-20 lg:gap-52 my-4 items-center justify-between w-full">
					<div className="md:w-[50%] flex justify-center">
						<img src={blog} alt="blog" className="" />
					</div>
					<div className="md:w-[50%] flex">
						<form className="flex flex-col gap-5">
							<input
								type="text"
								placeholder="Your Name"
								className="uppercase border-b-2 border-[#0000004D] bg-[#F8F8F7] text-[#0000004D] py-4"
							/>
							<input
								type="text"
								placeholder="Your Email"
								className="uppercase border-b-2 border-[#0000004D] bg-[#F8F8F7] text-[#0000004D] py-4"
							/>
							<input
								type="text"
								placeholder="About Your Project"
								className="uppercase border-b-2 border-[#0000004D] bg-[#F8F8F7] text-[#0000004D] py-4"
							/>
							<div className="flex flex-row gap-2 border-[#000000] border-[1px] justify-center px-32 py-5 underline">
								<button>SEND</button>
								<img src={arrow} alt="" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
