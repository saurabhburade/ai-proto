import { AI_MODELS } from "@/configs/constants";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};
const MAX_RATING = 5;
function AIModelList({}: Props) {
  return (
    <div className="overflow-scroll h-[424px]">
      {AI_MODELS?.map((model, idx) => {
        return <ModelRow key={model?.name} model={model} />;
      })}
    </div>
  );
}
const ModelRow = ({ model }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div
        className={` ${
          isOpen ? "shadow-lg  " : ""
        } w-full cursor-pointer px-[28px] py-[8px] duration-[700ms] transition-all rounded-xl h-[64px] grid grid-cols-[244px_80px_80px_80px_116px] items-center`}
        onClick={toggleAccordion}
      >
        <div className="flex w-[244px] items-center">
          <Image
            src={model?.logo}
            alt="chat-gpt"
            width={24}
            height={24}
            className="mx-[8px] rounded-full w-[24px] h-[24px] object-cover"
          />
          <p>Chat Gpt</p>
        </div>
        <p className="w-[80px]">{model?.version} </p>
        <p className="w-[80px]"> {model?.liscence} </p>
        <div className="flex -space-x-2 rtl:space-x-reverse w-[80px] overflow-hidden justify-center">
          {model?.contributors?.length > 0 &&
            model?.contributors?.map((contributor) => {
              return (
                <Image
                  key={contributor?.name}
                  src={contributor?.image}
                  alt={contributor?.name}
                  width={24}
                  height={24}
                  className=" border-2  w-[24px] h-[24px] border-white rounded-full"
                />
              );
            })}
        </div>

        <div className="flex items-center w-[116px] justify-center">
          {new Array(model?.rating)?.fill(false)?.map((_, idx) => {
            return (
              <svg
                key={`__model_rating_${model?.name}_${idx}`}
                className="w-4 h-4 text-[#9681FF] ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            );
          })}
          {new Array(MAX_RATING - model?.rating)?.fill(false)?.map((_, idx) => {
            return (
              <svg
                key={`__model_rating_${model?.name}_${idx}`}
                className="w-4 h-4 ms-1 text-[#17171A] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            );
          })}
        </div>
      </div>

      <div
        className={`w-full overflow-hidden text-white/60 text-[14px] rounded-b-2xl accordion-content bg-base-100 ${
          isOpen ? "open h-full  " : ""
        }`}
      >
        <p className=" px-[28px] py-[8px]">
          ChatGPT is a chatbot developed by OpenAI and launched on November 30,
          2022. Based on a large language model, it enables users to refine and
          steer a conversation towards a desired length, format, style, level of
          detail, and language.
        </p>
      </div>
    </div>
  );
};

export default AIModelList;
