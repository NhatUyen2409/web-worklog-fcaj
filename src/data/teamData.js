// ============================================================
// TEAM DATA — Edit your team information here
// ============================================================
// Replace every value marked with ← before publishing.
// ============================================================

export const teamData = {
  // ── Group Info ─────────────────────────────────────────────
  groupName:  '[Tên nhóm của bạn]',        // ← e.g. "Cloud Guardian Team"
  groupId:    '[Mã nhóm]',                 // ← e.g. "FCAJ-2026-GRP-07"
  mentor:     '[Tên Mentor AWS]',           // ← your mentor's name
  supervisor: '[Tên giảng viên hướng dẫn]', // ← your university supervisor
  myRole:     '[Vai trò của bạn trong nhóm]', // ← e.g. "Cloud Security Specialist"
  program:    'AWS First Cloud AI Journey 2026',

  // ── Team Members ──────────────────────────────────────────
  // Exactly 4 members. Set isMe: true for YOUR card.
  // avatar: use an emoji or replace with an image path in /public/avatars/
  // ─────────────────────────────────────────────────────────
  members: [
    {
      name:       'Phan Nhật Uyên',            // ← your name
      role:       '[Vai trò của bạn]',          // ← e.g. "Cloud Security Specialist"
      university: 'FPT University',
      avatar:     '👩‍💻',                         // ← emoji or '/avatars/uyen.jpg'
      isMe:       true,                          // ← keep true for YOUR card only
    },
    {
      name:       '[Tên thành viên 2]',         // ← teammate name
      role:       '[Vai trò]',
      university: '[Tên trường]',
      avatar:     '👨‍💻',                         // ← change emoji or use image
      isMe:       false,
    },
    {
      name:       '[Tên thành viên 3]',
      role:       '[Vai trò]',
      university: '[Tên trường]',
      avatar:     '👩‍🔧',
      isMe:       false,
    },
    {
      name:       '[Tên thành viên 4]',
      role:       '[Vai trò]',
      university: '[Tên trường]',
      avatar:     '👨‍🔬',
      isMe:       false,
    },
  ],

  // ── Team Quote (shown at bottom of Team page) ─────────────
  // ← Write a motto or team spirit quote
  quote: '"[Khẩu hiệu nhóm của bạn — e.g. Cloud Guardian Team · Securing the Cloud ☁️🔐]"',
}
