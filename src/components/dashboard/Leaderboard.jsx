import winner from "../../assets/winner.png";
import Star from "../../assets/star.png";


const Leaderboard = () => {
  const data = [1,2,3,4];

  return (
    <div className="w-full bg-gradient-to-t from-[#043F95] to-[#092A5A] text-white rounded-t-[32px] p-3 md:px-6 md:py-12">

      <h2 className="text-center text-2xl border border-yellow-400 py-2 rounded-xl mb-6">
        LEADERBOARD
      </h2>

      <div className="space-y-4">

        {data.map((rank) => (
          <div key={rank} className="bg-white text-black p-3 rounded-xl flex justify-between items-center">

            <div className="flex items-center gap-3">

              <span className="w-6 h-6 border rounded-full flex items-center justify-center text-xs">
                {rank}
              </span>

              <img src={winner} className="w-8 h-8 rounded-full" />
              <i className="fas fa-crown"></i>

              <div>
                <p className="font-bold">Giulia Verdini</p>
                <p className="flex items-center gap-1">
                  <img src={Star} className="w-3 h-3" />
                  <img src={Star} className="w-3 h-3" />
                  <img src={Star} className="w-3 h-3" />
                  <img src={Star} className="w-3 h-3" />
                  <img src={Star} className="w-3 h-3" />
                </p>
              </div>

            </div>

            <span className="text-yellow-500 font-bold">
              {rank === 1 ? 2980 : 2721}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Leaderboard;