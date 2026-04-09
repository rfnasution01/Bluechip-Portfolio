export type EducationItem = {
	university: string;
	degree: string;
	period: string;
	gpa: string;
	achievements?: string[];
	coursework?: string[];
};

export const EDUCATION_DATA: EducationItem = {
	university: "University of Indonesia",
	degree: "Bachelor of Economics",
	period: "2021 - 2025",
	gpa: "3.85 / 4.00",
	achievements: [
		"Awarded Academic Excellence Scholarship",
		"Top 5% of graduating class",
	],
	coursework: [
		"Financial Accounting",
		"Risk Management",
		"Corporate Finance",
		"Business Analytics",
	],
};
