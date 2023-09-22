import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import React from "react";
import payments from "../../public/assets/payments.png";

function PaymentTab() {
	return (
		<div className='flex flex-col gap-5'>
			<button className=' bg-[#59AE43] rounded-full py-4 px-16 text-white flex flex-row items-center justify-center gap-5 hover:bg-[#7eb171]'>
				YES - CLAIM MY DISCOUNT <ArrowRight />
			</button>
			<div className=' rounded border-2 border-solid border-[#CFCFCF] w-full flex flex-row gap-4 py-2 px-4 justify-evenly items-center'>
				<p className=' text-[#4D5254] text-base font-title'>Free Shipping</p>
				<p className='text-[#CFCFCF]'>|</p>
				<div className='flex items-center gap-4 justify-center'>
					<Lock className='text-[#4D5254]' size={14} />
					<p className=' font-title text-[#4D5254] text-base'>Secure 256-bit SSL encryption.</p>
				</div>
				<p className='text-[#CFCFCF]'>|</p>
				<Image src={payments} alt='payment methods' width={220} height={16} />
			</div>
			<p className=' text-[#F82C2C] font-title text-xl text-center underline hover:cursor-pointer'>
				{"NO THANKS, I DON'T WANT THIS"}
			</p>
		</div>
	);
}

export default PaymentTab;
