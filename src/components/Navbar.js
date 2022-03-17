import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex items-center justify-center w-full">
			<nav className="flex items-center justify-between w-[70%] h-[80px] text-purple-300">
				<div>
					<h1 className="font-mono text-xl font-black select-none">@evpc</h1>
				</div>
				<div className="flex font-mono font-bold">
					{process.env.NODE_ENV === "production" ? (
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
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
