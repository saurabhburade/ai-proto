import React from "react";

type Props = {};

function AImodelsHead({}: Props) {
  return (
    <div className="bg-base-200 rounded-xl">
      <div className=" p-[32px] space-y-[24px]">
        {" "}
        <h2 className="text-[24px]">AI Models</h2>
        <div className="flex gap-[12px]">
          <div className="px-[12px] py-[8px] bg-base-100  text-sm rounded-[35px]  focus:outline-none outline-none border-none ring-0 active:border-none focus:border-none active:outline-none">
            <select id="model" defaultValue={""} className=" bg-base-100">
              <option selected>Model</option>
            </select>
          </div>
          <div className="px-[12px] py-[8px] bg-base-100  text-sm rounded-[35px]  focus:outline-none outline-none border-none ring-0 active:border-none focus:border-none active:outline-none">
            <select id="model" className=" bg-base-100">
              <option selected>Model</option>
            </select>
          </div>
          <div className="px-[12px] py-[8px] bg-base-100  text-sm rounded-[35px]  focus:outline-none outline-none border-none ring-0 active:border-none focus:border-none active:outline-none">
            <select id="model" className=" bg-base-100">
              <option selected>Model</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full px-[28px] pb-[14px] text-xs rounded-xl text-white/60 grid grid-cols-[244px_80px_80px_80px_116px] items-center">
        <p>Model</p>
        <p>Versions</p>
        <p>License</p>
        <p>Contributors</p>
        <p className="text-center">Rating</p>
      </div>
    </div>
  );
}

export default AImodelsHead;
