import { Flex, Grid, Text, Button, IconButton, Avatar } from '@radix-ui/themes';
import {
  ChevronLeftIcon,
  StarIcon,
  ReaderIcon,
  SpeakerModerateIcon,
  DesktopIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import CelebrateEntry from '@/types/CelebrateEntry';
import UpdateEntryCard from '@/components/UpdateEntryCard';
import EditorCard from '@/components/EditorCard';
import GossipEntry from '@/types/GossipEntry';
import MediaEntry from '@/types/MediaEntry';
import PhotoEntry from '@/types/PhotoEntry';
import { useRouter } from 'next/router';
import MediaRating from '@/components/MediaRating';

export default function Update(props: any) {
  const router = useRouter();
  const celebratelist: CelebrateEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const gossiplist: GossipEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const medialist: MediaEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const photolist: PhotoEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const gptTitle: string = 'AI Title'; // THIS NEEDS TO CONNECT TO DATA
  const gptSummary: string = '2-3 sentences go here'; // THIS NEEDS TO CONNECT TO DATA
  const gptCelebrateSummary: string = 'editor opinion on things to celebrate'; // THIS NEEDS TO CONNECT TO DATA
  const gptMediaSummary: string = 'editor opinion on media'; // THIS NEEDS TO CONNECT TO DATA
  const gptTeaSummary: string = 'editor opinion on tea'; // THIS NEEDS TO CONNECT TO DATA
  const gptGoodbye: string = 'editor goodbye'; // THIS NEEDS TO CONNECT TO DATA
  const issuePic: string = ''; // THIS NEEDS TO CONNECT TO DATA
  const issueNo: string = '1'; // THIS NEEDS TO CONNECT TO DATA
  const issueDate: string = 'Oct 10, 2023'; // THIS NEEDS TO CONNECT TO DATA
  const goBack = () => {
    // GO BACK TO GROUP PAGE
    router.back();
  };

  return (
    <div>
      <Flex className="flex-col space-y-6 w-11/12 mx-auto mt-12 mb-12">
        <Flex direction="row" align="center">
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
            <Text>{issueDate}</Text>
            <Text>Issue no. {issueNo}</Text>
          </Flex>

          <Text size="8" className="font-orelega" style={{ color: '#272962' }}>
            {gptTitle}
          </Text>
          <Image
            className="rounded-md"
            src={issuePic}
            alt={issuePic}
            width="500"
            height="10"
          ></Image>

          <Flex
            className="flex-row space-x-3 items-center"
            style={{
              color: '#272962',
              borderColor: '#5B5BD6',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
              backgroundColor: '#DADCFF',
            }}
          >
            <Flex className="flex-col space-y-1">
              <Text size="1">TL;DR FROM YOUR EDITOR</Text>
              <Text>{gptSummary}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" align="center">
          <Image
            src="/images/frienditions-logo.png"
            alt="frienditions-logo"
            width="30"
            height="30"
          ></Image>
        </Flex>

        <Flex className="flex-col space-y-4">
          <Text
            className="text-center"
            style={{
              color: '#272962',
              fontWeight: 600,
            }}
          >
            things to celebrate
          </Text>
          <Flex className="flex-col space-y-3">
            {celebratelist &&
              celebratelist.map((entry: CelebrateEntry, index: number) => (
                <UpdateEntryCard key={index} user={entry.user} entry={entry.entry} />
              ))}
            <EditorCard summary={gptCelebrateSummary}></EditorCard>
          </Flex>
        </Flex>

        <Flex
          className="flex-col space-y-4"
          style={{
            color: '#272962',
            borderColor: '#5B5BD6',
            borderStyle: 'solid',
            borderRadius: '8px',
            borderWidth: '1px',
          }}
        >
          <Text
            className="text-center"
            style={{
              color: '#272962',
              fontWeight: 600,
              marginTop: 8,
            }}
          >
            recent interests
          </Text>
          <Flex direction="column">
            {/* {medialist &&
              medialist.map((entry: MediaEntry, index: number) => (
                <MediaRating
                  key={index}
                  name={entry.user.firstName}
                  entry={entry.entry}
                  type={entry.type}
                />
              ))} */}
          </Flex>
        </Flex>
        <EditorCard summary={gptMediaSummary}></EditorCard>

        <Flex className="flex-col space-y-4">
          <Text
            className="text-center"
            style={{
              color: '#272962',
              fontWeight: 600,
            }}
          >
            photo gallery
          </Text>
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
          <Text
            className="text-center"
            style={{
              color: '#272962',
              fontWeight: 600,
            }}
          >
            what&apos;s the tea?
          </Text>
          <Flex className="flex-col space-y-3">
            {gossiplist &&
              gossiplist.map((entry: GossipEntry, index: number) => (
                <UpdateEntryCard key={index} user={entry.user} entry={entry.entry} />
              ))}
          </Flex>
          <EditorCard summary={gptTeaSummary}></EditorCard>
        </Flex>

        <Flex className="flex-col space-y-4">
          <Text>{gptGoodbye}</Text>
        </Flex>

        <Button style={{ backgroundColor: '#5B5BD6' }}>Done</Button>
      </Flex>
    </div>
  );
}
