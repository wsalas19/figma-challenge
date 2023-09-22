import Image from "next/image";
import React from "react";
import product from "../../public/assets/product-main.png";
import UserReview from "./UserReview";
import ProductCard from "./ProductCard";
import Features from "./Features";
import { Percent } from "lucide-react";
import PaymentTab from "./PaymentTab";

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
				<div className='flex flex-row gap-2 items-center bg-[#EDF3FD] rounded-lg py-3 px-4'>
					<div className='flex justify-center items-center w-8  aspect-square rounded-full bg-[#2C7EF8]'>
						<Percent color='white' size={20} />
					</div>
					<p className=' text-xl'>
						Save <span className='text-[#2C7EF8]'>53%</span> and get{" "}
						<span className='text-[#2C7EF8]'>6 extra Clarifision</span> for only{" "}
						<span className='text-[#2C7EF8]'>$14 Each</span>.
					</p>
				</div>
				<PaymentTab />
			</div>
		</div>
	);
}

export default Main;
