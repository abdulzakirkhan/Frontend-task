import Banner from "../components/dashboard/Banner";
import ProjectList from "../components/dashboard/ProjectList";
import Leaderboard from "../components/dashboard/Leaderboard";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("corsi");
  return (
    <>
      <div className="w-full flex flex-col sm:px-4 lg:px-6 mt-4">
        <Banner />
        {/* MOBILE TABS */}
        <div className="lg:hidden mt-4 flex bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("corsi")}
            className={`flex-1 py-2 rounded-full text-sm font-medium ${
              activeTab === "corsi" ? "bg-[#008DD2] text-white shadow" : ""
            }`}
          >
            Corsi
          </button>

          <button
            onClick={() => setActiveTab("leaderboard")}
            className={`flex-1 py-2 rounded-full text-sm font-medium ${
              activeTab === "leaderboard" ? "bg-[#008DD2] text-white shadow" : ""
            }`}
          >
            Leaderboard
          </button>

          <button
            onClick={() => setActiveTab("storico")}
            className={`flex-1 py-2 rounded-full text-sm font-medium ${
              activeTab === "storico" ? "bg-[#008DD2] text-white shadow" : ""
            }`}
          >
            Storico
          </button>
        </div>
        {/* MOBILE VIEW */}
        <div className="lg:hidden mt-4">
          {activeTab === "corsi" && <ProjectList />}

          {activeTab === "leaderboard" && <Leaderboard />}

          {activeTab === "storico" && (
            <div className="flex items-center justify-center h-40 text-gray-400">
              Empty Tab
            </div>
          )}
        </div>
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
          {/* LEFT */}
          <div className="lg:col-span-7 space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
            <ProjectList />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <Leaderboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
