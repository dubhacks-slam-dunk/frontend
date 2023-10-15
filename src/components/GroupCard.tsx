import { Flex, Text, AspectRatio } from '@radix-ui/themes';
import Image from 'next/image';

export default function GroupCard(props: any) {
  return (
    <div>
      <Flex direction="column" className=" mx-auto">
        <Image
          className="rounded-md"
          src={props.image}
          alt={props.name}
          width="500"
          height="10"
        ></Image>
        <Text>group name</Text>
        <Text>last updated {props.date}</Text>
      </Flex>
    </div>
  );
}
