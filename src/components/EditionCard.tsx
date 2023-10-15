import { Flex, Text, AspectRatio } from '@radix-ui/themes';
import Image from 'next/image';

export default function EditionCard(props: any) {
  return (
    <div>
      <Flex direction="column" className="mx-auto">
        <Text>{props.date}</Text>
        <Text>{props.title}</Text>
        <Flex direction="row">
          <Image
            className="rounded-md"
            src={props.image}
            alt={props.name}
            width="500"
            height="10"
          ></Image>
        </Flex>
      </Flex>
    </div>
  );
}
