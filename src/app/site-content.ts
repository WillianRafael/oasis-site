export const whatsappNumber = "5541987711041";

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá, quero planejar uma viagem com a Oasis. Podem me ajudar?",
)}`;

export const showServices = false;
export const showExperiences = false;

export const steps = [
  {
    icon: "search",
    title: "Escutamos o que importa",
    text: "Destino, datas, ritmo da viagem e expectativas entram na conversa para desenhar uma experiência com intenção.",
  },
  {
    icon: "wallet",
    title: "Encontramos a melhor estratégia",
    text: "Voos, conexões, milhas e hospedagens analisados com critério para que sua viagem faça sentido do início ao fim.",
  },
  {
    icon: "shield",
    title: "Cuidamos da sua viagem",
    text: "Acompanhamento antes, durante e depois, com suporte humano para dúvidas, ajustes e detalhes importantes.",
  },
] as const;

export const experiences = [
  "Lua de mel inesquecível",
  "Viagens em família sem preocupação",
  "Europa com curadoria personalizada",
  "Resorts para descansar de verdade",
  "Cruzeiros com conforto e clareza",
  "Viagens premium sob medida",
] as const;

export const services = [
  {
    title: "Passagens aéreas",
    text: "Busca orientada de voos, rotas e conexões para chegar melhor ao destino.",
    cta: "Buscar voos",
  },
  {
    title: "Hotéis e resorts",
    text: "Hospedagens alinhadas ao perfil da viagem, do conforto ao custo-benefício.",
    cta: "Buscar hotéis",
  },
  {
    title: "Cruzeiros",
    text: "Opções de navios, cabines e roteiros com mais clareza antes da escolha.",
    cta: "Ver cruzeiros",
  },
  {
    title: "Seguro viagem",
    text: "Proteção adequada ao destino, ao perfil dos viajantes e ao tipo de roteiro.",
    cta: "Cotar seguro",
  },
  {
    title: "Transfer",
    text: "Deslocamentos organizados para reduzir espera, improviso e preocupação.",
    cta: "Organizar transfer",
  },
  {
    title: "Aluguel de carro",
    text: "Locação pensada para o roteiro, o grupo e a autonomia que a viagem pede.",
    cta: "Alugar carro",
  },
] as const;

export const navLinks = [
  { href: "#processo", label: "Como funciona" },
  ...(showServices ? [{ href: "#servicos", label: "Serviços" }] : []),
  ...(showExperiences ? [{ href: "#experiencias", label: "Experiências" }] : []),
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const companyDetails = {
  legalName: "WILLIAN RAFAEL ROVILLER REIS TECNOLOGIA DA INFORMACAO LTDA",
  cnpj: "55.552.429/0001-83",
  tradeName: "WR3 CYBERTECH & TRAVEL SOLUTIONS",
} as const;
