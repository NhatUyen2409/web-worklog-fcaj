// ============================================================
// WORKSHOP DATA — Edit your workshop details here
// ============================================================
//
// HOW TO EDIT:
//  • Replace every "[...]" bracket with your real content.
//  • architectureImage: null = placeholder box shown.
//    Set to '/workshop/architecture.png' after adding the file
//    to your /public/workshop/ folder.
//  • awsServices: list strings in the array.
//  • notes: array of bullet-point strings.
//
// ============================================================

export const workshopData = {
  // ── Header ──────────────────────────────────────────────────
  title:    '[Tên Workshop / Tên buổi thực hành chính]',
  subtitle: '[Mô tả phụ 1 dòng — e.g. "AWS Cloud Security Bootcamp · FCAJ 2026"]',
  date:     '[dd/mm/yyyy]',           // ← Workshop date
  duration: '[e.g. 8 giờ / 2 ngày]', // ← Duration
  location: '[Online / HCM City / Hà Nội]',
  organizer:'AWS Vietnam — First Cloud AI Journey',

  // ── Overview ────────────────────────────────────────────────
  // 2–4 sentences describing what the workshop is about
  overview:
    '[Viết tổng quan về workshop tại đây. Workshop này học gì? ' +
    'Ai tổ chức? Dành cho đối tượng nào?]',

  // ── Objectives ──────────────────────────────────────────────
  // Each item becomes a bullet point
  objectives: [
    '[Mục tiêu 1 — e.g. Hiểu kiến trúc AWS 3-tier]',
    '[Mục tiêu 2]',
    '[Mục tiêu 3]',
    '[Mục tiêu 4]',
    // add more as needed
  ],

  // ── AWS Services covered ────────────────────────────────────
  awsServices: [
    // ← e.g. 'VPC', 'EC2', 'IAM', 'S3', 'CloudWatch', 'GuardDuty'
    '[Dịch vụ AWS 1]',
    '[Dịch vụ AWS 2]',
    '[Dịch vụ AWS 3]',
  ],

  // ── Lab Sections ────────────────────────────────────────────
  // Each section is a hands-on lab or module in the workshop
  sections: [
    {
      id:          'lab-1',
      title:       '[Tên Lab 1 — e.g. Lab 01: Thiết kế VPC Multi-tier]',
      duration:    '[e.g. 90 phút]',
      description: '[Mô tả ngắn về lab 1 và những gì bạn thực hành.]',
      tasks: [
        '[Bước 1]',
        '[Bước 2]',
        '[Bước 3]',
      ],
      outcome:    '[Kết quả sau khi hoàn thành lab 1]',
      screenshot:  null, // ← set to '/workshop/lab1.png' when ready
    },
    {
      id:          'lab-2',
      title:       '[Tên Lab 2]',
      duration:    '[e.g. 60 phút]',
      description: '[Mô tả lab 2]',
      tasks:       ['[Bước 1]', '[Bước 2]'],
      outcome:     '[Kết quả lab 2]',
      screenshot:  null,
    },
    {
      id:          'lab-3',
      title:       '[Tên Lab 3]',
      duration:    '[e.g. 90 phút]',
      description: '[Mô tả lab 3]',
      tasks:       ['[Bước 1]', '[Bước 2]'],
      outcome:     '[Kết quả lab 3]',
      screenshot:  null,
    },
    // Duplicate a block above ↑ to add more labs
  ],

  // ── Architecture Diagram ────────────────────────────────────
  // null = placeholder box. Set to '/workshop/architecture.png'
  // after placing your diagram in the /public/workshop/ folder.
  architectureImage:   null,
  architectureCaption: '[Mô tả sơ đồ kiến trúc — e.g. "AWS 3-tier Architecture Workshop"]',

  // ── Key Takeaways / Notes ───────────────────────────────────
  notes: [
    '[Bài học / ghi chú quan trọng 1]',
    '[Bài học / ghi chú quan trọng 2]',
    '[Bài học / ghi chú quan trọng 3]',
    // add more as needed
  ],

  // ── Resources / Links ───────────────────────────────────────
  resources: [
    { label: '[Tên tài liệu 1]', url: '#' }, // ← replace # with real URL
    { label: '[Tên tài liệu 2]', url: '#' },
  ],
}
