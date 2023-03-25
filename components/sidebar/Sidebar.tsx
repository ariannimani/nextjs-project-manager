import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Card from "../card/Card";
import SidebarLink from "../sidebar-link/SidebarLink";

export interface LinkProps {
  label: string;
  //FIXME: fix any type
  icon: any;
  link: string;
}

const links: LinkProps[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
      {links.map((link) => (
        <SidebarLink key={link.label} link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
