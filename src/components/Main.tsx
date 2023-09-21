import Image from "next/image";
import React from "react";
import product from "../../public/assets/product-main.png";
import UserReview from "./UserReview";
import ProductCard from "./ProductCard";
import Features from "./Features";

function Main() {
	return (
		<div className=' bg-[#FAFAFA] w-full rounded-lg mt-7 p-10 flex flex-row gap-8'>
			<div className='flex flex-col w-[50%] gap-8'>
				<Image src={product} alt='main product view' className=' rounded-lg' />
				<UserReview />
			</div>
			<div className='flex flex-col w-[50%] gap-8'>
				<p className='font-title text-[2.4rem]'>
					<span className='text-[#2C7EF8]'>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion
					For Only <span className='text-[#2C7EF8]'>$14 Each</span> ($84.00 Total!)
				</p>
				<ProductCard />
				<Features />
			</div>
		</div>
	);
}

export default Main;
