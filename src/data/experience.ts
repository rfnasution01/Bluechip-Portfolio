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
		company: "PwC Indonesia",
		role: "Audit Intern",
		period: "Jan 2025 - Mar 2025",
		location: "Jakarta, Indonesia",
		details: {
			situation:
				"Handled financial audit processes for mid-sized corporate clients.",
			task: "Assist senior auditors in preparing financial statements and compliance reports.",
			action:
				"Analyzed financial data, validated transactions, and collaborated with cross-functional teams.",
			results: [
				"Improved audit efficiency by 20%",
				"Validated transactions worth Rp 1.2B",
			],
		},
	},
	{
		company: "ABC Consulting",
		role: "Business Analyst Intern",
		period: "Aug 2024 - Dec 2024",
		location: "Remote",
		details: {
			situation: "Client faced declining revenue in retail segment.",
			task: "Identify root cause and propose data-driven strategy.",
			action: "Conducted market analysis and built financial projection model.",
			results: [
				"Increased projected revenue by 15%",
				"Reduced operational cost by 10%",
			],
		},
	},
];
