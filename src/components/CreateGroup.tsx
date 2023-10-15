import { Flex, Text, AspectRatio, IconButton } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function CreateGroup(props: any) {
  return (
    <div>
      <Flex direction="column" className="w-11/12 mx-auto">
        <Flex direction="row" className="mx-auto">
          <IconButton variant="ghost" size="3">
            <ChevronLeftIcon width="18" height="18" />
          </IconButton>
          <Text>new group</Text>
        </Flex>
        <Text>name this group</Text>
        <Text>last updated {props.date}</Text>
      </Flex>
    </div>
  );
}
