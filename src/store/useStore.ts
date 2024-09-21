import { create } from "zustand"; // Use named import instead of default import
import { persist } from "zustand/middleware";

type Store = {
  language: string;
  hospital: string;
  setLanguage: (language: string) => void;
  setHospital: (hospital: string) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      language: "en",
      hospital: "hyderabad",
      setLanguage: (language) => set({ language }),
      setHospital: (hospital) => set({ hospital }),
    }),
    {
      name: "care-hospitals-storage",
    }
  )
);

export default useStore;
