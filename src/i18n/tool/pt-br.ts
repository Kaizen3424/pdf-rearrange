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
} satisfies ToolStrings;

export default ptBr;