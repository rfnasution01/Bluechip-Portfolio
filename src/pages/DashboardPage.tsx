import { useEffect } from "react";
import type { FormEvent } from "react";

import { executivePortfolio as data } from "@/data/executivePortfolio";

const SectionHeading = ({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) => (
	<div className="reveal mb-16">
		<p className={`small-caps mb-4 ${dark ? "text-gold" : "text-slate-500"}`}>{eyebrow}</p>
		<h2 className={`font-serif text-4xl md:text-5xl tracking-[-0.02em] ${dark ? "text-ivory" : "text-navy"}`}>{title}</h2>
	</div>
);

const DashboardPage = () => {
	useEffect(() => {
		const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.14 }
		);
		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	}, []);

	const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const name = String(form.get("name") || "Executive Inquiry");
		const email = String(form.get("email") || "");
		const message = String(form.get("message") || "");
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nContext:\n${message}`);
		window.location.href = `mailto:${data.profile.email}?subject=${encodeURIComponent("Secure Introduction Request")}&body=${body}`;
	};

	return (
		<main className="min-h-screen bg-ivory text-slate-700 selection:bg-gold selection:text-navy">
			<header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-navy/95 backdrop-blur-xl">
				<nav className="mx-auto flex h-20 max-w-container items-center justify-between px-6 xl:px-0">
					<a href="#hero" className="font-serif text-xl tracking-[0.08em] text-ivory" aria-label="Arthur Vance home">
						AV
					</a>
					<div className="hidden items-center gap-10 md:flex">
						{data.navigation.map((item) => (
							<a key={item.href} href={item.href} className="small-caps text-slate-300 hover:text-gold">
								{item.label}
							</a>
						))}
					</div>
					<a href={data.profile.pdf} download className="btn-gold hidden sm:inline-flex">
						Download Profile PDF
					</a>
				</nav>
			</header>

			<section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-20 text-ivory">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,169,97,0.12),transparent_30%)]" />
				<div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] xl:px-0">
					<div className="reveal relative z-10">
						<p className="small-caps mb-8 text-gold">{data.profile.kicker}</p>
						<h1 className="font-serif text-[clamp(44px,5vw,72px)] leading-[0.96] tracking-[-0.01em]">{data.profile.name}</h1>
						<p className="mt-5 text-lg text-slate-300">{data.profile.role}</p>
						<p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300">{data.profile.subtitle}</p>
						<div className="mt-12 flex flex-col gap-4 sm:flex-row">
							<a href={`mailto:${data.profile.email}?subject=Secure Consultation Request`} className="btn-primary">
								Book Secure Consultation
							</a>
							<a href="#credentials" className="btn-ghost-light">
								View Credentials
							</a>
						</div>
						<div className="mt-16">
							<p className="small-caps mb-6 text-slate-500">As featured in:</p>
							<div className="flex flex-wrap gap-x-10 gap-y-4 text-sm font-semibold tracking-[0.18em] text-slate-400">
								{data.featuredIn.map((brand) => <span key={brand}>{brand}</span>)}
							</div>
						</div>
					</div>
					<div className="reveal relative z-10 mx-auto w-full max-w-md border border-slate-700">
						<img src={data.profile.image} alt="Formal black and white executive portrait of Arthur Vance" className="h-[560px] w-full object-cover grayscale" />
						<div className="absolute inset-0 bg-navy/40" />
					</div>
				</div>
			</section>

			<section className="section bg-slate-dark">
				<div className="mx-auto max-w-container px-6 xl:px-0">
					<div className="reveal bg-ivory p-8 shadow-premium md:p-16">
						<div className="grid gap-8 md:grid-cols-3">
							{data.stats.map((stat) => (
								<div key={stat.label}>
									<p className="font-serif text-5xl tabular-nums text-navy md:text-6xl">{stat.value}</p>
									<p className="mt-3 small-caps text-slate-500">{stat.label}</p>
								</div>
							))}
						</div>
						<div className="my-12 h-px bg-slate-200" />
						<blockquote className="font-serif text-2xl leading-10 text-navy md:text-3xl">“{data.testimonial}”</blockquote>
						<p className="mt-6 small-caps text-slate-500">— {data.testimonialBy}</p>
					</div>
				</div>
			</section>

			<section id="expertise" className="section bg-ivory">
				<div className="mx-auto max-w-container px-6 xl:px-0">
					<SectionHeading eyebrow="Capability Matrix" title="Areas of Core Expertise" />
					<div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
						{data.expertise.map((item, index) => (
							<article key={item.title} className="reveal premium-card p-8">
								<div className="mb-10 flex h-12 w-12 items-center justify-center border border-gold text-gold">{String(index + 1).padStart(2, "0")}</div>
								<h3 className="font-serif text-3xl text-navy">{item.title}</h3>
								<ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
									{item.metrics.map((metric) => <li key={metric}>— {metric}</li>)}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="engagements" className="section bg-navy">
				<div className="mx-auto max-w-container px-6 xl:px-0">
					<SectionHeading eyebrow="Selected Work" title="Selected Engagements (2018 - 2026)" dark />
					<div className="divide-y divide-slate-800">
						{data.engagements.map((item) => (
							<article key={item.client} className="reveal grid gap-8 py-10 md:grid-cols-[150px_1fr]">
								<div className="flex h-20 w-28 items-center justify-center border border-slate-700 font-serif text-2xl text-slate-400 grayscale">{item.logo}</div>
								<div>
									<h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-ivory">{item.client} <span className="text-gold">|</span> {item.role}</h3>
									<p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">{item.outcome}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="insights" className="section bg-ivory">
				<div className="mx-auto max-w-container px-6 xl:px-0">
					<SectionHeading eyebrow="Published Thinking" title="Insights & Thought Leadership" />
					<div className="grid gap-8 lg:grid-cols-2">
						{data.insights.map((insight) => (
							<article key={insight.title} className="reveal premium-card p-10 md:p-12">
								<p className="small-caps text-slate-500">{insight.source}</p>
								<h3 className="mt-8 font-serif text-3xl leading-tight text-navy md:text-4xl">{insight.title}</h3>
								<a href={insight.url} target="_blank" rel="noreferrer" className="mt-10 inline-flex small-caps text-gold hover:text-navy">Read Insight →</a>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="credentials" className="section bg-ivory pt-0">
				<div className="mx-auto max-w-container px-6 xl:px-0">
					<SectionHeading eyebrow="Credential Verification" title="Professional Credentials" />
					<div className="grid gap-8 lg:grid-cols-3">
						{Object.entries(data.credentials).map(([key, values]) => (
							<div key={key} className="reveal border-t-2 border-gold pt-8">
								<h3 className="small-caps mb-8 text-navy">{key.replace(/([A-Z])/g, " $1")}</h3>
								<ul className="space-y-6 text-slate-600">
									{values.map((value) => <li key={value}>{value}</li>)}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="section bg-navy">
				<div className="mx-auto grid max-w-container gap-12 px-6 lg:grid-cols-[0.45fr_0.55fr] xl:px-0">
					<div className="reveal">
						<p className="small-caps mb-6 text-gold">Confidential Mandates</p>
						<h2 className="font-serif text-5xl leading-tight text-ivory">{data.contact.heading}</h2>
						<p className="mt-8 max-w-md text-slate-400">{data.contact.subtext}</p>
						<div className="mt-12 space-y-4 text-slate-300">
							<p>Direct: <a className="text-ivory hover:text-gold" href={`mailto:${data.profile.email}`}>{data.profile.email}</a></p>
							<p>Secure: <a className="text-ivory hover:text-gold" href={`mailto:${data.profile.secureEmail}`}>{data.profile.secureEmail}</a></p>
							<p>LinkedIn: <a className="text-ivory hover:text-gold" href={data.profile.linkedin} target="_blank" rel="noreferrer">/in/arthurvance-executive</a></p>
						</div>
					</div>
					<form onSubmit={handleContactSubmit} className="reveal space-y-5">
						<input name="name" required placeholder={data.contact.placeholders.name} className="field" />
						<input name="email" required type="email" placeholder={data.contact.placeholders.email} className="field" />
						<textarea name="message" required rows={7} placeholder={data.contact.placeholders.message} className="field resize-none" />
						<button type="submit" className="btn-primary w-full justify-center md:w-auto">Request Secure Introduction</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default DashboardPage;
