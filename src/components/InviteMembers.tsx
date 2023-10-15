import { Flex, Text, Button, IconButton } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function InviteMembers(props: any) {
  const closeForm = () => {
    // Close the form and call the onClose function
    props.onClose();
  };
  return (
    <div>
      <Flex direction="column" className="w-11/12 mx-auto">
        <Flex direction="row" align="start" className="mt-12">
            <IconButton onClick={closeForm} variant="ghost">
                <ChevronLeftIcon width="35" height="35" />
            </IconButton>
            <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                invite members
            </Text>
        </Flex>
        <Text>share your group&apos;s join code</Text>
        <Text>join code goes here</Text>
        <Text>or send a link to your friends!</Text>
        <Button style={{ backgroundColor: '#5B5BD6' }}>Copy share link</Button>
      </Flex>
    </div>
  );
}
