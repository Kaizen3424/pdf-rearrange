import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Alterar o tamanho da página PDF online gratuitamente',
    description:
      'Altere gratuitamente o tamanho do papel das páginas PDF. Mova o conteúdo para A4, Letter ou A5, retrato ou paisagem — aplicado em seu navegador',
  },
  breadcrumb: 'Redimensionar PDF',
  h1: 'Redimensione suas páginas PDF',
  intro:
    'Um documento configurado para Letter que precisa ser impresso em A4 ou um deck paisagem que deve se tornar retrato. Mude o papel e a orientação uma vez, para cada página, e o conteúdo se moverá junto.',
  benefits: [
    {
      title: 'Tamanhos de papel padrão',
      text:
        'A4, Letter e A5, em qualquer orientação, além da opção de manter o tamanho atual e alternar apenas entre retrato e paisagem.',
    },
    {
      title: 'Cada página de uma vez',
      text:
        'Documentos de tamanhos variados – uma página Letter grampeada em um relatório A4 – ficam uniformes, o que geralmente é o motivo do redimensionamento em primeiro lugar.',
    },
    {
      title: 'O conteúdo permanece nítido',
      text:
        'As páginas são movidas para a nova planilha como vetores, para que seu texto permaneça selecionável e nítido em qualquer tamanho. Nada se transforma em imagem.',
    },
  ],
  howTo: {
    heading: 'Como redimensionar páginas PDF',
    sub: 'Três etapas, aplicadas no seu dispositivo.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text:
          'Solte o documento na ferramenta acima. O tamanho atual da página é exibido para que você possa ver o que está alterando.',
      },
      {
        title: 'Escolha o novo tamanho',
        text:
          'Escolha A4, Letter ou A5 ou mantenha o tamanho atual. Em seguida, escolha retrato ou paisagem – ou deixe a orientação como está, o que mantém cada página voltada como já está. Deixe "dimensionar conteúdo para caber" ativado e seu conteúdo será redimensionado e centralizado na nova planilha.',
      },
      {
        title: 'Baixe o PDF redimensionado',
        text:
          'Clique em Redimensionar páginas. A cópia redimensionada é salva em seus downloads e o original permanece intacto.',
      },
    ],
  },
  faq: [
    {
      q: 'Como altero o tamanho da página de um PDF?',
      a:
        'Adicione o PDF acima, escolha o tamanho do papel e a orientação desejada e clique em Redimensionar páginas. Cada página é redimensionada e a cópia é baixada.',
    },
    {
      q: 'Meu conteúdo será dimensionado para caber?',
      a:
        'Sim, por padrão. O conteúdo é redimensionado para caber na nova página e centralizado, mantendo suas proporções para que nada seja esticado. Desative essa opção e a página muda de tamanho enquanto o conteúdo permanece exatamente onde estava, o que corta tudo o que não cabe mais.',
    },
    {
      q: 'Os links sobrevivem ao redimensionamento?',
      a:
        'Eles acontecem quando você redimensiona apenas a caixa da página. Quando o conteúdo é dimensionado para caber, cada página é redesenhada como um único objeto e quaisquer links nesse documento não são transferidos. Se o documento tiver links de seu interesse, redimensione com o dimensionamento desativado.',
    },
    {
      q: 'Qual é a diferença entre redimensionar e cortar?',
      a:
        'O redimensionamento altera o tamanho do papel em que a página fica. O corte remove as bordas da página visível. Criar uma página A4 em vez de Letter é redimensionar; cortar uma borda de uma digitalização é cortar.',
    },
    {
      q: 'Posso fazer apenas uma página em paisagem?',
      a:
        'Esta versão aplica um tamanho e orientação a cada página, o que mantém o documento uniforme. Para uma única página, divida o documento, redimensione a página e mescle-a novamente.',
    },
    {
      q: 'Meu PDF foi carregado?',
      a:
        'Não. O redimensionamento é aplicado dentro da aba do seu navegador e nada é transmitido para nenhum servidor.',
    },
  ],
};

export default ptBr;