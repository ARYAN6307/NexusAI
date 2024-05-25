import React from "react";
import Image from "next/image";
import Section from "../Section";
import { socials } from "../../constants";
import Link from "next/link";

interface SocialItem {
  id: string;
  url: string;
  iconUrl: string;
  title: string;
}

const Footer: React.FC = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex  font-serif sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block text-slate-400">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item: SocialItem) => (
            <li key={item.id}> {/* Add a wrapper li element */}
              <Link href={item.url} passHref> {/* Use Link component */}
                <a
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
