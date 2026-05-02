import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Contact</span>
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
            Intéressé par une collaboration ? N'hésitez pas à me contacter !
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:meissa.babou@example.com" 
              className="flex items-center justify-center gap-3 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 hover:border-sky-500"
            >
              <FaEnvelope className="w-6 h-6 text-sky-500" />
              <span className="font-medium">Email</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 hover:border-sky-500"
            >
              <FaLinkedin className="w-6 h-6 text-sky-500" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
          
          <div className="text-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              <FaGithub className="w-5 h-5" />
              Voir mon GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
