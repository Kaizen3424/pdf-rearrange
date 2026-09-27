import type { ToolContent } from '../types';

const ptBr: ToolContent = {
  meta: {
    title: 'Girar PDF online grátis — Vire páginas 90°, 180° ou 270°',
    description:
      'Gire páginas de PDF online e grátis. Corrija digitalizações de lado, uma a uma ou em lote — privado, sem envios, sem cadastro e sem perda de qualidade.',
  },
  breadcrumb: 'Girar PDF',
  h1: 'Gire páginas de PDF',
  intro:
    'Coloque na vertical um documento deitado ou virado do avesso. Gire uma página só ou aplique a mesma rotação a dezenas de uma vez, confira o resultado pelo caminho e baixe o arquivo corrigido, sem enviar nada.',
  benefits: [
    {
      title: 'Uma página ou um lote inteiro',
      text: 'Gire páginas individuais com o botão de cada miniatura, ou selecione várias e vire todas de uma vez. Corrigir uma digitalização deitada de 200 páginas custa um clique por direção, não 200.',
    },
    {
      title: 'O ângulo exato que você precisa',
      text: 'Gire em passos de 90° — à esquerda, à direita ou totalmente do avesso — e combine direções quando cada página precisa de um ajuste diferente. Nada é redesenhado, então o resultado é idêntico ao original, a não ser pela orientação.',
    },
    {
      title: 'Reversível por design',
      text: 'A rotação entra no histórico de desfazer, então um clique errado se desfaz com um Ctrl+Z. Gire para lá e para cá à vontade; a página só muda de verdade quando você baixa.',
    },
  ],
  howTo: {
    heading: 'Como girar um PDF',
    sub: 'Corrija um documento inteiro em três passos.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text: 'Solte o arquivo na ferramenta acima, clique para procurar ou cole com Ctrl+V. As miniaturas carregam para você ver na hora quais páginas estão deitadas.',
      },
      {
        title: 'Gire as páginas',
        text: 'Clique no botão girar de uma miniatura para girar aquela página 90° no sentido horário, ou selecione várias e use a barra de ferramentas para girar todas juntas. Repita até todas ficarem na vertical.',
      },
      {
        title: 'Baixe o PDF corrigido',
        text: 'Clique em Baixar PDF. O documento corrigido é reconstruído no seu dispositivo com o mesmo texto, as mesmas imagens e a mesma formatação — só a orientação da página mudou.',
      },
    ],
  },
  faq: [
    {
      q: 'Como girar páginas em um PDF?',
      a: 'Adicione o PDF acima e clique no botão girar de qualquer miniatura para girá-la 90° no sentido horário. Clique de novo para mais 90°, ou selecione várias páginas e use o controle de rotação da barra de ferramentas para virá-las de uma vez. Baixe quando o documento inteiro estiver no lugar.',
    },
    {
      q: 'Por que meu PDF digitalizado está deitado?',
      a: 'Scanners de mesa e câmeras de celular capturam a orientação em que a página foi colocada, e PDFs não têm metadados de orientação confiáveis. É por isso que uma digitalização deitada pode ficar certa na sua máquina e torta na de outra pessoa. Girar as páginas aqui corrige o próprio arquivo, então ele aparece bem em qualquer lugar.',
    },
    {
      q: 'Posso girar um PDF sem enviá-lo?',
      a: 'Sim — a rotação é aplicada inteiramente no seu navegador. Seu arquivo nunca é transmitido a um servidor, e você pode confirmar isso observando a aba Rede nas ferramentas de desenvolvedor enquanto trabalha.',
    },
    {
      q: 'Girar um PDF baixa a qualidade?',
      a: 'Não. A rotação muda apenas como a página é exibida, não o conteúdo que está embaixo. O texto continua selecionável, os links continuam funcionando e as imagens não são recomprimidas, então o arquivo girado fica tão nítido quanto o original.',
    },
  ],
};

export default ptBr;
