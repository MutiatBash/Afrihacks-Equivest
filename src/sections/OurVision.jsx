import React from "react";
// import visionImg from "/images/ourVision.svg";
import visionImg from "../assets/images/ourVision.svg";

const OurVision = () => {
	return (
		<section className="flex flex-row p-5 lg:px-16 lg:py-14 gap-6 justify-between items-center">
			<div className="w-[60%]">
				<h3 className="text-[1.7rem] lg:text-[3.2rem] w-full lg:leading-[4.3rem] font-semibold">
					Our Vision:
				</h3>
				<p className="py-2 lg:w-[70%] lg:text-xl">
					We envision a world where women has access to the knowledge and
					tools they need to make sound financial decisions.
				</p>
				<p className="py-2 lg:w-[70%] lg:text-xl">
					We believe financial literacy empowers women to build a brighter
					future.
				</p>
			</div>
			<div>
				<img src={visionImg}/>
			</div>
		</section>
	);
};

export default OurVision;
