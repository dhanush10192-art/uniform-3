import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'Gallery', 'Blog', 'About',];
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Fastcolors-61566794944064/' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: 'https://www.instagram.com/fastcolorsretail/' },
    { icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <img
                  src="/500X1500.png"
                  alt="Cricket Jersey Designs Logo"
                  className="h-12 w-auto"
                />
              </div>
              <span className="text-white font-bold text-lg">FastColors</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fast Colour delivers premium custom uniforms with vibrant sublimation prints, durable fabrics, precise stitching, quick turnaround, personalized designs, reliable quality, and comfortable fits for every team.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="hover:text-white" size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <span>72, KNP Subramaniam Nagar Pudur, Pirivu, Dharapuram Road, Tiruppur, Tamil Nadu 641604</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-purple-400 flex-shrink-0" size={20} />
                <a href="tel:+917812865788" className="hover:text-purple-400 transition-colors">
                  +91 7812 865 788
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-purple-400 flex-shrink-0" size={20} />
                <a href="mailto:fastcolorsfashion@gmail.com" className="hover:text-purple-400 transition-colors">
                  fastcolorsfashion@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Fast Colour. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
