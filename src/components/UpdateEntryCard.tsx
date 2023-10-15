import { Flex, Text, Avatar } from '@radix-ui/themes';

export default function UpdateEntryCard(props: any) {
  return (
    <div>
      <Flex
        className="flex-row space-x-3 items-center"
        style={{
          color: '#5B5BD6',
          borderColor: '#5B5BD6',
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
        }}
      >
        {/* <Avatar src={props.user.photo} radius="full" fallback="A" /> */}
        <Avatar radius="full" fallback="A" />
        <Flex className="flex-col space-y-1">
          {/* <Text size="2">{props.user.name}</Text> */}
          {/* <Text>{props.entry}</Text> */}
          <Text size="2">TARYN</Text>
          <Text>hellodl fslkdjsflksdajl;fkj as; dsflkdskl fjd;sal ;dljdflk s;ldasfkldsa ;df</Text>
        </Flex>
      </Flex>
    </div>
  );
}
