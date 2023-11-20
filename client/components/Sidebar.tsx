"use client";
import { Sidebar } from "keep-react";
import { BookOpen, Gear, SquaresFour, Cards, Users, X } from "phosphor-react";
import logo from "@public/logo-dark.png";
import { useStore } from "@lib/useStore";

export const SidebarComponent = () => {
  const { toggleSidebar } = useStore();
  return (
    <Sidebar className="h-screen shadow">
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
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<BookOpen size={24} />}>
            Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Cards size={24} />}>
            Sell or Land
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />} label="3">
            Community
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={<Gear size={24} />}>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
