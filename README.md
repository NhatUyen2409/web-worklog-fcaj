# 📋 FCJ Internship Report - Hướng dẫn sử dụng

Đây là bản Hugo site cá nhân của bạn, được tạo từ template **fcj-workshop-template** của First Cloud AI Journey (FCAJ).

---

## 🚀 Cấu trúc thư mục

```
D:\Worklog_FCAJ\
├── config.toml              ← Cấu hình chính (tên, ngôn ngữ...)
├── content/
│   ├── _index.md            ← Trang chủ (Tiếng Anh)
│   ├── _index.vi.md         ← Trang chủ (Tiếng Việt) ← BẮT ĐẦU TỪ ĐÂY
│   ├── 1-Worklog/           ← Nhật ký làm việc theo tuần
│   ├── 2-Proposal/          ← Đề xuất dự án
│   ├── 3-BlogsPosted/       ← Các bài blog đã đăng
│   ├── 4-EventParticipated/ ← Các sự kiện đã tham gia
│   ├── 5-Workshop/          ← Workshop thực hành
│   ├── 6-Self-evaluation/   ← Tự đánh giá
│   └── 7-Feedback/          ← Góp ý, phản hồi
├── static/
│   └── images/
│       └── avatar.png       ← ĐỔI ảnh đại diện của bạn vào đây
└── themes/hugo-theme-learn/ ← Theme (không cần chỉnh)
```

---

## ✏️ Các bước cần làm

### 1. Điền thông tin cá nhân
Mở 2 file sau và thay thế tất cả `[PLACEHOLDER]`:

- [`content/_index.vi.md`](content/_index.vi.md) — trang chủ Tiếng Việt
- [`content/_index.md`](content/_index.md) — trang chủ Tiếng Anh

Cũng cập nhật email trong [`config.toml`](config.toml) tại dòng `author`.

### 2. Thay ảnh đại diện
Thay file `static/images/avatar.png` bằng ảnh của bạn (giữ nguyên tên file hoặc cập nhật đường dẫn trong `_index.md`).

### 3. Điền Worklog theo tuần
Vào thư mục `content/1-Worklog/` — mỗi tuần có file `_index.md` (EN) và `_index.vi.md` (VI).
Mỗi file tuần có cấu trúc:
- **Mục tiêu tuần**
- **Bảng task theo ngày** (ngày, công việc, ngày bắt đầu, ngày hoàn thành, tài liệu tham khảo)
- **Thành tích đạt được**

### 4. Điền các section còn lại
- `2-Proposal/` — Đề xuất dự án của bạn
- `3-BlogsPosted/` — Link các bài blog đã viết
- `4-EventParticipated/` — Các sự kiện/webinar đã tham gia
- `5-Workshop/` — Workshop bạn đã thực hiện
- `6-Self-evaluation/` — Tự đánh giá bản thân
- `7-Feedback/` — Góp ý về chương trình

---

## 🖥️ Chạy local để xem trước

> **Yêu cầu:** Cài [Hugo](https://gohugo.io/installation/) trên máy.

```powershell
# Chạy Hugo dev server
hugo server -D

# Mở trình duyệt tại:
# http://localhost:1313
```

---

## 🌐 Deploy lên GitHub Pages

1. Tạo repo mới trên GitHub (ví dụ: `my-fcj-report`)
2. Push code lên repo
3. Cấu hình GitHub Actions (file `.github/workflows/` đã có sẵn)
4. Cập nhật `baseURL` trong `config.toml` thành URL của GitHub Pages

---

## 💡 Mẹo

- Mỗi file `.md` = Tiếng Anh, mỗi file `.vi.md` = Tiếng Việt
- Hugo tự động nhận diện ngôn ngữ qua phần mở rộng file
- Ảnh đặt trong `static/images/` — khi dùng trong markdown viết `/images/ten-anh.png`
- Dùng `{{% notice warning %}}...{{% /notice %}}` để tạo hộp cảnh báo
- Dùng `{{% notice info %}}...{{% /notice %}}` để tạo hộp thông tin
"# worklog-fcaj" 
