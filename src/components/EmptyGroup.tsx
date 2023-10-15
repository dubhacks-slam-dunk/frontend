import { Flex, Avatar, Text, Button, IconButton } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function EmptyGroup(props: any) {
  const closeForm = () => {
    // Close the form and call the onClose function
    props.onClose();
  };
  return (
    <div>
      <Flex direction="column" className="w-11/12 mx-auto space-y-5 mt-12 mb-12">
        <Flex direction="row" align="start">
            <IconButton onClick={closeForm} variant="ghost">
                <ChevronLeftIcon width="35" height="35" />
            </IconButton>
            <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                group
            </Text>
        </Flex>


        <Flex className="flex-col space-y-2">
            <Image
            className="rounded-md"
            src={props.image}
            alt={props.name}
            width="500"
            height="10"
            ></Image>
            <Flex className="flex-row">
                <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }} >expawdition</Text>
                <Button size="1"  style={{backgroundColor: '#DADCFF' }}>
                    Edit profile
                </Button>
            </Flex>
            <Flex className="flex-row">
                <Avatar radius="full" fallback="A" />
                <Avatar radius="full" fallback="A" />
                <Avatar radius="full" fallback="A" />
                <Avatar radius="full" fallback="A" />
            </Flex>
            
            <Text>nothing’s here yet. invite your first members and start writing your first update! </Text>
        </Flex>

        
        <Button style={{ backgroundColor: '#5B5BD6' }}>Invite members</Button>
        <Button style={{ backgroundColor: '#5B5BD6' }}>Write my update</Button>

      </Flex>
    </div>
  );
}
