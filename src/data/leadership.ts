export type LeadershipItem = {
	role: string;
	organization: string;
	period: string;
	impact: string;
};

export const LEADERSHIP_DATA: LeadershipItem[] = [
	{
		role: "Head of Finance Division",
		organization: "Student Executive Board",
		period: "2024 - 2025",
		impact:
			"Managed organizational budget and improved financial reporting efficiency by 25%",
	},
	{
		role: "Project Leader",
		organization: "National Business Case Competition",
		period: "2023",
		impact:
			"Led a team of 5 members to reach Top 3 finalists among 100+ participants",
	},
];
