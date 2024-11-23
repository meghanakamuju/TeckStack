import React from 'react';
import './index.css';

const TabContent = ({ activeTab }) => {
  const content = {
    frontend: {
      title: "Front-End Development",
      techs: [
        { icon: "fab fa-angular", name: "Angular" },
        { icon: "fab fa-react", name: "React JS" },
        { icon: "fab fa-vuejs", name: "Vue" },
      ],
    },
    backend: {
      title: "Back-End Development",
      techs: [
        { icon: "fab fa-windows", name: ".NET" },
        { icon: "fab fa-golang", name: "Go" },
        { icon: "fab fa-java", name: "Java" },
        { icon: "fab fa-laravel", name: "Laravel" },
        { icon: "fab fa-node-js", name: "Node JS" },
        { icon: "fab fa-php", name: "PHP" },
        { icon: "fab fa-python", name: "Python" },
        { icon: "fas fa-gem", name: "Ruby" },
        { icon: "fas fa-cogs", name: "Rust" },
        { icon: "fab fa-scala", name: "Scala" },
      ],
    },
    mobile: {
      title: "Mobile App Development",
      techs: [
        { icon: "fab fa-react", name: "React Native" },
        { icon: "fas fa-mobile-alt", name: "Flutter" },
        { icon: "fab fa-apple", name: "Swift" },
        { icon: "fab fa-android", name: "Kotlin" },
      ],
    },
    uiux: {
      title: "UI/UX Design",
      techs: [
        { icon: "fa-solid fa-a", name: "Adobe XD" },
        { icon: "fab fa-figma", name: "Figma" },
        { icon: "fab fa-figma", name: "FigJam" },
        { icon: "fas fa-layer-group", name: "Miro" },
        { icon: "fas fa-pencil-ruler", name: "Maze" },
        { icon: "fas fa-pen-nib", name: "Sketch" },
        { icon: "fas fa-gem", name: "Protopie" },
        { icon: "fas fa-gem", name: "Zeplin" },
      ],
    },
  };

  const { title, techs } = content[activeTab];

  return (
    <div className="tab-content" style={{ display: activeTab ? 'flex' : 'none' }}>
      <div className="tab-left">
        <h2 className="tab-button">{title}</h2>
      </div>
      <div className="tab-right">
        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div className="tech-item" key={index}>
              <i className={tech.icon}></i><span className="foricon">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabContent;
