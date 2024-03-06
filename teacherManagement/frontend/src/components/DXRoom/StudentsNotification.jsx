import React from "react";
import { BiMessageAltDots } from "react-icons/bi";
import StudentEnrollNoSearch from "../StudentEnrollNoSearch";
import { TbMessage2 } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";

const StudentsNotification = () => {
  return (
    <>
      <div className="w-full p-10">
        <div className="border-b-2 pb-1 flex items-center justify-between ">
          <div className="flex mt-5 gap-2">
            <div className="flex items-center justify-center">
              <BiMessageAltDots size={30} />
              <h1>MESSAGES</h1>
            </div>
            <StudentEnrollNoSearch students={"hello"} />
          </div>
          <div className="flex items-center justify-center sm:text-lg text-xs ">
            <TbMessage2 size={30} />
            <h1>STUDENT CHAT BOX</h1>
            <h1>(0)</h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 w-full gap-5">
          <div className="w-full mt-10 col-span-2 ">
            <div className="w-full rounded-t-lg bg-orange-300 p-2">
              <h1>MESSAGE LISTS</h1>
            </div>
            <div className="h-96 bg-slate-300 w-full text-white"></div>
            <div className="h-16 border-t-2 w-full rounded-b-lg text-center p-2">
              <textarea
                name="message"
                id="message"
                cols="156"
                rows="2"
                className="w-full text-blue-500 focus:bg-blue-800"
                placeholder="PLEASE SELECT A STUDENT FROM STUDENTS LISTS "
                readOnly
              ></textarea>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="w-full rounded-t-lg bg-orange-500 p-2">
              <h1>STUDENTS NOTIFICATION LISTS</h1>
            </div>
            <div className="h-96 bg-slate-400 w-full text-white"></div>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="w-full rounded-t-lg bg-orange-500 p-2">
            <h1>MESSAGE LISTS</h1>
          </div>
          <div className="h-96 bg-slate-400 w-full text-white"></div>
          <div className="h-16 border-t-2 w-full rounded-b-lg text-center p-2">
            <textarea
              name="message"
              id="message"
              cols="156"
              rows="2"
              className="w-full text-blue-500"
              placeholder="Write Your message..."
            ></textarea>
          </div>
          <div className="my-6 w-full flex items-end gap-5 justify-end ">
            <button type="submit" className="rounded-md text-md cursor-pointer">
              <CiImageOn size={40} />
            </button>
            <button
              type="submit"
              className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
            >
              SEND
            </button>
          </div>
          <div className="my-6 w-full flex items-center gap-5 justify-center ">
            <button
              type="submit"
              className="bg-green-400 flex items-center gap-5 justify-center rounded-md text-md p-2 cursor-pointer"
            >
              <FiDelete size={20} />
              <span>CLOSE CHART BOX</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsNotification;
