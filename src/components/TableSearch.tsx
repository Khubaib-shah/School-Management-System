import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="flex items-center gap-2 rounded-full ring-[1.5px] ring-gray-300 px-2 w-full">
      <Image src="/search.png" alt="Search image" width={16} height={16} />

      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 outline-none bg-transparent"
      />
    </div>
  );
};

export default TableSearch;
