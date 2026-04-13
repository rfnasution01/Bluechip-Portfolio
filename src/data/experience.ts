export type ExperienceItem = {
	company: string;
	role: string;
	period: string;
	location?: string;
	details: {
		situation: string;
		task: string;
		action: string;
		results: string[];
	};
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
	{
		company: "Deloitte",
		role: "Audit Intern",
		period: "Jan 2025 - Mar 2025",
		location: "Singapore",
		details: {
			situation:
				"Supported audit engagements for mid-sized corporate clients across multiple industries.",
			task: "Assist in financial reporting review and compliance assessment.",
			action:
				"Performed data validation, reconciliations, and collaborated with audit teams.",
			results: [
				"Improved audit efficiency by 20%",
				"Analyzed transactions exceeding $500K",
			],
		},
	},
	{
		company: "Global Consulting Group",
		role: "Business Analyst Intern",
		period: "Aug 2024 - Dec 2024",
		location: "Remote",
		details: {
			situation: "Client faced declining performance in retail operations.",
			task: "Identify root causes and recommend strategic improvements.",
			action:
				"Conducted market analysis and built financial projection models.",
			results: [
				"Projected revenue growth of 15%",
				"Reduced operational costs by 10%",
			],
		},
	},
];
