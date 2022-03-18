const Footer = () => {
	return (
		<div className="flex items-center justify-center w-full">
			<footer className="w-[90%] sm:w-[70%] h-[80px] flex items-center justify-between text-purple-300 font-mono text-sm">
				<section className="select-none">Programming Club @ <u>EVHS</u></section>
				<section className="flex space-x-2">
					<a href="http://github.com/evpc-club" target={"_blank"} rel="noreferrer" className="flex items-center justify-center p-2 transition-all duration-300 rounded-full hover:bg-gray-700 hover:rotate-12 hover:scale-110">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
					</a>
					<a href="https://www.instagram.com/evpc.club/" target={"_blank"} rel="noreferrer" className="flex items-center justify-center p-2 transition-all duration-300 rounded-full hover:bg-gray-700 hover:rotate-12 hover:scale-110">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> 
						</svg>
					</a>
					<a href="https://www.facebook.com/groups/evpc.club" target={"_blank"} rel="noreferrer" className="flex items-center justify-center p-2 transition-all duration-300 rounded-full hover:bg-gray-700 hover:rotate-12 hover:scale-110">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
						</svg>
					</a>
					<a href="https://discord.com/invite/AAQ433DZpB" target={"_blank"} rel="noreferrer" className="flex items-center justify-center p-2 transition-all duration-300 rounded-full hover:bg-gray-700 hover:rotate-12 hover:scale-110">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
						</svg>
					</a>
				</section>
			</footer>
		</div>
	);
};

export default Footer;
