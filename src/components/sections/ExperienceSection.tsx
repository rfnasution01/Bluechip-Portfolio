import { motion, type Variants } from "framer-motion";
import { EXPERIENCE_DATA } from "../../data/experience";

const container: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const cardItem: Variants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

export const ExperienceSection = () => {
	return (
		<section className="w-full py-24 px-8 md:px-24 bg-[#FDFDFD]">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
				>
					<div className="space-y-2">
						<p className="display-cap text-blue-900">Career Trajectory</p>
						<h2 className="h2 text-slate-900">Professional Experience</h2>
					</div>
					<p className="text-slate-500 max-w-sm text-sm leading-relaxed border-l border-slate-200 pl-4 italic">
						"Focused on delivering measurable impact through structured STAR
						methodology and data-driven insights."
					</p>
				</motion.div>

				{/* Professional Experience List */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-16"
				>
					{EXPERIENCE_DATA.map((exp, index) => (
						<motion.div
							key={index}
							variants={cardItem}
							className="group grid lg:grid-cols-12 gap-8 items-start"
						>
							{/* LEFT: Metadata (Span 4) */}
							<div className="lg:col-span-4 space-y-4">
								<div className="space-y-1">
									<h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
										{exp.company}
									</h3>
									<p className="text-blue-800 font-semibold tracking-wide text-sm uppercase italic">
										{exp.role}
									</p>
								</div>
								<div className="flex flex-col text-xs text-slate-400 font-mono tracking-tighter space-y-1">
									<span>PERIOD: {exp.period}</span>
									<span>LOC: {exp.location || "N/A"}</span>
								</div>
							</div>

							{/* RIGHT: STAR Analysis (Span 8) */}
							<div className="lg:col-span-8 bg-white border border-slate-100 p-8 shadow-sm group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-500">
								<div className="grid md:grid-cols-2 gap-8">
									{/* Context & Action */}
									<div className="space-y-6">
										<div>
											<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
												Context (S/T)
											</p>
											<p className="text-sm text-slate-600 leading-relaxed">
												{exp.details.situation} {exp.details.task}
											</p>
										</div>
										<div>
											<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
												Strategic Action (A)
											</p>
											<p className="text-sm text-slate-700 font-medium leading-relaxed italic">
												"{exp.details.action}"
											</p>
										</div>
									</div>

									{/* Measured Impact (Results) */}
									<div className="bg-slate-50 p-6 border-l-2 border-blue-900">
										<p className="text-[10px] font-bold text-blue-900 uppercase tracking-widest mb-4">
											Measured Impact (R)
										</p>
										<ul className="space-y-4">
											{exp.details.results.map((res, i) => (
												<li key={i} className="flex items-start gap-3">
													<span className="text-blue-900 font-bold text-sm">
														/
													</span>
													<p className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
														{res}
													</p>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
