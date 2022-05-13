import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  rotate: string;
}

function Navbar({ rotate }: Props) {
  return (
    <div>
      <div className="w-[100vw] py-1 bg-white text-black">
        <div className={`text-2xl px-[45%] rotate-[${rotate}] font-bold`}>
          TheWeekend
        </div>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
