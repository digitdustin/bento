import Head from "next/head";
import Image from "next/image";
import {
  PlusIcon,
  AtSymbolIcon,
  PencilSquareIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Transition, Menu } from "@headlessui/react";
import { Reorder } from "framer-motion";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import TwitterModal from "../components/ComponentModals/TwitterModal";
import Grid from "../components/grid";

export default function Home() {
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center justify-start">
      <TwitterModal isOpen={socialOpen} onClose={() => setSocialOpen(false)} />
      <div className="max-w-4xl w-full h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl font-bold text-slate-900">🍱</h1>
        <h1 className="text-2xl font-bold text-slate-600 text-center">
          Welcome to your bento!
        </h1>
        <p className="text-slate-500 text-center">
          Click the button below to add your first component to your box.
        </p>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-violet-600 hover:bg-violet-700 px-4 py-2 text-sm font-medium text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <PlusIcon
                className="mr-2 -ml-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
              Add a component
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSocialOpen(true)}
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-500"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <AtSymbolIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Social Link
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-500"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <PencilSquareIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Project
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-500"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <IdentificationIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      About Me
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-500"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Move
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-500"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      
    </div>
  );
}
