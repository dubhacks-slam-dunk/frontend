import { Flex, Text } from '@radix-ui/themes';
import {
  ChevronLeftIcon,
  StarIcon,
  ReaderIcon,
  SpeakerModerateIcon,
  DesktopIcon,
} from '@radix-ui/react-icons';

export default function MediaRating(name: string, entry: string, type: string) {
  let icon = null;
  let action = '';

  switch (type) {
    case 'song':
    case 'podcast':
      icon = <SpeakerModerateIcon className="w-8 h-8" />;
      action = `${name} LISTENED TO`;
      break;
    case 'book':
      icon = <ReaderIcon className="w-8 h-8" />;
      action = `${name} READ`;
      break;
    case 'movie':
      icon = <StarIcon className="w-8 h-8" />;
      action = `${name} WATCHED`;
      break;
    case 'show':
      icon = <DesktopIcon className="w-8 h-8" />;
      action = `${name} WATCHED`;
      break;
    default:
      icon = <StarIcon className="w-8 h-8" />;
      action = `${name} WATCHED`;
  }

  return (
    <Flex className="flex-row space-x-3 ml-3">
      {icon}
      <Flex className="flex-col space-y-1">
        <Text>{action}</Text>
        <Text>{entry}</Text>
      </Flex>
    </Flex>
  );
}
