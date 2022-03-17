import Head from "next/head";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full">
			<Head>
				<title>@evpc</title>
				<meta name="description" content="Evergreen Valley High School Programming Club" />
				<link rel="icon" href="../public/img/logo.png" />
			</Head>

			{/* Main Content */}
			<main className="w-[70%] h-[700px] md:h-[550px] flex flex-col space-y-4 items-center justify-center">
				{/* Terminal */}
				<svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="4 17 10 11 4 5"></polyline>
					<line x1="12" y1="19" x2="20" y2="19"></line>
				</svg>
				<h1 className="font-sans text-5xl font-black text-center">
					Evergreen Valley High School <br></br>Programming Club
				</h1>
				<p className="w-[70%] text-center text-xl">The party club at EV 🥳 🎉 - Lunch Meetings @ B138</p>
			</main>
		</div>
	);
}
