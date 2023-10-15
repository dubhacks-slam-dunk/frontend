import { Flex, Text, Button } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function LandingPage(props: any) {
  const closeForm = () => {
    // Close the form and call the onClose function
    props.onClose();
  };
  return (
    <div style={{backgroundColor: "#DADCFF"}}>
      <Flex direction="column" className="w-11/12 mx-auto space-y-8">
        <Flex className="flex-col space-y-2">
            <Image
                src={"/images/frienditions-logo.svg"}
                alt={"logo"}
                width="150"
                height="150">  
            </Image>
            <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                frienditions
            </Text>
            <Text>keep in touch</Text>
        </Flex>
        
        
        <Button style={{ backgroundColor: '#5B5BD6' }}>Sign in with Google</Button>
      </Flex>
    </div>
  );
}
