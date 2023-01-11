import React from "react";
import {
  HomeIcon as HomeIconSolid,
  HeartIcon as HeartIconSolid,
  ArchiveBoxIcon as ArchiveBoxIconSolid,
  PlayCircleIcon as PlayCircleIconSolid,
  ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
  FolderPlusIcon as FolderPlusIconSolid
} from "@heroicons/react/24/solid";
import {
  HomeIcon,
  HeartIcon,
  ArchiveBoxIcon,
  PlayCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  FolderPlusIcon
} from "@heroicons/react/24/outline";
import { Lora } from '@next/font/google'
import Link from "next/link";
import { useRouter } from "next/router";

const lora = Lora({ subsets: ['latin'] });
const items = [
  {
    title: 'Home',
    href: '/',
    Icon: ({highlighted}) => highlighted?<HomeIconSolid className="w-5 h-5"/>:<HomeIcon className="w-5 h-5"/>
  },
  {
    title: 'Liked',
    href: '/liked',
    Icon: ({highlighted}) => highlighted?<HeartIconSolid className="w-5 h-5"/>:<HeartIcon className="w-5 h-5"/>
  },
  {
    title: 'Archive',
    href: '/archive',
    Icon: ({highlighted}) => highlighted?<ArchiveBoxIconSolid className="w-5 h-5"/>:<ArchiveBoxIcon className="w-5 h-5"/>
  },
  {
    title: 'Videos',
    href: '/videos',
    Icon: ({highlighted}) => highlighted?<PlayCircleIconSolid className="w-5 h-5"/>:<PlayCircleIcon className="w-5 h-5"/>
  },
  {
    title: 'Notes',
    href: '/notes',
    Icon: ({highlighted}) => highlighted?<ChatBubbleBottomCenterTextIconSolid className="w-5 h-5"/>:<ChatBubbleBottomCenterTextIcon className="w-5 h-5"/>
  },
]

export default function Navigation() {
  const router = useRouter();
  return (
    <nav className="flex flex-col space-y-8">
      <h1 className={`${lora.className} font-semibold text-xl`}>Estoril</h1>
      <ul className="uppercase font-medium text-xs text-gray-700 tracking-wide flex flex-col space-y-3">
        {
          items.map(item => (
            <Link href={item.href} key={item.title}>
              <li className="flex items-center space-x-2" >
                <item.Icon highlighted={router.pathname===item.href}/>
                <span className="hover:text-gray-500 transition-colors ease-in-out duration-150">{item.title}</span>
              </li>
            </Link>
          ))
        }
        <li className="flex items-center space-x-2">
          <FolderPlusIcon className="w-5 h-5"/>
          <span>Add Folder</span>
        </li>
      </ul>
    </nav>
  )
}