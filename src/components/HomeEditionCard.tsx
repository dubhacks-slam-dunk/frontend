import PhotoEntry from '@/types/PhotoEntry';
import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';

export default function HomeEditionCard(props: any) {
  console.log(props);

  return (
    <div>
      <Flex direction="column" className="mx-auto">
        <Text>{props.date}</Text>
        <Text>{props.title}</Text>
        <Text>{props.name}</Text>
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
