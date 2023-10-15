import { Flex, Text, Avatar } from '@radix-ui/themes';

export default function EditorCard(props: any) {
  return (
    <div>
      <Flex
        className="flex-row space-x-3 items-center"
        style={{
          color: '#272962',
          borderColor: '#5B5BD6',
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          backgroundColor: '#DADCFF',
        }}
      >
        <Flex className="flex-col space-y-1">
          <Text size="2">YOUR EDITOR</Text>
          <Text>{props.summary}</Text>
        </Flex>
      </Flex>
    </div>
  );
}
