"use client";
import { useStore } from "@lib/useStore";
import { Button, Navbar } from "keep-react";
import { useRouter } from "next/navigation";
import {
  Heart,
  MagnifyingGlass,
  ShoppingCart,
  User,
  List,
  CaretRight,
  SignOut,
} from "phosphor-react";
import { useState, useEffect, useRef } from "react";

const DashboardTopBar = () => {
  const { toggleSidebar, removeUser, setAlert } = useStore();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    removeUser();
    setAlert("success", "You have been logged out");
    router.push("/login");
  };
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

            <div className="relative inline-block text-left" ref={dropdownRef}>
              <User
                size={20}
                color="#444"
                onClick={toggleDropdown}
                className="cursor-pointer"
              />

              <div
                className={`origin-top-right absolute right-0 mt-4 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-25"
                  >
                    <User size={20} color="#5E718D" className="mr-1" />
                    Profile
                    <span className="ml-auto">
                      <CaretRight size={20} color="#5E718D" />
                    </span>
                  </a>
                  <hr className=" border-gray-25" />
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-25"
                    onClick={logout}
                  >
                    <SignOut size={20} color="#5E718D" className="mr-1" />
                    Sign out
                    <span className="ml-auto">
                      <CaretRight size={20} color="#5E718D" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
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
