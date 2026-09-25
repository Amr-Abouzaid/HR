import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, BrainCircuit, BarChart3, Users, Workflow, Award, BriefcaseBusiness, Menu, X, ExternalLink } from "lucide-react";
import "./styles.css";

const highlights = [
  ["14+", "Years in HR"], ["5", "Industries"], ["1,000+", "Employees supported in a major L&D scope"], ["95%+", "Training engagement achieved"], ["80%", "Turnover reduction linked to orientation"], ["7", "Digital transformation initiatives"]
];
const expertise = ["Workforce Planning & Budgeting","Organizational Design & OD","Talent Acquisition & ATS","Learning & Development","Employee Relations","Compensation & Benefits","HR Operations","People Analytics","Executive Workforce Reporting","Performance Management","Change Management","Employee Experience"];
const projects = [
 {icon:Workflow,title:"Enterprise ATS",tag:"Talent technology",challenge:"Fragmented recruitment workflows and limited pipeline visibility.",solution:"Led the implementation of an enterprise Applicant Tracking System, aligning HR, hiring managers and technology stakeholders.",impact:"Strengthened recruitment workflow, governance and talent pipeline visibility.",tech:"ATS • Analytics • Workflow design"},
 {icon:Users,title:"Employee Intranet",tag:"Employee experience",challenge:"Employees needed easier access to information, communication and services.",solution:"Served as Project Owner for a centralized employee intranet, shaping requirements and the employee journey.",impact:"Improved communication, engagement and access to information.",tech:"Intranet • Content design • Change adoption"},
 {icon:BrainCircuit,title:"AI-Supported Salary Calculator",tag:"AI & automation",challenge:"Offer preparation involved repetitive compensation calculations and manual checks.",solution:"Spearheaded an AI-supported calculator for day-to-day offer preparation and compensation calculations.",impact:"Simplified HR service delivery and supported faster, more consistent preparation.",tech:"AI • Business rules • Process automation"},
 {icon:BarChart3,title:"Performance Self-Service",tag:"Digital HR",challenge:"Performance activities required significant manual administration.",solution:"Established an automated employee self-service solution for performance management.",impact:"Reduced manual administration and enabled a more scalable performance process.",tech:"Employee self-service • HRIS • Automation"},
 {icon:BriefcaseBusiness,title:"E-Archiving & Process Automation",tag:"HR operations",challenge:"Payroll, personnel and document processes relied on manual handling.",solution:"Automated payroll and personnel procedures and created an electronic archive database.",impact:"Improved accessibility, consistency and operational efficiency.",tech:"E-archiving • Payroll workflow • Digital records"},
 {icon:Award,title:"Digital Learning & Gamification",tag:"Capability building",challenge:"Learning needed to be more accessible, measurable and engaging.",solution:"Initiated Al Amal Learning Hub and gamification, supported by structured learning paths.",impact:"Expanded digital learning and strengthened capability development.",tech:"Learning hub • Gamification • Learning paths"}
];
const industries=[
 ["Automotive","Strategic HR partnership, workforce planning, organization design, rewards, employee experience and enterprise HR transformation."],
 ["Telecommunications","Large-scale learning, workforce capability, operational coordination and analytics, including support for 1,000+ employees."],
 ["Industrial","Job evaluation, learning paths, succession planning, performance management and digital learning innovation."],
 ["E-commerce","Agile HR operations, policies, workforce planning, performance systems and digital records in a fast-moving environment."],
 ["Government","Competency frameworks, organizational metrics, policies, development programs and alignment with institutional strategy."]
];
const roles=[
 ["2024–Present","HR Business Partner","Ezz El-Arab Automotive Group"],
 ["2023–2024","HR Supervisor → HR Manager","Bazzarry"],
 ["2022–2023","Learning & Development Supervisor","Ezz El-Arab Automotive Group"],
 ["2021–2022","Senior Learning & Development Specialist","Al-Amal Al-Sharif"],
 ["2018–2021","Senior HR Specialist → HR Supervisor","GAFI"],
 ["2013–2018","Logistics → HR Training & Development","TE-Data, WE Group"],
 ["2011–2012","HR & Administration Specialist","Online Marketing Professionals"]
];
const articles=[
 ["AI in Human Resources","From experimentation to practical HR value"],
 ["HR Analytics","Moving beyond dashboards to better decisions"],
 ["Employee Experience","Designing services around employee needs"],
 ["Organizational Effectiveness","Aligning structure, capability and strategy"]
];
const fade={initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.14},transition:{duration:.55}};
function Photo({label="Professional photo"}){return <div className="photo-placeholder" role="img" aria-label={label}><span>AA</span><small>{label}</small></div>}
function SectionTitle({eyebrow,title,copy}){return <motion.div {...fade} className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy&&<p>{copy}</p>}</motion.div>}
function App(){
 const [open,setOpen]=React.useState(false);
 return <>
 <header><a className="brand" href="#top">AMR <b>ABOUZAID</b></a><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?"open":""}>{["About","Impact","Portfolio","Experience","Insights","Contact"].map(x=><a onClick={()=>setOpen(false)} key={x} href={'#'+x.toLowerCase()}>{x}</a>)}</nav></header>
 <main id="top">
  <section className="hero"><div className="hero-glow"></div><motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="hero-copy"><p className="eyebrow light">STRATEGIC HR LEADERSHIP • DIGITAL TRANSFORMATION</p><h1>Transforming organizations through <em>people, data & AI.</em></h1><p className="lead">I’m Amr Abouzaid, a strategic HR Business Partner and transformation leader with 14+ years of cross-industry experience. I help leaders connect people strategy with business performance, then turn that strategy into practical, technology-enabled results.</p><div className="credentials"><span>PHRi</span><span>CIPD Level 5, in progress</span></div><div className="actions"><a className="btn primary" href="/amr-abouzaid-resume.pdf" download><Download size={18}/>Download Resume</a><a className="btn ghost" href="#contact">Contact Me</a><a className="icon-btn" href="https://linkedin.com/in/amrabouzaid" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a></div></motion.div><motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}} className="hero-photo"><Photo label="Replace with executive portrait"/><div className="floating-card"><b>HR Transformation</b><span>Strategy → Adoption → Impact</span></div></motion.div></section>
  <section id="about" className="section split"><SectionTitle eyebrow="About" title="A business-first HR leader with a builder’s mindset." copy="My career has been shaped by one principle: people strategy creates value when it directly supports the business. I partner with executives to translate growth priorities into workforce plans, operating models, talent decisions and employee experiences."/><motion.div {...fade} className="about-copy"><p>Across automotive, telecommunications, industrial, e-commerce and government environments, I have led and supported work spanning the full HR agenda. My added strength is execution: I combine strategic HR leadership with hands-on delivery of analytics, digital platforms, AI-supported tools and process automation.</p><div className="chip-grid">{expertise.map(x=><span key={x}>{x}</span>)}</div></motion.div></section>
  <section id="impact" className="section metrics-wrap"><SectionTitle eyebrow="Career impact" title="Evidence over adjectives." copy="Selected figures and transformation themes drawn from my professional experience."/><div className="metrics">{highlights.map(([n,l],i)=><motion.div {...fade} transition={{duration:.4,delay:i*.05}} className="metric" key={l}><strong>{n}</strong><span>{l}</span></motion.div>)}</div></section>
  <section id="portfolio" className="section"><SectionTitle eyebrow="Transformation portfolio" title="Turning HR challenges into scalable solutions." copy="A portfolio spanning talent technology, employee experience, automation, digital learning and workforce insight."/><div className="project-grid">{projects.map((p,i)=><motion.article {...fade} className="project" key={p.title}><div className="project-top"><p.icon/><span>{p.tag}</span></div><h3>{p.title}</h3><dl><dt>Challenge</dt><dd>{p.challenge}</dd><dt>Solution</dt><dd>{p.solution}</dd><dt>Business impact</dt><dd>{p.impact}</dd></dl><p className="tech">{p.tech}</p></motion.article>)}</div></section>
  <section className="section technologies"><SectionTitle eyebrow="Digital toolkit" title="Technology applied with purpose."/><div className="tech-row">{["Microsoft Copilot","Power BI","Advanced Excel","ATS & HRIS","Employee Self-Service","Process Automation","E-Archiving","People Analytics"].map(x=><span key={x}>{x}</span>)}</div></section>
  <section id="experience" className="section experience"><SectionTitle eyebrow="Experience" title="Cross-industry perspective. Enterprise-level thinking."/><div className="experience-grid"><div className="industries">{industries.map(([t,d])=><motion.div {...fade} key={t}><h3>{t}</h3><p>{d}</p></motion.div>)}</div><div className="timeline">{roles.map(([y,r,c])=><motion.div {...fade} key={y+r}><time>{y}</time><h3>{r}</h3><p>{c}</p></motion.div>)}</div></div></section>
  <section className="section credentials-section"><SectionTitle eyebrow="Credentials" title="Continuous learning for changing organizations."/><div className="credential-grid"><div><strong>2026</strong><h3>CIPD Level 5</h3><p>Associate Diploma in People Management, in progress</p></div><div><strong>2021</strong><h3>PHRi</h3><p>Professional in Human Resources, International, HRCI</p></div><div><strong>2017</strong><h3>Train the Trainer</h3><p>Regional IT Institute</p></div><div><strong>2015</strong><h3>Human Resources Certificate</h3><p>American University in Cairo</p></div><div><strong>2011</strong><h3>Bachelor of Law</h3><p>Cairo University</p></div></div></section>
  <section id="insights" className="section insights"><SectionTitle eyebrow="Thought leadership" title="Ideas for the next era of work." copy="A future-ready space for articles, practical frameworks and reflections from the transformation journey."/><div className="article-grid">{articles.map(([t,s])=><article key={t}><p>COMING INSIGHT</p><h3>{t}</h3><span>{s}</span><a href="#contact">Discuss this topic <ArrowRight size={16}/></a></article>)}</div></section>
  <section className="section gallery"><SectionTitle eyebrow="In the field" title="Leadership, collaboration and impact."/><div className="gallery-grid">{["Conference & speaking","Leadership meetings","Team events","Awards & recognition","Industry engagement","Transformation workshops"].map((x,i)=><div className={'gallery-item g'+i} key={x}><span>{x}</span><small>Photo placeholder</small></div>)}</div></section>
  <section id="contact" className="contact"><div><p className="eyebrow light">Let’s connect</p><h2>Build a more effective, future-ready organization.</h2><p>I welcome conversations with executives, HR leaders and organizations exploring workforce strategy, organizational effectiveness, AI adoption and HR transformation.</p><div className="actions"><a className="btn white" href="mailto:Amr.Abouzied@gmail.com"><Mail size={18}/>Email Me</a><a className="btn ghost" href="https://linkedin.com/in/amrabouzaid" target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a></div></div><Photo label="Closing professional portrait"/></section>
 </main>
 <footer><div className="brand">AMR <b>ABOUZAID</b></div><p>Strategic HR Leadership for the Digital Age.</p><span>© {new Date().getFullYear()} Amr Abouzaid</span></footer>
 </>
}
createRoot(document.getElementById("root")).render(<App/>);
