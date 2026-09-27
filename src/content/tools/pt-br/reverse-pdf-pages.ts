import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Inverter páginas de PDF online grátis — Ordem correta',
    description:
      'Inverta a ordem das páginas de um PDF online grátis: um clique conserta digitalizações de trás para frente. Sem envios, sem cadastro e sem perda de qualidade.',
  },
  breadcrumb: 'Inverter páginas de PDF',
  h1: 'Inverta a ordem das páginas de um PDF',
  intro:
    'Conserte um documento inteiro que saiu ao contrário. Um clique vira uma digitalização de trás para frente, então a página 1 fica na frente e a última fica no fim, sem arrastar nada e sem o arquivo sair do navegador.',
  benefits: [
    {
      title: 'Um clique, documento inteiro',
      text: 'Inverter tudo custa um único clique, em vez de arrastar cem miniaturas umas por outras. Ideal para digitalizações frente e verso que saíram de trás para frente, ou para um livreto montado na sequência errada.',
    },
    {
      title: 'Confira antes de confirmar',
      text: 'As miniaturas se reordenam na hora, então dá para validar a sequência antes de baixar. Se não for isso, mais um clique desfaz: inverter é só mais um passo que pode ser desfeito.',
    },
    {
      title: 'Qualidade inalterada',
      text: 'Só a sequência das páginas muda. Cada página é copiada exatamente como estava, então texto, imagens, gráficos vetoriais e links ficam idênticos ao arquivo original.',
    },
  ],
  howTo: {
    heading: 'Como inverter páginas de PDF',
    sub: 'Três passos para consertar um documento invertido.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text: 'Solte o arquivo na ferramenta acima, clique para procurar ou cole com Ctrl+V. As páginas aparecem como miniaturas na ordem atual, que é a ordem errada.',
      },
      {
        title: 'Inverta a ordem',
        text: 'Clique no botão inverter da barra de ferramentas. Toda página troca de posição na hora: a última vira a primeira, a primeira vira a última e o miolo se espelha junto.',
      },
      {
        title: 'Baixe o PDF corrigido',
        text: 'Confira a nova sequência na grade e clique em Baixar PDF. O documento reordenado é reconstruído no seu dispositivo e salvo imediatamente.',
      },
    ],
  },
  faq: [
    {
      q: 'Como inverter a ordem das páginas de um PDF?',
      a: 'Adicione o PDF na ferramenta acima e clique no botão inverter da barra de ferramentas. O documento inteiro vira em um passo: última página primeiro, primeira por último. Baixe o resultado e o arquivo fica salvo na ordem corrigida.',
    },
    {
      q: 'Por que meu PDF digitalizado saiu de trás para frente?',
      a: 'Os alimentadores automáticos de scanners e copiadoras empilham as folhas com a face para cima, então o scanner acaba lendo da última para a primeira. O resultado parece bom na miniatura do app de escaneamento, mas sai impresso invertido. Inverter a ordem das páginas é a correção padrão e aqui leva um clique.',
    },
    {
      q: 'Posso inverter páginas de PDF sem enviar o arquivo?',
      a: 'Sim. A reordenação acontece inteiramente dentro da aba do seu navegador, então nenhuma cópia do seu documento é enviada para lugar algum. Observe a aba Rede nas ferramentas de desenvolvedor enquanto trabalha, se quiser conferir por conta própria.',
    },
    {
      q: 'Preciso arrastar página por página para corrigir uma digitalização invertida?',
      a: 'Não — é exatamente para isso que existe o botão de inverter. Uma digitalização de 300 páginas é corrigida em um clique em vez de 299 arrastadas soltas. Se apenas algumas páginas estão fora do lugar, e não o documento inteiro, arraste só essas miniaturas.',
    },
  ],
};

export default ptBr;
