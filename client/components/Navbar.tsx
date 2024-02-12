"use client";
import Image from "next/image";
import { Navbar, Button } from "keep-react";
import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="shadow">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            {/* <Image src="/images/keep.svg" alt="keep" width="100" height="40" /> */}
            <Link href="/">
              <h4 className="text-gray-700">Book Store</h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container tag="ul" className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600">
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-primary-600 text-white px-4 py-2 rounded"
          >
            Sign Up
          </Link>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
