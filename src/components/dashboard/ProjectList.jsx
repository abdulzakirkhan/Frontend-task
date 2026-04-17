import image from "../../assets/images.jpg";

const ProjectList = () => {
  const tasks = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex-1 md:pr-4 space-y-5 !h-[200px] !border-red-300 ">

      {tasks.map((t) => (
        <div
          key={t}
          className="bg-[#EDEDED] px-6 py-5 rounded-2xl hover:shadow-md transition-all"
        >
          {/* TOP ROW */}
          <div className="flex items-center gap-4">

            {/* AVATAR */}
            <img
              src={image}
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* TITLE */}
            <h3 className="text-[#0A84C6] text-lg font-semibold">
              Admin logica test {t}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm mt-2 ml-14">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>

        </div>
      ))}

    </div>
  );
};

export default ProjectList;