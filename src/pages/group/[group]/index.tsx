import EditionCard from '@/components/EditionCard';
import UpdateForm from '@/components/UpdateForm';
import User from '@/types/User';
import { getEditionsByEditionId } from '@/utils/editions-helpers';
import { getGroupById, getGroupByJoinCode } from '@/utils/groups-helpers';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { Avatar, Button, Flex, IconButton, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Group(props: any) {
  const router = useRouter();
  const { group: groupId } = router.query;

  const [group, setGroup] = useState<any>();
  const [editions, setEditions] = useState<any>();
  const [showNewUpdateForm, setShowNewUpdateForm] = useState(false);
  const currentGroup: any = []; // THIS IS WRONG AND NEEDS TO BE REPLACED WITH DYNAMIC DATA

  // const { group } = router.query;

  const openNewUpdate = () => {
    setShowNewUpdateForm(!showNewUpdateForm);
  };

  const closeNewUpdate = () => {
    setShowNewUpdateForm(false); // Function to close the CreateGroup component
  };

  const closeGroup = () => {};
  // go to url/groups

  const LatestEdition = () => {
    const latestEdition = editions?.reduce((latest: any, edition: any) => {
      return edition.publishDate > latest.publishDate ? edition : latest;
    }, editions[0]);

    return (
      <div>
        <Text>latest edition</Text>
        {latestEdition && (
          <EditionCard
            date={latestEdition.publishDate.toDate().toString()}
            title={latestEdition.title}
            photoentrylist={latestEdition.images}
          />
        )}
      </div>
    );
  };

  const ArchiveEditions = () => {
    const latestEdition = editions?.reduce((latest: any, edition: any) => {
      return edition.publishDate > latest.publishDate ? edition : latest;
    }, editions[0]);

    const otherEditions = editions?.filter((edition: any) => edition.id !== latestEdition?.id);

    return (
      <div>
        <Text>archives</Text>
        {otherEditions?.map((edition: any) => (
          <EditionCard
            key={edition.id}
            date={edition.publishDate.toDate().toString()}
            title={edition.title}
            photoentrylist={edition.images}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchGroup = async () => {
      const groupData: any = await getGroupByJoinCode(groupId as string);
      const editionIds = groupData?.editions;
      const editionsData = await getEditionsByEditionId(editionIds);
      setEditions(editionsData);

      setGroup(groupData);
    };
    if (groupId) {
      fetchGroup();
    }
  }, [groupId]);

  // const closeGroup = () => {
  //   // router.push({ pathname: '../groups' });
  // };

  return (
    <>
      {showNewUpdateForm ? (
        <UpdateForm onClose={closeNewUpdate} editionId={editions[editions.length - 1]}></UpdateForm>
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
                        // src={user.photo ? user.photo : 'A'} // user's google profile photo !!!
                        fallback="A"
                      />
                    ))}
                </Flex>
                <Button
                  size="2"
                  color="iris"
                  variant="soft"
                  onClick={() => {
                    router.push(`/invite/${group}`);
                  }}
                >
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
            <LatestEdition />
            <ArchiveEditions />
          </Flex>
        </div>
      )}
    </>

    // <div className="font-dm">
    //   <Flex direction="column" className="w-11/12 mx-auto">
    //     <Flex direction="row" align="start" className="mt-12">
    //       <IconButton onClick={closeGroup} variant="ghost">
    //         <ChevronLeftIcon width="35" height="35" />
    //       </IconButton>
    //       <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
    //         {group?.name}
    //       </Text>
    //     </Flex>
    //     <Image
    //       className="rounded-md"
    //       src={group?.image} // replace with dynamic data
    //       alt={group?.name} // replace with dynamic data
    //       width="500"
    //       height="10"
    //     ></Image>
    //     <Flex direction="row" gap="2">
    //       <Avatar
    //         src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    //         fallback="A"
    //       />
    //       <Avatar fallback="A" />
    //     </Flex>
    // <Button>invite</Button>
    // <Button>Write my update</Button>

    //       </Flex>
    //     </div>
  );
}
