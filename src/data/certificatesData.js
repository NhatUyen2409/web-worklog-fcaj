// ============================================================
// CERTIFICATES DATA — Add your certificates here
// ============================================================
//
// HOW TO EDIT:
//  • Duplicate a block to add more certificates.
//  • image: null = placeholder shown. Replace with
//    '/certificates/cert-name.png' after adding file to /public/
//  • badge: emoji displayed on the card when there's no image
//  • color: accent color for this certificate card
//
// ============================================================

export const certificatesData = [
  // ──────────────────────────────────────────────────────────
  // CERTIFICATE 1
  // ──────────────────────────────────────────────────────────
  {
    id:          'cert-1',
    name:        '[Tên chứng chỉ 1]',       // ← e.g. 'AWS Certified Cloud Practitioner'
    issuer:      '[Tổ chức cấp]',            // ← e.g. 'Amazon Web Services'
    date:        '[Tháng, Năm]',             // ← e.g. 'Tháng 9, 2025'
    description: '[Mô tả ngắn về chứng chỉ này và ý nghĩa của nó.]',
    badge:       '☁️',                       // ← emoji shown when no image
    color:       '#CDB4DB',                  // ← accent color
    // Replace null with '/certificates/cert-1.png' when you have the image
    image:       null,
    verifyUrl:   '[https://link-xac-nhan-chung-chi.com]', // ← verification URL or null
  },

  // ──────────────────────────────────────────────────────────
  // CERTIFICATE 2
  // ──────────────────────────────────────────────────────────
  {
    id: 'cert-2',
    name:        '[Tên chứng chỉ 2]',
    issuer:      '[Tổ chức cấp]',
    date:        '[Tháng, Năm]',
    description: '[Mô tả chứng chỉ 2.]',
    badge:       '🏆',
    color:       '#A2D2FF',
    image:       null,
    verifyUrl:   null,
  },

  // ──────────────────────────────────────────────────────────
  // CERTIFICATE 3
  // ──────────────────────────────────────────────────────────
  {
    id: 'cert-3',
    name:        '[Tên chứng chỉ 3]',
    issuer:      '[Tổ chức cấp]',
    date:        '[Tháng, Năm]',
    description: '[Mô tả chứng chỉ 3.]',
    badge:       '🛡️',
    color:       '#FFC8DD',
    image:       null,
    verifyUrl:   null,
  },

  // ──────────────────────────────────────────────────────────
  // CERTIFICATE 4
  // ──────────────────────────────────────────────────────────
  {
    id: 'cert-4',
    name:        '[Tên chứng chỉ 4]',
    issuer:      '[Tổ chức cấp]',
    date:        '[Tháng, Năm]',
    description: '[Mô tả chứng chỉ 4.]',
    badge:       '🐧',
    color:       '#95D5B2',
    image:       null,
    verifyUrl:   null,
  },

  // ──────────────────────────────────────────────────────────
  // Add more certificates by copying the block above ↑
  // ──────────────────────────────────────────────────────────
]
