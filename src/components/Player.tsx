import ReactHowler from "react-howler";
import {
  BsSkipStart,
  BsSkipEnd,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { IoIosRepeat, IoIosShuffle, IoIosVolumeLow } from "react-icons/io";

function Player() {
  return (
    <div>
      <div>{/* <ReactHowler /> */}</div>
      <div className="flex justify-center items-center h-full">
        <div className="space-x-10">
          <button className="text-[#a99dad] text-2xl">
            <BsSkipStart />
          </button>
          <button className="text-[#a99dad] text-3xl">
            <BsPlayCircleFill />
          </button>
          <button className="text-[#a99dad] text-3xl">
            <BsPauseCircleFill />
          </button>
          <button className="text-[#a99dad] text-2xl">
            <BsSkipEnd />
          </button>
          <button className="text-[#a99dad] text-2xl">
            <IoIosShuffle />
          </button>
          <button className="text-[#a99dad] text-2xl">
            <IoIosRepeat />
          </button>
        </div>
      </div>
      <div className="text-[#a99dad]">
        <div className="flex justify-center text-center">
          <div>
            <p className="text-xs">0:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
