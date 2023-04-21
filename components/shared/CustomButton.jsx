import React from "react";
import { Button } from "antd";
import { useRouter } from "next/router";

function CustomButton({ text, icon, type, shape, href }) {
  const router = useRouter();
  return (
    <>
      {href !== null ? (
        <Button
          type={type}
          icon={icon}
          shape={shape}
          className="flex items-center"
          onClick={() => router.push(href)}
        >
          {text}
        </Button>
      ) : (
        <Button
          type={type}
          icon={icon}
          shape={shape}
          className="flex items-center"
        >
          {text}
        </Button>
      )}
    </>
  );
}

export default CustomButton;
