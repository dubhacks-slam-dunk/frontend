import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function EditionCard(props: any) {
  console.log(props);

  const router = useRouter();

  const handleEditionCardClick = () => {
    router.push(`/group/${router.query.group}/updates/${props.id}`);
  };

  return (
    <div onClick={handleEditionCardClick}>
      <Flex direction="column" className="mx-auto">
        <Text>{props.date}</Text>
        <Text>{props.title}</Text>
        <Flex direction="row">
          {props.photoentrylist &&
            props.photoentrylist.map((entry: any, index: number) => (
              <Image
                key={index}
                className="rounded-md"
                // src={encodeURIComponent(entry.url)}
                src="/images/expawdition.png"
                alt={'photo'}
                width={500}
                height={10}
              />
            ))}
        </Flex>
      </Flex>
    </div>
  );
}
