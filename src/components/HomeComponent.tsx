import { Flex, Text, Button } from '@radix-ui/themes';
import Image from 'next/image';
import HomeGroupCard from './HomeGroupCard';
import { Group } from '@/types/Group';
import HomeEditionCard from './HomeEditionCard';

export default function HomeComponent(props: any) {
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
            {/* {grouplist &&
              grouplist.map((group: Group, index: number) => (
                <HomeGroupCard key={index} name={group.name} image={group.image} className="min-w-0"></HomeGroupCard>
              ))} */}
            <HomeGroupCard
              name="test"
              image="/images/expawdition.png"
              className="min-w-0"
            ></HomeGroupCard>
            <HomeGroupCard
              name="test"
              image="/images/expawdition.png"
              className="min-w-0"
            ></HomeGroupCard>
            <HomeGroupCard
              name="test"
              image="/images/expawdition.png"
              className="min-w-0"
            ></HomeGroupCard>
          </Flex>
          <Text size="8" className="font-orelega" style={{ color: '#272962' }}>
            what&apos;s new
          </Text>
          {grouplist &&
            grouplist.map((group: Group, index: number) => (
              <HomeEditionCard
                key={index}
                date={group.editions[0].publishDate}
                title={group.editions[0].title}
                name={group.name}
                photoentrylist={group.editions[0].photoEntries}
              ></HomeEditionCard>
            ))}
        </Flex>
      </Flex>
    </div>
  );
}
