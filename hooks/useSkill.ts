import { create } from 'zustand';

interface useSkillStore {
  skillName: string;
  setSkillName: (skillName: string) => void;
}

const useSKill = create<useSkillStore>((set) => ({
  skillName: '',
  setSkillName: (skillName: string) => set({ skillName: skillName })
}))

export default useSKill;