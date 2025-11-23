import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '소개', path: '/about' },
    { name: '성공 사례', path: '/portfolio' },
    { name: '전문 서비스', path: '/services' },
    { name: '문의하기', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-dark-charcoal bg-off-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/95 shadow-md py-3 backdrop-blur-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
             <div className="w-10 h-10 bg-secondary flex items-center justify-center text-primary font-serif font-bold text-xl rounded-sm">
               박
             </div>
             <div className={`flex flex-col ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-primary'}`}>
                <span className={`text-xl font-serif font-bold tracking-wide transition-colors ${!isScrolled && location.pathname === '/' ? 'text-white' : ''}`}>
                   박동산
                </span>
                <span className={`text-xs uppercase tracking-widest opacity-80 transition-colors ${!isScrolled && location.pathname === '/' ? 'text-gray-200' : ''}`}>
                   Real Estate
                </span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                   location.pathname === link.path ? 'text-secondary font-bold' : 
                   (isScrolled || location.pathname !== '/' ? 'text-white/90' : 'text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 bg-secondary text-primary font-bold text-sm rounded hover:bg-white hover:text-primary transition-all duration-300"
            >
              상담 예약
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/10 p-4 shadow-xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 border-b border-white/5 ${
                    location.pathname === link.path ? 'text-secondary' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center text-primary font-serif font-bold text-lg rounded-sm">
                  박
                </div>
                <span className="text-xl font-serif font-bold">박동산 공인중개사</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                20년의 경험과 데이터로 증명하는 가치.<br/>
                귀하의 소중한 자산을 가장 안전하게 지키고<br/>
                가장 확실하게 키워드립니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-secondary font-serif font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">서울특별시 강남구 테헤란로 123, 동산타워 5층</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">02-1234-5678</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">contact@parkdongsan.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-secondary font-serif font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-secondary text-sm transition-colors">중개사 소개</Link></li>
                <li><Link to="/portfolio" className="text-gray-300 hover:text-secondary text-sm transition-colors">성공 사례</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-secondary text-sm transition-colors">서비스 안내</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-secondary text-sm transition-colors">상담 신청</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              &copy; 2024 박동산 부동산 중개법인. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-gray-400">개인정보처리방침</span>
              <span className="text-xs text-gray-400">이용약관</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};