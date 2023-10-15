// import { iris9 } from '@radix-ui/colors';
import { useState } from 'react';
import { Flex, Text, AspectRatio, IconButton, Button, TextField } from '@radix-ui/themes';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import CreateGroup from './CreateGroup';

export default function NewGroup(props: any) {
  const [showCreateGroupForm, setShowCreateGroupForm] = useState(false);
  const openCreateGroup = () => {
    setShowCreateGroupForm(true);
  };

  const closeCreateGroup = () => {
    setShowCreateGroupForm(false);
  };
  const closeForm = () => {
    // Close the form and call the onClose function
    props.onClose();
  };
  return (
    <div className="font-dm">
      {showCreateGroupForm ? (
        <CreateGroup onClose={closeCreateGroup} />
      ) : (
        <div className="font-dm">
          <Flex direction="column" className="w-11/12 mx-auto">
            <Flex direction="row" align="start" className="mt-12">
              <IconButton onClick={closeForm} variant="ghost">
                <ChevronLeftIcon width="35" height="35" />
              </IconButton>
              <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                new group
              </Text>
            </Flex>
            <Flex direction="column" className="mt-30">
              <Text>create a new group</Text>
              <Button onClick={openCreateGroup} style={{ backgroundColor: '#5B5BD6' }}>
                Create new group
              </Button>
              <Text>OR</Text>
              <Text>enter a group join code</Text>
              <Button style={{ backgroundColor: '#5B5BD6' }}>Join</Button>
              <TextField.Root className="mt-2">
                <TextField.Slot></TextField.Slot>
                <TextField.Input className="m-1 mx-2" placeholder="enter code (ex. ABCD)" />
              </TextField.Root>
            </Flex>
          </Flex>
        </div>
      )}
    </div>
  );
}
