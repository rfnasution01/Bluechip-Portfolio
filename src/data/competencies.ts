export type CompetencyGroup = {
	title: string;
	items: string[];
};

export type Certification = {
	name: string;
	issuer: string;
};

export type CompetenciesData = {
	groups: CompetencyGroup[];
	certifications: Certification[];
};

export const COMPETENCIES_DATA: CompetenciesData = {
	groups: [
		{
			title: "Audit & Compliance",
			items: [
				"Audit Frameworks",
				"Financial Reporting",
				"Internal Control",
				"Regulatory Compliance",
			],
		},
		{
			title: "Risk & Governance",
			items: [
				"Risk Assessment",
				"Corporate Governance",
				"Risk Mitigation Strategy",
			],
		},
		{
			title: "Finance & Analysis",
			items: ["Financial Modeling", "Variance Analysis", "Budget Forecasting"],
		},
	],
	certifications: [
		{
			name: "Certified Public Accountant (CPA) - In Progress",
			issuer: "AICPA",
		},
		{
			name: "Brevet A & B Tax Certification",
			issuer: "Ikatan Konsultan Pajak Indonesia",
		},
	],
};
