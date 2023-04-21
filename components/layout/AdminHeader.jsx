import React from "react";
import {
  NotificationOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Layout } from "antd";

const { Header } = Layout;

function AdminHeader() {
  return (
    <>
      <Header
        className="header h-16 shadow-sm bg-[#ffffff]"
        style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
      >
        <div className="flex items-center gap-10 h-full">
          <div className="flex items-center w-[200px] h-full">
            <Image
              src="/unikcore.jpg"
              width={120}
              height={50}
              className="h-[60px]"
              alt="logo"
            />
          </div>
          <div className="flex items-center justify-between h-full gap-10 flex-grow">
            <div className="flex items-center gap-10">
              <NotificationOutlined />
              <SearchOutlined />
            </div>
            <div className="flex items-center gap-10">
              <Image
                src="/taitai.png"
                width={40}
                height={40}
                className="rounded-full"
                alt="avatar"
              />
              <p>Taitai</p>
              <div className="flex items-center">
                <SettingOutlined />
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

export default AdminHeader;
