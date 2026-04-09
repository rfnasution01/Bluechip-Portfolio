import { EDUCATION_DATA } from "../../data/education";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

export const EducationSection = () => {
	return (
		<section className="w-full py-24 px-8 md:px-24 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					className="mb-16 space-y-2"
				>
					<p className="display-cap text-blue-900">Academic Foundation</p>
					<h2 className="h2 text-slate-900">Education & Credentials</h2>
				</motion.div>

				<div className="grid lg:grid-cols-12 gap-12 items-start">
					{/* LEFT: Major & GPA (Span 5) */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						className="lg:col-span-5 bg-white border border-slate-200 p-10 shadow-sm relative overflow-hidden"
					>
						{/* Background Accent */}
						<div className="absolute top-0 right-0 p-4 opacity-[0.05]">
							<svg
								width="80"
								height="80"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="text-blue-900"
							>
								<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
							</svg>
						</div>

						<div className="space-y-6 relative z-10">
							<div>
								<h3 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
									{EDUCATION_DATA.degree}
								</h3>
								<p className="text-blue-800 font-bold tracking-[0.1em] text-xs uppercase mt-2">
									{EDUCATION_DATA.university}
								</p>
							</div>

							<div className="pt-6 border-t border-slate-100 flex items-end gap-4">
								<div>
									<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
										Cumulative GPA
									</p>
									<p className="text-4xl font-serif font-bold text-slate-900 leading-none mt-1">
										{EDUCATION_DATA.gpa.split(" ")[0]}
										<span className="text-lg text-slate-300 font-light">
											{" "}
											/ 4.00
										</span>
									</p>
								</div>
								<div className="mb-1">
									<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-tighter border border-green-100">
										Distinction
									</span>
								</div>
							</div>

							<p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
								Conferred: {EDUCATION_DATA.period}
							</p>
						</div>
					</motion.div>

					{/* RIGHT: Coursework & Honors (Span 7) */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						className="lg:col-span-7 space-y-10"
					>
						{/* Coursework Grid */}
						<div className="space-y-4">
							<p className="display-cap border-b border-slate-200 pb-2">
								Relevant Specialized Coursework
							</p>
							<div className="grid grid-cols-2 gap-4">
								{EDUCATION_DATA.coursework?.map((course, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="w-1.5 h-1.5 bg-blue-900 opacity-20" />
										<span className="text-sm text-slate-600 font-medium">
											{course}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Honors & Awards */}
						<div className="space-y-4">
							<p className="display-cap border-b border-slate-200 pb-2">
								Academic Honors
							</p>
							<div className="space-y-4">
								{EDUCATION_DATA.achievements?.map((ach, i) => (
									<div key={i} className="flex gap-4 group">
										<span className="text-blue-900 font-serif italic font-bold">
											0{i + 1}
										</span>
										<p className="text-sm text-slate-700 leading-relaxed group-hover:text-blue-900 transition-colors">
											{ach}
										</p>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
