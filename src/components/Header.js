"use client";
import { useState, useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MyButton } from "./MyButton";
import { MyButtonOutline } from "./MyButtonOutline";
import Link from "next/link";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`scroll-smooth flex items-center justify-between p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white ${
        isFixed ? "fixed top-0 w-full bg-white shadow-md z-10" : ""
      }`}
    >
      <div className="text-xl font-bold">
        <Link href="/">
          <img className="h-10 w-auto" src="/images/logo.svg" alt="Logo" />
        </Link>
      </div>
      <Menubar className="border-none shadow-none rounded-none">
        <MenubarMenu>
          <Link className="py-2 px-3" href="/">
            Home
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link className="py-2 px-3" href="/about">
            About
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Services</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/mutual-funds">Mutual Funds</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/financial-planning">Financial Planning</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/insurance">Insurance</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/loan">Loan</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/tax-planning">Tax Planning</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Tools</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/financial-calculators">Financial Calculator</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/download-forms">Download Forms</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/risk-profile">Risk Profile</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/health-checkup">Health Checkup</Link>
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <Link className="py-2 px-3" href="/blog">
            Blog
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link className="py-2 px-3" href="/contact">
            Contact
          </Link>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center space-x-2 text-sm">
        <MyButton className="bg-primary" href="/login" name="Login"></MyButton>
        <MyButtonOutline
          className="border-primary text-primary"
          href="/signup"
          name="Signup"
        ></MyButtonOutline>
      </div>
    </header>
  );
};

export default Header;
