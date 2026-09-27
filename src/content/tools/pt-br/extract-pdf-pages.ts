import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Extrair páginas de PDF grátis — Fique só com o que precisa',
    description:
      'Extraia páginas de um PDF online e grátis. Marque as que quer manter e baixe um PDF novo só com elas — sem envios, sem cadastro e sem marca d’água.',
  },
  breadcrumb: 'Extrair páginas de PDF',
  h1: 'Extraia páginas de um PDF',
  intro:
    'Fique só com as páginas que importam e saia com um documento novo e limpo. Marque o que quer, ou um intervalo inteiro, e a ferramenta monta um PDF com exatamente essas páginas, na ordem que você escolher, sem enviar seu arquivo para lugar nenhum.',
  benefits: [
    {
      title: 'Marque, não digite',
      text: 'Selecione as páginas direto nas miniaturas em vez de digitar números de página e torcer para acertar o intervalo. Use Shift+clique para pegar um bloco inteiro, ou Ctrl+A para recomeçar.',
    },
    {
      title: 'Reordene enquanto extrai',
      text: 'As páginas selecionadas podem ser arrastadas para outra ordem antes de exportar, então dá para tirar três páginas de um relatório e arquivá-las na sequência que você realmente quer.',
    },
    {
      title: 'Cópias byte por byte',
      text: 'As páginas extraídas são copiadas direto do arquivo de origem, não redesenhadas. Fontes, gráficos vetoriais, imagens e links são preservados exatamente, sem nenhuma recompressão.',
    },
  ],
  howTo: {
    heading: 'Como extrair páginas de um PDF',
    sub: 'Selecione as páginas e baixe o documento novo.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text: 'Solte o arquivo na ferramenta acima, clique para procurar ou cole com Ctrl+V. Todas as páginas aparecem como miniaturas com seus números.',
      },
      {
        title: 'Selecione as páginas que quer manter',
        text: 'Clique em cada página que deseja extrair. Clique na primeira e use Shift+clique na última para pegar um intervalo inteiro, ou use Ctrl+A para selecionar todas e depois desmarcar o que não precisa.',
      },
      {
        title: 'Baixe o PDF extraído',
        text: 'O documento novo é montado no seu dispositivo apenas com as páginas que você marcou e depois baixado. O arquivo original nunca é modificado.',
      },
    ],
  },
  faq: [
    {
      q: 'Como extrair páginas específicas de um PDF?',
      a: 'Adicione o PDF acima e clique nas páginas que quer manter na grade de miniaturas. Clique na primeira e use Shift+clique na última para selecionar um intervalo, ou vá marcando uma a uma. Clique em Baixar PDF e você recebe um documento novo só com essas páginas, na ordem em que aparecem.',
    },
    {
      q: 'Qual a diferença entre extrair e excluir páginas?',
      a: 'O tamanho do documento final é o mesmo nos dois casos. Extrair monta um PDF novo a partir das páginas que você mantém e deixa o arquivo original intacto no seu computador. Excluir remove as páginas dentro do editor, e o resultado sobrescreve o arquivo quando você baixa. Use extrair quando quiser preservar o original; use excluir quando já estiver trabalhando numa cópia.',
    },
    {
      q: 'Posso extrair páginas sem enviar o PDF?',
      a: 'Sim. O documento é lido e reconstruído inteiramente dentro do seu navegador, então nenhuma cópia é transmitida. Você pode observar a aba Rede nas ferramentas de desenvolvedor enquanto trabalha e ver que nada é enviado.',
    },
    {
      q: 'Posso reordenar as páginas que extraio?',
      a: 'Sim. Depois de selecionadas, as páginas podem ser arrastadas para qualquer sequência antes de você baixar o arquivo. Assim você tira algumas páginas de um relatório longo e as arquiva na ordem que faz sentido para você, e não na ordem em que apareceram.',
    },
  ],
};

export default ptBr;
