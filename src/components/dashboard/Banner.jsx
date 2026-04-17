
import Doc from "../../assets/doc.png";
import appendicamice from "../../assets/appendicamice 3.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r min-h-32 sm:h-auto py-0 from-[#C1DFFE] to-[#1A71D4] md:rounded-2xl px-3 md:px-6 flex items-center justify-between">

      {/* LEFT IMAGE */}
      <img src={Doc} className="hidden md:block w-40 h-22 -mb-2" />

      {/* PROGRESS SECTION */}
      <div className="flex-1 px-10">
        <div className="relative">

          {/* OUTER TRACK */}
          <div className="h-8 bg-white/30 w-full rounded-full flex items-center px-1">

            {/* INNER PROGRESS */}
            <div className="relative h-6 w-[60%] rounded-full overflow-hidden">

              {/* STRIPED BG */}
              <div className="absolute inset-0 bg-yellow-300"></div>

              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 10px, transparent 10px, transparent 20px)",
                }}
              />

              {/* LEFT LABEL (500 XP) */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white text-xs px-2 py-[2px] rounded-full shadow">
                500 XP
              </div>

            </div>
          </div>

          {/* CURRENT XP LABEL */}
          <div className="absolute top-[-28px] left-[60%] -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            650 XP
          </div>

          {/* BLUE MARKER */}
          <div className="absolute top-[-10px] left-[60%] -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 text-sm font-semibold">
            800 XP
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img src={appendicamice} className="w-40 h-22 -mb-2 hidden md:block" />
    </div>
  );
};

export default Banner;