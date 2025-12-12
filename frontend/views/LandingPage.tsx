import React from 'react';
import { ArrowRight, Trash2, Recycle, ShieldCheck, Truck, Users, Clock, CheckCircle, Leaf, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Nueva imagen de fondo HERO */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://parqueindustrialburzaco.com/wp-content/uploads/2024/08/FLOTA-NUEBA.jpg" 
            alt="Flota Hesurmet Nueva" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom shadow-2xl" 
            style={{ filter: 'brightness(1.45) contrast(1.25) drop-shadow(0 0 24px #10b981)' }}
          />
          <div className="absolute inset-0 bg-slate-900/30 bg-gradient-to-r from-slate-950/40 via-slate-900/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="md:w-3/4 lg:w-2/3">
            <div className="flex flex-col items-center mb-8 ">
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Soluciones Ambientales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 filter drop-shadow-sm">
                Futuro Sostenible
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font- bg-black/05 rounded-2xl shadow-xl px-8 py-6 backdrop-blur-md">
              Desde 2004, HESURMET transforma la gestión de residuos en Almirante Brown con tecnología de punta, flota moderna y certificación oficial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicios" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 px-8 text-base shadow-xl shadow-emerald-900/20 bg-emerald-600 hover:bg-emerald-500 border-0 rounded-xl">
                  Explorar Servicios
                </Button>
              </a>
              <a href="#contacto" className="w-full sm:w-auto">
                 <Button  size="lg" className="w-full h-14 px-8 text-base shadow-xl shadow-emerald-900/20 bg-emerald-600 hover:bg-emerald-500 border-0 rounded-xl">
                  Solicitar Presupuesto
                </Button>
              </a>
            </div>

            {/* Quick Stats Mini-strip */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-lg">
               <div>
                 <p className="text-3xl font-heading font-bold text-white">+19</p>
                 <p className="text-sm text-slate-400">Años Experiencia</p>
               </div>
               <div>
                 <p className="text-3xl font-heading font-bold text-white">OPDS</p>
                 <p className="text-sm text-slate-400">Certificación</p>
               </div>
               <div>
                 <p className="text-3xl font-heading font-bold text-white">24/7</p>
                 <p className="text-sm text-slate-400">Soporte</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="relative">
        {/* ...existing code... */}
          {/* Fondo visual para Soluciones Integrales */}
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
            alt="Gestión Ambiental Fondo" 
            className="absolute inset-0 w-full h-full object-cover scale-105 z-0" 
            style={{ opacity: 0.18, filter: 'blur(2px) grayscale(0.2)' }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-base font-semibold text-emerald-600 uppercase tracking-widest mb-3">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Soluciones Integrales</h3>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mt-6">
              Infraestructura y logística adaptada a las necesidades municipales, industriales y particulares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Service 1 */}
            <div className="group bg-white rounded-[2rem] p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-inner group-hover:from-emerald-600 group-hover:to-emerald-500 group-hover:text-white transition-all duration-300 relative z-10">
                <Trash2 className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">Higiene Urbana</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Gestión completa de residuos sólidos urbanos (RSU) mediante recolección manual y contenerizada. Mantenimiento integral de la vía pública.
              </p>
              
              <div className="space-y-4 mb-8">
                <FeatureItem icon={CheckCircle} text="Recolección Diaria" color="emerald" />
                <FeatureItem icon={CheckCircle} text="Barrido Mecánico" color="emerald" />
                <FeatureItem icon={CheckCircle} text="Logística Optimizada" color="emerald" />
              </div>

              <Button variant="outline" className="w-full border-slate-200 hover:border-emerald-500 hover:text-emerald-600 rounded-xl group-hover:bg-emerald-50">Más Detalles</Button>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-[2rem] p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-inner group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 relative z-10">
                <Recycle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">Saneamiento</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Recuperación de espacios y tratamiento de pasivos ambientales. Expertos en clausura técnica de basurales y gestión de suelos.
              </p>
              
               <div className="space-y-4 mb-8">
                <FeatureItem icon={Leaf} text="Certificación OPDS" color="blue" />
                <FeatureItem icon={ShieldCheck} text="Gestión de Pasivos" color="blue" />
                <FeatureItem icon={BarChart3} text="Informes de Impacto" color="blue" />
              </div>

              <Button variant="outline" className="w-full border-slate-200 hover:border-blue-500 hover:text-blue-600 rounded-xl group-hover:bg-blue-50">Más Detalles</Button>
            </div>

            {/* Service 3: Featured */}
            <div className="group bg-slate-900 rounded-[2rem] p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-800 flex flex-col relative overflow-hidden ring-4 ring-emerald-500/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-bl-[150px] -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="absolute top-6 right-8">
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-500/40">
                  Particulares
                </span>
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-900/50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Truck className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Contenedores</h3>
              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                Solución rápida y eficiente para comercios, empresas y obras particulares. Flota propia de camiones portacontenedores.
              </p>
              
               <div className="space-y-4 mb-8">
                <FeatureItem icon={CheckCircle} text="Respuesta Inmediata" color="emerald-dark" />
                <FeatureItem icon={CheckCircle} text="Diversas Capacidades" color="emerald-dark" />
                <FeatureItem icon={CheckCircle} text="Retiro Programado" color="emerald-dark" />
              </div>

              <a href="https://wa.me/1122651969" className="w-full mt-auto">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-0 h-12 rounded-xl">
                  Solicitar por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ABOUT / TRUST SECTION */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-emerald-100 rounded-[2.5rem] transform -rotate-2 opacity-50"></div>
              <img 
                src="https://parqueindustrialburzaco.com/proveedores/wp-content/uploads/listing-uploads/gallery/2021/07/camionn-scaled.jpg" 
                alt="Flota Hesurmet" 
                className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover h-[500px]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 z-20 hidden md:block">
                 <div className="bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[280px]">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                          <Users className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-900 text-lg">Equipo Experto</p>
                       </div>
                    </div>
                    <p className="text-sm text-slate-500">
                       Personal altamente capacitado en seguridad e higiene laboral.
                    </p>
                 </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-slate-600 text-sm font-semibold mb-6 border border-slate-200">
                Sobre Nosotros
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                Compromiso con el <br />
                <span className="text-emerald-600">Medio Ambiente</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 mb-10">
                <p>
                  HESURMET SA es sinónimo de eficiencia en gestión ambiental. Desde 2004, brindamos servicios esenciales para la comunidad de Almirante Brown.
                </p>
                <p>
                  Nuestra filosofía se basa en la mejora continua, invirtiendo constantemente en nueva flota y tecnologías de seguimiento satelital para optimizar cada recorrido.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-slate-50 rounded-xl mr-4 border border-slate-100">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Normativa OPDS</h4>
                    <p className="text-sm text-slate-500">Cumplimiento estricto</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-slate-50 rounded-xl mr-4 border border-slate-100">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Atención 24hs</h4>
                    <p className="text-sm text-slate-500">Guardias permanentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
            ¿Listo para optimizar la gestión de residuos?
          </h2>
          <p className="text-slate-300 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            Contacte con nuestro equipo comercial hoy mismo. Brindamos asesoramiento personalizado y presupuestos sin cargo.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://wa.me/1122651969" className="group">
              <Button size="lg" className="w-full sm:w-auto h-16 px-10 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg border-0 shadow-lg shadow-emerald-500/20">
                <span className="flex items-center">
                   WhatsApp
                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </a>
            <a href="tel:08006669947">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 rounded-full border-slate-700 text-white hover:bg-white hover:text-slate-900 font-bold text-lg">
                0800 666 9947
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for cleaner code
const FeatureItem = ({ icon: Icon, text, color }: { icon: any, text: string, color: 'emerald' | 'blue' | 'emerald-dark' }) => {
  const colorClasses = {
    emerald: 'text-emerald-500',
    blue: 'text-blue-500',
    'emerald-dark': 'text-emerald-400'
  };
  
  const textClasses = {
    emerald: 'text-slate-600',
    blue: 'text-slate-600',
    'emerald-dark': 'text-slate-400'
  }

  return (
    <div className="flex items-center">
      <Icon className={`w-5 h-5 ${colorClasses[color]} mr-3 flex-shrink-0`} />
      <span className={`text-sm font-medium ${textClasses[color]}`}>{text}</span>
    </div>
  );
};