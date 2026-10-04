import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Cortar páginas PDF online gratuitamente - aparar bordas',
    description:
      'Corte páginas PDF gratuitamente. Corte a mesma margem de cada página ou defina cada borda separadamente — aplicada em seu navegador, sem uploads, sem inscrição',
  },
  breadcrumb: 'Cortar PDF',
  h1: 'Corte as bordas de suas páginas PDF',
  intro:
    'Os documentos digitalizados chegam com a base do scanner aparecendo ao redor da página, e os slides exportados para PDF geralmente apresentam margens que ninguém solicitou. Corte uma quantidade fixa de cada borda e o conteúdo preencherá a página novamente.',
  benefits: [
    {
      title: 'Um corte em cada página',
      text:
        'Defina as quatro margens uma vez e cada página será cortada de forma idêntica – o comportamento correto para uma digitalização ou um deck exportado, onde cada página tem o mesmo problema.',
    },
    {
      title: 'As bordas permanecem afiadas',
      text:
        'O corte altera a caixa da página, não o conteúdo. O texto não é renderizado ou dimensionado novamente, portanto o resultado recortado é tão nítido quanto o original.',
    },
    {
      title: 'Feedback ao vivo em pontos',
      text:
        'Cada borda mostra sua própria medida, portanto, uma margem de 36 pt e uma margem de 12 pt são escolhas visivelmente diferentes antes de qualquer coisa ser aplicada.',
    },
  ],
  howTo: {
    heading: 'Como cortar um PDF',
    sub: 'Três etapas, aplicadas no seu dispositivo.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text:
          'Solte o documento na ferramenta acima ou clique para navegar. O tamanho atual da página é mostrado para que suas margens tenham contexto.',
      },
      {
        title: 'Defina as quatro margens',
        text:
          'Arraste cada borda para cortar essa quantidade na parte superior, direita, inferior e esquerda. Valores iguais nos quatro lados são o caso comum para bordas de digitalização.',
      },
      {
        title: 'Baixe o PDF recortado',
        text:
          'Clique em Cortar páginas. A cópia recortada é salva em seus downloads; o arquivo original permanece intacto.',
      },
    ],
  },
  faq: [
    {
      q: 'Como faço para recortar um PDF?',
      a:
        'Adicione seu PDF, defina quanto cortar de cada borda e clique em Cortar páginas. Cada página é cortada pelas mesmas margens e o resultado é baixado.',
    },
    {
      q: 'O corte remove o conteúdo fora da caixa?',
      a:
        'Não, e vale a pena saber disso. O corte altera qual parte da página é exibida - o significado padrão e não destrutivo de um corte PDF. Um visualizador mostra apenas a área cortada, mas o conteúdo subjacente ainda existe no arquivo.',
    },
    {
      q: 'O que são pontos?',
      a:
        'Um ponto equivale a 1/72 de polegada, a unidade em que os tamanhos de página PDF são medidos. Como guia, 36 pt é meia polegada e 12 pt é um corte estreito - aproximadamente a borda da mesa do scanner.',
    },
    {
      q: 'Posso cortar apenas uma página?',
      a:
        'Esta versão corta todas as páginas com as mesmas margens, que é o que uma digitalização ou apresentação de slides precisa. Para uma única página, divida o documento primeiro, corte a página e mescle-a novamente.',
    },
    {
      q: 'Meu PDF foi carregado?',
      a: 'Não. O recorte é aplicado dentro da aba do seu navegador e nada é transmitido.',
    },
  ],
};

export default ptBr;