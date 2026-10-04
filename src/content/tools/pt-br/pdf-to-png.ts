import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Converta PDF em PNG online gratuitamente - sem perdas',
    description:
      'Converta páginas PDF em imagens PNG gratuitamente em um ZIP. Plano de fundo transparente e sem perdas opcional, renderizado em seu dispositivo - sem uploads',
  },
  breadcrumb: 'PDF para PNG',
  h1: 'Converter páginas PDF em imagens PNG',
  intro:
    'PNG mantém cada pixel exatamente como renderizado, o que o torna a escolha certa quando a imagem será editada, composta ou não deve mostrar artefatos de compressão. Converta qualquer PDF e remova todas as páginas como PNG.',
  benefits: [
    {
      title: 'Sem perdas, sempre',
      text:
        'PNG compacta sem descartar informações, para que as bordas do texto permaneçam nítidas e as cores planas permaneçam planas. Nada é suavizado como JPG.',
    },
    {
      title: 'Fundo transparente se você precisar',
      text:
        'As páginas PDF normalmente pintam um fundo opaco, mas você pode exportar com transparência - útil quando as imagens serão sobrepostas sobre outra coisa.',
    },
    {
      title: 'Todas as páginas em um arquivo',
      text:
        'Converta um documento longo de uma só vez. Cada página se torna page-1.png, page-2.png e assim por diante, compactada em um único ZIP.',
    },
  ],
  howTo: {
    heading: 'Como converter PDF para PNG',
    sub: 'Três etapas, com PDF renderizado localmente.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text:
          'Solte um arquivo na ferramenta acima ou clique para navegar. Você verá a contagem de páginas assim que for lida.',
      },
      {
        title: 'Escolha uma resolução',
        text:
          '72, 150 ou 300 DPI. Os arquivos PNG são maiores que JPG porque nada é descartado, portanto, uma resolução mais baixa é uma maneira razoável de manter o arquivo gerenciável.',
      },
      {
        title: 'Baixe o ZIP',
        text:
          'Clique em Converter em imagens e suas páginas PNG chegarão juntas em um único arquivo.',
      },
    ],
  },
  faq: [
    {
      q: 'Devo usar PNG ou JPG?',
      a:
        'Use PNG quando a imagem for editada, em camadas ou precisar permanecer nítida – não há perdas. Use JPG ao compartilhar ou fazer upload e o tamanho do arquivo é mais importante do que a fidelidade perfeita. Converter a mesma página nos dois sentidos é uma maneira rápida de ver a diferença.',
    },
    {
      q: 'Como faço para converter um PDF em PNG?',
      a:
        'Adicione seu PDF acima, escolha uma resolução e clique em Converter em imagens. Cada página é renderizada como PNG e entregue em um ZIP.',
    },
    {
      q: 'O PDF foi carregado?',
      a:
        'Não. A renderização acontece dentro da aba do seu navegador. Nada é transmitido para nenhum servidor, o que você pode confirmar na aba Rede das suas ferramentas de desenvolvedor.',
    },
    {
      q: 'Por que os arquivos PNG são tão grandes?',
      a:
        'Porque PNG mantém todos os detalhes em vez de aproximá-los, e uma alta resolução significa muitos pixels. Cair de 300 DPI para 150 DPI reduz a contagem de pixels em cerca de quatro vezes sem perda de método.',
    },
    {
      q: 'Posso obter um fundo transparente?',
      a:
        'Sim – na configuração de plano de fundo, escolha Transparente. Observe que uma página PDF geralmente desenha seu próprio fundo branco, então você só verá transparência onde a página realmente deixa o fundo sem pintura.',
    },
  ],
};

export default ptBr;