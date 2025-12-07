import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Users, Truck, AlertTriangle, FileText, CheckCircle, Map as MapIcon, 
  Settings, Bell, Search, Filter, ChevronRight, MoreVertical, Plus,
  Menu, LogOut
} from 'lucide-react';
import { TruckStatus, TicketStatus, Truck as TruckType, Claim, Employee } from '../types';
import { Button } from '../components/ui/Button';

// Mock Data
const statsData = [
  { name: 'Lun', tons: 45 },
  { name: 'Mar', tons: 52 },
  { name: 'Mie', tons: 48 },
  { name: 'Jue', tons: 61 },
  { name: 'Vie', tons: 55 },
  { name: 'Sab', tons: 38 },
  { name: 'Dom', tons: 25 },
];

const pieData = [
  { name: 'En Recorrido', value: 12, color: '#10b981' }, // emerald-500
  { name: 'En Base', value: 5, color: '#64748b' }, // slate-500
  { name: 'Mantenimiento', value: 2, color: '#f59e0b' }, // amber-500
];

const trucks: TruckType[] = [
  { id: 'TR-001', plate: 'AD 123 FE', driver: 'Carlos Gomez', status: TruckStatus.ACTIVE, location: 'Zona Norte - Sec 4', fuelLevel: 75 },
  { id: 'TR-004', plate: 'AF 442 PL', driver: 'Miguel Silva', status: TruckStatus.ACTIVE, location: 'Zona Sur - Sec 2', fuelLevel: 42 },
  { id: 'TR-008', plate: 'AC 992 KL', driver: 'Jorge Ruiz', status: TruckStatus.MAINTENANCE, location: 'Taller Central', fuelLevel: 10 },
  { id: 'TR-012', plate: 'AD 551 OP', driver: 'Luis Torres', status: TruckStatus.IDLE, location: 'Base Operativa', fuelLevel: 100 },
  { id: 'TR-015', plate: 'AE 112 MN', driver: 'Pedro Almodovar', status: TruckStatus.ACTIVE, location: 'Centro Comercial', fuelLevel: 60 },
];

const claims: Claim[] = [
  { id: '#REQ-2942', type: 'Recolección No Realizada', address: 'Av. Espora 2400', date: 'Hace 2 horas', status: TicketStatus.PENDING },
  { id: '#REQ-2941', type: 'Contenedor Dañado', address: 'Plaza Brown', date: 'Hace 5 horas', status: TicketStatus.IN_PROGRESS },
  { id: '#REQ-2938', type: 'Solicitud Volquete', address: 'Calle 14 Nro 550', date: 'Ayer', status: TicketStatus.RESOLVED },
  { id: '#REQ-2935', type: 'Barrido Incompleto', address: 'Mitre 1200', date: 'Ayer', status: TicketStatus.RESOLVED },
  { id: '#REQ-2930', type: 'Basura acumulada', address: 'Ruta 4 y Rotonda', date: 'Hace 2 días', status: TicketStatus.IN_PROGRESS },
];

const employees: Employee[] = [
  { id: 'LEG-1024', name: 'Carlos Gomez', role: 'Chofer', status: 'Activo', shift: 'Mañana' },
  { id: 'LEG-1025', name: 'Miguel Silva', role: 'Chofer', status: 'Activo', shift: 'Mañana' },
  { id: 'LEG-1026', name: 'Jorge Ruiz', role: 'Chofer', status: 'Activo', shift: 'Tarde' },
  { id: 'LEG-1040', name: 'Roberto Mendez', role: 'Recolector', status: 'Vacaciones', shift: 'Mañana' },
  { id: 'LEG-1042', name: 'Lucas Diaz', role: 'Mecánico', status: 'Activo', shift: 'Tarde' },
  { id: 'LEG-1055', name: 'Ana Martinez', role: 'Administrativo', status: 'Activo', shift: 'Mañana' },
];

type ViewState = 'overview' | 'map' | 'fleet' | 'staff' | 'tickets';

export const Dashboard: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 w-full lg:w-auto whitespace-nowrap mb-1 lg:mb-2 ${
        currentView === view 
          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 font-medium' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
      }`}
    >
      <Icon className={`w-5 h-5 mr-3 ${currentView === view ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 bg-slate-950 text-white flex-col sticky top-0 z-40 h-screen border-r border-slate-900">
        <div className="p-6 border-b border-slate-900">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center tracking-tight">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                 <Truck className="w-5 h-5 text-white" />
              </div>
              HESURMET
            </h2>
            <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest pl-1">Sistema de Gestión</p>
          </div>
        </div>
        
        <div className="p-4 flex-grow overflow-y-auto">
          <div className="space-y-1">
            <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-2">Principal</p>
            <NavItem view="overview" icon={BarChart} label="Resumen" />
            <NavItem view="map" icon={MapIcon} label="Mapa en Vivo" />
            <NavItem view="fleet" icon={Truck} label="Gestión de Flota" />
            
            <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-6">Operaciones</p>
            <NavItem view="staff" icon={Users} label="Personal" />
            <NavItem view="tickets" icon={FileText} label="Reclamos" />
          </div>
        </div>

        <div className="p-4 border-t border-slate-900">
          <button className="flex items-center px-4 py-3 text-slate-400 hover:text-white w-full transition-colors rounded-xl hover:bg-slate-900">
            <LogOut className="w-5 h-5 mr-3" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Mobile Header & Nav */}
      <div className="lg:hidden bg-slate-950 text-white sticky top-0 z-50">
        <div className="flex items-center justify-between p-4 border-b border-slate-900">
          <div className="flex items-center">
             <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                 <Truck className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">HESURMET</span>
          </div>
          <button className="p-2 text-slate-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Horizontal Scroll Nav */}
        <div className="px-4 py-3 overflow-x-auto flex space-x-2 scrollbar-hide border-b border-slate-900 bg-slate-950/95 backdrop-blur">
          <button onClick={() => setCurrentView('overview')} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentView === 'overview' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'}`}>Resumen</button>
          <button onClick={() => setCurrentView('map')} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentView === 'map' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'}`}>Mapa</button>
          <button onClick={() => setCurrentView('fleet')} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentView === 'fleet' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'}`}>Flota</button>
          <button onClick={() => setCurrentView('staff')} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentView === 'staff' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'}`}>Personal</button>
          <button onClick={() => setCurrentView('tickets')} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentView === 'tickets' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'}`}>Reclamos</button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto h-auto lg:h-screen bg-slate-50/50">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 tracking-tight">
              {currentView === 'overview' && 'Vista General'}
              {currentView === 'map' && 'Monitoreo de Rutas'}
              {currentView === 'fleet' && 'Gestión de Flota'}
              {currentView === 'staff' && 'Gestión de Personal'}
              {currentView === 'tickets' && 'Centro de Reclamos'}
            </h1>
            <p className="text-slate-500 text-sm mt-1">Última actualización: Hace 5 minutos</p>
          </div>
          
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="pl-10 pr-4 py-2.5 w-full md:w-64 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white shadow-sm"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            </div>
            <button className="p-2.5 bg-white rounded-xl border border-slate-200 text-slate-600 hover:text-emerald-600 relative shadow-sm hover:shadow-md transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 font-bold border border-emerald-200 shadow-sm">
              AD
            </div>
          </div>
        </header>

        {/* VIEW: OVERVIEW */}
        {currentView === 'overview' && (
          <div className="animate-fade-in space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <KpiCard 
                title="Recolección (Hoy)" 
                value="45.2 Ton" 
                trend="+12%" 
                icon={Truck} 
                trendPositive={true}
                color="emerald"
              />
              <KpiCard 
                title="Tickets Abiertos" 
                value="5" 
                trend="1.5h prom" 
                icon={FileText} 
                trendPositive={false}
                color="blue"
              />
              <KpiCard 
                title="Eficiencia Ruta" 
                value="94%" 
                trend="+2%" 
                icon={MapIcon} 
                trendPositive={true}
                color="purple"
              />
              <KpiCard 
                title="Alertas Flota" 
                value="2" 
                trend="Mantenimiento" 
                icon={AlertTriangle} 
                trendPositive={false}
                color="amber"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Toneladas Recolectadas</h3>
                  <select className="text-xs border-none bg-slate-50 rounded-lg px-2 py-1 text-slate-500 font-medium cursor-pointer hover:bg-slate-100">
                    <option>Últimos 7 días</option>
                    <option>Este Mes</option>
                  </select>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={statsData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                      <Tooltip 
                        cursor={{fill: '#f8fafc'}}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      />
                      <Bar dataKey="tons" fill="#10b981" radius={[6, 6, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Estado de la Flota</h3>
                <p className="text-sm text-slate-500 mb-6">Disponibilidad en tiempo real</p>
                <div className="h-56 relative flex-grow">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-4xl font-bold text-slate-900">19</span>
                    <span className="text-xs text-slate-500 uppercase font-medium tracking-wide">Unidades</span>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  {pieData.map((entry) => (
                    <div key={entry.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full mr-2" style={{backgroundColor: entry.color}}></span>
                        {entry.name}
                      </div>
                      <span className="font-bold text-slate-700">{entry.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Actividad Reciente</h3>
                <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">Ver todo</Button>
              </div>
              <div className="p-6">
                <div className="space-y-8 border-l-2 border-slate-100 ml-3 pl-8 relative">
                  <div className="relative">
                    <div className="absolute -left-[39px] bg-white p-1 rounded-full border border-slate-100 shadow-sm">
                       <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Ruta Zona Norte completada</p>
                        <p className="text-xs text-slate-500 mt-1">Unidad TR-001 finalizó recorrido sin incidencias.</p>
                      </div>
                      <span className="text-xs text-slate-400 mt-1 sm:mt-0">Hace 15 min</span>
                    </div>
                  </div>
                   <div className="relative">
                    <div className="absolute -left-[39px] bg-white p-1 rounded-full border border-slate-100 shadow-sm">
                       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Nuevo reclamo #REQ-2942</p>
                        <p className="text-xs text-slate-500 mt-1">Categoría: Recolección no realizada en Av. Espora.</p>
                      </div>
                      <span className="text-xs text-slate-400 mt-1 sm:mt-0">Hace 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: MAP */}
        {currentView === 'map' && (
          <div className="h-[70vh] bg-slate-200 rounded-2xl relative overflow-hidden shadow-inner border border-slate-300">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-30" style={{ 
              backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', 
              backgroundSize: '24px 24px',
              backgroundColor: '#f1f5f9' 
            }}></div>
            
             {/* Map UI Controls */}
             <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
                <h4 className="font-bold text-slate-900 text-sm mb-2">Zona Operativa Sur</h4>
                <div className="flex gap-2 mb-2">
                   <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded font-bold">4 Activos</span>
                   <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-bold">1 Inactivo</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">
                   Visualización en tiempo real de unidades GPS. Actualización cada 30s.
                </p>
             </div>

            {/* Simulated Route Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
               <path d="M 200 100 Q 400 50 600 300 T 1000 400" fill="none" stroke="#cbd5e1" strokeWidth="8" />
               <path d="M 100 500 Q 300 400 500 600" fill="none" stroke="#cbd5e1" strokeWidth="8" />
            </svg>
            
            {/* Truck Markers */}
            {trucks.filter(t => t.status === TruckStatus.ACTIVE).map((truck, idx) => (
              <div 
                key={truck.id}
                className="absolute flex flex-col items-center cursor-pointer hover:z-20 transition-all duration-500 group"
                style={{ top: `${30 + idx * 15}%`, left: `${20 + idx * 20}%` }}
              >
                <div className="bg-emerald-600 text-white p-2 rounded-full shadow-xl border-2 border-white group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                  <Truck className="w-5 h-5" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute top-10 flex flex-col items-center z-20">
                  <span>{truck.plate}</span>
                  <span className="text-[10px] text-slate-500 font-normal">{truck.driver}</span>
                  <div className="w-2 h-2 bg-white transform rotate-45 absolute -top-1"></div>
                </div>
              </div>
            ))}

            {/* Maintenance Marker */}
            <div className="absolute top-[20%] right-[10%] flex flex-col items-center group cursor-pointer">
               <div className="bg-amber-500 text-white p-2 rounded-full shadow-xl border-2 border-white group-hover:bg-amber-600 transition-colors">
                  <Settings className="w-5 h-5" />
                </div>
                <div className="bg-white px-2 py-1 rounded text-[10px] font-bold shadow mt-1 whitespace-nowrap opacity-80">
                  Taller
                </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
              <button className="bg-white p-3 rounded-xl shadow-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-50 transition-colors"><Plus className="w-5 h-5" /></button>
              <button className="bg-white p-3 rounded-xl shadow-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-50 transition-colors"><div className="w-5 h-0.5 bg-current"></div></button>
            </div>
          </div>
        )}

        {/* VIEW: FLEET */}
        {currentView === 'fleet' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Flota de Vehículos</h3>
                <p className="text-sm text-slate-500">Gestión de unidades y mantenimiento</p>
              </div>
              <Button size="sm" className="w-full sm:w-auto"><Plus className="w-4 h-4 mr-2" /> Nueva Unidad</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left min-w-[800px]">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Unidad</th>
                    <th className="px-6 py-4 font-semibold">Patente</th>
                    <th className="px-6 py-4 font-semibold">Chofer Actual</th>
                    <th className="px-6 py-4 font-semibold">Estado</th>
                    <th className="px-6 py-4 font-semibold">Ubicación</th>
                    <th className="px-6 py-4 font-semibold">Combustible</th>
                    <th className="px-6 py-4 text-right font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {trucks.map((truck) => (
                    <tr key={truck.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">{truck.id}</td>
                      <td className="px-6 py-4 font-mono text-slate-500 bg-slate-50 rounded px-2 w-fit">{truck.plate}</td>
                      <td className="px-6 py-4 text-slate-600">{truck.driver}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold
                          ${truck.status === TruckStatus.ACTIVE ? 'bg-emerald-100 text-emerald-700' : 
                            truck.status === TruckStatus.MAINTENANCE ? 'bg-amber-100 text-amber-700' : 
                            'bg-slate-100 text-slate-700'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                             truck.status === TruckStatus.ACTIVE ? 'bg-emerald-500' : 
                             truck.status === TruckStatus.MAINTENANCE ? 'bg-amber-500' : 
                             'bg-slate-500'
                          }`}></span>
                          {truck.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{truck.location}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                           <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${truck.fuelLevel < 20 ? 'bg-red-500' : 'bg-blue-500'}`} 
                              style={{ width: `${truck.fuelLevel}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">{truck.fuelLevel}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-emerald-600 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VIEW: STAFF */}
        {currentView === 'staff' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Personal Operativo</h3>
                <p className="text-sm text-slate-500">Choferes, recolectores y personal de planta</p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none justify-center"><Filter className="w-4 h-4 mr-2" /> Filtrar</Button>
                <Button size="sm" className="flex-1 sm:flex-none justify-center"><Plus className="w-4 h-4 mr-2" /> Nuevo</Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left min-w-[800px]">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Legajo</th>
                    <th className="px-6 py-4 font-semibold">Nombre</th>
                    <th className="px-6 py-4 font-semibold">Rol</th>
                    <th className="px-6 py-4 font-semibold">Turno</th>
                    <th className="px-6 py-4 font-semibold">Estado</th>
                    <th className="px-6 py-4 text-right font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 font-mono text-slate-500">{emp.id}</td>
                      <td className="px-6 py-4 font-medium text-slate-900 flex items-center">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-600 mr-3 font-bold text-xs border border-slate-200">
                          {emp.name.charAt(0)}
                        </div>
                        {emp.name}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">{emp.role}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{emp.shift}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold
                          ${emp.status === 'Activo' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 
                            emp.status === 'Vacaciones' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 
                            'bg-red-50 text-red-700 border border-red-100'}`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                         <button className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-emerald-600 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VIEW: TICKETS */}
        {currentView === 'tickets' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Gestión de Reclamos</h3>
                <p className="text-sm text-slate-500">Solicitudes ciudadanas y de clientes</p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <select className="w-full sm:w-auto text-sm border-slate-200 rounded-xl shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2.5 bg-slate-50 cursor-pointer outline-none">
                  <option>Todos los estados</option>
                  <option>Pendientes</option>
                  <option>En Curso</option>
                  <option>Resueltos</option>
                </select>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {claims.map((claim) => (
                <div key={claim.id} className="p-4 sm:p-5 hover:bg-slate-50 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2.5 rounded-xl flex-shrink-0 transition-colors ${
                      claim.status === TicketStatus.RESOLVED ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100' :
                      claim.status === TicketStatus.IN_PROGRESS ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-100' :
                      'bg-amber-50 text-amber-600 group-hover:bg-amber-100'
                    }`}>
                      {claim.status === TicketStatus.RESOLVED ? <CheckCircle className="w-5 h-5"/> : <AlertTriangle className="w-5 h-5"/>}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded bg-white">{claim.id}</span>
                        <h4 className="font-bold text-slate-900">{claim.type}</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-1 flex items-center">
                         <MapIcon className="w-3 h-3 mr-1 text-slate-400" />
                         {claim.address}
                      </p>
                      <p className="text-xs text-slate-400">{claim.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pl-14 md:pl-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border
                        ${claim.status === TicketStatus.RESOLVED ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                          claim.status === TicketStatus.IN_PROGRESS ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                          'bg-amber-50 text-amber-700 border-amber-100'}`}>
                        {claim.status}
                    </span>
                    <Button variant="outline" size="sm" className="hidden sm:flex hover:bg-white">Detalles</Button>
                    <button className="sm:hidden text-slate-400"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">Cargar más reclamos</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// Helper Component for KPI Cards to maintain consistency
const KpiCard = ({ title, value, trend, icon: Icon, trendPositive, color }: any) => {
  const colorMap: any = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    amber: 'bg-amber-50 text-amber-600'
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${colorMap[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className={`flex items-center text-xs font-bold ${trendPositive ? 'text-emerald-600' : 'text-slate-500'}`}>
        {trendPositive && <span className="mr-1">↑</span>}
        {trend}
      </div>
    </div>
  );
};