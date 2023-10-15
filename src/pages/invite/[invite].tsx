import { Flex, Text, Button, IconButton } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Invite(props: any) {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();
  const { invite } = router.query;

  const closeForm = () => {
    router.back();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(invite as string);
      setIsCopied(true);
    } catch (err) {
      setIsCopied(false);
      console.error('Failed to copy text', err);
    }
  };

  return (
    <div>
      <Flex
        direction="column"
        className="w-11/12 mx-auto mt-12 mb-12 h-screen flex-col justify-between"
      >
        <Flex direction="row" align="center">
          <IconButton onClick={closeForm} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            invite members
          </Text>
        </Flex>
        <Flex className="flex-col justify-center items-center mt-[60%] gap-8">
          <Text size="5" weight="bold" className="font-dm" style={{ color: '#272962' }}>
            share your group&apos;s join code
          </Text>
          <Text size="9" className="font-orelega" style={{ color: '#272962' }}>
            {invite}
          </Text>
          <Button
            className="w-[90%]"
            size="4"
            style={{ backgroundColor: isCopied ? '#272962' : '#5B5BD6' }}
            onClick={copyToClipboard}
          >
            {isCopied ? 'copied to clipboard!' : 'copy share code'}
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
