import CreateGroup from '@/components/CreateGroup';
import GroupCard from '@/components/GroupCard';
import NewGroup from '@/components/NewGroup';
import { Flex, Text, Button } from '@radix-ui/themes';
import { useState } from 'react';

export default function Groups() {
  const [showNewGroupForm, setShowNewGroupForm] = useState(false);

  const openNewGroup = () => {
    setShowNewGroupForm(!showNewGroupForm);
  };

  const closeNewGroup = () => {
    setShowNewGroupForm(false); // Function to close the CreateGroup component
  };

  return (
    <div className="font-dm">
      {showNewGroupForm ? (
        <NewGroup onClose={closeNewGroup} />
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
