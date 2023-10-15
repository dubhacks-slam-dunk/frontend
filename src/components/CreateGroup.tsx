import { Flex, Text, Box, IconButton } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function CreateGroup(props: any) {
  const closeForm = () => {
    // Close the form and call the onClose function
    props.onClose();
  };
  return (
    <div className="font-dm w-11/12 mx-aut">
      <Flex direction="column" className="w-11/12 mx-auto">
        <Flex direction="row" align="start" className="mt-12">
          <IconButton onClick={closeForm} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            create new group
          </Text>
        </Flex>
        <Flex
          direction="column"
          style={{
            color: '#5B5BD6',
            borderBlockColor: '#5B5BD6',
            borderBlockStyle: 'dashed',
            borderBlockWidth: 2,
            borderRadius: 8,
            padding: 20,
          }}
        >
          <input type="file"></input>
        </Flex>

        <Text>name this group</Text>
        <Text>last updated {props.date}</Text>
      </Flex>
    </div>
  );
}
