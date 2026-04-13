export type CaseStudy = {
	title: string;
	role: string;
	problem: string;
	solution: string;
	impact: string[];
};

export const CASE_STUDIES_DATA: CaseStudy[] = [
	{
		title: "Retail Revenue Optimization Strategy",
		role: "Business Analyst Intern",
		problem:
			"A mid-sized retail company experienced a 15% revenue decline over two consecutive quarters.",
		solution:
			"Conducted segmentation and profitability analysis to identify underperforming product lines. Recommended pricing adjustments and targeted campaigns.",
		impact: [
			"Projected revenue increase of 18%",
			"Customer churn reduced by 12%",
		],
	},
	{
		title: "Financial Reporting Process Automation",
		role: "Audit Intern",
		problem:
			"Manual reporting workflows caused delays and increased risk of errors.",
		solution:
			"Designed an automated reporting system using structured templates and advanced spreadsheet logic.",
		impact: [
			"Reporting time reduced by 30%",
			"Improved data accuracy and audit reliability",
		],
	},
];
