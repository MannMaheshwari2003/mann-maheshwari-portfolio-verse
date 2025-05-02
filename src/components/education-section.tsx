
import Section from "./section";
import TimelineItem from "./timeline-item";

const educationData = [
  {
    year: "2024 - 2026",
    title: "M.C.A - Master of Computer Applications",
    subtitle: "Guru Gobind Singh Indraprastha University",
    description: "Pursuing"
  },
  {
    year: "2024 - 2026",
    title: "P.G.D.M - Post Graduate Diploma in Management",
    subtitle: "Tecnia Institute of Advanced Studies, Delhi",
    description: "Pursuing"
  },
  {
    year: "2021 - 2024",
    title: "B.C.A - Bachelor of Computer Applications",
    subtitle: "Bharati Vidyapeeth University, Delhi",
    description: "CGPA: 7.81"
  },
  {
    year: "2021",
    title: "CBSE XII - Senior Secondary",
    subtitle: "DAV Public School",
    description: "Percentage: 65.4%"
  },
  {
    year: "2019",
    title: "CBSE X - Secondary",
    subtitle: "DAV Public School",
    description: "Percentage: 80.4%"
  }
];

const EducationSection = () => {
  return (
    <Section id="education" className="bg-muted/30">
      <h2 className="section-title">Education</h2>
      <div className="relative pl-4 md:pl-6 mt-12">
        {educationData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
