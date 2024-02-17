/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Chat from "@components/Chat";
import ConversationUser from "@components/ConversationUser";
import { InputComponent } from "@components/InputComponent";
import { getConversation, getMessages } from "@lib/fake-data";
import { useStore } from "@lib/useStore";
import Image from "next/image";

const page = () => {
  const conversation = getConversation();
  const messages = getMessages();
  const { selectedChat, user } = useStore();

  return (
    <div className="flex-1 w-full h-full">
      <div className="main-body container m-auto w-full h-full flex flex-col">
        <div className="main flex-1 flex flex-col">
          {/* <div className="hidden lg:block heading flex-2">
              <h1 className="text-2xl text-gray-700">Inbox</h1>
            </div> */}

          <div className="flex-1 flex h-full mt-2">
            <div
              className={`sidebar ${
                selectedChat.id === "" ? "block" : "hidden"
              } md:flex w-full md:w-1/3 flex-2 flex-col md:pr-6`}
            >
              <div className="search flex-2 pb-2 md:pb-6 px-2 sticky top-0 md:relative z-10 bg-white">
                <InputComponent
                  type="search"
                  name="search"
                  placeholder="Search"
                />
              </div>
              <div className="h-auto md:max-h-[450px] overflow-y-auto overflow-x-hidden px-2 scroll-smooth no-scrollbar">
                {conversation.map((conv) => (
                  <ConversationUser key={conv.id} conv={conv} />
                ))}
              </div>
            </div>
            {selectedChat?.id === "" ? ( // if no chat is selected
              <div className="flex-1 flex-2 hidden md:flex flex-col justify-center items-center">
                <div className="w-24 h-24 relative">
                  <Image
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto"
                    src="/user.jpg"
                    alt="chat-user"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-xl text-gray-700">
                    <b>Hi, {user?.name}</b>
                  </h2>
                  <p className="text-gray-500">Select a chat to start</p>
                </div>
              </div>
            ) : (
              <Chat chats={messages} conversation={selectedChat} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
