import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="foote">
      <div className=" footer-top py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <Image
                src="/images/logo.svg" // Path to your image
                alt="Logo" // Alt text for accessibility
                width={380} // Width of the image
                height={73} // Height of the image
              />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-3">Tools</h4>
              <ul>
                <li>
                  <Link href="/calculators">Calculator</Link>
                </li>
                <li>
                  <Link href="/forms">Download Forms</Link>
                </li>
                <li>
                  <Link href="/risk">Risk Profile</Link>
                </li>
                <li>
                  <Link href="/health">Health Checkup</Link>
                </li>
                <li>
                  <Link href="/pay-premium">Pay Premium Online</Link>
                </li>
                <li>
                  <Link href="/buymf">Buy Mf Online</Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className=" text-xl font-semibold mb-3">Services</h4>
              <ul>
                <li>
                  <Link href="/calculators">Calculator</Link>
                </li>
                <li>
                  <Link href="/forms">Download Forms</Link>
                </li>
                <li>
                  <Link href="/risk">Risk Profile</Link>
                </li>
                <li>
                  <Link href="/health">Health Checkup</Link>
                </li>
                <li>
                  <Link href="/pay-premium">Pay Premium Online</Link>
                </li>
                <li>
                  <Link href="/buymf">Buy Mf Online</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-8 border-t-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Fund India. All rights
                reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="#!" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
