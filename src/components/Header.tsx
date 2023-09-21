import React from "react";
import { BadgeCheck, Heart, Truck, RefreshCcw } from "lucide-react";

function Header() {
	return (
		<div className='flex bg-[#252F3D] w-full flex-row justify-around p-4'>
			<div className='text-white text-xs flex items-center gap-1'>
				<BadgeCheck />
				30-DAY SATISFACTION GUARANTEE
			</div>
			<div className='text-white text-xs flex items-center gap-1'>
				{" "}
				<Truck /> Free delivery on orders over $40.00
			</div>
			<div className='text-white text-xs flex items-center gap-1'>
				<Heart /> 50.000+ HAPPY CUSTOMERS
			</div>
			<div className='text-white text-xs flex items-center gap-1'>
				{" "}
				<RefreshCcw />
				100% Money Back Guarantee
			</div>
		</div>
	);
}

export default Header;
