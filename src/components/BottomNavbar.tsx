import Link from 'next/link';
import { IconButton } from '@radix-ui/themes';
import { HomeIcon, TokensIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';

export default function BottomNavbar() {
  const router = useRouter();

  function isActive(route: string) {
    return route !== router.pathname;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#DADCFF] h-20 rounded-t-3xl">
      <div className="flex justify-around items-center h-full">
        <IconButton variant="ghost">
          <HomeIcon
            width="35"
            height="35"
            className={`${isActive('/') ? 'text-[#5B5BD6]' : 'text-white'} focus:outline-none focus:shadow-none active:bg-transparent`}
            onClick={() => router.push('/')}
          />
        </IconButton>
        <IconButton variant="ghost">
          <TokensIcon
            width="35"
            height="35"
            className={`${isActive('/groups') ? 'text-[#5B5BD6]' : 'text-white'} focus:outline-none focus:shadow-none active:bg-transparent`}
            onClick={() => router.push('/groups')}
          />
        </IconButton>
      </div>
    </div>
  );
}
