import EditorCard from '@/components/EditorCard';
import UpdateEntryCard from '@/components/UpdateEntryCard';
import CelebrateEntry from '@/types/CelebrateEntry';
import GossipEntry from '@/types/GossipEntry';
import { getEditionById } from '@/utils/editions-helpers';
import { getGroupByJoinCode } from '@/utils/groups-helpers';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { Button, Flex, Grid, IconButton, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Update(props: any) {
  const [group, setGroup] = useState<any>();
  const [celebratelist, setCelebrateList] = useState<any>([]);
  const [gossiplist, setGossipList] = useState<any>([]);
  const [medialist, setMediaList] = useState<any>([]);
  const [photolist, setPhotoList] = useState<any>([]);

  const router = useRouter();
  const { group: groupId, update: updateId } = router.query;

  useEffect(() => {
    const fetchGroup = async () => {
      const group: any = await getGroupByJoinCode(groupId as string);
      const editionId = group?.editions[0];

      const edition: any = await getEditionById(editionId);
      console.log(edition);
      setPhotoList(edition.images);

      setGroup(group);
    };

    fetchGroup();
  }, []);

  // const celebratelist: CelebrateEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  // const gossiplist: GossipEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  // const medialist: MediaEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  // const photolist: PhotoEntry[] = []; // THIS NEEDS TO CONNECT TO DATA
  const gptTitle: string = 'DubHacks Weekend!'; // THIS NEEDS TO CONNECT TO DATA
  const gptSummary: string = `What a week! Alex snagged some shuteye while the team hustled, Taryn's tech-tribe crushed code, and Melvin had a pizza party for one. The rumor mill buzzed: Alex's snooze-fest, Taryn's boy blunder, and Melvin's bowling betrayal. They found solace in work watch, doc dives, and melody masks.`; // THIS NEEDS TO CONNECT TO DATA
  const gptCelebrateSummary: string = `Friends, this week, Alex slammed a crucial home run in the Sleep League! After a nerve-wracking, sleepless inning, she's finally notched up some zees! Her monumental pillow touchdown marks an unparalleled slumber triumph! Victory snooze bells are ringing!`; // THIS NEEDS TO CONNECT TO DATA
  const gptMediaSummary: string = `And here's Melvin, folks, blocking out the noise like a pro! He's tuned into his personal symphony, using the music to push past the cacophony. This is auditory defense at its finest, folks!`; // THIS NEEDS TO CONNECT TO DATA
  const gptTeaSummary: string = `In an unforeseen twist, Taryn faces yet another matchup against the notorious Boy Brigade! An unexpected play leaves scores unsettled. Will Taryn learn the opponent's strategies or will she be blindsided, yet again? Stay tuned, sports fans!`; // THIS NEEDS TO CONNECT TO DATA
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
              photolist.map((entry: any, index: number) => (
                <Image
                  key={index}
                  className="rounded-md"
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/friendition-d7dde.appspot.com/o/images%2FIMG_3963%201.png?alt=media&token=7ee6e7bc-742b-4d83-b815-965557e9bd8f'
                  }
                  alt={'photo'}
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

        <Button onClick={goBack} style={{ backgroundColor: '#5B5BD6' }}>
          Done
        </Button>
      </Flex>
    </div>
  );
}
