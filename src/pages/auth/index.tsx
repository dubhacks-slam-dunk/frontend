import Image from 'next/image';
import { Flex, Text, Button } from '@radix-ui/themes';
import { useState } from 'react';
import { login } from '@/utils/auth';
import { addUser, getUserIdFromUid, isUserIdAlreadyExists } from '@/utils/users-helpers';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { auth } from '@/utils/firebase';

export default function Auth() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
    handleLogin();
  }

  const handleLogin = async () => {
    const result = await login();
    console.log(user);
    const userId = await getUserIdFromUid(user!.uid);
    const isUserExists = await isUserIdAlreadyExists(userId);

    if (!isUserExists) {
      addUser(
        result.user.uid,
        result.user.photoURL,
        result.user.displayName.split(' ')[0],
        result.user.displayName.split(' ')[1]
      );
    }
    router.push('/');
  };
  return (
    <Flex className="bg-[#DADCFF] min-h-screen" direction="column" justify="center" align="center">
      <Flex direction="column" justify="center" align="center" gap="2">
        <Image src="/images/logo.png" alt="logo" width="150" height="150" />
        <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
          frienditions
        </Text>
        <Text size="5" weight="bold" className="font-dm" style={{ color: '#5B5BD6' }}>
          keep in touch
        </Text>
        <Button
          size="4"
          variant={isButtonClicked ? "solid" : "outline"}
          mt="9"
          onClick={handleClick}
        >
          <Image src="/images/google.svg" alt="google" width="25" height="25" />
          Sign In With Google
        </Button>
      </Flex>
    </Flex>
  );
}
