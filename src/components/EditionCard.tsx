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
                src="https://firebasestorage.googleapis.com/v0/b/friendition-d7dde.appspot.com/o/images%2FIMG_2988%201.png?alt=media&token=3d002792-b265-4d13-915e-0324522b1593"
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
