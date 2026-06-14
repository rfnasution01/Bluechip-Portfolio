export const executivePortfolio = {
	profile: {
		name: "ARTHUR VANCE",
		kicker: "AVAILABLE FOR BOARD SEATS AND HIGH-STAKES ADVISORY",
		role: "Executive | Advisor | Corporate Turnaround",
		subtitle:
			"Steering Fortune 500 enterprises through complex market disruptions, post-merger integrations, and multi-billion dollar capital restructurings.",
		image:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
		email: "executive@arthurvance.com",
		secureEmail: "vance@protonmail.ch",
		linkedin: "https://www.linkedin.com/in/arthurvance-executive/",
		pdf: "/CV.pdf",
	},
	featuredIn: ["FORBES", "BLOOMBERG", "WALL STREET JOURNAL", "HARVARD BUSINESS REVIEW"],
	navigation: [
		{ label: "Expertise", href: "#expertise" },
		{ label: "Engagements", href: "#engagements" },
		{ label: "Insights", href: "#insights" },
	],
	stats: [
		{ value: "20+", label: "Years of Active C-Suite Leadership" },
		{ value: "$4.2B+", label: "Aggregate Deal Value Executed" },
		{ value: "14", label: "Fortune 500 Advisory Board Seats" },
	],
	testimonial:
		"Arthur Vance combines sharp fiscal discipline with surgical execution. His intervention during our fiscal 2024 restructuring was the singular catalyst for our market stabilization.",
	testimonialBy: "Chief Executive Officer, Global Infrastructure Group",
	expertise: [
		{
			title: "Mergers & Acquisitions",
			metrics: ["Guided Cross-Border Transactions Exceeding $1.5B.", "Achieved Average Post-Merger Synergy Savings of 18%."]
		},
		{
			title: "Surgical Restructuring",
			metrics: ["Formulated Turnaround Strategies for 4 Distressed Enterprises.", "Average 2.8x EBITDA Growth within 24 Months Post-Intervention."]
		},
		{
			title: "Board Room Governance",
			metrics: ["Mitigated High-Level SEC Regulatory Risks for Tech Conglomerates.", "Established Institutional Risk Frameworks across 5 Jurisdictions."]
		},
		{
			title: "Capital Allocation",
			metrics: ["Rebalanced $900M treasury exposure during volatility cycles.", "Installed disciplined hurdle-rate governance across portfolio companies."]
		},
		{
			title: "Crisis Management",
			metrics: ["Led executive response protocols for multinational operating shocks.", "Protected enterprise value through public-market pressure events."]
		},
		{
			title: "Digital Transformation",
			metrics: ["Modernized enterprise operating systems for legacy industrial groups.", "Reduced reporting latency by 41% through executive data architecture."]
		}
	],
	engagements: [
		{
			client: "Vanguard Energy Corp",
			role: "Interim Chief Executive Officer (14-Month Tenure)",
			logo: "VE",
			outcome:
				"Engineered operational overhaul reducing overhead by 22%, liquidated non-performing assets, and negotiated a critical $450M institutional credit line."
		},
		{
			client: "Apex Global Logistics",
			role: "Lead Restructuring Advisor",
			logo: "AG",
			outcome:
				"Orchestrated a high-stakes operational merger of two legacy logistics brands, resulting in a single market-leading entity valued at $1.8B."
		},
		{
			client: "Helios Technologies",
			role: "Independent Board Director",
			logo: "HT",
			outcome:
				"Oversaw risk mitigation and corporate governance compliance during a high-stakes SEC regulatory transition period."
		}
	],
	insights: [
		{
			source: "Harvard Business Review // January 2026",
			title: "The Architecture of Capital Preservation in High-Inflation Ecosystems.",
			url: "https://hbr.org/"
		},
		{
			source: "McKinsey Quarterly // November 2025",
			title: "Liquidity Strategies: Leading Enterprises Through Sudden Regulatory Shifts.",
			url: "https://www.mckinsey.com/quarterly/overview"
		}
	],
	credentials: {
		education: [
			"Harvard Business School — Master of Business Administration (MBA), 2004.",
			"The Wharton School — B.Sc. in Economics (Summa Cum Laude), 2000."
		],
		certifications: [
			"National Association of Corporate Directors (NACD) — Board Leadership Fellow.",
			"Wharton Executive Education — Advanced Corporate Finance Certification."
		],
		boardPositions: [
			"Vanguard Energy Corp — Chairman of the Audit Committee (2024 - Present).",
			"Helios Financial Group — Non-Executive Independent Director (2021 - 2025)."
		]
	},
	contact: {
		heading: "Let's Discuss Your Next Strategic Move.",
		subtext: "Retainer and advisory engagements are subject to strict conflict-of-interest vetting.",
		placeholders: {
			name: "e.g., Honorable Member / Chief Executive Officer",
			email: "e.g., corporate@enterprise.com",
			message: "Briefly outline the scope of the engagement (M&A, Advisory, Turnaround)..."
		}
	}
} as const;
