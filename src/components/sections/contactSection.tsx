import { CONTACT_DATA } from "../../data/contact";

export const ContactSection = () => {
	const {
		email,
		linkedIn,
		linkedInDisplay,
		resumeUrl,
		availabilityStatus,
		description,
		label,
	} = CONTACT_DATA;

	return (
		<section className="w-full py-24 px-8 md:px-24 bg-white border-t border-slate-200">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* LEFT: Branding */}
					<div className="space-y-6">
						<p className="display-cap text-blue-900">Communication Gateway</p>
						<h2 className="h1 text-slate-900 leading-tight">{label}</h2>
						<p className="text-slate-500 max-w-md font-light leading-relaxed">
							{description}
						</p>

						{/* Dynamic Availability Status */}
						<div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
							<span
								className={`flex h-2 w-2 rounded-full ${availabilityStatus ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
							/>
							{availabilityStatus
								? "ACTIVE & OPEN TO OPPORTUNITIES"
								: "CURRENTLY ENGAGED"}
						</div>
					</div>

					{/* RIGHT: Contact Methods */}
					<div className="grid gap-4">
						<a
							href={`mailto:${email}`}
							className="group p-8 border border-slate-200 flex justify-between items-center hover:bg-slate-900 hover:border-slate-900 transition-all duration-500"
						>
							<div>
								<p className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
									Official Email
								</p>
								<p className="text-lg font-serif font-bold text-slate-900 group-hover:text-white transition-colors">
									{email}
								</p>
							</div>
							<div className="text-slate-300 group-hover:text-white transition-transform group-hover:translate-x-2">
								→
							</div>
						</a>

						<a
							href={linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							className="group p-8 border border-slate-200 flex justify-between items-center hover:bg-slate-900 hover:border-slate-900 transition-all duration-500"
						>
							<div>
								<p className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
									Professional Network
								</p>
								<p className="text-lg font-serif font-bold text-slate-900 group-hover:text-white transition-colors">
									{linkedInDisplay}
								</p>
							</div>
							<div className="text-slate-300 group-hover:text-white transition-transform group-hover:translate-x-2">
								→
							</div>
						</a>

						<div className="pt-4 grid grid-cols-2 gap-4">
							<a
								href={resumeUrl}
								download
								className="btn-executive text-center flex justify-center items-center gap-2 no-underline"
							>
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
								>
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
								</svg>
								Download Brief
							</a>
							<button
								onClick={() => (window.location.href = `mailto:${email}`)}
								className="btn-outline-executive"
							>
								Schedule Call
							</button>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-32 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 font-mono text-[10px] tracking-widest">
					<p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
					<div className="flex gap-8 uppercase font-bold tracking-[0.2em]">
						<span className="hover:text-blue-900 cursor-pointer transition-colors">
							Privacy Policy
						</span>
						<span className="hover:text-blue-900 cursor-pointer transition-colors">
							Terms of Briefing
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
