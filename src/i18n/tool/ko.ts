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
      `${n}번째 페이지를 선택했습니다. 화살표 키로 이동하고, Space로 놓으세요.`,
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
    bodySuffix: '은(는) 보호되어 있습니다. 기기에서 열려면 비밀번호를 입력하세요.',
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
      `${value}점 중 5점을 평가하셨습니다. 피드백 감사합니다!`,
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
} satisfies ToolStrings;

export default ko;