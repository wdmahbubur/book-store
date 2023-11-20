"use client";
import { useStore } from "@lib/useStore";
import { Button, Navbar } from "keep-react";
import {
  Heart,
  MagnifyingGlass,
  ShoppingCart,
  User,
  List,
} from "phosphor-react";

const DashboardTopBar = () => {
  const { toggleSidebar } = useStore();
  return (
    <Navbar fluid={true} className="shadow px-0">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container>
          <List
            size={24}
            onClick={toggleSidebar}
            className="sm:hidden cursor-pointer"
          />
        </Navbar.Container>
        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="flex items-center justify-between gap-5"
          >
            <Navbar.Link
              icon={<MagnifyingGlass size={20} color="#444" />}
              iconAnimation={false}
              href="#"
            />

            <Navbar.Link
              icon={<Heart size={20} color="#444" />}
              iconAnimation={false}
              href="#"
            />
            <Navbar.Link
              icon={<User size={20} color="#444" />}
              iconAnimation={false}
              href="#"
            />
          </Navbar.Container>

          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-metal-600">Cart $0.00</span>
          </Button>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default DashboardTopBar;
