import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Assine um PDF online gratuitamente – Faça sua assinatura',
    description:
      'Assine PDFs gratuitamente: adicione sua imagem de assinatura a qualquer página, posicione-a onde ela pertence e faça o download. Aplicado no seu navegador',
  },
  breadcrumb: 'Assinar PDF',
  h1: 'Assine seu PDF no navegador',
  intro:
    'Você já tem sua assinatura – aquela que você usa nas entregas e formulários. Adicione-o como imagem às páginas que precisam ser assinadas, coloque-o onde está a linha de assinatura e faça o download. O documento nunca sai do seu dispositivo, que é o objetivo de uma assinatura.',
  benefits: [
    {
      title: 'Use a assinatura que você já possui',
      text:
        'Digitalize ou fotografe sua assinatura uma vez, salve-a como PNG e reutilize-a. Um fundo transparente funciona melhor – qualquer coisa retangular chega com sua própria caixa branca.',
    },
    {
      title: 'Colocado onde o documento espera',
      text:
        'Sete posições de âncora mais uma visualização ao vivo, para que a assinatura fique na linha de assinatura em vez de flutuar em algum lugar próximo a ela.',
    },
    {
      title: 'O documento permanece privado',
      text:
        'Um contrato assinado é um documento finalizado. Ele é aberto, carimbado e salvo na aba do seu navegador — nenhum servidor recebe uma cópia, antes ou depois da assinatura.',
    },
  ],
  howTo: {
    heading: 'Como assinar um PDF',
    sub: 'Três etapas e nada é carregado.',
    steps: [
      {
        title: 'Adicione o PDF que você precisa assinar',
        text:
          'Solte-o na ferramenta acima ou clique para navegar. Vários arquivos podem ser assinados em uma única passagem.',
      },
      {
        title: 'Adicione sua imagem de assinatura',
        text:
          'Selecione PNG ou JPG da sua assinatura. Um PNG transparente mantém apenas a tinta; uma foto em papel branco mostrará seu fundo, portanto, uma digitalização com o fundo removido fica melhor.',
      },
      {
        title: 'Posicionar e baixar',
        text:
          'Escolha onde fica a assinatura – o canto inferior direito é o local normal – e clique em Adicionar assinatura. A cópia assinada é baixada e seu original permanece intacto.',
      },
    ],
  },
  faq: [
    {
      q: 'Como assino um PDF?',
      a:
        'Adicione PDF, selecione uma imagem de sua assinatura, escolha sua posição e clique em Adicionar assinatura. O documento assinado é salvo em seus downloads.',
    },
    {
      q: 'Esta é uma assinatura legalmente válida?',
      a:
        'Isso depende da sua jurisdição e do que o destinatário aceita, não da ferramenta. Isto coloca uma imagem da sua assinatura no documento; não aplica assinatura digital criptográfica. Muitos fluxos de trabalho aceitam uma imagem, e aqueles que exigem assinatura criptográfica dirão isso.',
    },
    {
      q: 'Que tipo de imagem de assinatura funciona melhor?',
      a:
        'Um PNG com fundo transparente. A ferramenta também aceita JPG, mas uma foto de uma assinatura em papel carregará seu fundo branco, então você obterá uma caixa branca ao redor da tinta.',
    },
    {
      q: 'Posso assinar apenas uma página de um documento longo?',
      a:
        'Esta versão carimba todas as páginas, o que se adequa a um acordo completo. Para assinar uma única página, primeiro divida o documento, assine a página e mescle as partes novamente.',
    },
    {
      q: 'Meu documento assinado é carregado em algum lugar?',
      a:
        'A assinatura acontece dentro da aba do seu navegador e nenhuma cópia do documento – assinada ou não – é transmitida para qualquer servidor.',
    },
  ],
};

export default ptBr;