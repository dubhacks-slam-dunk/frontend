import { Flex, Text, TextField, IconButton, Button, Grid } from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { uploadImage } from '@/utils/image';
import { addGroup } from '@/utils/groups-helpers';

export default function CreateGroup(props: any) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [groupName, setGroupName] = useState<string | null>(null);
  const [editor, setEditor] = useState<string | null>(null);

  const closeForm = () => {
    // Close the form and call the onClose function
    props.onCloseCreateGroupForm();
  };

  const handleEditorClick = (selectedEditor: string) => {
    setEditor(selectedEditor);
  };

  // Handling file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleSubmit = async () => {
    if (!imageFile || !groupName || !editor) {
      return;
    }
    try {
      const imageUrl = await uploadImage(imageFile);
      const output = JSON.stringify({ image: imageUrl, name: groupName, editor });
      addGroup(output, );
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <div className="font-dm w-11/12 mx-auto">
      <Flex direction="column" className="mx-auto mt-12 mb-12">
        <Flex direction="row" align="center">
          <IconButton onClick={closeForm} variant="ghost">
            <ChevronLeftIcon width="35" height="35" />
          </IconButton>
          <Text size="8" className="font-orelega" style={{ color: '#5B5BD6' }}>
            create new group
          </Text>
        </Flex>
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

        <Text>name this group</Text>
        <TextField.Root className="mt-2 mb-2">
          <TextField.Slot></TextField.Slot>
          <TextField.Input
            className="m-1 mx-2"
            placeholder="group name"
            onChange={e => setGroupName(e.target.value)}
          />
        </TextField.Root>
        <Text>how often do you want updates?</Text>
        <Flex direction="row" justify="between">
          <Button style={{ backgroundColor: '#5B5BD6' }}>Every week</Button>
          <Button variant="outline">Every two weeks</Button>
          <Button variant="outline">Every month</Button>
        </Flex>

        <Text>pick an editor</Text>
        <Grid columns="2" gap="3" width="auto" height="auto">
          <Button
            variant={editor === 'Columnist' ? 'soft' : 'outline'}
            onClick={() => handleEditorClick('Columnist')}
            style={{ width: '170px', height: '150px', borderRadius: 20 }}
          >
            <Flex direction="column" align="center" justify="center">
              <div>
                <Image
                  src="/images/columnist.png"
                  alt="columnist"
                  layout="responsive"
                  width={500}
                  height={10}
                />
              </div>
              columnist
            </Flex>
          </Button>
          <Button
            variant={editor === 'Girlboss' ? 'soft' : 'outline'}
            onClick={() => handleEditorClick('Girlboss')}
            style={{ width: '170px', height: '150px', borderRadius: 20 }}
          >
            <Flex direction="column" align="center" justify="center">
              <div>
                <Image
                  src="/images/girlboss.png"
                  alt="girlboss"
                  layout="responsive"
                  width={500}
                  height={10}
                />
              </div>
              girlboss
            </Flex>
          </Button>
          <Button
            variant={editor === 'Showman' ? 'soft' : 'outline'}
            onClick={() => handleEditorClick('Showman')}
            style={{ width: '170px', height: '150px', borderRadius: 20 }}
          >
            <Flex direction="column" align="center" justify="center">
              <div>
                <Image
                  src="/images/hypeman.png"
                  alt="hypeman"
                  layout="responsive"
                  width={500}
                  height={10}
                />
              </div>
              hypeman
            </Flex>
          </Button>
          <Button
            variant={editor === 'Storyteller' ? 'soft' : 'outline'}
            onClick={() => handleEditorClick('Storyteller')}
            style={{ width: '170px', height: '150px', borderRadius: 20 }}
          >
            <Flex direction="column" align="center" justify="center">
              <div>
                <Image
                  src="/images/storyteller.png"
                  alt="storyteller"
                  layout="responsive"
                  width={500}
                  height={10}
                />
              </div>
              storyteller
            </Flex>
          </Button>
        </Grid>

        <Text>
          the editor is your newsletter&apos;s unique voice! they&apos;ll give a summary of all the
          highlights at the start of every issue.
        </Text>
        <Button onClick={handleSubmit} style={{ backgroundColor: '#5B5BD6' }}>
          Create group
        </Button>
      </Flex>
    </div>
  );
}
