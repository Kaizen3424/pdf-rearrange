import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Inserir páginas em PDF online grátis — Adicione páginas',
    description:
      'Insira páginas em um PDF online e grátis. Adicione uma folha em branco, traga páginas de outro arquivo ou coloque no lugar certo — sem envios e sem cadastro.',
  },
  breadcrumb: 'Inserir páginas em PDF',
  h1: 'Insira páginas em um PDF',
  intro:
    'Acrescente páginas a um documento que já existe sem precisar reconstruí-lo. Jogue uma folha em branco, traga páginas de outro PDF, arraste tudo para a posição certa e baixe um arquivo único combinado, que nunca passou por servidor nenhum.',
  benefits: [
    {
      title: 'Página em branco ou página de um arquivo',
      text: 'Insira uma folha vazia para anotações, uma folha de rosto ou um separador de impressão. Ou traga páginas inteiras de um segundo documento. As duas opções estão a um clique na barra de ferramentas.',
    },
    {
      title: 'Coloque exatamente onde devem ficar',
      text: 'As páginas novas entram na grade como qualquer outra, então basta arrastá-las para o lugar e as páginas ao redor abrem espaço sozinhas. Sem precisar reordenar o documento inteiro à mão.',
    },
    {
      title: 'Substitua uma página de uma vez',
      text: 'Exclua a página desatualizada e arraste a substituta para o buraco deixado. Como as páginas são copiadas em vez de redesenhadas, a nova mantém exatamente a formatação original.',
    },
  ],
  howTo: {
    heading: 'Como inserir páginas em um PDF',
    sub: 'Adicione e posicione páginas novas em três passos.',
    steps: [
      {
        title: 'Adicione seu documento',
        text: 'Solte seu PDF na ferramenta acima, clique para procurar ou cole com Ctrl+V. As páginas carregam em uma grade de miniaturas.',
      },
      {
        title: 'Insira as páginas novas',
        text: 'Clique no botão "+" da barra de ferramentas para anexar uma página em branco, ou use Adicionar PDFs para trazer páginas de outro documento. Cada página nova aparece na grade, identificada por cor conforme a origem.',
      },
      {
        title: 'Posicione e baixe',
        text: 'Arraste as páginas novas para o lugar certo e clique em Baixar PDF. O documento combinado é reconstruído no seu dispositivo e salvo, e seu arquivo original continua intacto.',
      },
    ],
  },
  faq: [
    {
      q: 'Como inserir uma página em branco em um PDF?',
      a: 'Adicione o PDF na ferramenta acima e clique no botão "+" da barra de ferramentas. Uma folha A4 em branco entra no fim da grade; arraste para onde quiser e as páginas ao redor abrem espaço. Baixe para salvar a alteração.',
    },
    {
      q: 'Como adicionar páginas de outro PDF?',
      a: 'Use o botão Adicionar PDFs na barra de ferramentas para escolher um segundo arquivo. Todas as páginas dele entram na mesma grade, marcadas com uma cor própria para você saber de qual documento vieram. Arraste para o lugar e baixe um único PDF combinado.',
    },
    {
      q: 'Como substituir uma página em um PDF?',
      a: 'Exclua a página que você está trocando, adicione o PDF que contém a página nova e arraste para a vaga que ficou. Como cada página é copiada byte por byte em vez de redesenhada, a substituta mantém exatamente as fontes, imagens e o layout de origem.',
    },
    {
      q: 'Posso inserir páginas sem enviar meu documento?',
      a: 'Sim — a inserção acontece inteiramente no seu navegador, então seu arquivo nunca é transmitido. Abra a aba Rede nas ferramentas de desenvolvedor enquanto trabalha e você não verá nenhuma requisição de arquivo.',
    },
  ],
};

export default ptBr;
