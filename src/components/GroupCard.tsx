import { Flex, Text, AspectRatio } from '@radix-ui/themes';
import Image from 'next/image';

export default function GroupCard() {
  return (
    <div>
      <Flex direction="column" gap="1" align="center">
        <Image src="/images/expawdition.png" alt="expawdition"></Image>
        <Text>group name</Text>
        <Text>OCT 10, 2023</Text>
      </Flex>
    </div>
  );
}
