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
const { Header, Content, Footer, Sider } = Layout;

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
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["4"]}
                        items={items}
                        style={{
                            background: "#ffffff",
                        }}
                    />
                </Sider>
                <Layout
                    className="site-layout"
                    style={{
                        marginLeft: collapsed ? "80px" : "200px",
                    }}
                >
                    <Content
                        style={{
                            overflow: "initial",
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                textAlign: "center",
                                background: colorBgContainer,
                            }}
                        >
                            <main>{children}</main>
                            {
                                // indicates very long content
                                Array.from(
                                    {
                                        length: 100,
                                    },
                                    (_, index) => (
                                        <React.Fragment key={index}>
                                            {index % 20 === 0 && index
                                                ? "more"
                                                : "..."}
                                            <br />
                                        </React.Fragment>
                                    )
                                )
                            }
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: "center",
                        }}
                    >
                        Unikcore ©2023
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default UserLayout;
