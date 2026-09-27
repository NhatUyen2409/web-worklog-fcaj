// ============================================================
// PROJECTS DATA — Fill in your project details here
// ============================================================
//
// HOW TO EDIT:
//  • Replace every "[...]" bracket with your real project info.
//  • technologies: list as strings in the array.
//  • image: null = show a placeholder. Replace with
//    '/projects/project-1.png' after adding your image to /public/
//  • status: 'Completed' | 'In Progress'
//  • badgeColor: accent color for this card (pastel hex)
//
// ============================================================

export const projectsData = [
  // ──────────────────────────────────────────────────────────
  // PROJECT 1
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-1',
    code:  '[PROJECT-CODE-1]',  // ← e.g. 'AWS-SEC-01'

    title:    '[Tên dự án 1]',
    subtitle: '[Mô tả ngắn 1 dòng]',

    // Short description shown on the card
    shortDescription: '[Mô tả ngắn về dự án 1. Dự án này làm gì? Giải quyết vấn đề gì?]',

    // Expanded description shown after clicking "Read More"
    longDescription:
      '[Mô tả chi tiết về dự án 1. Bối cảnh, phương pháp, công cụ sử dụng và kết quả đạt được.]',

    // Technologies and tools used
    technologies: [
      // e.g. 'AWS', 'Python', 'Linux', 'VPC', 'EC2'
      '[Công nghệ 1]',
      '[Công nghệ 2]',
    ],

    // Key features / highlights
    features: [
      '[Tính năng hoặc điểm nổi bật 1]',
      '[Tính năng hoặc điểm nổi bật 2]',
    ],

    // Metrics shown as stat boxes on the card
    metrics: [
      { label: '[Chỉ số 1]', value: '[Giá trị]' },
      { label: '[Chỉ số 2]', value: '[Giá trị]' },
      { label: '[Chỉ số 3]', value: '[Giá trị]' },
    ],

    category:   '[Danh mục — e.g. Cloud Security]',
    status:     'In Progress',      // ← 'Completed' or 'In Progress'
    timeline:   '[Thời gian thực hiện — e.g. Tuần 1–6 · FCAJ 2026]',
    badgeColor: '#CDB4DB',          // ← accent color for this card

    // Image: null = placeholder shown. Set to '/projects/p1.png' when ready.
    image: null,
    imageCaption: '[Chú thích ảnh dự án 1]',
  },

  // ──────────────────────────────────────────────────────────
  // PROJECT 2
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-2',
    code:  '[PROJECT-CODE-2]',
    title:            '[Tên dự án 2]',
    subtitle:         '[Mô tả ngắn 1 dòng]',
    shortDescription: '[Mô tả ngắn về dự án 2.]',
    longDescription:  '[Mô tả chi tiết dự án 2.]',
    technologies:     ['[Công nghệ 1]', '[Công nghệ 2]'],
    features:         ['[Tính năng 1]', '[Tính năng 2]'],
    metrics: [
      { label: '[Chỉ số 1]', value: '[Giá trị]' },
      { label: '[Chỉ số 2]', value: '[Giá trị]' },
      { label: '[Chỉ số 3]', value: '[Giá trị]' },
    ],
    category: '[Danh mục]', status: 'In Progress',
    timeline: '[Thời gian]', badgeColor: '#A2D2FF',
    image: null, imageCaption: '[Chú thích ảnh dự án 2]',
  },

  // ──────────────────────────────────────────────────────────
  // PROJECT 3
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-3',
    code:  '[PROJECT-CODE-3]',
    title:            '[Tên dự án 3]',
    subtitle:         '[Mô tả ngắn 1 dòng]',
    shortDescription: '[Mô tả ngắn về dự án 3.]',
    longDescription:  '[Mô tả chi tiết dự án 3.]',
    technologies:     ['[Công nghệ 1]', '[Công nghệ 2]'],
    features:         ['[Tính năng 1]', '[Tính năng 2]'],
    metrics: [
      { label: '[Chỉ số 1]', value: '[Giá trị]' },
      { label: '[Chỉ số 2]', value: '[Giá trị]' },
      { label: '[Chỉ số 3]', value: '[Giá trị]' },
    ],
    category: '[Danh mục]', status: 'In Progress',
    timeline: '[Thời gian]', badgeColor: '#FFC8DD',
    image: null, imageCaption: '[Chú thích ảnh dự án 3]',
  },

  // ──────────────────────────────────────────────────────────
  // PROJECT 4
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-4',
    code:  '[PROJECT-CODE-4]',
    title:            '[Tên dự án 4]',
    subtitle:         '[Mô tả ngắn 1 dòng]',
    shortDescription: '[Mô tả ngắn về dự án 4.]',
    longDescription:  '[Mô tả chi tiết dự án 4.]',
    technologies:     ['[Công nghệ 1]', '[Công nghệ 2]'],
    features:         ['[Tính năng 1]', '[Tính năng 2]'],
    metrics: [
      { label: '[Chỉ số 1]', value: '[Giá trị]' },
      { label: '[Chỉ số 2]', value: '[Giá trị]' },
      { label: '[Chỉ số 3]', value: '[Giá trị]' },
    ],
    category: '[Danh mục]', status: 'In Progress',
    timeline: '[Thời gian]', badgeColor: '#95D5B2',
    image: null, imageCaption: '[Chú thích ảnh dự án 4]',
  },
]
