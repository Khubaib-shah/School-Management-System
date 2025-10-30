const Announcement = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Announcement</h2>
        <button className="text-gray-500 text-sm">View All</button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-SkyLight rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">School Reopening</h3>
            <span className="text-gray-400 bg-white p-1 text-xs rounded-md">
              2025-10-20
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Classes will resume from September 1st.
          </p>
        </div>
        <div className="bg-PurpleLight rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">School Reopening</h3>
            <span className="text-gray-400 bg-white p-1 text-xs rounded-md">
              2025-10-20
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Classes will resume from September 1st.
          </p>
        </div>
        <div className="bg-YellowLight rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">School Reopening</h3>
            <span className="text-gray-400 bg-white p-1 text-xs rounded-md">
              2025-10-20
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Classes will resume from September 1st.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
