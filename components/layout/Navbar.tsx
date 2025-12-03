import React, { useState } from 'react';
import { Menu, X, Truck, LogIn, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'landing' | 'dashboard') => void;
  currentPage: 'landing' | 'dashboard';
}

// Minimal local Button replacement (typed) to avoid missing module import
interface ButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', onClick, children }) => {
  const base = 'inline-flex items-center justify-center font-semibold focus:outline-none';
  const variants: Record<string, string> = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    outline: 'bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50',
  };
  const sizes: Record<string, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

// Helper components moved to top
const NavLink = ({ href, onClick, children }: { href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; children: React.ReactNode }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; children: React.ReactNode }) => (
  <a 
    href={href} 
    onClick={onClick} 
    className="block px-4 py-3 text-lg font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
  >
    {children}
  </a>
);

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation for sticky header (h-20 = 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (currentPage === 'landing') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate('landing');
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className="bg-emerald-600 text-white p-1.5 rounded-lg mr-2 group-hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-2xl text-slate-900 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                HESURMET
              </h1>
              <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-semibold">Gesti3n Ambiental</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {currentPage === 'landing' ? (
              <>
                <div className="hidden lg:flex space-x-8">
                  <NavLink href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</NavLink>
                  <NavLink href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</NavLink>
                  <NavLink href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</NavLink>
                </div>
                
                <div className="h-6 w-px bg-slate-200 mx-2 hidden lg:block"></div>
                
                <div className="flex items-center text-slate-600 mr-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <Phone className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                  <span className="text-xs font-bold">0800 666 9947</span>
                </div>
                
                <Button variant="primary" onClick={() => onNavigate('dashboard')} size="sm" className="shadow-lg shadow-emerald-500/20 rounded-full px-6">
                  <LogIn className="w-4 h-4 mr-2" />
                  Acceso Sistema
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={() => onNavigate('landing')} size="sm" className="rounded-full border-slate-300">
                Volver al Sitio
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-md hover:bg-slate-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-b border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
             {currentPage === 'landing' ? (
              <>
                <MobileNavLink href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</MobileNavLink>
                <MobileNavLink href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</MobileNavLink>
                <MobileNavLink href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</MobileNavLink>
                
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Button variant="primary" onClick={() => { onNavigate('dashboard'); setIsOpen(false); }} className="w-full justify-center h-12 text-base rounded-xl shadow-lg shadow-emerald-500/20">
                    <LogIn className="w-5 h-5 mr-2" />
                    Acceso Sistema
                  </Button>
                </div>
              </>
             ) : (
               <Button variant="outline" onClick={() => { onNavigate('landing'); setIsOpen(false); }} className="w-full justify-center h-12 text-base rounded-xl">
                Volver al Inicio
              </Button>
             )}
        </div>
      </div>
    </nav>
  );
};
