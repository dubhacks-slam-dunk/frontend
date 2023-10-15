import GroupCard from '@/components/GroupCard';
import NewGroup from '@/components/NewGroup';
import { getAllGroupsById } from '@/utils/groups-helpers';
import { getGroupIdsFromUser } from '@/utils/users-helpers';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

const userId = 'ch6pkblCra5J8YIBM58R';

export default function Groups() {
  const [showNewGroupForm, setShowNewGroupForm] = useState(false);
  const [groups, setGroups] = useState<any>();

  useEffect(() => {
    const getAllUserGroupsFromFirebase = async () => {
      const groupIds = await getGroupIdsFromUser(userId);
      console.log('🚀 ~ file: index.tsx:15 ~ getAllUserGroupsFromFirebase ~ groupIds:', groupIds);
      const groupsData = await getAllGroupsById(groupIds);
      setGroups(groupsData);
    };
  }, []);

  const openNewGroup = () => {
    setShowNewGroupForm(!showNewGroupForm);
  };

  const closeNewGroup = () => {
    setShowNewGroupForm(false); // Function to close the CreateGroup component
  };

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
            <GroupCard
              name="Expawdition"
              image="/images/expawdition.png"
              date="Oct 10, 2023"
            ></GroupCard>
            <GroupCard
              name="Expawdition"
              image="/images/expawdition.png"
              date="Oct 10, 2023"
            ></GroupCard>
            <GroupCard
              name="Expawdition"
              image="/images/expawdition.png"
              date="Oct 10, 2023"
            ></GroupCard>
          </Flex>{' '}
        </div>
      )}
    </div>
  );
}
