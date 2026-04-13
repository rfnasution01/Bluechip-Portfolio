export type EducationItem = {
	university: string;
	degree: string;
	period: string;
	gpa: string;
	achievements?: string[];
	coursework?: string[];
};

export const EDUCATION_DATA: EducationItem = {
	university: "National University of Singapore",
	degree: "Bachelor of Business Administration (Finance)",
	period: "2021 - 2025",
	gpa: "3.85 / 4.00",
	achievements: [
		"Dean’s List for Academic Excellence",
		"Top 5% of graduating class",
	],
	coursework: [
		"Financial Accounting",
		"Corporate Finance",
		"Risk Management",
		"Business Analytics",
	],
};
