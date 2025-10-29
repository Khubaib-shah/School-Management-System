import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search BAR */}

      <div className="hidden md:flex items-center gap-2 rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="Search image" width={16} height={16} />

        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 outline-none bg-transparent"
        />
      </div>

      {/* ICON And USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />

          <div className="absolute -top-3 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-white text-xs font-semibold">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium leading-3">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        <Image
          src="/avatar.png"
          alt="Profile Image"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
