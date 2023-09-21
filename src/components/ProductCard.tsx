import Image from "next/image";
import React from "react";
import product from "../../public/assets/product-miniature.png";

function ProductCard() {
	return (
		<div className='flex flex-row w-full gap-6 border-2 border-solid border-red-500'>
			<div className=' w-32 h-32'>
				<Image src={product} alt='product mini' width={134} />
			</div>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-row'>
					<p>Clarifion Air Ionizer</p>
					<div className='flex gap-3 justify-end'>
						<p>$180</p>
						<p>$84</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
