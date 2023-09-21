import Header from "@/components/Header";
import Step from "@/components/Step";
import Title from "@/components/Title";
import { StepProps } from "../../types/interfaces/global";
import Steps from "@/components/Steps";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<div className='px-32'>
				<Title />
				<Steps />
				<Main />
			</div>
			<Footer />
		</>
	);
}
