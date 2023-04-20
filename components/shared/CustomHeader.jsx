import React from "react";
import { useRouter } from "next/router";

function CustomHeader({ title }) {
    return <h3 className="p-6 text-3xl">{title}</h3>;
}

export default CustomHeader;
