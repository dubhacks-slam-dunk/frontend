// import { iris9 } from '@radix-ui/colors';

import { Flex, Text, AspectRatio, IconButton } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function CreateGroup(props: any) {
  const closeForm = () => {
    // Close the form and call the onClose function
    props.onClose();
  };
  return (
    <div className="font-dm">
      <Flex direction="column" className="w-11/12 mx-auto">
        <Flex direction="row" className="mx-auto">
          <IconButton onClick={closeForm} variant="ghost" size="3">
            <ChevronLeftIcon width="18" height="18" />
          </IconButton>
          <Text style={{ color: '#5B5BD6' }}>new group</Text>
        </Flex>
        <Text>name this group</Text>
        <Text>last updated {props.date}</Text>
      </Flex>
    </div>
  );
}
