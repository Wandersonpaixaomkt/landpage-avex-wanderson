const differentials = [
  {
    title: "Diagnóstico gratuito",
    text: "analisamos seu momento atual antes de indicar qualquer solução",
  },
  {
    title: "Sem contrato de fidelidade",
    text: "soluções avulsas ou planos recorrentes, você escolhe",
  },
  {
    title: "Foco em resultado",
    text: "acompanhamos o que acontece depois do lead chegar",
  },
];

const audience = [
  "É empresa, clínica, profissional liberal ou prestador de serviço que precisa atrair novos clientes",
  "Quer parar de depender só de indicações para vender todo mês",
  "Recebe contatos mas não consegue convertê-los em vendas",
  "Já tem um time comercial e quer aumentar os resultados",
  "Quer organizar marketing, atendimento e vendas num processo só",
  'Quer usar anúncios e conteúdo de forma mais estratégica, não só "postar por postar"',
];

const solutions = [
  "Planejamento de conteúdo e calendário de publicações",
  "Copywriting e roteiros para vídeos",
  "Gestão de anúncios no Meta Ads e Google Ads",
  "Landing pages e formulários de qualificação",
  "Implantação de CRM e scripts de atendimento/follow-up",
  "Diagnóstico estratégico e consultoria comercial",
  "Soluções com inteligência artificial e automações",
];

const leftNotifications = [
  "Reunião Agendada",
  "Reunião Agendada",
  "Reunião Agendada",
];

const rightNotifications = [
  "Lead Qualificado Recebido",
  "Lead Qualificado Recebido",
  "Lead Qualificado Recebido",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <div className="wood-panel" />
          <div className="founder-visual">
            <div className="portrait-glow" />
            <div className="portrait-head" />
            <div className="portrait-body" />
            <div className="portrait-hands" />
          </div>
          <div className="notification-stack stack-left">
            {leftNotifications.map((item, index) => (
              <div className="notify-card" key={`${item}-${index}`}>
                <span className="notify-icon calendar">G</span>
                <span>
                  <strong>{item}</strong>
                  <small>Você agendou com um potencial cliente!</small>
                </span>
              </div>
            ))}
          </div>
          <div className="notification-stack stack-right">
            {rightNotifications.map((item, index) => (
              <div className="notify-card" key={`${item}-${index}`}>
                <span className="notify-icon lead">AV</span>
                <span>
                  <strong>{item}</strong>
                  <small>Novo contato qualificado chegou pelo WhatsApp!</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <header className="site-header" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="AVEX Ads">
            <img src="/assets/brand/logo-inverted.png" alt="AVEX" />
          </a>
          <nav className="top-nav">
            <a href="#para-quem">Ads</a>
            <a href="#solucoes">Growth</a>
            <a href="#diagnostico">Performance</a>
          </nav>
        </header>

        <div className="hero-brand">
          <img src="/assets/brand/logo-inverted.png" alt="AVEX" />
        </div>

        <div className="hero-copy">
          <div>
            <p className="eyebrow">Do básico ao avançado</p>
            <h1 id="hero-title">
              Não dependa mais só de indicações, e gere demanda{" "}
              <strong>com previsibilidade.</strong>
            </h1>
          </div>
          <div className="hero-action">
            <p>
              Da atração ao fechamento, a AVEX te ajuda a estruturar marketing,
              anúncios e processo comercial para transformar visibilidade em
              vendas reais.
            </p>
            <a className="primary-button" href="#diagnostico">
              Quero estruturar minhas vendas agora!
            </a>
            <span>Clique no botão acima e fale com a nossa equipe.</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Diferenciais AVEX">
        {differentials.map((item) => (
          <article className="proof-card" key={item.title}>
            <span className="arrow">↗</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="audience-section" id="para-quem">
        <div className="section-heading center">
          <h2>
            A AVEX é pra <strong>você que:</strong>
          </h2>
        </div>
        <div className="audience-grid">
          {audience.map((item) => (
            <article className="audience-card" key={item}>
              <span>→</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <a className="primary-button middle" href="#diagnostico">
          Quero estruturar minhas vendas agora!
        </a>
      </section>

      <section className="solutions-section" id="solucoes">
        <div className="section-heading">
          <h2>
            Tudo que <strong>você tem acesso</strong> com a AVEX
          </h2>
          <p>
            Organizamos nossas soluções em 3 frentes — Produção de Conteúdo,
            Geração de Demanda e Soluções para o seu Negócio:
          </p>
        </div>

        <div className="solutions-layout">
          <div className="checklist-panel">
            {solutions.map((item) => (
              <div className="check-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <aside className="highlight-panel">
            <img src="/assets/brand/x-mark.png" alt="" aria-hidden="true" />
            <p>
              Esse é o conjunto completo de soluções da AVEX. Mas depois de
              conversar com o nosso time, <strong>você recebe um plano sob medida</strong>,
              com prioridades claras para o seu momento de negócio — sem pagar por
              algo que você ainda não precisa.
            </p>
          </aside>
        </div>
      </section>

      <section className="diagnostic-section" id="diagnostico">
        <div className="diagnostic-copy">
          <p className="eyebrow">Diagnóstico estratégico</p>
          <h2>
            Saia do ponto atual ao <strong>ápice do mercado.</strong>
          </h2>
          <p>
            A AVEX entende sua operação antes de executar: oferta, tráfego,
            atendimento, CRM e follow-up entram no mesmo plano para gerar demanda
            previsível.
          </p>
        </div>
        <a className="primary-button final" href="mailto:contato@avexads.com.br?subject=Diagnóstico%20AVEX">
          Falar com a equipe AVEX
        </a>
      </section>
    </main>
  );
}
