import { motion, type Variants } from "framer-motion";
import { LEADERSHIP_DATA } from "../../data/leadership";
import { CONTACT_DATA } from "@/data/contact";

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
};

export const LeadershipSection = () => {
	return (
		<section className="w-full py-24 px-8 md:px-24 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="border-b border-slate-900 pb-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
					<div className="space-y-2">
						<p className="display-cap text-blue-900">Soft Power & Governance</p>
						<h2 className="h2 text-slate-900">Leadership & Impact</h2>
					</div>
					<div className="text-right hidden md:block">
						<p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">
							Scale / Influence / Results
						</p>
					</div>
				</div>

				{/* Leadership Table-Style List */}
				<div className="grid gap-0">
					{LEADERSHIP_DATA.map((itemData, index) => (
						<motion.div
							key={index}
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="group grid md:grid-cols-12 gap-6 py-10 border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 px-4 -mx-4"
						>
							{/* Period (Span 2) */}
							<div className="md:col-span-2">
								<span className="text-xs font-mono font-bold text-blue-900/40 group-hover:text-blue-900 transition-colors">
									[{itemData.period}]
								</span>
							</div>

							{/* Organization & Role (Span 4) */}
							<div className="md:col-span-4 space-y-1">
								<h3 className="text-lg font-serif font-bold text-slate-900 group-hover:translate-x-1 transition-transform duration-300">
									{itemData.role}
								</h3>
								<p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
									{itemData.organization}
								</p>
							</div>

							{/* Impact Statement (Span 6) */}
							<div className="md:col-span-6 flex items-start gap-4">
								<div className="h-px w-8 bg-blue-900/20 mt-3 hidden lg:block" />
								<p className="text-sm text-slate-600 leading-relaxed font-light italic">
									"{itemData.impact}"
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Final Call to Action Footer (Soft) */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="mt-20 p-12 bg-slate-900 text-center space-y-6"
				>
					<h3 className="text-white font-serif text-2xl italic">
						Ready for a Strategic Partnership?
					</h3>
					<p className="text-slate-400 text-sm max-w-lg mx-auto font-light">
						Currently seeking Management Trainee or Analyst opportunities where
						I can apply rigorous financial methodology and leadership.
					</p>
					<div className="pt-4">
						<button
							onClick={() => {
								const message = encodeURIComponent(
									"Halo, saya tertarik dengan jasa pembuatan website portofolio. Bisa dijelaskan lebih lanjut?",
								);

								const url = `https://wa.me/${CONTACT_DATA.phone}?text=${message}`;
								window.open(url, "_blank");
							}}
							className="btn-executive bg-white text-slate-900 hover:bg-blue-50"
						>
							Schedule Executive Briefing
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
