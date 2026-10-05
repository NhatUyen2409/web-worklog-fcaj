# AWS First Cloud AI Journey (FCAJ) - Internship Report
## Báo cáo thực tập tốt nghiệp :: Phan Nhat Uyen

Trang web báo cáo thực tập chính thức được chuẩn hóa 100% theo mẫu của chương trình **AWS First Cloud AI Journey** ([https://workshop-sample.awsfcaj.com/](https://workshop-sample.awsfcaj.com/)).

---

### 🌐 1. Public GitHub Pages URL

Website được triển khai trực tiếp lên **GitHub Pages** tại URL chính thức:

👉 **[https://nhatuyen2409.github.io/web-worklog-fcaj/](https://nhatuyen2409.github.io/web-worklog-fcaj/)**

- **GitHub Username:** `NhatUyen2409`
- **Repository Name:** `web-worklog-fcaj`
- **Repository URL:** `https://github.com/NhatUyen2409/web-worklog-fcaj`

---

### 🚀 2. Hướng dẫn Deploy lên GitHub Pages (Chỉ cần Push Code)

Dự án đã được cấu hình sẵn toàn bộ:
- File `.nojekyll` giúp GitHub Pages nhận diện chính xác toàn bộ tài nguyên.
- File `404.html` tích hợp cơ chế SPA URL Redirect tự động, đảm bảo mọi route con hoạt động trơn tru khi truy cập trực tiếp hoặc khi bấm F5/refresh trình duyệt.
- Workflow GitHub Actions `.github/workflows/deploy.yml` tự động build và deploy lên GitHub Pages mỗi khi bạn push code lên branch `main` hoặc `master`.
- File `.gitignore` bảo vệ tự động các file credentials, private keys (*.pem, *.csv).
- Toàn bộ đường dẫn asset và mã nguồn sử dụng đường dẫn tương đối, không hard-code localhost hay cổng máy chủ.

#### Các bước thực hiện:

1. **Khởi tạo Git và Commit mã nguồn (nếu chưa khởi tạo):**
   Mở PowerShell hoặc Terminal tại thư mục `C:\Users\Uyen\Documents\AWS`:
   ```bash
   cd C:\Users\Uyen\Documents\AWS
   git init
   git add .
   git commit -m "Deploy AWS FCAJ Internship Report to GitHub Pages"
   git branch -M main
   ```

2. **Tạo Repository mới trên GitHub:**
   - Truy cập [https://github.com/new](https://github.com/new)
   - Đặt tên Repository (ví dụ: `aws-internship-report` hoặc `internship-report`)
   - Chọn chế độ **Public**
   - Không tick chọn "Initialize this repository with a README"
   - Bấm **Create repository**

3. **Liên kết và Push lên GitHub:**
   ```bash
   git remote add origin https://github.com/<tên-tài-khoản-github>/<tên-repository>.git
   git push -u origin main
   ```

4. **Kích hoạt GitHub Pages trên Repository:**
   - Vào repository trên GitHub > **Settings** > tab **Pages** (cột bên trái).
   - Tại mục **Build and deployment > Source**:
     - **Cách 1 (Khuyên dùng - Tự động với GitHub Actions):** Chọn **GitHub Actions**. Hệ thống sẽ tự động chạy workflow `.github/workflows/deploy.yml` và xuất bản trang web trong khoảng 30 - 60 giây!
     - **Cách 2 (Branch truyền thống):** Chọn **Deploy from a branch**, chọn Branch `main`, thư mục `/ (root)` và bấm **Save**.
   - Sau khi hoàn tất, GitHub sẽ hiển thị đường link trang web công khai của bạn ở đầu mục Pages.

---

### 📋 3. Tính năng nổi bật của Website

1. **Chuyển đổi ngôn ngữ Tiếng Việt / English thuần túy:**
   - Không hiển thị song ngữ Anh - Việt cùng lúc.
   - Nút chuyển đổi ngôn ngữ hoạt động tức thì trên Header mà không cần reload trang.
   - Giữ nguyên route hiện tại và toàn bộ dữ liệu bạn đang nhập dở.
   - Lưu lựa chọn ngôn ngữ vào `localStorage` (`fcaj_report_lang`).
2. **Giao diện Tông Đen Hiện Đại (Monochrome & High-Contrast Dark Slate):**
   - Background chính giữ màu trắng/xám sáng thanh lịch (`#F8FAFC`, `#FFFFFF`), không biến thành Dark Mode.
   - Các chi tiết nhấn, text tiêu đề, nút bấm, menu active, tab tuần, avatar đều mang phong cách tối giản màu đen tuyền và xám than sang trọng.
3. **Cấu trúc 7 mục báo cáo chuẩn AWS FCAJ:**
   - **Thông tin sinh viên:** Họ tên Phan Nhat Uyen, trường, khoa, đơn vị thực tập AWS Vietnam.
   - **1. Worklog (12 Tuần):** Phân công công việc, mục tiêu, thành tích, tài liệu tham khảo cho từng ngày.
   - **2. Đề xuất đồ án (Proposal):** IoT Weather Platform for Lab Research - AWS Serverless Solution.
   - **3. Bài viết kỹ thuật (Blogs Posted):** EKS Pod Identity Session Policies, PrivateLink S3, Lambda SnapStart.
   - **4. Sự kiện tham gia (Events):** GenAI App-DB Modernization Workshop, AWS Community Day.
   - **5. Bài thực hành Workshop:** Secure Hybrid Access to S3 using Gateway & Interface VPC Endpoints.
   - **6. Tự đánh giá (Self-Assessment):** Bảng 12 tiêu chí chuẩn FCAJ và định hướng hoàn thiện.
   - **7. Chia sẻ & Góp ý (Feedback):** Đánh giá môi trường, mentor, văn hóa, chính sách tại FCAJ.
4. **Xuất PDF & Sao lưu dữ liệu:**
   - Nút **In / Xuất PDF** chuẩn hóa theo định dạng in ấn chính thức.
   - Hỗ trợ xuất / nhập file sao lưu JSON (`fcaj_report_bilingual_v4`).
