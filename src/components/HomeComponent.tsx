import { Group } from '@/types/Group';
import { getEditionsByEditionId } from '@/utils/editions-helpers';
import { auth } from '@/utils/firebase';
import { getAllGroupsById } from '@/utils/groups-helpers';
import { getGroupIdsFromUser, getUserIdFromUid } from '@/utils/users-helpers';
import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import HomeEditionCard from './HomeEditionCard';
import HomeGroupCard from './HomeGroupCard';

export default function HomeComponent(props: any) {
  const [user, loading, error] = useAuthState(auth);
  // const { user } = useAuth();
  const [groups, setGroups] = useState<any>([]);
  const [editions, setEditions] = useState<any>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const userId = await getUserIdFromUid(user?.uid as string);
      const groupIds = await getGroupIdsFromUser(userId);

      const groupsData: any = await getAllGroupsById(groupIds);

      const tempEditions: any = [];
      for (const groupData of groupsData) {
        console.log(groupData);

        const editionIds = groupData.data.editions;
        console.log(editionIds);

        const editionsData = await getEditionsByEditionId(editionIds);
        tempEditions.push(editionsData);
        console.log(tempEditions);
      }
      setGroups(groupsData);
      setEditions(tempEditions);
      console.log(editions);
    };

    if (user) {
      fetchGroups();
    }
  }, []);

  const grouplist: Group[] = []; // CHANGE TO DYNAMIC DATA
  return (
    <div>
      <Flex className="flex-col font-dm w-11/12 mx-auto mt-12 mb-12">
        <Flex direction="row" align="center">
          <Image
            className="rounded-md mr-2"
            src="/images/frienditions-logo.png"
            alt="logo"
            width="30"
            height="30"
          ></Image>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            frienditions
          </Text>
        </Flex>
        <Flex className="flex-col">
          <Text size="8" className="font-orelega" style={{ color: '#272962' }}>
            time to update!
          </Text>
          <Flex direction="row" className="flex flex-row space-x-4 overflow-x-auto">
            {groups &&
              groups.map((group: any, index: number) => {
                return (
                  <HomeGroupCard
                    key={index}
                    name={group.data.name}
                    image={group.data.image}
                    className="min-w-0"
                  ></HomeGroupCard>
                );
              })}
            <HomeGroupCard
              name="expawdition"
              image="/images/expawdition.png"
              className="min-w-0"
            ></HomeGroupCard>
            <HomeGroupCard
              name="HTN and friends"
              image="/images/expawdition.png"
              className="min-w-0"
            ></HomeGroupCard>
            <HomeGroupCard
              name="LA"
              image="/images/expawdition.png"
              className="min-w-0"
            ></HomeGroupCard>
          </Flex>
          <Text size="8" className="font-orelega" style={{ color: '#272962' }}>
            what&apos;s new
          </Text>
          {editions &&
            editions.forEach((edition: any) =>
              edition.map((ed: any, index: number) => {
                return (
                  <HomeEditionCard
                    key={index}
                    date={ed.publishDate}
                    title={ed.title}
                    name={ed.groupName}
                    photoentrylist={ed.photoEntries}
                  ></HomeEditionCard>
                );
              })
            )}
        </Flex>
      </Flex>
    </div>
  );
}
