import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HearderIcon from "./HearderIcon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {
  const [session] = useSession();
  return (
    <div className="flex items-center sticky top-0 bg-white p-2 lg:px-5 shadow-md z-10">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full p-2 bg-gray-100">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex outline-none placeholder-gray-500 ml-2 items-center bg-transparent"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HearderIcon active Icon={HomeIcon} />
          <HearderIcon Icon={FlagIcon} />
          <HearderIcon Icon={PlayIcon} />
          <HearderIcon Icon={ShoppingCartIcon} />
          <HearderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          width={40}
          height={40}
          className="cursor-pointer rounded-full"
          src={session.user.image}
        />
        <p className="whitespace-nowrap font-semibold pr-3">Md Sagor</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
