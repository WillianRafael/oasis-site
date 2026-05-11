import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  HeartHandshake,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import {
  companyDetails,
  experiences,
  navLinks,
  services,
  showExperiences,
  showServices,
  steps,
  whatsappHref,
} from "./site-content";

const stepIcons = {
  search: Search,
  wallet: WalletCards,
  shield: ShieldCheck,
};

export default function Home() {
  return (
    <main className="site">
      <section className="hero" aria-labelledby="hero-title">
        <header className="nav">
          <a className="brand" href="#hero-title" aria-label="Oasis">
            <Image src="/assets/oasis/logo.png" alt="Oasis" width={54} height={54} priority />
            <span>
              <strong>Oasis</strong>
              <small>Viagens premium</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Seções">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-copy">
          <p className="kicker">Oasis | Viagens premium</p>
          <h1 id="hero-title">Viagens planejadas com inteligência, curadoria e atenção aos detalhes.</h1>
          <p>
            Planejamento personalizado de voos, hospedagens e experiências para quem quer viajar com
            clareza, conforto e suporte real.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Planejar minha viagem
            </a>
            <a className="secondary-link" href="#processo">
              Como funciona
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <ul className="proof">
            <li>
              <Sparkles aria-hidden="true" />
              Passagens aéreas
            </li>
            <li>
              <Plane aria-hidden="true" />
              Hotéis e resorts
            </li>
            <li>
              <HeartHandshake aria-hidden="true" />
              Cruzeiros
            </li>
            <li>
              <ShieldCheck aria-hidden="true" />
              Seguro viagem
            </li>
            <li>
              <CalendarDays aria-hidden="true" />
              Transfer
            </li>
            <li>
              <WalletCards aria-hidden="true" />
              Aluguel de carro
            </li>
          </ul>
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="kicker">Antes do embarque</p>
          <h2>Viajar bem começa antes do destino.</h2>
        </div>
        <p>
          Planejar uma viagem premium não precisa ser uma maratona de abas abertas. A Oasis organiza
          escolhas, compara possibilidades e transforma a ideia da viagem em um plano claro,
          confortável e seguro.
        </p>
      </section>

      <section className="process" id="processo" aria-labelledby="process-title">
        <p className="kicker">Como funciona</p>
        <h2 id="process-title">Da primeira conversa ao embarque.</h2>
        <div className="step-grid">
          {steps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <article className="step-card" key={step.title}>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {showServices ? (
        <section className="services" id="servicos" aria-labelledby="services-title">
          <div className="services-heading">
            <p className="kicker">Serviços</p>
            <h2 id="services-title">Tudo o que sustenta uma viagem bem resolvida.</h2>
            <p>
              Um ponto de partida para passagens, hospedagens, cruzeiros, seguros e serviços de apoio,
              com orientação quando a escolha pede mais cuidado.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <a
                className="service-card"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                key={service.title}
              >
                <span>
                  <strong>{service.title}</strong>
                  <small>{service.text}</small>
                </span>
                <span className="service-action">
                  {service.cta}
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {showExperiences ? (
        <section className="experiences" id="experiencias" aria-labelledby="experiences-title">
          <div>
            <p className="kicker">Experiências</p>
            <h2 id="experiences-title">Entradas diferentes para viajantes diferentes.</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((item) => (
              <a className="experience-card" href={whatsappHref} target="_blank" rel="noopener noreferrer" key={item}>
                <span>{item}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="trust">
        <div>
          <p className="kicker">Segurança</p>
          <h2>Clareza e respaldo para planejar com confiança.</h2>
          <p>
            Cadastur ativo, atendimento humano e dados empresariais visíveis ajudam a trazer mais
            segurança, especialmente em viagens de maior valor.
          </p>
        </div>
        <div className="trust-grid">
          <span>
            <BadgeCheck aria-hidden="true" />
            Cadastur
          </span>
          <span>
            <ShieldCheck aria-hidden="true" />
            Compra orientada
          </span>
          <span>
            <HeartHandshake aria-hidden="true" />
            Suporte humano
          </span>
          <span>
            <CalendarDays aria-hidden="true" />
            Roteiro sob medida
          </span>
        </div>
      </section>

      <section className="founder" id="sobre" aria-labelledby="founder-title">
        <div className="founder-media">
          <Image
            src="/assets/oasis/willian-rafael.jpg"
            alt="Willian Rafael em viagem, com paisagem natural ao fundo."
            width={1123}
            height={645}
            sizes="(max-width: 920px) 100vw, 58vw"
          />
        </div>
        <div className="founder-copy">
          <p className="kicker">Conheça o fundador</p>
          <h2 id="founder-title">Willian Rafael</h2>
          <p>
            Sou de Curitiba e criei a Oasis para transformar o planejamento de viagens em uma
            experiência mais segura, fluida e bem resolvida.
          </p>
          <p>
            Acredito que viagens premium exigem mais do que boas tarifas. Exigem atenção aos
            detalhes, boas decisões e alguém que realmente acompanhe cada etapa.
          </p>
          <p>
            Por isso, ajudo meus clientes a encontrar as melhores combinações entre voos, milhas,
            hospedagens e experiências, criando roteiros personalizados com clareza, conforto e
            suporte próximo do início ao fim.
          </p>
          <p>
            <strong>Planeje sua próxima viagem com atendimento personalizado.</strong>
          </p>
        </div>
      </section>

      <section className="final-cta" id="contato" aria-labelledby="contact-title">
        <h2 id="contact-title">A parte boa da viagem começa quando alguém cuida da complexidade por você.</h2>
        <p>
          Me conte destino, datas aproximadas, quantidade de pessoas e o tipo de experiência que você
          quer viver. A Oasis organiza os próximos passos.
        </p>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          Começar pelo WhatsApp
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <footer className="legal-footer" aria-label="Dados institucionais">
        <div className="legal-brand">
          <Image src="/assets/oasis/wr3-logo.png" alt="WR3" width={388} height={260} />
          <span>
            <strong>WR3 Cybertech & Travel Solutions</strong>
            <small>Operação tecnológica e turística da Oasis</small>
          </span>
        </div>

        <div className="cadastur-card" aria-label="Certificado Cadastur">
          <Image
            src="/assets/oasis/cadastur-logo.svg"
            alt="Cadastur - Fazendo o turismo legal."
            width={190}
            height={56}
          />
          <span>
            <strong>Certificado Cadastur ativo</strong>
            <small>Agência de Turismo | válido de 19/06/2025 a 19/06/2027</small>
          </span>
        </div>

        <details className="company-details">
          <summary>Dados da empresa</summary>
          <dl>
            <div>
              <dt>Razão Social</dt>
              <dd>{companyDetails.legalName}</dd>
            </div>
            <div>
              <dt>CNPJ</dt>
              <dd>{companyDetails.cnpj}</dd>
            </div>
            <div>
              <dt>Nome Fantasia</dt>
              <dd>{companyDetails.tradeName}</dd>
            </div>
          </dl>
        </details>
      </footer>
    </main>
  );
}
