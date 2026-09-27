import type { ToolStrings } from './en';

const ko = {
  dropZone: {
    reading: 'PDF 읽는 중…',
    processingLocally: '로컬에서 처리 중 — 아무것도 업로드되지 않습니다.',
    heading: '여기에 PDF를 드롭하세요',
    or: '또는',
    selectFile: 'PDF 파일 선택',
    hint: '여러 파일을 추가하여 병합 · Ctrl+V로 붙여넣기 · 크기 및 페이지 무제한',
    privacy: '파일이 이 브라우저를 벗어나지 않습니다',
  },
  toolbar: {
    noFile: '파일 없음',
    files: (n: number) => `${n}개 파일`,
    pages: (n: number) => `${n}페이지`,
    undo: '실행 취소 (Ctrl+Z)',
    redo: '다시 실행 (Ctrl+Shift+Z)',
    reverse: '페이지 순서 반전',
    resetLabel: '원래 순서로 재설정',
    reset: '재설정',
    thumbnailSize: '썸네일 크기',
    zoomSm: '작은 썸네일',
    zoomMd: '중간 썸네일',
    zoomLg: '큰 썸네일',
    addPdfs: 'PDF 추가',
    addBlank: '빈 페이지 추가',
    confirm: '확인?',
    startNew: '새로 시작',
    building: '생성 중…',
    download: 'PDF 다운로드',
  },
  pageCard: {
    blankPage: '빈 페이지',
    sourcePage: (name: string, n: number) => `${name}, 원본 페이지 ${n}`,
    rotated: (deg: number) => `, ${deg}도 회전됨`,
    pageOf: (pos: number, total: number) => `${total}페이지 중 ${pos}번째`,
    renderFailed: '이 페이지를 렌더링할 수 없습니다',
    loadingThumbnail: '페이지 썸네일 로딩 중',
    blank: '빈 페이지',
    sourceTitle: (name: string, n: number) => `${name} — 원본 페이지 ${n}`,
    rotatedTitle: (deg: number) => `${deg}도 회전됨`,
    preview: '페이지 미리보기',
    rotate: '시계 방향으로 회전',
    duplicate: '페이지 복제',
    delete: '페이지 삭제',
  },
  pageGrid: {
    dragStart: (n: number) =>
      `${n}번째 페이지를 집어 들었습니다. 화살표 키로 이동하고, Space로 놓으며, Escape로 취소하세요.`,
    dragOver: (n: number) => `페이지가 이제 ${n}번째 위치 위에 있습니다.`,
    dragOut: '페이지가 더 이상 드롭 대상 위에 있지 않습니다.',
    dragEnd: (n: number) => `${n}번째 위치로 이동했습니다.`,
    dragCancel: '이동이 취소되었습니다.',
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `페이지 미리보기, ${total}페이지 중 ${pos}번째`,
    headerBlank: (pos: number, total: number) => `${total}페이지 중 ${pos}번째 — 빈 페이지`,
    headerFile: (pos: number, total: number, name: string) =>
      `${total}페이지 중 ${pos}번째 — ${name}`,
    close: '미리보기 닫기',
    prev: '이전 페이지',
    next: '다음 페이지',
    alt: (pos: number) => `${pos}번째 페이지 미리보기`,
  },
  password: {
    dialogLabel: 'PDF 비밀번호 필요',
    heading: '비밀번호 필요',
    thisPdf: '이 PDF',
    bodySuffix: '는 보호되어 있습니다. 기기에서 열려면 비밀번호를 입력하세요.',
    retry: '그 비밀번호가 작동하지 않았습니다 — 다시 시도하세요.',
    placeholder: 'PDF 비밀번호',
    cancel: '취소',
    unlock: '잠금 해제',
  },
  success: {
    heading: 'PDF가 준비되었습니다',
    body: '순서가 변경된 PDF가 기기로 다운로드되었습니다. 아무것도 업로드되지 않았습니다 — 모든 것이 브라우저에서 직접 발생했습니다.',
    pages: (n: number) => `${n}페이지`,
    building: '생성 중…',
    downloadAgain: '다시 다운로드',
    startNew: '새로 시작',
    backToEditing: '편집으로 돌아가기',
  },
  rating: {
    label: '이 도구를 5점 만점에 평가하세요',
    star: (n: number) => `${n}점`,
    announced: (value: number) =>
      `5점 만점에 ${value}점을 주셨습니다. 피드백 감사합니다!`,
    thanks: '피드백 감사합니다!',
    prompt: '어떻게 하셨나요?',
  },
  batch: {
    label: '선택한 페이지에 대한 작업',
    selected: (n: number) => `${n}개 페이지 선택됨`,
    rotate: '회전',
    duplicate: '복제',
    delete: '삭제',
    all: '전체',
    clear: '선택 해제',
  },
  toasts: {
    dismiss: '알림 닫기',
  },
  tool: {
    pagesReady: (n: number) => `${n}개 페이지 순서 변경 준비 완료.`,
    filesSkippedPdf: (n: number) =>
      `${n}개 파일을 건너뛰었습니다 — PDF 파일만 지원합니다.`,
    readFailed: (name: string) => `${name}을(를) 읽을 수 없습니다.`,
    openFailed: (name: string) =>
      `${name}을(를) 열 수 없습니다 — 손상되었거나 유효한 PDF가 아닐 수 있습니다.`,
    readingFile: (name: string) => `${name} 읽는 중…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `${name} 읽는 중 (${i}/${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n}개 파일을 건너뛰었습니다 — 비밀번호가 입력되지 않았습니다.`,
    encryptedInfo:
      '이 PDF는 암호화되어 있습니다. 여기서 순서를 변경할 수 있지만, 암호화된 파일의 다운로드 재구성은 지원되지 않습니다 — 다운로드 버튼에 수정 방법이 설명되어 있습니다.',
    allSelected: '모든 페이지가 선택되었습니다.',
    rotated: (n: number) => `${n}개 페이지 회전됨.`,
    duplicated: (n: number) => `${n}개 페이지 복제됨.`,
    deleted: (n: number) => `${n}개 페이지 삭제됨.`,
    reversed: '페이지 순서가 반전되었습니다.',
    restored: '원래 페이지 순서가 복원되었습니다.',
    blankAdded: '빈 페이지가 끝에 추가되었습니다 — 어디든 드래그하세요.',
    blankDocName: '빈 페이지',
    noPagesLeft: '남은 페이지 없음',
    noPagesHint: '삭제를 실행 취소하거나, 더 많은 PDF를 추가하거나, 새로 시작하세요.',
    undo: '실행 취소',
    addPdfs: 'PDF 추가',
    dropOverlay: 'PDF를 드롭하여 페이지 추가',
    encryptedTitle: '이 PDF는 암호화되어 있어 다운로드할 수 없습니다.',
    encryptedBody1:
      '페이지 순서를 변경하고, 회전하고, 미리볼 수 있지만, 암호화된 파일은 기기에서 재구성할 수 없습니다. 먼저 비밀번호를 제거하세요 (열고 ',
    encryptedStrong: '인쇄 → PDF로 저장',
    encryptedBody2:
      '을 사용하거나, PDF 앱의 "보안 제거" 옵션을 사용한 다음, 잠금 해제된 사본을 여기서 추가하세요.',
    encryptedDownloadToast:
      '이 파일은 암호화되어 있어 로컬에서 재구성할 수 없습니다. 비밀번호를 제거하세요 (열고 인쇄 → PDF로 저장 또는 PDF 앱의 "보안 제거" 옵션을 사용한 다음, 사본을 여기서 추가하고 다운로드하세요.',
    exportFailed:
      '이 PDF를 기기에서 재구성할 수 없습니다. 암호화되었거나 우리가 복사할 수 없는 구조를 사용할 수 있습니다. 비밀번호 없는 PDF을 시도하거나, 먼저 PDF 앱에서 다시 내보내세요.',
    downloaded: (name: string) => `${name}이(가) 다운로드되었습니다.`,
    undone: '실행 취소됨.',
    redone: '다시 실행됨.',
  },
  shared: {
    memoryNote:
      '업로드되는 것이 없으므로 크기 제한도 없습니다 — 다만 대기열도 없습니다. 아주 크거나 해상도가 높은 문서를 다시 만드는 동안 기기 메모리를 더 많이 쓰기 때문에, 몇백 쪽은 여유롭지만 1,000쪽짜리 스캔은 오래된 휴대전화에서 느려질 수 있습니다.',
    byteForByte:
      '페이지는 원본 파일에서 그대로 복사되며, 다시 렌더링되거나 다시 압축되는 일은 없기 때문에, 화질은 원본과 같습니다.',
    selectAllPages: '모든 페이지 선택',
    clearSelection: '선택 해제',
    selectedCount: (n: number) => `${n}개 페이지 선택됨`,
    nothingSelected: '선택된 페이지가 없습니다.',
  },
  split: {
    modeLabel: '분할 모드',
    modeRange: '범위로 나누기',
    modeEvery: '페이지 한 장씩',
    rangeLabel: '페이지 범위',
    rangePlaceholder: '1-4, 9, 15-20',
    rangeHelp: '범위마다 파일 하나씩, 적힌 순서대로 만들어집니다.',
    rangeAppend: '아래에서 페이지를 클릭해 범위에 추가하세요.',
    orderLocked:
      '페이지 번호는 항상 원본 문서의 순서를 따릅니다 — 분할해도 파일은 바뀌지 않습니다.',
    pageControlsDisabled:
      '회전, 복제, 삭제는 편집기에서 하는 일이며 여기서는 아무 일도 일어나지 않습니다 — 분할해도 파일은 바뀌지 않습니다. 어떤 페이지를 담을지 바꾸려면 "PDF 페이지 추출" 도구를 사용하세요.',
    errorEmpty: '페이지 범위를 하나 이상 입력하거나 "페이지 한 장씩"으로 바꾸세요.',
    errorZero: '페이지 번호는 1부터 시작합니다.',
    errorSyntax: (part: string) =>
      `${part}은(는) 페이지 번호가 아닙니다. 쉼표와 하이픈으로 구분한 숫자를 쓰세요 — 예를 들면 1-4, 9, 15-20입니다.`,
    errorUnfinished: (part: string) => `${part}에는 페이지 번호가 빠져 있습니다.`,
    errorTrailing:
      '끝에 남은 쉼표를 지우거나, 마지막 범위를 페이지 번호로 마무리하세요.',
    errorReversed: (part: string) =>
      `${part}은(는) 거꾸로 되어 있습니다. 3-7처럼 반대 순서로 적으세요.`,
    errorOutOfBounds: (max: number) =>
      `그 범위는 마지막 페이지를 넘어섭니다. 이 문서는 ${max}페이지입니다.`,
    planLabel: '생성될 파일',
    planEmpty: '범위를 입력하면 만들어질 파일을 볼 수 있습니다.',
    planItem: (part: number, label: string, pages: number) => `${label} — ${pages}페이지`,
    planCount: (n: number) => `${n}개 파일이 만들어집니다`,
    action: '분할하고 다운로드',
    working: '분할 중…',
    progress: (done: number, total: number) => `총 ${total}개 중 ${done}개를 만들었습니다.`,
    confirmTitle: (n: number) => `별도 파일 ${n}개가 만들어집니다.`,
    confirmBody:
      '브라우저가 여러 파일을 한 번에 다운로드해도 되는지 묻을 수 있습니다. 만드는 데는 잠시 시간이 걸립니다. 계속할까요?',
    confirmAction: (n: number) => `파일 ${n}개 다운로드`,
    cancel: '취소',
    resultsHeading: (n: number) => `${n}개 파일을 만들었습니다`,
    resultsHeadingNone: '아무것도 만들어지지 않았습니다',
    resultsBody:
      '각 문서는 기기에서 다시 만들어져 따로 저장되었습니다. 업로드된 것은 없으며, 페이지가 다시 렌더링된 것도 아닙니다 — 화질은 원본과 같습니다.',
    resultsFailed: (n: number) => `${n}개 파일을 만들지 못했습니다`,
    resultPending: '생성되지 않음',
    partialFailure: (done: number, failed: number) =>
      `${done}개 파일을 만들고 ${failed}개는 실패했습니다. 나머지는 이미 다운로드 폴더에 있습니다.`,
    allFailed: '어떤 파일도 만들지 못했습니다. 원본 파일은 변경되지 않았습니다.',
    exportFailedOne: (name: string) => `${name}을(를) 만들지 못했습니다.`,
  },
  extract: {
    keepLabel: '남길 페이지',
    keepHelp:
      '남길 페이지를 클릭하세요. 첫 페이지를 클릭한 뒤 Shift를 누른 채 마지막 페이지를 누르면 범위 전체가 선택되고, 모두 고른 다음 필요 없는 페이지만 해제해도 됩니다.',
    orderLabel: '추출한 페이지의 순서',
    orderHelp:
      '여기에 페이지를 드래그하면 새 문서에서 나오는 순서가 바뀝니다. 원본 파일은 변경되지 않습니다.',
    orderEmpty: '아직 고른 페이지가 없습니다 — 위에서 페이지를 클릭해 남기세요.',
    orderInTray:
      '추출한 페이지의 순서를 바꾸려면 아래 목록에서 드래그하세요.',
    orderMoved: (from: number, to: number) =>
      `새 문서의 ${from}번째 위치에서 ${to}번째 위치로 옮겼습니다.`,
    moveUp: '이 페이지를 새 문서에서 앞으로 옮기기',
    moveDown: '이 페이지를 새 문서에서 뒤로 옮기기',
    remove: '이 페이지를 새 문서에 넣지 않기',
    pickerLabel: '번호로 페이지 선택',
    pickerHint:
      '키보드와 작은 화면을 위해 모든 페이지를 누를 수 있는 대상으로 둡니다.',
    pickerPage: (n: number, total: number) => `${total}페이지 중 ${n}번째`,
    pickerOn: (n: number) => `${n}번째 페이지, 남김`,
    pickerOff: (n: number) => `${n}번째 페이지, 남기지 않음`,
    deselectMeansLeaveOut:
      '이 도구는 파일에서 페이지를 지우지 않습니다 — 그 페이지는 새 문서에 포함되지 않을 뿐입니다.',
    action: '추출한 PDF 다운로드',
    zeroSelected: '추출할 페이지를 하나 이상 고르세요.',
    resultsHeading: (n: number) => `${n}개 페이지를 추출했습니다`,
    resultsBody:
      '새 문서는 고른 페이지만을 보여드린 순서대로 기기에서 다시 만들어졌습니다. 원본 파일은 변경되지 않았습니다.',
  },
} satisfies ToolStrings;

export default ko;