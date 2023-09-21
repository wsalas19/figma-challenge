import React from "react";
import tick from "../../public/assets/tick.png";
import Image from "next/image";

function Features() {
	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='flex gap-3'>
					<Image src={tick} alt='tick blue' />
					<p className=' text-xl text-[#4D5254]'>
						Negative Ion Technology may <span className=' font-bold'>help with allergens</span>
					</p>
				</div>
				<div className='flex gap-3'>
					<Image src={tick} alt='tick blue' />
					<p className=' text-xl text-[#4D5254]'>
						Designed for <span className=' font-bold'>air rejuvenation</span>
					</p>
				</div>
				<div className='flex gap-3'>
					<Image src={tick} alt='tick blue' />
					<p className=' text-xl text-[#4D5254]'>
						<span className=' font-bold'>Perfect for every room</span> in all types of places.
					</p>
				</div>
			</div>
		</>
	);
}

export default Features;
