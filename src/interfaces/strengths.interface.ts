export interface SkillsInterface {
  name: string;
  icon: string;
  strengths: StrengthsInterface[];
}

export interface StrengthsInterface {
  id: string;
  name: string;
  proficiency: string;
}
