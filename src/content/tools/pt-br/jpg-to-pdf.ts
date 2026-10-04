import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Conversor JPG para PDF – Gratuito, Online, Sem Uploads',
    description:
      'Converta imagens JPG em PDF online gratuitamente. Combine um ou mais JPEGs em um único PDF que permanece no seu dispositivo — sem upload, sem inscrição',
  },
  breadcrumb: 'JPG para PDF',
  h1: 'Converter imagens JPG em PDF',
  intro:
    'Fotografias, digitalizações e capturas de tela geralmente chegam como JPGs, e a maioria das pessoas precisa delas em um PDF. Adicione suas imagens, defina o tamanho da página e faça o download – a conversão acontece dentro do seu navegador, para que suas fotos nunca sejam enviadas para um servidor.',
  benefits: [
    {
      title: 'Suas fotos permanecem no lugar',
      text:
        'As imagens são lidas, colocadas e gravadas em um PDF inteiramente dentro da aba do seu navegador. Nada é carregado, portanto, fotos pessoais e documentos digitalizados nunca são transmitidos para lugar nenhum.',
    },
    {
      title: 'Sem recompressão',
      text:
        'Os bytes JPEG são incorporados literalmente em vez de decodificados e recodificados. Uma foto que parecia nítida em sua galeria parece idêntica na PDF, sem artefatos de compressão de segunda geração.',
    },
    {
      title: 'Um PDF de muitas imagens',
      text:
        'Adicione quantos JPGs desejar, arraste-os na ordem desejada e obtenha um único documento organizado - com A4, Letter ou páginas cortadas para caber exatamente em cada imagem.',
    },
  ],
  howTo: {
    heading: 'Como converter JPG para PDF',
    sub: 'Três etapas e suas imagens nunca saem do dispositivo.',
    steps: [
      {
        title: 'Adicione suas imagens JPG',
        text:
          'Arraste um ou vários arquivos JPG para a ferramenta acima ou clique para navegar. Você também pode colar uma imagem com Ctrl+V e adicionar mais a qualquer momento sem começar de novo.',
      },
      {
        title: 'Definir a configuração da página',
        text:
          'Escolha A4, Letter ou Ajustar à imagem para cortar cada página até sua imagem. Escolha retrato, paisagem ou deixe a orientação seguir a imagem e adicione uma margem se desejar espaço em branco ao redor dela.',
      },
      {
        title: 'Baixe o PDF',
        text:
          'Clique em Baixar PDF. Seu documento é criado em seu dispositivo e salvo em seus downloads – sem marca d\'água e sem etapa de upload para aguardar.',
      },
    ],
  },
  faq: [
    {
      q: 'Como faço para converter um JPG em um PDF?',
      a:
        'Abra a ferramenta acima, adicione sua imagem JPG, escolha um tamanho de página e clique em Baixar PDF. A conversão é executada no seu navegador e o arquivo finalizado é salvo diretamente nos seus downloads.',
    },
    {
      q: 'Minhas imagens são carregadas em algum lugar?',
      a:
        'Não. Cada imagem é decodificada, colocada e gravada no PDF dentro da aba do seu navegador, portanto nenhuma cópia de suas fotos é enviada para um servidor. Você mesmo pode confirmar: abra as ferramentas de desenvolvedor do seu navegador, observe a guia Rede e converta uma imagem. Nada é transmitido.',
    },
    {
      q: 'A conversão de JPG em PDF reduzirá a qualidade da imagem?',
      a:
        'Não. Os dados JPEG são incorporados no PDF exatamente como aparecem no seu arquivo, em vez de serem decodificados e recodificados. Isso evita uma segunda geração de artefatos de compressão, que normalmente faz com que as fotos convertidas pareçam suaves.',
    },
    {
      q: 'Posso combinar vários JPGs em um PDF?',
      a:
        'Sim. Adicione quantas imagens desejar, arraste-as na ordem desejada e baixe um documento contendo todas elas. Não há limite para o número de imagens.',
    },
    {
      q: 'Qual tamanho de página devo escolher?',
      a:
        'Escolha A4 ou Letter para impressão, o que dá a cada imagem uma página padrão completa. Escolha Ajustar à imagem quando quiser que a página seja bem cortada em cada imagem, sem nenhum espaço em branco ao redor - útil para um álbum de fotos ou uma história em quadrinhos.',
    },
  ],
};

export default ptBr;