import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Links from "@/assets/icons/akar-icons_link-chain.svg";
import Github from "@/assets/icons/akar-icons_github-fill.svg";
type cardProps = {
  title: string;
  description: string;
  stack: string;
  image: string | StaticImageData;
};
const ProjectCard = ({ title, description, stack, image }: cardProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-white max-sm:max-w-[340px] max-sm:mx-auto sm:mx-2 xl:mx-0 ">
      <Image
        src={image}
        height={400}
        width={400}
        alt={title}
        className="h-64 rounded-tl-lg rounded-tr-lg"
      />
      <div className="flex flex-col gap-2 px-4">
        <h3 className="font-sm font-semibold">{title}</h3>
        <p className="text-sm text-[#666666]">{description}</p>
        <div>
          <span className="text-md font-semibold">Tech Stack</span>
          {stack}
        </div>
        <div className="flex justify-between">
          <Link href={`#`} className="flex items-center gap-2">
            <Links className="h-5 w-5" />
            <span className="underline">Live Preview</span>
          </Link>
          <Link href={`#`} className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
