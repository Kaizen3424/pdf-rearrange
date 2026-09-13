import type { SiteDictionary } from './en';

const ptBr = {
  skipToContent: 'Pular para o conteúdo',
  siteName: 'Rearrange PDF',
  ogImageAlt:
    'Rearrange PDF — ferramenta gratuita online para reorganizar, mesclar e excluir páginas de PDF no seu navegador.',
  breadcrumbAriaLabel: 'Breadcrumb',
  breadcrumbHome: 'Início',

  langSwitcher: {
    ariaLabel: 'Alterar idioma',
  },

  theme: {
    ariaLabel: 'Tema de cor',
    light: 'Claro',
    dark: 'Escuro',
    system: 'Sistema',
  },

  nav: {
    ariaLabel: 'Navegação principal',
    howItWorks: 'Como funciona',
    features: 'Recursos',
    privacy: 'Privacidade',
    faq: 'Perguntas frequentes',
    cta: 'Reorganizar um PDF',
    toggleMenu: 'Abrir menu',
  },

  footer: {
    tagline:
      'A forma que prioriza sua privacidade para reorganizar, girar e organizar páginas de PDF. Tudo acontece no seu navegador — seus arquivos nunca são enviados.',
    colTool: 'Ferramenta',
    colCompany: 'Empresa',
    colLegal: 'Legal',
    colLanguage: 'Idioma',
    rearrangePages: 'Reorganizar páginas de PDF',
    howItWorks: 'Como funciona',
    guide: 'Guia para organizar PDF',
    faq: 'Perguntas frequentes',
    about: 'Sobre',
    contact: 'Contato',
    privacyPolicy: 'Política de privacidade',
    termsOfService: 'Termos de serviço',
    copyright: (year: number) => `© ${year} rearrangepdf.com. Todos os direitos reservados.`,
    noAds: 'Sem anúncios. Sem rastreadores. Sem envios.',
  },

  hero: {
    chip: '100% privado — arquivos nunca saem do seu navegador',
    h1: 'Reorganize páginas de PDF, direto no seu navegador.',
    sub: 'Arraste e solte para reordenar páginas, girar, duplicar ou excluí-las — e baixe instantaneamente. Gratuito, ilimitado e completamente privado.',
    bullets: ['Sem cadastro', 'Sem limites de páginas', 'Sem marca d’água', 'Sem limites de tamanho'],
  },

  howItWorks: {
    heading: 'Como reorganizar páginas de PDF',
    sub: 'Três passos, zero envios. Seu arquivo é processado localmente do início ao fim.',
    steps: [
      {
        title: 'Adicione seu PDF',
        text: 'Solte um arquivo em qualquer lugar da página, clique para procurar ou cole um. Adicione mais PDFs a qualquer momento — eles são mesclados em um único documento.',
      },
      {
        title: 'Organize suas páginas',
        text: 'Arraste as miniaturas para qualquer ordem. Gire, duplique, exclua ou selecione várias páginas de uma vez — com desfazer completo caso mude de ideia.',
      },
      {
        title: 'Baixe instantaneamente',
        text: 'Seu PDF é reconstruído diretamente no seu dispositivo e baixado em segundos. Sem marca d’água, sem cadastro, sem fila de espera.',
      },
    ],
  },

  features: {
    heading: 'Tudo o que você precisa para organizar um PDF',
    sub: 'As ferramentas de reorganização de páginas que as pessoas já adoram — sem os envios, limites, anúncios ou cadastros que elas reclamam.',
    items: [
      {
        title: 'Privacidade por design',
        text: 'Seu PDF é processado inteiramente no seu navegador. Sem envios, sem servidores, sem rastreamento — abra a aba de rede do seu navegador e verifique você mesmo.',
      },
      {
        title: 'Sem limites, nunca',
        text: 'Sem teto de páginas, sem limite de tamanho de arquivo, sem cotas diárias. Reordene 10 ou 1.000 páginas — o processamento local significa que não há nada para limitar.',
      },
      {
        title: 'Resultados instantâneos',
        text: 'Não há ida e volta de envio e espera. As páginas são renderizadas e seu novo PDF é criado no seu dispositivo, então até arquivos grandes parecem imediatos.',
      },
      {
        title: 'Desfaça qualquer coisa',
        text: 'Histórico completo com desfazer e refazer (Ctrl+Z / Ctrl+Shift+Z), seleção múltipla e atalhos de teclado. Experimente livremente — nada é permanente até você baixar.',
      },
      {
        title: 'Feito para mobile também',
        text: 'Áreas de toque grandes, toque longo para arrastar e uma barra de ações amigável para o polegar. Reorganizar páginas em um celular não precisa ser um martírio.',
      },
      {
        title: 'Qualidade original preservada',
        text: 'As páginas são copiadas byte por byte do seu PDF original. Fontes, vetores, imagens e links permanecem exatamente como eram — sem recompressão.',
      },
    ],
  },

  privacySection: {
    h2: 'Seu PDF nunca sai do seu navegador.',
    p1: 'A maioria das ferramentas online de PDF envia seu arquivo para um servidor, processa lá e pede que você confie na política de exclusão deles. Nós invertemos o modelo: a reorganização de páginas acontece <strong>inteiramente no seu dispositivo</strong>, usando o mesmo motor de renderização que seu navegador já tem.',
    p2: 'Nenhum servidor jamais recebe seu documento. Não há nada para vazar, violar ou intimar. Isso o torna seguro para contratos, registros médicos, extratos financeiros e qualquer outra coisa que você não entregaria a um estranho.',
    readPromise: 'Leia nossa promessa de privacidade',
    tryNow: 'Experimente agora',
    bullets: [
      {
        title: 'Zero envios',
        text: 'O conteúdo do seu arquivo nunca é transmitido a lugar nenhum.',
      },
      {
        title: 'Sem contas, sem anúncios, sem rastreadores',
        text: 'Não precisamos do seu email, e não te seguimos pela internet.',
      },
      {
        title: 'Verificável, não apenas uma promessa',
        text: 'Abra DevTools → Rede enquanto trabalha. Você verá zero solicitações de arquivo.',
      },
    ],
  },

  faq: {
    heading: 'Perguntas frequentes',
    sub: 'Tudo o que as pessoas geralmente querem saber antes de reorganizar seu primeiro PDF.',
    items: [
      {
        q: 'Como reorganizar páginas em um PDF?',
        a: 'Abra a ferramenta no topo desta página e adicione seu PDF, depois arraste qualquer miniatura de página para sua nova posição — as páginas ao redor se ajustam automaticamente para abrir espaço. Gire, duplique ou exclua páginas se necessário, e clique em "Baixar PDF" para salvar o arquivo reordenado. O processo inteiro leva menos de um minuto e seu arquivo nunca sai do seu dispositivo.',
      },
      {
        q: 'Como reorganizar páginas em um PDF de graça?',
        a: 'Use uma ferramenta gratuita baseada em navegador como esta: adicione seu PDF, arraste as miniaturas de páginas na ordem desejada e baixe o resultado. Não há cadastro, marca d’água, limite de páginas ou plano premium oculto — a ferramenta permanece gratuita porque todo o processamento acontece no seu próprio dispositivo em vez de em servidores pagos.',
      },
      {
        q: 'Como reorganizar páginas de PDF?',
        a: 'O jeito mais fácil é arrastar e soltar: seu PDF aparece como uma grade de miniaturas de páginas, e você arrasta cada página para onde ela pertence. Como o editor roda inteiramente no seu navegador, não há nada para instalar e nenhum arquivo é enviado a lugar nenhum. Quando a ordem estiver correta, clique em "Baixar PDF" para salvar o novo arquivo.',
      },
      {
        q: 'Como reorganizar páginas em um PDF no iPhone?',
        a: 'Abra esta página no Safari e toque para adicionar seu PDF — do Arquivos, Mail ou qualquer outro app que compartilha PDFs. Pressione e segure uma miniatura de página brevemente para levantá-la, arraste-a para o lugar, depois toque em "Baixar PDF" e salve o resultado de volta em Arquivos ou compartilhe direto. Não precisa instalar app, e o mesmo fluxo funciona no iPad.',
      },
      {
        q: 'Posso reorganizar páginas de PDF no celular?',
        a: 'Sim. O editor é construído com foco em toque: pressione e segure uma miniatura para levantá-la, arraste para uma nova posição e use os botões grandes de girar, duplicar e excluir ao alcance fácil. Funciona no Safari no iOS e no Chrome no Android, e o PDF finalizado salva direto de volta ao seu celular ou tablet.',
      },
      {
        q: 'Como substituir uma página de PDF sem perder a formatação?',
        a: 'Exclua a página que deseja substituir, adicione o PDF que contém a nova página e arraste-a para a posição vazia. Como cada página é copiada byte por byte em vez de re-renderizada, fontes, imagens, vetores, links e metadados são preservados exatamente — nada é recomprimido ou reestilizado.',
      },
      {
        q: 'Como trocar, adicionar, remover e girar páginas de PDF?',
        a: 'Todas as quatro ações ficam na barra de ferramentas. Troque duas páginas arrastando uma miniatura sobre a outra para trocar suas posições. Adicione páginas inserindo páginas em branco ou mesclando outro PDF, remova páginas com a ação de exclusão, e gire páginas em etapas de 90° — individualmente ou em lote com seleção múltipla.',
      },
      {
        q: 'Como organizar arquivos PDF?',
        a: 'Comece combinando os arquivos: adicione todos os PDFs que precisar e eles se mesclam em uma única grade de páginas. Depois organize no nível de página — agrupe páginas relacionadas, mova seções inteiras, exclua o que não precisa mais e insira páginas em branco como separadores. Quando tudo estiver no lugar certo, baixe um PDF organizado.',
      },
      {
        q: 'Como reorganizar páginas de PDF de graça?',
        a: 'Ferramentas PDF gratuitas vêm em dois tipos: editores online que enviam seu arquivo para seus servidores, e ferramentas client-side como esta que processam tudo localmente. O segundo tipo é genuinamente gratuito — sem avaliação, sem marca d’água, sem cota diária — porque seu próprio dispositivo faz o trabalho. Adicione um PDF, reordene as miniaturas e baixe sem custo.',
      },
      {
        q: 'Como posso reorganizar páginas em um documento PDF?',
        a: 'Carregue seu documento no editor, depois arraste as miniaturas para a nova ordem — ou selecione várias páginas de uma vez e mova-as juntas. Cada etapa pode ser desfeita com Ctrl+Z (Cmd+Z no Mac), e você pode restaurar a ordem original com um clique, então experimentar é sem risco. Você só confirma quando baixar.',
      },
      {
        q: 'Meus arquivos são enviados para um servidor?',
        a: 'Não. O Rearrange PDF roda inteiramente no seu navegador usando JavaScript. Seu PDF é lido, exibido e reconstruído no seu próprio dispositivo — nenhum conteúdo de arquivo é transmitido. Você pode verificar isso sozinho: abra as ferramentas de desenvolvedor do seu navegador, observe a aba Rede e reorganize algumas páginas. Nada é enviado.',
      },
      {
        q: 'Posso mesclar e reorganizar vários PDFs de uma vez?',
        a: 'Sim. Adicione tantos PDFs quanto quiser — arraste vários arquivos de uma vez, ou use "Adicionar PDFs" durante a edição — e eles se mesclam em uma grade de páginas, com distintivos mostrando de qual arquivo cada página veio. Você pode então combinar e reorganizar páginas de todos os documentos como quiser antes de baixar um único PDF.',
      },
      {
        q: 'Posso desfazer um erro?',
        a: 'Sim. Cada ação — reordenar, girar, excluir, duplicar — é registrada no histórico. Pressione Ctrl+Z (ou Cmd+Z no Mac) para desfazer, Ctrl+Shift+Z para refazer, ou use os botões de desfazer na barra de ferramentas. Você também pode restaurar a ordem original das páginas com um clique.',
      },
      {
        q: 'E os PDFs protegidos por senha?',
        a: 'PDFs protegidos com senha de proprietário (restrições de edição ou impressão) funcionam normalmente. PDFs que exigem senha para abrir podem ser reorganizados se você inserir a senha, mas exportar arquivos totalmente criptografados localmente ainda não é suportado — você verá um aviso claro se isso se aplicar ao seu arquivo.',
      },
    ],
  },

  seoContent: {
    h2: 'Reorganize páginas de PDF online — gratuito e ilimitado',
    p1: 'Rearrange PDF é uma ferramenta online gratuita criada para uma única função: ajudar você a reorganizar páginas de PDF de forma rápida, privada e sem fricção. Seja para corrigir uma digitalização de trás para frente, mover um apêndice para o final, ou transformar uma exportação caótica em uma ordem lógica, você tem um editor visual completo com miniaturas de páginas em arrastar e soltar — direto no seu navegador. Nada para instalar, nenhuma conta para criar, nenhuma marca d’água na saída. E porque tudo roda localmente no seu dispositivo, você pode reorganizar páginas de PDF online sem os envios, filas e limites diários que a maioria das outras ferramentas impõe.',
    p2: 'O editor se comporta como um pequeno aplicativo desktop. Cada página do seu documento aparece como uma miniatura que você pode agarrar e soltar em uma nova posição, enquanto as páginas restantes se ajustam automaticamente para abrir espaço. Além de reordenar, você pode girar digitalizações de lado, duplicar páginas que se repetem, inserir folhas em branco e selecionar várias páginas de uma vez para ações em lote. Um histórico completo de desfazer significa que você pode experimentar livremente — nada é definitivo até você baixar.',
    h3Merge: 'Mescle e reorganize páginas de PDF em um só lugar',
    pMerge: 'Documentos reais raramente vivem em um único arquivo: o relatório é um PDF, o apêndice outro, a nova capa um terceiro. O Rearrange PDF permite mesclar e reorganizar páginas de PDF sem trocar de aplicativo. Solte quantos arquivos quiser — todos de uma vez, ou adicionando mais no meio da edição — e cada página aparece em uma grade, marcada com um distintivo colorido mostrando de qual documento veio. A partir daí você pode combinar e reorganizar páginas de todas as fontes em um único arquivo contínuo: intercalar capítulos, mover a nova capa para a frente, ou inserir material extra no meio. Um clique produz um PDF mesclado de forma limpa.',
    h3Delete: 'Exclua e reorganize páginas de PDF',
    pDelete: 'Limpeza e organização geralmente andam juntas. Quando você exclui e reorganiza páginas de PDF na mesma passagem, evita exportar duas vezes — e reexportar em outro lugar é exatamente onde a perda de qualidade e as marcas d’água se infiltram. Selecione qualquer página e remova com um clique, ou toque em várias miniaturas e exclua em lote. As páginas excluídas permanecem no seu histórico de desfazer, então um corte excessivo nunca é permanente. Combinado com as ações de duplicar, girar e inserir página em branco, isso torna a ferramenta um editor de páginas leve: remova o que não precisa, organize o que resta, exporte uma vez.',
    h3Steps: 'Como reorganizar páginas de PDF em três passos',
    pSteps: 'Se você está se perguntando como reorganizar páginas de PDF sem ler um manual, o fluxo inteiro é de três movimentos:',
    steps: [
      '<strong>Adicione seu PDF.</strong> Arraste o arquivo sobre a ferramenta no topo desta página, clique para procurar ou cole da área de transferência. Adicione mais arquivos se quiser mesclá-los.',
      '<strong>Arraste as páginas na ordem.</strong> Mova qualquer miniatura para uma nova posição, depois gire, duplique ou exclua páginas até a sequência ficar certa. Seleção múltipla e desfazer mantêm edições grandes rápidas.',
      '<strong>Baixe instantaneamente.</strong> O PDF reconstruído é gerado no seu dispositivo e salvo imediatamente — sem marca d’água, sem email necessário.',
    ],
    pStepsOutro: 'É realmente tudo o que existe — o jeito mais rápido de reorganizar páginas de PDF online sem cadastros e envios. Para um passo a passo mais detalhado, incluindo inverter a ordem das páginas e substituir páginas individuais, veja o <a href="/how-to-organize-pdf-pages">guia completo para organizar páginas de PDF</a>.',
    h3Mobile: 'Reorganize páginas de PDF no iPhone, iPad e Android',
    pMobile: 'Mobile é onde muitas ferramentas PDF online fracassam: botões minúsculos, alvos de arrastar quebrados, pop-ups sufocando a grade de páginas. Este editor é construído com foco em toque, então descobrir como reorganizar páginas de PDF no iPhone ou iPad leva segundos — pressione e segure uma miniatura para levantá-la, arraste onde pertence, solte. Os botões de girar, duplicar e excluir são grandes e ficam ao alcance do polegar, e tocar nas páginas as seleciona para ações em lote. No iOS você pode abrir um PDF do Arquivos ou Mail, compartilhar para o Safari, reordenar e salvar o resultado direto de volta. O mesmo fluxo funciona em celulares e tablets Android.',
    h3Best: 'Quais são as melhores formas de reorganizar páginas de PDF?',
    pBest: 'Procure pelas melhores formas de reorganizar páginas de PDF e você encontrará três opções realistas. Veja como elas se saem para o trabalho diário com documentos:',
    bestList: [
      '<strong>Uma ferramenta baseada em navegador — melhor para a maioria das pessoas.</strong> Permite reorganizar PDF online em segundos: nada para instalar, nada para atualizar, funciona identicamente no Windows, Mac, Linux e celulares. O problema usual é que seu arquivo é enviado para um servidor. Esta ferramenta remove esse problema — páginas são processadas no seu dispositivo, nunca transmitidas.',
      '<strong>Software desktop — para edição pesada e repetida.</strong> Editores como o Adobe Acrobat oferecem kits profundos de ferramentas PDF, mas custam uma assinatura, precisam ser instalados e mantidos atualizados, e são excessivos quando você só precisa trocar as páginas 12 e 13.',
      '<strong>Aplicativos mobile — convenientes, com ressalvas.</strong> Apps dedicados funcionam offline, mas adicionam permissões de armazenamento, anúncios e políticas de privacidade para ler. Para uma correção pontual, uma ferramenta de navegador que você já confia é a opção mais leve.',
    ],
    pBestOutro: 'Para a maioria das pessoas, na maioria das vezes, a primeira opção vence: abra a <a href="/#rearrange">ferramenta no topo desta página</a>, reorganize PDF sem envios e marcas d’água, e termine em menos de um minuto.',
    h3Why: 'Por que gratuito não significa arriscado',
    pWhy: 'Ferramentas online gratuitas conquistam sua reputação honestamente: muitas monetizam minerando os documentos que você envia, ou carimbando marcas d’água até você pagar. Esta ferramenta segue o caminho oposto. Seu PDF é lido, exibido e reescrito inteiramente dentro do seu navegador, então nenhuma cópia do seu arquivo existe em um servidor — nada para vazar, nada para vender, nada retido depois que você fechar a aba. Você não precisa aceitar isso como fé: abra as ferramentas de desenvolvedor do seu navegador, observe a aba de rede enquanto trabalha, e você verá zero tráfego de arquivos. É isso que o torna seguro para contratos, registros médicos, extratos financeiros e qualquer coisa confidencial. Leia a <a href="/privacy">promessa de privacidade</a> completa para detalhes.',
  },

  cta: {
    h2: 'Corrija a ordem das páginas em segundos.',
    sub: 'Sem envios. Sem limites. Sem cadastro. Só arrastar, soltar e baixar.',
    button: 'Reorganizar um PDF agora',
  },

  errors: {
    tryAgain: 'Tentar novamente',
    backToTool: 'Voltar para a ferramenta',
    notFound: {
      title: 'Página não encontrada — Rearrange PDF',
      description: 'Esta página não existe. Volte para reorganizar suas páginas de PDF.',
      heading: 'Esta página tomou o caminho errado.',
      message: 'A página que você está procurando não existe — mas a ordem das páginas do seu PDF ainda pode ser corrigida em segundos.',
    },
    serverError: {
      title: 'Algo deu errado — Rearrange PDF',
      description: 'Ocorreu um erro inesperado. Recarregue para tentar novamente, ou volte para a ferramenta.',
      heading: 'Algo quebrou do nosso lado.',
      message: 'Ocorreu um erro inesperado. Recarregue para tentar novamente, ou volte para a ferramenta — seus arquivos nunca saíram do seu navegador.',
    },
  },

  pages: {
    home: {
      meta: {
        title: 'Reorganize Páginas de PDF Online Gratuito — Mesclar, Reordenar e Excluir Páginas | Rearrange PDF',
        description: 'Reorganize páginas de PDF online gratuito. Arraste e solte para reordenar, mesclar, combinar ou excluir páginas — 100% privado, sem envios, sem limites, sem cadastro, sem marca d’água.',
        keywords: [
          'reorganizar pdf',
          'reorganizar páginas pdf',
          'reorganizar páginas pdf gratis',
          'reorganizar páginas pdf online',
          'reorganizar páginas pdf online gratis',
          'reorganizar pdf online',
          'reorganizar pdf gratis',
          'mesclar e reorganizar pdf',
          'combinar e reorganizar pdf',
          'excluir e reorganizar páginas pdf',
          'como reorganizar páginas pdf',
          'como reorganizar páginas pdf online gratis',
          'como reorganizar páginas pdf no iphone',
          'quais as melhores formas de reorganizar páginas pdf',
        ],
      },
      jsonLd: {
        webApplication: {
          name: 'Rearrange PDF',
          alternateName: 'Reorganizar Páginas de PDF',
          description: 'Ferramenta online gratuita para reorganizar, reordenar, girar, duplicar e excluir páginas de PDF inteiramente no seu navegador. Sem envios, sem limites, sem cadastro.',
          featureList: [
            'Reordenação de páginas com arrastar e soltar',
            'Girar, duplicar e excluir páginas',
            'Mesclar vários PDFs e reordenar o documento combinado',
            'Adicionar páginas em branco',
            'Seleção múltipla com ações em lote',
            'Histórico de desfazer e refazer',
            'Atalhos de teclado',
            'Pré-visualização de páginas',
            'Processamento 100% client-side — arquivos nunca saem do navegador',
          ],
        },
        howTo: {
          name: 'Como reorganizar páginas em um PDF',
          description: 'Reorganize as páginas de qualquer PDF em três passos, inteiramente no seu navegador sem envios.',
          steps: [
            {
              name: 'Adicione seu PDF',
              text: 'Solte um arquivo PDF na ferramenta, clique para procurar ou cole um. Você pode adicionar vários PDFs de uma vez para mesclá-los.',
            },
            {
              name: 'Organize suas páginas',
              text: 'Arraste as miniaturas de páginas na ordem desejada. Gire, duplique ou exclua páginas conforme necessário — tudo pode ser desfeito.',
            },
            {
              name: 'Baixe instantaneamente',
              text: 'Clique em Baixar PDF. Seu arquivo reorganizado é reconstruído no seu dispositivo e salvo sem marca d’água.',
            },
          ],
        },
      },
    },

    howto: {
      meta: {
        title: 'Como Organizar Páginas de PDF Online de Graça (Sem Envios) — Guia Passo a Passo',
        description: 'Aprenda como reorganizar, reordenar e organizar páginas de PDF em qualquer navegador — de graça e sem envios. Cobre desktop e mobile, mesclar arquivos, inverter ordem, substituir páginas e mais.',
      },
      breadcrumb: 'Como organizar páginas de PDF',
      h1: 'Como organizar páginas de PDF online de graça',
      intro: 'Digitalizou seu documento de trás para frente? Apêndice antes da introdução? Aqui está o jeito mais rápido de corrigir a ordem das páginas de qualquer PDF — sem enviar para o servidor de ninguém, criar uma conta ou enfrentar uma parede de "avaliação gratuita".',
      quickH2: 'A resposta rápida',
      quickSteps: [
        '<a href="/#rearrange">Abra a ferramenta</a> e solte seu PDF nela.',
        'Arraste as miniaturas de páginas na ordem desejada.',
        'Clique em <strong>Baixar PDF</strong> — pronto, sem marca d’água.',
      ],
      detailedH2: 'Passo a passo: reorganizando páginas em detalhes',
      step1H: 'Passo 1 — Adicione seu PDF',
      step1P: 'Arraste o arquivo da sua área de trabalho ou gerenciador de arquivos direto no cartão de envio, ou clique para procurar. Você também pode copiar um PDF e colar com <strong>Ctrl+V</strong> (⌘V no Mac). Quer combinar documentos primeiro? Solte vários PDFs de uma vez — suas páginas se mesclam em uma única grade, cada arquivo marcado com sua própria cor, para que você possa depois intercalar páginas de todos eles.',
      step2H: 'Passo 2 — Arraste as páginas na ordem',
      step2P1: 'Cada página aparece como uma miniatura. Agarre uma e arraste onde ela pertence — as outras abrem espaço conforme você avança. No celular ou tablet, pressione e segure uma página brevemente para levantá-la, depois arraste.',
      step2P2: 'Passar o mouse sobre uma página revela pequenos botões para <strong>girar</strong> (corrigir digitalizações de lado), <strong>duplicar</strong>, <strong>pré-visualizar</strong> em tamanho real, ou <strong>excluir</strong>. Clique nas páginas para selecionar várias de uma vez — ou <strong>Ctrl+A</strong> para selecionar todas — depois gire ou exclua em lote a partir da barra de ferramentas que aparece.',
      step3H: 'Passo 3 — Baixe seu PDF organizado',
      step3P: 'Clique em <strong>Baixar PDF</strong>. O arquivo é reconstruído no seu dispositivo — as páginas originais exatas, só na ordem escolhida — e salvo direto na pasta de downloads. Sem marca d’água, sem email necessário, sem fila.',
      tricksH2: 'Truques úteis que vale a pena conhecer',
      tricks: [
        '<strong>Nada é permanente.</strong> Cada ação pode ser desfeita com Ctrl+Z, refeita com Ctrl+Shift+Z. Experimente livremente — o botão de "restaurar ordem original" com um clique leva todo o documento de volta ao início.',
        '<strong>Inverta um documento inteiro</strong> com o botão de inverter ordem na barra de ferramentas — útil para digitalizações de trás para frente, sem arrastar necessário.',
        '<strong>Substitua uma página:</strong> exclua a página desatualizada, clique em "Adicionar PDFs" para trazer a substituta, depois arraste para a posição.',
        '<strong>Insira uma página em branco</strong> em qualquer lugar — útil para anotações ou separadores de impressão — com o botão "+" na barra de ferramentas.',
        '<strong>Keep only what you need:</strong> selecione as páginas que deseja manter, inverta a seleção para excluir as demais — e baixe o documento aparado.',
        '<strong>Verifique antes de confirmar:</strong> abra qualquer página em tamanho real com o botão de pré-visualização e folheie o documento com as setas antes de baixar.',
      ],
      mobileH2: 'Reorganizando páginas de PDF no celular',
      mobileP: 'O editor é projetado com foco em toque: miniaturas são grandes, botões de ação ficam ao alcance do polegar e arrastar funciona com um toque longo. Toque nas páginas para selecioná-las para girar ou excluir em lote. No iOS ou Android, você pode abrir um PDF do app Arquivos ou Drive, compartilhar para o navegador e reorganizar ali mesmo.',
      localH2: 'Por que reorganizar localmente importa',
      localP: 'A maioria dos "gratuitos" organizadores de PDF envia seu arquivo para um servidor de processamento, depois promete excluí-lo depois. Isso é fine até não ser — contratos, registros médicos e extratos financeiros merecem melhor. Esta ferramenta faz todo o trabalho dentro da aba do seu navegador: seu PDF é lido na memória, exibido e gravado de volta sem um único byte saindo do seu dispositivo. Você não precisa aceitar nossa palavra — abra as ferramentas de desenvolvedor do seu navegador, observe a aba de rede e reorganize à vontade.',
      ctaH2: 'Pronto para corrigir a ordem das páginas?',
      ctaP: 'Gratuito, ilimitado, sem cadastro — e seu arquivo nunca sai do navegador.',
      ctaButton: 'Reorganizar um PDF agora',
      faqOutro: 'Procurando mais respostas? Veja a <a href="/#faq">seção de perguntas frequentes na página inicial</a>.',
      jsonLd: {
        howTo: {
          name: 'Como organizar páginas de PDF online de graça',
          description: 'Um guia passo a passo para reorganizar páginas de PDF no seu navegador sem enviar o arquivo a lugar nenhum.',
          steps: [
            {
              name: 'Abra a ferramenta e adicione seu PDF',
              text: 'Vá a rearrangepdf.com e solte seu PDF na ferramenta, clique em "Selecionar arquivo PDF", ou cole o arquivo com Ctrl+V.',
            },
            {
              name: 'Arraste as páginas para a nova ordem',
              text: 'Arraste qualquer miniatura de página para uma nova posição. Use os botões ao passar o mouse ou a barra de seleção para girar, duplicar ou excluir páginas.',
            },
            {
              name: 'Baixe o PDF organizado',
              text: 'Clique em "Baixar PDF" — o arquivo é reconstruído no seu dispositivo e salvo imediatamente, sem marca d’água.',
            },
          ],
        },
      },
    },

    about: {
      meta: {
        title: 'Sobre — Rearrange PDF',
        description: 'Por que criamos um organizador de páginas de PDF que nunca envia seus arquivos, como funciona nos bastidores e como entrar em contato.',
      },
      breadcrumb: 'Sobre',
      h1: 'Uma ferramenta, feita direito.',
      p1: 'Reorganizar as páginas de um PDF é um trabalho pequeno. Você digitalizou um contrato de trás para frente, ou o resumo de um relatório acabou no final, e só quer isso corrigido. No entanto, a maioria das ferramentas para essa tarefa simples pede muito em troca: seu arquivo é enviado para um servidor que você não conhece, você atinge um limite diário depois de dois documentos, e geralmente há um prompt de upgrade esperando.',
      p2: 'Criamos o Rearrange PDF porque nada disso é necessário. Reordenar páginas não precisa de um servidor — um navegador moderno tem tudo o que é preciso para ler, exibir e reconstruir um PDF. Então é isso que este site é: uma única página, uma área de envio e uma grade de miniaturas que você pode arrastar. Sem envios, sem contas, sem anúncios, sem limites.',
      howItWorksH2: 'Como funciona',
      howItWorksP: 'Nos bastidores, a ferramenta usa duas bibliotecas de código aberto que rodam inteiramente no seu navegador: <strong>PDF.js</strong> renderiza cada página como uma miniatura, e <strong>pdf-lib</strong> assembla seu novo documento copiando as páginas originais — byte por byte, então formatação, fontes e qualidade são preservadas exatamente. Quando você clica em baixar, o PDF finalizado é criado ali mesmo na aba e entregue à caixa de diálogo de salvamento do seu navegador.',
      getInTouchH2: 'Entre em contato',
      getInTouchP: 'Encontrou um PDF que não funciona? Tem uma ideia para a ferramenta? Lemos tudo — <a href="/contact">entre em contato</a> pelo email <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a>.',
      ctaH2: 'Experimente com seu próprio arquivo',
      ctaP: 'É gratuito, ilimitado — e nada jamais sai do seu navegador.',
      ctaButton: 'Reorganizar um PDF',
    },

    contact: {
      meta: {
        title: 'Contato — Rearrange PDF',
        description: 'Entre em contato com a equipe por trás do Rearrange PDF. Informe um arquivo que não funciona, sugira um recurso ou faça uma pergunta sobre o organizador de páginas de PDF baseado em navegador.',
      },
      breadcrumb: 'Contato',
      h1: 'Fale conosco',
      intro: 'Encontrou um PDF que não abre? Tem uma ideia que tornaria a ferramenta melhor? Lemos cada mensagem e genuinamente agradecemos o feedback.',
      emailH2: 'Envie um email',
      emailP: 'O jeito mais rápido de nos alcançar é por email. Somos uma equipe pequena, então por favor permita alguns dias para uma resposta.',
      beforeH2: 'Antes de escrever',
      beforeP: 'Algumas notas nos ajudam a te ajudar mais rápido:',
      beforeItems: [
        '<strong>Nos diga qual arquivo apresentou problema.</strong> Se um PDF falha ao carregar ou exportar, descreva o tipo de documento (digitalizado, formulário, criptografado, muito grande) em vez de enviar o arquivo.',
        '<strong>Não podemos ver seus arquivos.</strong> A ferramenta roda inteiramente no seu navegador, então seus PDFs nunca nos alcançam. Por favor, não envie documentos sensíveis — uma descrição é tudo que precisamos.',
        '<strong>Inclua seu navegador e dispositivo</strong> (por exemplo, "Safari no iPhone") se estiver relatando um problema — isso nos ajuda a reproduzi-lo.',
      ],
      answersH2: 'Você pode encontrar a resposta bem aqui',
      helpLinks: [
        {
          title: 'Leia as perguntas frequentes',
          body: 'Respostas rápidas sobre envios, tamanho de arquivo, qualidade de páginas e privacidade.',
        },
        {
          title: 'Abra o guia',
          body: 'Instruções passo a passo para reordenar, girar e excluir páginas.',
        },
        {
          title: 'Revise nossa política de privacidade',
          body: 'Exatamente o que a ferramenta faz — e não faz — com seus arquivos.',
        },
      ],
      dataH2: 'Sobre seus dados',
      dataP: 'Como não coletamos dados pessoais, geralmente não há nada para buscarmos em seu nome — mas se você tiver uma pergunta sobre privacidade, ficamos felizes em responder. Veja nossa <a href="/privacy">política de privacidade</a> e <a href="/terms">termos de serviço</a> para todos os detalhes.',
      ctaH2: 'Precisa corrigir um PDF agora mesmo?',
      ctaP: 'A ferramenta é gratuita, ilimitada — e nada jamais sai do seu navegador.',
      ctaButton: 'Reorganizar um PDF',
      jsonLd: {
        contactPage: {
          name: 'Contato Rearrange PDF',
          description: 'Informações de contato do Rearrange PDF, a ferramenta baseada em navegador para reorganizar e organizar páginas de PDF sem enviar.',
        },
      },
    },

    privacy: {
      meta: {
        title: 'Política de Privacidade — Rearrange PDF',
        description: 'Nossa promessa de privacidade: seus PDFs nunca saem do seu navegador, não rodamos anúncios nem rastreadores, e não coletamos dados pessoais. Leia a política completa.',
      },
      breadcrumb: 'Política de privacidade',
      h1: 'Política de privacidade',
      lastUpdated: 'Última atualização: setembro de 2026',
      shortH2: 'A versão resumida',
      shortItems: [
        'Seus arquivos PDF nunca saem do seu dispositivo. Todo o processamento acontece no seu navegador.',
        'Não temos contas de usuário e não coletamos dados pessoais.',
        'Não rodamos anúncios e não embedamos rastreadores de terceiros.',
        'A única medição que usamos é analytics agregados e sem cookies (veja abaixo).',
      ],
      sections: [
        {
          title: '1. Como a ferramenta funciona',
          text: 'Rearrange PDF é uma aplicação client-side. Quando você abre um PDF aqui, o arquivo é lido diretamente pelo seu navegador usando as APIs JavaScript disponíveis nesta página. Miniaturas são renderizadas e seu documento editado é reconstruído inteiramente no seu dispositivo. Nenhum conteúdo de arquivo é transmitido para nós ou para qualquer terceira parte — não há servidor de envio para mandá-lo.',
        },
        {
          title: '2. O que nunca coletamos',
          bullets: [
            'O conteúdo, nomes ou metadados dos seus arquivos PDF',
            'Qualquer informação de conta — a ferramenta não requer cadastro',
            'Cookies de publicidade ou rastreamento entre sites de qualquer tipo',
          ],
        },
        {
          title: '3. O que é coletado',
          subsections: [
            {
              title: 'Analytics sem cookies',
              text: 'Usamos o Cloudflare Web Analytics para entender o uso agregado do site (por exemplo, quantas pessoas visitam a ferramenta e de qual país). Este serviço não usa cookies e não identifica visitantes individuais. Ele não te segue em outros sites.',
            },
            {
              title: 'Logs padrão de servidor',
              text: 'Como todo site, nosso provedor de hospedagem (Cloudflare) mantém logs técnicos de vida curta das solicitações feitas para carregar o próprio site — coisas como endereço IP, tipo de navegador e timestamps. Esses logs nunca incluem seus documentos (que nunca são enviados) e existem apenas para manter o site seguro e operacional.',
            },
          ],
        },
        {
          title: '4. Verifique você mesmo',
          text: 'Você não precisa confiar nesta página. Abra as ferramentas de desenvolvedor do seu navegador (F12), mude para a aba Rede e use a ferramenta: envie um PDF, arraste páginas, baixe o resultado. Você verá que nenhuma solicitação carrega seu arquivo.',
        },
        {
          title: '5. Seus direitos',
          text: 'Como não processamos dados pessoais além das estatísticas anônimas e agregadas descritas acima, geralmente não há dados pessoais seus para acessarmos, corrigirmos ou apagarmos. Se você acredita do contrário e gostaria de nos contatar, veja abaixo.',
        },
        {
          title: '6. Mudanças nesta política',
          text: 'Se algum dia mudarmos como o site funciona de uma forma que afete a privacidade, atualizaremos esta página. A ferramenta permanecerá client-side — esse é o propósito inteiro do site.',
        },
        {
          title: '7. Contato',
          text: 'Perguntas sobre privacidade? Envie um email para <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> ou visite nossa <a href="/contact">página de contato</a>.',
        },
      ],
    },

    terms: {
      meta: {
        title: 'Termos de Serviço — Rearrange PDF',
        description: 'Os termos que se aplicam quando você usa rearrangepdf.com para reorganizar páginas de PDF no seu navegador.',
      },
      breadcrumb: 'Termos de serviço',
      h1: 'Termos de serviço',
      lastUpdated: 'Última atualização: setembro de 2026',
      sections: [
        {
          title: '1. O serviço',
          text: 'Rearrange PDF (rearrangepdf.com) é uma ferramenta gratuita baseada em navegador que permite reorganizar, girar, duplicar, excluir e organizar as páginas de arquivos PDF. Todo o processamento acontece localmente no seu navegador web; seus arquivos não são enviados para nós.',
        },
        {
          title: '2. Aceitação',
          text: 'Ao usar o site você concorda com estes termos. Se não concordar, por favor não use o serviço.',
        },
        {
          title: '3. Seu conteúdo',
          text: 'Você mantém todos os direitos sobre os documentos com os quais trabalha. Como os arquivos são processados no seu próprio dispositivo, nunca os recebemos, armazenamos ou processamos. Você é responsável por ter os direitos sobre qualquer documento que abrir na ferramenta e por cumprir a legislação aplicável.',
        },
        {
          title: '4. Sem garantia',
          text: 'O serviço é fornecido "como está", gratuitamente, sem garantias de qualquer tipo. Trabalhamos duro para mantê-lo preciso e confiável — o conteúdo das páginas é copiado byte por byte do seu arquivo original — mas não podemos garantir disponibilidade ininterrupta ou adequação a um propósito particular. Mantenha backups de documentos importantes.',
        },
        {
          title: '5. Limitação de responsabilidade',
          text: 'Na medida máxima permitida pela lei, não somos responsáveis por quaisquer danos decorrentes do uso ou incapacidade de usar o serviço.',
        },
        {
          title: '6. Mudanças',
          text: 'Podemos atualizar o serviço ou estes termos a qualquer momento. O uso continuado após mudanças significa que você aceita os termos atualizados. A versão atual está sempre disponível nesta página.',
        },
        {
          title: '7. Contato',
          text: 'Perguntas sobre estes termos? Envie um email para <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> ou visite nossa <a href="/contact">página de contato</a>.',
        },
      ],
    },
  },
} satisfies SiteDictionary;

export default ptBr;