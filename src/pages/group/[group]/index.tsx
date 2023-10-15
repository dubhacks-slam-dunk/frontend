import { useState } from 'react';
import { Flex, Text, IconButton, Button, TextField, Avatar } from '@radix-ui/themes';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import EditionCard from '@/components/EditionCard';
import UpdateForm from '@/components/UpdateForm';
import { useRouter } from 'next/router';
import User from '@/types/User';

export default function Group(props: any) {
  const [showNewUpdateForm, setShowNewUpdateForm] = useState(false);
  const currentGroup: any = []; // THIS IS WRONG AND NEEDS TO BE REPLACED WITH DYNAMIC DATA

  const router = useRouter();
  const { group } = router.query;

  const openNewUpdate = () => {
    setShowNewUpdateForm(!showNewUpdateForm);
  };

  const closeNewUpdate = () => {
    setShowNewUpdateForm(false); // Function to close the CreateGroup component
  };

  const closeGroup = () => {};
  // go to url/groups
  return (
    <>
      {showNewUpdateForm ? (
        <UpdateForm onClose={closeNewUpdate}></UpdateForm>
      ) : (
        <div className="font-dm">
          <Flex direction="column" className="w-11/12 mx-auto mt-12 mb-12 gap-4">
            <Flex direction="row" align="center">
              <IconButton onClick={closeGroup} variant="ghost">
                <ChevronLeftIcon width="35" height="35" />
              </IconButton>
              <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                group
              </Text>
            </Flex>
            <Image
              className="rounded-md"
              src="/images/expawdition.png" // {currentGroup.image} replace with dynamic data
              alt="" // {currentGroup.name} replace with dynamic data
              width="500"
              height="10"
            ></Image>
            <Flex direction="column" className="gap-2">
              <Text size="8" className="font-orelega" style={{ color: '#272962' }}>
                expawdition
              </Text>
              <Flex direction="row" justify="between">
                <Flex direction="row" className="gap-4">
                  {currentGroup.users &&
                    currentGroup.users.map((user: User, index: number) => (
                      <Avatar
                        key={index}
                        // src={user.image ? user.image : "A"} // user's google profile photo !!!
                        fallback="A"
                      />
                  ))}
                  <Avatar
                    radius="full"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                  />
                  <Avatar
                    radius="full"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                  />
                  <Avatar
                    radius="full"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                  />
                </Flex>
                <Button size="2" color="iris" variant="soft" onClick={() => {router.push(`/invite/${group}`)}}>
                  invite
                </Button>
              </Flex>
            </Flex>
            <Button size="3" onClick={openNewUpdate}>
              Write my update
            </Button>
            <Text size="6" weight="bold" className="font-dm">
              latest edition
            </Text>
            <EditionCard
              date="" // date of edition
              title="" // title of edition
              photoentrylist="" // list of photo entries
            ></EditionCard>
            <Text size="6" weight="bold" className="font-dm">
              archives
            </Text>
          </Flex>
        </div>
      )}
    </>
  );
}
