import React from "react";
interface SidebarTextLinksProps {
  text: string[];
}

const SidebarTextLinks: React.FC<SidebarTextLinksProps> = ({ text }) => {
  return (
    <>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {text.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </>
  );
};

export default SidebarTextLinks;
