import React from "react";
import { Button } from "antd";
import Link from "next/link";

function CustomButton({ text, icon, type, shape, href = null }) {
  return (
    <Button
      type={type}
      icon={icon}
      shape={shape}
      href={href}
      className="flex items-center"
    >
      {href !== null ? <Link href={href}>{text}</Link> : <>{text}</>}
    </Button>
  );
}

export default CustomButton;
