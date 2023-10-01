import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../store/redux/hooks";

interface PostType {
  name: string;
  index: number;
}

export default function Post({ name, index }: PostType) {
  console.log("name, index----", name, index);
  return (
    <div>
      {name}
      {index}
    </div>
  );
}
