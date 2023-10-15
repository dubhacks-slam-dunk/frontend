import { useState } from 'react';
import { Flex, Text, IconButton, Button, TextField, Avatar } from '@radix-ui/themes';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import EditionCard from '@/components/EditionCard';
import User from '@/types/User';
// import Group from '@/types/Group';

export default function Group(props: any) {
  const group: any = []; // THIS IS WRONG AND NEEDS TO BE REPLACED WITH DYNAMIC DATA
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
            [group name]
          </Text>
        </Flex>
        <Image
          className="rounded-md"
          src="/images/expawdition.png" // {group.image} replace with dynamic data
          alt="" // {group.name} replace with dynamic data
          width="500"
          height="10"
        ></Image>
        <Flex direction="row" gap="2">
          {group.users &&
            group.users.map((user: User, index: number) => (
              <Avatar
                key={index}
                // src={user.image ? user.image : "A"} // user's google profile photo !!!
                fallback="A"
              />
            ))}
        </Flex>
        <Button>invite</Button>
        <Button>Write my update</Button>
        <Text>latest edition</Text>
        <EditionCard
          date="" // date of edition
          title="" // title of edition
          photoentrylist="" // list of photo entries
        ></EditionCard>
        <Text>archives</Text>
      </Flex>
    </div>
  );
}
