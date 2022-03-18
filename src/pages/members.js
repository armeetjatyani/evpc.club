import Header from "../components/Header";

function Members() {
	return (
		<div className="flex items-center justify-center w-full ">
			<Header />
			<div className="w-[90%] sm:w-[70%] space-y-8">
				<h1 className="text-3xl font-black">Members</h1>{" "}
			</div>
		</div>
	);
}

export default Members;
