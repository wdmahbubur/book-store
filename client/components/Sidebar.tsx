"use client";
import { Sidebar } from "keep-react";
import {
  BookOpen,
  Gear,
  SquaresFour,
  Cards,
  Users,
  X,
  Chat,
} from "phosphor-react";
import logo from "@public/logo-dark.png";
import { useStore } from "@lib/useStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarComponent = () => {
  const { toggleSidebar } = useStore();
  // current path
  const pathname = usePathname();
  return (
    <Sidebar className="h-full shadow">
      <Sidebar.Items className="flex justify-between">
        <Sidebar.Logo href="" img={logo.src} imgAlt="logo" />
        <X
          size={20}
          className="sm:hidden cursor-pointer"
          onClick={toggleSidebar}
        />
      </Sidebar.Items>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            href="/dashboard"
            icon={<SquaresFour size={24} />}
            active={pathname === "/dashboard"}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            href="/dashboard/books"
            icon={<BookOpen size={24} />}
            active={pathname === "/dashboard/books"}
          >
            Books
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            href="/dashboard/sell-rent"
            icon={<Cards size={24} />}
            active={pathname.startsWith("/dashboard/sell-rent")}
          >
            Sell or Rent
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            href="/dashboard/inbox"
            icon={<Chat size={24} />}
            label="3"
            active={pathname === "/dashboard/inbox"}
          >
            Inbox
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={<Gear size={24} />}>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
