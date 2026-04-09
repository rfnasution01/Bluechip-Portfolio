import { motion, type Variants } from "framer-motion";
import { CASE_STUDIES_DATA } from "../../data/caseStudies";

const container: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
	},
};

export const CaseStudySection = () => {
	return (
		<section className="w-full py-24 px-8 md:px-24 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto">
				{/* Section Header: The Strategic Narrative */}
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-4"
					>
						<div className="flex items-center gap-3">
							<span className="h-px w-8 bg-blue-900" />
							<p className="display-cap text-blue-900">Project Portfolio</p>
						</div>
						<h2 className="h1 text-slate-900">Case Studies & Analysis</h2>
					</motion.div>
					<motion.p
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-slate-500 max-w-md text-sm font-light italic leading-relaxed"
					>
						Deep-dive into complex business challenges, showcasing the
						transition from data extraction to strategic implementation.
					</motion.p>
				</div>

				{/* Case Studies: The Analytical Grid */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid lg:grid-cols-2 gap-10"
				>
					{CASE_STUDIES_DATA.map((caseItem, index) => (
						<motion.div
							key={index}
							variants={fadeInUp}
							className="group relative bg-white border border-slate-200 p-10 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-blue-900/20 transition-all duration-500"
						>
							{/* Background Indexing */}
							<span className="absolute top-6 right-10 text-6xl font-serif italic text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
								0{index + 1}
							</span>

							<div className="space-y-8">
								{/* Header */}
								<div>
									<p className="text-[10px] font-bold text-blue-800 uppercase tracking-[0.2em] mb-2">
										Role: {caseItem.role}
									</p>
									<h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-950">
										{caseItem.title}
									</h3>
								</div>

								{/* Analytical Breakdown */}
								<div className="grid gap-6">
									<div className="space-y-2">
										<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-red-800 rounded-full" />
											The Challenge
										</p>
										<p className="text-sm text-slate-600 leading-relaxed font-light">
											{caseItem.problem}
										</p>
									</div>

									<div className="space-y-2">
										<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-blue-800 rounded-full" />
											Strategic Solution
										</p>
										<p className="text-sm text-slate-800 leading-relaxed font-medium">
											{caseItem.solution}
										</p>
									</div>
								</div>
							</div>

							{/* Impact Metrics (The "Selling" Point) */}
							<div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-4">
								{caseItem.impact.map((imp, i) => (
									<div key={i} className="flex flex-col">
										<span className="text-[10px] font-bold text-blue-900 uppercase tracking-tighter opacity-60">
											Result
										</span>
										<span className="text-sm font-bold text-slate-900 tracking-tight">
											{imp}
										</span>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
