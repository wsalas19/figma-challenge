type state = "active" | "completed" | "disabled";

export interface StepProps {
	state: state;
	number: number;
	content: string;
}
