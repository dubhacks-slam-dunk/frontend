import { Flex, Grid, Text, Button, IconButton, Avatar } from '@radix-ui/themes';
import { ChevronLeftIcon, StarIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default function Update(props: any) {
    const closeForm = () => {
        // Close the form and call the onClose function
        props.onClose();
      };
  return (
    <div>
      <Flex className="flex-col space-y-6 w-11/12 mx-auto">

        <Flex direction="row" align="start" className="mt-12">
            <IconButton onClick={closeForm} variant="ghost">
                <ChevronLeftIcon width="35" height="35" />
            </IconButton>
            <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                update
            </Text>
        </Flex>

        <Flex className="flex-col space-y-4" >
            <Flex direction="row" 
                className="justify-between"
                style={{color: '#272962',
                        borderBottomColor: '#272962',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '1px', }}>
                <Text>Date</Text>
                <Text>Issue no.</Text>
            </Flex>

            <Text size="8" className="font-orelega" style={{ color: '#272962' }}>
                    AI-generated title here
            </Text>
            <Image
                className="rounded-md"
                src={props.image}
                alt={props.name}
                width="500"
                height="10"
            ></Image>

            <Flex direction="column"
                className= "px-3 space-y-2]"
                style={{color: '#272962',
                borderColor: '#5B5BD6',
                borderStyle: 'solid',
                borderWidth: '1px', }}>
                <Text>TL;DR from your editor</Text>
                <Text>Hello</Text>
            </Flex>
        </Flex>


        <Flex className="flex-col space-y-4">
            <Text>things to celebrate</Text>
            <Flex className="flex-col space-y-3">
                <Flex className="flex-row space-x-3 items-center">
                    <Avatar radius="full" fallback="A" />
                    <Flex className="flex-col space-y-1">
                        <Text>Name</Text>
                        <Text>celebration input</Text>
                    </Flex>
                </Flex>
                <Flex className="flex-row space-x-3 items-center">
                    <Avatar radius="full" fallback="A" />
                    <Flex className="flex-col space-y-1">
                        <Text>Name</Text>
                        <Text>celebration input</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

        <Flex className="flex-col space-y-4"
            style={{color: '#272962',
            borderColor: '#5B5BD6',
            borderStyle: 'solid',
            borderWidth: '1px', }}>
            <Text>recent interests</Text>
            <Flex className="flex-row space-x-3">
                <StarIcon></StarIcon>
                <Flex className="flex-col space-y-1">
                    <Text>Name watched</Text>
                    <Text>Movie name</Text>
                </Flex>
            </Flex>
        </Flex>

        <Flex direction="column"
                className= "px-3 space-y-2]"
                style={{color: '#272962',
                borderColor: '#5B5BD6',
                borderStyle: 'solid',
                borderWidth: '1px', }}>
                <Text>TL;DR from your editor</Text>
                <Text>Hello</Text>
        </Flex>

        <Flex className="flex-col space-y-4">
            <Text>photo gallery</Text>
            <Grid columns="2">
                <Image
                    className="rounded-md"
                    src={props.image}
                    alt={props.name}
                    width="500"
                    height="10"
                ></Image>
                <Image
                    className="rounded-md"
                    src={props.image}
                    alt={props.name}
                    width="500"
                    height="10"
                ></Image>
                <Image
                    className="rounded-md"
                    src={props.image}
                    alt={props.name}
                    width="500"
                    height="10"
                ></Image>
                <Image
                    className="rounded-md"
                    src={props.image}
                    alt={props.name}
                    width="500"
                    height="10"
                ></Image>
            </Grid>
        </Flex>

        <Flex className="flex-col space-y-4">
            <Text>what&apos;s the tea?</Text>
            <Flex className="flex-col space-y-3">
                <Flex className="flex-row space-x-3 items-center">
                    <Avatar radius="full" fallback="A" />
                    <Flex className="flex-col space-y-1">
                        <Text>Name</Text>
                        <Text>gossip input</Text>
                    </Flex>
                </Flex>
                <Flex className="flex-row space-x-3 items-center">
                    <Avatar radius="full" fallback="A" />
                    <Flex className="flex-col space-y-1">
                        <Text>Name</Text>
                        <Text>gossip input</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction="column"
                className= "px-3 space-y-2]"
                style={{color: '#272962',
                borderColor: '#5B5BD6',
                borderStyle: 'solid',
                borderWidth: '1px', }}>
                <Text>TL;DR from your editor</Text>
                <Text>Hello</Text>
            </Flex>
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
