import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function HomeGroupCard(props: any) {
  const router = useRouter();
  const handleGroupCardClick = () => {
    // router.push(`../group/${props.id}`); // change
  };

  return (
    <div className="w-full">
      <Flex direction="column" className="min-w-full" onClick={() => handleGroupCardClick()}>
        {props.image && (
          <Image
            className="rounded-md"
            src={props.image}
            alt={props.name}
            width="500"
            height="10"
          ></Image>
        )}
        <Text className="font-dm">{props.name}</Text>
      </Flex>
    </div>
  );
}
