import React, { useState, useEffect } from "react";
import {
  FaPowerOff,
  FaVolumeMute,
  FaUserCircle ,
} from "react-icons/fa";
import { IoPlayCircleOutline, IoSettingsSharp } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";

const Header = () => {
  const [time, setTime] = useState(0); // Thời gian tính bằng giây
  const [activeNav, setActiveNav] = useState("playRoom");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer); // Dọn dẹp khi component bị hủy
  }, []);

  // Định dạng lại thời gian sang dạng HH:MM:SS
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="bg-purple-950 text-white shadow-md py-3 border-b-[1px] border-gray-400">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img
            src="./images/logo_header.png"
            alt="IU✦BET"
            className="h-12"
          />
        </div>

        <div className="flex space-x-14 h-full">
          <span
            className={`flex items-center gap-1 cursor-pointer text-xl ${
              activeNav === "playRoom" ? "text-white" : "text-gray-400"
            } hover:text-gray-200`}
            onClick={() => setActiveNav("playRoom")}
          >
            <IoPlayCircleOutline />
            플레이 룸
          </span>
          <span
            className={`flex items-center gap-1 cursor-pointer text-xl ${
              activeNav === "roomSettings" ? "text-white" : "text-gray-400"
            } hover:text-gray-200`}
            onClick={() => setActiveNav("roomSettings")}
          >
            <IoSettingsSharp />
            룸 설정
          </span>
          <span
            className={`flex items-center gap-1 cursor-pointer text-xl ${
              activeNav === "formManagement" ? "text-white" : "text-gray-400"
            } hover:text-gray-200`}
            onClick={() => setActiveNav("formManagement")}
          >
            <BsFillGrid3X3GapFill />
            서식 관리
          </span>
          <span
            className={`flex items-center gap-1 cursor-pointer text-xl ${
              activeNav === "optionSettings" ? "text-white" : "text-gray-400"
            } hover:text-gray-200`}
            onClick={() => setActiveNav("optionSettings")}
          >
            <FiSliders />
            옵션 관리
          </span>
        </div>


        <div className="flex space-x-12 items-center">
          <div className="text-green-400 font-mono text-3xl">{formatTime(time)}</div>
          <button className="text-red-500 hover:text-red-600">
            <FaPowerOff size={20} />
          </button>
          <button className="text-gray-400 hover:text-gray-500">
            <FaVolumeMute size={20} />
          </button>
          <button className="text-gray-400 hover:text-gray-500">
            <BsQrCodeScan size={20} />
          </button>
          <div className="flex items-center gap-1 bg-gray-600 text-gray-300 px-3 py-1 rounded-full font-semibold">
            <FaUserCircle />
            aa88
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
