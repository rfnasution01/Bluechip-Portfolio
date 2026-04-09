import { motion, type Variants } from "framer-motion";
import { COMPETENCIES_DATA } from "../../data/competencies";

const container: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 },
	},
};

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
};

export const CompetenciesSection = () => {
	return (
		<section className="w-full py-24 px-8 md:px-24 bg-white border-y border-slate-100">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
					<div className="lg:col-span-8 space-y-3">
						<p className="display-cap text-blue-900">Technical Validation</p>
						<h2 className="h2 text-slate-900">Core Competencies</h2>
						<p className="text-slate-500 max-w-xl font-light">
							Specialized methodologies and regulatory frameworks utilized in
							high-stakes financial auditing and corporate risk assessment.
						</p>
					</div>
				</div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid lg:grid-cols-12 gap-10"
				>
					{/* LEFT: Methodological Mastery (Span 7) */}
					<div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
						{COMPETENCIES_DATA.groups.map((group, idx) => (
							<motion.div
								key={idx}
								variants={fadeInUp}
								className="p-6 border-l border-slate-200 bg-[#FBFCFD] space-y-4 hover:border-blue-900 transition-colors duration-300"
							>
								<h3 className="text-xs uppercase tracking-widest font-bold text-slate-400">
									{group.title}
								</h3>
								<ul className="space-y-3">
									{group.items.map((item, i) => (
										<li key={i} className="flex items-center gap-3 group">
											<div className="w-1 h-1 bg-blue-900 rounded-full opacity-40" />
											<span className="text-sm font-medium text-slate-700 group-hover:text-blue-900 transition-colors">
												{item}
											</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>

					{/* RIGHT: Credentials & Certifications (Span 5) */}
					<motion.div
						variants={fadeInUp}
						className="lg:col-span-5 bg-slate-900 p-8 shadow-2xl relative overflow-hidden"
					>
						{/* Decorative Watermark */}
						<div className="absolute -right-4 -bottom-4 text-slate-800 font-serif italic text-8xl pointer-events-none opacity-20">
							Valid
						</div>

						<div className="relative z-10 space-y-8">
							<div className="flex items-center justify-between">
								<h3 className="text-white font-serif text-xl italic">
									Professional Credentials
								</h3>
								<div className="h-[1px] w-12 bg-blue-400 opacity-30" />
							</div>

							<div className="space-y-4">
								{COMPETENCIES_DATA.certifications.map((cert, idx) => (
									<div
										key={idx}
										className="group p-5 border border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300"
									>
										<div className="flex justify-between items-start gap-4">
											<div>
												<p className="text-sm font-bold text-blue-400 mb-1 group-hover:text-white transition-colors">
													{cert.name}
												</p>
												<p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
													Issued by: {cert.issuer}
												</p>
											</div>
											<div className="text-slate-600 group-hover:text-blue-400 transition-colors">
												<svg
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2.5"
												>
													<path d="M20 6L9 17l-5-5" />
												</svg>
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="pt-4">
								<p className="text-[10px] text-slate-500 italic leading-relaxed">
									*Official transcripts and digital badges are available upon
									request for verification purposes.
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
