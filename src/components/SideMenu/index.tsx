import { useUIContext } from "@/contexts/contextUI";
import React from "react";

const SideMenu = () => {
  const { menuOpen } = useUIContext();

  if (!menuOpen) return null;

  return <div>사이드메뉴</div>;
};

export default SideMenu;
