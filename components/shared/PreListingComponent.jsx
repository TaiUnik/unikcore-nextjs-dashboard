import React from "react";
import {
  PlusOutlined,
  CheckOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import CustomHeader from "@/components/shared/CustomHeader";
import CustomButton from "@/components/shared/CustomButton";
import InternalSearch from "@/components/shared/InternalSearch";

function PreListingComponent({ title, isList, href }) {
  return (
    <>
      <div className="flex items-center justify-between border border-b-zinc-200 p-6">
        <div className="flex items-center justify-between">
          <CustomHeader title={title} />
        </div>
        <div className="flex items-center justify-between">
          {isList ? (
            <CustomButton text="New" icon={<PlusOutlined />} href={href} />
          ) : (
            <div className="flex gap-4">
              <CustomButton text="Save" icon={<CheckOutlined />} />
              <CustomButton text="Save & Close" icon={<SaveOutlined />} />
              <CustomButton text="Cancel" icon={<CloseOutlined />} />
            </div>
          )}
        </div>
      </div>
      <div className="border border-b-zinc-200 p-6">
        <InternalSearch />
      </div>
    </>
  );
}

export default PreListingComponent;
