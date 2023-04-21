import {
  AppstoreFilled,
  CalendarFilled,
  UserOutlined,
  BankOutlined,
  PieChartFilled,
  ClockCircleOutlined,
  NodeIndexOutlined,
  WifiOutlined,
  CalculatorFilled,
  DashboardOutlined,
  LineChartOutlined,
  TagFilled,
} from "@ant-design/icons";
import Link from "next/link";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menus = [
  getItem(<Link href="/">Dashboard</Link>, "/", <AppstoreFilled />),
  {
    type: "divider",
  },
  getItem(
    <Link href="/calendar">Calendar</Link>,
    "/calendar",
    <CalendarFilled />
  ),
  {
    type: "divider",
  },
  getItem(
    <Link href="/contacts">Contacts</Link>,
    "/contacts",
    <UserOutlined />
  ),
  {
    type: "divider",
  },
  getItem(
    <Link href="/companies">Companies</Link>,
    "/companies",
    <BankOutlined />
  ),
  {
    type: "divider",
  },
  getItem(
    <Link href="/segments">Segments</Link>,
    "/segments",
    <PieChartFilled />
  ),
  {
    type: "divider",
  },
  getItem(
    <Link href="/components">Components</Link>,
    "sub1",
    <NodeIndexOutlined />,
    [
      getItem(
        <Link href="/components/sub-components/1">Sub Components 1</Link>,
        "/components/sub-components/1"
      ),
      getItem(
        <Link href="/components/sub-components/2">Sub Components 2</Link>,
        "/components/sub-components/2"
      ),
    ]
  ),
  {
    type: "divider",
  },
  getItem(
    <Link href="/campaigns">Campaigns</Link>,
    "/campaigns",
    <ClockCircleOutlined />
  ),
  {
    type: "divider",
  },
  getItem(<Link href="/channels">Channels</Link>, "sub2", <WifiOutlined />, [
    getItem(
      <Link href="/channels/sub-channels/1">Sub Channels 1</Link>,
      "/channels/sub-channels/1"
    ),
    getItem(
      <Link href="/channels/sub-channels/2">Sub Channels 2</Link>,
      "/channels/sub-channels/2"
    ),
  ]),
  {
    type: "divider",
  },
  getItem(<Link href="/points">Points</Link>, "sub3", <CalculatorFilled />, [
    getItem(
      <Link href="/points/sub-points/1">Sub Points 1</Link>,
      "/points/sub-points/1"
    ),
    getItem(
      <Link href="/points/sub-points/2">Sub Points 2</Link>,
      "/points/sub-points/2"
    ),
  ]),
  {
    type: "divider",
  },
  getItem(<Link href="/stages">Stages</Link>, "/stages", <DashboardOutlined />),
  {
    type: "divider",
  },
  getItem(
    <Link href="/reports">Reports</Link>,
    "/reports",
    <LineChartOutlined />
  ),
  {
    type: "divider",
  },
  getItem(<Link href="/tags">Tags</Link>, "/tags", <TagFilled />),
];

export default menus;
