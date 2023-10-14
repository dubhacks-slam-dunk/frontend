import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Flex, Text, Button } from "@radix-ui/themes";
import Groups from "./groups";

export default function App() {
	return (
		<>
			<Text>frienditions</Text>
			<Groups></Groups>
			{/* hello world */}
		</>
	);
}
