import React from "react";
import check from "../../public/assets/green-check.png";
import { StepProps } from "../../types/interfaces/global";
import Image from "next/image";

function Step({ state, number, content }: StepProps) {
	return (
		<div className='flex flex-row gap-5 items-center justify-betwee'>
			{state === "completed" ? (
				<Image src={check} alt='check' width={40} height={40} />
			) : state === "active" ? (
				<div className=' flex justify-center items-center w-10 h-10  rounded-full bg-[#2C7EF8]'>
					<p className=' text-xl text-white'>{number}</p>
				</div>
			) : (
				<div className=' flex justify-center items-center w-10 h-10  rounded-full border-[#2C7EF8] border-solid border-2'>
					<p className={"text-xl text-[#2C7EF8]"}>{number}</p>
				</div>
			)}

			<p className={` text-xl ${state === "active" ? "font-bold" : null}`}>{content}</p>
		</div>
	);
}

export default Step;
