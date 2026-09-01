export const site = {
  name: "M7 Studio Produções",
  shortName: "M7 Studio",
  tagline: "Estúdio de podcast para alugar",
  description:
    "Estúdio de podcast para alugar no Rio de Janeiro. Câmeras 4K, microfones profissionais e acústica tratada — você chega, grava e sai com o episódio pronto.",
  whatsappNumber: "5521990907668",
  whatsappDisplay: "(21) 99090-7668",
  address: {
    line1: "Rua Araguaia, 1500, Sala 303",
    line2: "Freguesia — Rio de Janeiro / RJ",
  },
} as const;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;

export const stats = [
  { num: "4", label: "Cadeiras na bancada" },
  { num: "4K", label: "Câmeras multi-ângulo" },
  { num: "08", label: "Canais de microfone" },
  { num: "2", label: "Episódios por sessão — até 01h30" },
] as const;

export const structure = [
  {
    tag: "Imagem",
    title: "Câmeras 4K",
    body: "Múltiplos ângulos com enquadramento de bancada, plano fechado e plano aberto para cortes dinâmicos.",
  },
  {
    tag: "Áudio",
    title: "Microfones profissionais",
    body: "Microfones dedicados por participante, mesa de som e monitoração por fone para cada pessoa na mesa.",
  },
  {
    tag: "Luz",
    title: "Iluminação de cena",
    body: "Set de luz LED com temperatura ajustável e luz de fundo para dar profundidade ao cenário.",
  },
  {
    tag: "Acústica",
    title: "Sala tratada",
    body: "Tratamento acústico nas paredes para eliminar eco e ruído — áudio pronto para publicar com pouca edição.",
  },
  {
    tag: "Cenário",
    title: "Ambientação pronta",
    body: "Cenário montado com painel, plantas e iluminação decorativa. Espaço também para trazer sua identidade visual.",
  },
  {
    tag: "Entrega",
    title: "Arquivos organizados",
    body: "Você sai com os arquivos de vídeo e as faixas de áudio separadas, prontos para o seu editor.",
  },
] as const;

export const steps = [
  {
    tc: "00:01",
    title: "Escolha a data e o horário",
    body: "Fale com a gente pelo WhatsApp, veja a agenda disponível e reserve a sessão que precisa.",
  },
  {
    tc: "00:02",
    title: "Chegue com a pauta",
    body: "A sala já está montada e testada. Nossa equipe recebe você, ajusta o áudio e o enquadramento e libera para gravar.",
  },
  {
    tc: "00:03",
    title: "Grave o seu podcast",
    body: "Você conduz o episódio no seu ritmo. Um operador fica à disposição para resolver qualquer imprevisto técnico.",
  },
  {
    tc: "00:04",
    title: "Saia com os arquivos",
    body: "Ao final da sessão você recebe os vídeos e áudios. Precisa de edição e cortes? A gente também faz — é só pedir.",
  },
] as const;

export const plans = [
  {
    name: "Sessão Avulsa",
    price: "R$ 000",
    unit: "/ sessão",
    feature: false,
    cta: "Reservar sessão",
    items: [
      "Até 2 episódios em 01h30",
      "Estúdio completo com equipe de apoio",
      "Câmeras, microfones e iluminação inclusos",
      "Arquivos brutos entregues no dia",
    ],
  },
  {
    name: "Pacote Gravação",
    price: "R$ 000",
    unit: "/ 4 sessões",
    feature: true,
    cta: "Reservar pacote",
    items: [
      "Quatro sessões com desconto",
      "Grave um mês de programa de uma vez",
      "Faixas de áudio separadas por convidado",
      "1 corte vertical de cortesia por sessão",
    ],
  },
  {
    name: "Plano Mensal",
    price: "R$ 000",
    unit: "/ mês",
    feature: false,
    cta: "Falar sobre o mensal",
    items: [
      "Sessões recorrentes para o seu programa",
      "Horário fixo reservado na agenda",
      "Prioridade de reserva e valor fechado",
      "Opcional: edição e publicação inclusas",
    ],
  },
] as const;

export const faq = [
  {
    q: "Preciso levar algum equipamento?",
    a: "Não. Câmeras, microfones, iluminação e mesa de som já estão na sala. Você só precisa levar a pauta, os convidados e, se quiser, um roteiro ou material de apoio.",
  },
  {
    q: "Quantas pessoas cabem na gravação?",
    a: "A bancada comporta até 4 pessoas com microfone e enquadramento próprios. Para formatos com plateia ou mais convidados, fale com a gente antes para organizarmos o espaço.",
  },
  {
    q: "Quanto tempo dura a sessão?",
    a: "A sessão padrão é de até 01h30 e comporta a gravação de até 2 episódios. Precisa de mais tempo? Contrate sessões adicionais ou o pacote de gravação.",
  },
  {
    q: "Vocês fazem a edição do episódio?",
    a: "A gravação já sai com os arquivos organizados. Edição completa, cortes verticais e thumbnails são serviços adicionais — combinamos escopo e prazo na hora da reserva.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "A reserva é confirmada com sinal e o restante é pago até o dia da gravação. Aceitamos Pix e cartão. Para o plano mensal o valor é fechado e cobrado por mês.",
  },
  {
    q: "Posso remarcar se precisar?",
    a: "Sim, com aviso prévio de 48 horas você remarca sem custo dentro dos 30 dias seguintes. Cancelamentos em cima da hora podem reter parte do sinal.",
  },
] as const;
