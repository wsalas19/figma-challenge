import React from "react";
import { StepProps } from "../../types/interfaces/global";
import Step from "./Step";
function Steps() {
	const steps: StepProps[] = [
		{ state: "completed", number: 1, content: "Step 1 : Cart Review" },
		{ state: "completed", number: 2, content: "Step 2 : Checkout" },
		{ state: "active", number: 3, content: "Step 3 : Special Offer" },
		{ state: "disabled", number: 4, content: "Step 4 : Confirmation" },
	];

	return (
		<div className='flex flex-row justify-between items-center'>
			{steps.map((step) => {
				return (
					<Step key={step.number} state={step.state} number={step.number} content={step.content} />
				);
			})}
		</div>
	);
}

export default Steps;
