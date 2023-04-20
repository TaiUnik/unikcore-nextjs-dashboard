import React from "react";
import UserLayout from "@/components/layout/UserLayout";
import CustomHeader from "@/components/shared/CustomHeader";

function CompanyPage() {
    return (
        <>
            <CustomHeader title="Company Page" />
        </>
    );
}

CompanyPage.getLayout = function getLayout(page) {
    return <UserLayout>{page}</UserLayout>;
};

export default CompanyPage;
