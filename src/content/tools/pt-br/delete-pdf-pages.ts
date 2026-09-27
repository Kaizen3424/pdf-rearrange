import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Excluir páginas de PDF online grátis — Remova páginas',
    description:
      'Exclua páginas de um PDF online e grátis. Selecione o que quer tirar e baixe o resto — seus arquivos nunca são enviados, sem cadastro e sem perda de qualidade.',
  },
  breadcrumb: 'Excluir páginas de PDF',
  h1: 'Exclua páginas de um PDF',
  intro:
    'Tire as páginas que você não precisa e mantenha todo o resto exatamente como estava. Selecione páginas soltas ou exclua um intervalo inteiro de uma vez, veja o resultado em miniaturas antes de confirmar e baixe o documento aparado — sem o arquivo sair do navegador.',
  benefits: [
    {
      title: 'Exclua uma página ou cinquenta',
      text: 'Passe o mouse sobre uma miniatura para excluir só ela, ou selecione várias e remova em lote. Ctrl+A seleciona tudo, então reduzir um documento às poucas páginas que realmente importam leva segundos.',
    },
    {
      title: 'Nada se perde',
      text: 'As exclusões entram no histórico de desfazer, então um corte exagerado nunca é definitivo. Aperte Ctrl+Z para trazer as páginas de volta, ou restaure o documento inteiro à ordem original com um clique.',
    },
    {
      title: 'Qualidade inalterada',
      text: 'As páginas que sobram são copiadas exatamente como estavam — fontes, imagens, vetores e links não são redesenhados nem recomprimidos, então excluir uma página não custa nada em fidelidade.',
    },
  ],
  howTo: {
    heading: 'Como excluir páginas de um PDF',
    sub: 'Remova o que não quer em três passos.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text: 'Solte o arquivo na ferramenta acima, clique para procurar ou cole com Ctrl+V. Cada página aparece como miniatura, visível de relance.',
      },
      {
        title: 'Selecione o que remover',
        text: 'Clique no ícone de lixeira da miniatura para excluir só aquela página. Para remover várias de uma vez, clique na primeira página e depois use Shift+clique na última para selecionar o intervalo inteiro e excluí-lo em lote.',
      },
      {
        title: 'Baixe o PDF aparado',
        text: 'Confira a ordem que restou e clique em Baixar PDF. O documento encurtado é reconstruído no seu dispositivo e salvo imediatamente.',
      },
    ],
  },
  faq: [
    {
      q: 'Como excluir páginas de um PDF?',
      a: 'Adicione o PDF na ferramenta acima, passe o mouse sobre qualquer miniatura e clique no botão de excluir. Para remover um intervalo, clique na primeira página, use Shift+clique na última e depois pressione Delete ou use o botão de exclusão em lote. Baixe o resultado e você terá um PDF sem essas páginas.',
    },
    {
      q: 'Posso excluir páginas de PDF sem enviar o arquivo?',
      a: 'Sim. O documento é lido e reescrito inteiramente dentro do seu navegador, então nunca vai para um servidor. Abra as ferramentas de desenvolvedor, observe a aba Rede enquanto você exclui e verá zero tráfego de arquivos.',
    },
    {
      q: 'Dá para desfazer uma exclusão de página?',
      a: 'Toda ação fica registrada. Pressione Ctrl+Z (Cmd+Z no Mac) para trazer as páginas excluídas de volta, Ctrl+Shift+Z para refazer, ou use o botão de desfazer na barra de ferramentas. O botão Restaurar devolve o documento inteiro à ordem original de páginas.',
    },
    {
      q: 'E se eu excluir páginas demais?',
      a: 'Não se preocupe — as exclusões podem ser desfeitas, então nada é definitivo até você baixar. Se você já chegou a exportar, guarde o arquivo original e faça as exclusões numa cópia dele.',
    },
  ],
};

export default ptBr;
