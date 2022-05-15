import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export interface MenuProps {
  icon: IconType;
  route: string;
}

function MenuItem({ icon, route }: MenuProps) {
  return (
    <li className="px-5">
      <div>
        <Link href={route} passHref>
          <div>
            <ul className="text-white py-7" />
            {React.createElement(icon)}
          </div>
        </Link>
      </div>
    </li>
  );
}

export default MenuItem;
