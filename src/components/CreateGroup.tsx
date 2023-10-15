import { Flex, Text, TextField, IconButton, Button } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function CreateGroup(props: any) {
  const closeForm = () => {
    // Close the form and call the onClose function
    props.onCloseCreateGroupForm();
  };
  return (
    <div className="font-dm w-11/12 mx-auto">
      <Flex direction="column" className="mx-auto">
        <Flex direction="row" align="start" className="mt-12">
          <IconButton onClick={closeForm} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            create new group
          </Text>
        </Flex>
        <Flex
          className="m-1"
          direction="column"
          style={{
            color: '#5B5BD6',
            borderBlockColor: '#5B5BD6',
            borderBlockStyle: 'dashed',
            borderBlockWidth: 2,
            borderRadius: 4,
            padding: 20,
          }}
        >
          <label className="px-4 py-2 flex items-center justify-center">
            Add a Photo
            <input type="file" className="hidden" />
          </label>
        </Flex>

        <Text>name this group</Text>
        <TextField.Root className="mt-2 mb-2">
          <TextField.Slot></TextField.Slot>
          <TextField.Input className="m-1 mx-2" placeholder="group name" />
        </TextField.Root>
        <Text>how often do you want updates?</Text>
        <Flex direction="row" justify="between">
          <Button style={{ backgroundColor: '#5B5BD6' }}>Every week</Button>
          <Button variant="outline">Every two weeks</Button>
          <Button variant="outline">Every month</Button>
        </Flex>
        <Text>pick an editor</Text>
        <Text>
          the editor is your newsletter’s unique voice! they’ll give a summary of all the highlights
          at the start of every issue.
        </Text>
        <Button style={{ backgroundColor: '#5B5BD6' }}>Create group</Button>
      </Flex>
    </div>
  );
}
