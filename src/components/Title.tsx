import React from "react";
import logo from "../../public/assets/clarifion-logo.png";
import norton from "../../public/assets/norton.png";
import mcaffee from "../../public/assets/mcaffee.png";
import Image from "next/image";
/*
30px, 127px, 30px, 127px


*/
function Title() {
	return (
		<>
			<div className=' w-full flex items-center justify-between py-7'>
				<div>
					<Image src={logo} alt='clarifion' />
				</div>
				<div className='flex flex-row gap-8'>
					<Image src={norton} alt='norton' />
					<Image src={mcaffee} alt='mcaffee' />
				</div>
			</div>
			<div className='flex flex-col gap-6 mt-[-1rem] mb-12'>
				<p className=' text-center text-5xl font-title '>Wait ! your order in progress.</p>
				<h2 className=' text-[#4D5254] text-2xl text-center font-title'>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</h2>
			</div>
		</>
	);
}

export default Title;
