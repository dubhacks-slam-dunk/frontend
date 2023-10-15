import GroupCard from '@/components/GroupCard';
import NewGroup from '@/components/NewGroup';
import { getAllGroupsById } from '@/utils/groups-helpers';
import { getGroupIdsFromUser } from '@/utils/users-helpers';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const userId = 'ch6pkblCra5J8YIBM58R';

export default function Groups() {
  const [showNewGroupForm, setShowNewGroupForm] = useState(false);
  const [groups, setGroups] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const getAllUserGroupsFromFirebase = async () => {
      const groupIds = await getGroupIdsFromUser(userId);
      console.log('🚀 ~ file: index.tsx:15 ~ getAllUserGroupsFromFirebase ~ groupIds:', groupIds);
      const groupsData = await getAllGroupsById(groupIds);
      console.log(groupsData);

      setGroups(groupsData);
    };

    getAllUserGroupsFromFirebase();
  }, []);

  const openNewGroup = () => {
    setShowNewGroupForm(!showNewGroupForm);
  };

  const closeNewGroup = () => {
    setShowNewGroupForm(false); // Function to close the CreateGroup component
  };

  const groupCards = groups?.map((data: any, index: number) => (
    <GroupCard
      id={data.id}
      key={`${data.id}-${index}`} // Make sure to include a unique key when mapping React components
      name={data.data.name}
      image={data.data.image}
      date={'No editions created yet!'}
    />
  ));

  return (
    <div className="font-dm">
      {showNewGroupForm ? (
        <NewGroup onCloseNewGroupForm={closeNewGroup} />
      ) : (
        <div>
          <Flex
            direction="row"
            justify="between"
            align="center"
            className="w-11/12 mx-auto mt-12 mb-4"
          >
            <Text size="8" className="font-orelega">
              your groups
            </Text>
            <Button onClick={openNewGroup}>new group</Button>
          </Flex>
          <Flex direction="column" gap="4" className="w-11/12 mx-auto">
            {groups && groupCards}
          </Flex>{' '}
        </div>
      )}
    </div>
  );
}
