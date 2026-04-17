import api from "./axios";

export const getUser = () => api.get("/user");
export const getProjects = () => api.get("/projects");
export const getLeaderboard = () => api.get("/leaderboard");
export const postNotes = (data) => api.post("/notes", data);