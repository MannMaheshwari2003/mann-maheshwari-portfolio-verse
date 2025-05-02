
import Section from "./section";

const AboutSection = () => {
  return (
    <Section id="about" className="bg-background">
      <h2 className="section-title">About Me</h2>
      <div className="mt-8 max-w-3xl">
        <p className="text-lg leading-relaxed">
          I'm Mann Maheshwari, a passionate and adaptable web developer with a strong foundation in both frontend and backend technologies. Throughout my academic and professional journey, I've cultivated strong technical skills while also developing exceptional leadership abilities.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          My approach to web development combines technical expertise with creative problem-solving. I'm driven by a desire to create intuitive, responsive, and accessible web applications that deliver exceptional user experiences. I thrive in collaborative environments and am always eager to take on new challenges that push me to expand my skills and knowledge.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Beyond coding, I have a passion for technology trends and constantly explore new tools and frameworks to stay at the forefront of web development. I believe in continuous learning and am committed to growing both as a developer and as a team leader.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
