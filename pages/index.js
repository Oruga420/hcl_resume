import Head from 'next/head';

const expertise = [
  'AI Solutions Architecture',
  'Generative AI',
  'Agentic Workflows',
  'Model Deployment',
  'RAG',
  'Cloud: GCP / AWS / Vercel',
  'Next.js',
  'Python',
  'Salesforce Development',
  'QA Engineering',
  'Automation Testing',
  'Governance & Compliance',
  'English / Spanish',
];

const experiences = [
  {
    role: 'AI Solutions Architect',
    company: 'Assent',
    location: 'Canada',
    dates: 'February 2025 - Present',
    bullets: [
      'Designed and deployed secure GenAI architectures for a regulated compliance platform using GCP, OpenAI, Anthropic, and Gemini models with live RAG connections.',
      'Achieved over $1 million in savings and saved the company over 20,000 man-hours in a single year by implementing Agentic Workflows and custom MCP tools to replace manual labor.',
      'Drove internal AI adoption metrics from 47% to 97%, ensuring teams effectively utilized new tools for productivity gains.',
      'Established documentation and security patterns to allow admins and developers to move from prototype to production without losing control of cost or quality.',
    ],
  },
  {
    role: 'AI Solutions Architect',
    company: 'Sesh | Ai Solutions',
    location: 'Toronto, Ontario',
    dates: 'November 2021 - Present',
    bullets: [
      'Designed the architecture for over 120 GenAI applications, all of which are currently in productive stages.',
      'Built and deployed more than 90 chatbots solving specific day-to-day operational problems for over 30 different clients.',
      'Lead a community of 100+ people, providing constant education on AI news, tutorials, and demos to help members extrapolate AI tech into their daily tasks.',
      'Delivered webinars and talks for groups like Latinas in Tech and Somos Latinos in Tech Ottawa chapter.',
    ],
  },
  {
    role: 'Salesforce Consultant',
    company: 'Online Business Systems',
    location: 'Toronto, Ontario',
    dates: 'June 2024 - November 2024',
    bullets: [
      'Configured AI assistants and copilot-style experiences, defining use cases and wiring data access safely for clients.',
      'Developed reusable patterns and configurations for Marketing Cloud Account Engagement (MCAE) to accelerate client onboarding.',
    ],
  },
  {
    role: 'Salesforce Manager / AI Lead',
    company: 'Globalization Partners',
    location: 'Ontario, Canada',
    dates: 'November 2018 - November 2023',
    bullets: [
      "Led a GenAI-focused development stream, building the first versions of 'GIA', an internal company chatbot.",
      'Managed a Salesforce org with 1,000+ licenses, ensuring data model integrity and security while integrating AI-driven tooling for Jira ticket handling.',
      'Utilized LLMs to support development patterns while keeping alignment with strict governance and compliance.',
    ],
  },
  {
    role: 'QA / PMP',
    company: 'HCL Technologies',
    location: 'Guadalajara, Mexico',
    dates: 'August 2013 - May 2016',
    bullets: [
      'Managed offshore QA teams, reporting progress in daily standups and ensuring strict adherence to Agile/SCRUM practices.',
      'Flagged risks and mitigations early to prevent surprises at release time, covering functional, automation, and performance testing.',
      'Built a strong foundation in structured delivery, backlog management, and traceability that informs current architectural work.',
    ],
  },
];

const education = [
  {
    title: 'Ingenieria en Sistemas',
    place: 'Universidad Marista de MAcrida',
    dates: '2004 - 2007',
    extra: 'Certifications: Salesforce Certified AI Associate (x3), Salesforce Certified Administrator (SCA)',
  },
];

export default function Home() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      <Head>
        <title>Alejandro De La Mora | Resume</title>
        <meta
          name="description"
          content="AI Solutions Architect and former HCLTech employee with expertise across GenAI, cloud, and automation."
        />
      </Head>

      <button className="download-btn" onClick={handlePrint}>
        Download PDF
      </button>

      <div className="floating-bubbles" aria-hidden>
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>

      <main className="page">
        <div className="card hero">
          <div className="name-block">
            <h1>Alejandro De La Mora</h1>
            <div className="role">AI Solutions Architect and former HCLTech employee</div>
            <p className="summary">
              AI Solutions Architect and former HCLTech employee with extensive experience deploying scalable AI
              workflows and cloud architectures on GCP, AWS, and Vercel. Expert in bridging the gap between model
              development and production, having designed architectures for over 120 GenAI applications and achieving
              over $1 million in operational savings. Proven ability to drive AI adoption from 47% to 97% within
              regulated enterprise environments and lead technical teams in delivering high-impact automation strategies.
            </p>
          </div>
          <div className="contacts">
            <div className="contact-card" aria-label="Contact Information">
              <div className="contact-item">+1 437 243 3693</div>
              <div className="contact-item">alex@seshwithfriends.org</div>
              <div className="contact-item">
                <a href="https://www.linkedin.com/in/amorac/" target="_blank" rel="noreferrer noopener">
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <a href="http://www.eloruga.com" target="_blank" rel="noreferrer noopener">
                  Website
                </a>
              </div>
              <div className="contact-item">
                <a href="https://github.com/Oruga420" target="_blank" rel="noreferrer noopener">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card section">
          <h2>Areas of Expertise</h2>
          <div className="pill-list">
            {expertise.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="card section">
          <h2>Work Experience</h2>
          <div className="experience">
            {experiences.map((job) => (
              <div className="experience-card" key={`${job.role}-${job.company}`}>
                <div className="experience-header">
                  <div>
                    {job.role} | {job.company} ({job.location})
                  </div>
                  <div className="experience-meta">{job.dates}</div>
                </div>
                <ul className="bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="card section">
          <h2>Education & Certifications</h2>
          <div className="education">
            {education.map((edu) => (
              <div className="education-card" key={edu.title}>
                <div className="experience-header">
                  <div>
                    {edu.title} | {edu.place}
                  </div>
                  <div className="experience-meta">{edu.dates}</div>
                </div>
                {edu.extra ? <div className="experience-meta">{edu.extra}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
