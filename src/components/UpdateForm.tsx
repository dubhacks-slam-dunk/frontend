import { uploadImage } from '@/utils/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { Button, Flex, IconButton, Select, Text, TextArea, TextField } from '@radix-ui/themes';
import { useState } from 'react';

export default function UpdateForm(props: any) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const closeForm = () => {
    // Close the form and call the onClose function
    props.onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      return;
    }

    try {
      const imageUrl = await uploadImage(imageFile);
      console.log(imageUrl);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  return (
    <div>
      <Flex direction="column" className="w-11/12 mx-auto space-y-5 mt-12 mb-12">
        <Flex direction="row" align="start">
          <IconButton onClick={closeForm} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            give an update
          </Text>
        </Flex>

        <Flex className="flex-col space-y-2">
          <Text>it&apos;s your turn to give an update!</Text>
          <Text>
            answer each of the following prompts to be featured in your next group update.
          </Text>
        </Flex>

        <Flex className="flex-col space-y-2">
          <Text>1. things to celebrate</Text>
          <Text>name a small victory or a major win that you&apos;d like to share!</Text>
          <TextArea size="2" placeholder="your response here"></TextArea>
        </Flex>

        <Flex className="flex-col space-y-2">
          <Text>2. a recent interest</Text>
          <Text>tell us what&apos;s your most recent media binge. </Text>
          <Select.Root>
            <Select.Trigger placeholder="select..." />
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
          <Flex
            className="m-1"
            direction="column"
            style={{
              color: '#5B5BD6',
              borderColor: '#5B5BD6',
              borderStyle: 'dashed',
              borderWidth: 2,
              borderRadius: 4,
              padding: 20,
            }}
          >
            <label className="px-4 py-2 flex items-center justify-center">
              {imageURL ? (
                <img
                  src={imageURL}
                  alt="Uploaded Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                'Add a Photo'
              )}
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </Flex>
        </Flex>

        <Flex className="flex-col space-y-2">
          <Text>4. spill the tea</Text>
          <Text>finally, tell us a juicy piece of gossip!</Text>
          <TextArea size="2" placeholder="your response here"></TextArea>
        </Flex>

        <Button onClick={handleSubmit} style={{ backgroundColor: '#5B5BD6' }}>
          Submit my update!
        </Button>
      </Flex>
    </div>
  );
}
