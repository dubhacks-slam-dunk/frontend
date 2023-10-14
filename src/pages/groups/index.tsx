import { Flex, Text, Button } from "@radix-ui/themes";

export default function Groups() {
	return (
		<div>
			<Flex gap="3" align="center">
				<Text>your groups</Text>
				<Button>new group</Button>
			</Flex>
			<Flex direction="column" gap="4"></Flex>
		</div>
	);
}
