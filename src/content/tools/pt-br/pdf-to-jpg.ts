import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Converter PDF em JPG grátis – cada página vira imagem',
    description:
      'Converta páginas PDF em imagens JPG gratuitamente, em um ZIP. Escolha 72, 150 ou 300 DPI e a qualidade que você precisa – renderizada em seu dispositivo',
  },
  breadcrumb: 'PDF para JPG',
  h1: 'Converter páginas PDF em imagens JPG',
  intro:
    'Você precisa de uma página PDF como foto – para colocar um slide, fazer upload para algum lugar que rejeite PDFs ou compartilhar em um bate-papo. Escolha sua resolução, converta e cada página retornará como JPG dentro de um único ZIP.',
  benefits: [
    {
      title: 'Escolha a resolução que você precisa',
      text:
        '72 DPI para uma rápida visualização na tela, 150 para documentos e e-mail, 300 para impressão. A ferramenta mostra o tamanho exato do pixel antes de renderizar qualquer coisa, para que não haja surpresas.',
    },
    {
      title: 'Um ZIP, não vinte downloads',
      text:
        'Cada página é convertida e compactada em um único arquivo. Os navegadores bloqueiam downloads automáticos repetidos, portanto, um arquivo é a opção prática e a que realmente funciona.',
    },
    {
      title: 'Renderizado onde seu arquivo já está',
      text:
        'Seu PDF é aberto e desenhado dentro do seu navegador. Nada é enviado para lugar nenhum, o que importa quando o documento é um contrato ou um prontuário.',
    },
  ],
  howTo: {
    heading: 'Como converter PDF para JPG',
    sub: 'Três etapas e o PDF nunca sai do seu dispositivo.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text:
          'Solte um arquivo na ferramenta acima ou clique para navegar. A contagem de páginas aparece imediatamente para que você saiba com o que está trabalhando.',
      },
      {
        title: 'Escolha resolução e qualidade',
        text:
          'Escolha 72, 150 ou 300 DPI. Para JPG você também pode escolher um arquivo menor ou qualidade máxima — maior qualidade significa um ZIP maior, então vale a pena combinar com o local onde a imagem será usada.',
      },
      {
        title: 'Baixe o ZIP',
        text:
          'Clique em Converter em imagens. Cada página é renderizada e salva como page-1.jpg, page-2.jpg e assim por diante, compactada e salva em seus downloads.',
      },
    ],
  },
  faq: [
    {
      q: 'Como faço para converter uma página PDF em uma imagem?',
      a:
        'Adicione o PDF acima, escolha uma resolução e clique em Converter em imagens. Cada página é renderizada como JPG e entregue junto em um arquivo ZIP.',
    },
    {
      q: 'Meu PDF foi carregado em algum lugar?',
      a:
        'Não. O PDF é aberto e renderizado na guia do seu navegador usando o mesmo mecanismo que seu navegador já usa para exibir PDFs. Nenhuma cópia é transmitida. Você pode verificar com a guia Rede das ferramentas do desenvolvedor aberta.',
    },
    {
      q: 'Qual resolução devo escolher?',
      a:
        'Use 72 DPI quando a imagem for visualizada apenas na tela — é pequena e rápida. Use 150 DPI para documentos compartilhados por email. Use 300 DPI quando a imagem for impressa, pois essa é a resolução de impressão padrão.',
    },
    {
      q: 'A conversão para JPG reduzirá a qualidade?',
      a:
        'JPG é um formato com perdas, então parte da qualidade é trocada pelo tamanho do arquivo – é por isso que o seletor de qualidade está lá. A conversão em um DPI mais alto preserva mais detalhes do que um DPI mais baixo e o texto permanece legível em 150 DPI ou superior.',
    },
    {
      q: 'Posso converter apenas algumas páginas?',
      a:
        'Esta versão converte todas as páginas, que é o que a maioria das pessoas precisa, e mantém a saída em um arquivo previsível. Se você precisar apenas de algumas páginas, primeiro corte o documento e depois converta-o.',
    },
  ],
};

export default ptBr;