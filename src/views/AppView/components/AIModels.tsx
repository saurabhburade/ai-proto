import React from "react";
import AImodelsHead from "./AImodelsHead";
import AIModelList from "./AIModelList";

type Props = {};

function AIModels({}: Props) {
  return (
    <div className="bg-base-300 rounded-xl p-2">
      <AImodelsHead />
      
      <div>
        <AIModelList />
      </div>
    </div>
  );
}

export default AIModels;
