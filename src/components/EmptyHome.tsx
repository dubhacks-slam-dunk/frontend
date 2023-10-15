import { Flex, Text, Button } from '@radix-ui/themes';
import Image from 'next/image';

export default function EmptyHome(props: any) {
    return (
        <div>
            <Flex>
                <Flex direction="row" align="start" className="mt-12">
                    <Image 
                        className="rounded-md"
                        src="/images/frienditions-logo.svg"
                        alt="logo"
                        width="30"
                        height="30">
                    </Image>
                <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                    give an update
                </Text>
        </Flex>
                <Text>

                </Text>
            </Flex>
        </div>
        
    );
  }