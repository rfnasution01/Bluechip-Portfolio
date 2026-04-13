export type LeadershipItem = {
	role: string;
	organization: string;
	period: string;
	impact: string;
};

export const LEADERSHIP_DATA: LeadershipItem[] = [
	{
		role: "Head of Finance",
		organization: "Student Government Association",
		period: "2024 - 2025",
		impact:
			"Managed organizational budget and improved reporting efficiency by 25%",
	},
	{
		role: "Team Leader",
		organization: "International Business Case Competition",
		period: "2023",
		impact:
			"Led a team of 5 to achieve Top 3 placement among 100+ participants",
	},
];
