import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full">
			<Header />

			{/* Main Content */}
			<main className="w-[70%] md:h-[550px] flex flex-col space-y-4 items-center justify-center">
				{/* Terminal */}
				<svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="4 17 10 11 4 5"></polyline>
					<line x1="12" y1="19" x2="20" y2="19"></line>
				</svg>
				<h1 className="font-sans text-3xl font-black text-center">
					Evergreen Valley High School <br></br>Programming Club
				</h1>
				<p className="w-[70%] text-center">The party club at EV 🥳 🎉 - Lunch Meetings @ B138</p>
				<div className="relative w-full transition-all duration-500 rounded-xl h-[400px] lg:h-[1000px] shadow-2xl overflow-clip hover:scale-105">
					<Image src={"/hero.jpg"} layout="fill" objectFit="cover" priority className="blur-[2px] brightness-125 transition-all duration-500" />
				</div>
			</main>
		</div>
	);
}
