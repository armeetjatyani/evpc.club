import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			<body className="font-mono font-medium bg-gray-900 text-violet-400 selection:bg-violet-400 selection:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
