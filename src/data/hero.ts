export type HeroData = {
	badge: string;
	name: string;
	title: string;
	description: string;
	ctaPrimary: string;
	ctaSecondary: string;
	image?: string;
	credentials: string[]; // Sertifikasi (CPA, CFA, dll)
	keyMetrics: { label: string; value: string }[]; // Hasil terukur
};

export const HERO_DATA: HeroData = {
	badge: "Executive Candidate: Management Trainee Program",
	name: "Alexander Carter",
	title: "Financial Auditor & Risk Advisory Specialist",
	description:
		"Specializing in financial assurance and enterprise risk advisory. Proven ability to optimize audit processes and deliver actionable insights for complex business environments.",
	ctaPrimary: "Download Resume",
	ctaSecondary: "View Case Studies",
	credentials: [
		"CPA Candidate",
		"Certified in Financial Modeling",
		"SAP FI/CO",
	],
	keyMetrics: [
		{ label: "Audit Efficiency Improvement", value: "+25%" },
		{ label: "Transactions Analyzed", value: "$500K+" },
	],
};
