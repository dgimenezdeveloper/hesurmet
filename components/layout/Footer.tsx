import React from 'react';
import { Mail, Phone, MapPin, Facebook, MessageCircle, Instagram, Linkedin, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

const SocialButton = ({ icon: Icon, href, active }: { icon: any, href: string, active?: boolean }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
      active 
        ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/30' 
        : 'bg-slate-900 text-slate-400 hover:bg-emerald-600 hover:text-white border border-slate-800'
    }`}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a href={href} className="group flex items-center text-sm text-slate-400 hover:text-emerald-400 transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-emerald-500 transition-colors"></span>
      {children}
    </a>
  </li>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 font-sans relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                HESURMET
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </h3>
              <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mt-1">Gesti3n Ambiental</p>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Lderes en higiene urbana y saneamiento desde 2004. Transformamos la gesti3n de residuos con tecnologa y compromiso ecolgico en Almirante Brown.
            </p>
            <div className="flex space-x-3 pt-2">
              <SocialButton icon={Facebook} href="#" />
              <SocialButton icon={Instagram} href="#" />
              <SocialButton icon={Linkedin} href="#" />
              <SocialButton icon={MessageCircle} href="https://wa.me/1122651969" active />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-white font-semibold text-lg mb-6">Enlaces R1pidos</h4>
            <ul className="space-y-3">
              <FooterLink href="#servicios">Servicios Corporativos</FooterLink>
              <FooterLink href="#servicios">Alquiler de Contenedores</FooterLink>
              <FooterLink href="#nosotros">Nuestra Empresa</FooterLink>
              <FooterLink href="#contacto">Trabaja con Nosotros</FooterLink>
              <FooterLink href="/portal">Portal de Proveedores</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-heading text-white font-semibold text-lg mb-6">Contacto Oficial</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-emerald-900/30 transition-colors mr-3 mt-1 border border-slate-800 group-hover:border-emerald-500/30">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm leading-relaxed">
                  H. Yrigoyen (R.P.16) 15799,<br />
                  Almirante Brown, Buenos Aires
                </span>
              </li>
              <li className="flex items-center group">
                 <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-emerald-900/30 transition-colors mr-3 border border-slate-800 group-hover:border-emerald-500/30">
                  <Phone className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">0800 666 9947</span>
                  <span className="text-xs">Lea Gratuita 24hs</span>
                </div>
              </li>
              <li className="flex items-center group">
                 <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-emerald-900/30 transition-colors mr-3 border border-slate-800 group-hover:border-emerald-500/30">
                  <Mail className="w-4 h-4 text-emerald-500" />
                </div>
                <a href="mailto:hesurmet@hesurmet.com.ar" className="text-sm hover:text-white transition-colors">
                  hesurmet@hesurmet.com.ar
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Certifications & CTA */}
          <div className="space-y-6">
            <div>
              <h4 className="font-heading text-white font-semibold text-lg mb-6">Certificaciones</h4>
              <div className="flex gap-3">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex items-center space-x-2">
                   <ShieldCheck className="w-6 h-6 text-emerald-500" />
                   <div>
                     <div className="text-xs font-bold text-white">OPDS</div>
                     <div className="text-[10px] uppercase">Habilitado</div>
                   </div>
                </div>
                 <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex items-center space-x-2">
                   <ShieldCheck className="w-6 h-6 text-blue-500" />
                   <div>
                     <div className="text-xs font-bold text-white">CEAMSE</div>
                     <div className="text-[10px] uppercase">Partner</div>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://wa.me/1122651969" 
                className="group flex items-center justify-between w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white p-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20"
              >
                <div>
                  <div className="text-xs font-medium text-emerald-100 mb-0.5">Atencin Comercial</div>
                  <div className="font-bold">Solicitar Cotizacin</div>
                </div>
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500"> {new Date().getFullYear()} Hesurmet S.A. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Trminos</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
