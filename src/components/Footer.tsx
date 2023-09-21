import React from "react";
import { Lock } from "lucide-react";

function Footer() {
	return (
		<div className='bg-[#252F3D] w-full flex flex-row justify-around items-center h-[88px] mt-14'>
			<p className='text-white'>Copyright (c) 2023 | Clarifionsupport@clarifion.com</p>
			<div className='flex items-center gap-1 '>
				<Lock color='white' />
				<p className='text-white'>Secure 256-bit SSL encryption.</p>
			</div>
		</div>
	);
}

export default Footer;
