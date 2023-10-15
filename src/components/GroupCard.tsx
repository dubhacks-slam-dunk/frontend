import { Flex, Text, AspectRatio } from '@radix-ui/themes';
import Image from 'next/image';

export default function GroupCard(props: any) {
  return (
    <div>
      <Flex direction="column" gap="1" align="center">
        <Image
          className="rounded-md"
          src={props.image}
          alt={props.name}
          width="350"
          height="10"
        ></Image>
        <Text>group name</Text>
        <Text>last updated {props.date}</Text>
      </Flex>
    </div>
  );
}
