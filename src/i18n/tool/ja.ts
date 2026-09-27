import type { ToolStrings } from './en';

const ja = {
  dropZone: {
    reading: 'PDFを読み取り中…',
    processingLocally: 'ローカルで処理中 — 何もアップロードされません。',
    heading: 'ここにPDFをドロップ',
    or: 'または',
    selectFile: 'PDFファイルを選択',
    hint: '複数のファイルを追加してマージ · Ctrl+Vでペースト · サイズとページ数無制限',
    privacy: 'ファイルはこのブラウザから決して離れません',
  },
  toolbar: {
    noFile: 'ファイルなし',
    files: (n: number) => `${n}ファイル`,
    pages: (n: number) => `${n}ページ`,
    undo: '取り消し (Ctrl+Z)',
    redo: 'やり直し (Ctrl+Shift+Z)',
    reverse: 'ページ順序を反転',
    resetLabel: '元の順序に戻す',
    reset: 'リセット',
    thumbnailSize: 'サムネイルサイズ',
    zoomSm: '小サムネイル',
    zoomMd: '中サムネイル',
    zoomLg: '大サムネイル',
    addPdfs: 'PDFを追加',
    addBlank: '空白ページを追加',
    confirm: '確認？',
    startNew: '新規開始',
    building: '構築中…',
    download: 'PDFをダウンロード',
  },
  pageCard: {
    blankPage: '空白ページ',
    sourcePage: (name: string, n: number) => `${name}、元のページ ${n}`,
    rotated: (deg: number) => `、${deg}°回転`,
    pageOf: (pos: number, total: number) => `${pos} / ${total}ページ`,
    renderFailed: 'このページを描画できませんでした',
    loadingThumbnail: 'ページサムネイルを読み込み中',
    blank: '空白',
    sourceTitle: (name: string, n: number) => `${name} — 元のページ ${n}`,
    rotatedTitle: (deg: number) => `${deg}°回転`,
    preview: 'ページをプレビュー',
    rotate: '時計回りに回転',
    duplicate: 'ページを複製',
    delete: 'ページを削除',
  },
  pageGrid: {
    dragStart: (n: number) =>
      `${n}ページ目を取得。矢印キーで移動、Spaceでドロップ、Escapeでキャンセル。`,
    dragOver: (n: number) => `ページは現在${n}番目の位置の上にあります。`,
    dragOut: 'ページはドロップターゲットの上にありません。',
    dragEnd: (n: number) => `${n}番目の位置に移動しました。`,
    dragCancel: '移動がキャンセルされました。',
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `ページプレビュー、${pos} / ${total}`,
    headerBlank: (pos: number, total: number) => `${pos} / ${total}ページ — 空白ページ`,
    headerFile: (pos: number, total: number, name: string) =>
      `${pos} / ${total}ページ — ${name}`,
    close: 'プレビューを閉じる',
    prev: '前のページ',
    next: '次のページ',
    alt: (pos: number) => `${pos}ページのプレビュー`,
  },
  password: {
    dialogLabel: 'PDFパスワードが必要です',
    heading: 'パスワードが必要です',
    thisPdf: 'このPDF',
    bodySuffix: 'は保護されています。デバイスで開くためのパスワードを入力してください。',
    retry: 'そのパスワードでは動作しませんでした — もう一度お試しください。',
    placeholder: 'PDFパスワード',
    cancel: 'キャンセル',
    unlock: 'ロック解除',
  },
  success: {
    heading: 'PDFの準備ができました',
    body: '並べ替えられたPDFがデバイスにダウンロードされました。何もアップロードされることはなく、すべての処理がブラウザ内で完結しています。',
    pages: (n: number) => `${n}ページ`,
    building: '構築中…',
    downloadAgain: 'もう一度ダウンロード',
    startNew: '新規開始',
    backToEditing: '編集に戻る',
  },
  rating: {
    label: 'このツールを5段階で評価',
    star: (n: number) => `${n}つ星`,
    announced: (value: number) =>
      `5つ星中${value}つ星と評価しました。フィードバックありがとうございます！`,
    thanks: 'フィードバックありがとうございます！',
    prompt: 'どうでしたか？',
  },
  batch: {
    label: '選択したページのアクション',
    selected: (n: number) => `${n}ページを選択済み`,
    rotate: '回転',
    duplicate: '複製',
    delete: '削除',
    all: 'すべて',
    clear: '選択解除',
  },
  toasts: {
    dismiss: '通知を閉じる',
  },
  tool: {
    pagesReady: (n: number) => `${n}ページ並べ替え準備完了。`,
    filesSkippedPdf: (n: number) =>
      `${n}件のファイルをスキップしました — PDFファイルのみ対応しています。`,
    readFailed: (name: string) => `${name}を読み取れませんでした。`,
    openFailed: (name: string) =>
      `${name}を開けませんでした — 破損しているか有効なPDFではない可能性があります。`,
    readingFile: (name: string) => `${name}を読み取り中…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `${name}を読み取り中（${i} / ${total}）…`,
    filesSkippedPassword: (n: number) =>
      `${n}件のファイルをスキップしました — パスワードが入力されませんでした。`,
    encryptedInfo:
      'このPDFは暗号化されています。ページの並べ替えは可能ですが、暗号化されたファイルの再構築はサポートされていないため、ダウンロードできません — ダウンロードボタンに解决方法が表示されます。',
    allSelected: 'すべてのページが選択されました。',
    rotated: (n: number) => `${n}ページ回転しました。`,
    duplicated: (n: number) => `${n}ページを複製しました。`,
    deleted: (n: number) => `${n}ページを削除しました。`,
    reversed: 'ページ順序が反転しました。',
    restored: '元のページ順序に戻しました。',
    blankAdded: '空白ページが末尾に追加されました — どこでもドラッグして配置できます。',
    blankDocName: '空白ページ',
    noPagesLeft: 'ページがありません',
    noPagesHint: '削除を取り消すか、PDFを追加するか、新規開始してください。',
    undo: '取り消し',
    addPdfs: 'PDFを追加',
    dropOverlay: 'PDFをドロップしてページを追加',
    encryptedTitle: 'このPDFは暗号化されているため、ダウンロードできません。',
    encryptedBody1:
      'ページの並べ替え、回転、プレビューは可能ですが、暗号化されたファイルはデバイス上で再構築できません。まずパスワードを削除してください（PDFを開いて',
    encryptedStrong: '印刷 → PDFとして保存',
    encryptedBody2:
      'を使用するか、お使いのPDFアプリの「セキュリティを解除」オプションを使用）、次にロックを解除したコピーをここで追加してください。',
    encryptedDownloadToast:
      'このファイルは暗号化されているため、ローカルで再構築できません。パスワードを削除し（PDFを開いて「印刷 → PDFとして保存」を選択するか、お使いのPDFアプリの「セキュリティを解除」オプションを使用）、次にここでコピーを追加してダウンロードしてください。',
    exportFailed:
      'このPDFはデバイス上で再構築できませんでした。暗号化またはコピーできない構造を使用している可能性があります。パスワードのないPDFを試すか、まずPDFアプリから再度エクスポートしてください。',
    downloaded: (name: string) => `${name}をダウンロードしました。`,
    undone: '取り消しました。',
    redone: 'やり直しました。',
  },
  shared: {
    memoryNote:
      '何もアップロードされないため、サイズの上限はありません — ただし待ち行列もありません。非常に大きな文書や高解像度のスキャンは、再構築されている間だけこのデバイットのメモリを更多信息使います。数百ページなら問題なく、1000ページのスキャンは古いスマートフォンでは遅く感じるかもしれません。',
    byteForByte:
      'ページは元ファイルからそのまま複製され、再描画も再圧縮も行われないため、画質は元のままです。',
    selectAllPages: 'すべてのページを選択',
    clearSelection: '選択解除',
    selectedCount: (n: number) => `${n}ページを選択済み`,
    nothingSelected: 'ページが選択されていません。',
  },
  split: {
    modeLabel: '分割モード',
    modeRange: '範囲を指定',
    modeEvery: 'すべて',
    rangeLabel: 'ページ範囲',
    rangePlaceholder: '1-4, 9, 15-20',
    rangeHelp: '範囲ごとに1つのファイルを作成し、入力した順に出力します。',
    rangeAppend: '下のページをクリックして範囲に追加してください。',
    orderLocked:
      'ページ番号は常に元の文書の順序に従います — 分割してもファイルは変更されません。',
    pageControlsDisabled:
      '回転、複製、削除はエディターの対象で、ここでは何も起きません — 分割してもファイルは変更されません。どのページを含めるかを変えるには「PDFから必要なページを抽出する」ツールを使ってください。',
    errorEmpty: 'ページ範囲を1つ以上入力するか、「すべて」に切り替えてください。',
    errorZero: 'ページ番号は1から始まります。',
    errorSyntax: (part: string) =>
      `${part}はページ番号ではありません。数はカンマとハイフンで区切ってください — 例えば1-4, 9, 15-20のように入力します。`,
    errorUnfinished: (part: string) => `${part}にはページ番号が指定されていません。`,
    errorTrailing:
      '余分なカンマを削除するか、最後の範囲をページ番号で終えてください。',
    errorReversed: (part: string) => `${part}の順番が逆です。3-7のように書いてください。`,
    errorOutOfBounds: (max: number) =>
      `その範囲は最後のページを超えています。この文書は${max}ページです。`,
    planLabel: '作成されるファイル',
    planEmpty: '範囲を入力すると、作成されるファイルが表示されます。',
    planItem: (part: number, label: string, pages: number) => `${label} — ${pages}ページ`,
    planCount: (n: number) => `${n}件のファイルが作成されます`,
    action: '分割してダウンロード',
    working: '分割中…',
    progress: (done: number, total: number) => `${total}件中${done}件を作成しました。`,
    confirmTitle: (n: number) => `${n}件の別ファイルが作成されます。`,
    confirmBody:
      'ブラウザが一度に複数のファイルをダウンロードする許可を求めることがあります。作成には少し時間がかかります。続けますか？',
    confirmAction: (n: number) => `${n}件のファイルをダウンロード`,
    cancel: 'キャンセル',
    resultsHeading: (n: number) => `${n}件のファイルを作成しました`,
    resultsHeadingNone: '何も作成されませんでした',
    resultsBody:
      '各ドキュメントはデバイス上で再構築され、個別に保存されました。何もアップロードされておらず、ページが再描画されたこともありません — 画質は元のままです。',
    resultsFailed: (n: number) => `${n}件のファイルを作成できませんでした`,
    resultPending: '未作成',
    partialFailure: (done: number, failed: number) =>
      `${done}件のファイルを作成し、${failed}件は失敗しました。残りはすでにダウンロード済みです。`,
    allFailed: 'どのファイルも作成できませんでした。元のファイルは変更されていません。',
    exportFailedOne: (name: string) => `${name}を作成できませんでした。`,
  },
  extract: {
    keepLabel: '残すページ',
    keepHelp:
      '残したいページをクリックします。最初のページをクリックして最後のページをShiftクリックすると範囲をまとめて選べます。すべて選んでから、不要なページの選択を外すこともできます。',
    orderLabel: '抽出したページの順序',
    orderHelp:
      'ここへページをドラッグすると、新しいドキュメントでの順序を変更できます。元のファイルが書き換わることはありません。',
    orderEmpty: 'まだページが選択されていません — 上のページをクリックすると残せます。',
    orderInTray:
      '抽出したページの順序を変えるには、下のリストでページをドラッグしてください。',
    orderMoved: (from: number, to: number) =>
      `新しいドキュメントの${from}番目の位置から${to}番目の位置に移動しました。`,
    moveUp: '新しいドキュメントでこのページを前へ移す',
    moveDown: '新しいドキュメントでこのページを後ろへ移す',
    remove: 'このページを新しいドキュメントから外す',
    pickerLabel: 'ページ番号で選択',
    pickerHint: 'キーボードや小さい画面でも選びやすいよう、すべてのページをタップ対象にしています。',
    pickerPage: (n: number, total: number) => `${n} / ${total}ページ`,
    pickerOn: (n: number) => `${n}ページ、残す`,
    pickerOff: (n: number) => `${n}ページ、残さない`,
    deselectMeansLeaveOut:
      'このツールがファイルからページを削除することはありません — 単に新しいドキュメントに含まれないだけです。',
    action: '抽出したPDFをダウンロード',
    zeroSelected: '抽出するページを1つ以上選んでください。',
    resultsHeading: (n: number) => `${n}ページを抽出しました`,
    resultsBody:
      '新しいドキュメントは、選んだページだけを表示どおりの順序でデバイス上に再構築されました。元のファイルは変更されていません。',
  },
} satisfies ToolStrings;

export default ja;