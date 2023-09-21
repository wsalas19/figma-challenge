import Image from "next/image";
import React from "react";
import product from "../../public/assets/product-miniature.png";
import stars from "../../public/assets/stars2.png";
import dot from "../../public/assets/dot.png";
//border-2 border-solid border-red-600

function ProductCard() {
	return (
		<>
			<div className='flex gap-6 '>
				<Image src={product} alt='product' width={185} />
				<div className=' w-[70%] flex gap-[0.98rem] flex-col '>
					<div className=' flex flex-row justify-between items-center   '>
						<div className='w-[50%]'>
							<p className=' text-xl'>Clarifion Air Ionizer</p>
						</div>
						<div className='w-[50%] flex justify-end gap-2 items-center font-bold'>
							<p className='text-[#969696] text-base'>
								<s>$180</s>
							</p>
							<p className=' text-[1.3rem] text-[#2C7EF8]'>$84</p>
						</div>
					</div>
					<Image src={stars} alt='stars' width={100} />
					<div className='flex items-center gap-3'>
						<Image src={dot} alt='dot' />
						<p className='text-[#37465A] text-base'>12 left in Stock</p>
					</div>
					<p className=' text-xl text-[#4D5254]'>
						Simply plug a Clarifion into any standard outlet and replace bulky, expensive air
						purifiers with a simple.
					</p>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
