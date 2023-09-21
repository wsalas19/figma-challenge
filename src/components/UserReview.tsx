import React from "react";
import avatar from "../../public/assets/user-avatar.png";
import stars from "../../public/assets/stars.png";
import badge from "../../public/assets/verify.png";
import Image from "next/image";

function UserReview() {
	return (
		<div className=' bg-white flex flex-col w-full rounded-lg p-6 gap-5'>
			<div className=' flex flex-row gap-3'>
				<Image src={avatar} alt='user' />
				<div className='flex flex-col justify-around'>
					<Image src={stars} alt='stars' />
					<div className=' flex flex-row gap-2 items-center'>
						<p className='font-bold text-sm'>Ken.T</p>
						<Image src={badge} alt='badge' />
						<p className='text-[#5BB59A] font-light text-sm'>Verified Customer</p>
					</div>
				</div>
			</div>
			<p className=' text-base text-[#4D5254]'>
				“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon.
				When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I
				could breathe better. Wonderful.”
			</p>
		</div>
	);
}

export default UserReview;
