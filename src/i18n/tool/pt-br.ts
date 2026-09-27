import type { ToolStrings } from './en';

const ptBr = {
  dropZone: {
    reading: 'Lendo seu PDF…',
    processingLocally: 'Processando localmente — nada é enviado.',
    heading: 'Solte seu PDF aqui',
    or: 'ou',
    selectFile: 'Selecionar arquivo PDF',
    hint: 'Adicione vários arquivos para mesclá-los · cole com Ctrl+V · tamanho e páginas ilimitados',
    privacy: 'Seu arquivo nunca sai deste navegador',
  },
  toolbar: {
    noFile: 'Nenhum arquivo',
    files: (n: number) => `${n} arquivo${n === 1 ? '' : 's'}`,
    pages: (n: number) => `${n} página${n === 1 ? '' : 's'}`,
    undo: 'Desfazer (Ctrl+Z)',
    redo: 'Refazer (Ctrl+Shift+Z)',
    reverse: 'Inverter ordem das páginas',
    resetLabel: 'Restaurar ordem original',
    reset: 'Restaurar',
    thumbnailSize: 'Tamanho da miniatura',
    zoomSm: 'Miniaturas pequenas',
    zoomMd: 'Miniaturas médias',
    zoomLg: 'Miniaturas grandes',
    addPdfs: 'Adicionar PDFs',
    addBlank: 'Adicionar uma página em branco',
    confirm: 'Confirmar?',
    startNew: 'Começar novo',
    building: 'Construindo…',
    download: 'Baixar PDF',
  },
  pageCard: {
    blankPage: 'página em branco',
    sourcePage: (name: string, n: number) => `${name}, página original ${n}`,
    rotated: (deg: number) => `, girada ${deg} graus`,
    pageOf: (pos: number, total: number) => `Página ${pos} de ${total}`,
    renderFailed: 'Não foi possível renderizar esta página',
    loadingThumbnail: 'Carregando miniatura da página',
    blank: 'em branco',
    sourceTitle: (name: string, n: number) => `${name} — página original ${n}`,
    rotatedTitle: (deg: number) => `Girada ${deg}°`,
    preview: 'Pré-visualizar página',
    rotate: 'Girar no sentido horário',
    duplicate: 'Duplicar página',
    delete: 'Excluir página',
  },
  pageGrid: {
    dragStart: (n: number) =>
      `Página ${n} levantada. Use as setas para movê-la, Espaço para soltar, Escape para cancelar.`,
    dragOver: (n: number) => `A página agora está sobre a posição ${n}.`,
    dragOut: 'A página não está mais sobre um alvo de soltura.',
    dragEnd: (n: number) => `Movida para a posição ${n}.`,
    dragCancel: 'Movimentação cancelada.',
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `Pré-visualização da página, página ${pos} de ${total}`,
    headerBlank: (pos: number, total: number) => `Página ${pos} de ${total} — página em branco`,
    headerFile: (pos: number, total: number, name: string) =>
      `Página ${pos} de ${total} — ${name}`,
    close: 'Fechar pré-visualização',
    prev: 'Página anterior',
    next: 'Próxima página',
    alt: (pos: number) => `Pré-visualização da página ${pos}`,
  },
  password: {
    dialogLabel: 'Senha do PDF necessária',
    heading: 'Senha necessária',
    thisPdf: 'Este PDF',
    bodySuffix: 'está protegido. Insira sua senha para abri-lo no seu dispositivo.',
    retry: 'Esta senha não funcionou — tente novamente.',
    placeholder: 'Senha do PDF',
    cancel: 'Cancelar',
    unlock: 'Desbloquear',
  },
  success: {
    heading: 'Seu PDF está pronto',
    body: 'Seu PDF reorganizado foi baixado para o seu dispositivo. Nada foi enviado — tudo aconteceu diretamente no seu navegador.',
    pages: (n: number) => `${n} página${n === 1 ? '' : 's'}`,
    building: 'Construindo…',
    downloadAgain: 'Baixar novamente',
    startNew: 'Começar novo',
    backToEditing: 'Voltar para a edição',
  },
  rating: {
    label: 'Avalie esta ferramenta de 1 a 5 estrelas',
    star: (n: number) => `${n} estrela${n > 1 ? 's' : ''}`,
    announced: (value: number) =>
      `Você avaliou ${value} de 5 estrelas. Obrigado pelo seu feedback!`,
    thanks: 'Obrigado pelo seu feedback!',
    prompt: 'Como foi sua experiência?',
  },
  batch: {
    label: 'Ações para páginas selecionadas',
    selected: (n: number) => `${n} página${n === 1 ? '' : 's'} selecionada${n === 1 ? '' : 's'}`,
    rotate: 'Girar',
    duplicate: 'Duplicar',
    delete: 'Excluir',
    all: 'Todas',
    clear: 'Limpar',
  },
  toasts: {
    dismiss: 'Dispensar notificação',
  },
  tool: {
    pagesReady: (n: number) => `${n} página${n === 1 ? '' : 's'} pronta${n === 1 ? '' : 's'} para reorganizar.`,
    filesSkippedPdf: (n: number) =>
      `${n} arquivo${n === 1 ? ' foi' : 's foram'} ignorado${n === 1 ? '' : 's'} — apenas arquivos PDF são suportados.`,
    readFailed: (name: string) => `Não foi possível ler ${name}.`,
    openFailed: (name: string) =>
      `Não foi possível abrir ${name} — pode estar corrompido ou não ser um PDF válido.`,
    readingFile: (name: string) => `Lendo ${name}…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `Lendo ${name} (${i} de ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} arquivo${n === 1 ? ' foi' : 's foram'} ignorado${n === 1 ? '' : 's'} — a senha não foi inserida.`,
    encryptedInfo:
      'Este PDF está criptografado. Você pode reorganizá-lo aqui, mas arquivos criptografados não podem ser reconstruídos para download — o botão de download explica como resolver isso.',
    allSelected: 'Todas as páginas selecionadas.',
    rotated: (n: number) => `${n} página${n === 1 ? '' : 's'} girada${n === 1 ? '' : 's'}.`,
    duplicated: (n: number) => `${n} página${n === 1 ? '' : 's'} duplicada${n === 1 ? '' : 's'}.`,
    deleted: (n: number) => `${n} página${n === 1 ? '' : 's'} excluída${n === 1 ? '' : 's'}.`,
    reversed: 'Ordem das páginas invertida.',
    restored: 'Ordem original das páginas restaurada.',
    blankAdded: 'Página em branco adicionada no final — arraste-a para qualquer lugar.',
    blankDocName: 'Página em branco',
    noPagesLeft: 'Nenhuma página restante',
    noPagesHint: 'Desfaça a exclusão, adicione mais PDFs ou comece novo.',
    undo: 'Desfazer',
    addPdfs: 'Adicionar PDFs',
    dropOverlay: 'Solte PDFs para adicionar suas páginas',
    encryptedTitle: 'Este PDF está criptografado, então não pode ser baixado.',
    encryptedBody1:
      'Você pode reorganizar, girar e pré-visualizar as páginas, mas um arquivo criptografado não pode ser reconstruído no seu dispositivo. Remova a senha primeiro (abra e use ',
    encryptedStrong: 'Imprimir → Salvar como PDF',
    encryptedBody2:
      ', ou a opção "remover segurança" do seu app de PDF), depois adicione a cópia desbloqueada aqui.',
    encryptedDownloadToast:
      'Este arquivo está criptografado, então não pode ser reconstruído localmente. Remova a senha (abra, escolha Imprimir → Salvar como PDF, ou use a opção "remover segurança" do seu app de PDF), depois adicione a cópia aqui e baixe.',
    exportFailed:
      'Este PDF não pôde ser reconstruído no seu dispositivo. Pode usar criptografia ou uma estrutura que não conseguimos copiar. Tente um PDF sem senha, ou exporte-o novamente do seu app de PDF primeiro.',
    downloaded: (name: string) => `${name} baixado.`,
    undone: 'Desfeito.',
    redone: 'Refeito.',
  },
  shared: {
    memoryNote:
      'Nada é enviado, então não existe limite de tamanho — mas também não existe fila: um documento muito grande ou de alta resolução usa mais memória do seu dispositivo enquanto é reconstruído. Algumas centenas de páginas passam tranquilo, mas uma digitalização de mil páginas pode demorar em um celular mais antigo.',
    byteForByte:
      'As páginas são copiadas direto do seu arquivo original, sem serem redesenhadas nem recomprimidas, então a qualidade é idêntica à da fonte.',
    selectAllPages: 'Selecionar todas as páginas',
    clearSelection: 'Limpar a seleção',
    selectedCount: (n: number) => `${n} página${n === 1 ? '' : 's'} selecionada${n === 1 ? '' : 's'}`,
    nothingSelected: 'Nenhuma página selecionada.',
  },
  split: {
    modeLabel: 'Modo de divisão',
    modeRange: 'Por intervalo de páginas',
    modeEvery: 'Todas as páginas',
    rangeLabel: 'Intervalos de páginas',
    rangePlaceholder: '1-4, 9, 15-20',
    rangeHelp: 'Um arquivo por intervalo, na ordem em que você os digitar.',
    rangeAppend: 'Clique em uma página abaixo para adicioná-la aos intervalos.',
    orderLocked:
      'Os números de página sempre seguem a ordem do seu documento original — dividir nunca altera o seu arquivo.',
    pageControlsDisabled:
      'Girar, duplicar e excluir pertencem ao editor e não fazem nada aqui — dividir nunca altera o seu arquivo. Use a ferramenta "Extrair páginas de um PDF" para mudar quais páginas entram.',
    errorEmpty:
      'Digite pelo menos um intervalo de páginas ou mude para "Todas as páginas".',
    errorZero: 'Os números de página começam em 1.',
    errorSyntax: (part: string) =>
      `${part} não é um número de página. Use números separados por vírgulas e hifens — por exemplo 1-4, 9, 15-20.`,
    errorUnfinished: (part: string) => `Falta um número de página em ${part}.`,
    errorTrailing:
      'Remova a vírgula extra ou termine o último intervalo com um número de página.',
    errorReversed: (part: string) =>
      `${part} está ao contrário. Escreva na outra ordem, como 3-7.`,
    errorOutOfBounds: (max: number) =>
      `Esse intervalo passa da última página. Este documento tem ${max} página${max === 1 ? '' : 's'}.`,
    planLabel: 'Arquivos que serão criados',
    planEmpty: 'Digite um intervalo para ver os arquivos que você receberá.',
    planItem: (part: number, label: string, pages: number) =>
      `${label} — ${pages} página${pages === 1 ? '' : 's'}`,
    planCount: (n: number) => `${n} arquivo${n === 1 ? ' será criado' : 's serão criados'}`,
    action: 'Dividir e baixar',
    working: 'Dividindo…',
    progress: (done: number, total: number) =>
      `${done} de ${total} arquivo${total === 1 ? '' : 's'} criad${total === 1 ? 'o' : 'os'}.`,
    confirmTitle: (n: number) =>
      `Isso criará ${n} arquivo${n === 1 ? '' : 's'} separad${n === 1 ? 'o' : 'os'}.`,
    confirmBody:
      'Seu navegador pode pedir permissão para baixar vários arquivos de uma vez, e criá-los leva um momento. Continuar?',
    confirmAction: (n: number) => `Baixar ${n} arquivo${n === 1 ? '' : 's'}`,
    cancel: 'Cancelar',
    resultsHeading: (n: number) =>
      `${n} arquivo${n === 1 ? '' : 's'} criad${n === 1 ? 'o' : 'os'}`,
    resultsHeadingNone: 'Nada foi criado',
    resultsBody:
      'Cada documento foi reconstruído no seu dispositivo e salvo separadamente. Nada foi enviado, e nenhuma página foi redesenhada — a qualidade é idêntica à do seu original.',
    resultsFailed: (n: number) =>
      `Não foi possível criar ${n} arquivo${n === 1 ? '' : 's'}`,
    resultPending: 'Não criado',
    partialFailure: (done: number, failed: number) =>
      `${done} arquivo${done === 1 ? '' : 's'} criad${done === 1 ? 'o' : 'os'}, ${failed} com falha. O resto já está nos seus downloads.`,
    allFailed:
      'Nenhum arquivo pôde ser criado. Seu arquivo original não foi modificado.',
    exportFailedOne: (name: string) => `Não foi possível criar ${name}.`,
  },
  extract: {
    keepLabel: 'Páginas a manter',
    keepHelp:
      'Clique em uma página para mantê-la. Clique na primeira e use Shift+clique na última para pegar um intervalo inteiro, ou selecione todas as páginas e depois desmarque o que não precisa.',
    orderLabel: 'Ordem das páginas extraídas',
    orderHelp:
      'Arraste uma página para cá para mudar a ordem em que ela aparece no novo documento. Seu arquivo original nunca é modificado.',
    orderEmpty:
      'Nenhuma página selecionada ainda — clique em uma página acima para mantê-la.',
    orderInTray:
      'Para mudar a ordem das páginas extraídas, arraste-as na lista abaixo.',
    orderMoved: (from: number, to: number) =>
      `Movida da posição ${from} para a posição ${to} do novo documento.`,
    moveUp: 'Mover esta página para antes no novo documento',
    moveDown: 'Mover esta página para depois no novo documento',
    remove: 'Deixar esta página fora do novo documento',
    pickerLabel: 'Selecionar páginas por número',
    pickerHint:
      'Todas as páginas como alvo de toque, para teclado e telas pequenas.',
    pickerPage: (n: number, total: number) => `Página ${n} de ${total}`,
    pickerOn: (n: number) => `Página ${n}, mantida`,
    pickerOff: (n: number) => `Página ${n}, não mantida`,
    deselectMeansLeaveOut:
      'Esta ferramenta nunca exclui páginas do seu arquivo — a página é simplesmente deixada fora do novo documento.',
    action: 'Baixar o PDF extraído',
    zeroSelected: 'Selecione pelo menos uma página para extrair.',
    resultsHeading: (n: number) =>
      `${n} página${n === 1 ? '' : 's'} extraíd${n === 1 ? 'a' : 'as'}`,
    resultsBody:
      'O novo documento foi reconstruído no seu dispositivo a partir das páginas que você selecionou, na ordem mostrada. Seu arquivo original não foi modificado.',
  },
} satisfies ToolStrings;

export default ptBr;