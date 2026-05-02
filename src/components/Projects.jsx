import { 
  FaFireAlt, 
  FaDatabase, 
  FaNetworkWired, 
  FaRocket 
} from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "Étude comparative de firewall Next-Gen",
      description: "Analyse approfondie et comparaison des solutions Fortigate et Sophos pour la sécurisation des infrastructures réseau.",
      technologies: ["Fortigate", "Sophos", "Sécurité réseau"],
      icon: FaFireAlt,
      color: "red"
    },
    {
      title: "Virtualisation et Stockage",
      description: "Déploiement d'une infrastructure virtualisée avec VMware ESXi et TrueNAS, automatisation du provisionnement avec Terraform.",
      technologies: ["VMware ESXi", "TrueNAS", "Terraform"],
      icon: FaDatabase,
      color: "blue"
    },
    {
      title: "Haute Disponibilité (LAN)",
      description: "Configuration de la redondance avec STP, EtherChannel et HSRP sur équipements Cisco pour garantir la continuité de service.",
      technologies: ["Cisco", "STP", "EtherChannel", "HSRP"],
      icon: FaNetworkWired,
      color: "green"
    },
    {
      title: "Pipeline CI/CD",
      description: "Mise en place de pipelines d'intégration et de déploiement continus sur GitLab et Jenkins pour automatiser les workflows de développement.",
      technologies: ["GitLab CI/CD", "Jenkins", "DevOps"],
      icon: FaRocket,
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: {
        bg: "bg-red-500/10",
        text: "text-red-600 dark:text-red-400",
        border: "border-red-500/20"
      },
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-500/20"
      },
      green: {
        bg: "bg-green-500/10",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-500/20"
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-500/20"
      }
    };
    return colors[color];
  };

  return (
    <section id="projets" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Projets</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 ${colorClasses.bg} rounded-xl mb-4`}>
                  <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-lg text-xs font-medium border ${colorClasses.border}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
