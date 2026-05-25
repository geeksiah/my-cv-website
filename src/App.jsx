import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Database, 
  Layout,
  BookOpen,
  Briefcase,
  Award,
  ChevronRight
} from 'lucide-react';

const Header = () => (
  <header className="bg-slate-900 text-white pt-20 pb-16 px-6 md:px-12 lg:px-24">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Joseph Donkor</h1>
      <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
        Software Engineer & Tech Non-Profit Founder
      </h2>
      <p className="text-slate-300 max-w-3xl text-lg leading-relaxed mb-8">
        Innovative Software Engineer with a strong foundation in Computer Science. Adept at building full-stack platforms, integrating third-party AI systems, and architecting mobile-first user experiences. Demonstrated success in leveraging technology for social impact, leading cross-functional teams, and treating tech education as a catalyst for community development. Seeking a Graduate Assistantship to contribute to advanced Computer Science and AI research.
      </p>
      
      <div className="flex flex-wrap gap-4 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-blue-400" />
          <span>Accra, Ghana</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-blue-400" />
          <a href="mailto:kojocreateve@gmail.com" className="hover:text-white transition-colors">kojocreateve@gmail.com</a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-blue-400" />
          <span>+233 554247000</span>
        </div>
      </div>
      
      <div className="flex gap-4 mt-8">
        <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a href="#" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
          <Github size={18} />
          GitHub
        </a>
        <a href="#" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
          <ExternalLink size={18} />
          Portfolio
        </a>
      </div>
    </div>
  </header>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
  </div>
);

const ExperienceCard = ({ role, company, location, date, bulletPoints }) => (
  <div className="mb-10 relative pl-8 md:pl-0">
    <div className="hidden md:block absolute left-[-41px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-500 shadow-sm z-10"></div>
    <div className="md:border-l-0 border-l-2 border-slate-200 absolute left-0 top-0 bottom-0 md:hidden"></div>
    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 md:hidden"></div>
    
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
      <div>
        <h4 className="text-xl font-bold text-slate-800">{role}</h4>
        <div className="text-lg text-blue-600 font-medium">{company}</div>
      </div>
      <div className="text-slate-500 font-medium flex flex-col md:items-end mt-1 md:mt-0">
        <span>{date}</span>
        <span className="text-sm">{location}</span>
      </div>
    </div>
    <ul className="space-y-3 mt-4">
      {bulletPoints.map((point, idx) => (
        <li key={idx} className="flex items-start text-slate-700">
          <ChevronRight size={18} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
          <span className="leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const EducationCard = ({ degree, school, date, gpa, coursework }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6 hover:shadow-md transition-shadow">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h4 className="text-xl font-bold text-slate-800">{degree}</h4>
        <div className="text-lg text-slate-600 font-medium">{school}</div>
      </div>
      <div className="text-slate-500 font-medium mt-2 md:mt-0 bg-slate-100 px-3 py-1 rounded-full text-sm inline-block">
        {date}
      </div>
    </div>
    
    {gpa && (
      <div className="mb-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-semibold">
        <Award size={16} />
        Cumulative GPA: {gpa}
      </div>
    )}
    
    {coursework && (
      <div>
        <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Relevant Coursework</h5>
        <div className="flex flex-wrap gap-2">
          {coursework.map((course, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200">
              {course}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        <Icon size={20} />
      </div>
      <h4 className="text-lg font-bold text-slate-800">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Header />

      <main className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-16 space-y-20">
        
        {/* Education Section */}
        <section>
          <SectionTitle icon={BookOpen} title="Education" />
          <div className="space-y-6">
            <EducationCard 
              degree="Bachelor of Science, Computer Science"
              school="University of the People"
              date="Expected Dec 2026"
              gpa="3.02 / 4.00"
              coursework={[
                "Data Structures (A)", 
                "Operating Systems 1 & 2 (A-)", 
                "Software Engineering 1 & 2 (A)", 
                "Databases 1 & 2 (A)", 
                "Web Programming 1 & 2 (A+)", 
                "Systems & Application Security (A)"
              ]}
            />
            <EducationCard 
              degree="Associate of Science, Computer Science"
              school="University of the People"
              date="2024"
            />
          </div>
        </section>

        {/* Technical Projects & Product Architecture */}
        <section>
          <SectionTitle icon={Code} title="Technical Projects & Architecture" />
          <div className="relative md:border-l-2 border-slate-200 md:ml-4 md:pl-10">
            <ExperienceCard 
              role="Lead Developer & Architect"
              company="Ferchr & Eventpeepo"
              location="Accra, Ghana"
              date="Recent"
              bulletPoints={[
                "Architected \"Ferchr,\" a social discovery platform for event photos, successfully integrating and configuring facial recognition APIs to connect global creators.",
                "Developed \"Eventpeepo,\" a high-conversion, mobile-first digital guestbook system featuring automated QR code generation and secure user data handling.",
                "Designed the system architecture, focusing on scalable database management and secure user authentication protocols."
              ]}
            />
            <ExperienceCard 
              role="Founder & Lead Developer"
              company="Sellwyk.com"
              location="Accra, Ghana"
              date="Recent"
              bulletPoints={[
                "Developed and deployed a comprehensive online course marketplace serving as an avenue to promote passive income generation and skill-sharing for SMEs and artisans.",
                "Managed the full product development lifecycle from wireframing (Figma) to frontend deployment."
              ]}
            />
          </div>
        </section>

        {/* Professional & Leadership Experience */}
        <section>
          <SectionTitle icon={Briefcase} title="Leadership & Professional Experience" />
          <div className="relative md:border-l-2 border-slate-200 md:ml-4 md:pl-10">
            <ExperienceCard 
              role="Founder & Technical Director"
              company="Innonurt (Licensed NPO)"
              location="Accra, Ghana"
              date="2023 - Present"
              bulletPoints={[
                "Founded and scaled a NITA-certified tech education initiative focusing on digital literacy, AI exposure, and cybersecurity for underserved youth.",
                "Organized the TechNukrats Tour 2025, reaching over 1,500 students across multiple schools; data analytics indicated a 1.4-point increase in student confidence levels in STEM out of a 10-point scale.",
                "Forged strategic partnerships with 7+ educational institutions, establishing \"TechNurt\" clubs and achieving an 85% internship placement rate for program graduates.",
                "Spearheading the TechNukrats Tour 2026 to establish permanent technology labs in Senior High Schools across Ghana."
              ]}
            />
            <ExperienceCard 
              role="Freelance Technical Lead"
              company="SavantisTech (Mijo Platform)"
              location="Accra, Ghana"
              date="Jan 2024 - Present"
              bulletPoints={[
                "Manage frontend architecture and UX delivery for a ride-hailing platform supporting over 1,000 active users.",
                "Lead the complete product development lifecycle for driver, rider, and fleet management applications, prioritizing highly functional, non-cluttered interfaces."
              ]}
            />
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <SectionTitle icon={Layout} title="Technical Skills" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCategory 
              icon={Code}
              title="Core Programming"
              skills={["Data Structures", "Algorithms", "HTML", "CSS", "JavaScript", "React"]}
            />
            <SkillCategory 
              icon={Database}
              title="Systems & Architecture"
              skills={["API Integration", "SQL/NoSQL", "Database Management", "Systems Security", "Mobile-First Design"]}
            />
            <SkillCategory 
              icon={Layout}
              title="Design & Management"
              skills={["Figma", "UX/UI Prototyping", "Agile/Scrum", "Project Management", "Tech Education", "Curriculum Design"]}
            />
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="max-w-5xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Joseph Donkor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}