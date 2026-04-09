import { motion, type Variants } from "framer-motion";
import { HERO_DATA } from "../../data/hero";

// 1. Tambahkan tipe 'Variants' untuk memperbaiki error TypeScript pada Framer Motion
const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			// Gunakan type assertion 'as any' atau casting jika array angka dianggap error
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const HeroSection = () => {
	return (
		<section className="relative w-full min-h-[90vh] flex items-center bg-[#F9FAFB] px-8 md:px-24 py-20 overflow-hidden font-sans">
			{/* 2. Perbaikan properti 'size' menjadi 'backgroundSize' */}
			<div
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
					backgroundSize: "40px 40px",
				}}
			/>

			<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
				{/* LEFT COLUMN */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						visible: { transition: { staggerChildren: 0.1 } },
						hidden: {},
					}}
					className="lg:col-span-7 space-y-8"
				>
					<motion.div variants={fadeInUp} className="flex items-center gap-3">
						<span className="h-[1px] w-12 bg-blue-900" />
						<span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-900">
							{HERO_DATA.badge}
						</span>
					</motion.div>

					<div className="space-y-4">
						<motion.h1
							variants={fadeInUp}
							className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight leading-tight"
						>
							{HERO_DATA.name}
						</motion.h1>
						<motion.h2
							variants={fadeInUp}
							className="text-xl md:text-2xl text-slate-600 font-light max-w-xl italic border-l-2 border-blue-800 pl-4"
						>
							{HERO_DATA.title}
						</motion.h2>
					</div>

					<motion.p
						variants={fadeInUp}
						className="text-lg text-slate-500 max-w-lg leading-relaxed font-light"
					>
						{HERO_DATA.description}
					</motion.p>

					<motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
						{/* Menggunakan class 'btn-executive' dari index.css Anda */}
						<button className="btn-executive shadow-xl shadow-slate-200">
							{HERO_DATA.ctaPrimary}
						</button>
						<button className="btn-outline-executive">
							{HERO_DATA.ctaSecondary}
						</button>
					</motion.div>
				</motion.div>

				{/* RIGHT COLUMN: The Dossier Card */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="lg:col-span-5 hidden lg:block"
				>
					<div className="bg-white border-[0.5px] border-slate-200 shadow-2xl p-10 relative">
						<div className="absolute top-0 left-0 w-full h-1 bg-blue-900" />

						<div className="flex justify-between items-start mb-10">
							<div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-slate-400 font-serif italic text-2xl shadow-inner">
								{HERO_DATA.name
									.split(" ")
									.map((n) => n[0])
									.join("")
									.substring(0, 2)}
							</div>
							<div className="text-right">
								<p className="text-[10px] text-slate-400 uppercase tracking-widest">
									Document Ref.
								</p>
								<p className="text-xs font-mono font-bold text-slate-900">
									#EXEC-{new Date().getFullYear()}-001
								</p>
							</div>
						</div>

						<div className="space-y-6">
							<div>
								<p className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">
									Verified Credentials
								</p>
								<div className="flex flex-wrap gap-2">
									{HERO_DATA.credentials.map((cred) => (
										<span
											key={cred}
											className="text-[11px] px-2 py-1 bg-slate-50 border border-slate-200 text-slate-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors"
										>
											{cred}
										</span>
									))}
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
								{HERO_DATA.keyMetrics.map((metric) => (
									<div key={metric.label}>
										<p className="text-2xl font-serif text-blue-900 font-bold">
											{metric.value}
										</p>
										<p className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">
											{metric.label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
