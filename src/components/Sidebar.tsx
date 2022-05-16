import { RiHomeLine } from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
import Link from "next/link";
import MenuItem, { MenuProps } from "./MenuItem";

const menus: MenuProps[] = [
  {
    icon: RiHomeLine,
    route: "/",
  },
  {
    icon: MdManageSearch,
    route: "/browse",
  },
  {
    icon: MdManageSearch,
    route: "/browse",
  },
  {
    icon: MdManageSearch,
    route: "/browse",
  },
];

function Sidebar() {
  return (
    <div className="w-full drop-shadow-sm">
      <div className="h-[calc(100vh_-_100px)] bg-violet-900 px-7 text-[#847B8A]">
        <div className="h-full">
          <div className="mb-6 py-24">
            <ul>
              {menus.map((menu) => (
                <MenuItem
                  key={menu.route}
                  icon={menu.icon}
                  route={menu.route}
                />
              ))}
            </ul>
            {/* <div className="h-[80%] text-sm py-5 fixed">
              <ul>
                {playlists.map((playlist) => (
                  <li className="px-5" key={playlist}>
                    <div>
                      <Link href="/" passHref>
                        <div className="cursor-pointer mb-3">{playlist}</div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
