import UserLayout from "@/components/layout/UserLayout";
import CustomHeader from "@/components/shared/CustomHeader";
import React from "react";

function DashBoard() {
    return (
        <>
            <CustomHeader title="Dashboard" />
        </>
    );
}

DashBoard.getLayout = function getLayout(page) {
    return <UserLayout>{page}</UserLayout>;
};

export default DashBoard;
