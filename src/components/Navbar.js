import Link from "next/link";
import { PencilAltIcon } from "@heroicons/react/outline";

const Navbar = () => {
	return (
		<div className="flex items-center justify-center w-full">
			<nav className="flex flex-col sm:flex-row items-center justify-between w-[90%] sm:w-[70%] h-[80px] text-purple-300">
				<div>
					<Link href="/">
						<h1 className="pt-4 font-mono text-xl font-black cursor-pointer select-none sm:pt-0">@evpc</h1>
					</Link>
				</div>
				<div className="flex items-center justify-center font-mono font-bold">
					{/* {process.env.NODE_ENV === "production" ? (
						<>
							<a href="./index.html" className="px-4 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">
								Home
							</a>
							<a href="./agendas.html" className="px-4 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">
								Agendas
							</a>
						</>
					) : (
						<>
							<Link href="/" passHref>
								<a className="px-4 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">Home</a>
							</Link>
							<Link href="/agendas" passHref>
								<a className="px-4 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">Agendas</a>
							</Link>
						</>
					)} */}
					<Link href="/" passHref>
						<a className="px-3 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">Home</a>
					</Link>
					<Link href="/agendas" passHref>
						<a className="px-3 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">Agendas</a>
					</Link>
					<Link href="/members" passHref>
						<a className="px-3 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">Members</a>
					</Link>
					<Link href="/photos" passHref>
						<a className="px-3 py-1 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:scale-105">Photos</a>
					</Link>
					<a href="https://github.com/armeetjatyani/evpc.club/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="p-2 transition-all duration-300 rounded-full hover:bg-gray-700 hover:scale-105 hover:rotate-6">
						<PencilAltIcon width={20} height={20} />
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
