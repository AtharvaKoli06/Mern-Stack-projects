import React, { useState } from "react";
import Feature from "./Feature";

import {
  FaMarker,
  FaRegAddressCard,
  FaResolving,
  FaAward,
} from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { TiUserDelete } from "react-icons/ti";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdSecurityUpdateGood } from "react-icons/md";
import { GrDocumentUpdate, GrUpdate } from "react-icons/gr";
import { IoIosCreate } from "react-icons/io";
import {
  FaRestroom,
  FaSquarePollHorizontal,
  FaTimeline,
} from "react-icons/fa6";
import { FcLeave } from "react-icons/fc";
import { SiRemark } from "react-icons/si";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { VscRepo } from "react-icons/vsc";

const features = [
  {
    id: 1,
    name: "MARK ATTENDENCE",
    img: <FaMarker size={45} />,
    navigate: "/teacher/mark-attendence",
  },
  {
    id: 2,
    name: "ATTENDENCE REPORT",
    img: <TbReportSearch size={45} />,
    navigate: "/teacher/live-class-attendence-report",
  },
  {
    id: 3,
    name: "DELETE ATTENDENCE",
    img: <TiUserDelete size={45} />,
    navigate: "/teacher/delete-attendence",
  },
  {
    id: 4,
    name: "STUDENT REPORT",
    img: <HiOutlineDocumentReport size={45} />,
    navigate: "/teacher/show-attendence",
  },
  {
    id: 5,
    name: "UPDATE ROLL NO.",
    img: <MdSecurityUpdateGood size={45} />,
    navigate: "/teacher/update-roll",
  },
  {
    id: 6,
    name: "UPDATE SEAT NO.",
    img: <GrDocumentUpdate size={45} />,
    navigate: "/teacher/update-seatno",
  },
  {
    id: 7,
    name: "UPDATE PRN NO.",
    img: <GrUpdate size={45} />,
    navigate: "/teacher/update-Prn",
  },
  {
    id: 8,
    name: "DX ROOM",
    img: <FaRestroom size={45} />,
    navigate: "/teacher/send-mail",
  },
  {
    id: 9,
    name: "ADD MARKS",
    img: <FaRegAddressCard size={45} />,
    navigate: "/teacher/add-marks",
  },
  {
    id: 10,
    name: "CREATE EXAM",
    img: <IoIosCreate size={45} />,
    navigate: "/teacher/create-exam",
  },
  {
    id: 11,
    name: "ONLINE RESULTS",
    img: <FaResolving size={45} />,
    navigate: "/teacher/online-exams",
  },
  {
    id: 12,
    name: "LEAVE NOTE",
    img: <FcLeave size={45} />,
    navigate: "/teacher/leavenote",
  },
  {
    id: 13,
    name: "REMARK",
    img: <SiRemark size={45} />,
    navigate: "/teacher/complaintbox",
  },
  {
    id: 14,
    name: "STUDENT PASSWORD",
    img: <TbPasswordMobilePhone size={45} />,
    navigate: "/teacher/student-password",
  },
  {
    id: 15,
    name: "DAILY REPORT",
    img: <FaSquarePollHorizontal size={45} />,
    navigate: "/teacher/daily-report",
  },
  {
    id: 16,
    name: "REPORTS",
    img: <VscRepo size={45} />,
    navigate: "/teacher/activity",
  },
  {
    id: 17,
    name: "TIMETABLE",
    img: <FaTimeline size={45} />,
    navigate: "/teacher/timetable",
  },
];

const Features = () => {
  const [item, setItem] = useState(features);
  const handleItemClick = (feature) => {
    setItem(feature);
  };
  return (
    <div className="py-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 p-4 bg-slate-600 sm:w-full w-full">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            feature={feature}
            onClick={() => handleItemClick(feature)}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
