import { create } from "zustand";
import * as API from "../api/endpoints";

export const useStore = create((set) => ({
  user: null,
  projects: [],
  leaderboard: [],
  selectedProject: null,
  sidebarOpen: false,
  loading: false,
  error: null,

  fetchData: async () => {
    try {
      set({ loading: true });

      const [user, projects, leaderboard] = await Promise.all([
        API.getUser(),
        API.getProjects(),
        API.getLeaderboard(),
      ]);

      set({
        user: user.data,
        projects: projects.data,
        leaderboard: leaderboard.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  selectProject: (project) => set({ selectedProject: project }),

  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));