export type ContactData = {
	email: string;
	linkedIn: string;
	linkedInDisplay: string;
	resumeUrl: string;
	availabilityStatus: boolean;
	phone: string;
	label: string;
	description: string;
};

export const CONTACT_DATA: ContactData = {
	email: "alex.carter@protonmail.com",
	linkedIn: "https://linkedin.com/in/alexcarter",
	linkedInDisplay: "linkedin.com/in/alexcarter",
	resumeUrl: "/CV.pdf",
	availabilityStatus: true,
	phone: "08123123123",
	label: "Initiate a Strategic Partnership.",
	description: `Currently open for Management Trainee roles, Financial Analyst positions, and Strategic Consultations.`,
};
