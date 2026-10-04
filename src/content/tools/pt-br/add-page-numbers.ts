import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Adicionar números de página a um PDF online – grátis',
    description:
      'Adicione números de página às páginas PDF gratuitamente. Escolha o formato, posição e número inicial – aplicado no seu dispositivo, sem uploads, sem inscrição',
  },
  breadcrumb: 'Adicionar números de página',
  h1: 'Adicione números de página ao seu PDF',
  intro:
    'Numerar um documento manualmente é tedioso e fácil de errar quando as páginas são movidas. Adicione os números uma vez e eles permanecerão corretos: defina um formato como “Página 3 de 12”, escolha para onde vai e faça o download.',
  benefits: [
    {
      title: 'Um formato que você controla',
      text:
        'Use {n} para a página atual e {total} para a contagem de páginas, então "Página {n} de {total}", "{n} / {total}" ou apenas "{n}" funcionam. Os números são texto, não uma sobreposição de imagem.',
    },
    {
      title: 'Número de qualquer ponto de partida',
      text:
        'Se a página 1 for uma capa e o corpo deve começar em 1 na segunda folha, defina o número inicial e ele se alinha. Útil ao combinar capítulos em um documento.',
    },
    {
      title: 'Posições que são lidas corretamente',
      text:
        'Centro inferior para um relatório formal, canto inferior direito para um manual, canto superior esquerdo se corresponder ao seu modelo existente. Seis âncoras, além de um tamanho que você pode combinar com o documento.',
    },
  ],
  howTo: {
    heading: 'Como adicionar números de página a um PDF',
    sub: 'Três etapas, no seu próprio dispositivo.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text:
          'Solte o documento na ferramenta acima ou clique para navegar. A contagem de páginas aparece para que você saiba o intervalo que está numerando.',
      },
      {
        title: 'Escolha o formato e a posição',
        text:
          'Defina o formato dos números, onde os números ficam, seu tamanho e em qual página começar a contar. Um exemplo ao vivo é mostrado no campo de formato.',
      },
      {
        title: 'Baixe o numerado PDF',
        text:
          'Clique em Adicionar números de página e a cópia numerada será salva em seus downloads. Seu arquivo original permanece inalterado.',
      },
    ],
  },
  faq: [
    {
      q: 'Como adiciono números de página a um PDF?',
      a:
        'Adicione PDF acima, escolha um formato e posição e clique em Adicionar números de página. Cada página é numerada e a cópia é baixada.',
    },
    {
      q: 'Posso começar a numerar a partir de um número diferente de 1?',
      a:
        'Sim. Defina o número inicial e a primeira página que você enviar receberá esse valor. É a maneira simples de numerar vários documentos como uma sequência contínua.',
    },
    {
      q: 'Os números das páginas serão texto selecionável?',
      a:
        'Sim. Eles são incorporados como texto real, para que possam ser selecionados e pesquisados, e não ficam desfocados quando impressos.',
    },
    {
      q: 'Posso numerar apenas algumas páginas?',
      a:
        'Esta versão numera todas as páginas. Para numerar seletivamente, divida primeiro o documento e aplique a numeração às partes que precisam dela.',
    },
    {
      q: 'Meu PDF foi carregado?',
      a:
        'Não. A numeração acontece inteiramente dentro da aba do seu navegador. Nada é transmitido, portanto um relatório não publicado permanece inédito.',
    },
  ],
};

export default ptBr;