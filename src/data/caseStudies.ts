export type CaseStudy = {
	title: string;
	role: string;
	problem: string;
	solution: string;
	impact: string[];
};

export const CASE_STUDIES_DATA: CaseStudy[] = [
	{
		title: "Retail Revenue Decline Analysis",
		role: "Business Analyst Intern",
		problem:
			"Client experienced a consistent 15% decline in revenue over two quarters in the retail segment.",
		solution:
			"Conducted market segmentation analysis and identified underperforming product lines. Proposed pricing optimization and targeted marketing strategy.",
		impact: [
			"Increased projected revenue by 18%",
			"Reduced customer churn by 12%",
		],
	},
	{
		title: "Financial Reporting Automation",
		role: "Audit Intern",
		problem:
			"Manual financial reporting process caused delays and increased risk of human error.",
		solution:
			"Developed automated Excel-based reporting system using advanced formulas and structured templates.",
		impact: [
			"Reduced reporting time by 30%",
			"Improved data accuracy and consistency",
		],
	},
];
