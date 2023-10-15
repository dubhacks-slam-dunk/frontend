import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function GroupCard(props: any) {
  const router = useRouter();
  const handleGroupCardClick = () => {
    router.push({ pathname: `../group/${props.id}` });
  };

  return (
    <div>
      <Flex direction="column" className=" mx-auto" onClick={() => handleGroupCardClick()}>
        {props.image && (
          <div style={{ maxHeight: '200px', overflow: 'hidden' }}>
            <Image
              className="rounded-md"
              src={props.image}
              alt={props.name}
              width="400"
              height="10"
            ></Image>
          </div>
        )}
        <Text className="font-dm">{props.name}</Text>
        <Text className="font-orelega">last updated {props.date}</Text>
      </Flex>
    </div>
  );
}
