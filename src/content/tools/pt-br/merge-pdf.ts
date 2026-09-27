import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Juntar PDF online grátis — Una arquivos sem enviar',
    description:
      'Junte vários PDFs em um só documento, na ordem que quiser. 100% privado: seus arquivos nunca saem do navegador. Sem cadastro, sem marca d’água e sem limites.',
  },
  breadcrumb: 'Juntar PDF',
  h1: 'Junte vários arquivos PDF em um só documento',
  intro:
    'Junte quantos PDFs quiser em um único arquivo, exatamente na ordem que você precisa. Solte todos de uma vez ou adicione mais enquanto edita, arraste as páginas para o lugar certo e baixe um documento arrumado — sem enviar nada para servidor nenhum.',
  benefits: [
    {
      title: 'Junte na ordem que você quer',
      text: 'Adicione todos os arquivos primeiro e depois arraste as páginas para a sequência desejada. Intercale capítulos de documentos diferentes, coloque uma folha de rosto no topo ou deixe um apêndice no final. A ordem é inteiramente sua.',
    },
    {
      title: 'Sem perdas, byte por byte',
      text: 'Cada página é copiada direto do arquivo original em vez de ser redesenhada, então fontes, gráficos vetoriais, imagens e links saem exatamente como entraram.',
    },
    {
      title: 'Nunca enviado',
      text: 'A junção acontece dentro da aba do seu navegador. Seus documentos não são transmitidos, então contratos, notas fiscais e prontuários médicos ficam no seu dispositivo.',
    },
  ],
  howTo: {
    heading: 'Como juntar arquivos PDF',
    sub: 'Três passos, e tudo acontece no seu próprio dispositivo.',
    steps: [
      {
        title: 'Adicione seus PDFs',
        text: 'Arraste um ou vários arquivos PDF para a ferramenta acima, ou clique para procurar no computador. Também dá para colar um arquivo com Ctrl+V. Todas as páginas de todos os arquivos caem numa grade única, identificadas por cor conforme a origem.',
      },
      {
        title: 'Defina a ordem',
        text: 'Arraste as miniaturas até a sequência que quiser. Páginas de arquivos diferentes se misturam livremente, então dá para juntar o capítulo 1 de um documento com o capítulo 2 de outro.',
      },
      {
        title: 'Baixe o resultado',
        text: 'Clique em Baixar PDF. O documento combinado é reconstruído no seu dispositivo e salvo direto na pasta de downloads, sem marca d’água e sem fila de espera.',
      },
    ],
  },
  faq: [
    {
      q: 'Como juntar arquivos PDF de graça?',
      a: 'Abra a ferramenta acima, adicione dois ou mais PDFs e arraste as miniaturas para a ordem desejada antes de clicar em Baixar PDF. Não há cadastro, marca d’água nem limite diário — a ferramenta é gratuita porque quem faz o trabalho é o seu próprio dispositivo, e não um servidor pago.',
    },
    {
      q: 'Posso juntar PDFs sem enviá-los?',
      a: 'Sim, e é o único jeito que esta ferramenta funciona. Seus arquivos são lidos, combinados e gravados de volta inteiramente dentro do seu navegador, então nenhuma cópia do seu documento chega a um servidor. Dá para conferir: abra as ferramentas de desenvolvedor do navegador, observe a aba Rede e junte alguns arquivos. Nada é transmitido.',
    },
    {
      q: 'Existe limite de quantos PDFs posso juntar?',
      a: 'Não. Não há teto de arquivos nem de páginas, porque nada é enviado e não existe servidor medindo seu uso. O único teto real é a memória do aparelho — um documento muito grande usa mais RAM enquanto é montado.',
    },
    {
      q: 'Juntar reduz a qualidade do meu PDF?',
      a: 'Não. As páginas são copiadas byte por byte dos originais em vez de redesenhadas ou recomprimidas, então o texto continua nítido, os gráficos vetoriais continuam vetoriais e fontes e links são preservados exatamente.',
    },
  ],
};

export default ptBr;
