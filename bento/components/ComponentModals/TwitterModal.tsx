import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Twitter1 from "assets/previews/Twitter1.png";
import Twitter2 from "assets/previews/Twitter2.png";

const TwitterModal = ({
  isOpen,
  onClose,
  onInsert,
}: {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (
    blockStyle: number,
    username: string,
    tweetContent: string
  ) => void;
}) => {
  const [blockStyle, setBlockStyle] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [tweetContent, setTweetContent] = useState<string>("");

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Twitter Link
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500"></p>
                </div>
                {/* Block Style */}
                <div className="mt-4">
                  <label
                    htmlFor="tweet-content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Block Style
                  </label>
                  <div className="mt-1">
                    <div className="w-full space-x-4 flex">
                      <div
                        onClick={() => setBlockStyle(0)}
                        className={`w-full relative overflow-hidden rounded-md flex justify-center py-4 h-auto cursor-pointer group hover:border-blue-500 transition border-2 bg-slate-700 ${
                          blockStyle === 0
                            ? "border-blue-500"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={Twitter1.src}
                          alt="Twitter1"
                          className={`w-8/12 shadow-xl group-hover:scale-105 transition ${
                            blockStyle === 0 ? "scale-105" : "scale-100"
                          }`}
                        />
                      </div>
                      <div
                        onClick={() => setBlockStyle(1)}
                        className={`w-full relative overflow-hidden rounded-md flex justify-center py-4 h-auto cursor-pointer group hover:border-blue-500 transition border-2 bg-slate-700 ${
                          blockStyle === 1
                            ? "border-blue-500"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={Twitter2.src}
                          alt="Twitter1"
                          className={`w-8/12 shadow-xl group-hover:scale-105 transition ${
                            blockStyle === 1 ? "scale-105" : "scale-100"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Username Input */}
                <div className="mt-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"
                      id="username"
                      placeholder="@username"
                      className="shadow-sm focus:!outline-none block w-full sm:text-sm px-4 py-3 bg-gray-200 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                {/* Tweet content */}
                {blockStyle === 0 ? (
                  <div className="mt-4">
                    <label
                      htmlFor="tweet-content"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tweet Content
                    </label>
                    <div className="mt-1">
                      <textarea
                        value={tweetContent}
                        onChange={(e) => setTweetContent(e.target.value)}
                        name="tweet-content"
                        id="tweet-content"
                        placeholder="Covfefe"
                        className="shadow-sm focus:!outline-none block w-full sm:text-sm px-4 py-3 bg-gray-200 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <div className="mt-4 w-full flex justify-end space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      onClose();
                      onInsert(blockStyle, username, tweetContent);
                    }}
                  >
                    Insert Box
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TwitterModal;
