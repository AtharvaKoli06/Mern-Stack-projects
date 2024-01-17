import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productDetailsWithId } from "../redux/slices/DataWithId";

const NormalCard = ({ item }) => {
  const dispatch = useDispatch();
  const [stopRender, setStopRender] = useState(true);
  useEffect(() => {
    dispatch(productDetailsWithId(item.id));
  }, [stopRender]);

  const handleRendering = () => {
    setStopRender(!stopRender);
  };

  return (
    <>
      <Link
        to="/cardDetails"
        key={item.id}
        className="m-auto w-60 cursor-pointer"
        onClick={handleRendering}
      >
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
      </Link>
    </>
  );
};

export default NormalCard;
