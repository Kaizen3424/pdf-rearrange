import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Inserir página em branco em PDF grátis — Folhas vazias',
    description:
      'Insira páginas em branco em um PDF online e grátis. Adicione folhas A4 ou Letter vazias para anotações, separadores e espaçamento — sem envios e sem cadastro.',
  },
  breadcrumb: 'Inserir página em branco',
  h1: 'Insira uma página em branco em um PDF',
  intro:
    'Adicione uma folha vazia exatamente onde precisa. Serve para anotar, para separar capítulos ou para criar o espaço em branco que faz um documento imprimir nos dois lados da folha. A página em branco leva um clique e nunca sai do navegador.',
  benefits: [
    {
      title: 'Qualquer posição, não só o final',
      text: 'As páginas em branco novas entram na grade como páginas comuns, então arraste para onde precisar. Coloque uma entre capítulos, na frente como folha de rosto ou no fim como folha de anotações.',
    },
    {
      title: 'Conserte a impressão frente e verso',
      text: 'Quando um documento sai em branco no verso, adicionar uma folha vazia é a correção padrão: ela equilibra a contagem de páginas para que toda folha tenha conteúdo dos dois lados.',
    },
    {
      title: 'Sem limite e reversível',
      text: 'Adicione quantas folhas em branco precisar e remova com a mesma velocidade. Cada inserção é um único passo de desfazer, então experimentar não custa nada.',
    },
  ],
  howTo: {
    heading: 'Como inserir uma página em branco em um PDF',
    sub: 'Adicione uma folha vazia em três passos.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text: 'Solte o arquivo na ferramenta acima, clique para procurar ou cole com Ctrl+V. As páginas carregam em uma grade de miniaturas.',
      },
      {
        title: 'Adicione a página em branco',
        text: 'Clique no botão "+" da barra de ferramentas. Uma folha A4 vazia é anexada ao fim da grade, pronta para ser arrastada até a posição certa.',
      },
      {
        title: 'Posicione e baixe',
        text: 'Arraste a página em branco para onde quiser e clique em Baixar PDF. O documento com a nova folha vazia é reconstruído no seu dispositivo e salvo.',
      },
    ],
  },
  faq: [
    {
      q: 'Como adicionar uma página em branco a um PDF?',
      a: 'Adicione o PDF na ferramenta acima e clique no botão "+" da barra de ferramentas. Uma folha A4 em branco entra no fim; arraste para o lugar desejado e clique em Baixar PDF para salvar o documento com a nova folha vazia.',
    },
    {
      q: 'Por que eu precisaria de uma página em branco?',
      a: 'O motivo mais comum é a impressão frente e verso: se um documento termina em uma página ímpar, a folha seguinte sai em branco de um lado, então adicionar uma página vazia no final faz toda folha imprimir dos dois lados. Muita gente também usa páginas em branco como separador de capítulos, folha de rosto e espaço para anotações à mão.',
    },
    {
      q: 'Posso inserir uma página em branco sem enviar meu PDF?',
      a: 'Sim. A página é adicionada e o documento reconstruído inteiramente dentro do seu navegador, então nada é transmitido. Observe a aba Rede nas ferramentas de desenvolvedor enquanto trabalha para conferir por conta própria.',
    },
    {
      q: 'Dá para mudar o tamanho da página em branco?',
      a: 'As páginas em branco são adicionadas no tamanho A4. Se você precisa de outro tamanho de papel, gire a página para mudar a orientação ou ajuste o tamanho da própria página depois de inseri-la.',
    },
  ],
};

export default ptBr;
