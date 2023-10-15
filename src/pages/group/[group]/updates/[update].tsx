import { Flex, Grid, Text, Button, IconButton, Avatar } from '@radix-ui/themes';
import { ChevronLeftIcon, StarIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import CelebrateEntry from '@/types/CelebrateEntry';
import UpdateEntryCard from '@/components/UpdateEntryCard';
import EditorCard from '@/components/EditorCard';
import GossipEntry from '@/types/GossipEntry';
import PhotoEntry from '@/types/PhotoEntry';

export default function Update(props: any) {
  const celebratelist: CelebrateEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const gossiplist: GossipEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const photolist: PhotoEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const goBack = () => {
    // GO BACK TO GROUP PAGE
  };
  return (
    <div>
      <Flex className="flex-col space-y-6 w-11/12 mx-auto">
        <Flex direction="row" align="start" className="mt-12">
          <IconButton onClick={goBack} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            edition
          </Text>
        </Flex>

        <Flex className="flex-col space-y-4">
          <Flex
            direction="row"
            justify="between"
            style={{
              color: '#272962',
              borderBottomColor: '#272962',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
            }}
          >
            <Text>Date</Text>
            <Text>Issue no.</Text>
          </Flex>

          <Text size="8" className="font-orelega" style={{ color: '#272962' }}>
            [AI title]
          </Text>
          <Image
            className="rounded-md"
            src="" // first picture in PhotoEntry[]
            alt="" // first caption in PhotoEntry[] or nothing ""
            width="500"
            height="10"
          ></Image>

          <Flex
            direction="column"
            className="px-3 space-y-2]"
            style={{
              color: '#272962',
              borderColor: '#5B5BD6',
              borderStyle: 'solid',
              borderWidth: '1px',
            }}
          >
            <Text>TL;DR from your editor</Text>
            <Text>Hello</Text>
          </Flex>
        </Flex>

        <Flex className="flex-col space-y-4">
          <Text>things to celebrate</Text>
          <Flex className="flex-col space-y-3">
            {celebratelist &&
              celebratelist.map((entry: CelebrateEntry, index: number) => (
                <UpdateEntryCard key={index} user={entry.user} entry={entry.entry} />
              ))}
            <UpdateEntryCard />
            <UpdateEntryCard />
            <UpdateEntryCard />
            <EditorCard
              summary="taryn got played too many times" // DYNAMIC DATA
            ></EditorCard>
          </Flex>
        </Flex>

        <Flex
          className="flex-col space-y-4"
          style={{
            color: '#272962',
            borderColor: '#5B5BD6',
            borderStyle: 'solid',
            borderWidth: '1px',
          }}
        >
          <Text>recent interests</Text>
          <Flex className="flex-row space-x-3">
            <StarIcon></StarIcon>
            <Flex className="flex-col space-y-1">
              <Text>Name watched</Text>
              <Text>Movie name</Text>
            </Flex>
          </Flex>
        </Flex>
        <EditorCard
          summary="thoughts on recent media" // DYNAMIC DATA
        ></EditorCard>

        <Flex
          direction="column"
          className="px-3 space-y-2]"
          style={{
            color: '#272962',
            borderColor: '#5B5BD6',
            borderStyle: 'solid',
            borderWidth: '1px',
          }}
        >
          <Text>TL;DR from your editor</Text>
          <Text>Hello</Text>
        </Flex>

        <Flex className="flex-col space-y-4">
          <Text>photo gallery</Text>
          <Grid columns="2">
            {photolist &&
              photolist.map((entry: PhotoEntry, index: number) => (
                <Image
                  key={index}
                  className="rounded-md"
                  src={entry.entry}
                  alt={entry.user.firstName}
                  width="500"
                  height="10"
                ></Image>
              ))}
          </Grid>
        </Flex>

        <Flex className="flex-col space-y-3">
          <Text>what&apos;s the tea?</Text>
          <Flex className="flex-col space-y-3">
            {gossiplist &&
              gossiplist.map((entry: GossipEntry, index: number) => (
                <UpdateEntryCard key={index} user={entry.user} entry={entry.entry} />
              ))}
            <UpdateEntryCard />
            <UpdateEntryCard />
            <UpdateEntryCard />
          </Flex>
          <EditorCard
            summary="thoughts on the tea" // DYNAMIC DATA
          ></EditorCard>
        </Flex>

        <Flex className="flex-col space-y-4">
          <Text>that&apos;s all, folks!</Text>
          <Text>Thanks for reading this update. Looking forward to the next issue!</Text>
        </Flex>

        <Button style={{ backgroundColor: '#5B5BD6' }}>Done</Button>
      </Flex>
    </div>
  );
}
