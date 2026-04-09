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
	badge: "Executive Opportunity: Management Trainee",
	name: "Ardiansyah Putra, S.E.",
	title: "Financial Auditor & Strategic Risk Consultant",
	description:
		"Specializing in Financial Assurance and Corporate Risk Advisory. Proven track record in streamlining audit workflows and delivering high-stakes financial insights for complex organizational structures.",
	ctaPrimary: "Download Executive Brief",
	ctaSecondary: "View Case Studies",
	credentials: ["CPA Candidate", "Brevet A & B Certified", "SAP FI/CO"],
	keyMetrics: [
		{ label: "Audit Efficiency", value: "+25%" },
		{ label: "Assets Managed", value: "IDR 1.2B+" },
	],
};
