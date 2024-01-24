import React from "react";
import { Link } from "react-router-dom";

const NormalCard = ({ item, onClick, id }) => {
  return (
    <>
      <Link to={`/cardDetails/${id}`}>
        <div className="m-auto w-60 cursor-pointer" onClick={() => onClick(id)}>
          <img src={item.img[1].img} className="m-auto w-52 cursor-pointer" />
          <div className="w-52 mx-auto">
            <strong>
              <span className="">{item.title}</span>
            </strong>
            <div className="flex items-center justify-between">
              <span>{item.cost}</span>
              <span className="line-through">{item.mrpPrice}</span>
              <div>
                <div className="text-green-300">{item.discount}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NormalCard;
