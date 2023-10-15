import EditionCard from '@/components/EditionCard';
import { getEditionsByEditionId } from '@/utils/editions-helpers';
import { getGroupById } from '@/utils/groups-helpers';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { Avatar, Button, Flex, IconButton, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Group(props: any) {
  const router = useRouter();
  const [group, setGroup] = useState<any>();
  const [editions, setEditions] = useState<any>();

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

  const { group: groupId } = router.query;

  useEffect(() => {
    const fetchGroup = async () => {
      const groupData: any = await getGroupById(groupId);
      const editionIds = groupData?.editions;
      const editionsData = await getEditionsByEditionId(editionIds);
      setEditions(editionsData);

      setGroup(groupData);
    };
    fetchGroup();
  }, [groupId]);

  const closeGroup = () => {
    router.push({ pathname: '../groups' });
  };

  return (
    <div className="font-dm">
      <Flex direction="column" className="w-11/12 mx-auto">
        <Flex direction="row" align="start" className="mt-12">
          <IconButton onClick={closeGroup} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            {group?.name}
          </Text>
        </Flex>
        <Image
          className="rounded-md"
          src={group?.image} // replace with dynamic data
          alt={group?.name} // replace with dynamic data
          width="500"
          height="10"
        ></Image>
        <Flex direction="row" gap="2">
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar fallback="A" />
        </Flex>
        <Button>invite</Button>
        <Button>Write my update</Button>
        <LatestEdition />
        <ArchiveEditions />
      </Flex>
    </div>
  );
}
