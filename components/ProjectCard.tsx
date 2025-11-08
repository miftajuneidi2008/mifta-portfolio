import Image from "next/image";
import React from "react";
type cardProps = {
  title: string;
  description: string;
  stack: string;
  image: string;
};
const ProjectCard = ({ title, description, stack, image }: cardProps) => {
  return (
    <div className="flex flex-col rounded-md">
      <Image src={image} height={400} width={400} alt={title} />
    </div>
  );
};

export default ProjectCard;
