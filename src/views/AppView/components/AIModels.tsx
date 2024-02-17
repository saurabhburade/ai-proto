import React from "react";

import AIModelList from "./AiModelList";
import AimodelsHead from "./AimodelsHead";

type Props = {};

function AIModels({}: Props) {
  return (
    <div className="bg-base-300 rounded-xl p-2">
      <AimodelsHead />
      <div>
        <AIModelList />
      </div>
    </div>
  );
}

export default AIModels;
