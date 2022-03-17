import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			<body className="font-mono font-medium text-purple-300 bg-gray-900 selection:bg-purple-300 selection:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
