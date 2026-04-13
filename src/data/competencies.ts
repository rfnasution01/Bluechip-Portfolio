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
				"Audit Frameworks (IFRS/GAAP)",
				"Financial Reporting",
				"Internal Controls",
				"Regulatory Compliance",
			],
		},
		{
			title: "Risk & Governance",
			items: [
				"Enterprise Risk Assessment",
				"Corporate Governance",
				"Risk Mitigation Strategy",
			],
		},
		{
			title: "Finance & Analytics",
			items: ["Financial Modeling", "Variance Analysis", "Budget Forecasting"],
		},
	],
	certifications: [
		{
			name: "Certified Public Accountant (CPA) - In Progress",
			issuer: "AICPA",
		},
		{
			name: "Financial Modeling & Valuation Analyst (FMVA)",
			issuer: "CFI",
		},
	],
};
