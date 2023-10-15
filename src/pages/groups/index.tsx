import GroupCard from '@/components/GroupCard';
import { Flex, Text, Button } from '@radix-ui/themes';

export default function Groups() {
  return (
    <div>
      <Flex gap="3" align="stretch">
        <Text>your groups</Text>
        <Button>new group</Button>
      </Flex>
      <Flex direction="column" gap="4">
        <GroupCard
          name="Expawdition"
          image="/images/expawdition.png"
          date="Oct 10, 2023"
        ></GroupCard>
      </Flex>
    </div>
  );
}
