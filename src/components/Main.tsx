import Image from "next/image";
import React from "react";
import product from "../../public/assets/product-main.png";
import UserReview from "./UserReview";
import ProductCard from "./ProductCard";

function Main() {
	return (
		<div className=' bg-[#FAFAFA] w-full rounded-lg mt-7 p-10 flex flex-row gap-8'>
			<div className='flex flex-col w-[50%] gap-8'>
				<Image src={product} alt='main product view' className=' rounded-lg' />
				<UserReview />
			</div>
			<div className='flex flex-col w-[50%] gap-8'>
				<p className='font-title text-[2.5rem]'>
					<span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price for 6 extra Clarifion
					for only <span className='text-[#2C7EF8]'>$14 each</span> ($84.00 total!)
				</p>
				<ProductCard />
			</div>
		</div>
	);
}

export default Main;
