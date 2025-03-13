export interface WhyChooseUsData {
  id: number;
  title: string;
  description: string;
}

export const whyChooseUsHeaders = {
  title:
    "Why Choose <span className='text-accent'>KayB-MD</span> for Your Medical Billing Needs?",
  imgSrc: "/background_images/whychoose_doctor.jpg",
};

export const whyChooseUsData: WhyChooseUsData[] = [
  {
    id: 1,
    title: "Maximize Revenue Potential",
    description:
      "Our advanced billing solutions ensure accurate claim submissions, reducing denials and boosting your revenue stream.",
  },
  {
    id: 2,
    title: "Cut Administrative Burdens",
    description:
      "We handle complex billing tasks, freeing your staff to focus on patient care while reducing operational costs.",
  },
  {
    id: 3,
    title: "Industry-Leading Expertise",
    description:
      "With years of experience, our billing specialists provide precise coding and compliance-driven solutions.",
  },
  {
    id: 4,
    title: "Faster Claim Processing",
    description:
      "Our efficient workflows accelerate reimbursements, improving cash flow for your practice.",
  },
  {
    id: 5,
    title: "100% Compliance & Security",
    description:
      "We adhere to the latest HIPAA regulations, ensuring your data remains safe and compliant at all times.",
  },

  // {
  //   id: 1,
  //   title: "Reliable & Accurate Billing",
  //   description:
  //     "We ensure every claim is processed with precision, minimizing errors and maximizing reimbursements.",
  // },
  // {
  //   id: 2,
  //   title: "Streamlined Revenue Cycle",
  //   description:
  //     "From claim submission to payment posting, we handle the entire process efficiently to improve cash flow.",
  // },
  // {
  //   id: 3,
  //   title: "Compliance You Can Trust",
  //   description:
  //     "Our billing practices strictly follow HIPAA and industry regulations, ensuring secure and compliant transactions.",
  // },
  // {
  //   id: 4,
  //   title: "Dedicated Support Team",
  //   description:
  //     "We offer personalized support to address your billing concerns and keep your practice running smoothly.",
  // },
  // {
  //   id: 5,
  //   title: "Focus on Patient Care",
  //   description:
  //     "By outsourcing your billing to KayB-MD, you can spend less time on paperwork and more time on patient care.",
  // },
];
