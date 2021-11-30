export interface SkillsInterface {
  name: string;
  icon: string;
  strengths: StrengthsInterface[];
}

export interface StrengthsInterface {
  id: string;
  name: string;
  proficiency: string;
  recommendations: number;
  weight: number;
}
export interface user {
  subjectId: number;
  name: string;
  picture: string;
  locationName: string;
}
