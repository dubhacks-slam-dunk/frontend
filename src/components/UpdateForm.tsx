import { Input } from 'postcss';
import { Flex, Text, Button, Select, TextArea, TextField, IconButton } from '@radix-ui/themes';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function UpdateForm(props: any) {
    const closeForm = () => {
        // Close the form and call the onClose function
        props.onClose();
      };
  return (
    <div>
      <Flex direction="column" className="w-11/12 mx-auto space-y-5">
        <Flex direction="row" align="start" className="mt-12">
            <IconButton onClick={closeForm} variant="ghost">
                <ChevronLeftIcon width="35" height="35" />
            </IconButton>
            <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
                give an update
            </Text>
        </Flex>

        <Flex className="flex-col space-y-2">
            <Text>it’s your turn to give an update!</Text>
            <Text>answer each of the following prompts to be featured in your next group update.</Text>
        </Flex>
        
        <Flex className="flex-col space-y-2">
            <Text>1. things to celebrate</Text>
            <Text>name a small victory or a major win that you’d like to share!</Text>
            <TextArea
                size="2"
                placeholder="your response here" 
            ></TextArea>
        </Flex>

        <Flex className="flex-col space-y-2">
            <Text>2. a recent interest</Text>
            <Text>tell us what’s your most recent media binge. </Text>
            <Select.Root>
            <Select.Trigger placeholder="select..."/>
            <Select.Content>
                <Select.Item value="book">book</Select.Item>
                <Select.Item value="movie">movie</Select.Item>
                <Select.Item value="show">show</Select.Item>
                <Select.Item value="song">song</Select.Item>
                <Select.Item value="podcast">podcast</Select.Item>
            </Select.Content>
            </Select.Root>
            <TextField.Root>
                <TextField.Input placeholder="your response here" />
            </TextField.Root>
        </Flex>

        <Flex className="flex-col space-y-2">
            <Text>3. add a photo</Text>
            <Text>share a picture from life lately. </Text>
        </Flex>
        
        <Flex className="flex-col space-y-2">
            <Text>4. spill the tea</Text>
            <Text>finally, tell us a juicy piece of gossip!</Text>
            <TextArea
                size="2"
                placeholder="your response here" 
            ></TextArea>
        </Flex>
        
        <Button style={{ backgroundColor: '#5B5BD6' }}>Submit my update!</Button>

      </Flex>
    </div>
  );
}
