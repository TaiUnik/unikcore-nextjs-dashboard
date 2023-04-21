import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import CustomHeader from "../shared/CustomHeader";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import {
  SIDE_BAR_WIDTH,
  SIDE_BAR_WIDTH_COLLAPSED,
  TOP_NAV_HEIGHT,
} from "@/themeConfig";
import SidebarMenu from "./SidebarMenu";

const { Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

function UserLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <AdminHeader />
      <Layout hasSider>
        <Sider
          width={SIDE_BAR_WIDTH}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            background: "#ffffff",
          }}
          className="border-r-[1px]"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              // background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <SidebarMenu />
        </Sider>
        <Layout
          className="site-layout flex flex-col"
          style={{
            marginLeft: collapsed
              ? SIDE_BAR_WIDTH_COLLAPSED + "px"
              : SIDE_BAR_WIDTH + "px",
          }}
        >
          <Content
            style={{
              overflow: "",
            }}
          >
            <div
              style={{
                background: "#f5f5f5",
              }}
            >
              <main className="pb-20">{children}</main>
            </div>
          </Content>
          <Footer className="bg-[#f5f9f9] w-full fixed bottom-0 border border-t-zinc-200">
            UnikCore Automation. © 2023 UnikCore
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default UserLayout;
