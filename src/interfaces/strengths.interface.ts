export interface StrengthsInterface {
  id: string;
  proficiency: string;
}

export interface TypeofStrengthsInterface {
  master: StrengthsInterface[];
  expert: StrengthsInterface[];
  proficient: StrengthsInterface[];
  novice: StrengthsInterface[];
  noexp: StrengthsInterface[];
}
