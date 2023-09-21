import React from "react";
import truck from "../../public/assets/truck.png";
import back from "../../public/assets/back.png";
import { BadgeCheck, Heart } from "lucide-react";
import Image from "next/image";

function Header() {
	return (
		<div className='flex bg-[#252F3D] w-full flex-row justify-around p-4'>
			<div className='text-white text-xs flex items-center gap-1'>
				<BadgeCheck size={22} />
				30-DAY SATISFACTION GUARANTEE
			</div>
			<div className='text-white text-xs flex items-center gap-1'>
				<Image src={truck} alt='truck' width={22} height={22} /> Free delivery on orders over $40.00
			</div>
			<div className='text-white text-xs flex items-center gap-1'>
				<Heart size={22} /> 50.000+ HAPPY CUSTOMERS
			</div>
			<div className='text-white text-xs flex items-center gap-1'>
				<Image src={back} alt='back' width={22} height={22} />
				100% Money Back Guarantee
			</div>
		</div>
	);
}

export default Header;
