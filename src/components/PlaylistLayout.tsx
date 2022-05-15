import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  createdBy: string;
  image: string;
  children: any;
}

function PlaylistLayout({
  title,
  subtitle,
  createdBy,
  image,
  children,
}: Props) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex py-10 pl-3 items-end bg-gradient-to-b from-[#160f16] to-[#1d0d1d]">
        <div className="p-5">
          <Image
            src={image}
            alt="image"
            width={180}
            height={180}
            className="box-border shadow-2xl rounded-xl"
          />
        </div>
        <div className="py-8 px-2">
          <div className="py-1">
            <p className="text-xs font-semibold uppercase text-[#66636A]">
              {subtitle}
            </p>
          </div>
          <p className="py-2 text-5xl font-semibold">{title}</p>
          <p className="text-xs float-left text-[#66636A] pr-1">Created by</p>
          <p className="text-xs font-semibold text-white">{createdBy}</p>
        </div>
      </div>
      <div className="py-8 pr-9">{children}</div>
    </div>
  );
}

export default PlaylistLayout;
