import React from "react";
import { useRouter } from "next/router";
import PreListingComponent from "@/components/shared/PreListingComponent";
import UserLayout from "@/components/layout/UserLayout";
import CustomForm from "@/components/shared/CustomForm";

function CreateCompany() {
  const router = useRouter();

  return (
    <div>
      <PreListingComponent title="Create Company" isList={false} />
      <div class="flex h-100">
        <div class="basis-1/3 bg-white border border-r-zinc-200 px-6 py-4">
          UnikCore
        </div>
        <div class="basis-2/3 bg-[#f5f5f5]">
          <div className="border border-b-zinc-200  px-6 py-4">
            <h1 className="text-2xl">Create Company</h1>
          </div>
          <div className=" px-6 py-4">
            <CustomForm />
          </div>
        </div>
      </div>
    </div>
  );
}

CreateCompany.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default CreateCompany;
