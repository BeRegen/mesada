
import React from 'react';
import { 
  Check, 
  ChevronRight, 
  Heart, 
  Smartphone, 
  Target, 
  Users, 
  Shield, 
  Calendar, 
  Star,
  ThumbsUp,
  Layout,
  MessageSquare,
  ArrowRight,
  Zap,
  Smile,
  Coins
} from 'lucide-react';

// --- Components ---

// Fix: Make children optional in the type definition to resolve TSX error where it's not detected as provided via JSX children
const Badge = ({ children, variant = 'green' }: { children?: React.ReactNode, variant?: 'green' | 'purple' }) => {
  const styles = variant === 'green' 
    ? "bg-[#C2F55F]/20 text-[#6B8E23] border-[#C2F55F]/40" 
    : "bg-[#7C5CFF]/10 text-[#7C5CFF] border-[#7C5CFF]/20";
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border animate-float ${styles}`}>
      {children}
    </span>
  );
};

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF9]/90 backdrop-blur-xl border-b border-[#7C5CFF]/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 purple-gradient rounded-xl flex items-center justify-center shadow-lg shadow-[#7C5CFF]/20">
          <Coins size={20} className="text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight leading-none text-[#2D2640]">Mesada Inteligente</span>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <button className="text-sm font-bold text-gray-500 hover:text-[#7C5CFF] transition-colors hidden md:block">Como Funciona</button>
        <button className="purple-gradient text-white px-8 py-3 rounded-full text-sm font-black hover:opacity-90 transition-all shadow-lg shadow-[#7C5CFF]/20 active:scale-95">
          Login
        </button>
      </div>
    </div>
  </nav>
);

const FeatureCard = ({ title, description, icon: Icon, color = 'green' }: { title: string, description: string, icon?: any, color?: 'green' | 'purple' }) => (
  <div className="bg-white p-10 rounded-[3rem] border border-[#7C5CFF]/5 hover:border-[#7C5CFF]/20 transition-all duration-500 flex flex-col gap-6 group soft-shadow">
    {Icon && (
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${color === 'green' ? 'bg-[#C2F55F]/20 text-[#6B8E23] group-hover:bg-[#C2F55F]' : 'bg-[#7C5CFF]/10 text-[#7C5CFF] group-hover:bg-[#7C5CFF] group-hover:text-white'}`}>
        <Icon size={32} strokeWidth={2} />
      </div>
    )}
    <div>
      <h3 className="text-2xl font-extrabold leading-tight mb-4 text-[#2D2640]">{title}</h3>
      <p className="text-gray-500 text-lg leading-relaxed font-medium">{description}</p>
    </div>
  </div>
);

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="relative p-12 bg-white rounded-[3rem] border border-[#7C5CFF]/5 group hover:border-[#7C5CFF]/30 transition-all duration-500 soft-shadow">
    <span className="absolute -top-6 -left-6 w-14 h-14 purple-gradient text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl border-8 border-[#FDFCF9] animate-float">
      {number}
    </span>
    <h3 className="text-2xl font-extrabold mb-4 mt-2 text-[#2D2640]">{title}</h3>
    <p className="text-gray-500 text-lg leading-relaxed font-medium">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, name, bio }: { quote: string, name: string, bio: string }) => (
  <div className="bg-[#F4F0FF]/30 p-12 rounded-[3.5rem] border border-[#7C5CFF]/5 flex flex-col h-full hover:bg-white hover:shadow-2xl transition-all duration-500 relative group overflow-hidden">
    <div className="absolute -top-10 -right-10 text-[#7C5CFF]/5 group-hover:text-[#7C5CFF]/10 transition-colors">
      <MessageSquare size={160} fill="currentColor" />
    </div>
    <div className="flex gap-1 mb-8 relative z-10">
      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#7C5CFF" className="text-[#7C5CFF]" />)}
    </div>
    <p className="text-[#2D2640] mb-10 text-2xl font-semibold leading-relaxed flex-grow italic relative z-10">"{quote}"</p>
    <div className="pt-8 border-t border-[#7C5CFF]/10 flex items-center gap-4 relative z-10">
      <div className="w-14 h-14 purple-gradient rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg">
        {name[0]}
      </div>
      <div>
        <h4 className="font-extrabold text-xl text-[#2D2640]">{name}</h4>
        <p className="text-[12px] text-[#7C5CFF] font-black uppercase tracking-wider">{bio}</p>
      </div>
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#C2F55F] overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <header className="px-6 pt-48 pb-40 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C2F55F]/20 blur-[120px] rounded-full -z-10 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#7C5CFF]/15 blur-[120px] rounded-full -z-10 animate-float-delayed"></div>
        
        <div className="flex justify-center gap-4 mb-12">
          <Badge variant="green">
            <Smile size={14} className="mr-2" /> Gamificação que salva o lar
          </Badge>
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.9] md:leading-[0.85] text-[#2D2640]">
          Educação com <br />
          <span className="text-[#7C5CFF] relative inline-block">
            mais valor
            <span className="absolute -bottom-2 left-0 w-full h-8 bg-[#C2F55F]/40 -z-10 rounded-full transform -skew-x-12"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-500 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
          Ensine seus filhos sobre responsabilidade e valor do dinheiro de forma divertida e gamificada.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="w-full sm:w-auto purple-gradient text-white px-14 py-8 rounded-[2.5rem] font-black text-2xl shadow-2xl shadow-[#7C5CFF]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4">
            Cadastro Gratuito <ArrowRight size={28} />
          </button>
        </div>
      </header>

      {/* Intro Section */}
      <section className="bg-white py-40 border-y border-[#7C5CFF]/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <Badge variant="purple">Simples & Motivador</Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-12 mt-8 leading-tight tracking-tight text-[#2D2640]">Um jeito novo <br/>de educar.</h2>
            <div className="space-y-10 text-xl md:text-2xl text-gray-500 leading-relaxed font-medium">
              <p>
                <strong>Mesada Inteligente</strong> é uma plataforma de gamificação para incentivar tarefas domésticas, ir bem na escola e desenvolver responsabilidade. 
              </p>
              <p>
                Você cria tarefas, seus filhos executam, e ao aprovar você credita pontos que viram mesada (ou semanada).
              </p>
              <div className="p-12 bg-[#F4F0FF]/40 rounded-[3.5rem] border-2 border-[#7C5CFF]/10">
                <p className="font-extrabold text-[#2D2640] text-3xl leading-tight">
                  Responsabilidade, educação financeira e paz em casa — tudo em um só lugar.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#7C5CFF]/5 p-6 rounded-[5rem] animate-float">
              <div className="bg-white p-14 rounded-[4rem] shadow-2xl shadow-[#7C5CFF]/10 flex flex-col gap-10 border border-[#7C5CFF]/10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#C2F55F]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#7C5CFF]/40"></div>
                    <div className="w-4 h-4 rounded-full bg-[#7C5CFF]/20"></div>
                  </div>
                  <Badge variant="purple">Dashboard Beta</Badge>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-black text-4xl leading-tight text-[#2D2640]">Totalmente personalizável</h4>
                  <p className="text-gray-400 font-medium text-xl">Crie suas próprias tarefas e defina os pontos ideais.</p>
                </div>

                <div className="bg-[#C2F55F]/10 p-6 rounded-[2.5rem] flex items-center gap-5 border border-[#C2F55F]/20">
                  <div className="w-10 h-10 green-gradient rounded-full flex items-center justify-center text-[#2D2640]">
                    <Check size={20} strokeWidth={4} />
                  </div>
                  <span className="font-black text-xl text-[#2D2640]">Participação ativa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Features */}
      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureCard 
            title="Participação ativa" 
            description="Através do App eles marcam a tarefa como concluída." 
            icon={Smartphone}
            color="purple"
          />
          <FeatureCard 
            title="Dashboard Real" 
            description="Filhos e pais acompanham os pontos, tarefas e progresso em tempo real." 
            icon={Layout}
            color="green"
          />
          <FeatureCard 
            title="Motivação" 
            description="Eles postam a foto, tarefa concluída! Eles vêem os pontos crescendo." 
            icon={Heart}
            color="purple"
          />
          <FeatureCard 
            title="Total Controle" 
            description="Centralize todo o gerenciamento de educação financeira em um app." 
            icon={Target}
            color="green"
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <Badge variant="purple">Passo a Passo</Badge>
          <h2 className="text-6xl md:text-8xl font-black mb-10 mt-8 tracking-tighter text-[#2D2640]">Como Funciona</h2>
          <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Você cria tarefas, seus filhos executam, e ao aprovar você credita pontos que viram mesada. Simples assim!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <StepCard 
            number="1" 
            title="Pais Criam" 
            description="Defina tarefas domésticas, estudos ou atividades com pontos personalizados." 
          />
          <StepCard 
            number="2" 
            title="Filhos Executam" 
            description="Crianças completam as tarefas e postam fotos como evidência real." 
          />
          <StepCard 
            number="3" 
            title="Pais Aprovam" 
            description="Revise as evidências enviadas e aprove as tarefas com um único clique." 
          />
          <StepCard 
            number="4" 
            title="Pontos Viram Mesada" 
            description="Pontos acumulados são convertidos em mesada automaticamente no fim do ciclo." 
          />
        </div>
      </section>

      {/* Peace in Home Section */}
      <section className="bg-[#F4F0FF]/50 py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <Badge variant="purple">Paz no Cotidiano</Badge>
            <h2 className="text-6xl md:text-8xl font-black mb-12 mt-8 leading-[0.9] tracking-tighter text-[#2D2640]">Chega de brigas, <br /> chega de gritaria</h2>
            <p className="text-2xl md:text-3xl text-gray-500 mb-20 leading-relaxed font-medium">
              A rotina já é cansativa o suficiente - ninguém quer transformar cada tarefa em uma batalha. Você não precisa repetir mil vezes.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Pontos e Metas", desc: "Regras claras, todos ganham.", icon: Target },
                { title: "Universo Deles", desc: "Use o gaming para disciplina.", icon: Smartphone },
                { title: "Seus filhos", desc: "Satisfação e crescimento real.", icon: Heart },
              ].map((item, i) => (
                <div key={i} className="p-12 bg-white rounded-[3.5rem] soft-shadow border border-[#7C5CFF]/5 group hover:scale-105 transition-transform">
                  <div className="w-14 h-14 purple-gradient rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg shadow-[#7C5CFF]/20">
                    <item.icon size={28} />
                  </div>
                  <h4 className="font-black text-2xl mb-4 text-[#2D2640]">{item.title}</h4>
                  <p className="text-lg text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-28">
            <h2 className="text-6xl font-black tracking-tight text-[#2D2640]">De pessoas, para pessoas.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <TestimonialCard 
              quote="O Mesada Inteligente reduziu as brigas aqui em casa. Agora as tarefas acontecem sem estresse."
              name="Maria Fernanda"
              bio="Mãe do Thiago e Pedro"
            />
            <TestimonialCard 
              quote="Minha filha se engajou 100% Finalmente temos uma rotina construtiva. Enorme gratidão a plataforma!"
              name="Pedro Soares"
              bio="Pai da Bruna"
            />
            <TestimonialCard 
              quote="Sinto que estou trabalhando e recebendo por isso. Não passo mais vergonha pedindo dinheiro."
              name="Henrique Souza"
              bio="Filho e Estudante"
            />
          </div>
          <div className="mt-32 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4 text-2xl font-black italic text-gray-300">
              Com amor, por pais e filhos <Heart size={32} className="text-[#7C5CFF] fill-[#7C5CFF] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* More Value Grid */}
      <section className="py-40 max-w-7xl mx-auto px-6 bg-[#FDFCF9]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16">
          {[
            { title: "Fácil de Usar", desc: "Pais e filhos de todas as idades usam tranquilamente.", icon: ThumbsUp },
            { title: "Dicas Semanais", desc: "A plataforma apresenta dicas de rotina p/ cada perfil.", icon: Calendar },
            { title: "Família Única", desc: "Personalize as tarefas e pontos adequados a você.", icon: Users },
            { title: "Valorização", desc: "A auto-estima aumenta e os pais valorizam o progresso.", icon: Star },
            { title: "Regras Claras", desc: "As tarefas e descrições são 100% claras para os filhos.", icon: MessageSquare },
            { title: "Segurança", desc: "Dados protegidos com controles de privacidade nível internacional.", icon: Shield },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 group items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-[1.5rem] bg-white soft-shadow flex items-center justify-center group-hover:bg-[#7C5CFF] group-hover:text-white transition-all duration-300 border border-[#7C5CFF]/5 text-[#7C5CFF]">
                <item.icon size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-black text-3xl mb-4 tracking-tight text-[#2D2640] leading-none">{item.title}</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Section - Softened */}
      <section id="cadastro" className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <Badge variant="purple">Comece Agora</Badge>
            <h2 className="text-7xl md:text-9xl font-black mb-12 mt-10 leading-[0.9] tracking-tighter text-[#2D2640]">Educação Financeira</h2>
            <p className="text-2xl text-gray-400 mb-16 leading-relaxed font-medium">
              A mesada inteligente ensina planejamento e o valor do trabalho, preparando crianças para decisões financeiras ao longo da vida.
            </p>
            
            <div className="bg-[#F4F0FF]/50 p-14 rounded-[4rem] border-2 border-[#7C5CFF]/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 purple-gradient"></div>
              <p className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-[#7C5CFF]">Assinatura Transparente</p>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-8xl font-black text-[#2D2640]">R$ 14,90</span>
                <span className="text-2xl font-bold text-gray-400">/mês</span>
              </div>
              <div className="space-y-8">
                <p className="text-gray-500 font-bold text-xl leading-relaxed">
                  Após o período de teste, a assinatura é com renovação automática. Cancele quando quiser.
                </p>
                <div className="flex items-center gap-5 text-white font-black purple-gradient p-8 rounded-[2.5rem] shadow-xl shadow-[#7C5CFF]/20 animate-float">
                   <Shield size={32} />
                   <span className="text-xl">30 dias grátis para experimentar</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-12 md:p-20 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(124,92,255,0.15)] border border-[#7C5CFF]/10 relative group">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#C2F55F]/20 blur-[60px] rounded-full group-hover:bg-[#C2F55F]/30 transition-all"></div>
            <div className="mb-16 relative z-10">
              <h3 className="text-5xl font-black mb-6 tracking-tight leading-tight text-[#2D2640]">Cadastro simples</h3>
              <p className="text-[#7C5CFF] text-2xl font-bold italic">Sua jornada começa aqui.</p>
            </div>
            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: 'Nome completo *', type: 'text', placeholder: 'Ex: João Silva' },
                { label: 'Seu melhor Email *', type: 'email', placeholder: 'nome@exemplo.com' },
                { label: 'WhatsApp', type: 'tel', placeholder: '(00) 00000-0000' }
              ].map((field, i) => (
                <div key={i} className="space-y-4">
                  <label className="block text-sm font-black ml-4 uppercase tracking-[0.2em] text-[#7C5CFF] opacity-60">{field.label}</label>
                  <input 
                    type={field.type} 
                    className="w-full p-8 rounded-[2.5rem] border-2 border-[#7C5CFF]/10 bg-[#FDFCF9] focus:border-[#7C5CFF] focus:ring-8 focus:ring-[#7C5CFF]/5 outline-none text-xl font-medium transition-all placeholder-gray-300" 
                    placeholder={field.placeholder} 
                    required={field.label.includes('*')}
                  />
                </div>
              ))}
              <p className="text-sm text-gray-400 font-bold italic px-4">
                 * Cadastro dos filhos você faz depois pela plataforma.
              </p>
              <button className="w-full purple-gradient text-white py-9 rounded-full font-black text-2xl mt-8 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-2xl shadow-[#7C5CFF]/30 flex items-center justify-center gap-5 group">
                Experimentar Grátis <ChevronRight size={32} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFCF9] border-t border-[#7C5CFF]/10 pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 purple-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-[#7C5CFF]/20 animate-float">
                  <Coins size={28} className="text-white" />
                </div>
                <span className="font-black text-4xl tracking-tighter text-[#2D2640]">Mesada Inteligente</span>
              </div>
              <p className="text-gray-400 text-2xl font-medium mb-12 max-w-md leading-relaxed">
                Transformando a rotina familiar através da educação e gamificação.
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-[#7C5CFF]/5 px-6 py-4 rounded-3xl text-sm font-black text-[#7C5CFF] flex items-center gap-3 border border-[#7C5CFF]/10">
                  <Heart size={18} className="text-[#7C5CFF] fill-current" /> Estilizado por IA
                </span>
              </div>
            </div>
            
            <div>
              <h5 className="font-black mb-12 text-xs uppercase tracking-[0.4em] text-[#7C5CFF]">Contato</h5>
              <address className="not-italic space-y-8">
                <p className="text-gray-500 text-xl font-medium leading-relaxed">231, Parque Novo Mundo — São Paulo</p>
                <p className="font-black text-[#2D2640] text-2xl hover:text-[#7C5CFF] cursor-pointer transition-all">
                  contato@mesadainteligente.com
                </p>
              </address>
            </div>
            
            <div>
              <h5 className="font-black mb-12 text-xs uppercase tracking-[0.4em] text-[#7C5CFF]">Termos</h5>
              <ul className="space-y-8 text-xl font-bold text-gray-400">
                <li><a href="#" className="hover:text-[#7C5CFF] transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-[#7C5CFF] transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-20 border-t border-[#7C5CFF]/10 flex flex-col lg:flex-row justify-between items-center gap-12">
            <p className="text-gray-400 font-bold text-lg">© 2026 Mesada Inteligente. Todos os direitos reservados</p>
            <div className="text-sm font-black text-gray-300 uppercase tracking-widest text-center">
              Protegido pelo reCAPTCHA • Google Privacy & Terms
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
