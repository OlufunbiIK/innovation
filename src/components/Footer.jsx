import React from "react";
import {
	FaLinkedin,
	FaFacebookF,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa"; // Import the icons you want to use

const Footer = () => {
	return (
		<footer className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 border-t md:mx-20">
			<p className="text-center text-[#000000]">
				© 2024 Innovat. All rights reserved.
			</p>
			<div className="flex space-x-4">
				<a
					href="#"
					className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
				>
					<FaLinkedin className="text-gray-600" />
				</a>
				<a
					href="#"
					className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
				>
					<FaFacebookF className="text-gray-600" />
				</a>
				<a
					href="#"
					className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
				>
					<FaInstagram className="text-gray-600" />
				</a>
				<a
					href="#"
					className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
				>
					<FaYoutube className="text-gray-600" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
