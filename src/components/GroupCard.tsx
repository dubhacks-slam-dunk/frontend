import { Flex, Text } from '@radix-ui/themes';
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
        <Text className="font-dm">group name</Text>
        <Text className="font-orelega">last updated {props.date}</Text>
      </Flex>
    </div>
  );
}
