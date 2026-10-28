/**
 * AWS FIRST CLOUD AI JOURNEY (FCAJ) - INTERNSHIP REPORT SCRIPT
 * Comprehensive Bilingual System (Vietnamese / English)
 * Pure language switching with zero mixed bilingual text
 * Student: Phan Nhat Uyen
 */

// ==========================================
// 1. I18N DICTIONARY (VIETNAMESE & ENGLISH)
// ==========================================
const I18N_DICTIONARY = {
  vi: {
    brandName: "Báo cáo thực tập",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Tìm kiếm nội dung báo cáo...",
    reportContentTitle: "NỘI DUNG BÁO CÁO",
    externalLinksTitle: "LIÊN KẾT NGOÀI",
    
    // Nav items
    navStudentInfo: "Thông tin sinh viên",
    navWorklog: "Nhật ký công việc",
    navProposal: "Đề xuất đồ án",
    navBlogs: "Bài viết Blog",
    navEvents: "Sự kiện tham gia",
    navWorkshop: "Bài thực hành Workshop",
    navSelfAssessment: "Tự đánh giá",
    navFeedback: "Chia sẻ & Góp ý",
    navSettings: "Cài đặt & Sao lưu",
    
    // Sidebar profile
    sidebarCompany: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
    sidebarViewProfile: "Xem thông tin chi tiết",
    
    // Header
    btnPrintPdf: "In / Xuất PDF",
    btnAddWorklog: "+ Thêm Worklog",
    greeting: "Xin chào",
    greetingMorning: "Chào buổi sáng",
    greetingAfternoon: "Chào buổi chiều",
    greetingEvening: "Chào buổi tối",
    modalDayPlaceholder: "VD: Thứ Hai hoặc Thứ 2 - Thứ 4",
    modalDescPlaceholder: "Mô tả công việc hoặc đầu mục chi tiết...",
    modalRefPlaceholder: "https://docs.aws.amazon.com/...",
    
    // Page titles (Header)
    title_thong_tin: "Thông tin sinh viên & Báo cáo",
    title_worklog: "1. Nhật ký công việc (12 Tuần)",
    title_proposal: "2. Đề xuất đồ án thực tập",
    title_blogs_posted: "3. Bài viết kỹ thuật đã đăng",
    title_events: "4. Sự kiện đã tham gia",
    title_workshop: "5. Bài thực hành kỹ thuật",
    title_self_evaluation: "6. Tự đánh giá kết quả thực tập",
    title_feedback: "7. Chia sẻ & Đóng góp ý kiến",
    title_cai_dat: "Cài đặt & Quản lý dữ liệu",
    
    // Student info section
    infoNotice: "Ghi chú quan trọng: Báo cáo thực tập tốt nghiệp này được xây dựng chuẩn theo khung cấu trúc yêu cầu của chương trình First Cloud AI Journey (FCAJ) thuộc Amazon Web Services (AWS) Việt Nam. Toàn bộ nội dung bên dưới có thể tự do chỉnh sửa và lưu trữ trực tiếp.",
    infoCardTitle: "Thông tin sinh viên thực tập",
    infoCardSubtitle: "Hồ sơ thực tập chính thức tại AWS Vietnam - First Cloud AI Journey",
    officialBadge: "Chính thức • AWS FCAJ",
    photoBoxTitle: "Ảnh thẻ / Cá nhân",
    photoBoxHint: "Bấm để tải ảnh",
    photoChangeText: "Thay đổi ảnh",
    photoFitCover: "Cắt vừa",
    photoFitFull: "Nguyên ảnh",
    photoViewHd: "Xem HD",
    hdModalTitle: "Ảnh cá nhân (Độ nét cao)",
    hdModalDesc: "Ảnh được giữ nguyên độ phân giải gốc cao nhất, không bị mờ nhòe hay vỡ hạt.",
    btnModalClose: "Đóng",
    btnUploadPhoto: "Tải ảnh lên",
    btnRemovePhoto: "Gỡ ảnh",
    photoFormatNote: "PNG, JPG, WEBP (Ảnh nét < 10MB)",
    toastPhotoUpdated: "Đã cập nhật ảnh cá nhân với độ nét tối ưu!",
    toastPhotoRemoved: "Đã gỡ ảnh cá nhân!",
    toastPhotoError: "Không thể xử lý ảnh, vui lòng thử lại tệp ảnh khác!",
    toastPhotoSizeLimit: "Dung lượng ảnh tối đa 10MB!",
    toastPhotoInvalidType: "Vui lòng chọn tệp hình ảnh hợp lệ!",
    toastFitCover: "Đã chuyển sang chế độ Cắt vừa khung (Cover)!",
    toastFitContain: "Đã chuyển sang chế độ Hiển thị nguyên ảnh (không bị cắt/vỡ nét)!",
    labelFullName: "Họ và tên",
    labelStudentId: "Mã số sinh viên",
    labelPhone: "Số điện thoại",
    labelEmail: "Email",
    labelUniversity: "Trường Đại học",
    labelMajor: "Chuyên ngành",
    labelClass: "Lớp / Khóa",
    labelCompany: "Đơn vị thực tập",
    labelPosition: "Chương trình thực tập",
    labelDuration: "Thời gian thực tập",
    btnSaveInfo: "Lưu cập nhật thông tin",
    
    // TOC
    tocTitle: "Cấu trúc các mục báo cáo",
    tocSubtitle: "Nhấp vào từng phần để chuyển đến soạn thảo và xem chi tiết:",
    toc1Title: "1. Nhật ký công việc",
    toc1Desc: "Nhật ký chi tiết 12 tuần thực tập (Mục tiêu, Bảng phân công công việc, Kết quả đạt được).",
    toc2Title: "2. Đề xuất đồ án",
    toc2Desc: "Đề xuất đồ án: IoT Weather Platform - Giải pháp AWS Serverless Real-Time Monitoring.",
    toc3Title: "3. Bài viết kỹ thuật",
    toc3Desc: "Các bài viết kỹ thuật đã đăng tải trên AWS Study Group (EKS Pod Identity, S3 Express One Zone,...).",
    zoomDiagramTooltip: "Nhấp để xem ảnh kiến trúc độ nét cao (HD)",
    btnExpandSnippet: "Đọc tiếp nội dung đầy đủ ▼",
    btnCollapseSnippet: "Thu gọn bài viết ▲",
    diagModalTitle: "Sơ đồ kiến trúc (Độ nét cao)",
    diagModalDesc: "Sơ đồ so sánh kiến trúc giữa Amazon S3 Standard và Amazon S3 Express One Zone trong luồng xử lý AI/ML.",
    btnOpenTab: "Mở ảnh trong tab mới ↗",
    toc4Title: "4. Sự kiện tham gia",
    toc4Desc: "Báo cáo tham dự sự kiện thực tế: GenAI-powered App-DB Modernization Workshop tại Bitexco.",
    toc5Title: "5. Bài thực hành Workshop",
    toc5Desc: "Bài thực hành chuyên sâu: Secure Hybrid Access to S3 using Gateway & Interface VPC Endpoints.",
    toc6Title: "6. Tự đánh giá",
    toc6Desc: "Bảng 12 tiêu chí tự đánh giá năng lực cá nhân và các điểm cần tiếp tục hoàn thiện.",
    toc7Title: "7. Chia sẻ & Góp ý",
    toc7Desc: "Đánh giá 6 khía cạnh môi trường làm việc, sự hỗ trợ từ Mentor, cơ hội phát triển tại FCAJ.",
    
    // 1. Worklog
    worklogSectionTitle: "1. Nhật ký 12 tuần thực tập",
    worklogSectionSubtitle: "Ghi lại mục tiêu, nhiệm vụ từng ngày và kết quả đạt được qua từng tuần",
    btnAddTaskThisWeek: "+ Thêm công việc vào tuần này",
    weekPrefix: "Tuần",
    weekHeadingPrefix: "Nhật ký Tuần",
    bootcampSubtitle: "Chương trình đào tạo First Cloud AI Journey",
    btnEditWeekMeta: "Sửa mục tiêu & thành tích",
    metaObjectivesTitle: "Mục tiêu tuần",
    metaAchievementsTitle: "Thành tích đạt được",
    tasksTableTitle: "Nội dung công việc thực hiện trong tuần",
    thDay: "Thứ",
    thTaskDesc: "Nội dung công việc",
    thStartDate: "Ngày bắt đầu",
    thEndDate: "Ngày hoàn thành",
    thRef: "Tài liệu tham khảo",
    thActions: "Thao tác",
    viewRefLink: "Xem tài liệu ↗",
    btnDelete: "Xóa",
    btnEdit: "Sửa",
    btnClearWeek: "Đặt lại tuần này",
    worklogToolsLabel: "Thao tác nhanh:",
    btnExportWorklog: "Xuất JSON",
    btnImportWorklog: "Nhập JSON",
    modalMetaTitle: "Chỉnh sửa Mục tiêu & Thành tích",
    modalMetaObjectivesLabel: "Mục tiêu trọng tâm tuần",
    modalMetaObjectivesPlaceholder: "Nhập mục tiêu trọng tâm trong tuần...",
    modalMetaAchievementsLabel: "Thành tích đạt được (mỗi ý một dòng, gạch đầu dòng -)",
    modalMetaAchievementsPlaceholder: "- Hoàn thành nhiệm vụ...\n- Nắm vững kiến thức...",
    btnModalSaveMeta: "Lưu mục tiêu & thành tích",
    modalEditTaskTitle: "Chỉnh sửa công việc",
    btnUpdateTask: "Cập nhật công việc",
    toastUpdateTaskSuccess: "✓ Đã cập nhật công việc thành công!",
    toastSaveMetaSuccess: "✓ Đã lưu mục tiêu & thành tích tuần thành công!",
    toastResetWeekSuccess: "✓ Đã đặt lại nội dung tuần này thành trang trắng!",
    confirmResetWeek: "Bạn có chắc chắn muốn xóa toàn bộ công việc và mục tiêu của tuần này để tự viết lại từ đầu?",
    toastExportSuccess: "✓ Đã tải xuống file sao lưu Worklog JSON thành công!",
    toastImportSuccess: "✓ Đã nhập dữ liệu Worklog thành công!",
    emptyObjectivesMsg: "Chưa có mục tiêu tuần. Bấm \"Sửa mục tiêu & thành tích\" để thêm.",
    emptyAchievementsMsg: "Chưa có thành tích đạt được. Bấm \"Sửa mục tiêu & thành tích\" để thêm.",
    emptyTasksMsg: "Chưa có đầu việc nào được ghi cho tuần này. Bấm nút \"+ Thêm công việc vào tuần này\" để thêm!",
    
    // 2. Proposal
    proposalSectionTitle: "2. Đề xuất đồ án thực tập",
    proposalSectionSubtitle: "Giải pháp AWS Serverless toàn diện cho giám sát thời tiết thời gian thực",
    btnSaveProposal: "Lưu đề xuất đồ án",
    proposalNotice: "Đề tài nghiên cứu: Nền tảng quan trắc thời tiết IoT cho phòng thí nghiệm - Giải pháp AWS Serverless Real-Time Monitoring sử dụng AWS IoT Core, Lambda, S3 Data Lake, AWS Glue và Amplify Next.js.",
    prop1Heading: "1. Tóm tắt điều hành",
    prop2Heading: "2. Đặt vấn đề & Giải pháp",
    propProblemLabel: "Thách thức hiện tại",
    propSolutionLabel: "Giải pháp & Lợi ích mang lại",
    prop3Heading: "3. Kiến trúc giải pháp & Dịch vụ AWS sử dụng",
    prop4Heading: "4. Dự toán chi phí hạ tầng AWS hàng tháng",
    
    // 3. Blogs
    blogsSectionTitle: "3. Các bài viết kỹ thuật đã đăng",
    blogsSectionSubtitle: "Chia sẻ kiến thức chuyên sâu trên cộng đồng AWS Study Group",
    btnAddBlog: "+ Viết bài blog mới",
    readArticleLink: "Xem bài viết ↗",
    publishedDateLabel: "Ngày đăng:",
    
    // 4. Events
    eventsSectionTitle: "4. Sự kiện thực tế đã tham gia",
    eventsSectionSubtitle: "Tham gia các buổi hội thảo công nghệ AWS chuyên sâu",
    btnAddEvent: "+ Thêm sự kiện mới",
    eventBadge: "Hội thảo công nghệ",
    eventRoleLabel: "Vai trò:",
    eventSpeakersLabel: "Diễn giả:",
    eventHighlightsLabel: "Nội dung trọng tâm & Bài học rút ra:",
    btnDeleteEvent: "Xóa sự kiện",
    btnViewFullReport: "Xem báo cáo chi tiết →",
    btnBackToEvents: "← Quay lại danh sách sự kiện",
    eventsBreadcrumb: "4. Sự kiện thực tế đã tham gia",
    eventReportBadge: "Báo cáo thu hoạch sự kiện",
    eventReportSessionTag: "Session 1 • Voice AI & Contact Center",
    toastEventReportLoaded: "Đã tải báo cáo Session 1 Voice AI",
    
    // 5. Workshop
    workshopSectionTitle: "5. Bài thực hành: Truy cập S3 an toàn qua VPC Endpoints",
    workshopSectionSubtitle: "Bài thực hành chuyên sâu về AWS PrivateLink, Gateway & Interface Endpoints",
    btnPrintWorkshop: "In nội dung Workshop",
    wsTabOverview: "5.1 Tổng quan",
    wsTabPrereq: "5.2 Điều kiện tiên quyết",
    wsTabVpc: "5.3 Truy cập S3 từ VPC",
    wsTabOnPrem: "5.4 Truy cập từ On-Premises",
    wsTabPolicy: "5.5 Chính sách Endpoint",
    wsTabCleanup: "5.6 Dọn dẹp tài nguyên",
    
    wsOverviewTitle: "5.1 Tổng quan & Kiến trúc bài thực hành",
    wsOverviewDesc: "AWS PrivateLink cung cấp kết nối riêng tư an toàn tới các dịch vụ AWS từ VPC và mạng On-premises nội bộ mà không cần đưa lưu lượng truy cập qua Internet công cộng.",
    wsGatewayCardTitle: "Gateway VPC Endpoint",
    wsGatewayCardDesc: "Sử dụng cho tài nguyên bên trong VPC truy cập vào Amazon S3 và Amazon DynamoDB. Định tuyến lưu lượng thông qua Route Table mà không phát sinh thêm chi phí theo giờ.",
    wsInterfaceCardTitle: "Interface VPC Endpoint",
    wsInterfaceCardDesc: "Được cấp phát Elastic Network Interface (ENI) với địa chỉ IP riêng trong Subnet của bạn. Hỗ trợ truy cập cả từ VPC lẫn mạng On-premises thông qua AWS Site-to-Site VPN hoặc Direct Connect.",
    
    wsPrereqTitle: "5.2 Điều kiện tiên quyết & Chính sách IAM",
    wsPrereqDesc: "Chính sách IAM quyền tối thiểu để khởi tạo tài nguyên CloudFormation và Transit Gateway:",
    
    wsVpcTitle: "5.3 Truy cập S3 từ VPC (Gateway Endpoint)",
    wsVpcDesc: "Các bước thực hiện tạo Gateway Endpoint và kiểm thử kết nối riêng tư:",
    wsVpcStep1: "Vào VPC Console > Endpoints > Chọn Create Endpoint.",
    wsVpcStep2: "Chọn Service: com.amazonaws.us-east-1.s3 dạng Gateway.",
    wsVpcStep3: "Gắn Route Table của VPC Cloud để tự động cập nhật route prefix S3.",
    wsVpcStep4: "Kiểm tra lệnh từ EC2 instance:",
    
    wsOnpremTitle: "5.4 Truy cập S3 từ On-Premises (Interface Endpoint)",
    wsOnpremDesc: "Mô phỏng môi trường On-Premises kết nối qua strongSwan VPN và cấu hình Route 53 Resolver Rule:",
    
    wsPolicyTitle: "5.5 Chính sách VPC Endpoint (Kiểm soát quyền truy cập)",
    wsPolicyDesc: "Chính sách giới hạn chỉ cho phép truy cập vào duy nhất bucket yourbucketname-2:",
    
    wsCleanupTitle: "5.6 Dọn dẹp tài nguyên (Tối ưu chi phí)",
    wsCleanupStep1: "Xóa Route 53 Hosted Zone s3.us-east-1.amazonaws.com.",
    wsCleanupStep2: "Hủy liên kết Route 53 Resolver Rule myS3Rule khỏi VPC On-prem.",
    wsCleanupStep3: "Xóa 2 CloudFormation Stacks: PLOnpremSetup và PLCloudSetup.",
    wsCleanupStep4: "Empty và Delete các S3 buckets đã tạo trong bài lab.",
    
    // 6. Self-assessment
    selfSectionTitle: "6. Tự đánh giá kết quả thực tập",
    selfSectionSubtitle: "Bảng 12 tiêu chí đánh giá năng lực của sinh viên Phan Nhat Uyen",
    btnSaveAssessment: "Lưu tự đánh giá",
    assessNarrativeLabel: "Tóm tắt quá trình rèn luyện & công tác",
    criteriaTableTitle: "Bảng đánh giá theo 12 tiêu chí chuẩn của AWS FCAJ",
    thCriteriaNo: "STT",
    thCriteriaName: "Tiêu chí đánh giá",
    thCriteriaDesc: "Mô tả chi tiết",
    thGood: "Tốt",
    thFair: "Khá",
    thAvg: "Trung bình",
    needsImprovementLabel: "Các điểm cần tiếp tục hoàn thiện",
    
    // 7. Feedback
    feedbackSectionTitle: "7. Chia sẻ & Đóng góp ý kiến",
    feedbackSectionSubtitle: "Đóng góp ý kiến cải tiến cho chương trình First Cloud AI Journey",
    btnSaveFeedback: "Lưu ý kiến đóng góp",
    fb1Label: "1. Môi trường làm việc",
    fb2Label: "2. Sự hỗ trợ từ Mentor & Ban tổ chức",
    fb3Label: "3. Mức độ phù hợp với ngành học",
    fb4Label: "4. Cơ hội học tập & Phát triển kỹ năng",
    fb5Label: "5. Văn hóa công ty & Tinh thần đồng đội",
    fb6Label: "6. Chính sách & Chế độ đãi ngộ",
    fbSuggestionsLabel: "Đề xuất & Kỳ vọng phát triển tương lai",
    
    // Settings
    settingsSectionTitle: "Cài đặt & Quản lý dữ liệu báo cáo",
    settingsSectionSubtitle: "Sao lưu toàn bộ nội dung của bạn thành file JSON hoặc in báo cáo ra PDF",
    settingsCardTitle: "Sao lưu & Xuất file an toàn",
    settingsCardDesc: "Tất cả nội dung viết của bạn (12 tuần worklog, proposal, bài blog, sự kiện, workshop, đánh giá) đều được lưu trữ trực tiếp trên trình duyệt. Bạn có thể xuất ra file JSON để lưu giữ dự phòng:",
    btnExportJson: "Tải file sao lưu (worklog-fcaj-backup.json)",
    btnImportJson: "Khôi phục từ file JSON",
    btnResetData: "Đặt lại mẫu báo cáo chuẩn FCAJ",
    
    // Modal
    modalTitle: "+ Thêm nhiệm vụ vào Worklog",
    modalWeekSelectLabel: "Chọn tuần áp dụng",
    modalDayLabel: "Thứ trong tuần",
    modalTaskDescLabel: "Nội dung nhiệm vụ",
    modalStartLabel: "Ngày bắt đầu",
    modalEndLabel: "Ngày hoàn thành",
    modalRefLabel: "Tài liệu tham khảo (URL hoặc ghi chú)",
    btnModalCancel: "Hủy bỏ",
    btnModalSave: "Lưu công việc",
    
    // Alerts and prompts
    toastSaveInfo: "Đã lưu thông tin sinh viên thành công!",
    toastSaveProposal: "Đã lưu nội dung Proposal thành công!",
    toastAddBlog: "Đã thêm bài blog mới!",
    toastDeleteBlog: "Đã xóa bài blog.",
    toastAddEvent: "Đã thêm sự kiện mới!",
    toastDeleteEvent: "Đã xóa sự kiện.",
    toastSaveAssessment: "Đã lưu kết quả tự đánh giá 12 tiêu chí!",
    toastSaveFeedback: "Đã lưu ý kiến đóng góp cho chương trình FCAJ!",
    toastExportJson: "Đã xuất file sao lưu dữ liệu JSON thành công!",
    toastImportSuccess: "Khôi phục dữ liệu thành công!",
    toastImportError: "Lỗi đọc file JSON!",
    toastResetSuccess: "Đã khôi phục dữ liệu chuẩn FCAJ!",
    toastAddTaskSuccess: "Đã thêm công việc vào tuần",
    toastDeleteTask: "Đã xóa công việc.",
    toastLangSwitch: "Đã chuyển sang Tiếng Việt",
    confirmReset: "CẢNH BÁO: Đặt lại toàn bộ dữ liệu mẫu ban đầu theo chuẩn AWS FCAJ?",
    confirmDeleteTask: "Bạn có chắc muốn xóa công việc này?",
    confirmDeleteBlog: "Xóa bài blog này khỏi danh sách?",
    confirmDeleteEvent: "Xóa sự kiện này khỏi báo cáo?",
    pageTitleDoc: "Báo cáo thực tập :: Phan Nhat Uyen - AWS First Cloud AI Journey"
  },
  
  en: {
    brandName: "Internship Report",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Search report content...",
    reportContentTitle: "REPORT CONTENT",
    externalLinksTitle: "EXTERNAL LINKS",
    
    // Nav items
    navStudentInfo: "Student Information",
    navWorklog: "Worklog",
    navProposal: "Proposal",
    navBlogs: "Blogs Posted",
    navEvents: "Events Participated",
    navWorkshop: "Workshop",
    navSelfAssessment: "Self-Assessment",
    navFeedback: "Sharing and Feedback",
    navSettings: "Settings & Backup",
    
    // Sidebar profile
    sidebarCompany: "Amazon Web Services (AWS) Vietnam Company Limited",
    sidebarViewProfile: "View detailed profile",
    
    // Header
    btnPrintPdf: "Print / Export PDF",
    btnAddWorklog: "+ Add Worklog",
    greeting: "Hello",
    greetingMorning: "Good morning",
    greetingAfternoon: "Good afternoon",
    greetingEvening: "Good evening",
    modalDayPlaceholder: "e.g. Monday or Mon - Wed",
    modalDescPlaceholder: "Detailed task description or deliverable...",
    modalRefPlaceholder: "https://docs.aws.amazon.com/...",
    
    // Page titles (Header)
    title_thong_tin: "Student Information & Report",
    title_worklog: "1. Worklog (12 Weeks)",
    title_proposal: "2. Internship Proposal",
    title_blogs_posted: "3. Blogs Posted",
    title_events: "4. Events Participated",
    title_workshop: "5. Technical Workshop",
    title_self_evaluation: "6. Internship Self-Assessment",
    title_feedback: "7. Sharing and Feedback",
    title_cai_dat: "Settings & Data Management",
    
    // Student info section
    infoNotice: "Important Note: This internship report is structured in accordance with the official First Cloud AI Journey (FCAJ) requirements by Amazon Web Services (AWS) Vietnam. All information below can be freely customized and saved directly.",
    infoCardTitle: "Student Information",
    infoCardSubtitle: "Official internship profile at AWS Vietnam - First Cloud AI Journey",
    officialBadge: "Official • AWS FCAJ",
    photoBoxTitle: "Portrait / Profile Photo",
    photoBoxHint: "Click to upload photo",
    photoChangeText: "Change Photo",
    photoFitCover: "Cover",
    photoFitFull: "Contain",
    photoViewHd: "View HD",
    hdModalTitle: "Personal Photo (High Definition)",
    hdModalDesc: "Photo displayed in full original resolution without blur or pixelation.",
    btnModalClose: "Close",
    btnUploadPhoto: "Upload Photo",
    btnRemovePhoto: "Remove Photo",
    photoFormatNote: "PNG, JPG, WEBP (HD < 10MB)",
    toastPhotoUpdated: "Personal photo updated in high resolution!",
    toastPhotoRemoved: "Personal photo removed!",
    toastPhotoError: "Could not process photo, please try another image file!",
    toastPhotoSizeLimit: "Photo file size must be under 10MB!",
    toastPhotoInvalidType: "Please select a valid image file!",
    toastFitCover: "Switched to Fill/Cover mode!",
    toastFitContain: "Switched to Full/Contain mode (crisp, uncropped)!",
    labelFullName: "Full Name",
    labelStudentId: "Student ID",
    labelPhone: "Phone Number",
    labelEmail: "Email",
    labelUniversity: "University",
    labelMajor: "Major",
    labelClass: "Class",
    labelCompany: "Internship Company",
    labelPosition: "Internship Program",
    labelDuration: "Internship Duration",
    btnSaveInfo: "Save Information Updates",
    
    // TOC
    tocTitle: "Report Content Structure",
    tocSubtitle: "Click each section below to navigate and edit details:",
    toc1Title: "1. Worklog",
    toc1Desc: "Detailed 12-week worklog (Objectives, Task assignments table, Achievements).",
    toc2Title: "2. Proposal",
    toc2Desc: "Project Proposal: IoT Weather Platform - Real-Time AWS Serverless Monitoring Solution.",
    toc3Title: "3. Blogs Posted",
    toc3Desc: "Technical blog articles published on AWS Study Group (EKS Pod Identity Session Policies,...).",
    toc4Title: "4. Events Participated",
    toc4Desc: "Field event attendance report: GenAI-powered App-DB Modernization Workshop at Bitexco.",
    toc5Title: "5. Workshop",
    toc5Desc: "Hands-on technical lab: Secure Hybrid Access to S3 using Gateway & Interface VPC Endpoints.",
    toc6Title: "6. Self-Assessment",
    toc6Desc: "12-criteria self-evaluation matrix and identified areas for continuous improvement.",
    toc7Title: "7. Sharing and Feedback",
    toc7Desc: "Evaluation across 6 dimensions: work environment, mentor support, and career growth at FCAJ.",
    
    // 1. Worklog
    worklogSectionTitle: "1. 12-Week Worklog",
    worklogSectionSubtitle: "Record weekly objectives, daily tasks, and accomplishments throughout the internship",
    btnAddTaskThisWeek: "+ Add Task to This Week",
    weekPrefix: "Week",
    weekHeadingPrefix: "Week",
    bootcampSubtitle: "First Cloud AI Journey Bootcamp",
    btnEditWeekMeta: "Edit Objectives & Achievements",
    metaObjectivesTitle: "Week Objectives",
    metaAchievementsTitle: "Week Achievements",
    tasksTableTitle: "Tasks to be carried out this week",
    thDay: "Day",
    thTaskDesc: "Task Description",
    thStartDate: "Start Date",
    thEndDate: "Completion Date",
    thRef: "Reference Material",
    thActions: "Actions",
    viewRefLink: "View Document ↗",
    btnDelete: "Delete",
    btnEdit: "Edit",
    btnClearWeek: "Reset Week",
    worklogToolsLabel: "Quick Tools:",
    btnExportWorklog: "Export JSON",
    btnImportWorklog: "Import JSON",
    modalMetaTitle: "Edit Objectives & Achievements",
    modalMetaObjectivesLabel: "Core Week Objectives",
    modalMetaObjectivesPlaceholder: "Enter core technical/research objectives for this week...",
    modalMetaAchievementsLabel: "Week Achievements (one per line, starting with -)",
    modalMetaAchievementsPlaceholder: "- Mastered concepts...\n- Completed lab exercises...",
    btnModalSaveMeta: "Save Objectives & Achievements",
    modalEditTaskTitle: "Edit Task",
    btnUpdateTask: "Update Task",
    toastUpdateTaskSuccess: "✓ Task updated successfully!",
    toastSaveMetaSuccess: "✓ Objectives & achievements saved successfully!",
    toastResetWeekSuccess: "✓ Week content reset to blank successfully!",
    confirmResetWeek: "Are you sure you want to clear all tasks and objectives for this week to write from scratch?",
    toastExportSuccess: "✓ Worklog JSON backup downloaded successfully!",
    toastImportSuccess: "✓ Worklog data imported successfully!",
    emptyObjectivesMsg: "No objectives set yet. Click \"Edit Objectives & Achievements\" to add.",
    emptyAchievementsMsg: "No achievements recorded yet. Click \"Edit Objectives & Achievements\" to add.",
    emptyTasksMsg: "No tasks recorded for this week. Click \"+ Add Task to This Week\" to add tasks!",
    
    // 2. Proposal
    proposalSectionTitle: "2. Internship Proposal",
    proposalSectionSubtitle: "A Unified AWS Serverless Solution for Real-Time Weather Monitoring",
    btnSaveProposal: "Save Proposal",
    proposalNotice: "Research Topic: IoT Weather Platform for Lab Research - A Unified AWS Serverless Real-Time Monitoring Solution utilizing AWS IoT Core, Lambda, S3 Data Lake, AWS Glue, and Amplify Next.js.",
    prop1Heading: "1. Executive Summary",
    prop2Heading: "2. Problem Statement & Solution",
    propProblemLabel: "What’s the Problem?",
    propSolutionLabel: "The Solution & Benefits",
    prop3Heading: "3. Solution Architecture & AWS Services Used",
    prop4Heading: "4. Monthly Infrastructure Budget Estimation",
    
    // 3. Blogs
    blogsSectionTitle: "3. Blogs Posted",
    blogsSectionSubtitle: "Technical articles shared with the AWS Study Group community",
    btnAddBlog: "+ Write New Blog",
    readArticleLink: "Read Article ↗",
    publishedDateLabel: "Published:",
    
    // 4. Events
    eventsSectionTitle: "4. Events Participated",
    eventsSectionSubtitle: "Attendance at in-depth AWS technology conferences and workshops",
    btnAddEvent: "+ Add New Event",
    eventBadge: "Tech Conference",
    eventRoleLabel: "Role:",
    eventSpeakersLabel: "Speakers:",
    eventHighlightsLabel: "Key Highlights & Takeaways:",
    btnDeleteEvent: "Delete Event",
    btnViewFullReport: "View Full Report →",
    btnBackToEvents: "← Back to Events",
    eventsBreadcrumb: "4. Events Participated",
    eventReportBadge: "Event Harvest Report",
    eventReportSessionTag: "Session 1 • Voice AI & Contact Center",
    toastEventReportLoaded: "Loaded Session 1 Voice AI Report",
    
    // 5. Workshop
    workshopSectionTitle: "5. Workshop: Secure Hybrid Access to S3 using VPC Endpoints",
    workshopSectionSubtitle: "Hands-on technical lab covering AWS PrivateLink, Gateway & Interface Endpoints",
    btnPrintWorkshop: "Print Workshop Content",
    wsTabOverview: "5.1 Overview",
    wsTabPrereq: "5.2 Prerequisites",
    wsTabVpc: "5.3 Access S3 from VPC",
    wsTabOnPrem: "5.4 Access from On-Premises",
    wsTabPolicy: "5.5 Endpoint Policies",
    wsTabCleanup: "5.6 Clean Up",
    
    wsOverviewTitle: "5.1 Workshop Overview & Architecture",
    wsOverviewDesc: "AWS PrivateLink provides private connectivity to AWS services from VPCs and on-premises networks without exposing your traffic to the public internet.",
    wsGatewayCardTitle: "Gateway VPC Endpoint",
    wsGatewayCardDesc: "Used for resources inside your VPC to reach Amazon S3 and Amazon DynamoDB. Routes traffic using Route Tables without hourly charges.",
    wsInterfaceCardTitle: "Interface VPC Endpoint",
    wsInterfaceCardDesc: "Allocates an Elastic Network Interface (ENI) with private IP addresses in your subnet. Supports access from both VPC and On-premises networks via AWS Site-to-Site VPN or Direct Connect.",
    
    wsPrereqTitle: "5.2 Prerequisites & IAM Permissions",
    wsPrereqDesc: "Minimum IAM permission policy required to deploy CloudFormation and Transit Gateway resources:",
    
    wsVpcTitle: "5.3 Access S3 from VPC (Gateway Endpoint)",
    wsVpcDesc: "Procedure to create a Gateway Endpoint and test private connectivity:",
    wsVpcStep1: "Navigate to VPC Console > Endpoints > Click Create Endpoint.",
    wsVpcStep2: "Select Service: com.amazonaws.us-east-1.s3 with Gateway type.",
    wsVpcStep3: "Associate the Cloud VPC Route Table to automatically inject S3 prefix routes.",
    wsVpcStep4: "Verify connectivity from your EC2 instance:",
    
    wsOnpremTitle: "5.4 Access S3 from On-Premises (Interface Endpoint)",
    wsOnpremDesc: "Simulate On-Premises connectivity via strongSwan VPN and configure Route 53 Resolver Rules:",
    
    wsPolicyTitle: "5.5 VPC Endpoint Policies (Access Control)",
    wsPolicyDesc: "Endpoint policy restricting access exclusively to yourbucketname-2:",
    
    wsCleanupTitle: "5.6 Clean Up (Resource Decommissioning)",
    wsCleanupStep1: "Delete Route 53 Hosted Zone s3.us-east-1.amazonaws.com.",
    wsCleanupStep2: "Disassociate Route 53 Resolver Rule myS3Rule from On-prem VPC.",
    wsCleanupStep3: "Delete the 2 CloudFormation Stacks: PLOnpremSetup and PLCloudSetup.",
    wsCleanupStep4: "Empty and Delete all S3 buckets provisioned in this lab.",
    
    // 6. Self-assessment
    selfSectionTitle: "6. Internship Self-Assessment",
    selfSectionSubtitle: "12-criteria competence evaluation of student Phan Nhat Uyen",
    btnSaveAssessment: "Save Assessment",
    assessNarrativeLabel: "Summary of Internship Practice and Conduct",
    criteriaTableTitle: "AWS FCAJ Standard 12-Criteria Evaluation Matrix",
    thCriteriaNo: "No.",
    thCriteriaName: "Evaluation Criteria",
    thCriteriaDesc: "Detailed Description",
    thGood: "Good",
    thFair: "Fair",
    thAvg: "Average",
    needsImprovementLabel: "Needs Improvement",
    
    // 7. Feedback
    feedbackSectionTitle: "7. Sharing and Feedback",
    feedbackSectionSubtitle: "Constructive suggestions for the First Cloud AI Journey program",
    btnSaveFeedback: "Save Feedback",
    fb1Label: "1. Working Environment",
    fb2Label: "2. Support from Mentor / Team Admin",
    fb3Label: "3. Relevance to Academic Major",
    fb4Label: "4. Learning & Skill Opportunities",
    fb5Label: "5. Company Culture & Team Spirit",
    fb6Label: "6. Policies / Benefits",
    fbSuggestionsLabel: "Suggestions & Future Expectations",
    
    // Settings
    settingsSectionTitle: "Settings & Report Data Management",
    settingsSectionSubtitle: "Backup your report data as JSON file or export as PDF",
    settingsCardTitle: "Backup & Safe Export",
    settingsCardDesc: "All your written report content (12 weeks worklog, proposal, blogs, events, workshop, self-assessment) is stored directly in your browser. You can export a JSON file for backup:",
    btnExportJson: "Download Backup File (worklog-fcaj-backup.json)",
    btnImportJson: "Restore from JSON File",
    btnResetData: "Reset to Standard FCAJ Report",
    
    // Modal
    modalTitle: "+ Add Task to Worklog",
    modalWeekSelectLabel: "Select Week",
    modalDayLabel: "Day of Week",
    modalTaskDescLabel: "Task Description",
    modalStartLabel: "Start Date",
    modalEndLabel: "Completion Date",
    modalRefLabel: "Reference Material (URL or note)",
    btnModalCancel: "Cancel",
    btnModalSave: "Save Task",
    
    // Alerts and prompts
    toastSaveInfo: "Student information saved successfully!",
    toastSaveProposal: "Proposal saved successfully!",
    toastAddBlog: "New blog post added!",
    toastDeleteBlog: "Blog post deleted.",
    toastAddEvent: "New event added!",
    toastDeleteEvent: "Event deleted.",
    toastSaveAssessment: "12-criteria self-assessment saved!",
    toastSaveFeedback: "Feedback saved for FCAJ program!",
    toastExportJson: "JSON backup file exported successfully!",
    toastImportSuccess: "Data restored successfully!",
    toastImportError: "Error reading JSON file!",
    toastResetSuccess: "Standard FCAJ report data restored!",
    toastAddTaskSuccess: "Task added to week",
    toastDeleteTask: "Task deleted.",
    toastLangSwitch: "Switched to English",
    confirmReset: "WARNING: Reset all data to standard AWS FCAJ template?",
    confirmDeleteTask: "Are you sure you want to delete this task?",
    confirmDeleteBlog: "Delete this blog from the list?",
    confirmDeleteEvent: "Delete this event from the report?",
    pageTitleDoc: "Internship Report :: Phan Nhat Uyen - AWS First Cloud AI Journey"
  }
};

// ==========================================
// 2. DEFAULT BILINGUAL REPORT DATA
// (CHỈNH SỬA THÔNG TIN SINH VIÊN TRỰC TIẾP TẠI ĐÂY TỪ CODE)
// ==========================================
const DEFAULT_BILINGUAL_DATA = {
  studentInfo: {
    fullName: "Phan Nhật Uyên",
    studentId: "SE196682",
    phone: "0394728982",
    email: "nhatuien218@gmail.com",
    vi: {
      university: "Trường Đại học FPT",
      major: "An toàn thông tin",
      company: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "Từ 14/09/2026 đến 14/12/2026"
    },
    en: {
      university: "FPT University",
      major: "Information Assurance",
      company: "Amazon Web Services (AWS) Vietnam Company Limited",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "From 14/09/2026 to 14/12/2026"
    }
  },
  currentWeek: 5,
  worklogs: Array.from({ length: 12 }, (_, i) => {
    const weekNum = i + 1;
    if (weekNum === 1) {
      return {
        weekNum: 1,
        vi: {
          topic: "Cloud Fundamentals & Amazon EC2 (14/09/2026 – 18/09/2026)",
          objectives: "- Get acquainted with FCAJ members and understand the internship working process.\n- Complete the AWS Free $100 Credit registration for hands-on practice.\n- Understand fundamental AWS services and AWS global infrastructure.\n- Become familiar with AWS Management Console and AWS CLI.\n- Learn basic Amazon EC2 concepts and perform the first EC2 hands-on lab.",
          achievements: "- Successfully completed the AWS Free $100 Credit registration for AWS hands-on activities.\n- Understood the basic concepts of Cloud Computing and AWS Global Infrastructure:\n  - Region\n  - Availability Zone\n  - Edge Location\n- Understood the major AWS service groups:\n  - Compute\n  - Storage\n  - Networking\n  - Database\n  - Security\n  - Monitoring\n- Became familiar with the AWS Management Console and learned how to:\n  - Search and access AWS services\n  - Switch AWS Regions\n  - View and manage AWS resources\n  - Check basic resource information\n- Successfully installed and configured AWS CLI, including:\n  - Access Key\n  - Secret Key\n  - Default Region\n  - Output Format\n- Used AWS CLI to:\n  - Verify AWS identity and account information\n  - Check CLI configuration\n  - Retrieve the list of AWS Regions\n  - View EC2 instances and instance states\n  - Manage/check EC2 Key Pairs\n  - Retrieve basic AWS resource information\n- Learned the fundamental components of Amazon EC2:\n  - AMI\n  - Instance Type\n  - EBS\n  - Key Pair\n  - Security Group\n  - Public/Private IP\n  - Elastic IP\n- Successfully launched and managed an EC2 instance.\n- Successfully connected to a Linux EC2 instance through SSH.\n- Created and attached an additional EBS volume to an EC2 instance.\n- Practiced managing EC2 using both AWS Console and AWS CLI.\n- Gained the ability to perform a complete basic workflow:\n  AWS Account → Console/CLI → EC2 → Security Group → SSH → EBS → Resource Management.",
          tasks: [
            {
              day: "2",
              desc: "- Get acquainted with FCAJ mentors and members.\n- Learn about the FCAJ internship roadmap, working process, rules, and regulations.\n- Understand weekly worklog requirements and expected learning outcomes.\n- Complete the required process to receive AWS Free $100 Credit for hands-on labs.\n- Check the AWS learning environment and understand basic cost-control precautions.",
              start: "2026-09-14", end: "2026-09-14",
              ref: "AWS Account: https://000001.awsstudygroup.com/\nAWS Budgets: https://000007.awsstudygroup.com/"
            },
            {
              day: "3",
              desc: "- Learn the fundamentals of Cloud Computing and Amazon Web Services (AWS).\n- Understand AWS Global Infrastructure: Region, Availability Zone, Edge Location.\n- Learn major AWS service groups: Compute, Storage, Networking, Database, Security, Monitoring.\n- Explore AWS Management Console and locate commonly used AWS services.\n- Practice switching AWS Regions and checking available services/resources.",
              start: "2026-09-15", end: "2026-09-15",
              ref: "First Cloud Journey: https://cloudjourney.awsstudygroup.com/"
            },
            {
              day: "4",
              desc: "- Learn about AWS Management Console and AWS CLI.\n- Install and configure AWS CLI on the local computer.\n- Configure Access Key, Secret Key, Default Region, and Output Format.\n- Practice basic CLI commands to check AWS identity, configuration, and available regions.\n- Use AWS CLI to retrieve EC2 information and compare results with AWS Console.\n- Understand the difference between managing AWS resources through Console and CLI.",
              start: "2026-09-16", end: "2026-09-16",
              ref: "AWS CLI: https://000011.awsstudygroup.com/\nAWS Account: https://000001.awsstudygroup.com/"
            },
            {
              day: "5",
              desc: "- Learn basic concepts of Amazon EC2.\n- Study AMI, Instance Type, EBS, Key Pair, Security Group, Public IP, Private IP, and Elastic IP.\n- Understand EC2 instance lifecycle: Pending, Running, Stopping, Stopped, Terminated.\n- Learn how SSH authentication works when connecting to EC2.\n- Learn the role of Security Groups in controlling inbound/outbound traffic.\n- Explore the EC2 Dashboard and available instance configurations.",
              start: "2026-09-17", end: "2026-09-18",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            },
            {
              day: "6",
              desc: "- Practice launching an Amazon EC2 instance.\n- Configure AMI, Instance Type, Key Pair, Network, and Security Group.\n- Connect to the EC2 Linux instance through SSH.\n- Execute basic Linux commands and verify server status.\n- Create and attach an additional EBS volume to EC2.\n- Practice Start/Stop EC2 and check instance status using both AWS Console and AWS CLI.",
              start: "2026-09-18", end: "2026-09-18",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            }
          ]
        },
        en: {
          topic: "Cloud Fundamentals & Amazon EC2 (14/09/2026 – 18/09/2026)",
          objectives: "- Get acquainted with FCAJ members and understand the internship working process.\n- Complete the AWS Free $100 Credit registration for hands-on practice.\n- Understand fundamental AWS services and AWS global infrastructure.\n- Become familiar with AWS Management Console and AWS CLI.\n- Learn basic Amazon EC2 concepts and perform the first EC2 hands-on lab.",
          achievements: "- Successfully completed the AWS Free $100 Credit registration for AWS hands-on activities.\n- Understood the basic concepts of Cloud Computing and AWS Global Infrastructure:\n  - Region\n  - Availability Zone\n  - Edge Location\n- Understood the major AWS service groups:\n  - Compute\n  - Storage\n  - Networking\n  - Database\n  - Security\n  - Monitoring\n- Became familiar with the AWS Management Console and learned how to:\n  - Search and access AWS services\n  - Switch AWS Regions\n  - View and manage AWS resources\n  - Check basic resource information\n- Successfully installed and configured AWS CLI, including:\n  - Access Key\n  - Secret Key\n  - Default Region\n  - Output Format\n- Used AWS CLI to:\n  - Verify AWS identity and account information\n  - Check CLI configuration\n  - Retrieve the list of AWS Regions\n  - View EC2 instances and instance states\n  - Manage/check EC2 Key Pairs\n  - Retrieve basic AWS resource information\n- Learned the fundamental components of Amazon EC2:\n  - AMI\n  - Instance Type\n  - EBS\n  - Key Pair\n  - Security Group\n  - Public/Private IP\n  - Elastic IP\n- Successfully launched and managed an EC2 instance.\n- Successfully connected to a Linux EC2 instance through SSH.\n- Created and attached an additional EBS volume to an EC2 instance.\n- Practiced managing EC2 using both AWS Console and AWS CLI.\n- Gained the ability to perform a complete basic workflow:\n  AWS Account → Console/CLI → EC2 → Security Group → SSH → EBS → Resource Management.",
          tasks: [
            {
              day: "2",
              desc: "- Get acquainted with FCAJ mentors and members.\n- Learn about the FCAJ internship roadmap, working process, rules, and regulations.\n- Understand weekly worklog requirements and expected learning outcomes.\n- Complete the required process to receive AWS Free $100 Credit for hands-on labs.\n- Check the AWS learning environment and understand basic cost-control precautions.",
              start: "2026-09-14", end: "2026-09-14",
              ref: "AWS Account: https://000001.awsstudygroup.com/\nAWS Budgets: https://000007.awsstudygroup.com/"
            },
            {
              day: "3",
              desc: "- Learn the fundamentals of Cloud Computing and Amazon Web Services (AWS).\n- Understand AWS Global Infrastructure: Region, Availability Zone, Edge Location.\n- Learn major AWS service groups: Compute, Storage, Networking, Database, Security, Monitoring.\n- Explore AWS Management Console and locate commonly used AWS services.\n- Practice switching AWS Regions and checking available services/resources.",
              start: "2026-09-15", end: "2026-09-15",
              ref: "First Cloud Journey: https://cloudjourney.awsstudygroup.com/"
            },
            {
              day: "4",
              desc: "- Learn about AWS Management Console and AWS CLI.\n- Install and configure AWS CLI on the local computer.\n- Configure Access Key, Secret Key, Default Region, and Output Format.\n- Practice basic CLI commands to check AWS identity, configuration, and available regions.\n- Use AWS CLI to retrieve EC2 information and compare results with AWS Console.\n- Understand the difference between managing AWS resources through Console and CLI.",
              start: "2026-09-16", end: "2026-09-16",
              ref: "AWS CLI: https://000011.awsstudygroup.com/\nAWS Account: https://000001.awsstudygroup.com/"
            },
            {
              day: "5",
              desc: "- Learn basic concepts of Amazon EC2.\n- Study AMI, Instance Type, EBS, Key Pair, Security Group, Public IP, Private IP, and Elastic IP.\n- Understand EC2 instance lifecycle: Pending, Running, Stopping, Stopped, Terminated.\n- Learn how SSH authentication works when connecting to EC2.\n- Learn the role of Security Groups in controlling inbound/outbound traffic.\n- Explore the EC2 Dashboard and available instance configurations.",
              start: "2026-09-17", end: "2026-09-18",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            },
            {
              day: "6",
              desc: "- Practice launching an Amazon EC2 instance.\n- Configure AMI, Instance Type, Key Pair, Network, and Security Group.\n- Connect to the EC2 Linux instance through SSH.\n- Execute basic Linux commands and verify server status.\n- Create and attach an additional EBS volume to EC2.\n- Practice Start/Stop EC2 and check instance status using both AWS Console and AWS CLI.",
              start: "2026-09-18", end: "2026-09-18",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            }
          ]
        }
      };
    } else if (weekNum === 2) {
      return {
        "weekNum": 2,
        "vi": {
                "topic": "AWS IAM, VPC & Network Security (21/09/2026 – 25/09/2026)",
                "objectives": "- Understand the fundamental concepts of AWS Identity and Access Management (IAM).\n- Learn how to manage AWS users, user groups, policies, roles, and permissions.\n- Understand Amazon VPC and its core networking components.\n- Learn the differences between public and private subnets.\n- Practice configuring VPC networking and security settings.\n- Apply basic AWS security best practices to cloud resources.",
                "achievements": "- Understood the basic concepts of AWS IAM and its role in managing access to AWS resources.\n- Learned the differences between IAM Users, User Groups, Roles, and Policies.\n- Practiced creating IAM users and groups and assigning permissions.\n- Understood the principle of least privilege and basic AWS access management practices.\n- Learned the fundamental components of Amazon VPC:\n  - VPC and CIDR Block\n  - Public and Private Subnets\n  - Internet Gateway\n  - Route Table\n  - Security Group\n  - Network ACL\n- Practiced creating a custom VPC and configuring its networking components.\n- Understood how route tables and Internet Gateways control network connectivity.\n- Practiced configuring Security Groups to control EC2 inbound and outbound traffic.\n- Learned how to deploy EC2 instances within a custom VPC.\n- Gained a better understanding of AWS networking architecture and resource security.",
                "tasks": [
                        {
                                "day": "2",
                                "desc": "- Learn the fundamentals of AWS Identity and Access Management (IAM).\n- Understand IAM Users, User Groups, Roles, and Policies.\n- Learn the principle of least privilege.\n- Explore the IAM Dashboard and its main features.\n- Understand basic AWS account security practices.",
                                "start": "2026-09-21",
                                "end": "2026-09-21",
                                "ref": "AWS IAM: https://000002.awsstudygroup.com/"
                        },
                        {
                                "day": "3",
                                "desc": "- Practice creating IAM users and user groups.\n- Configure permissions using AWS managed policies.\n- Learn about IAM Roles and their use cases.\n- Understand the differences between authentication and authorization.\n- Practice checking IAM permissions and access restrictions.",
                                "start": "2026-09-22",
                                "end": "2026-09-22",
                                "ref": "AWS IAM: https://000002.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
                        },
                        {
                                "day": "4",
                                "desc": "- Learn the fundamentals of Amazon Virtual Private Cloud (VPC).\n- Understand CIDR Blocks and private IP addressing.\n- Learn about public and private subnets.\n- Study Internet Gateway, Route Table, and NAT Gateway concepts.\n- Explore the VPC Dashboard and networking resources.",
                                "start": "2026-09-23",
                                "end": "2026-09-23",
                                "ref": "Amazon VPC: https://000003.awsstudygroup.com/"
                        },
                        {
                                "day": "5",
                                "desc": "- Practice creating a custom Amazon VPC.\n- Create public and private subnets.\n- Configure an Internet Gateway.\n- Create and associate Route Tables with subnets.\n- Configure Security Groups for basic network access control.",
                                "start": "2026-09-24",
                                "end": "2026-09-24",
                                "ref": "Amazon VPC: https://000003.awsstudygroup.com/"
                        },
                        {
                                "day": "6",
                                "desc": "- Review the networking architecture created during the week.\n- Practice launching an EC2 instance in a custom public subnet.\n- Configure SSH access through Security Group rules.\n- Test network connectivity to the EC2 instance.\n- Review IAM and VPC security best practices.\n- Clean up unnecessary lab resources to avoid additional charges.",
                                "start": "2026-09-25",
                                "end": "2026-09-25",
                                "ref": "Amazon VPC: https://000003.awsstudygroup.com/\nAmazon EC2: https://000004.awsstudygroup.com/"
                        }
                ]
        },
        "en": {
                "topic": "AWS IAM, VPC & Network Security (21/09/2026 – 25/09/2026)",
                "objectives": "- Understand the fundamental concepts of AWS Identity and Access Management (IAM).\n- Learn how to manage AWS users, user groups, policies, roles, and permissions.\n- Understand Amazon VPC and its core networking components.\n- Learn the differences between public and private subnets.\n- Practice configuring VPC networking and security settings.\n- Apply basic AWS security best practices to cloud resources.",
                "achievements": "- Understood the basic concepts of AWS IAM and its role in managing access to AWS resources.\n- Learned the differences between IAM Users, User Groups, Roles, and Policies.\n- Practiced creating IAM users and groups and assigning permissions.\n- Understood the principle of least privilege and basic AWS access management practices.\n- Learned the fundamental components of Amazon VPC:\n  - VPC and CIDR Block\n  - Public and Private Subnets\n  - Internet Gateway\n  - Route Table\n  - Security Group\n  - Network ACL\n- Practiced creating a custom VPC and configuring its networking components.\n- Understood how route tables and Internet Gateways control network connectivity.\n- Practiced configuring Security Groups to control EC2 inbound and outbound traffic.\n- Learned how to deploy EC2 instances within a custom VPC.\n- Gained a better understanding of AWS networking architecture and resource security.",
                "tasks": [
                        {
                                "day": "2",
                                "desc": "- Learn the fundamentals of AWS Identity and Access Management (IAM).\n- Understand IAM Users, User Groups, Roles, and Policies.\n- Learn the principle of least privilege.\n- Explore the IAM Dashboard and its main features.\n- Understand basic AWS account security practices.",
                                "start": "2026-09-21",
                                "end": "2026-09-21",
                                "ref": "AWS IAM: https://000002.awsstudygroup.com/"
                        },
                        {
                                "day": "3",
                                "desc": "- Practice creating IAM users and user groups.\n- Configure permissions using AWS managed policies.\n- Learn about IAM Roles and their use cases.\n- Understand the differences between authentication and authorization.\n- Practice checking IAM permissions and access restrictions.",
                                "start": "2026-09-22",
                                "end": "2026-09-22",
                                "ref": "AWS IAM: https://000002.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
                        },
                        {
                                "day": "4",
                                "desc": "- Learn the fundamentals of Amazon Virtual Private Cloud (VPC).\n- Understand CIDR Blocks and private IP addressing.\n- Learn about public and private subnets.\n- Study Internet Gateway, Route Table, and NAT Gateway concepts.\n- Explore the VPC Dashboard and networking resources.",
                                "start": "2026-09-23",
                                "end": "2026-09-23",
                                "ref": "Amazon VPC: https://000003.awsstudygroup.com/"
                        },
                        {
                                "day": "5",
                                "desc": "- Practice creating a custom Amazon VPC.\n- Create public and private subnets.\n- Configure an Internet Gateway.\n- Create and associate Route Tables with subnets.\n- Configure Security Groups for basic network access control.",
                                "start": "2026-09-24",
                                "end": "2026-09-24",
                                "ref": "Amazon VPC: https://000003.awsstudygroup.com/"
                        },
                        {
                                "day": "6",
                                "desc": "- Review the networking architecture created during the week.\n- Practice launching an EC2 instance in a custom public subnet.\n- Configure SSH access through Security Group rules.\n- Test network connectivity to the EC2 instance.\n- Review IAM and VPC security best practices.\n- Clean up unnecessary lab resources to avoid additional charges.",
                                "start": "2026-09-25",
                                "end": "2026-09-25",
                                "ref": "Amazon VPC: https://000003.awsstudygroup.com/\nAmazon EC2: https://000004.awsstudygroup.com/"
                        }
                ]
        }
};
    } else if (weekNum === 3) {
      return {
        "weekNum": 3,
        "vi": {
                "topic": "Amazon S3, Static Website & CloudFront (28/09/2026 – 02/10/2026)",
                "objectives": "- Understand Amazon S3 and the fundamentals of object storage.\n- Learn how to create and manage S3 Buckets and Objects.\n- Understand S3 storage classes, versioning, encryption, and access permissions.\n- Practice uploading, downloading, and managing files using AWS Console and AWS CLI.\n- Learn how to deploy a static website using Amazon S3.\n- Understand Amazon CloudFront and its role in content delivery.\n- Practice integrating Amazon S3 with CloudFront for secure website delivery.",
                "achievements": "- Understood the fundamentals of Amazon S3 and object storage.\n- Learned the differences between object storage, block storage, and file storage.\n- Understood the major Amazon S3 components:\n  - Bucket\n  - Object\n  - Object Key\n  - Storage Class\n  - Versioning\n  - Bucket Policy\n  - Block Public Access\n- Practiced creating and configuring S3 Buckets.\n- Successfully uploaded, downloaded, and managed files using AWS Console and AWS CLI.\n- Learned how S3 Versioning helps preserve multiple versions of objects.\n- Understood the purpose of S3 Bucket Policies and public access restrictions.\n- Practiced configuring Amazon S3 Static Website Hosting.\n- Learned the fundamentals of Amazon CloudFront and Content Delivery Networks (CDN).\n- Practiced delivering static website content through CloudFront.\n- Understood how to use CloudFront Origin Access Control (OAC) to restrict direct access to S3 content.\n- Gained practical experience in cloud storage management and static website deployment.",
                "tasks": [
                        {
                                "day": "2",
                                "desc": "- Learn the fundamentals of Amazon Simple Storage Service (S3).\n- Understand object storage and its common use cases.\n- Learn about S3 Buckets, Objects, Keys, and Storage Classes.\n- Compare Amazon S3 with Amazon EBS.\n- Explore the Amazon S3 Management Console.",
                                "start": "2026-09-28",
                                "end": "2026-09-28",
                                "ref": "Amazon S3: https://000057.awsstudygroup.com/"
                        },
                        {
                                "day": "3",
                                "desc": "- Practice creating an Amazon S3 Bucket.\n- Upload, download, and delete files.\n- Practice managing objects using AWS CLI.\n- Learn about S3 Versioning and Server-Side Encryption.\n- Understand Bucket Policies and Block Public Access settings.",
                                "start": "2026-09-29",
                                "end": "2026-09-29",
                                "ref": "Amazon S3: https://000057.awsstudygroup.com/\nAWS CLI: https://000011.awsstudygroup.com/"
                        },
                        {
                                "day": "4",
                                "desc": "- Learn about Static Website Hosting with Amazon S3.\n- Prepare a basic static website using HTML and CSS.\n- Upload website files to an S3 Bucket.\n- Configure Static Website Hosting settings.\n- Learn about index.html, error.html, and website endpoints.\n- Test website accessibility.",
                                "start": "2026-09-30",
                                "end": "2026-09-30",
                                "ref": "Amazon S3 Static Website: https://000057.awsstudygroup.com/3-staticwebsite/"
                        },
                        {
                                "day": "5",
                                "desc": "- Learn the fundamentals of Content Delivery Networks (CDN).\n- Understand Amazon CloudFront, Edge Locations, and Distributions.\n- Learn how CloudFront caches and delivers web content.\n- Study CloudFront Origins and cache behavior.\n- Understand Origin Access Control (OAC) for Amazon S3.",
                                "start": "2026-10-01",
                                "end": "2026-10-01",
                                "ref": "Amazon CloudFront: https://000094.awsstudygroup.com/"
                        },
                        {
                                "day": "6",
                                "desc": "- Practice creating a CloudFront Distribution.\n- Configure Amazon S3 as a CloudFront Origin.\n- Configure secure access to the S3 Bucket using OAC.\n- Test static website delivery through CloudFront.\n- Review the S3 and CloudFront architecture.\n- Clean up unnecessary resources and review service costs.",
                                "start": "2026-10-02",
                                "end": "2026-10-02",
                                "ref": "Amazon S3: https://000057.awsstudygroup.com/\nAmazon CloudFront: https://000094.awsstudygroup.com/"
                        }
                ]
        },
        "en": {
                "topic": "Amazon S3, Static Website & CloudFront (28/09/2026 – 02/10/2026)",
                "objectives": "- Understand Amazon S3 and the fundamentals of object storage.\n- Learn how to create and manage S3 Buckets and Objects.\n- Understand S3 storage classes, versioning, encryption, and access permissions.\n- Practice uploading, downloading, and managing files using AWS Console and AWS CLI.\n- Learn how to deploy a static website using Amazon S3.\n- Understand Amazon CloudFront and its role in content delivery.\n- Practice integrating Amazon S3 with CloudFront for secure website delivery.",
                "achievements": "- Understood the fundamentals of Amazon S3 and object storage.\n- Learned the differences between object storage, block storage, and file storage.\n- Understood the major Amazon S3 components:\n  - Bucket\n  - Object\n  - Object Key\n  - Storage Class\n  - Versioning\n  - Bucket Policy\n  - Block Public Access\n- Practiced creating and configuring S3 Buckets.\n- Successfully uploaded, downloaded, and managed files using AWS Console and AWS CLI.\n- Learned how S3 Versioning helps preserve multiple versions of objects.\n- Understood the purpose of S3 Bucket Policies and public access restrictions.\n- Practiced configuring Amazon S3 Static Website Hosting.\n- Learned the fundamentals of Amazon CloudFront and Content Delivery Networks (CDN).\n- Practiced delivering static website content through CloudFront.\n- Understood how to use CloudFront Origin Access Control (OAC) to restrict direct access to S3 content.\n- Gained practical experience in cloud storage management and static website deployment.",
                "tasks": [
                        {
                                "day": "2",
                                "desc": "- Learn the fundamentals of Amazon Simple Storage Service (S3).\n- Understand object storage and its common use cases.\n- Learn about S3 Buckets, Objects, Keys, and Storage Classes.\n- Compare Amazon S3 with Amazon EBS.\n- Explore the Amazon S3 Management Console.",
                                "start": "2026-09-28",
                                "end": "2026-09-28",
                                "ref": "Amazon S3: https://000057.awsstudygroup.com/"
                        },
                        {
                                "day": "3",
                                "desc": "- Practice creating an Amazon S3 Bucket.\n- Upload, download, and delete files.\n- Practice managing objects using AWS CLI.\n- Learn about S3 Versioning and Server-Side Encryption.\n- Understand Bucket Policies and Block Public Access settings.",
                                "start": "2026-09-29",
                                "end": "2026-09-29",
                                "ref": "Amazon S3: https://000057.awsstudygroup.com/\nAWS CLI: https://000011.awsstudygroup.com/"
                        },
                        {
                                "day": "4",
                                "desc": "- Learn about Static Website Hosting with Amazon S3.\n- Prepare a basic static website using HTML and CSS.\n- Upload website files to an S3 Bucket.\n- Configure Static Website Hosting settings.\n- Learn about index.html, error.html, and website endpoints.\n- Test website accessibility.",
                                "start": "2026-09-30",
                                "end": "2026-09-30",
                                "ref": "Amazon S3 Static Website: https://000057.awsstudygroup.com/3-staticwebsite/"
                        },
                        {
                                "day": "5",
                                "desc": "- Learn the fundamentals of Content Delivery Networks (CDN).\n- Understand Amazon CloudFront, Edge Locations, and Distributions.\n- Learn how CloudFront caches and delivers web content.\n- Study CloudFront Origins and cache behavior.\n- Understand Origin Access Control (OAC) for Amazon S3.",
                                "start": "2026-10-01",
                                "end": "2026-10-01",
                                "ref": "Amazon CloudFront: https://000094.awsstudygroup.com/"
                        },
                        {
                                "day": "6",
                                "desc": "- Practice creating a CloudFront Distribution.\n- Configure Amazon S3 as a CloudFront Origin.\n- Configure secure access to the S3 Bucket using OAC.\n- Test static website delivery through CloudFront.\n- Review the S3 and CloudFront architecture.\n- Clean up unnecessary resources and review service costs.",
                                "start": "2026-10-02",
                                "end": "2026-10-02",
                                "ref": "Amazon S3: https://000057.awsstudygroup.com/\nAmazon CloudFront: https://000094.awsstudygroup.com/"
                        }
                ]
        }
};
    } else if (weekNum === 4) {
      return {
        "weekNum": 4,
        "vi": {
                "topic": "Amazon RDS, CloudWatch & AWS Budgets (05/10/2026 – 09/10/2026)",
                "objectives": "- Understand the fundamentals of Amazon Relational Database Service (RDS).\n- Learn about relational databases and managed database services on AWS.\n- Understand RDS DB Instances, Storage, Security Groups, and automated backups.\n- Practice creating and connecting to an Amazon RDS database.\n- Learn how Amazon CloudWatch monitors AWS resources and applications.\n- Practice monitoring EC2 performance using CloudWatch metrics and alarms.\n- Understand AWS Budgets and basic cloud cost management practices.",
                "achievements": "- Understood the basic concepts of relational databases and Amazon RDS.\n- Learned the differences between self-managed databases on EC2 and managed databases using Amazon RDS.\n- Understood the fundamental components of Amazon RDS:\n  - DB Instance\n  - Database Engine\n  - DB Instance Class\n  - Storage\n  - DB Subnet Group\n  - Security Group\n  - Automated Backup\n  - Multi-AZ Deployment\n- Practiced creating and configuring an Amazon RDS database instance.\n- Learned how to configure database network connectivity and access permissions.\n- Practiced connecting to a database and executing basic SQL queries.\n- Understood the fundamentals of Amazon CloudWatch.\n- Learned about CloudWatch Metrics, Logs, Dashboards, and Alarms.\n- Practiced monitoring Amazon EC2 performance using CloudWatch.\n- Learned how to configure basic CloudWatch alarms.\n- Understood AWS Budgets and its role in cloud cost management.\n- Practiced reviewing AWS resource usage and estimated costs.",
                "tasks": [
                        {
                                "day": "2",
                                "desc": "- Learn the fundamentals of relational databases and Amazon RDS.\n- Understand managed database services on AWS.\n- Learn about supported RDS database engines.\n- Study DB Instance Classes, Storage, and Backup options.\n- Compare databases hosted on EC2 with Amazon RDS.",
                                "start": "2026-10-05",
                                "end": "2026-10-05",
                                "ref": "Amazon RDS: https://000005.awsstudygroup.com/"
                        },
                        {
                                "day": "3",
                                "desc": "- Practice creating an Amazon RDS database instance.\n- Configure database engine, instance class, and storage.\n- Learn about DB Subnet Groups and VPC integration.\n- Configure Security Groups for database connectivity.\n- Review database endpoint, port, and connection settings.",
                                "start": "2026-10-06",
                                "end": "2026-10-06",
                                "ref": "Amazon RDS: https://000005.awsstudygroup.com/\nAmazon VPC: https://000003.awsstudygroup.com/"
                        },
                        {
                                "day": "4",
                                "desc": "- Practice connecting to an Amazon RDS database.\n- Execute basic SQL queries to create tables and manage records.\n- Learn about automated backups and database snapshots.\n- Understand the concept of Multi-AZ Deployment.\n- Review RDS security and access management practices.",
                                "start": "2026-10-07",
                                "end": "2026-10-07",
                                "ref": "Amazon RDS: https://000005.awsstudygroup.com/"
                        },
                        {
                                "day": "5",
                                "desc": "- Learn the fundamentals of Amazon CloudWatch.\n- Understand CloudWatch Metrics, Logs, Dashboards, and Alarms.\n- Explore CloudWatch metrics for Amazon EC2.\n- Practice monitoring CPU utilization and instance status.\n- Create a basic CloudWatch alarm for EC2 monitoring.",
                                "start": "2026-10-08",
                                "end": "2026-10-08",
                                "ref": "Amazon CloudWatch: https://000008.awsstudygroup.com/"
                        },
                        {
                                "day": "6",
                                "desc": "- Learn about AWS Budgets and basic cloud cost optimization.\n- Review AWS billing information and estimated service costs.\n- Practice configuring a basic cost budget and alert threshold.\n- Review EC2, RDS, and CloudWatch resource usage.\n- Summarize the week's database and monitoring activities.\n- Delete unnecessary lab resources to minimize costs.",
                                "start": "2026-10-09",
                                "end": "2026-10-09",
                                "ref": "AWS Budgets: https://000007.awsstudygroup.com/\nAmazon CloudWatch: https://000008.awsstudygroup.com/"
                        }
                ]
        },
        "en": {
                "topic": "Amazon RDS, CloudWatch & AWS Budgets (05/10/2026 – 09/10/2026)",
                "objectives": "- Understand the fundamentals of Amazon Relational Database Service (RDS).\n- Learn about relational databases and managed database services on AWS.\n- Understand RDS DB Instances, Storage, Security Groups, and automated backups.\n- Practice creating and connecting to an Amazon RDS database.\n- Learn how Amazon CloudWatch monitors AWS resources and applications.\n- Practice monitoring EC2 performance using CloudWatch metrics and alarms.\n- Understand AWS Budgets and basic cloud cost management practices.",
                "achievements": "- Understood the basic concepts of relational databases and Amazon RDS.\n- Learned the differences between self-managed databases on EC2 and managed databases using Amazon RDS.\n- Understood the fundamental components of Amazon RDS:\n  - DB Instance\n  - Database Engine\n  - DB Instance Class\n  - Storage\n  - DB Subnet Group\n  - Security Group\n  - Automated Backup\n  - Multi-AZ Deployment\n- Practiced creating and configuring an Amazon RDS database instance.\n- Learned how to configure database network connectivity and access permissions.\n- Practiced connecting to a database and executing basic SQL queries.\n- Understood the fundamentals of Amazon CloudWatch.\n- Learned about CloudWatch Metrics, Logs, Dashboards, and Alarms.\n- Practiced monitoring Amazon EC2 performance using CloudWatch.\n- Learned how to configure basic CloudWatch alarms.\n- Understood AWS Budgets and its role in cloud cost management.\n- Practiced reviewing AWS resource usage and estimated costs.",
                "tasks": [
                        {
                                "day": "2",
                                "desc": "- Learn the fundamentals of relational databases and Amazon RDS.\n- Understand managed database services on AWS.\n- Learn about supported RDS database engines.\n- Study DB Instance Classes, Storage, and Backup options.\n- Compare databases hosted on EC2 with Amazon RDS.",
                                "start": "2026-10-05",
                                "end": "2026-10-05",
                                "ref": "Amazon RDS: https://000005.awsstudygroup.com/"
                        },
                        {
                                "day": "3",
                                "desc": "- Practice creating an Amazon RDS database instance.\n- Configure database engine, instance class, and storage.\n- Learn about DB Subnet Groups and VPC integration.\n- Configure Security Groups for database connectivity.\n- Review database endpoint, port, and connection settings.",
                                "start": "2026-10-06",
                                "end": "2026-10-06",
                                "ref": "Amazon RDS: https://000005.awsstudygroup.com/\nAmazon VPC: https://000003.awsstudygroup.com/"
                        },
                        {
                                "day": "4",
                                "desc": "- Practice connecting to an Amazon RDS database.\n- Execute basic SQL queries to create tables and manage records.\n- Learn about automated backups and database snapshots.\n- Understand the concept of Multi-AZ Deployment.\n- Review RDS security and access management practices.",
                                "start": "2026-10-07",
                                "end": "2026-10-07",
                                "ref": "Amazon RDS: https://000005.awsstudygroup.com/"
                        },
                        {
                                "day": "5",
                                "desc": "- Learn the fundamentals of Amazon CloudWatch.\n- Understand CloudWatch Metrics, Logs, Dashboards, and Alarms.\n- Explore CloudWatch metrics for Amazon EC2.\n- Practice monitoring CPU utilization and instance status.\n- Create a basic CloudWatch alarm for EC2 monitoring.",
                                "start": "2026-10-08",
                                "end": "2026-10-08",
                                "ref": "Amazon CloudWatch: https://000008.awsstudygroup.com/"
                        },
                        {
                                "day": "6",
                                "desc": "- Learn about AWS Budgets and basic cloud cost optimization.\n- Review AWS billing information and estimated service costs.\n- Practice configuring a basic cost budget and alert threshold.\n- Review EC2, RDS, and CloudWatch resource usage.\n- Summarize the week's database and monitoring activities.\n- Delete unnecessary lab resources to minimize costs.",
                                "start": "2026-10-09",
                                "end": "2026-10-09",
                                "ref": "AWS Budgets: https://000007.awsstudygroup.com/\nAmazon CloudWatch: https://000008.awsstudygroup.com/"
                        }
                ]
        }
      };
    } else if (weekNum === 5) {
      return {
        "weekNum": 5,
        "vi": {
          "topic": "Integrated AWS Lab, Testing & Documentation (12/10/2026 – 16/10/2026)",
          "objectives": "- Review and consolidate the AWS knowledge acquired during the previous four weeks.\n- Understand how IAM, VPC, EC2, RDS, S3, and CloudWatch work together.\n- Design a basic AWS cloud architecture for a simple web application.\n- Practice deploying and configuring multiple AWS services in an integrated environment.\n- Test application connectivity, resource permissions, and network security.\n- Monitor AWS resources and review basic cloud operating costs.\n- Improve troubleshooting, technical documentation, and cloud infrastructure management skills.",
          "achievements": "- Consolidated fundamental knowledge of AWS Cloud Computing and cloud infrastructure.\n- Understood the relationships between major AWS services:\n  - IAM\n  - VPC\n  - EC2\n  - EBS\n  - S3\n  - RDS\n  - CloudWatch\n  - AWS Budgets\n- Designed a basic AWS cloud architecture for a simple web application.\n- Practiced creating and configuring a custom VPC with public and private subnets.\n- Practiced deploying an EC2 instance and configuring network access.\n- Configured an IAM Role for EC2 to access authorized AWS resources.\n- Practiced storing and retrieving files from Amazon S3.\n- Practiced connecting an EC2-based application to an Amazon RDS database.\n- Learned how to verify network connectivity and troubleshoot configuration issues.\n- Practiced monitoring EC2 and RDS resources using Amazon CloudWatch.\n- Reviewed AWS security configurations, resource usage, and estimated costs.\n- Prepared technical documentation describing the deployed AWS infrastructure.\n- Improved practical skills in AWS resource deployment, monitoring, troubleshooting, and management.",
          "tasks": [
            {
              "day": "2",
              "desc": "- Review AWS knowledge acquired during Weeks 1–4.\n- Review IAM, VPC, EC2, S3, RDS, and CloudWatch concepts.\n- Learn about the architecture of a basic cloud-hosted web application.\n- Design a simple AWS infrastructure diagram.\n- Identify the required AWS resources and their relationships.\n- Prepare the environment for an integrated hands-on lab.",
              "start": "2026-10-12",
              "end": "2026-10-12",
              "ref": "Cloud Journey: https://cloudjourney.awsstudygroup.com/\nAmazon VPC: https://000003.awsstudygroup.com/"
            },
            {
              "day": "3",
              "desc": "- Practice creating a custom VPC for a web application.\n- Configure public and private subnets.\n- Configure Internet Gateway, Route Tables, and Security Groups.\n- Launch an EC2 Linux instance in the public subnet.\n- Configure SSH access and verify instance connectivity.\n- Attach an IAM Role to the EC2 instance.",
              "start": "2026-10-13",
              "end": "2026-10-13",
              "ref": "Amazon VPC: https://000003.awsstudygroup.com/\nAmazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            },
            {
              "day": "4",
              "desc": "- Practice preparing a basic web application environment on EC2.\n- Configure a web server and verify HTTP connectivity.\n- Create an Amazon S3 Bucket for application files.\n- Configure appropriate IAM permissions for accessing S3.\n- Practice transferring files between EC2 and Amazon S3.\n- Review application security and resource access settings.",
              "start": "2026-10-14",
              "end": "2026-10-14",
              "ref": "Amazon EC2: https://000004.awsstudygroup.com/\nAmazon S3: https://000057.awsstudygroup.com/"
            },
            {
              "day": "5",
              "desc": "- Review Amazon RDS configuration and database connectivity.\n- Practice creating an RDS database for the web application.\n- Configure database access through Security Groups.\n- Test connectivity between EC2 and RDS.\n- Execute basic SQL queries to verify database operations.\n- Identify and troubleshoot common connection issues.",
              "start": "2026-10-15",
              "end": "2026-10-15",
              "ref": "Amazon RDS: https://000005.awsstudygroup.com/\nAmazon VPC: https://000003.awsstudygroup.com/"
            },
            {
              "day": "6",
              "desc": "- Review the integrated AWS architecture and deployed resources.\n- Practice monitoring EC2 and RDS using Amazon CloudWatch.\n- Check Security Groups, IAM Roles, and resource permissions.\n- Review AWS Budgets and estimated service costs.\n- Perform basic testing of the integrated AWS environment.\n- Clean up unnecessary AWS resources.\n- Prepare a summary of hands-on results and technical documentation.",
              "start": "2026-10-16",
              "end": "2026-10-16",
              "ref": "Amazon CloudWatch: https://000008.awsstudygroup.com/\nAWS Budgets: https://000007.awsstudygroup.com/"
            }
          ]
        },
        "en": {
          "topic": "Integrated AWS Lab, Testing & Documentation (12/10/2026 – 16/10/2026)",
          "objectives": "- Review and consolidate the AWS knowledge acquired during the previous four weeks.\n- Understand how IAM, VPC, EC2, RDS, S3, and CloudWatch work together.\n- Design a basic AWS cloud architecture for a simple web application.\n- Practice deploying and configuring multiple AWS services in an integrated environment.\n- Test application connectivity, resource permissions, and network security.\n- Monitor AWS resources and review basic cloud operating costs.\n- Improve troubleshooting, technical documentation, and cloud infrastructure management skills.",
          "achievements": "- Consolidated fundamental knowledge of AWS Cloud Computing and cloud infrastructure.\n- Understood the relationships between major AWS services:\n  - IAM\n  - VPC\n  - EC2\n  - EBS\n  - S3\n  - RDS\n  - CloudWatch\n  - AWS Budgets\n- Designed a basic AWS cloud architecture for a simple web application.\n- Practiced creating and configuring a custom VPC with public and private subnets.\n- Practiced deploying an EC2 instance and configuring network access.\n- Configured an IAM Role for EC2 to access authorized AWS resources.\n- Practiced storing and retrieving files from Amazon S3.\n- Practiced connecting an EC2-based application to an Amazon RDS database.\n- Learned how to verify network connectivity and troubleshoot configuration issues.\n- Practiced monitoring EC2 and RDS resources using Amazon CloudWatch.\n- Reviewed AWS security configurations, resource usage, and estimated costs.\n- Prepared technical documentation describing the deployed AWS infrastructure.\n- Improved practical skills in AWS resource deployment, monitoring, troubleshooting, and management.",
          "tasks": [
            {
              "day": "2",
              "desc": "- Review AWS knowledge acquired during Weeks 1–4.\n- Review IAM, VPC, EC2, S3, RDS, and CloudWatch concepts.\n- Learn about the architecture of a basic cloud-hosted web application.\n- Design a simple AWS infrastructure diagram.\n- Identify the required AWS resources and their relationships.\n- Prepare the environment for an integrated hands-on lab.",
              "start": "2026-10-12",
              "end": "2026-10-12",
              "ref": "Cloud Journey: https://cloudjourney.awsstudygroup.com/\nAmazon VPC: https://000003.awsstudygroup.com/"
            },
            {
              "day": "3",
              "desc": "- Practice creating a custom VPC for a web application.\n- Configure public and private subnets.\n- Configure Internet Gateway, Route Tables, and Security Groups.\n- Launch an EC2 Linux instance in the public subnet.\n- Configure SSH access and verify instance connectivity.\n- Attach an IAM Role to the EC2 instance.",
              "start": "2026-10-13",
              "end": "2026-10-13",
              "ref": "Amazon VPC: https://000003.awsstudygroup.com/\nAmazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            },
            {
              "day": "4",
              "desc": "- Practice preparing a basic web application environment on EC2.\n- Configure a web server and verify HTTP connectivity.\n- Create an Amazon S3 Bucket for application files.\n- Configure appropriate IAM permissions for accessing S3.\n- Practice transferring files between EC2 and Amazon S3.\n- Review application security and resource access settings.",
              "start": "2026-10-14",
              "end": "2026-10-14",
              "ref": "Amazon EC2: https://000004.awsstudygroup.com/\nAmazon S3: https://000057.awsstudygroup.com/"
            },
            {
              "day": "5",
              "desc": "- Review Amazon RDS configuration and database connectivity.\n- Practice creating an RDS database for the web application.\n- Configure database access through Security Groups.\n- Test connectivity between EC2 and RDS.\n- Execute basic SQL queries to verify database operations.\n- Identify and troubleshoot common connection issues.",
              "start": "2026-10-15",
              "end": "2026-10-15",
              "ref": "Amazon RDS: https://000005.awsstudygroup.com/\nAmazon VPC: https://000003.awsstudygroup.com/"
            },
            {
              "day": "6",
              "desc": "- Review the integrated AWS architecture and deployed resources.\n- Practice monitoring EC2 and RDS using Amazon CloudWatch.\n- Check Security Groups, IAM Roles, and resource permissions.\n- Review AWS Budgets and estimated service costs.\n- Perform basic testing of the integrated AWS environment.\n- Clean up unnecessary AWS resources.\n- Prepare a summary of hands-on results and technical documentation.",
              "start": "2026-10-16",
              "end": "2026-10-16",
              "ref": "Amazon CloudWatch: https://000008.awsstudygroup.com/\nAWS Budgets: https://000007.awsstudygroup.com/"
            }
          ]
        }
      };
    } else {
      return {
        weekNum: weekNum,
        vi: {
          objectives: `Mục tiêu đào tạo và nghiên cứu kỹ thuật của Tuần ${weekNum}.`,
          achievements: `- Hoàn thành xuất sắc các mục tiêu nghiên cứu và bài tập lab thực hành của Tuần ${weekNum}:\n  + Nghiên cứu kiến trúc giải pháp AWS\n  + Thực hành cấu hình dịch vụ theo kịch bản\n  + Ghi chép tài liệu kỹ thuật chi tiết\n- Trao đổi tiến độ định kỳ và nhận đánh giá từ mentor.`,
          tasks: [
            { day: "2", desc: `- Khởi động Tuần ${weekNum}\n- Lập kế hoạch phân công nhiệm vụ kỹ thuật`, start: "", end: "", ref: "https://cloudjourney.awsstudygroup.com/" },
            { day: "3", desc: `- Nghiên cứu lý thuyết dịch vụ AWS theo lộ trình Tuần ${weekNum}`, start: "", end: "", ref: "AWS Documentation" },
            { day: "4", desc: `- Thực hành cấu hình Hands-on Lab trên AWS Console & CLI`, start: "", end: "", ref: "AWS Hands-on Guide" },
            { day: "5", desc: `- Xây dựng tài liệu kỹ thuật và hoàn thiện bài lab`, start: "", end: "", ref: "Internal Lab Guide" },
            { day: "6", desc: `- Tổng kết kết quả Tuần ${weekNum}\n- Báo cáo tiến độ Sprint Review với Mentor`, start: "", end: "", ref: "FCAJ Tracker" }
          ]
        },
        en: {
          objectives: `Technical training and research objectives for Week ${weekNum}.`,
          achievements: `- Successfully accomplished technical research objectives and hands-on lab exercises for Week ${weekNum}:\n  + Studied AWS solution architecture\n  + Configured hands-on labs per scenarios\n  + Maintained comprehensive technical documentation\n- Conducted weekly sprint review and progress alignment with mentor.`,
          tasks: [
            { day: "2", desc: `- Kickoff Week ${weekNum}\n- Establish technical milestones and tasks`, start: "", end: "", ref: "https://cloudjourney.awsstudygroup.com/" },
            { day: "3", desc: `- Study foundational AWS documentation for Week ${weekNum}`, start: "", end: "", ref: "AWS Documentation" },
            { day: "4", desc: `- Hands-on configuration of AWS services via Console & CLI`, start: "", end: "", ref: "AWS Hands-on Guide" },
            { day: "5", desc: `- Author technical guide and finalize hands-on exercises`, start: "", end: "", ref: "Internal Lab Guide" },
            { day: "6", desc: `- Weekly summary for Week ${weekNum}\n- Sprint review and 1-on-1 with mentor`, start: "", end: "", ref: "FCAJ Tracker" }
          ]
        }
      };
    }
  }),
  proposal: {
    vi: {
      summary: "Hệ thống IoT Weather Platform được thiết kế nhằm nâng cao năng lực thu thập và phân tích dữ liệu thời tiết cho phòng thí nghiệm tại TP.HCM. Giải pháp hỗ trợ kết nối từ 5 đến 15 trạm quan trắc sử dụng vi điều khiển ESP32 và Raspberry Pi truyền tin qua giao thức MQTT. Nền tảng tận dụng tối đa các dịch vụ AWS Serverless giúp giám sát thời gian thực, dự báo xu hướng với chi phí vận hành tối ưu, phân quyền truy cập an toàn qua Amazon Cognito.",
      problem: "Các trạm khí tượng hiện tại yêu cầu thu thập số liệu thủ công, dễ thất thoát và khó quản lý khi số lượng trạm tăng lên. Chưa có hệ thống tập trung cung cấp dữ liệu tức thời và các giải pháp thương mại bên ngoài quá đắt đỏ, phức tạp đối với nhu cầu nghiên cứu học thuật.",
      solution: "Nền tảng sử dụng AWS IoT Core tiếp nhận dữ liệu MQTT, AWS Lambda và API Gateway xử lý logic, Amazon S3 lưu trữ dữ liệu dạng Data Lake, kết hợp AWS Glue Crawlers và ETL jobs trích xuất dữ liệu phục vụ phân tích. Giao diện trực quan được xây dựng trên AWS Amplify với Next.js.\nLợi ích: Giảm thiểu thao tác báo cáo thủ công, cung cấp kho dữ liệu chuẩn hóa cho các nhà nghiên cứu AI huấn luyện mô hình dự báo thời tiết, và giữ chi phí đám mây ở mức dưới 10 USD/tháng.",
      arch: "Cảm biến ESP32 -> Giao thức MQTT bảo mật TLS -> AWS IoT Core Rule Engine -> AWS Lambda (Kiểm tra & Chuẩn hóa) -> Amazon S3 Raw Bucket -> AWS Glue ETL -> Amazon S3 Processed Lake -> Amazon Athena / QuickSight / Dashboard Next.js qua API Gateway.",
      budget: "- AWS IoT Core (500.000 bản tin/tháng): $0.50\n- AWS Lambda (1 triệu lượt gọi, 128MB): $0.20 (Thuộc gói miễn phí)\n- Amazon S3 lưu trữ và truy xuất: $1.20\n- AWS Glue ETL Jobs (Chạy theo lịch): $3.50\n- Amazon Cognito User Pool: $0.00 (Miễn phí)\n-> Tổng chi phí ước tính: ~$5.40 USD/tháng."
    },
    en: {
      summary: "The IoT Weather Platform is designed for the ITea Lab team in Ho Chi Minh City to enhance weather data collection and analysis. It supports up to 5 weather stations, with potential scalability to 10-15, utilizing Raspberry Pi edge devices with ESP32 sensors to transmit data via MQTT. The platform leverages AWS Serverless services to deliver real-time monitoring, predictive analytics, and cost efficiency, with access restricted to lab members via Amazon Cognito.",
      problem: "Current weather stations require manual data collection, becoming unmanageable with multiple units. There is no centralized system for real-time data or analytics, and third-party commercial platforms are costly and overly complex for academic research.",
      solution: "The platform uses AWS IoT Core to ingest MQTT data, AWS Lambda and API Gateway for processing, Amazon S3 for storage (including a data lake), and AWS Glue Crawlers/ETL jobs to extract, transform, and load data for analysis. AWS Amplify with Next.js provides the web dashboard.\nBenefits: Reduces manual reporting, provides centralized live data, enables AI researchers to train climate models, and optimizes operational cloud costs to under $10/month.",
      arch: "ESP32 Sensors -> MQTT over TLS -> AWS IoT Core Rule Engine -> AWS Lambda (Validation & Formatting) -> Amazon S3 Raw Bucket -> AWS Glue ETL -> Amazon S3 Processed Lake -> Amazon Athena / QuickSight / Next.js Dashboard via API Gateway.",
      budget: "- AWS IoT Core (500k messages/month): $0.50\n- AWS Lambda (1M executions, 128MB): $0.20 (Covered by Free Tier)\n- Amazon S3 Storage & API Calls: $1.20\n- AWS Glue ETL Jobs (On-demand): $3.50\n- Amazon Cognito User Pool: $0.00 (Miễn phí)\n-> Estimated total cost: ~$5.40 USD/month."
    }
  },
  blogs: {
    vi: [
      {
        id: "blog-1",
        title: "Blog 1 - CHÍNH SÁCH SESSION POLICIES TRONG AMAZON EKS POD IDENTITY",
        url: "https://awsstudygroup.com",
        date: "15/09/2026",
        snippet: "Amazon EKS Pod Identity vừa bổ sung tính năng session policies, cho phép thu hẹp quyền hạn IAM một cách linh hoạt và chính xác cho từng pod mà không cần tạo nhiều IAM role riêng biệt. Đây là bước tiến quan trọng giúp áp dụng nguyên tắc đặc quyền tối thiểu hiệu quả hơn trong môi trường Kubernetes quy mô lớn.\n\nCác điểm cốt lõi cần nắm:\n• Session policy là chính sách IAM nội tuyến được chỉ định khi tạo hoặc cập nhật liên kết Pod Identity.\n• Quyền hạn thực tế = giao thoa giữa quyền của IAM role và session policy.\n• Giúp tái sử dụng an toàn cùng một IAM role cho nhiều workload có nhu cầu quyền khác nhau."
      },
      {
        id: "blog-2",
        title: "Blog 2 - BẢO MẬT TRUY CẬP S3 HYBRID THÔNG QUA AWS PRIVATELINK",
        url: "https://awsstudygroup.com",
        date: "28/09/2026",
        snippet: "Bài viết hướng dẫn chi tiết cách định tuyến lưu lượng giữa trung tâm dữ liệu On-premises và Amazon S3 một cách bảo mật tuyệt đối, không đi qua Internet công cộng bằng cách sử dụng Interface Endpoints, AWS Transit Gateway và Route 53 Resolver."
      },
      {
        id: "blog-3",
        title: "Blog 3 - TỐI ƯU HÓA COLD START CHO AWS LAMBDA VỚI SNAPSTART",
        url: "https://awsstudygroup.com",
        date: "10/10/2026",
        snippet: "Phân tích chuyên sâu về cơ chế chụp nhanh trạng thái bộ nhớ AWS Lambda SnapStart, tối ưu hóa thời gian khởi động nguội cho các microservices Serverless xuống mức dưới 100ms."
      },
      {
        id: "blog-4",
        title: "Blog 4 - AMAZON S3 EXPRESS ONE ZONE – NHANH HƠN TỚI 10 LẦN, NHƯNG HỆ THỐNG CÓ THỰC SỰ HIỆU QUẢ HƠN?",
        url: "https://www.facebook.com/groups/awsstudygroupfcj",
        date: "18/10/2026",
        image: "assets/images/s3-express-one-zone-architecture.png",
        snippet: `Trong các hệ thống AI/ML, việc xử lý hàng triệu hình ảnh hoặc tệp dữ liệu đòi hỏi ứng dụng liên tục truy xuất dữ liệu từ Amazon S3.
Tuy nhiên, khi tốc độ đọc dữ liệu không theo kịp khả năng xử lý của CPU/GPU, hệ thống có thể gặp I/O Bottleneck – tài nguyên tính toán phải chờ dữ liệu, kéo dài thời gian thực thi và làm tăng chi phí.
Để giải quyết bài toán này, AWS cung cấp Amazon S3 Express One Zone, một storage class được tối ưu cho các ứng dụng yêu cầu độ trễ truy cập thấp.

1. AMAZON S3 EXPRESS ONE ZONE LÀ GÌ?
Amazon S3 Express One Zone là storage class hiệu năng cao, sử dụng Directory Bucket và lưu trữ dữ liệu trong một Availability Zone (AZ).
Khác với S3 Standard lưu trữ dự phòng trên nhiều AZ, S3 Express One Zone cho phép đặt tài nguyên tính toán và dữ liệu trong cùng AZ để tối ưu truy xuất.
Theo AWS, dịch vụ có thể cung cấp độ trễ ở mức vài mili giây và tốc độ truy cập nhanh hơn tới 10 lần so với S3 Standard trong điều kiện phù hợp.

2. ƯU ĐIỂM VÀ HẠN CHẾ
Ưu điểm:
+ Giảm độ trễ truy cập dữ liệu, phù hợp với workload có tần suất đọc/ghi cao.
+ Có thể giảm thời gian chờ I/O, nâng cao hiệu quả sử dụng tài nguyên tính toán.
+ Có tiềm năng giảm chi phí compute nếu tác vụ hoàn thành nhanh hơn.
Hạn chế:
+ Chỉ lưu trữ trong một AZ, không có khả năng dự phòng đa AZ như S3 Standard.
+ Chi phí lưu trữ và request vẫn phát sinh; hiệu quả kinh tế phụ thuộc vào workload.
+ Không hỗ trợ một số tính năng như S3 Versioning và S3 Replication.
+ Việc tăng tốc storage không đảm bảo toàn bộ hệ thống nhanh hơn tương ứng.

3. PHÂN TÍCH HIỆU NĂNG QUA VÍ DỤ
Giả sử một tác vụ AI xử lý hình ảnh mất 100 phút:
• Đọc dữ liệu từ S3: 20 phút.
• Tiền xử lý và tính toán bằng CPU/GPU: 80 phút.
Nếu thời gian đọc dữ liệu giảm 10 lần, tổng thời gian xử lý còn:
(20 ÷ 10) + 80 = 82 phút.
Như vậy, dù phần đọc dữ liệu nhanh hơn 10 lần, tổng thời gian hoàn thành tác vụ chỉ giảm 18%.
Đây là ví dụ giả định dựa trên nguyên lý Amdahl, cho thấy hiệu quả tối ưu phụ thuộc vào tỷ trọng thời gian của thành phần được cải thiện. Phép tính giả định các công đoạn diễn ra tuần tự và những yếu tố khác không thay đổi.
Vì vậy, trước khi nâng cấp storage, cần xác định hệ thống thực sự bị giới hạn bởi I/O hay CPU/GPU.

4. GÓC NHÌN VÀ ĐỀ XUẤT ỨNG DỤNG
Thay vì chuyển toàn bộ dữ liệu sang S3 Express One Zone, mình đề xuất cân nhắc kiến trúc lưu trữ hai lớp:
- S3 Standard: Lưu dữ liệu gốc, cần bảo vệ trên nhiều AZ.
- S3 Express One Zone: Lưu tập dữ liệu làm việc được truy cập thường xuyên.
- EC2/GPU: Đặt cùng AZ với S3 Express One Zone để tối ưu truy cập dữ liệu.
Ví dụ: Một hệ thống AI lưu trữ 1 triệu hình ảnh nhưng mỗi ngày chỉ xử lý 100.000 ảnh. Thay vì chuyển toàn bộ dữ liệu, hệ thống có thể sao chép 100.000 ảnh cần xử lý sang S3 Express One Zone.
Cách này tập trung storage hiệu năng cao vào dữ liệu thực sự cần thiết, đồng thời giữ bản gốc trên S3 Standard.
Tuy nhiên, cần đánh giá một câu hỏi: Chi phí và thời gian sao chép dữ liệu có nhỏ hơn lợi ích tiết kiệm được từ việc xử lý nhanh hơn hay không? Nếu không, sử dụng S3 Standard có thể vẫn hiệu quả hơn.

5. KẾT LUẬN
S3 Express One Zone là lựa chọn đáng cân nhắc cho các ứng dụng AI/ML, Data Analytics và xử lý dữ liệu có tần suất truy cập cao.
Tuy nhiên, thay vì chỉ đánh giá tốc độ truy cập, nên xác định tập dữ liệu cần tăng tốc, mức cải thiện thời gian xử lý và điểm hòa vốn chi phí.
Theo mình, hiệu quả của kiến trúc Cloud không nằm ở việc sử dụng dịch vụ nhanh nhất, mà ở việc lựa chọn đúng giải pháp cho từng phần của workload.

TÀI LIỆU THAM KHẢO
• AWS – S3 Express One Zone Performance (https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-performance.html)
• AWS – Amazon S3 Storage Classes (https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)
• AWS – S3 Express One Zone Best Practices (https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-optimizing-performance-design-patterns.html)
• AWS – Amazon S3 Pricing (https://aws.amazon.com/s3/pricing/)
#AWS #AmazonS3 #S3ExpressOneZone #CloudComputing #CloudArchitecture #PerformanceOptimization #CostOptimization #AWSStudyGroup`
      }
    ],
    en: [
      {
        id: "blog-1",
        title: "Blog 1 - SESSION POLICIES IN AMAZON EKS POD IDENTITY",
        url: "https://awsstudygroup.com",
        date: "15/09/2026",
        snippet: "Amazon EKS Pod Identity has recently added the session policies feature, allowing you to narrow IAM permissions flexibly and precisely for each pod without needing to create many separate IAM roles. This is an important step forward that helps apply the principle of least privilege more effectively in large-scale Kubernetes environments.\n\nKey points to know:\n• A session policy is an inline IAM policy specified when creating or updating a Pod Identity association.\n• Effective permissions = intersection between IAM role permissions and session policy.\n• Helps avoid over-permissioning when reusing a single IAM role for multiple workloads."
      },
      {
        id: "blog-2",
        title: "Blog 2 - SECURING S3 HYBRID WORKLOADS VIA AWS PRIVATELINK",
        url: "https://awsstudygroup.com",
        date: "28/09/2026",
        snippet: "This blog details how to route traffic securely between on-premises datacenters and Amazon S3 without exposing endpoints to the public internet using Interface Endpoints, AWS Transit Gateway, and Route 53 Resolver Rules."
      },
      {
        id: "blog-3",
        title: "Blog 3 - REDUCING COLD STARTS IN JAVA & NODE.JS ON AWS LAMBDA",
        url: "https://awsstudygroup.com",
        date: "10/10/2026",
        snippet: "An in-depth exploration of AWS Lambda SnapStart, tiered compilation, and memory provisioning best practices to optimize serverless API response times down to sub-100ms."
      },
      {
        id: "blog-4",
        title: "Blog 4 - AMAZON S3 EXPRESS ONE ZONE – UP TO 10X FASTER, BUT IS THE SYSTEM TRULY MORE EFFICIENT?",
        url: "https://www.facebook.com/groups/awsstudygroupfcj",
        date: "18/10/2026",
        image: "assets/images/s3-express-one-zone-architecture.png",
        snippet: `In AI/ML systems, processing millions of images or data files requires applications to continuously fetch data from Amazon S3.
However, when data read speeds cannot keep pace with CPU/GPU processing capabilities, the system may encounter an I/O Bottleneck — compute resources sit idle waiting for data, prolonging execution time and escalating costs.
To address this challenge, AWS offers Amazon S3 Express One Zone, a high-performance storage class purpose-built for applications demanding low-latency data access.

1. WHAT IS AMAZON S3 EXPRESS ONE ZONE?
Amazon S3 Express One Zone is a high-performance storage class that utilizes Directory Buckets and stores data within a single Availability Zone (AZ).
Unlike S3 Standard, which redundantly replicates data across multiple AZs, S3 Express One Zone allows co-locating compute and storage resources within the same AZ to optimize throughput.
According to AWS, the service can deliver single-digit millisecond data access latencies and speeds up to 10x faster than S3 Standard under optimal conditions.

2. ADVANTAGES & LIMITATIONS
Advantages:
+ Significantly reduces data access latency, ideal for high-throughput, read/write-intensive workloads.
+ Decreases I/O wait times, improving compute utilization and resource efficiency.
+ Potential to reduce overall compute costs if workloads complete faster.
Limitations:
+ Stored within a single AZ without multi-AZ redundancy like S3 Standard.
+ Storage and request charges still apply; cost-effectiveness depends heavily on workload characteristics.
+ Lacks support for specific S3 features such as S3 Versioning and S3 Replication.
+ Accelerating storage performance does not necessarily translate to a proportional speedup of the end-to-end system.

3. PERFORMANCE ANALYSIS VIA EXAMPLE (AMDAHL'S LAW)
Suppose an AI image processing job takes 100 minutes:
• Reading data from S3: 20 minutes.
• Preprocessing and model computation on CPU/GPU: 80 minutes.
If data read time is reduced by 10x, the new total execution time becomes:
(20 ÷ 10) + 80 = 82 minutes.
Thus, even with a 10x storage read acceleration, total completion time is only reduced by 18%.
This hypothetical scenario based on Amdahl's Law demonstrates that overall optimization gains are bounded by the proportion of time spent in the accelerated component.
Therefore, prior to upgrading storage tiers, it is vital to profile whether your system is genuinely I/O-bound or compute-bound.

4. ARCHITECTURAL PERSPECTIVE & RECOMMENDED APPLICATION
Instead of migrating an entire dataset to S3 Express One Zone, consider a two-tier storage architecture:
- S3 Standard: Retain primary/source data with multi-AZ durability protection.
- S3 Express One Zone: Store the active working set that is frequently accessed.
- EC2 / GPU instances: Co-located in the same AZ as S3 Express One Zone for minimal latency.
Example: An AI pipeline stores 1,000,000 images but processes only 100,000 images daily. Rather than moving all data, copy the 100,000 active images to S3 Express One Zone.
However, evaluate this question: Are the data copy costs and transfer overhead smaller than the compute savings gained from faster processing? If not, remaining on S3 Standard may be more cost-effective.

5. CONCLUSION
S3 Express One Zone is a compelling choice for AI/ML, Big Data analytics, and latency-critical workloads.
However, architects must identify the specific working set to accelerate, quantify execution time improvements, and calculate the cost break-even point.
Cloud architectural excellence does not simply mean choosing the fastest service, but rather selecting the right tool for each phase of the workload.

REFERENCES
• AWS – S3 Express One Zone Performance (https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-performance.html)
• AWS – Amazon S3 Storage Classes (https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)
• AWS – S3 Express One Zone Best Practices (https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-optimizing-performance-design-patterns.html)
• AWS – Amazon S3 Pricing (https://aws.amazon.com/s3/pricing/)
#AWS #AmazonS3 #S3ExpressOneZone #CloudComputing #CloudArchitecture #PerformanceOptimization #CostOptimization #AWSStudyGroup`
      }
    ]
  },
  events: {
    vi: [
      {
        id: "event-1",
        slug: "hoi-thao-hien-dai-hoa-ung-dung-csdl-genai",
        name: "Sự kiện 1 - Hội thảo Hiện đại hóa Ứng dụng & CSDL với GenAI",
        dateTime: "09:00, 12/08/2026",
        location: "Tầng 26, Bitexco Financial Tower, Số 02 Hải Triều, Q.1, TP.HCM",
        role: "Khách mời tham dự",
        speakers: "Jignesh Shah (Giám đốc CSDL Mã nguồn mở), Erica Liu (Chuyên gia AppMod), Fabrianne Effendi (Kiến trúc sư giải pháp Serverless)",
        shortDesc: "Chuyển đổi kiến trúc nguyên khối sang Microservices hiện đại (Queue, Cache, Messaging), phương pháp Domain-Driven Design (DDD) và ứng dụng trợ lý Amazon Q Developer.",
        highlights: "• Những hạn chế của kiến trúc nguyên khối truyền thống (chu kỳ phát hành kéo dài, chi phí vận hành cao).\n• Chuyển đổi sang kiến trúc Microservices hiện đại dựa trên 3 trụ cột: Quản lý hàng đợi, Chiến lược bộ nhớ đệm và Xử lý thông điệp linh hoạt.\n• Phương pháp thiết kế hướng tên miền Domain-Driven Design (DDD) gồm 4 bước.\n• Kiến trúc hướng sự kiện Event-Driven Architecture (Pub/Sub, Point-to-Point, Streaming).\n• Ứng dụng trợ lý AI Amazon Q Developer tự động hóa chu trình nâng cấp mã nguồn.",
        hasFullReport: false
      },
      {
        id: "event-2",
        slug: "first-cloud-ai-journey-24-10-2026",
        name: "First Cloud AI Journey: Weekly Meet Up 24/10",
        dateTime: "08:30 – 12:00, 24/10/2026",
        location: "Chưa xác nhận",
        role: "Người tham dự (Attendee)",
        speakers: "Kiệt Trần (AI Engineer, Re AI – AWS Partner)",
        topic: "Session 1 – Tích hợp Voice AI vào Contact Center doanh nghiệp trên nền tảng AWS",
        shortDesc: "Session 1 – Voice AI & Contact Center: Đàm thoại hai chiều thời gian thực với độ trễ thấp (<2s), kiến trúc Cascade (STT → LLM → Guardrails → TTS), WebRTC/UDP, EC2 GPU và tối ưu chi phí ~3.000đ/cuộc gọi.",
        highlights: "• Session 1 – Voice AI & Contact Center: Đàm thoại hai chiều thời gian thực với độ trễ thấp (<2s) và chi phí tối ưu (~3.000đ/cuộc gọi).\n• Triển khai mô hình Cascade (STT → LLM → Guardrails → TTS), đảm bảo an toàn nội dung trước khi phát âm.\n• Hạ tầng AWS: WebRTC qua UDP, Amazon EC2 GPU cho suy luận STT/TTS, AWS PrivateLink kết nối bảo mật nội bộ.\n• Case study VPBank: 282 ứng viên phỏng vấn tự động, độ chính xác nhận diện ý định 90%, tỷ lệ hoàn thành hồ sơ 62%.",
        hasFullReport: true
      }
    ],
    en: [
      {
        id: "event-1",
        slug: "hoi-thao-hien-dai-hoa-ung-dung-csdl-genai",
        name: "Event 1 - GenAI-powered App-DB Modernization Workshop",
        dateTime: "09:00, August 12, 2026",
        location: "26th Floor, Bitexco Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City",
        role: "Attendee",
        speakers: "Jignesh Shah (Director, Open Source DBs), Erica Liu (Sr. GTM Specialist), Fabrianne Effendi (Assc. Specialist SA)",
        shortDesc: "Modernizing legacy monoliths into Microservices via Queue Management, Caching Strategies, Domain-Driven Design (DDD), and Amazon Q Developer transformation agents.",
        highlights: "• Drawbacks of legacy monolithic architectures (long release cycles, higher costs).\n• Modern Microservices transition built on Queue Management, Caching Strategies, and Message Handling.\n• Domain-Driven Design (DDD): 4-step method (Identify domain events -> arrange timeline -> identify actors -> define bounded contexts).\n• Event-Driven Architecture (Pub/Sub, Point-to-point, Streaming).\n• Amazon Q Developer automated code transformation & modernization agents.",
        hasFullReport: false
      },
      {
        id: "event-2",
        slug: "first-cloud-ai-journey-24-10-2026",
        name: "First Cloud AI Journey: Weekly Meet Up 24/10",
        dateTime: "08:30 – 12:00, 24/10/2026",
        location: "Unconfirmed",
        role: "Attendee",
        speakers: "Kiệt Trần (AI Engineer, Re AI – AWS Partner)",
        topic: "Session 1 – Integrating Voice AI into Enterprise Contact Centers on AWS",
        shortDesc: "Session 1 – Voice AI & Contact Center: Real-time low-latency (<2s) conversational AI on AWS, Cascade architecture (STT → LLM → Guardrails → TTS), WebRTC/UDP, EC2 GPU, and ~3,000 VND/call cost optimization.",
        highlights: "• Session 1 – Voice AI & Contact Center: Real-time two-way voice interaction with <2s latency and ~3,000 VND/call cost optimization.\n• Cascade architecture deployment (STT → LLM → Guardrails → TTS) with content inspection prior to vocalization.\n• AWS Infrastructure: WebRTC over UDP, Amazon EC2 GPU instances for STT/TTS inference, and AWS PrivateLink for secure internal connectivity.\n• VPBank Case Study: 282 automated candidate screening interviews, 90% reported intent recognition accuracy, 62% application completion rate.",
        hasFullReport: true
      }
    ]
  },
  criteria: [
    { id: 1, title_vi: "Kiến thức & Kỹ năng chuyên môn", desc_vi: "Hiểu biết ngành, ứng dụng kiến thức vào thực tế, thành thạo công cụ, chất lượng công việc", title_en: "Professional knowledge & skills", desc_en: "Understanding of the field, applying knowledge in practice, proficiency with tools, work quality", rating: "good" },
    { id: 2, title_vi: "Khả năng học hỏi", desc_vi: "Khả năng tiếp thu kiến thức mới và học nhanh", title_en: "Ability to learn", desc_en: "Ability to absorb new knowledge and learn quickly", rating: "fair" },
    { id: 3, title_vi: "Tính chủ động", desc_vi: "Chủ động tìm kiếm công việc, không chờ đợi nhắc nhở", title_en: "Proactiveness", desc_en: "Taking initiative, seeking out tasks without waiting for instructions", rating: "good" },
    { id: 4, title_vi: "Tinh thần trách nhiệm", desc_vi: "Hoàn thành công việc đúng hạn và đảm bảo chất lượng", title_en: "Sense of responsibility", desc_en: "Completing tasks on time and ensuring quality", rating: "good" },
    { id: 5, title_vi: "Tính kỷ luật", desc_vi: "Tuân thủ lịch trình, nội quy và quy trình làm việc", title_en: "Discipline", desc_en: "Adhering to schedules, rules, and work processes", rating: "good" },
    { id: 6, title_vi: "Tinh thần cầu tiến", desc_vi: "Sẵn sàng tiếp thu phản hồi và hoàn thiện bản thân", title_en: "Progressive mindset", desc_en: "Willingness to receive feedback and improve oneself", rating: "fair" },
    { id: 7, title_vi: "Kỹ năng giao tiếp", desc_vi: "Trình bày ý tưởng và báo cáo công việc rõ ràng, mạch lạc", title_en: "Communication", desc_en: "Presenting ideas and reporting work clearly", rating: "fair" },
    { id: 8, title_vi: "Làm việc nhóm", desc_vi: "Phối hợp hiệu quả với đồng nghiệp và tham gia hoạt động nhóm", title_en: "Teamwork", desc_en: "Working effectively with colleagues and participating in teams", rating: "good" },
    { id: 9, title_vi: "Tác phong chuyên nghiệp", desc_vi: "Tôn trọng đồng nghiệp, đối tác và môi trường làm việc", title_en: "Professional conduct", desc_en: "Respecting colleagues, partners, and the work environment", rating: "good" },
    { id: 10, title_vi: "Kỹ năng giải quyết vấn đề", desc_vi: "Phát hiện vấn đề, đề xuất giải pháp và thể hiện tư duy sáng tạo", title_en: "Problem-solving skills", desc_en: "Identifying problems, proposing solutions, and showing creativity", rating: "fair" },
    { id: 11, title_vi: "Đóng góp cho dự án / đội ngũ", desc_vi: "Hiệu quả công việc, ý tưởng cải tiến, được đội ngũ ghi nhận", title_en: "Contribution to project/team", desc_en: "Work effectiveness, innovative ideas, recognition from the team", rating: "good" },
    { id: 12, title_vi: "Đánh giá tổng thể", desc_vi: "Đánh giá chung cho toàn bộ thời gian thực tập", title_en: "Overall evaluation", desc_en: "General evaluation of the entire internship period", rating: "good" }
  ],
  selfNarrative: {
    vi: "Trong suốt kỳ thực tập tại Amazon Web Services Việt Nam từ 10/08/2026 đến 10/11/2026, em đã có cơ hội quý báu để học hỏi, thực hành và vận dụng kiến thức chuyên ngành vào các dự án Cloud quy mô thực tế. Em luôn chủ động hoàn thành các bài tập lab, tham gia đầy đủ các sự kiện kỹ thuật và tích cực thảo luận cùng Mentor Trần Anh Dũng.",
    en: "During my internship at Amazon Web Services Vietnam from 10/08/2026 to 10/11/2026, I had valuable opportunities to learn, practice, and apply academic knowledge to real-world cloud architectures. I consistently took the initiative to complete hands-on labs, attended technical events, and actively collaborated with Mentor Tran Anh Dung."
  },
  needsImprovement: {
    vi: "1. Tiếp tục rèn luyện tính kỷ luật, quản lý thời gian hiệu quả hơn khi xử lý nhiều đầu việc song song.\n2. Nâng cao tư duy phân tích và xử lý sự cố kỹ thuật khi đối mặt với các kiến trúc phân tán phức tạp.\n3. Tự tin hơn khi thuyết trình và báo cáo tiến độ kỹ thuật bằng tiếng Anh trong các cuộc họp quốc tế.",
    en: "1. Continue strengthening personal discipline and time management when balancing multiple deliverables.\n2. Further enhance troubleshooting acumen when diagnosing complex distributed cloud environments.\n3. Increase confidence when presenting technical milestones in English during cross-border meetings."
  },
  feedback: {
    vi: {
      env: "Môi trường làm việc tại AWS vô cùng thân thiện, cởi mở và chuyên nghiệp. Mọi thành viên luôn sẵn sàng giải đáp và hỗ trợ bất kể khi nào gặp vướng mắc kỹ thuật. Không gian làm việc hiện đại, tạo cảm hứng sáng tạo rất cao.",
      mentor: "Mentor hướng dẫn rất tận tâm, định hướng tư duy giải quyết vấn đề thay vì đưa sẵn đáp án. Đội ngũ admin hỗ trợ tài liệu, tài khoản Sandbox và thủ tục hành chính rất nhanh chóng và chu đáo.",
      relevance: "Nội dung thực tập bám sát và phát triển sâu hơn các môn học Mạng máy tính, Hệ điều hành và Cơ sở dữ liệu tại trường Đại học Sư phạm Kỹ thuật TP.HCM.",
      learning: "Được thực chiến với các dịch vụ Cloud hàng đầu thế giới (EKS, PrivateLink, Serverless, AI Q Developer), nâng cao tác phong làm việc chuẩn doanh nghiệp toàn cầu.",
      culture: "Văn hóa Customer Obsession và Ownership thể hiện rất rõ nét. Tinh thần hỗ trợ lẫn nhau không phân biệt cấp bậc giúp thực tập sinh nhanh chóng hòa nhập.",
      policies: "Chính sách hỗ trợ chi phí thực tập rõ ràng, thời gian làm việc linh hoạt, được cấp đầy đủ tài nguyên thực hành cloud miễn phí trong suốt khóa học.",
      suggestions: "Kỳ vọng chương trình FCAJ sẽ tổ chức thêm nhiều buổi Offline Hackathon và kết nối giao lưu với các cựu học viên đang làm việc tại các đối tác AWS lớn."
    },
    en: {
      env: "The working environment at AWS is exceptionally welcoming, open, and professional. Team members are always willing to assist whenever technical difficulties arise. The workplace is modern and fosters deep focus and creativity.",
      mentor: "The mentor provides thorough, problem-solving guidance rather than simply handing out answers. The admin team provides timely support for Sandbox cloud accounts and operational procedures.",
      relevance: "Assigned tasks align closely with the curriculum at Ho Chi Minh City University of Technology and Education, while broadening exposure to enterprise-grade technologies.",
      learning: "Gained hands-on experience with cutting-edge cloud technologies (EKS, PrivateLink, Serverless, Amazon Q Developer) and cultivated professional international corporate discipline.",
      culture: "Amazon's leadership principles such as Customer Obsession and Ownership are vividly demonstrated across teams. The collaborative culture made me feel like an integral team member.",
      policies: "Internship policies and allowances are transparent, with flexible scheduling and generous free cloud practice resources provided throughout the bootcamp.",
      suggestions: "I hope future FCAJ cohorts can include more in-person hackathons and networking alumni roundtables with cloud engineers working at major AWS partners."
    }
  }
};

// ==========================================
// 3. PERSISTENCE & STATE MANAGEMENT
// ==========================================
const STORAGE_KEY = 'fcaj_report_bilingual_v17';
const PREV_STORAGE_KEY = 'fcaj_report_bilingual_v16';
const LANG_KEY = 'fcaj_report_lang';

class AppLanguageManager {
  constructor() {
    this.cleanupLegacyStorage();
    this.currentLang = localStorage.getItem(LANG_KEY) || 'vi';
    this.data = this.loadData();
  }

  cleanupLegacyStorage() {
    const legacyKeys = [
      'fcaj_report_bilingual_v1',
      'fcaj_report_bilingual_v2',
      'fcaj_report_bilingual_v3',
      'fcaj_report_bilingual_v4',
      'fcaj_report_bilingual_v5',
      'fcaj_report_bilingual_v6',
      'fcaj_report_bilingual_v7',
      'fcaj_report_bilingual_v10',
      'fcaj_report_bilingual_v9',
      'fcaj_report_bilingual_v8',
      'fcaj_internship_report_v2',
      'fcaj_internship_report_v1'
    ];
    legacyKeys.forEach(k => {
      try { localStorage.removeItem(k); } catch (e) {}
    });
  }

  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.worklogs && parsed.worklogs.length > 0) {
          // Thông tin sinh viên chỉ có thể sửa từ code, luôn đồng bộ từ DEFAULT_BILINGUAL_DATA
          parsed.studentInfo = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.studentInfo));
          // Luôn đồng bộ nội dung chuẩn của Tuần 1, 2, 3, 4, 5 từ code
          [1, 2, 3, 4, 5].forEach(wNum => {
            const defWeek = DEFAULT_BILINGUAL_DATA.worklogs.find(w => w.weekNum === wNum);
            const pIdx = parsed.worklogs.findIndex(w => w.weekNum === wNum);
            if (defWeek && pIdx !== -1) {
              parsed.worklogs[pIdx] = JSON.parse(JSON.stringify(defWeek));
            }
          });
          // Luôn đồng bộ các bài blog chuẩn (Blog 1-4) từ DEFAULT_BILINGUAL_DATA
          if (!parsed.blogs) {
            parsed.blogs = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.blogs));
          } else {
            ['vi', 'en'].forEach(l => {
              if (!parsed.blogs[l]) {
                parsed.blogs[l] = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.blogs[l]));
              } else {
                DEFAULT_BILINGUAL_DATA.blogs[l].forEach(defBlog => {
                  const bIdx = parsed.blogs[l].findIndex(b => b.id === defBlog.id);
                  if (bIdx === -1) {
                    parsed.blogs[l].push(JSON.parse(JSON.stringify(defBlog)));
                  } else {
                    parsed.blogs[l][bIdx] = JSON.parse(JSON.stringify(defBlog));
                  }
                });
              }
            });
          }
          // Sync default events (including Session 1 Voice AI) for both languages
          if (!parsed.events) {
            parsed.events = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.events));
          } else {
            ['vi', 'en'].forEach(l => {
              if (!parsed.events[l]) {
                parsed.events[l] = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.events[l]));
              } else {
                // Remove obsolete/duplicate test events (such as event-3, event-4)
                parsed.events[l] = parsed.events[l].filter(e => {
                  if (e.id === 'event-3' && (e.name.includes('Meetup AI') || e.name.includes('Voice') || (e.speakers && e.speakers.includes('Phan Nhat Uyen')))) return false;
                  if (e.id === 'event-4' && e.name.includes('First Cloud AI')) return false;
                  return true;
                });

                DEFAULT_BILINGUAL_DATA.events[l].forEach(defEvent => {
                  const eIdx = parsed.events[l].findIndex(e => e.id === defEvent.id || e.slug === defEvent.slug);
                  if (eIdx === -1) {
                    parsed.events[l].push(JSON.parse(JSON.stringify(defEvent)));
                  } else {
                    parsed.events[l][eIdx] = Object.assign({}, parsed.events[l][eIdx], JSON.parse(JSON.stringify(defEvent)));
                  }
                });
              }
            });
          }
          return parsed;
        }
      }
      // Migrate student personal details while using fresh 2026 calendar & report content
      const prev = localStorage.getItem(PREV_STORAGE_KEY) || localStorage.getItem('fcaj_report_bilingual_v11') || localStorage.getItem('fcaj_report_bilingual_v10');
      const fresh = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
      if (prev) {
        const prevParsed = JSON.parse(prev);
        if (prevParsed.worklogs && prevParsed.worklogs.length > 0) {
          fresh.worklogs = prevParsed.worklogs;
          [1, 2, 3, 4, 5].forEach(wNum => {
            const defWeek = DEFAULT_BILINGUAL_DATA.worklogs.find(w => w.weekNum === wNum);
            const pIdx = fresh.worklogs.findIndex(w => w.weekNum === wNum);
            if (defWeek && pIdx !== -1) {
              fresh.worklogs[pIdx] = JSON.parse(JSON.stringify(defWeek));
            }
          });
        }
        if (prevParsed.currentWeek) fresh.currentWeek = prevParsed.currentWeek;
        else fresh.currentWeek = 5;
        if (prevParsed.studentInfo) {
          if (prevParsed.studentInfo.fullName) fresh.studentInfo.fullName = prevParsed.studentInfo.fullName;
          if (prevParsed.studentInfo.phone && prevParsed.studentInfo.phone !== '0989888999') {
            fresh.studentInfo.phone = prevParsed.studentInfo.phone;
          }
          if (prevParsed.studentInfo.email) fresh.studentInfo.email = prevParsed.studentInfo.email;
        }
        try { localStorage.removeItem(PREV_STORAGE_KEY); } catch (e) {}
      }
      return fresh;
    } catch (e) {
      console.warn('Could not read stored bilingual data, using defaults', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
  }

  saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Could not save bilingual data', e);
    }
  }

  saveCurrentInputs() {
    const lang = this.currentLang;
    const getVal = (id) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : null;
    };

    // Lưu ý: Thông tin sinh viên cố định, chỉ chỉnh sửa từ code trong DEFAULT_BILINGUAL_DATA.studentInfo

    // Proposal
    if (!this.data.proposal[lang]) this.data.proposal[lang] = {};
    const pSum = getVal('prop-summary');
    if (pSum !== null) this.data.proposal[lang].summary = pSum;
    const pProb = getVal('prop-problem');
    if (pProb !== null) this.data.proposal[lang].problem = pProb;
    const pSol = getVal('prop-solution');
    if (pSol !== null) this.data.proposal[lang].solution = pSol;
    const pArch = getVal('prop-arch');
    if (pArch !== null) this.data.proposal[lang].arch = pArch;
    const pBud = getVal('prop-budget');
    if (pBud !== null) this.data.proposal[lang].budget = pBud;

    // Self Assessment
    if (!this.data.selfNarrative) this.data.selfNarrative = {};
    const narr = getVal('assess-narrative');
    if (narr !== null) this.data.selfNarrative[lang] = narr;
    if (!this.data.needsImprovement) this.data.needsImprovement = {};
    const imp = getVal('assess-improvement');
    if (imp !== null) this.data.needsImprovement[lang] = imp;

    // Feedback
    if (!this.data.feedback[lang]) this.data.feedback[lang] = {};
    const fEnv = getVal('fb-env');
    if (fEnv !== null) this.data.feedback[lang].env = fEnv;
    const fMen = getVal('fb-mentor');
    if (fMen !== null) this.data.feedback[lang].mentor = fMen;
    const fRel = getVal('fb-relevance');
    if (fRel !== null) this.data.feedback[lang].relevance = fRel;
    const fLea = getVal('fb-learning');
    if (fLea !== null) this.data.feedback[lang].learning = fLea;
    const fCul = getVal('fb-culture');
    if (fCul !== null) this.data.feedback[lang].culture = fCul;
    const fPol = getVal('fb-policies');
    if (fPol !== null) this.data.feedback[lang].policies = fPol;
    const fSug = getVal('fb-suggestions');
    if (fSug !== null) this.data.feedback[lang].suggestions = fSug;

    this.saveData();
  }

  setLang(newLang) {
    if (newLang !== 'vi' && newLang !== 'en') return;
    this.saveCurrentInputs();
    this.currentLang = newLang;
    localStorage.setItem(LANG_KEY, newLang);
    this.applyLanguage();
  }

  applyLanguage() {
    const lang = this.currentLang;
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.vi;

    // Set HTML lang attribute
    document.documentElement.lang = lang;

    // Update active class on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update Document Title
    document.title = dict.pageTitleDoc;

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update all titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.title = dict[key];
      }
    });

    // Update dynamic header title according to current active view
    updateHeaderPageTitle();

    // Update current date in header
    updateHeaderDate();

    // Update greeting
    updateHeaderGreeting();

    // Re-render views with language specific data
    renderStudentInfoInputs();
    renderWeekTabs();
    renderWorklogView();
    renderProposalInputs();
    renderBlogsList();
    renderEventsList();
    renderEventDetail('first-cloud-ai-journey-24-10-2026');
    renderCriteriaTable();
    renderSelfAssessmentInputs();
    renderFeedbackInputs();
  }
}

const app = new AppLanguageManager();

// ==========================================
// 4. UI HELPERS & NOTIFICATIONS
// ==========================================
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✓' : '⚠️'}</span><span>${escapeHtml(msg)}</span>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'all 0.3s';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function t(key) {
  const dict = I18N_DICTIONARY[app.currentLang] || I18N_DICTIONARY.vi;
  return dict[key] || key;
}

// ==========================================
// 5. NAVIGATION & ROUTING
// ==========================================
function updateHeaderPageTitle() {
  const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  const titleEl = document.getElementById('page-title');
  if (!titleEl) return;

  if (currentHash.startsWith('events/')) {
    titleEl.textContent = app.currentLang === 'vi'
      ? '4. Sự kiện thực tế đã tham gia — Báo cáo thu hoạch'
      : '4. Events Participated — Harvest Report';
    return;
  }

  const key = `title_${currentHash.replace(/-/g, '_')}`;
  titleEl.textContent = t(key);
}

function updateHeaderDate() {
  const dateEl = document.getElementById('current-date');
  if (!dateEl) return;
  const now = new Date();
  
  if (app.currentLang === 'vi') {
    const daysVi = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    dateEl.textContent = `${daysVi[now.getDay()]}, ${dd}/${mm}/${now.getFullYear()}`;
  } else {
    const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    dateEl.textContent = `${daysEn[now.getDay()]}, ${mm}/${dd}/${now.getFullYear()}`;
  }
}

function updateHeaderGreeting() {
  const greetingEl = document.getElementById('greeting-display');
  if (!greetingEl) return;
  const firstName = (app.data.studentInfo.fullName || 'Phan Nhật Uyên').split(' ').pop();
  const hour = new Date().getHours();
  let greetKey = 'greetingMorning';
  if (hour >= 12 && hour < 18) {
    greetKey = 'greetingAfternoon';
  } else if (hour >= 18 || hour < 5) {
    greetKey = 'greetingEvening';
  }
  greetingEl.textContent = `${t(greetKey)}, ${firstName}`;
}

function navigateTo(pageId) {
  const cleanId = (pageId || '').replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';

  // Highlight active nav link in sidebar
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('data-page');
    const isMatching = linkPage === cleanId || 
      (cleanId.startsWith('events') && linkPage === 'events');
    link.classList.toggle('active', isMatching);
  });

  // Deactivate all page views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  // Determine target element
  let viewId = `view-${cleanId.replace(/\//g, '-')}`;
  let target = document.getElementById(viewId);
  if (!target && cleanId.startsWith('events/')) {
    target = document.getElementById('view-events-first-cloud-ai-journey-24-10-2026');
  }

  if (target) {
    target.classList.add('active');
  }

  // Update URL hash if needed
  if (window.location.hash !== `#/${cleanId}`) {
    window.location.hash = `#/${cleanId}`;
  }

  // If navigating to event report, render the detailed view
  if (cleanId === 'events/first-cloud-ai-journey-24-10-2026' || cleanId.startsWith('events/')) {
    renderEventDetail('first-cloud-ai-journey-24-10-2026');
  }

  updateHeaderPageTitle();
  document.getElementById('sidebar')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const rawHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  navigateTo(rawHash);
}

// ==========================================
// 6. STUDENT INFO & HIGH-FIDELITY PHOTO STORAGE
// ==========================================
const AVATAR_STORAGE_KEY = 'fcaj_student_avatar';
const AVATAR_ORIGINAL_IDB_KEY = 'fcaj_student_avatar_original';
const AVATAR_FIT_KEY = 'fcaj_student_avatar_fit';
const IDB_NAME = 'fcaj_media_db';
const IDB_STORE = 'photos';

function openPhotoDB() {
  return new Promise((resolve) => {
    if (!window.indexedDB) {
      resolve(null);
      return;
    }
    try {
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

async function saveOriginalPhotoToIDB(key, dataUrl) {
  try {
    const db = await openPhotoDB();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      const store = tx.objectStore(IDB_STORE);
      store.put(dataUrl, key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('IDB put error', err);
    return false;
  }
}

async function getOriginalPhotoFromIDB(key) {
  try {
    const db = await openPhotoDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    console.warn('IDB get error', err);
    return null;
  }
}

async function deleteOriginalPhotoFromIDB(key) {
  try {
    const db = await openPhotoDB();
    if (!db) return;
    return new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      const store = tx.objectStore(IDB_STORE);
      store.delete(key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('IDB delete error', err);
  }
}

function getAvatarFitMode() {
  return localStorage.getItem(AVATAR_FIT_KEY) || 'cover';
}

function setAvatarFitMode(mode) {
  localStorage.setItem(AVATAR_FIT_KEY, mode);
  applyAvatarFitMode();
}

function applyAvatarFitMode() {
  const mode = getAvatarFitMode();
  const imgEl = document.getElementById('student-photo-img');
  const fitBtn = document.getElementById('btn-toggle-fit');
  const fitLabel = document.getElementById('fit-label');

  if (imgEl) {
    if (mode === 'contain') {
      imgEl.classList.add('fit-contain');
    } else {
      imgEl.classList.remove('fit-contain');
    }
  }

  if (fitBtn && fitLabel) {
    if (mode === 'contain') {
      fitLabel.textContent = t('photoFitFull') || 'Nguyên ảnh';
      fitBtn.classList.add('active');
    } else {
      fitLabel.textContent = t('photoFitCover') || 'Cắt vừa';
      fitBtn.classList.remove('active');
    }
  }
}

function handleStudentPhotoUpload(file) {
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast(t('toastPhotoInvalidType'), 'error');
    return;
  }
  // Allow high-res camera originals up to 15MB
  if (file.size > 15 * 1024 * 1024) {
    showToast(t('toastPhotoSizeLimit'), 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = async (e) => {
    const rawDataUrl = e.target.result;

    // 1. ALWAYS preserve 100% original uncompressed bytes in IndexedDB
    await saveOriginalPhotoToIDB(AVATAR_ORIGINAL_IDB_KEY, rawDataUrl);

    // 2. Determine display fallback for localStorage
    // If under 1.2MB, store rawDataUrl directly (ZERO compression loss)
    if (file.size <= 1.2 * 1024 * 1024) {
      try {
        localStorage.setItem(AVATAR_STORAGE_KEY, rawDataUrl);
      } catch (err) {
        console.warn('LocalStorage quota reached, using IndexedDB primary', err);
      }
      updateStudentAvatarDisplay();
      showToast(t('toastPhotoUpdated'));
      return;
    }

    // 3. For large camera/DSLR files (> 1.2MB), create a crisp high-DPI display copy
    // (up to 1600px - razor sharp on 4K/Retina) for localStorage fallback
    const img = new Image();
    img.onload = () => {
      const origW = img.naturalWidth || img.width;
      const origH = img.naturalHeight || img.height;
      const MAX_DIM = 1600;
      let targetW = origW;
      let targetH = origH;

      if (targetW > MAX_DIM || targetH > MAX_DIM) {
        const ratio = Math.min(MAX_DIM / targetW, MAX_DIM / targetH);
        targetW = Math.round(targetW * ratio);
        targetH = Math.round(targetH * ratio);
      }

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, targetW, targetH);

      const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
      const displayDataUrl = canvas.toDataURL(mimeType, 0.95);

      try {
        localStorage.setItem(AVATAR_STORAGE_KEY, displayDataUrl);
      } catch (err) {
        console.warn('LocalStorage quota full, using IndexedDB', err);
      }
      updateStudentAvatarDisplay();
      showToast(t('toastPhotoUpdated'));
    };
    img.onerror = () => {
      try {
        localStorage.setItem(AVATAR_STORAGE_KEY, rawDataUrl);
      } catch (err) {}
      updateStudentAvatarDisplay();
      showToast(t('toastPhotoUpdated'));
    };
    img.src = rawDataUrl;
  };
  reader.onerror = () => {
    showToast(t('toastPhotoError'), 'error');
  };
  reader.readAsDataURL(file);
}

async function updateStudentAvatarDisplay() {
  // Synchronous read from localStorage for immediate flicker-free display
  let avatar = localStorage.getItem(AVATAR_STORAGE_KEY);

  // Check if original uncompressed image exists in IndexedDB
  const idbOriginal = await getOriginalPhotoFromIDB(AVATAR_ORIGINAL_IDB_KEY);
  if (idbOriginal) {
    avatar = idbOriginal;
  }

  const imgEl = document.getElementById('student-photo-img');
  const placeholderEl = document.getElementById('student-photo-placeholder');
  const overlayEl = document.getElementById('photo-overlay');
  const btnRemove = document.getElementById('btn-remove-photo');
  const btnChooseLabel = document.querySelector('#btn-choose-photo span');
  const toolbarEl = document.getElementById('photo-action-toolbar');

  if (avatar) {
    if (imgEl) {
      imgEl.src = avatar;
      imgEl.style.display = 'block';
    }
    if (placeholderEl) placeholderEl.style.display = 'none';
    if (overlayEl) overlayEl.classList.add('active');
    if (btnRemove) btnRemove.style.display = 'inline-flex';
    if (btnChooseLabel) btnChooseLabel.textContent = t('photoChangeText') || 'Thay đổi ảnh';
    if (toolbarEl) toolbarEl.style.display = 'flex';
    applyAvatarFitMode();
  } else {
    if (imgEl) {
      imgEl.src = '';
      imgEl.style.display = 'none';
    }
    if (placeholderEl) placeholderEl.style.display = 'flex';
    if (overlayEl) overlayEl.classList.remove('active');
    if (btnRemove) btnRemove.style.display = 'none';
    if (btnChooseLabel) btnChooseLabel.textContent = t('btnUploadPhoto') || 'Tải ảnh lên';
    if (toolbarEl) toolbarEl.style.display = 'none';
  }

  // Update sidebar and top header greeting avatar
  const sidebarAvatar = document.getElementById('sidebar-avatar');
  const headerAvatar = document.querySelector('.user-greeting-pill .avatar-sm');
  const info = app.data.studentInfo || {};
  const parts = (info.fullName || 'Phan Nhật Uyên').trim().split(' ');
  const initial = (parts[parts.length - 1] || 'U')[0].toUpperCase();

  if (avatar) {
    if (sidebarAvatar) {
      sidebarAvatar.innerHTML = `<img src="${avatar}" alt="Avatar">`;
    }
    if (headerAvatar) {
      headerAvatar.innerHTML = `<img src="${avatar}" alt="Avatar">`;
    }
  } else {
    if (sidebarAvatar) {
      sidebarAvatar.innerHTML = '';
      sidebarAvatar.textContent = initial;
    }
    if (headerAvatar) {
      headerAvatar.innerHTML = '';
      headerAvatar.textContent = initial;
    }
  }
}

function renderStudentInfoInputs() {
  const info = app.data.studentInfo;
  const lang = app.currentLang;
  const loc = info[lang] || info.vi;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('info-fullname', info.fullName);
  setVal('info-student-id', info.studentId);
  setVal('info-phone', info.phone);
  setVal('info-email', info.email);
  setVal('info-university', loc.university);
  setVal('info-major', loc.major);
  setVal('info-company', loc.company);
  setVal('info-position', loc.position);
  setVal('info-duration', loc.duration);

  // Update sidebar company label and name
  const sidebarCompany = document.getElementById('sidebar-company');
  if (sidebarCompany) sidebarCompany.textContent = loc.company;
  const sidebarUser = document.getElementById('sidebar-username');
  if (sidebarUser && info.fullName) sidebarUser.textContent = info.fullName;

  // Update student avatar
  updateStudentAvatarDisplay();
  updateHeaderGreeting();
}

function setupStudentInfo() {
  const form = document.getElementById('student-info-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  const fileInput = document.getElementById('student-photo-input');
  const photoFrame = document.getElementById('student-photo-frame');
  const btnRemove = document.getElementById('btn-remove-photo');
  const btnToggleFit = document.getElementById('btn-toggle-fit');
  const btnViewHd = document.getElementById('btn-view-hd');
  const hdModal = document.getElementById('photo-hd-modal');
  const hdPreview = document.getElementById('photo-hd-preview');
  const btnCloseHd = document.getElementById('btn-close-hd-modal');
  const btnCloseHdBtn = document.getElementById('btn-close-hd-btn');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleStudentPhotoUpload(e.target.files[0]);
      }
    });
  }

  if (photoFrame) {
    photoFrame.addEventListener('click', () => {
      if (fileInput) fileInput.click();
    });

    photoFrame.addEventListener('dragover', (e) => {
      e.preventDefault();
      photoFrame.classList.add('drag-over');
    });

    photoFrame.addEventListener('dragleave', (e) => {
      e.preventDefault();
      photoFrame.classList.remove('drag-over');
    });

    photoFrame.addEventListener('drop', (e) => {
      e.preventDefault();
      photoFrame.classList.remove('drag-over');
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleStudentPhotoUpload(e.dataTransfer.files[0]);
      }
    });
  }

  if (btnRemove) {
    btnRemove.addEventListener('click', async (e) => {
      e.stopPropagation();
      await deleteOriginalPhotoFromIDB(AVATAR_ORIGINAL_IDB_KEY);
      localStorage.removeItem(AVATAR_STORAGE_KEY);
      if (fileInput) fileInput.value = '';
      updateStudentAvatarDisplay();
      showToast(t('toastPhotoRemoved'));
    });
  }

  if (btnToggleFit) {
    btnToggleFit.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = getAvatarFitMode();
      const next = current === 'cover' ? 'contain' : 'cover';
      setAvatarFitMode(next);
      showToast(next === 'contain' ? t('toastFitContain') : t('toastFitCover'));
    });
  }

  if (btnViewHd && hdModal && hdPreview) {
    btnViewHd.addEventListener('click', async (e) => {
      e.stopPropagation();
      // Prioritize the bit-for-bit uncompressed original from IndexedDB
      const idbOriginal = await getOriginalPhotoFromIDB(AVATAR_ORIGINAL_IDB_KEY);
      const avatarSrc = idbOriginal || localStorage.getItem(AVATAR_STORAGE_KEY);
      if (avatarSrc) {
        hdPreview.onload = () => {
          const resBadge = document.getElementById('hd-modal-resolution');
          if (resBadge && hdPreview.naturalWidth && hdPreview.naturalHeight) {
            resBadge.textContent = `${hdPreview.naturalWidth} × ${hdPreview.naturalHeight} px`;
            resBadge.style.display = 'inline-block';
          }
        };
        hdPreview.src = avatarSrc;
        hdModal.classList.add('active');
      }
    });
  }

  const closeHdModal = () => {
    if (hdModal) hdModal.classList.remove('active');
  };
  if (btnCloseHd) btnCloseHd.addEventListener('click', closeHdModal);
  if (btnCloseHdBtn) btnCloseHdBtn.addEventListener('click', closeHdModal);
  if (hdModal) {
    hdModal.addEventListener('click', (e) => {
      if (e.target === hdModal) closeHdModal();
    });
  }
}

// ==========================================
// 7. 1. WORKLOG (12 WEEKS)
// ==========================================
function getCurrentWeekWorklog() {
  const weekNum = app.data.currentWeek || 1;
  let week = app.data.worklogs.find(w => w.weekNum === weekNum);
  if (!week) {
    week = {
      weekNum: weekNum,
      vi: { objectives: '', achievements: '', tasks: [] },
      en: { objectives: '', achievements: '', tasks: [] }
    };
    app.data.worklogs.push(week);
  }
  if (!week.vi) week.vi = { objectives: '', achievements: '', tasks: [] };
  if (!week.en) week.en = { objectives: '', achievements: '', tasks: [] };
  if (!Array.isArray(week.vi.tasks)) week.vi.tasks = [];
  if (!Array.isArray(week.en.tasks)) week.en.tasks = [];
  return week;
}

function renderWeekTabs() {
  const container = document.getElementById('week-tabs-bar');
  if (!container) return;

  const prefix = t('weekPrefix');
  container.innerHTML = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const isActive = num === (app.data.currentWeek || 1);
    return `
      <button type="button" class="week-tab-btn ${isActive ? 'active' : ''}" onclick="selectWeek(${num})">
        ${prefix} ${num}
      </button>
    `;
  }).join('');
}

function selectWeek(num) {
  app.data.currentWeek = num;
  app.saveData();
  renderWeekTabs();
  renderWorklogView();
}

function renderRefLinks(refStr) {
  if (!refStr || !refStr.trim()) return '-';
  // Normalize markdown links or slash separated links into individual lines
  let normalized = refStr.replace(/\s*\/\s*(?=\[|https?:\/\/)/g, '\n');
  const lines = normalized.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.map(line => {
    // Check for markdown link [Title](https://...)
    const mdMatch = line.match(/^\[(.*?)\]\((https?:\/\/[^\s\)]+)\)$/);
    if (mdMatch) {
      const title = mdMatch[1];
      const url = mdMatch[2];
      return `<div style="margin-bottom: 5px; font-size: 13px; line-height: 1.45;">
        <span style="font-weight:600; color:var(--text-main);">${escapeHtml(title)}:</span> 
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary); font-weight:600; text-decoration:underline; word-break:break-all;">${escapeHtml(url)} ↗</a>
      </div>`;
    }
    const match = line.match(/(https?:\/\/[^\s]+)/);
    if (match) {
      let url = match[1];
      url = url.replace(/\)+$/, '');
      let prefix = line.replace(match[1], '').replace(/[\[\]\(\)]/g, '').trim();
      return `<div style="margin-bottom: 5px; font-size: 13px; line-height: 1.45;">
        ${prefix ? `<span style="font-weight:600; color:var(--text-main);">${escapeHtml(prefix)}</span> ` : ''}
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary); font-weight:600; text-decoration:underline; word-break:break-all;">${escapeHtml(url)} ↗</a>
      </div>`;
    }
    return `<div style="margin-bottom: 5px; font-size: 13px; color:var(--text-subtle);">${escapeHtml(line)}</div>`;
  }).join('');
}

function formatWorklogDate(dateStr) {
  if (!dateStr) return '-';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const [y, m, d] = dateStr.split('-');
    return app.currentLang === 'vi' ? `${d}/${m}/${y}` : `${m}/${d}/${y}`;
  }
  return dateStr;
}

function renderWorklogView() {
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  const content = week[lang] || week.vi;

  const heading = document.getElementById('current-week-heading');
  const objText = document.getElementById('week-objectives-text');
  const achText = document.getElementById('week-achievements-text');
  const tbody = document.getElementById('week-tasks-tbody');

  if (heading) heading.textContent = `${t('weekHeadingPrefix')} ${week.weekNum}`;
  const subtitle = document.getElementById('current-week-subtitle');
  if (subtitle) {
    if (content.topic) {
      subtitle.textContent = content.topic;
    } else {
      subtitle.textContent = t('bootcampSubtitle');
    }
  }
  
  if (objText) {
    if (content.objectives && content.objectives.trim()) {
      objText.innerHTML = escapeHtml(content.objectives).replace(/\n/g, '<br>');
      objText.style.color = '';
      objText.style.fontStyle = '';
      objText.style.lineHeight = '1.6';
      objText.style.whiteSpace = 'pre-wrap';
    } else {
      objText.textContent = t('emptyObjectivesMsg');
      objText.style.color = '#94A3B8';
      objText.style.fontStyle = 'italic';
    }
  }

  if (achText) {
    if (content.achievements && content.achievements.trim()) {
      achText.innerHTML = escapeHtml(content.achievements).replace(/\n/g, '<br>');
      achText.style.color = '';
      achText.style.fontStyle = '';
      achText.style.lineHeight = '1.65';
      achText.style.whiteSpace = 'pre-wrap';
    } else {
      achText.textContent = t('emptyAchievementsMsg');
      achText.style.color = '#94A3B8';
      achText.style.fontStyle = 'italic';
    }
  }

  if (tbody) {
    if (!content.tasks || content.tasks.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding: 32px 16px; color: #64748B;">
            <div style="font-size: 14px; margin-bottom: 10px;">${t('emptyTasksMsg')}</div>
            <button type="button" class="btn btn-outline btn-sm" onclick="openAddTaskModal()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              ${t('btnAddTaskThisWeek')}
            </button>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = content.tasks.map((task, idx) => `
      <tr>
        <td style="font-weight:700; text-align:center; vertical-align:top; font-size:14px; padding-top:14px;">${escapeHtml(task.day)}</td>
        <td style="white-space:pre-wrap; line-height: 1.6; font-size:13.5px; vertical-align:top; padding-top:14px;">${escapeHtml(task.desc)}</td>
        <td style="white-space:nowrap; font-size:13px; color:var(--text-subtle); vertical-align:top; padding-top:14px;">${escapeHtml(formatWorklogDate(task.start))}</td>
        <td style="white-space:nowrap; font-size:13px; color:var(--text-subtle); vertical-align:top; padding-top:14px;">${escapeHtml(formatWorklogDate(task.end))}</td>
        <td style="vertical-align:top; padding-top:14px;">
          ${renderRefLinks(task.ref)}
        </td>
        <td style="text-align:right; white-space:nowrap; vertical-align:top; padding-top:14px;">
          <button type="button" class="btn-table-action btn-table-edit" title="${t('btnEdit')}" onclick="openEditTaskModal(${idx})">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            <span>${t('btnEdit')}</span>
          </button>
          <button type="button" class="btn-table-action btn-table-delete" title="${t('btnDelete')}" onclick="deleteWeekTask(${idx})">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            <span>${t('btnDelete')}</span>
          </button>
        </td>
      </tr>
    `).join('');
  }
}

function deleteWeekTask(idx) {
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  if (confirm(t('confirmDeleteTask'))) {
    week[lang].tasks.splice(idx, 1);
    app.saveData();
    renderWorklogView();
    showToast(t('toastDeleteTask'));
  }
}

function openEditTaskModal(idx) {
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  const content = week[lang] || week.vi;
  const task = content.tasks[idx];
  if (!task) return;

  const modal = document.getElementById('worklog-task-modal');
  const title = document.getElementById('worklog-task-modal-title');
  const submitBtn = document.getElementById('btn-submit-task-modal');
  const select = document.getElementById('modal-task-week-select');
  const editIndexInput = document.getElementById('modal-task-edit-index');

  if (select) {
    const prefix = t('weekPrefix');
    select.innerHTML = Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${prefix} ${i + 1}</option>`).join('');
    select.value = app.data.currentWeek || 1;
    select.disabled = true;
  }

  if (editIndexInput) editIndexInput.value = idx;
  if (title) title.textContent = t('modalEditTaskTitle');
  if (submitBtn) submitBtn.textContent = t('btnUpdateTask');

  const dayInput = document.getElementById('modal-task-day');
  const descInput = document.getElementById('modal-task-desc');
  const startInput = document.getElementById('modal-task-start');
  const endInput = document.getElementById('modal-task-end');
  const refInput = document.getElementById('modal-task-ref');

  if (dayInput) dayInput.value = task.day || '';
  if (descInput) descInput.value = task.desc || '';
  if (startInput) startInput.value = task.start || '';
  if (endInput) endInput.value = task.end || '';
  if (refInput) refInput.value = task.ref || '';

  modal?.classList.add('show');
}

function openAddTaskModal() {
  const modal = document.getElementById('worklog-task-modal');
  const title = document.getElementById('worklog-task-modal-title');
  const submitBtn = document.getElementById('btn-submit-task-modal');
  const select = document.getElementById('modal-task-week-select');
  const editIndexInput = document.getElementById('modal-task-edit-index');
  const form = document.getElementById('worklog-task-form');

  form?.reset();
  if (editIndexInput) editIndexInput.value = -1;
  if (select) {
    const prefix = t('weekPrefix');
    select.innerHTML = Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${prefix} ${i + 1}</option>`).join('');
    select.value = app.data.currentWeek || 1;
    select.disabled = false;
  }
  if (title) title.textContent = t('modalTitle');
  if (submitBtn) submitBtn.textContent = t('btnModalSave');

  modal?.classList.add('show');
}

function openMetaModal() {
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  const content = week[lang] || week.vi;

  const modal = document.getElementById('worklog-meta-modal');
  const title = document.getElementById('worklog-meta-modal-title');
  const objInput = document.getElementById('modal-meta-objectives');
  const achInput = document.getElementById('modal-meta-achievements');

  if (title) title.textContent = `${t('modalMetaTitle')} - ${t('weekPrefix')} ${week.weekNum}`;
  if (objInput) objInput.value = content.objectives || '';
  if (achInput) achInput.value = content.achievements || '';

  modal?.classList.add('show');
}

function closeMetaModal() {
  const modal = document.getElementById('worklog-meta-modal');
  modal?.classList.remove('show');
}

function clearCurrentWeek() {
  if (confirm(t('confirmResetWeek'))) {
    const week = getCurrentWeekWorklog();
    const lang = app.currentLang;
    if (week[lang]) {
      week[lang].objectives = '';
      week[lang].achievements = '';
      week[lang].tasks = [];
    }
    app.saveData();
    renderWorklogView();
    showToast(t('toastResetWeekSuccess'));
  }
}

function exportWorklogJson() {
  const exportData = {
    appName: "AWS FCAJ Internship Report",
    exportedAt: new Date().toISOString(),
    currentWeek: app.data.currentWeek || 1,
    worklogs: app.data.worklogs
  };
  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `worklog-fcaj-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t('toastExportSuccess'));
}

function showExportCodeModal() {
  const modal = document.getElementById('worklog-export-modal');
  const textarea = document.getElementById('export-worklog-textarea');
  if (!modal || !textarea) return;

  const exportData = {
    exportedAt: new Date().toISOString(),
    worklogs: app.data.worklogs
  };
  textarea.value = JSON.stringify(exportData, null, 2);
  modal.classList.add('show');
}

function closeExportCodeModal() {
  const modal = document.getElementById('worklog-export-modal');
  modal?.classList.remove('show');
}

function importWorklogJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      let worklogs = null;
      if (Array.isArray(parsed)) {
        worklogs = parsed;
      } else if (parsed && Array.isArray(parsed.worklogs)) {
        worklogs = parsed.worklogs;
      }
      if (!worklogs || worklogs.length === 0) {
        throw new Error("File JSON không chứa dữ liệu worklogs hợp lệ.");
      }
      app.data.worklogs = worklogs;
      app.saveData();
      renderWeekTabs();
      renderWorklogView();
      showToast(t('toastImportSuccess'));
    } catch (err) {
      alert("Lỗi khi nhập file JSON: " + err.message);
    }
  };
  reader.readAsText(file);
}

function setupWorklog() {
  // Meta editing listeners
  const btnEditMeta = document.getElementById('btn-edit-week-meta');
  const btnEditMetaBar = document.getElementById('btn-edit-week-meta-bar');
  btnEditMeta?.addEventListener('click', openMetaModal);
  btnEditMetaBar?.addEventListener('click', openMetaModal);

  const btnCloseMeta = document.getElementById('btn-close-meta-modal');
  const btnCancelMeta = document.getElementById('btn-cancel-meta-modal');
  btnCloseMeta?.addEventListener('click', closeMetaModal);
  btnCancelMeta?.addEventListener('click', closeMetaModal);

  const metaForm = document.getElementById('worklog-meta-form');
  if (metaForm) {
    metaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const week = getCurrentWeekWorklog();
      const lang = app.currentLang;
      if (!week[lang]) week[lang] = { objectives: '', achievements: '', tasks: [] };

      week[lang].objectives = document.getElementById('modal-meta-objectives')?.value.trim() || '';
      week[lang].achievements = document.getElementById('modal-meta-achievements')?.value.trim() || '';

      app.saveData();
      renderWorklogView();
      closeMetaModal();
      showToast(t('toastSaveMetaSuccess'));
    });
  }

  // Worklog task modal listeners
  setupWorklogModal();

  // Reset week listener
  document.getElementById('btn-clear-week')?.addEventListener('click', clearCurrentWeek);

  // Export / Import listeners
  document.getElementById('btn-export-worklog-json')?.addEventListener('click', exportWorklogJson);

  const fileInput = document.getElementById('worklog-import-input');
  document.getElementById('btn-import-worklog-btn')?.addEventListener('click', () => {
    fileInput?.click();
  });
  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importWorklogJson(e.target.files[0]);
      fileInput.value = '';
    }
  });

  // Code modal listeners
  document.getElementById('btn-view-worklog-code')?.addEventListener('click', showExportCodeModal);
  document.getElementById('btn-close-export-modal')?.addEventListener('click', closeExportCodeModal);
  document.getElementById('btn-close-export-btn')?.addEventListener('click', closeExportCodeModal);
  document.getElementById('btn-copy-export-json')?.addEventListener('click', () => {
    const textarea = document.getElementById('export-worklog-textarea');
    if (textarea) {
      navigator.clipboard.writeText(textarea.value).then(() => {
        showToast('✓ Đã sao chép toàn bộ mã JSON vào bộ nhớ tạm!');
      }).catch(() => {
        textarea.select();
        document.execCommand('copy');
        showToast('✓ Đã sao chép!');
      });
    }
  });
}

function setupWorklogModal() {
  const modal = document.getElementById('worklog-task-modal');
  const btnOpen = document.getElementById('btn-add-week-task');
  const btnOpenBar = document.getElementById('btn-add-week-task-bar');
  const btnOpenCard = document.getElementById('btn-add-week-task-card');
  const btnOpenBottom = document.getElementById('btn-add-task-bottom');
  const btnOpenHeader = document.getElementById('btn-open-log-modal');
  const btnClose = document.getElementById('btn-close-task-modal');
  const btnCancel = document.getElementById('btn-cancel-task-modal');
  const form = document.getElementById('worklog-task-form');

  const closeModal = () => {
    modal?.classList.remove('show');
    form?.reset();
    const select = document.getElementById('modal-task-week-select');
    if (select) select.disabled = false;
  };

  btnOpen?.addEventListener('click', openAddTaskModal);
  btnOpenBar?.addEventListener('click', openAddTaskModal);
  btnOpenCard?.addEventListener('click', openAddTaskModal);
  btnOpenBottom?.addEventListener('click', openAddTaskModal);
  btnOpenHeader?.addEventListener('click', openAddTaskModal);
  btnClose?.addEventListener('click', closeModal);
  btnCancel?.addEventListener('click', closeModal);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const select = document.getElementById('modal-task-week-select');
      const weekNum = parseInt(select.value, 10);
      const day = document.getElementById('modal-task-day').value.trim();
      const desc = document.getElementById('modal-task-desc').value.trim();
      const start = document.getElementById('modal-task-start').value;
      const end = document.getElementById('modal-task-end').value;
      const ref = document.getElementById('modal-task-ref').value.trim();
      const editIndex = parseInt(document.getElementById('modal-task-edit-index')?.value ?? '-1', 10);

      let week = app.data.worklogs.find(w => w.weekNum === weekNum);
      if (!week) {
        week = {
          weekNum: weekNum,
          vi: { objectives: '', achievements: '', tasks: [] },
          en: { objectives: '', achievements: '', tasks: [] }
        };
        app.data.worklogs.push(week);
      }

      const lang = app.currentLang;
      if (!week[lang]) week[lang] = { objectives: '', achievements: '', tasks: [] };
      if (!Array.isArray(week[lang].tasks)) week[lang].tasks = [];

      if (editIndex >= 0 && editIndex < week[lang].tasks.length) {
        week[lang].tasks[editIndex] = { day, desc, start, end, ref };
        showToast(t('toastUpdateTaskSuccess'));
      } else {
        week[lang].tasks.push({ day, desc, start, end, ref });
        showToast(`${t('toastAddTaskSuccess')} ${weekNum}!`);
      }

      app.data.currentWeek = weekNum;
      app.saveData();

      closeModal();
      navigateTo('worklog');
      renderWeekTabs();
      renderWorklogView();
    });
  }
}

// ==========================================
// 8. 2. PROPOSAL MODULE
// ==========================================
function renderProposalInputs() {
  const p = app.data.proposal[app.currentLang] || app.data.proposal.vi;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('prop-summary', p.summary);
  setVal('prop-problem', p.problem);
  setVal('prop-solution', p.solution);
  setVal('prop-arch', p.arch);
  setVal('prop-budget', p.budget);
}

function setupProposal() {
  const btnSave = document.getElementById('btn-save-proposal');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const lang = app.currentLang;
      app.data.proposal[lang] = {
        summary: document.getElementById('prop-summary').value.trim(),
        problem: document.getElementById('prop-problem').value.trim(),
        solution: document.getElementById('prop-solution').value.trim(),
        arch: document.getElementById('prop-arch').value.trim(),
        budget: document.getElementById('prop-budget').value.trim()
      };
      app.saveData();
      showToast(t('toastSaveProposal'));
    });
  }
}

// ==========================================
// 9. 3. BLOGS POSTED MODULE
// ==========================================
function renderBlogsList() {
  const container = document.getElementById('blogs-list-container');
  if (!container) return;

  const lang = app.currentLang;
  const blogs = app.data.blogs[lang] || app.data.blogs.vi;

  container.innerHTML = blogs.map(b => {
    const isLongSnippet = (b.snippet || '').length > 360;
    const imgHtml = b.image ? `
      <div class="blog-img-box" onclick="openBlogImageModal('${escapeHtml(b.image)}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
        <img src="${escapeHtml(b.image)}" alt="${escapeHtml(b.title)}" loading="lazy">
        <div class="blog-img-overlay">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          <span>${t('zoomDiagramTooltip')}</span>
        </div>
      </div>
    ` : '';

    return `
      <div class="blog-card" id="${escapeHtml(b.id)}">
        <div class="blog-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="badge badge-purple">AWS Study Group</span>
            <span style="font-size:12px; color:var(--text-subtle);">${t('publishedDateLabel')} ${escapeHtml(b.date || '-')}</span>
          </div>
          <h3>${escapeHtml(b.title)}</h3>
        </div>
        ${imgHtml}
        <div class="blog-snippet-wrap">
          <div id="wrap-${escapeHtml(b.id)}" class="${isLongSnippet ? 'blog-snippet-collapsed' : ''}">
            <p class="blog-snippet" id="snippet-${escapeHtml(b.id)}">${escapeHtml(b.snippet)}</p>
          </div>
          ${isLongSnippet ? `
            <button type="button" class="blog-toggle-snippet-btn" id="btn-toggle-${escapeHtml(b.id)}" onclick="toggleBlogSnippet('${escapeHtml(b.id)}')">
              <span>${t('btnExpandSnippet')}</span>
            </button>
          ` : ''}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #F1F5F9; padding-top:12px; margin-top:auto;">
          <a href="${escapeHtml(b.url)}" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:12px; padding:6px 14px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${t('readArticleLink')}</span>
          </a>
          <button type="button" class="btn-text-subtle" style="color:#EF4444; font-size:12px;" onclick="deleteBlog('${b.id}')">${t('btnDelete')}</button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleBlogSnippet(id) {
  const wrap = document.getElementById('wrap-' + id);
  const btn = document.getElementById('btn-toggle-' + id);
  if (!wrap || !btn) return;
  const isCollapsed = wrap.classList.contains('blog-snippet-collapsed');
  if (isCollapsed) {
    wrap.classList.remove('blog-snippet-collapsed');
    btn.innerHTML = `<span>${t('btnCollapseSnippet')}</span>`;
  } else {
    wrap.classList.add('blog-snippet-collapsed');
    btn.innerHTML = `<span>${t('btnExpandSnippet')}</span>`;
  }
}

function openBlogImageModal(src, title) {
  const modal = document.getElementById('blog-image-modal');
  const preview = document.getElementById('blog-image-modal-preview');
  const titleEl = document.getElementById('blog-image-modal-title');
  const descEl = document.getElementById('blog-image-modal-desc');
  const openTab = document.getElementById('btn-blog-img-open-tab');
  if (!modal || !preview) return;

  preview.src = src;
  if (titleEl) titleEl.textContent = title || t('diagModalTitle');
  if (descEl) descEl.textContent = t('diagModalDesc');
  if (openTab) {
    openTab.href = src;
    openTab.textContent = t('btnOpenTab');
  }
  modal.classList.add('active');
}

function closeBlogImageModal() {
  const modal = document.getElementById('blog-image-modal');
  if (modal) modal.classList.remove('active');
}

function deleteBlog(id) {
  if (confirm(t('confirmDeleteBlog'))) {
    const lang = app.currentLang;
    app.data.blogs[lang] = (app.data.blogs[lang] || []).filter(b => b.id !== id);
    app.saveData();
    renderBlogsList();
    showToast(t('toastDeleteBlog'));
  }
}

function setupBlogs() {
  const btnAdd = document.getElementById('btn-add-blog');
  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      const promptTitle = app.currentLang === 'vi' ? 'Tiêu đề bài viết:' : 'Blog Title:';
      const promptSnippet = app.currentLang === 'vi' ? 'Tóm tắt nội dung:' : 'Article Summary:';
      const promptUrl = app.currentLang === 'vi' ? 'Đường dẫn bài viết (URL):' : 'Article URL:';

      const title = prompt(promptTitle, 'Blog - ');
      if (!title) return;
      const snippet = prompt(promptSnippet, '');
      if (!snippet) return;
      const url = prompt(promptUrl, 'https://www.facebook.com/groups/awsstudygroupfcj');

      const lang = app.currentLang;
      if (!app.data.blogs[lang]) app.data.blogs[lang] = [];
      app.data.blogs[lang].push({
        id: 'blog-' + Date.now(),
        title,
        snippet,
        url: url || 'https://www.facebook.com/groups/awsstudygroupfcj',
        date: new Date().toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US')
      });

      app.saveData();
      renderBlogsList();
      showToast(t('toastAddBlog'));
    });
  }

  // Blog image modal event listeners
  const btnCloseModal = document.getElementById('btn-close-blog-img-modal');
  const btnCloseBtn = document.getElementById('btn-close-blog-img-btn');
  const modal = document.getElementById('blog-image-modal');

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeBlogImageModal);
  if (btnCloseBtn) btnCloseBtn.addEventListener('click', closeBlogImageModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBlogImageModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeBlogImageModal();
    }
  });
}

// ==========================================
// 10. 4. EVENTS PARTICIPATED MODULE
// ==========================================
const EVENT_REPORTS = {
  'first-cloud-ai-journey-24-10-2026': {
    vi: {
      breadcrumb: "First Cloud AI Journey: Weekly Meet Up 24/10",
      badgeText: "BÁO CÁO THU HOẠCH SỰ KIỆN",
      sessionTag: "Session 1 • Voice AI & Contact Center trên AWS",
      title: "BÁO CÁO THU HOẠCH – SESSION 1: VOICE AI & CONTACT CENTER",
      subtitle: "First Cloud AI Journey: Weekly Meet Up 24/10",
      metaHeader: "Thông tin sự kiện chính thức",
      lblEventName: "Tên sự kiện",
      eventName: "First Cloud AI Journey: Weekly Meet Up 24/10",
      lblDateTime: "Ngày & Giờ tham gia",
      dateTime: "08:30 – 12:00, 24/10/2026",
      lblLocation: "Địa điểm",
      location: "Chưa xác nhận",
      lblRole: "Vai trò tham gia",
      role: "Người tham dự (Attendee)",
      lblSpeaker: "Diễn giả Session 1",
      speaker: "Kiệt Trần – AI Engineer tại Re AI (AWS Partner)",
      lblTopic: "Chủ đề Session 1",
      topic: "Tích hợp Voice AI vào Contact Center doanh nghiệp trên nền tảng AWS",
      metaNotice: "* Lưu ý: Thời gian 08:30 – 12:00 là khung giờ tham dự sự kiện tổng thể, không phản ánh riêng thời lượng Session 1. Địa điểm ghi nhận chính thức theo ban tổ chức (không suy đoán địa chỉ).",
      complianceTitle: "Khung 7 Tiêu chí Báo cáo Sự kiện của Doanh nghiệp",
      crit1: "Tên sự kiện: First Cloud AI Journey 24/10",
      crit2: "Thời gian: 08:30 – 12:00, 24/10/2026",
      crit3: "Địa điểm: Chưa xác nhận",
      crit4: "Vai trò: Người tham dự (Attendee)",
      crit5: "Nội dung tiếp thu: Session 1 Voice AI",
      crit6: "Hình ảnh check-in rõ mặt (Đang chờ cập nhật)",
      crit7: "Bài học rút ra & Đóng góp cá nhân",
      
      sec1Num: "01",
      sec1Title: "Tổng quan phiên chia sẻ",
      sec1Problem: "Session 1 tập trung giải quyết bài toán cốt lõi:",
      sec1Quote: "“Làm thế nào để tích hợp Voice AI vào hệ thống Contact Center doanh nghiệp, đảm bảo khả năng đàm thoại hai chiều với độ trễ thấp, chi phí vận hành hợp lý và trải nghiệm tự nhiên?”",
      sec1P1: "Theo nội dung diễn giả chia sẻ, con người có thể phản xạ tự nhiên trong khoảng <strong>200ms</strong> ở một số tình huống giao tiếp đời thực. Khi hệ thống Voice AI phản hồi chậm từ <strong>3–5 giây</strong>, trải nghiệm hội thoại có thể bị ảnh hưởng đáng kể: tạo ra những khoảng lặng ngắt quãng, làm gián đoạn nhịp đàm thoại (turn-taking) và gây cảm giác khó chịu cho khách hàng.",
      sec1P2: "Do đó, việc giảm độ trễ phản hồi toàn trình (End-to-End Latency) xuống ngưỡng tự nhiên (< 2 giây) là một trong những mục tiêu kỹ thuật quan trọng hàng đầu khi thiết kế hệ thống Contact Center doanh nghiệp.",

      sec2Num: "02",
      sec2Title: "Kiến trúc Voice AI (Mô hình Cascade)",
      sec2Desc: "Phiên chia sẻ trình bày kiến trúc xử lý tuần tự (Cascade Architecture) bao gồm các thành phần:",
      sec2Pipeline: "Speech Input → STT → LLM → Guardrails → TTS → Voice Output",
      sec2STT: "<strong>STT (Speech-to-Text):</strong> Chuyển đổi dòng âm thanh đầu vào của người dùng thành văn bản theo thời gian thực.",
      sec2LLM: "<strong>LLM (Large Language Model):</strong> Đóng vai trò bộ não suy luận, hiểu ngữ cảnh hội thoại và sinh nội dung phản hồi logic.",
      sec2Guardrails: "<strong>Guardrails:</strong> Lớp kiểm tra, kiểm soát nội dung phản hồi, rà soát ảo giác (hallucination), lọc bỏ thông tin định danh nhạy cảm (PII) và bảo đảm tuân thủ chính sách doanh nghiệp.",
      sec2TTS: "<strong>TTS (Text-to-Speech):</strong> Chuyển văn bản phản hồi đã kiểm duyệt thành giọng nói tự nhiên trước khi phát lại cho người nghe.",
      sec2Advantage: "<strong>Ưu điểm nổi bật:</strong> Trong bài toán được chia sẻ, ưu điểm then chốt của kiến trúc này là khả năng kiểm soát nội dung chặt chẽ qua lớp Guardrails trước khi phát âm, đảm bảo tính an toàn thương hiệu và tuân thủ các quy định bảo mật nghiệp vụ.",
      sec2Nuance: "<strong>Đánh giá kiến trúc:</strong> Cần lưu ý rằng Cascade không phải là kiến trúc tối ưu tuyệt đối cho mọi bài toán do sự tích lũy độ trễ qua từng bước nối tiếp (STT + LLM + Guardrails + TTS). Mặc dù các mô hình Speech-to-Speech trực tiếp (End-to-End S2S) có thể giảm độ trễ, Cascade vẫn là lựa chọn thực tiễn hàng đầu trong môi trường doanh nghiệp nhờ tính mô-đun hóa cao, dễ dàng kiểm toán từng khâu và cho phép linh hoạt nâng cấp độc lập từng thành phần.",
      diagramCaption: "Sơ đồ luồng xử lý Voice AI Cascade tích hợp lớp bảo vệ Guardrails trên hạ tầng AWS",

      sec3Num: "03",
      sec3Title: "Hạ tầng AWS & Kỹ thuật Mạng đám mây",
      sec3Desc: "Các công nghệ hạ tầng cốt lõi được đề cập và phân tích trong session:",
      sec3WebRTC: "<strong>WebRTC / UDP:</strong> Hỗ trợ truyền âm thanh thời gian thực hai chiều với độ trễ thấp. Giao thức UDP loại bỏ độ trễ do cơ chế retransmission và head-of-line blocking của TCP, duy trì luồng audio ổn định ngay cả trong điều kiện mạng biến động.",
      sec3EC2: "<strong>Amazon EC2 GPU:</strong> Cung cấp hạ tầng tính toán tăng tốc phần cứng (GPU instances) để tối ưu hóa thời gian suy luận (inference latency) của các mô hình STT và TTS cục bộ.",
      sec3PrivateLink: "<strong>AWS PrivateLink:</strong> Hỗ trợ kết nối riêng tư, an toàn giữa VPC và các dịch vụ tương thích trong AWS mà không cần định tuyến qua Internet công cộng, giúp giảm số lượng network hops và bảo vệ dữ liệu hội thoại nhạy cảm.",
      sec3Networking: "<strong>Cloud Networking:</strong> Thiết kế VPC, Subnet, Route Table và vị trí Availability Zone ảnh hưởng trực tiếp đến độ trễ truyền gói tin (RTT), tính ổn định và khả năng vận hành liên tục của hệ thống.",
      sec3Insight: "<strong>Nhận định kỹ thuật quan trọng:</strong> <em>Hiệu năng của mô hình LLM đơn thuần không thể quyết định toàn bộ hiệu năng của hệ thống Voice AI.</em> Độ trễ người dùng cảm nhận là tổng hòa của cả chuỗi truyền dẫn: từ việc stream gói tin qua UDP, xử lý Voice Activity Detection (VAD), thời gian nhận dạng STT, độ trễ sinh token đầu tiên của LLM (TTFT), quá trình duyệt qua Guardrails, cho đến việc tổng hợp TTS thành từng audio chunk để phát lại. Tối ưu hạ tầng mạng và pipeline streaming quan trọng không kém việc lựa chọn mô hình LLM.",

      sec4Num: "04",
      sec4Title: "Tối ưu hóa Hiệu năng & Chi phí vận hành",
      sec4P1: "Theo số liệu trình bày từ diễn giả trong phiên chia sẻ, các chỉ số đo lường hiệu năng và chi phí được cân đối cụ thể:",
      sec4Metric1Val: "~200ms",
      sec4Metric1Lbl: "Mốc phản xạ tự nhiên",
      sec4Metric1Sub: "Được đề cập làm chuẩn tham chiếu",
      sec4Metric2Val: "< 2 giây",
      sec4Metric2Lbl: "Độ trễ toàn trình",
      sec4Metric2Sub: "Mục tiêu phản hồi của hệ thống",
      sec4Metric3Val: "~3.000 VNĐ",
      sec4Metric3Lbl: "Chi phí / cuộc gọi",
      sec4Metric3Sub: "Mức chi phí bình quân chia sẻ",
      sec4Attribution: "* Các chỉ số trên được trích dẫn trực tiếp từ bài thuyết trình của diễn giả tại phiên chia sẻ.",
      sec4LessonQuote: "“Một giải pháp AI triển khai thực tế không chỉ cần khả năng phản hồi thông minh, mà còn phải tối ưu độ trễ, chi phí và độ ổn định.”",

      sec5Num: "05",
      sec5Title: "Nghiên cứu điển hình tại VPBank (VPBank Case Study)",
      sec5Desc: "Theo số liệu diễn giả chia sẻ trong bài trình bày, dự án triển khai Voice AI thực tế tại VPBank đạt được các kết quả ban đầu:",
      sec5Metric1Val: "282",
      sec5Metric1Lbl: "Ứng viên",
      sec5Metric1Sub: "Được phỏng vấn tự động hoàn toàn",
      sec5Metric2Val: "90%",
      sec5Metric2Lbl: "Độ chính xác",
      sec5Metric2Sub: "Nhận diện ý định được báo cáo",
      sec5Metric3Val: "62%",
      sec5Metric3Lbl: "Tỷ lệ nộp đơn",
      sec5Metric3Sub: "Tỷ lệ ứng viên hoàn thành hồ sơ",
      sec5Disclaimer: "* Lưu ý: Các chỉ số trên do diễn giả chia sẻ trong phiên trình bày nhằm minh họa cho bài toán thực tế, chưa qua kiểm chứng độc lập.",

      sec6Num: "06",
      sec6Title: "Trực quan Live Demo tại Hội trường",
      sec6Desc: "Hệ thống Voice AI được demo trực tiếp thông qua cuộc gọi điện thoại phỏng vấn ứng viên tuyển dụng vị trí Cloud Architect:",
      sec6Item1: "<strong>Kiến trúc VPC ba tầng:</strong> Voice AI đặt câu hỏi kiểm tra kiến thức thiết kế 3-tier VPC (Public Subnet cho ALB, Private Subnet cho App/EKS, Isolated Subnet cho Database).",
      sec6Item2: "<strong>Đánh giá năng lực Cloud Architecture:</strong> Thẩm định tư duy phân tầng bảo mật, Route Table, NAT Gateway và tính sẵn sàng cao (High Availability).",
      sec6Item3: "<strong>Thương lượng kỳ vọng thu nhập:</strong> Trao đổi linh hoạt về mức lương mong muốn khoảng 20 triệu đồng và ghi nhận phản hồi một cách tự nhiên.",
      sec6Item4: "<strong>Cuộc gọi ngẫu hứng:</strong> Diễn giả thực hiện gọi trực tiếp với một người tham dự tại khán phòng để chứng minh khả năng phản hồi linh hoạt với các biến số âm thanh bất ngờ.",
      sec6Summary: "Buổi demo cho thấy rõ khả năng ứng dụng thực tế của Voice AI trong việc tự động hóa sàng lọc sơ bộ nhân sự, giảm tải cho bộ phận tuyển dụng và chuẩn hóa chất lượng đánh giá ứng viên trong quy trình doanh nghiệp.",

      sec7Num: "07",
      sec7Title: "Những bài học thu hoạch chuyên sâu",
      takeaway1Num: "01",
      takeaway1Title: "Engineering Meets Business",
      takeaway1Body: "Một giải pháp AI thành công cần cân bằng hiệu quả kỹ thuật và hiệu quả kinh tế. Không phải mô hình có số lượng tham số lớn nhất luôn là phương án phù hợp nhất; mô hình có kích thước vừa phải, tối ưu hóa theo domain cụ thể sẽ mang lại chi phí vận hành và độ trễ vượt trội.",
      takeaway2Num: "02",
      takeaway2Title: "Cloud & Networking Matter",
      takeaway2Body: "LLM chỉ là một mắt xích trong toàn bộ hệ thống. Kiến thức nền tảng về WebRTC, giao thức UDP, năng lực tính toán GPU và hạ tầng Cloud Networking đóng vai trò sống còn đối với hiệu suất xử lý đàm thoại thời gian thực.",
      takeaway3Num: "03",
      takeaway3Title: "Vietnamese Speech Processing",
      takeaway3Body: "Quá trình xử lý tiếng Việt thực tế đối mặt với nhiều bài toán kỹ thuật đặc thù: chuẩn hóa từ viết tắt và định dạng tiền tệ (ví dụ: '500k' trong ngữ cảnh số tiền cần được chuẩn hóa thành 'năm trăm nghìn đồng' trước khi chuyển sang TTS), tinh chỉnh độ nhạy Voice Activity Detection (VAD), xử lý tiếng ồn môi trường và kiểm soát ngắt lời (turn-taking) để tránh cướp lời khi người dùng chỉ đang tạm ngắt câu.",
      takeaway4Num: "04",
      takeaway4Title: "AI Safety & Auditing",
      takeaway4Body: "Lớp Guardrails giữ vai trò quyết định trong việc kiểm soát nội dung phản hồi an toàn. Bên cạnh đó, việc lưu trữ call recordings và transcripts hỗ trợ kiểm toán, phân tích lỗi và cải tiến hệ thống, đồng thời bắt buộc phải đáp ứng các tiêu chuẩn bảo mật dữ liệu và quyền riêng tư cá nhân.",

      sec8Num: "08",
      sec8Title: "Bài học rút ra và Đóng góp cá nhân",
      lessonHeading: "Bài học rút ra:",
      lessonQuote: "“Session 1 giúp làm rõ cách một giải pháp AI được triển khai thành hệ thống thực tế phục vụ doanh nghiệp.\n\nViệc xây dựng Voice AI không chỉ phụ thuộc vào LLM mà cần sự kết hợp giữa Cloud Infrastructure, Networking, Real-time Processing, AI Safety và Cost Optimization.\n\nNhững kiến thức này là nền tảng hữu ích cho quá trình học tập, nghiên cứu và thực hành AWS Cloud Engineering.”",
      contribHeading: "Đóng góp cá nhân:",
      contribQuote: "“Tổng hợp và hệ thống hóa nội dung của Session 1, phân tích các thành phần của kiến trúc Voice AI và ghi nhận những kinh nghiệm có thể áp dụng vào quá trình học tập và thực hành.”",

      sec9Num: "09",
      sec9Title: "Hình ảnh Check-in & Hoạt động sự kiện",
      photoPendingBadge: "⏳ Đang chờ cập nhật ảnh chính thức",
      photoPendingTitle: "Hình ảnh Check-in tham gia sự kiện",
      photoPendingDesc: "Theo tiêu chí báo cáo số 6 của công ty (Hình ảnh check-in rõ mặt), khu vực này sẽ hiển thị ảnh check-in thực tế của sinh viên tại sự kiện sau khi có ảnh chính thức. Hệ thống tuân thủ nguyên tắc không sử dụng ảnh giả lập hoặc ảnh không chính chủ nhằm bảo đảm tính minh bạch và trung thực.",
      photoPendingNote: "Khu vực hiển thị ảnh đã sẵn sàng hỗ trợ định dạng độ phân giải cao và tính năng phóng to (lightbox) ngay khi ảnh thực tế được tải lên."
    },
    en: {
      breadcrumb: "First Cloud AI Journey: Weekly Meet Up 24/10",
      badgeText: "EVENT HARVEST REPORT",
      sessionTag: "Session 1 • Voice AI & Contact Center on AWS",
      title: "HARVEST REPORT – SESSION 1: VOICE AI & CONTACT CENTER",
      subtitle: "First Cloud AI Journey: Weekly Meet Up 24/10",
      metaHeader: "Official Event Record",
      lblEventName: "Event Name",
      eventName: "First Cloud AI Journey: Weekly Meet Up 24/10",
      lblDateTime: "Date & Time",
      dateTime: "08:30 – 12:00, 24/10/2026",
      lblLocation: "Location",
      location: "Unconfirmed",
      lblRole: "Participation Role",
      role: "Attendee",
      lblSpeaker: "Session 1 Speaker",
      speaker: "Kiệt Trần – AI Engineer at Re AI (AWS Partner)",
      lblTopic: "Session 1 Topic",
      topic: "Integrating Voice AI into Enterprise Contact Centers on AWS",
      metaNotice: "* Note: 08:30 – 12:00 is the overall event attendance window and does not solely reflect Session 1 duration. Location is recorded per official organizer details (no address invented).",
      complianceTitle: "Company 7 Reporting Criteria Verification Framework",
      crit1: "Event Name: First Cloud AI Journey 24/10",
      crit2: "Time: 08:30 – 12:00, 24/10/2026",
      crit3: "Location: Unconfirmed",
      crit4: "Role: Attendee",
      crit5: "Key Content: Session 1 Voice AI",
      crit6: "Clear Check-in Photo (Pending Upload)",
      crit7: "Lessons Learned & Personal Contribution",
      
      sec1Num: "01",
      sec1Title: "Session Overview",
      sec1Problem: "Session 1 focused on solving a core enterprise engineering challenge:",
      sec1Quote: "“How can enterprises integrate Voice AI into contact center systems, ensuring low-latency two-way voice conversations, reasonable operational costs, and natural user experience?”",
      sec1P1: "According to the speaker, humans exhibit a natural conversational reflex latency of around <strong>200ms</strong> in certain real-life conversational contexts. When a Voice AI system responds with a <strong>3–5 second</strong> delay, the conversational experience deteriorates substantially: awkward pauses appear, conversational turn-taking breaks down, and caller frustration rises quickly.",
      sec1P2: "Consequently, driving down end-to-end response latency to a natural conversational threshold (< 2 seconds) is one of the highest priority technical objectives when architecting modern enterprise contact centers.",

      sec2Num: "02",
      sec2Title: "Voice AI Architecture (Cascade Model)",
      sec2Desc: "The session presented a sequential processing pipeline known as the Cascade Architecture:",
      sec2Pipeline: "Speech Input → STT → LLM → Guardrails → TTS → Voice Output",
      sec2STT: "<strong>STT (Speech-to-Text):</strong> Converts the incoming real-time audio stream from the user into text transcripts.",
      sec2LLM: "<strong>LLM (Large Language Model):</strong> Serves as the cognitive reasoning engine, understanding context, retrieving business knowledge, and synthesizing logical responses.",
      sec2Guardrails: "<strong>Guardrails:</strong> A safety and policy enforcement layer that verifies responses, catches hallucinations, redacts PII, and enforces corporate compliance.",
      sec2TTS: "<strong>TTS (Text-to-Speech):</strong> Synthesizes verified text responses back into natural-sounding speech audio before streaming to the listener.",
      sec2Advantage: "<strong>Key Advantage:</strong> In this enterprise problem setting, the paramount strength of Cascade is the capability to strictly inspect and govern responses via Guardrails prior to vocalization, ensuring brand safety and regulatory compliance.",
      sec2Nuance: "<strong>Architectural Assessment:</strong> Cascade should not be viewed as universally superior for every scenario due to cumulative latency across sequential hops (STT + LLM + Guardrails + TTS). While direct Speech-to-Speech (End-to-End S2S) models reduce latency, Cascade remains the pragmatic enterprise choice thanks to modularity, auditability, and the ability to independently upgrade each pipeline stage.",
      diagramCaption: "Voice AI Cascade pipeline flow with pre-vocalization Guardrails on AWS Cloud Infrastructure",

      sec3Num: "03",
      sec3Title: "AWS Infrastructure & Cloud Networking",
      sec3Desc: "Core infrastructure technologies highlighted and analyzed during the session:",
      sec3WebRTC: "<strong>WebRTC / UDP:</strong> Powers low-latency bidirectional real-time audio streaming. UDP avoids TCP retransmission and head-of-line blocking delays, keeping the audio stream smooth and continuous.",
      sec3EC2: "<strong>Amazon EC2 GPU:</strong> Delivers hardware-accelerated computing (GPU instances) to minimize inference latency for locally hosted STT and TTS models.",
      sec3PrivateLink: "<strong>AWS PrivateLink:</strong> Establishes private, secure connectivity between VPCs and AWS managed services without routing traffic over the public internet, eliminating unnecessary hops and protecting sensitive voice data.",
      sec3Networking: "<strong>Cloud Networking:</strong> VPC subnet architecture, routing tables, and Availability Zone placement directly determine round-trip time (RTT), jitter, and enterprise system SLA.",
      sec3Insight: "<strong>Critical Engineering Insight:</strong> <em>LLM inference performance alone does not determine the overall performance of a Voice AI system.</em> End-to-end user perceived latency is governed by the entire chain: UDP audio packet streaming, jitter buffering, VAD processing, STT transcription, LLM Time-to-First-Token (TTFT), Guardrails inspection, TTS audio chunk generation, and playback. Network and streaming optimization is just as decisive as model selection.",

      sec4Num: "04",
      sec4Title: "Performance & Cost Optimization",
      sec4P1: "According to figures presented by the speaker during the session, performance and cost parameters were balanced as follows:",
      sec4Metric1Val: "~200ms",
      sec4Metric1Lbl: "Natural Reflex Benchmark",
      sec4Metric1Sub: "Human reflex reference cited",
      sec4Metric2Val: "< 2 seconds",
      sec4Metric2Lbl: "End-to-End Latency",
      sec4Metric2Sub: "Target system response time",
      sec4Metric3Val: "~3,000 VND",
      sec4Metric3Lbl: "Cost per Call",
      sec4Metric3Sub: "Average operational cost shared",
      sec4Attribution: "* All numbers above are attributed directly to the speaker's presentation during the session.",
      sec4LessonQuote: "“A real-world production AI solution requires not just intelligent responses, but relentless optimization of latency, operating cost, and systemic stability.”",

      sec5Num: "05",
      sec5Title: "VPBank Case Study",
      sec5Desc: "According to metrics shared by the speaker during the presentation, an initial enterprise Voice AI deployment at VPBank yielded:",
      sec5Metric1Val: "282",
      sec5Metric1Lbl: "Candidates",
      sec5Metric1Sub: "Automatically interviewed end-to-end",
      sec5Metric2Val: "90%",
      sec5Metric2Lbl: "Intent Accuracy",
      sec5Metric2Sub: "Reported intent recognition rate",
      sec5Metric3Val: "62%",
      sec5Metric3Lbl: "Submission Rate",
      sec5Metric3Sub: "Reported application completion rate",
      sec5Disclaimer: "* Note: Metrics were reported by the speaker during the session as an illustrative case study and are not independently verified.",

      sec6Num: "06",
      sec6Title: "Live Demonstration Walkthrough",
      sec6Desc: "The Voice AI system was demonstrated live through an automated screening interview call for a Cloud Architect position:",
      sec6Item1: "<strong>3-Tier VPC Architecture:</strong> Voice AI probed candidate knowledge on multi-tier network isolation (Public Subnets for ALB, Private Subnets for App/EKS, Isolated Subnets for Database).",
      sec6Item2: "<strong>Cloud Architecture Depth:</strong> Evaluated understanding of high availability, Route Tables, NAT Gateways, and security boundaries.",
      sec6Item3: "<strong>Salary Expectation Negotiation:</strong> Seamlessly discussed salary expectations around 20 million VND, recording candidate responses naturally.",
      sec6Item4: "<strong>Spontaneous Test Call:</strong> The speaker placed a live, unscripted call directly to an audience member to test real-time handling of unexpected acoustics and responses.",
      sec6Summary: "The live demonstration vividly highlighted Voice AI's value in automating repetitive preliminary talent screening, easing HR workloads, and standardizing assessment consistency in enterprise hiring workflows.",

      sec7Num: "07",
      sec7Title: "Key Technical Takeaways",
      takeaway1Num: "01",
      takeaway1Title: "Engineering Meets Business",
      takeaway1Body: "A successful AI solution must strike a balance between technical sophistication and economic viability. The largest parameter model is rarely the most suitable; right-sized models tuned for specific domains deliver vastly superior latency and operational costs.",
      takeaway2Num: "02",
      takeaway2Title: "Cloud & Networking Matter",
      takeaway2Body: "The LLM is only one cog in the machine. Solid foundations in WebRTC, UDP protocols, GPU hardware computing, and Cloud Infrastructure are decisive for real-time conversational responsiveness.",
      takeaway3Num: "03",
      takeaway3Title: "Vietnamese Speech Processing",
      takeaway3Body: "Production Vietnamese speech processing involves crucial technical nuances: normalizing abbreviations and currency figures (e.g. '500k' in a financial context must normalize to 'năm trăm nghìn đồng' before TTS), tuning Voice Activity Detection (VAD) thresholds, ambient noise suppression, and managing turn-taking to avoid interrupting speakers during natural pauses.",
      takeaway4Num: "04",
      takeaway4Title: "AI Safety & Auditing",
      takeaway4Body: "Guardrails play an indispensable role in governing safe and compliant responses. Furthermore, call recordings and transcripts support auditing, error analysis, and continuous model improvement while strictly complying with enterprise security and privacy regulations.",

      sec8Num: "08",
      sec8Title: "Lessons Learned & Personal Contribution",
      lessonHeading: "Lessons Learned:",
      lessonQuote: "“Session 1 helped clarify how an AI solution is deployed into a real-world enterprise system.\n\nBuilding Voice AI relies not solely on LLMs, but requires the synthesis of Cloud Infrastructure, Networking, Real-time Processing, AI Safety, and Cost Optimization.\n\nThis knowledge forms a valuable foundation for my ongoing study, research, and hands-on practice in AWS Cloud Engineering.”",
      contribHeading: "Personal Contribution:",
      contribQuote: "“Synthesized and structured the key technical takeaways of Session 1, analyzed the components of the Voice AI architecture, and documented engineering practices applicable to my AWS Cloud learning and hands-on projects.”",

      sec9Num: "09",
      sec9Title: "Event Check-in Photos & Activity",
      photoPendingBadge: "⏳ Pending Authentic Upload",
      photoPendingTitle: "Event Participant Check-in Photo",
      photoPendingDesc: "In accordance with Company Reporting Criterion 6 (Clear participant check-in photo), this section is reserved for the authentic check-in photo of the student attending the event. In adherence to transparency and integrity standards, no artificial or unverified images are used.",
      photoPendingNote: "The display container is configured to support high-fidelity aspect ratio rendering and click-to-enlarge lightbox zoom as soon as the authentic photograph is supplied."
    }
  }
};

function renderEventsList() {
  const container = document.getElementById('events-report-container');
  if (!container) return;

  const lang = app.currentLang;
  const events = app.data.events[lang] || app.data.events.vi;

  container.innerHTML = events.map(ev => {
    const isVoiceAI = ev.slug === 'first-cloud-ai-journey-24-10-2026' || ev.hasFullReport || ev.id === 'event-2';
    const detailRoute = isVoiceAI ? 'events/first-cloud-ai-journey-24-10-2026' : null;
    const descText = ev.shortDesc || (ev.highlights ? ev.highlights.split('\n')[0].replace(/^•\s*/, '') : '');
    const badgeText = isVoiceAI 
      ? (lang === 'vi' ? 'Báo cáo chuyên sâu' : 'Full Report Available')
      : t('eventBadge');

    return `
      <div class="event-card ${isVoiceAI ? 'event-card-featured' : ''}" 
           ${detailRoute ? `onclick="navigateTo('${detailRoute}')" style="cursor:pointer;"` : ''}>
        <div class="event-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:8px;">
            <span class="badge ${isVoiceAI ? 'badge-purple' : 'badge-blue'}">${badgeText}</span>
            <span style="font-size:12px; font-weight:600; color:var(--text-subtle);">${escapeHtml(ev.dateTime?.split(',')[0] || '')}</span>
          </div>
          <h3 class="event-title">${escapeHtml(ev.name)}</h3>
          <div class="event-meta-compact">
            <div class="event-meta-row">
              <span class="meta-label">📅 ${lang === 'vi' ? 'Thời gian:' : 'Date & Time:'}</span>
              <span class="meta-value">${escapeHtml(ev.dateTime)}</span>
            </div>
            <div class="event-meta-row">
              <span class="meta-label">📍 ${lang === 'vi' ? 'Địa điểm:' : 'Location:'}</span>
              <span class="meta-value">${escapeHtml(ev.location)}</span>
            </div>
            <div class="event-meta-row">
              <span class="meta-label">👤 ${t('eventRoleLabel')}</span>
              <span class="meta-value"><strong>${escapeHtml(ev.role)}</strong></span>
            </div>
            ${ev.speakers ? `
              <div class="event-meta-row">
                <span class="meta-label">🎙️ ${t('eventSpeakersLabel')}</span>
                <span class="meta-value">${escapeHtml(ev.speakers)}</span>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="event-short-desc">
          <p>${escapeHtml(descText)}</p>
        </div>

        <div class="event-card-footer">
          ${detailRoute ? `
            <button type="button" class="btn btn-primary btn-sm event-view-report-btn" onclick="event.stopPropagation(); navigateTo('${detailRoute}')">
              <span>${lang === 'vi' ? 'Xem báo cáo chi tiết →' : 'View Full Report →'}</span>
            </button>
          ` : `
            <div></div>
          `}
          <button type="button" class="btn-text-subtle" style="color:#EF4444; font-size:12px;" onclick="event.stopPropagation(); deleteEvent('${ev.id}')">
            ${t('btnDeleteEvent')}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderEventDetail(slug = 'first-cloud-ai-journey-24-10-2026') {
  const container = document.getElementById('event-detail-content-container');
  if (!container) return;

  const lang = app.currentLang || 'vi';
  const reportData = (EVENT_REPORTS[slug] && EVENT_REPORTS[slug][lang]) 
    ? EVENT_REPORTS[slug][lang] 
    : (EVENT_REPORTS['first-cloud-ai-journey-24-10-2026'] ? EVENT_REPORTS['first-cloud-ai-journey-24-10-2026'].vi : null);

  if (!reportData) {
    container.innerHTML = `<div class="card" style="padding:40px; text-align:center;"><h3>Báo cáo chưa khả dụng</h3><button class="btn btn-outline" onclick="navigateTo('events')">Quay lại sự kiện</button></div>`;
    return;
  }

  const r = reportData;

  // Responsive SVG Architecture Diagram
  const svgDiagram = `
    <div class="arch-diagram-wrapper">
      <svg class="arch-svg-container" viewBox="0 0 940 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
          </filter>
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0F172A"/>
            <stop offset="100%" stop-color="#1E293B"/>
          </linearGradient>
          <linearGradient id="guardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1E3A8A"/>
            <stop offset="100%" stop-color="#2563EB"/>
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B"/>
          </marker>
        </defs>

        <!-- AWS Cloud Boundary Box -->
        <rect x="180" y="20" width="580" height="215" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-dasharray="4 4" stroke-width="1.5" />
        <text x="200" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#475569" letter-spacing="0.5">AWS CLOUD INFRASTRUCTURE &amp; SECURE VPC</text>
        <text x="610" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#2563EB">WebRTC / UDP • AWS PrivateLink</text>

        <!-- Node 1: User Audio In -->
        <g transform="translate(15, 80)" filter="url(#cardShadow)">
          <rect width="135" height="95" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
          <circle cx="67" cy="30" r="14" fill="#F1F5F9"/>
          <path d="M67 22 v10 M62 27 a5 5 0 0 0 10 0" stroke="#0F172A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <text x="67" y="56" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#0F172A">Speech Input</text>
          <text x="67" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#64748B">User Voice (SIP/Mic)</text>
          <text x="67" y="83" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#2563EB">WebRTC / UDP</text>
        </g>

        <!-- Connector 1 -> 2 -->
        <line x1="150" y1="127" x2="195" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Node 2: STT (EC2 GPU) -->
        <g transform="translate(200, 75)" filter="url(#cardShadow)">
          <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
          <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">STT Engine</text>
          <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Speech-to-Text</text>
          <rect x="15" y="60" width="95" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
          <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">Amazon EC2 GPU</text>
          <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#16A34A">⚡ Low Latency</text>
        </g>

        <!-- Connector 2 -> 3 -->
        <line x1="325" y1="127" x2="355" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="340" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Text</text>

        <!-- Node 3: LLM Reasoning -->
        <g transform="translate(360, 75)" filter="url(#cardShadow)">
          <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
          <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">LLM Core</text>
          <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Context &amp; Logic</text>
          <rect x="12" y="60" width="101" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
          <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">AWS PrivateLink</text>
          <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#2563EB">Stream Tokens</text>
        </g>

        <!-- Connector 3 -> 4 -->
        <line x1="485" y1="127" x2="515" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="500" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Draft</text>

        <!-- Node 4: Guardrails (Highlighted) -->
        <g transform="translate(520, 68)" filter="url(#cardShadow)">
          <rect width="130" height="118" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <rect x="0" y="0" width="130" height="6" rx="3" fill="#2563EB"/>
          <text x="65" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#1E40AF">🛡️ Guardrails</text>
          <text x="65" y="44" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Safety &amp; Compliance</text>
          <text x="65" y="62" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#334155">• Anti-Hallucination</text>
          <text x="65" y="76" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#334155">• PII &amp; Policy Shield</text>
          <rect x="15" y="86" width="100" height="20" rx="4" fill="#DBEAFE"/>
          <text x="65" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#1E40AF">Pre-Speech Check</text>
        </g>

        <!-- Connector 4 -> 5 -->
        <line x1="650" y1="127" x2="675" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="662" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#16A34A">Safe</text>

        <!-- Node 5: TTS (EC2 GPU) -->
        <g transform="translate(680, 75)" filter="url(#cardShadow)">
          <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
          <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">TTS Engine</text>
          <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Text-to-Speech</text>
          <rect x="15" y="60" width="95" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
          <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">Amazon EC2 GPU</text>
          <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#16A34A">Natural Voice</text>
        </g>

        <!-- Connector 5 -> 6 -->
        <line x1="805" y1="127" x2="840" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Node 6: Voice Output -->
        <g transform="translate(845, 80)" filter="url(#cardShadow)">
          <rect width="80" height="95" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
          <circle cx="40" cy="30" r="14" fill="#F1F5F9"/>
          <path d="M35 30 l5 -4 v8 z M43 27 a4 4 0 0 1 0 6" stroke="#0F172A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <text x="40" y="56" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#0F172A">Voice Out</text>
          <text x="40" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#64748B">WebRTC</text>
          <text x="40" y="83" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#16A34A">&lt;2s Total</text>
        </g>
      </svg>
      <div class="arch-caption">${escapeHtml(r.diagramCaption)}</div>
    </div>
  `;

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${t('eventsBreadcrumb')}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(r.breadcrumb)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${t('btnBackToEvents')}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(r.badgeText)}</span>
          <span class="badge badge-blue">${escapeHtml(r.sessionTag)}</span>
          <span class="badge badge-gray">📅 24/10/2026</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(r.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(r.subtitle)}</p>
      </header>

      <!-- Official Event Metadata Box -->
      <section class="report-meta-box">
        <div class="report-meta-box-header">
          <h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            ${escapeHtml(r.metaHeader)}
          </h4>
          <span class="badge badge-blue">Official FCAJ Record</span>
        </div>
        <div class="report-meta-grid">
          <div class="report-meta-item"><strong>${escapeHtml(r.lblEventName)}:</strong> ${escapeHtml(r.eventName)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblDateTime)}:</strong> ${escapeHtml(r.dateTime)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblLocation)}:</strong> ${escapeHtml(r.location)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblRole)}:</strong> ${escapeHtml(r.role)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblSpeaker)}:</strong> ${escapeHtml(r.speaker)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblTopic)}:</strong> ${escapeHtml(r.topic)}</div>
        </div>
        <div class="report-meta-notice">${escapeHtml(r.metaNotice)}</div>
      </section>

      <!-- Company 7 Reporting Criteria Verification Framework -->
      <section class="report-compliance-card">
        <div class="report-compliance-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>${escapeHtml(r.complianceTitle)}</span>
        </div>
        <div class="compliance-pills">
          <span class="compliance-pill pill-pass">✓ 1. ${escapeHtml(r.crit1)}</span>
          <span class="compliance-pill pill-pass">✓ 2. ${escapeHtml(r.crit2)}</span>
          <span class="compliance-pill pill-pass">✓ 3. ${escapeHtml(r.crit3)}</span>
          <span class="compliance-pill pill-pass">✓ 4. ${escapeHtml(r.crit4)}</span>
          <span class="compliance-pill pill-pass">✓ 5. ${escapeHtml(r.crit5)}</span>
          <span class="compliance-pill pill-pending">⏳ 6. ${escapeHtml(r.crit6)}</span>
          <span class="compliance-pill pill-pass">✓ 7. ${escapeHtml(r.crit7)}</span>
        </div>
      </section>

      <!-- SECTION 1 – TỔNG QUAN PHIÊN CHIA SẺ -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec1Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec1Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec1Problem)}</p>
          <div class="report-quote-box">${escapeHtml(r.sec1Quote)}</div>
          <p>${r.sec1P1}</p>
          <p>${r.sec1P2}</p>
        </div>
      </section>

      <!-- SECTION 2 – KIẾN TRÚC VOICE AI -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec2Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec2Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec2Desc)}</p>
          <div style="background:#F1F5F9; padding:10px 16px; border-radius:8px; font-family:var(--font-mono); font-size:13px; font-weight:700; color:#0F172A; margin-bottom:16px;">
            ${escapeHtml(r.sec2Pipeline)}
          </div>
          <ul>
            <li>${r.sec2STT}</li>
            <li>${r.sec2LLM}</li>
            <li>${r.sec2Guardrails}</li>
            <li>${r.sec2TTS}</li>
          </ul>
          <p>${r.sec2Advantage}</p>
          ${svgDiagram}
          <p>${r.sec2Nuance}</p>
        </div>
      </section>

      <!-- SECTION 3 – AWS INFRASTRUCTURE & NETWORKING -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec3Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec3Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec3Desc)}</p>
          <ul>
            <li>${r.sec3WebRTC}</li>
            <li>${r.sec3EC2}</li>
            <li>${r.sec3PrivateLink}</li>
            <li>${r.sec3Networking}</li>
          </ul>
          <div class="report-quote-box" style="border-left-color:#2563EB; font-style:normal;">
            ${r.sec3Insight}
          </div>
        </div>
      </section>

      <!-- SECTION 4 – PERFORMANCE & COST OPTIMIZATION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec4Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec4Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec4P1)}</p>
          <div class="metric-cards-grid">
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#0F172A;">${escapeHtml(r.sec4Metric1Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric1Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric1Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#2563EB;">${escapeHtml(r.sec4Metric2Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric2Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric2Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#16A34A;">${escapeHtml(r.sec4Metric3Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric3Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric3Sub)}</div>
            </div>
          </div>
          <div class="metric-disclaimer">${escapeHtml(r.sec4Attribution)}</div>
          <div class="report-quote-box" style="margin-top:20px;">
            ${escapeHtml(r.sec4LessonQuote)}
          </div>
        </div>
      </section>

      <!-- SECTION 5 – VPBANK CASE STUDY -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec5Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec5Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec5Desc)}</p>
          <div class="metric-cards-grid">
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#0F172A;">${escapeHtml(r.sec5Metric1Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric1Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric1Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#2563EB;">${escapeHtml(r.sec5Metric2Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric2Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric2Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#16A34A;">${escapeHtml(r.sec5Metric3Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric3Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric3Sub)}</div>
            </div>
          </div>
          <div class="metric-disclaimer">${escapeHtml(r.sec5Disclaimer)}</div>
        </div>
      </section>

      <!-- SECTION 6 – LIVE DEMO -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec6Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec6Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec6Desc)}</p>
          <ul>
            <li>${r.sec6Item1}</li>
            <li>${r.sec6Item2}</li>
            <li>${r.sec6Item3}</li>
            <li>${r.sec6Item4}</li>
          </ul>
          <p>${escapeHtml(r.sec6Summary)}</p>
        </div>
      </section>

      <!-- SECTION 7 – NHỮNG BÀI HỌC THU HOẠCH -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec7Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec7Title)}</h2>
        </div>
        <div class="takeaways-grid">
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway1Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway1Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway1Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway2Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway2Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway2Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway3Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway3Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway3Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway4Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway4Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway4Body)}</div>
          </div>
        </div>
      </section>

      <!-- SECTION 8 – BÀI HỌC RÚT RA VÀ ĐÓNG GÓP CÁ NHÂN -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec8Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec8Title)}</h2>
        </div>
        <div class="report-prose">
          <h4 style="font-size:15px; font-weight:700; color:#0F172A; margin:14px 0 8px 0;">${escapeHtml(r.lessonHeading)}</h4>
          <div class="report-quote-box" style="white-space:pre-line; font-style:normal; margin-bottom:20px;">
            ${escapeHtml(r.lessonQuote)}
          </div>

          <h4 style="font-size:15px; font-weight:700; color:#0F172A; margin:20px 0 8px 0;">${escapeHtml(r.contribHeading)}</h4>
          <div class="report-quote-box" style="font-style:normal; border-left-color:#2563EB;">
            ${escapeHtml(r.contribQuote)}
          </div>
        </div>
      </section>

      <!-- SECTION 9 – EVENT CHECK-IN & PHOTOS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec9Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec9Title)}</h2>
        </div>
        <div class="photo-pending-box">
          <div class="photo-pending-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <span class="photo-pending-badge">${escapeHtml(r.photoPendingBadge)}</span>
          <h3 class="photo-pending-title" style="margin-top:12px;">${escapeHtml(r.photoPendingTitle)}</h3>
          <p class="photo-pending-desc">${escapeHtml(r.photoPendingDesc)}</p>
          <p style="font-size:12px; color:#92400E; margin:0; font-style:italic;">${escapeHtml(r.photoPendingNote)}</p>
        </div>
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${t('btnBackToEvents')}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${lang === 'vi' ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}

function deleteEvent(id) {
  if (confirm(t('confirmDeleteEvent'))) {
    const lang = app.currentLang;
    app.data.events[lang] = (app.data.events[lang] || []).filter(e => e.id !== id);
    app.saveData();
    renderEventsList();
    showToast(t('toastDeleteEvent'));
  }
}

function setupEvents() {
  const btnAdd = document.getElementById('btn-add-event');
  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      const promptName = app.currentLang === 'vi' ? 'Tên sự kiện:' : 'Event Name:';
      const promptTime = app.currentLang === 'vi' ? 'Thời gian:' : 'Date & Time:';
      const promptLoc = app.currentLang === 'vi' ? 'Địa điểm:' : 'Location:';
      const promptHighlights = app.currentLang === 'vi' ? 'Nội dung & Bài học rút ra:' : 'Highlights & Takeaways:';

      const name = prompt(promptName, 'Event - ');
      if (!name) return;
      const dateTime = prompt(promptTime, '');
      const location = prompt(promptLoc, '');
      const highlights = prompt(promptHighlights, '');

      const lang = app.currentLang;
      if (!app.data.events[lang]) app.data.events[lang] = [];
      app.data.events[lang].push({
        id: 'event-' + Date.now(),
        name,
        dateTime: dateTime || '-',
        location: location || '-',
        role: lang === 'vi' ? 'Khách mời tham dự' : 'Attendee',
        speakers: lang === 'vi' ? 'Chuyên gia AWS' : 'AWS Experts',
        highlights: highlights || ''
      });

      app.saveData();
      renderEventsList();
      showToast(t('toastAddEvent'));
    });
  }
}

// ==========================================
// 11. 5. WORKSHOP STEPS
// ==========================================
function setupWorkshopSteps() {
  const stepBtns = document.querySelectorAll('.ws-step-btn');
  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepId = btn.getAttribute('data-step');
      stepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.ws-step-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      const targetPane = document.getElementById(`pane-${stepId}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// ==========================================
// 12. 6. SELF-ASSESSMENT
// ==========================================
function renderCriteriaTable() {
  const tbody = document.getElementById('criteria-tbody');
  if (!tbody) return;

  const isVi = app.currentLang === 'vi';
  tbody.innerHTML = app.data.criteria.map((c) => `
    <tr>
      <td style="text-align:center; font-weight:700;">${c.id}</td>
      <td><strong>${escapeHtml(isVi ? c.title_vi : c.title_en)}</strong></td>
      <td>${escapeHtml(isVi ? c.desc_vi : c.desc_en)}</td>
      <td style="text-align:center;">
        <input type="radio" name="criteria-${c.id}" value="good" ${c.rating === 'good' ? 'checked' : ''} onchange="setCriteriaRating(${c.id}, 'good')">
      </td>
      <td style="text-align:center;">
        <input type="radio" name="criteria-${c.id}" value="fair" ${c.rating === 'fair' ? 'checked' : ''} onchange="setCriteriaRating(${c.id}, 'fair')">
      </td>
      <td style="text-align:center;">
        <input type="radio" name="criteria-${c.id}" value="avg" ${c.rating === 'avg' ? 'checked' : ''} onchange="setCriteriaRating(${c.id}, 'avg')">
      </td>
    </tr>
  `).join('');
}

function setCriteriaRating(id, rating) {
  const item = app.data.criteria.find(c => c.id === id);
  if (item) {
    item.rating = rating;
    app.saveData();
  }
}

function renderSelfAssessmentInputs() {
  const lang = app.currentLang;
  const narrative = document.getElementById('assess-narrative');
  const improvement = document.getElementById('assess-improvement');

  if (narrative) narrative.value = app.data.selfNarrative[lang] || '';
  if (improvement) improvement.value = app.data.needsImprovement[lang] || '';
}

function setupSelfAssessment() {
  const btnSave = document.getElementById('btn-save-assessment');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const lang = app.currentLang;
      app.data.selfNarrative[lang] = document.getElementById('assess-narrative').value.trim();
      app.data.needsImprovement[lang] = document.getElementById('assess-improvement').value.trim();
      app.saveData();
      showToast(t('toastSaveAssessment'));
    });
  }
}

// ==========================================
// 13. 7. SHARING AND FEEDBACK
// ==========================================
function renderFeedbackInputs() {
  const lang = app.currentLang;
  const fb = app.data.feedback[lang] || app.data.feedback.vi;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('fb-env', fb.env);
  setVal('fb-mentor', fb.mentor);
  setVal('fb-relevance', fb.relevance);
  setVal('fb-learning', fb.learning);
  setVal('fb-culture', fb.culture);
  setVal('fb-policies', fb.policies);
  setVal('fb-suggestions', fb.suggestions);
}

function setupFeedback() {
  const btnSave = document.getElementById('btn-save-feedback');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const lang = app.currentLang;
      app.data.feedback[lang] = {
        env: document.getElementById('fb-env').value.trim(),
        mentor: document.getElementById('fb-mentor').value.trim(),
        relevance: document.getElementById('fb-relevance').value.trim(),
        learning: document.getElementById('fb-learning').value.trim(),
        culture: document.getElementById('fb-culture').value.trim(),
        policies: document.getElementById('fb-policies').value.trim(),
        suggestions: document.getElementById('fb-suggestions').value.trim()
      };
      app.saveData();
      showToast(t('toastSaveFeedback'));
    });
  }
}

// ==========================================
// 14. SETTINGS & PRINT
// ==========================================
function setupSettingsAndPrint() {
  const btnExport = document.getElementById('btn-export-json');
  const fileImport = document.getElementById('file-import-json');
  const btnReset = document.getElementById('btn-reset-data');
  const btnPrint = document.getElementById('btn-quick-print');

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(app.data, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = `internship-report-fcaj-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast(t('toastExportJson'));
    });
  }

  if (fileImport) {
    fileImport.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const parsed = JSON.parse(evt.target.result);
          if (parsed && (parsed.worklogs || parsed.studentInfo)) {
            parsed.studentInfo = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.studentInfo));
            app.data = parsed;
            app.saveData();
            app.applyLanguage();
            showToast(t('toastImportSuccess'));
          }
        } catch (err) {
          showToast(t('toastImportError'), 'error');
        }
      };
      reader.readAsText(file);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm(t('confirmReset'))) {
        app.data = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
        app.saveData();
        app.applyLanguage();
        showToast(t('toastResetSuccess'));
      }
    });
  }

  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
}

// ==========================================
// 15. LANGUAGE SWITCHER & SEARCH
// ==========================================
function setupLanguageSwitcher() {
  const btnVi = document.getElementById('btn-lang-vi');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnVi) {
    btnVi.addEventListener('click', () => {
      if (app.currentLang !== 'vi') {
        app.setLang('vi');
        showToast(t('toastLangSwitch'));
      }
    });
  }

  if (btnEn) {
    btnEn.addEventListener('click', () => {
      if (app.currentLang !== 'en') {
        app.setLang('en');
        showToast(t('toastLangSwitch'));
      }
    });
  }
}

function setupSearchAndMobile() {
  const searchInput = document.getElementById('sidebar-quick-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) return;

      if (q.includes('worklog') || q.includes('tuần') || q.includes('week') || q.includes('nhật ký')) navigateTo('worklog');
      else if (q.includes('proposal') || q.includes('đồ án') || q.includes('weather') || q.includes('đề xuất')) navigateTo('proposal');
      else if (q.includes('blog') || q.includes('eks') || q.includes('bài viết') || q.includes('s3 express') || q.includes('one zone') || q.includes('amdahl')) navigateTo('blogs-posted');
      else if (q.includes('voice ai') || q.includes('contact center') || q.includes('kiệt trần') || q.includes('meet up') || q.includes('cascade') || q.includes('vpbank')) navigateTo('events/first-cloud-ai-journey-24-10-2026');
      else if (q.includes('event') || q.includes('sự kiện') || q.includes('bitexco')) navigateTo('events');
      else if (q.includes('workshop') || q.includes('s3') || q.includes('endpoint') || q.includes('thực hành')) navigateTo('workshop');
      else if (q.includes('đánh giá') || q.includes('self') || q.includes('assessment')) navigateTo('self-evaluation');
      else if (q.includes('feedback') || q.includes('góp ý') || q.includes('chia sẻ')) navigateTo('feedback');
    });
  }

  const toggleBtn = document.getElementById('btn-toggle-menu');
  const sidebar = document.getElementById('sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
        sidebar.classList.remove('open');
      }
    });
  }
}

// ==========================================
// 16. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleHashChange);
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateTo(page);
    });
  });

  setupStudentInfo();
  setupWorklog();
  setupProposal();
  setupBlogs();
  setupEvents();
  setupWorkshopSteps();
  setupSelfAssessment();
  setupFeedback();
  setupSettingsAndPrint();
  setupLanguageSwitcher();
  setupSearchAndMobile();

  // Apply initial language from localStorage or default
  app.applyLanguage();

  // Navigate to current hash
  const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  navigateTo(currentHash);
});

// Expose functions globally for HTML onclick and event listeners
window.app = app;
window.navigateTo = navigateTo;
window.renderEventDetail = renderEventDetail;
window.selectWeek = selectWeek;
window.deleteWeekTask = deleteWeekTask;
window.openEditTaskModal = openEditTaskModal;
window.openAddTaskModal = openAddTaskModal;
window.openMetaModal = openMetaModal;
window.clearCurrentWeek = clearCurrentWeek;
window.exportWorklogJson = exportWorklogJson;
window.showExportCodeModal = showExportCodeModal;
window.deleteBlog = deleteBlog;
window.deleteEvent = deleteEvent;
window.setCriteriaRating = setCriteriaRating;
