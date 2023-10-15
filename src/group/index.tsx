import { useState } from 'react';
import { Flex, Text, IconButton, Button, TextField } from '@radix-ui/themes';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default function Group(props: any) {
  const closeGroup = () => {};
  // go to url/groups
  return (
    <div className="font-dm">
      <Flex direction="column" className="w-11/12 mx-auto">
        <Flex direction="row" align="start" className="mt-12">
          <IconButton onClick={closeGroup} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            new group
          </Text>
        </Flex>
        <Image
          className="rounded-md"
          src={props.image}
          alt={props.name}
          width="500"
          height="10"
        ></Image>
      </Flex>
    </div>
  );
}
