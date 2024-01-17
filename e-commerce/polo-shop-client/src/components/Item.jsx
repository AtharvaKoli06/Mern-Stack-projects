import React from "react";

const Item = ({ item }) => {
  return (
    <li>
      <img src={item.img} className="w-full max-w-full max-h-full m-auto" />
    </li>
  );
};

export default Item;
