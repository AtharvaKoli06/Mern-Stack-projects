import React from "react";
import { CiFilter } from "react-icons/ci";

const size = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "38",
  "40",
  "42",
  "44",
];
const color = [
  "Beige",
  "Black",
  "Blue",
  "Brown",
  "Green",
  "Gray",
  "Multicolor",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "White",
  "Yellow",
];
const fit = [
  "Regular",
  "Slim",
  "Straight",
  "Skinny",
  "Slim Tapered",
  "Relaxed",
  "Oversize",
  "Tapered",
  "Comfort",
  "Boot Cut",
  "Loose",
  "Wide Leg",
  "Girlfriend",
  "Flared",
  "MoM Fit",
  "Boxy",
  "Unisex",
  "Painter",
  "Vintage",
  "Anti-Fit",
];
const category = [
  "",
  "Jackets",
  "Jeans",
  "Joggers",
  "Non Denim Trousers",
  "Shirts",
  "Shorts",
  "Sweaters",
  "Sweatshirts",
  "T-shirt",
  "Trousers",
];
const sleeve = [
  "Full Sleeve",
  "Half Sleeve",
  "Raglan Sleeve",
  "Drop Sleeve",
  "Balloon Sleeve",
  "Sleeveless",
  "3/4 Sleeve",
];
const Filter = () => {
  return (
    <>
      <div className="sm:w-1/5 lg:1/4 w-1/3 p-4">
        <div className="w-full border-t-2 p-2">
          <h2 className="text-md font-bold flex items-center">
            <CiFilter />
            <span>Filters</span>
          </h2>
        </div>
        <div style={{ height: "800px", overflow: "scroll" }}>
          <div className="w-full border-b-2 border-t-2 p-2">
            <h2 className="text-md font-bold items-center">Discount</h2>
            <span className="flex items-center m-2">
              <input type="radio" />
              <span className="text-sm font-thin ml-2">30% and more</span>
            </span>
          </div>
          <div className="w-full border-b-2 p-2">
            <h2 className="text-md font-bold items-center">Gender</h2>
            <div className="flex flex-col">
              <span className="m-2">
                <input type="checkbox" />
                <span className="ml-2">Men</span>
              </span>
              <span className="m-2">
                <input type="checkbox" />
                <span className="ml-2">Women</span>
              </span>
              <span className="m-2">
                <input type="checkbox" />
                <span className="ml-2">Unisex</span>
              </span>
            </div>
          </div>
          <div className="w-full border-b-2 p-2">
            <h2 className="text-md font-bold items-center">Category</h2>
            <div className="flex flex-col">
              {category.map((category) => (
                <span className="m-1">
                  <input type="checkbox" />
                  <span className="ml-2">{category}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="w-full border-b-2 p-2">
            <h2 className="text-md font-bold items-center">Fit</h2>
            <div className="flex flex-col">
              {fit.map((fit) => (
                <span className="m-1">
                  <input type="checkbox" />
                  <span className="ml-2">{fit}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="w-full border-b-2 p-2">
            <h2 className="text-md font-bold items-center">Sleeve</h2>
            <div className="flex flex-col">
              {sleeve.map((sleeve) => (
                <span className="m-2">
                  <input type="checkbox" />
                  <span className="ml-2">{sleeve}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="w-full border-b-2li">
            <h2 className="text-md font-bold items-center">Size</h2>
            <div className="grid lg:grid-cols-4 border mt-4">
              {size.map((size) => (
                <div
                  key={size}
                  className="m-2 border p-2 rounded-lg cursor-pointer hover:bg-slate-100"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-b-2 p-2">
            <h2 className="text-md font-bold items-center">Color</h2>
            <div className="flex flex-col">
              <span className="m-2">
                <input
                  type="text"
                  className="bg-slate-50 focus:border-none px-2 py-1 "
                  placeholder="Search "
                />
              </span>
              {color.map((color) => (
                <span className="m-1">
                  <input type="checkbox" />
                  <span className="ml-2">{color}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="w-full border-b-2 border-t-2 p-2">
            <h2 className="text-md font-bold items-center">Price</h2>
            <span className="flex flex-col items-center m-2">
              <input type="range" min={5} max={50} className="w-52" />
              <div className="w-full flex gap-2 item-center justify-between p-2">
                <select name="" id="" className="border p-2 rounded">
                  <option value="">₹MIN</option>
                  <option value="">₹MIN</option>
                  <option value="">₹5</option>
                  <option value="">₹10</option>
                  <option value="">₹15</option>
                  <option value="">₹20</option>
                  <option value="">₹25</option>
                  <option value="">₹30</option>
                  <option value="">₹35</option>
                  <option value="">₹40</option>
                  <option value="">₹45</option>
                </select>
                <h1>To</h1>
                <select name="" id="" className="border p-2 rounded">
                  <option value="">₹50+</option>
                  <option value="">₹50+</option>
                  <option value="">₹5</option>
                  <option value="">₹10</option>
                  <option value="">₹15</option>
                  <option value="">₹20</option>
                  <option value="">₹25</option>
                  <option value="">₹30</option>
                  <option value="">₹35</option>
                  <option value="">₹40</option>
                  <option value="">₹45</option>
                </select>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
