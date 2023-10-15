import { Flex, Text, Button } from '@radix-ui/themes';
import Image from 'next/image';

export default function EmptyHome(props: any) {
    return (
        <div>
            <Flex className="flex-col font-dm w-11/12 mx-aut">
                <Flex direction="row" align="center" className="mt-12">
                    <Image 
                        className="rounded-md"
                        src="/images/frienditions-logo.svg"
                        alt="logo"
                        width="30"
                        height="30">
                    </Image>
                    <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                        frienditions
                    </Text>
                </Flex>
                <Flex className="flex-col">
                    <Text>
                        nothing&apos;s here yet.
                    </Text>
                    <Text>
                        join or create your first group!
                    </Text>
                    <Button style={{ backgroundColor: '#5B5BD6' }}>Find a new group</Button>
                </Flex>
                
            </Flex>
        </div>
        
    );
  }