export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="p-4 bg-gray-100 rounded-xl cursor-pointer hover:scale-[1.02] transition"
    >
      <h3 className="font-bold text-blue-600">{project.title}</h3>
      <p className="text-sm text-gray-500">{project.description}</p>
    </div>
  );
}