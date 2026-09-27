# 🚀 Worklog Management System (FCAJ)

Ứng dụng quản lý nhật ký thực tập, dự án và báo cáo tổng kết chuẩn hóa, hỗ trợ song ngữ **Tiếng Việt 🇻🇳 & Tiếng Anh 🇬🇧**.

---

## 🌟 Tính năng chính (Key Features)

- **Song ngữ Anh - Việt (Bilingual):** Chuyển đổi ngôn ngữ tức thì với 1 cú click ngay trên Header (`🇻🇳 VI | 🇬🇧 EN`) hoặc qua trang Cài đặt.
- **Nhật ký công việc hàng ngày (Daily Worklog):** Ghi chép chi tiết công việc, thời gian thực tế, kết quả đạt được, tài liệu tham khảo và liên kết dự án.
- **Theo dõi tiến độ 12 tuần (Weekly Worklog):** Tự động thống kê số giờ làm việc, tiến độ từng tuần và tóm tắt theo tuần.
- **Quản lý dự án (Projects Management):** Theo dõi các dự án thực tập, nhãn màu nhận diện và tiến độ % hoàn thành.
- **Kho tài liệu tham khảo (Learning References):** Lưu trữ tài liệu, khóa học, tài liệu AWS, danh mục phân loại.
- **Báo cáo tổng kết & Xuất PDF (Final Report):** Xem trước và in/xuất báo cáo định dạng chuẩn song ngữ cho kỳ thực tập.
- **Bảng điều khiển thông minh (Dashboard):** Thống kê tổng quan, chuỗi ngày làm việc đều đặn, cảnh báo các ngày chưa ghi nhật ký.
- **Quản lý dữ liệu linh hoạt (Settings):** Cung cấp tính năng dọn sạch dữ liệu mẫu (Clear Sample Data) để người dùng tự nhập dữ liệu thực tế.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons, Zustand (State Management), React Hook Form, Sonner (Toasts).
- **Backend:** Node.js, Express 5, TypeScript, Prisma ORM.
- **Database:** SQLite (`dev.db`).

---

## ⚡ Hướng dẫn cài đặt & Chạy ứng dụng (Quick Start)

### 1. Yêu cầu hệ thống
- **Node.js:** v18 trở lên (Khuyến nghị v20+)
- **NPM:** Đi kèm Node.js

### 2. Cài đặt thư viện (Install Dependencies)
Tại thư mục gốc `worklog-app`:
```bash
# Cài đặt dependencies cho cả Client và Server
npm run setup
```
*(Hoặc vào từng thư mục `client` và `server` chạy `npm install`)*

### 3. Cấu hình cơ sở dữ liệu (Database Setup)
```bash
# Tạo file .env cho server (nếu chưa có)
cd server
copy .env.example .env

# Chạy migrate Prisma để tạo cấu trúc bảng SQLite
npx prisma migrate dev --name init

# (Tùy chọn) Khởi tạo dữ liệu mẫu ban đầu
npm run db:seed
```

### 4. Khởi động ứng dụng (Run App)
Quay lại thư mục `worklog-app`:
```bash
npm run dev
```

Hoặc trên Windows, bạn chỉ cần nhấp đúp chuột vào file:
👉 **`start.bat`** (tại thư mục gốc hoặc trong thư mục `worklog-app`)

- **Giao diện Client:** `http://localhost:5173`
- **Backend API:** `http://localhost:3001`

---

## 📁 Cấu trúc thư mục (Folder Structure)

```
worklog-app/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/     # Components giao diện (Header, Sidebar...)
│   │   ├── i18n/           # Từ điển đa ngôn ngữ (translations.ts, useTranslation.ts)
│   │   ├── pages/          # Các trang chức năng (Dashboard, DailyWorklog, Profile...)
│   │   ├── services/       # API client kết nối Backend
│   │   └── store/          # Zustand store
│   └── package.json
├── server/                 # Backend Express + Prisma
│   ├── prisma/             # Prisma schema & SQLite dev.db
│   ├── src/                # Controllers, routes, services
│   └── package.json
├── package.json            # Root package scripts
├── start.bat               # File khởi động 1-click cho Windows
└── README.md
```

---

## 📄 Bản quyền (License)
Dự án được phát triển phục vụ chương trình thực tập **First Cloud AI Journey (FCAJ)**.
