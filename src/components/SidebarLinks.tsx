import React from "react";

interface SidebarLinksProps {
  links: { icon: React.ReactNode; name: string }[];
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ links }) => {
  return (
    <>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {links.map(({ icon, name }, index) => (
          <li
            className={`pl-6 py-3 hover:bg-zinc-600 ${
              name === "Home" ? "bg-slate-600" : ""
            }`}
            key={index}
          >
            <a href="#" className="flex items-center gap-5 ">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarLinks;
