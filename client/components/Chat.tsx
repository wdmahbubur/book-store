import { getMessages } from "@lib/fake-data";
import { useStore } from "@lib/useStore";
import getDateDiff from "@lib/utils/getDateDiff";
import Image from "next/image";
import { ArrowCircleLeft } from "phosphor-react";

interface ChatProps {
  chats: {
    cid: string;
    name: string;
    message: string;
    message_time: string;
    type: string;
    conversation_id: string;
    avatar: string;
  }[];
  conversation: {
    id: string;
    name: string;
    avatar: string;
    status: string;
    last_message: string;
    last_message_time: string;
  };
}

const Chat = ({ chats, conversation }: ChatProps) => {
  const { setSelectedChat } = useStore();

  return (
    <div className="chat-area flex-1 flex flex-col relative">
      <div className="flex-3 flex items-center py-1 mb-2 border-b-2 border-gray-200 bg-white sticky top-0 md:relative z-10">
        <ArrowCircleLeft
          size={32}
          className="cursor-pointer md:hidden"
          color="#5E718D"
          onClick={() =>
            setSelectedChat({
              id: "",
              name: "",
              avatar: "",
              status: "",
              last_message: "",
              last_message_time: "",
            })
          }
        />
        <div className="w-12 h-12 relative">
          <Image
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mx-auto"
            src={conversation?.avatar}
            alt="chat-user"
          />
        </div>
        <h2 className="text-xl font-bold">{conversation?.name}</h2>
      </div>
      <div className="messages flex-1 h-auto md:max-h-[400px] pb-[126px] md:pb-0 overflow-y-auto overflow-x-hidden scroll-smooth no-scrollbar">
        {chats.map((chat) =>
          chat.type === "incoming" ? (
            <div className="message mb-4 flex" key={chat.cid}>
              <div className="flex-2">
                <div className="w-12 h-12 relative">
                  <Image
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mx-auto"
                    src={chat.avatar}
                    alt="chat-user"
                  />
                  <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                </div>
              </div>
              <div className="flex-1 px-2">
                <div
                  className={`inline-block bg-gray-300 ${
                    chat.message.length > 50 ? "rounded-2xl" : "rounded-full"
                  } p-2 px-6 text-gray-700`}
                >
                  <span>{chat.message}</span>
                </div>
                <div className="pl-4">
                  <small className="text-gray-500">
                    {getDateDiff("day", chat.message_time) > 1
                      ? getDateDiff("day", chat.message_time) + " days ago"
                      : getDateDiff("hour", chat.message_time) > 1
                      ? getDateDiff("hour", chat.message_time) + " hours ago"
                      : getDateDiff("minute", chat.message_time) +
                        " minutes ago"}
                  </small>
                </div>
              </div>
            </div>
          ) : (
            <div className="message me mb-4 flex text-right" key={chat.message}>
              <div className="flex-1 px-2">
                <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                  <span>It&apos;s like a dream come true</span>
                </div>
                <div className="pr-4">
                  <small className="text-gray-500">
                    {getDateDiff("day", chat.message_time) > 1
                      ? getDateDiff("day", chat.message_time) + " days ago"
                      : getDateDiff("hour", chat.message_time) > 1
                      ? getDateDiff("hour", chat.message_time) + " hours ago"
                      : getDateDiff("minute", chat.message_time) +
                        " minutes ago"}
                  </small>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex-2 pt-4 md:pb-10 bg-white fixed md:relative bottom-0 w-full">
        <div className="write bg-white shadow flex rounded-lg">
          <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
            <span className="block text-center text-gray-400 hover:text-gray-800">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1">
            <textarea
              name="message"
              className="w-full block outline-none py-4 px-4 bg-transparent"
              rows={1}
              placeholder="Type a message..."
              autoFocus={true}
            ></textarea>
          </div>
          <div className="flex-2 w-32 p-2 flex content-center items-center">
            <div className="flex-1 text-center">
              <span className="text-gray-400 hover:text-gray-800">
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </span>
              </span>
            </div>
            <div className="flex-1">
              <button className="bg-blue-400 w-10 h-10 rounded-full inline-block">
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
