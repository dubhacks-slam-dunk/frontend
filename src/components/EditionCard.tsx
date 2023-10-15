import { Flex, Text, AspectRatio } from '@radix-ui/themes';
import Image from 'next/image';
import PhotoEntry from '@/types/PhotoEntry';

export default function EditionCard(props: any) {
  return (
    <div>
      <Flex direction="column" className="mx-auto">
        <Text>{props.date}</Text>
        <Text>{props.title}</Text>
        <Flex direction="row">
          {props.photoentrylist &&
            props.photoentrylist.map((entry: PhotoEntry, index: number) => (
              <Image
                key={index}
                className="rounded-md"
                src={entry.entry}
                alt={entry.user.firstName + "'s photo"}
                width={500}
                height={10}
              />
            ))}
        </Flex>
      </Flex>
    </div>
  );
}
