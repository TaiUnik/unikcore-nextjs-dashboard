import React, { useState } from "react";
import menus from "@/data/menu";
import { Menu } from "antd";

function SidebarMenu() {
  return (
    <>
      {/* <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          background: "#ffffff",
        }}
      /> */}
      <Menu defaultSelectedKeys={["/"]} mode="inline" items={menus} />
    </>
  );
}

export default SidebarMenu;
