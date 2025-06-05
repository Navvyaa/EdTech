export interface YearWiseQuestionCount {
  [year: string]: number;
}

export type SubjectName = "Physics" | "Chemistry" | "Mathematics";

export type ChapterStatus = "Not Started" | "In Progress" | "Completed";

export type FilterStatus = ChapterStatus | "All";

export type ClassLevel = "Class 11" | "Class 12" | "All";

export type PhysicsUnit = "Mechanics 1" | "Mechanics 2" | "Thermodynamics" | "Electromagnetism" | "Optics" | "Modern Physics" | "Miscellaneous";

export type ChemistryUnit = "Physical Chemistry" | "Inorganic Chemistry" | "Organic Chemistry";

export type MathematicsUnit = "Algebra" | "Trigonometry" | "Coordinate Geometry" | "Calculus" | "Vector" | "Miscellaneous";

export interface SubjectUnits {
  Physics: PhysicsUnit[];
  Chemistry: ChemistryUnit[];
  Mathematics: MathematicsUnit[];
}

export interface ChapterData {
  subject: SubjectName;
  chapter: string;
  class: ClassLevel;
  unit: string;
  yearWiseQuestionCount: YearWiseQuestionCount;
  questionSolved: number;
  status: ChapterStatus;
  isWeakChapter: boolean;
}

export interface ChapterFilters {
  classLevel: ClassLevel;
  units: string[];
  status: FilterStatus;
  showWeakChapters: boolean;
  currentSubject: SubjectName ;
}

export interface ChapterState {
  chapters: ChapterData[];
  filters: ChapterFilters;
  loading: boolean;
  error: string | null;
}

export type AllSubjectsChapterData = ChapterData[];