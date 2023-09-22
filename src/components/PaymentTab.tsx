import { ArrowRight } from "lucide-react";
import React from "react";

function PaymentTab() {
	return (
		<div className='flex flex-col gap-5'>
			<button className=' bg-[#59AE43] rounded-full py-4 px-16 text-white flex flex-row items-center justify-center gap-5'>
				YES - CLAIM MY DISCOUNT <ArrowRight />
			</button>
		</div>
	);
}

export default PaymentTab;
