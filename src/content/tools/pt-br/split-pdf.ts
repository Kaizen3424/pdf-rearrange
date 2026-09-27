import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Dividir PDF online grátis — Separe páginas ou arquivos',
    description:
      'Divida um PDF em arquivos separados por intervalo de páginas, ou extraia cada página individualmente. Grátis, privado, sem envios e sem cadastro.',
  },
  breadcrumb: 'Dividir PDF',
  h1: 'Divida um PDF em documentos separados',
  intro:
    'Quebre um PDF em tantos arquivos quanto precisar. Escolha um intervalo de páginas e receba um documento, ou separe cada página em um arquivo próprio de uma só vez. Nada é enviado, e as páginas da saída são cópias byte por byte dos originais.',
  benefits: [
    {
      title: 'Por intervalo ou o documento inteiro',
      text: 'Digite "1-5, 12, 20-30" para extrair exatamente as páginas que precisa em um único arquivo, ou separe cada página em um documento individual. Os dois modos funcionam na mesma aba.',
    },
    {
      title: 'Veja as páginas antes',
      text: 'Cada página é renderizada como miniatura antes de você escolher, então não fica no chute dos números. Folheie a pré-visualização em tamanho real para conferir se os limites estão certos.',
    },
    {
      title: 'Sem envios, sem limites',
      text: 'A divisão acontece no seu próprio dispositivo, então não existe teto de tamanho de arquivo nem fila de espera. Feche a aba quando terminar e o arquivo some da memória — o servidor nunca teve uma cópia para guardar.',
    },
  ],
  howTo: {
    heading: 'Como dividir um PDF',
    sub: 'Escolha as páginas e baixe. É o trabalho inteiro.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text: 'Solte o arquivo na ferramenta acima, clique para procurar ou cole com Ctrl+V. A contagem de páginas e as miniaturas aparecem na hora.',
      },
      {
        title: 'Escolha o que separar',
        text: 'Digite intervalos de páginas usando vírgulas e hifens, por exemplo 1-4, 9, 15-20, ou troque para "todas as páginas" para gerar um arquivo por página. Os intervalos são validados enquanto você digita, então um erro de digitação não descarta páginas em silêncio.',
      },
      {
        title: 'Baixe seus arquivos',
        text: 'Cada documento gerado é reconstruído no seu dispositivo e baixado. Dividir nunca recomprime nada, então a qualidade fica idêntica à do original.',
      },
    ],
  },
  faq: [
    {
      q: 'Como dividir um PDF em arquivos separados?',
      a: 'Adicione o PDF acima, escolha um intervalo como 1-5 ou a opção "todas as páginas" e clique no botão de dividir. Cada documento de saída é gerado no seu dispositivo e salvo individualmente, então você recebe um arquivo por intervalo ou por página.',
    },
    {
      q: 'Como dividir por intervalo de páginas?',
      a: 'Digite os intervalos com vírgulas e hifens — por exemplo 1-4, 9, 15-20 — e cada um vira um PDF separado na ordem em que você digitar. Um único intervalo como 1-4 gera um só arquivo de saída; separe com vírgulas quando quiser vários arquivos de uma vez.',
    },
    {
      q: 'Posso dividir um PDF grande?',
      a: 'Pode, e não existe limite artificial de tamanho porque nada é enviado. Documentos muito grandes ou de alta resolução usam mais memória do dispositivo enquanto são processados: algumas centenas de páginas passam tranquilo, mas uma digitalização de mil páginas pode demorar em um celular mais antigo.',
    },
    {
      q: 'Dividir reduz a qualidade do PDF?',
      a: 'Não. As páginas são copiadas byte por byte do arquivo original em vez de serem redesenhadas, então a saída tem exatamente a qualidade da fonte — o texto continua selecionável e os gráficos vetoriais continuam nítidos.',
    },
  ],
};

export default ptBr;
