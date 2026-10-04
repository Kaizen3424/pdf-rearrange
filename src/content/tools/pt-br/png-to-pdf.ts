import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Conversor PNG para PDF – Gratuito, Online, Nada Carregado',
    description:
      'Converta imagens PNG em PDF online gratuitamente. Combine PNGs em um PDF com transparência tratada corretamente – sem uploads, sem inscrição, sem marca d\'água.',
  },
  breadcrumb: 'PNG para PDF',
  h1: 'Converter imagens PNG em PDF',
  intro:
    'PNGs são o que você obtém de capturas de tela, exportações de design e qualquer coisa com fundo transparente. Adicione-os aqui, mantenha a ordem desejada e baixe um único PDF – convertido em seu dispositivo, nunca carregado.',
  benefits: [
    {
      title: 'Transparência tratada corretamente',
      text:
        'Um PNG com um canal alfa é achatado em uma página branca e limpa em vez de ser descartado ou deixado como um buraco transparente, de modo que os logotipos e recortes aparecem com a mesma aparência que apareceram na tela.',
    },
    {
      title: 'Capturas de tela em sua forma original',
      text:
        'Os dados PNG são incorporados ao PDF sem recodificação, para que o texto nítido em uma captura de tela permaneça nítido. Nada é reduzido para tornar o arquivo menor do que o necessário.',
    },
    {
      title: 'Combine todos eles',
      text:
        'Adicione qualquer número de PNGs, arraste-os em sequência e baixe um documento. Escolha A4, Letter ou corte cada página para caber exatamente na imagem.',
    },
  ],
  howTo: {
    heading: 'Como converter PNG para PDF',
    sub: 'Três etapas, com a conversão sendo executada no seu próprio dispositivo.',
    steps: [
      {
        title: 'Adicione suas imagens PNG',
        text:
          'Arraste um ou vários arquivos PNG para a ferramenta acima, clique para navegar ou cole um com Ctrl+V. Capturas de tela e gráficos exportados funcionam.',
      },
      {
        title: 'Escolha a configuração da página',
        text:
          'Escolha A4 ou Letter para impressão ou Ajustar à imagem para cortar cada página perfeitamente à imagem. Escolha uma orientação ou deixe-a seguir cada imagem e defina uma margem se quiser respirar.',
      },
      {
        title: 'Baixe o PDF',
        text:
          'Clique em Baixar PDF. O arquivo é montado em seu dispositivo e salvo em seus downloads – sem marca d\'água e nada para fazer upload.',
      },
    ],
  },
  faq: [
    {
      q: 'Como faço para converter um PNG em um PDF?',
      a:
        'Adicione suas imagens PNG à ferramenta acima, escolha um tamanho de página e clique em Baixar PDF. Tudo roda no seu navegador e o resultado é salvo na sua pasta de downloads.',
    },
    {
      q: 'O que acontece com as áreas transparentes em um PNG?',
      a:
        'Eles estão achatados em uma página branca. As páginas PDF não são transparentes, portanto não há para onde ir o canal alfa; a composição em branco é o que preserva a aparência da imagem na tela. Se você precisar que o fundo tenha uma cor diferente, escolha-o antes de converter.',
    },
    {
      q: 'A conversão reduzirá a qualidade de uma captura de tela?',
      a:
        'Os dados PNG são incorporados exatamente como armazenados, sem recodificação, de modo que o texto pequeno em uma captura de tela permanece legível. As imagens também nunca são ampliadas – uma captura de tela de 400 pixels de largura permanece com 400 pixels de largura em vez de ser esticada para preencher uma página A4.',
    },
    {
      q: 'Posso colocar vários PNGs em um PDF?',
      a:
        'Sim. Adicione quantos quiser, arraste-os na ordem desejada e baixe um único PDF contendo todos eles. Não há limite para o número de imagens.',
    },
    {
      q: 'Meus PNGs foram carregados?',
      a:
        'A decodificação e a montagem PDF acontecem na guia do navegador. Abra a guia Rede das ferramentas do desenvolvedor enquanto você converte e você não verá nenhuma solicitação para transportar seus arquivos.',
    },
  ],
};

export default ptBr;