import {
	HeroSection,
	ExperienceSection,
	CompetenciesSection,
	CaseStudySection,
	LeadershipSection,
	EducationSection,
	ContactSection,
} from "@/components/sections";

const DashboardPage = () => {
	return (
		<main className="w-full min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
			{/* Hero */}
			<HeroSection />

			{/* Experience */}
			<ExperienceSection />

			<CompetenciesSection />

			<CaseStudySection />

			<LeadershipSection />

			<EducationSection />

			<ContactSection />
		</main>
	);
};

export default DashboardPage;
