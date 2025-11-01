const Pagination = () => {
  return (
    <div className="flex justify-between">
      <button
        disabled
        className="bg-gray-200 py-2 px-4 rounded-md 
      font-semibold text-xs disabled:opacity-50 disabled::cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-Sky">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        <button className="px-2 rounded-sm">...</button>
        <button className="px-2 rounded-sm">10</button>
      </div>
      <button
        className="bg-gray-200 py-2 px-4 rounded-md 
      font-semibold text-xs disabled:opacity-50 disabled::cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
