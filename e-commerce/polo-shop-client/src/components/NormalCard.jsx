import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productDetailsWithId } from "../redux/slices/DataWithId";

const NormalCard = ({ item }) => {
  const dispatch = useDispatch();
  const { _id } = item;
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handlePage = useRef({ effect: false });

  useEffect(() => {
    dispatch(productDetailsWithId(_id));
    handlePage.current["effect"] = true;
  }, [query]);

  const handleItemId = () => {
    navigate("/cardDetails");
  };

  return (
    <>
      <div className="m-auto w-60 cursor-pointer" onClick={handleItemId}>
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
    </>
  );
};

export default NormalCard;
