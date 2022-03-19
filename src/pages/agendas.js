import Header from "../components/Header";
import agendas from "../data/agendas";
import { motion } from "framer-motion";

const Agendas = () => {
	return (
		<div className="flex items-center justify-center w-full ">
			<Header />
			<div className="w-[90%] sm:w-[70%] space-y-8">
				<h1 className="text-3xl font-black">Agendas</h1>
				{agendas.map((agenda, index) => {
					return (
						<motion.a initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.2 }} key={agenda.date} href={agenda.link} target="_blank" rel="noreferrer" className="block p-6 space-y-4 transition-colors duration-300 rounded-2xl hover:bg-gray-800 hover:shadow-lg ring-violet-400 ring-2">
							<div className="flex items-center space-x-4">
								<h2 className="text-lg font-black underline">{agenda.date}</h2>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
									<polyline points="15 3 21 3 21 9"></polyline>
									<line x1="10" y1="14" x2="21" y2="3"></line>
								</svg>
							</div>
							<p>{agenda.summary}</p>
							{agenda.attendance && (
								<div className="flex items-center justify-center px-4 space-x-2 text-gray-800 rounded-lg bg-violet-400 w-fit">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
									<p>{agenda.attendance}</p>
								</div>
							)}

							<div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
								{agenda.extraLinks.map((link) => {
									return (
										<a href={link.path} key={link.name} target="_blank" rel="noreferrer" className="flex items-center justify-center px-4 space-x-2 text-gray-800 transition-all duration-300 rounded-lg bg-violet-400 w-fit hover:scale-105 hover:shadow-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
												<polyline points="15 3 21 3 21 9"></polyline>
												<line x1="10" y1="14" x2="21" y2="3"></line>
											</svg>
											<p className="">{link.name}</p>
										</a>
									);
								})}
							</div>
						</motion.a>
					);
				})}
			</div>
		</div>
	);
};

export default Agendas;
