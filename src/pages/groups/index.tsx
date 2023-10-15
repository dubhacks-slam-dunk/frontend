import CreateGroup from '@/components/CreateGroup';
import GroupCard from '@/components/GroupCard';
import { Flex, Text, Button } from '@radix-ui/themes';
import { useState } from 'react';

export default function Groups() {
  const [showNewGroupForm, setShowNewGroupForm] = useState(false);

  const createGroup = () => {
    setShowNewGroupForm(!showNewGroupForm);
  };
  return (
    <div className="font-dm">
      {showNewGroupForm ? (
        <CreateGroup />
      ) : (
        <div>
          <Flex
            direction="row"
            justify="between"
            align="center"
            className="w-11/12 mx-auto mt-12 mb-4"
          >
            <Text size="6" className="font-orelega">
              your groups
            </Text>
            <Button onClick={createGroup}>new group</Button>
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
