import React from "react";
import Nextjs from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import Reactjs from "@/assets/icons/logos_react.svg";
import Tailwind from "@/assets/icons/vscode-icons_file-type-tailwind.svg";
import JavaScript from "@/assets/icons/vscode-icons_file-type-js-official.svg";
import Html from "@/assets/icons/vscode-icons_file-type-html.svg";
import Git from "@/assets/icons/logos_git-icon.svg";
import Redux from "@/assets/icons/Vector (3).svg";
import Css from "@/assets/icons/vscode-icons_file-type-css.svg";
import ReactHook from "@/assets/icons/download.svg"

const Stack = () => {
  return (
    <div className="mx-auto h-screen w-full max-w-7xl">
      <div className="title-container">
        <div className="title">
          My Tech Stack
        </div>
        <p className="sub-title">
          {" "}
          Technologies I’ve been working with recently
        </p>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-3xl flex-wrap items-center justify-center gap-10">
        <Html className="h-30 w-30" />
        <JavaScript className="h-30 w-30" />
        <Css className="h-30 w-30" />
        <Git className="h-30 w-30" />
        <Reactjs className="h-30 w-30" />
        <Tailwind className="h-30 w-30" />
        <Nextjs className="h-30 w-30" />
        <Redux className="h-30 w-30" />
        <ReactHook className="h-40 w-40 object-contain" />
      </div>
    </div>
  );
};

export default Stack;
