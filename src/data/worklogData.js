// ============================================================
// WORKLOG DATA — Fill in your weekly internship diary here
// ============================================================
//
// HOW TO EDIT:
//  • There are 12 week entries below, one per week.
//  • Replace every "[...]" bracket with your actual content.
//  • For lists (tasks, awsServices, technologies), add items
//    as strings inside the array: ['item 1', 'item 2', ...]
//  • status options: 'Completed' | 'In Progress' | 'Pending'
//  • accentColor: pastel hex used for the week's card accent
//  • screenshot: leave null until you add an actual image path
//    e.g. '/screenshots/week01.png'  (place files in /public/)
//
// ============================================================

// Accent colors to cycle through each week — feel free to reuse
const COLORS = ['#CDB4DB','#A2D2FF','#FFC8DD','#95D5B2','#BDE0FE','#FFCFD2',
                 '#CDB4DB','#A2D2FF','#FFC8DD','#95D5B2','#BDE0FE','#FFCFD2']

export const worklogData = [
  // ──────────────────────────────────────────────────────────
  // WEEK 01
  // ──────────────────────────────────────────────────────────
  {
    week:        1,
    accentColor: COLORS[0],
    status:      'Pending', // ← change to 'In Progress' or 'Completed'

    // ↓ Replace these with your actual week 1 content
    title:     '[Tiêu đề Tuần 01 — e.g. Làm quen FCAJ & Cài đặt AWS CLI]',
    dateRange: '[dd/mm/yyyy – dd/mm/yyyy]', // ← actual date range
    category:  '[Chủ đề — e.g. Cloud Fundamentals]',
    objective: '[Mục tiêu của tuần này là gì?]',

    tasks: [
      '[Nhiệm vụ 1]',
      '[Nhiệm vụ 2]',
      '[Nhiệm vụ 3]',
      // add more lines as needed
    ],

    awsServices: [
      // ← AWS services you used this week, e.g. 'IAM', 'EC2', 'S3'
    ],

    technologies: [
      // ← Tools and technologies, e.g. 'Linux', 'Python', 'AWS CLI'
    ],

    results: [
      '[Kết quả đạt được 1]',
      '[Kết quả đạt được 2]',
    ],

    reflection: '[Cảm nhận / Bài học rút ra trong tuần này.]',

    // Daily breakdown — Mon–Fri
    dailyBreakdown: [
      { day: 'Mon', task: '[Công việc ngày thứ 2]' },
      { day: 'Tue', task: '[Công việc ngày thứ 3]' },
      { day: 'Wed', task: '[Công việc ngày thứ 4]' },
      { day: 'Thu', task: '[Công việc ngày thứ 5]' },
      { day: 'Fri', task: '[Công việc ngày thứ 6]' },
    ],

    // Screenshot: null = show placeholder box
    // Replace with '/screenshots/week01.png' after adding your image to /public/
    screenshot: null,
    screenshotCaption: '[Chú thích ảnh minh họa tuần 01]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 02
  // ──────────────────────────────────────────────────────────
  {
    week: 2, accentColor: COLORS[1], status: 'Pending',
    title: '[Tiêu đề Tuần 02]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 02]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 02]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 02]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 03
  // ──────────────────────────────────────────────────────────
  {
    week: 3, accentColor: COLORS[2], status: 'Pending',
    title: '[Tiêu đề Tuần 03]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 03]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 03]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 03]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 04
  // ──────────────────────────────────────────────────────────
  {
    week: 4, accentColor: COLORS[3], status: 'Pending',
    title: '[Tiêu đề Tuần 04]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 04]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 04]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 04]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 05
  // ──────────────────────────────────────────────────────────
  {
    week: 5, accentColor: COLORS[4], status: 'Pending',
    title: '[Tiêu đề Tuần 05]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 05]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 05]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 05]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 06
  // ──────────────────────────────────────────────────────────
  {
    week: 6, accentColor: COLORS[5], status: 'Pending',
    title: '[Tiêu đề Tuần 06]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 06]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 06]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 06]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 07
  // ──────────────────────────────────────────────────────────
  {
    week: 7, accentColor: COLORS[6], status: 'Pending',
    title: '[Tiêu đề Tuần 07]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 07]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 07]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 07]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 08
  // ──────────────────────────────────────────────────────────
  {
    week: 8, accentColor: COLORS[7], status: 'Pending',
    title: '[Tiêu đề Tuần 08]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 08]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 08]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 08]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 09
  // ──────────────────────────────────────────────────────────
  {
    week: 9, accentColor: COLORS[8], status: 'Pending',
    title: '[Tiêu đề Tuần 09]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 09]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 09]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 09]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 10
  // ──────────────────────────────────────────────────────────
  {
    week: 10, accentColor: COLORS[9], status: 'Pending',
    title: '[Tiêu đề Tuần 10]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 10]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 10]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 10]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 11
  // ──────────────────────────────────────────────────────────
  {
    week: 11, accentColor: COLORS[10], status: 'Pending',
    title: '[Tiêu đề Tuần 11]', dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 11]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả 1]'],
    reflection: '[Cảm nhận tuần 11]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 11]',
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 12
  // ──────────────────────────────────────────────────────────
  {
    week: 12, accentColor: COLORS[11], status: 'Pending',
    title: '[Tiêu đề Tuần 12 — Tổng kết & Bảo vệ]',
    dateRange: '[dd/mm/yyyy – dd/mm/yyyy]',
    category: '[Chủ đề]', objective: '[Mục tiêu tuần 12]',
    tasks: ['[Nhiệm vụ 1]', '[Nhiệm vụ 2]'],
    awsServices: [], technologies: [],
    results: ['[Kết quả tổng kết]'],
    reflection: '[Cảm nhận cuối chương trình FCAJ 2026]',
    dailyBreakdown: [
      { day: 'Mon', task: '[Thứ 2]' }, { day: 'Tue', task: '[Thứ 3]' },
      { day: 'Wed', task: '[Thứ 4]' }, { day: 'Thu', task: '[Thứ 5]' },
      { day: 'Fri', task: '[Thứ 6]' },
    ],
    screenshot: null, screenshotCaption: '[Chú thích ảnh tuần 12]',
  },
]
