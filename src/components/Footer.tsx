import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="bg-black border-t border-orange-500 text-white px-6 md:px-16 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Logo & Social */}
        <div className="flex flex-col items-center justify-center mr-20 mb-8 md:mb-0 min-w-[180px] w-full md:w-auto mx-auto">
          <div className="flex items-center text-center gap-2 mb-2">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <p className="text-md mb-2">Follow Us</p>
          <div className="flex gap-4 text-white text-xl">
            <Link href="#" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="X">
              <FaXTwitter />
            </Link>
          </div>
        </div>
        {/* Columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          <div>
            <h4 className="font-bold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/technology">Technology</Link>
              </li>
              <li>
                <Link href="/ai-labs">AI Labs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white">Resources</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Guides</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white">Connect</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Newsletter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-md text-gray-400">
        ©2025 SmartNav. All rights reserved.
      </div>
    </footer>
  );
}
