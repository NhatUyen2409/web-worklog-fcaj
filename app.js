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
    navWorklog: "1. Nhật ký công việc",
    navProposal: "2. Đề xuất đồ án",
    navBlogs: "3. Bài viết Blog",
    navEvents: "4. Sự kiện tham gia",
    navWorkshop: "5. Bài thực hành Workshop",
    navSelfAssessment: "6. Tự đánh giá",
    navFeedback: "7. Chia sẻ & Góp ý",
    navSettings: "Cài đặt & Sao lưu",
    
    // Sidebar profile
    sidebarCompany: "Amazon Web Services Việt Nam",
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
    officialBadge: "Chính thức • AWS FCAJ",
    labelFullName: "Họ và tên",
    labelPhone: "Số điện thoại",
    labelEmail: "Email",
    labelUniversity: "Trường Đại học",
    labelMajor: "Chuyên ngành",
    labelClass: "Lớp / Khóa",
    labelCompany: "Đơn vị thực tập",
    labelPosition: "Vị trí thực tập",
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
    toc3Desc: "Các bài viết kỹ thuật đã đăng tải trên AWS Study Group (EKS Pod Identity Session Policies,...).",
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
    metaObjectivesTitle: "🎯 Mục tiêu tuần",
    metaAchievementsTitle: "🏆 Thành tích đạt được",
    tasksTableTitle: "📋 Nội dung công việc thực hiện trong tuần",
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
    worklogToolsLabel: "🛠️ Thao tác nhanh:",
    btnExportWorklog: "Xuất JSON",
    btnImportWorklog: "Nhập JSON",
    modalMetaTitle: "🎯 Chỉnh sửa Mục tiêu & Thành tích",
    modalMetaObjectivesLabel: "🎯 Mục tiêu trọng tâm tuần",
    modalMetaObjectivesPlaceholder: "Nhập mục tiêu trọng tâm trong tuần...",
    modalMetaAchievementsLabel: "🏆 Thành tích đạt được (mỗi ý một dòng, gạch đầu dòng -)",
    modalMetaAchievementsPlaceholder: "- Hoàn thành nhiệm vụ...\n- Nắm vững kiến thức...",
    btnModalSaveMeta: "Lưu mục tiêu & thành tích",
    modalEditTaskTitle: "✏️ Chỉnh sửa công việc",
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
    navWorklog: "1. Worklog",
    navProposal: "2. Proposal",
    navBlogs: "3. Blogs Posted",
    navEvents: "4. Events Participated",
    navWorkshop: "5. Workshop",
    navSelfAssessment: "6. Self-Assessment",
    navFeedback: "7. Sharing and Feedback",
    navSettings: "Settings & Backup",
    
    // Sidebar profile
    sidebarCompany: "Amazon Web Services Vietnam",
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
    officialBadge: "Official • AWS FCAJ",
    labelFullName: "Full Name",
    labelPhone: "Phone Number",
    labelEmail: "Email",
    labelUniversity: "University",
    labelMajor: "Major",
    labelClass: "Class",
    labelCompany: "Internship Company",
    labelPosition: "Internship Position",
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
    metaObjectivesTitle: "🎯 Week Objectives",
    metaAchievementsTitle: "🏆 Week Achievements",
    tasksTableTitle: "📋 Tasks to be carried out this week",
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
    worklogToolsLabel: "🛠️ Quick Tools:",
    btnExportWorklog: "Export JSON",
    btnImportWorklog: "Import JSON",
    modalMetaTitle: "🎯 Edit Objectives & Achievements",
    modalMetaObjectivesLabel: "🎯 Core Week Objectives",
    modalMetaObjectivesPlaceholder: "Enter core technical/research objectives for this week...",
    modalMetaAchievementsLabel: "🏆 Week Achievements (one per line, starting with -)",
    modalMetaAchievementsPlaceholder: "- Mastered concepts...\n- Completed lab exercises...",
    btnModalSaveMeta: "Save Objectives & Achievements",
    modalEditTaskTitle: "✏️ Edit Task",
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
// ==========================================
const DEFAULT_BILINGUAL_DATA = {
  studentInfo: {
    fullName: "Phan Nhat Uyen",
    phone: "0989888999",
    email: "uyen.phan@intern.aws.com",
    className: "AWS082026",
    vi: {
      university: "Trường Đại học Sư phạm Kỹ thuật TP.HCM",
      major: "Công nghệ Thông tin",
      company: "Công ty TNHH Amazon Web Services Việt Nam",
      position: "Chương trình Đào tạo Nhân lực - First Cloud AI Journey",
      duration: "Từ 10/08/2026 đến 10/11/2026"
    },
    en: {
      university: "Ho Chi Minh City University of Technology and Education",
      major: "Information Technology",
      company: "Amazon Web Services Viet Nam Company Limited",
      position: "Workforce Bootcamp - First Cloud AI Journey",
      duration: "From 10/08/2026 to 10/11/2026"
    }
  },
  currentWeek: 1,
  worklogs: Array.from({ length: 12 }, (_, i) => {
    const weekNum = i + 1;
            if (weekNum === 1) {
      return {
        weekNum: 1,
        vi: {
          objectives: "- Get acquainted with FCAJ members and understand the internship working process.\n- Complete the AWS Free $100 Credit registration for hands-on practice.\n- Understand fundamental AWS services and AWS global infrastructure.\n- Become familiar with AWS Management Console and AWS CLI.\n- Learn basic Amazon EC2 concepts and perform the first EC2 hands-on lab.",
          achievements: "- Successfully completed the AWS Free $100 Credit registration for AWS hands-on activities.\n- Understood the basic concepts of Cloud Computing and AWS Global Infrastructure:\n  - Region\n  - Availability Zone\n  - Edge Location\n- Understood the major AWS service groups:\n  - Compute\n  - Storage\n  - Networking\n  - Database\n  - Security\n  - Monitoring\n- Became familiar with the AWS Management Console and learned how to:\n  - Search and access AWS services\n  - Switch AWS Regions\n  - View and manage AWS resources\n  - Check basic resource information\n- Successfully installed and configured AWS CLI, including:\n  - Access Key\n  - Secret Key\n  - Default Region\n  - Output Format\n- Used AWS CLI to:\n  - Verify AWS identity and account information\n  - Check CLI configuration\n  - Retrieve the list of AWS Regions\n  - View EC2 instances and instance states\n  - Manage/check EC2 Key Pairs\n  - Retrieve basic AWS resource information\n- Learned the fundamental components of Amazon EC2:\n  - AMI\n  - Instance Type\n  - EBS\n  - Key Pair\n  - Security Group\n  - Public/Private IP\n  - Elastic IP\n- Successfully launched and managed an EC2 instance.\n- Successfully connected to a Linux EC2 instance through SSH.\n- Created and attached an additional EBS volume to an EC2 instance.\n- Practiced managing EC2 using both AWS Console and AWS CLI.\n- Gained the ability to perform a complete basic workflow:\n  AWS Account → Console/CLI → EC2 → Security Group → SSH → EBS → Resource Management.",
          tasks: [
            {
              day: "2",
              desc: "- Get acquainted with FCAJ mentors and members.\n- Learn about the FCAJ internship roadmap, working process, rules, and regulations.\n- Understand weekly worklog requirements and expected learning outcomes.\n- Complete the required process to receive AWS Free $100 Credit for hands-on labs.\n- Check the AWS learning environment and understand basic cost-control precautions.",
              start: "2026-08-10",
              end: "2026-08-10",
              ref: "AWS Account: https://000001.awsstudygroup.com/\nAWS Budgets: https://000007.awsstudygroup.com/"
            },
            {
              day: "3",
              desc: "- Learn the fundamentals of Cloud Computing and Amazon Web Services (AWS).\n- Understand AWS Global Infrastructure: Region, Availability Zone, Edge Location.\n- Learn major AWS service groups: Compute, Storage, Networking, Database, Security, Monitoring.\n- Explore AWS Management Console and locate commonly used AWS services.\n- Practice switching AWS Regions and checking available services/resources.",
              start: "2026-08-11",
              end: "2026-08-11",
              ref: "First Cloud Journey: https://cloudjourney.awsstudygroup.com/"
            },
            {
              day: "4",
              desc: "- Learn about AWS Management Console and AWS CLI.\n- Install and configure AWS CLI on the local computer.\n- Configure Access Key, Secret Key, Default Region, and Output Format.\n- Practice basic CLI commands to check AWS identity, configuration, and available regions.\n- Use AWS CLI to retrieve EC2 information and compare results with AWS Console.\n- Understand the difference between managing AWS resources through Console and CLI.",
              start: "2026-08-12",
              end: "2026-08-12",
              ref: "AWS CLI: https://000011.awsstudygroup.com/\nAWS Account: https://000001.awsstudygroup.com/"
            },
            {
              day: "5",
              desc: "- Learn basic concepts of Amazon EC2.\n- Study AMI, Instance Type, EBS, Key Pair, Security Group, Public IP, Private IP, and Elastic IP.\n- Understand EC2 instance lifecycle: Pending, Running, Stopping, Stopped, Terminated.\n- Learn how SSH authentication works when connecting to EC2.\n- Learn the role of Security Groups in controlling inbound/outbound traffic.\n- Explore the EC2 Dashboard and available instance configurations.",
              start: "2026-08-13",
              end: "2026-08-14",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            },
            {
              day: "6",
              desc: "- Practice launching an Amazon EC2 instance.\n- Configure AMI, Instance Type, Key Pair, Network, and Security Group.\n- Connect to the EC2 Linux instance through SSH.\n- Execute basic Linux commands and verify server status.\n- Create and attach an additional EBS volume to EC2.\n- Practice Start/Stop EC2 and check instance status using both AWS Console and AWS CLI.",
              start: "2026-08-14",
              end: "2026-08-14",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            }
          ]
        },
        en: {
          objectives: "- Get acquainted with FCAJ members and understand the internship working process.\n- Complete the AWS Free $100 Credit registration for hands-on practice.\n- Understand fundamental AWS services and AWS global infrastructure.\n- Become familiar with AWS Management Console and AWS CLI.\n- Learn basic Amazon EC2 concepts and perform the first EC2 hands-on lab.",
          achievements: "- Successfully completed the AWS Free $100 Credit registration for AWS hands-on activities.\n- Understood the basic concepts of Cloud Computing and AWS Global Infrastructure:\n  - Region\n  - Availability Zone\n  - Edge Location\n- Understood the major AWS service groups:\n  - Compute\n  - Storage\n  - Networking\n  - Database\n  - Security\n  - Monitoring\n- Became familiar with the AWS Management Console and learned how to:\n  - Search and access AWS services\n  - Switch AWS Regions\n  - View and manage AWS resources\n  - Check basic resource information\n- Successfully installed and configured AWS CLI, including:\n  - Access Key\n  - Secret Key\n  - Default Region\n  - Output Format\n- Used AWS CLI to:\n  - Verify AWS identity and account information\n  - Check CLI configuration\n  - Retrieve the list of AWS Regions\n  - View EC2 instances and instance states\n  - Manage/check EC2 Key Pairs\n  - Retrieve basic AWS resource information\n- Learned the fundamental components of Amazon EC2:\n  - AMI\n  - Instance Type\n  - EBS\n  - Key Pair\n  - Security Group\n  - Public/Private IP\n  - Elastic IP\n- Successfully launched and managed an EC2 instance.\n- Successfully connected to a Linux EC2 instance through SSH.\n- Created and attached an additional EBS volume to an EC2 instance.\n- Practiced managing EC2 using both AWS Console and AWS CLI.\n- Gained the ability to perform a complete basic workflow:\n  AWS Account → Console/CLI → EC2 → Security Group → SSH → EBS → Resource Management.",
          tasks: [
            {
              day: "2",
              desc: "- Get acquainted with FCAJ mentors and members.\n- Learn about the FCAJ internship roadmap, working process, rules, and regulations.\n- Understand weekly worklog requirements and expected learning outcomes.\n- Complete the required process to receive AWS Free $100 Credit for hands-on labs.\n- Check the AWS learning environment and understand basic cost-control precautions.",
              start: "2026-08-10",
              end: "2026-08-10",
              ref: "AWS Account: https://000001.awsstudygroup.com/\nAWS Budgets: https://000007.awsstudygroup.com/"
            },
            {
              day: "3",
              desc: "- Learn the fundamentals of Cloud Computing and Amazon Web Services (AWS).\n- Understand AWS Global Infrastructure: Region, Availability Zone, Edge Location.\n- Learn major AWS service groups: Compute, Storage, Networking, Database, Security, Monitoring.\n- Explore AWS Management Console and locate commonly used AWS services.\n- Practice switching AWS Regions and checking available services/resources.",
              start: "2026-08-11",
              end: "2026-08-11",
              ref: "First Cloud Journey: https://cloudjourney.awsstudygroup.com/"
            },
            {
              day: "4",
              desc: "- Learn about AWS Management Console and AWS CLI.\n- Install and configure AWS CLI on the local computer.\n- Configure Access Key, Secret Key, Default Region, and Output Format.\n- Practice basic CLI commands to check AWS identity, configuration, and available regions.\n- Use AWS CLI to retrieve EC2 information and compare results with AWS Console.\n- Understand the difference between managing AWS resources through Console and CLI.",
              start: "2026-08-12",
              end: "2026-08-12",
              ref: "AWS CLI: https://000011.awsstudygroup.com/\nAWS Account: https://000001.awsstudygroup.com/"
            },
            {
              day: "5",
              desc: "- Learn basic concepts of Amazon EC2.\n- Study AMI, Instance Type, EBS, Key Pair, Security Group, Public IP, Private IP, and Elastic IP.\n- Understand EC2 instance lifecycle: Pending, Running, Stopping, Stopped, Terminated.\n- Learn how SSH authentication works when connecting to EC2.\n- Learn the role of Security Groups in controlling inbound/outbound traffic.\n- Explore the EC2 Dashboard and available instance configurations.",
              start: "2026-08-13",
              end: "2026-08-14",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            },
            {
              day: "6",
              desc: "- Practice launching an Amazon EC2 instance.\n- Configure AMI, Instance Type, Key Pair, Network, and Security Group.\n- Connect to the EC2 Linux instance through SSH.\n- Execute basic Linux commands and verify server status.\n- Create and attach an additional EBS volume to EC2.\n- Practice Start/Stop EC2 and check instance status using both AWS Console and AWS CLI.",
              start: "2026-08-14",
              end: "2026-08-14",
              ref: "Amazon EC2: https://000004.awsstudygroup.com/\nIAM Roles for EC2: https://000048.awsstudygroup.com/"
            }
          ]
        }
      };
    } else if (weekNum === 2) {
      return {
        weekNum: 2,
        vi: {
          objectives: "Nghiên cứu chuyên sâu về mạng Amazon VPC, phân chia Subnet, Route Table, NAT Gateway và Security Group.",
          achievements: "- Thiết kế và triển khai kiến trúc VPC đa tầng gồm Public và Private Subnet.\n- Cấu hình Bastion Host và NAT Gateway giúp máy chủ nội bộ kết nối Internet an toàn.\n- Thiết lập và kiểm thử quy tắc tường lửa Security Group và Network ACL thành công.",
          tasks: [
            { day: "2", desc: "- Nghiên cứu quy hoạch dải mạng CIDR cho VPC\n- Phân chia Subnet và cấu hình Internet Gateway", start: "2026-08-17", end: "2026-08-17", ref: "AWS VPC User Guide" },
            { day: "3", desc: "- Triển khai NAT Gateway\n- Cấu hình bảng định tuyến Private Route Table", start: "2026-08-18", end: "2026-08-18", ref: "https://docs.aws.amazon.com/vpc/" },
            { day: "4", desc: "- Thực hành thiết lập Network ACL\n- So sánh NACL với Security Group theo nguyên tắc bảo mật tối thiểu", start: "2026-08-19", end: "2026-08-19", ref: "AWS Well-Architected Security" },
            { day: "5", desc: "- Khởi tạo máy chủ EC2 trong Private Subnet\n- Kiểm tra kết nối Internet qua NAT Gateway", start: "2026-08-20", end: "2026-08-20", ref: "Internal Lab Guide" },
            { day: "6", desc: "- Báo cáo tiến độ Sprint Review\n- Trao đổi 1-on-1 hàng tuần với Mentor Trần Anh Dũng", start: "2026-08-21", end: "2026-08-21", ref: "Weekly Assessment" }
          ]
        },
        en: {
          objectives: "Deep dive into VPC Networking, Subnets, Routing, NAT Gateway and Security Groups.",
          achievements: "- Designed and deployed a multi-tier VPC architecture with Public and Private Subnets.\n- Configured Bastion Host and NAT Gateway for secure outbound internet access.\n- Tested security group inbound and outbound firewall rules successfully.",
          tasks: [
            { day: "2", desc: "- Study VPC CIDR planning, IPv4 subnetting\n- Configure Internet Gateway routing", start: "2026-08-17", end: "2026-08-17", ref: "AWS VPC User Guide" },
            { day: "3", desc: "- Deploy NAT Gateway\n- Configure Private Route Tables", start: "2026-08-18", end: "2026-08-18", ref: "https://docs.aws.amazon.com/vpc/" },
            { day: "4", desc: "- Practice setting up Network Access Control Lists (NACLs) vs Security Groups\n- Apply principle of least privilege", start: "2026-08-19", end: "2026-08-19", ref: "AWS Well-Architected Security Pillar" },
            { day: "5", desc: "- Setup EC2 inside Private Subnet\n- Verify internet connectivity via NAT Gateway", start: "2026-08-20", end: "2026-08-20", ref: "Internal Lab Guide" },
            { day: "6", desc: "- Sprint Review & Weekly 1-on-1 with Mentor Trần Anh Dũng", start: "2026-08-21", end: "2026-08-21", ref: "Weekly Assessment" }
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
      }
    ]
  },
  events: {
    vi: [
      {
        id: "event-1",
        name: "Sự kiện 1 - Hội thảo Hiện đại hóa Ứng dụng & CSDL với GenAI",
        dateTime: "09:00, 12/08/2026",
        location: "Tầng 26, Bitexco Financial Tower, Số 02 Hải Triều, Q.1, TP.HCM",
        role: "Khách mời tham dự",
        speakers: "Jignesh Shah (Giám đốc CSDL Mã nguồn mở), Erica Liu (Chuyên gia AppMod), Fabrianne Effendi (Kiến trúc sư giải pháp Serverless)",
        highlights: "• Những hạn chế của kiến trúc nguyên khối truyền thống (chu kỳ phát hành kéo dài, chi phí vận hành cao).\n• Chuyển đổi sang kiến trúc Microservices hiện đại dựa trên 3 trụ cột: Quản lý hàng đợi, Chiến lược bộ nhớ đệm và Xử lý thông điệp linh hoạt.\n• Phương pháp thiết kế hướng tên miền Domain-Driven Design (DDD) gồm 4 bước.\n• Kiến trúc hướng sự kiện Event-Driven Architecture (Pub/Sub, Point-to-Point, Streaming).\n• Ứng dụng trợ lý AI Amazon Q Developer tự động hóa chu trình nâng cấp mã nguồn."
      },
      {
        id: "event-2",
        name: "Sự kiện 2 - Đại hội Cộng đồng AWS Community Day Vietnam 2026",
        dateTime: "08:30, 19/09/2026",
        location: "Trung tâm Hội nghị GEM Center, Quận 1, TP.HCM",
        role: "Thành viên tham dự & Tình nguyện viên hỗ trợ",
        speakers: "Các chuyên gia AWS Community Heroes và Kiến trúc sư giải pháp AWS Việt Nam",
        highlights: "• Trải nghiệm thực hành xây dựng ứng dụng Generative AI với Amazon Bedrock và mô hình Claude 3.5 Sonnet.\n• Giao lưu và kết nối với các kỹ sư Cloud cấp cao từ các đối tác công nghệ hàng đầu khu vực."
      }
    ],
    en: [
      {
        id: "event-1",
        name: "Event 1 - GenAI-powered App-DB Modernization Workshop",
        dateTime: "09:00, August 12, 2026",
        location: "26th Floor, Bitexco Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City",
        role: "Attendee",
        speakers: "Jignesh Shah (Director, Open Source DBs), Erica Liu (Sr. GTM Specialist), Fabrianne Effendi (Assc. Specialist SA)",
        highlights: "• Drawbacks of legacy monolithic architectures (long release cycles, higher costs).\n• Modern Microservices transition built on Queue Management, Caching Strategies, and Message Handling.\n• Domain-Driven Design (DDD): 4-step method (Identify domain events -> arrange timeline -> identify actors -> define bounded contexts).\n• Event-Driven Architecture (Pub/Sub, Point-to-point, Streaming).\n• Amazon Q Developer automated code transformation & modernization agents."
      },
      {
        id: "event-2",
        name: "Event 2 - AWS Community Day Vietnam 2026",
        dateTime: "08:30, September 19, 2026",
        location: "GEM Center, District 1, Ho Chi Minh City",
        role: "Attendee & Volunteer Support",
        speakers: "AWS Community Heroes & AWS Solution Architects",
        highlights: "• Hands-on immersion with Amazon Bedrock, Claude 3.5 Sonnet, and Retrieval-Augmented Generation (RAG).\n• Networking with senior cloud engineers, AWS User Group leaders, and tech partners across Southeast Asia."
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
const STORAGE_KEY = 'fcaj_report_bilingual_v7';
const PREV_STORAGE_KEY = 'fcaj_report_bilingual_v6';
const LANG_KEY = 'fcaj_report_lang';

class AppLanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem(LANG_KEY) || 'vi';
    this.data = this.loadData();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.worklogs && parsed.worklogs.length > 0) {
          return parsed;
        }
      }
      // Migrate student personal details while using fresh 2026 calendar & report content
      const prev = localStorage.getItem(PREV_STORAGE_KEY) || localStorage.getItem('fcaj_report_bilingual_v4');
      const fresh = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
      if (prev) {
        const prevParsed = JSON.parse(prev);
        if (prevParsed.studentInfo) {
          if (prevParsed.studentInfo.fullName) fresh.studentInfo.fullName = prevParsed.studentInfo.fullName;
          if (prevParsed.studentInfo.phone) fresh.studentInfo.phone = prevParsed.studentInfo.phone;
          if (prevParsed.studentInfo.email) fresh.studentInfo.email = prevParsed.studentInfo.email;
        }
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

    // Shared student info fields
    const fn = getVal('info-fullname');
    if (fn !== null) this.data.studentInfo.fullName = fn;
    const ph = getVal('info-phone');
    if (ph !== null) this.data.studentInfo.phone = ph;
    const em = getVal('info-email');
    if (em !== null) this.data.studentInfo.email = em;
    const cl = getVal('info-class');
    if (cl !== null) this.data.studentInfo.className = cl;

    // Language-specific student info
    if (!this.data.studentInfo[lang]) this.data.studentInfo[lang] = {};
    const uni = getVal('info-university');
    if (uni !== null) this.data.studentInfo[lang].university = uni;
    const maj = getVal('info-major');
    if (maj !== null) this.data.studentInfo[lang].major = maj;
    const comp = getVal('info-company');
    if (comp !== null) this.data.studentInfo[lang].company = comp;
    const pos = getVal('info-position');
    if (pos !== null) this.data.studentInfo[lang].position = pos;
    const dur = getVal('info-duration');
    if (dur !== null) this.data.studentInfo[lang].duration = dur;

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
  const currentHash = window.location.hash.replace('#/', '') || 'thong-tin';
  const titleEl = document.getElementById('page-title');
  if (!titleEl) return;

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
  const firstName = (app.data.studentInfo.fullName || 'Phan Nhat Uyen').split(' ').pop();
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
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === pageId);
  });

  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  const target = document.getElementById(`view-${pageId}`);
  if (target) {
    target.classList.add('active');
  }

  if (window.location.hash !== `#/${pageId}`) {
    window.location.hash = `#/${pageId}`;
  }

  updateHeaderPageTitle();
  document.getElementById('sidebar')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const hash = window.location.hash.replace('#/', '') || 'thong-tin';
  navigateTo(hash);
}

// ==========================================
// 6. STUDENT INFO
// ==========================================
function renderStudentInfoInputs() {
  const info = app.data.studentInfo;
  const lang = app.currentLang;
  const loc = info[lang] || info.vi;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('info-fullname', info.fullName);
  setVal('info-phone', info.phone);
  setVal('info-email', info.email);
  setVal('info-class', info.className);
  setVal('info-university', loc.university);
  setVal('info-major', loc.major);
  setVal('info-company', loc.company);
  setVal('info-position', loc.position);
  setVal('info-duration', loc.duration);

  // Update sidebar company label
  const sidebarCompany = document.getElementById('sidebar-company');
  if (sidebarCompany) sidebarCompany.textContent = loc.company;
}

function setupStudentInfo() {
  const form = document.getElementById('student-info-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lang = app.currentLang;
      app.data.studentInfo.fullName = document.getElementById('info-fullname').value.trim();
      app.data.studentInfo.phone = document.getElementById('info-phone').value.trim();
      app.data.studentInfo.email = document.getElementById('info-email').value.trim();
      app.data.studentInfo.className = document.getElementById('info-class').value.trim();

      app.data.studentInfo[lang] = {
        university: document.getElementById('info-university').value.trim(),
        major: document.getElementById('info-major').value.trim(),
        company: document.getElementById('info-company').value.trim(),
        position: document.getElementById('info-position').value.trim(),
        duration: document.getElementById('info-duration').value.trim()
      };

      app.saveData();
      updateHeaderGreeting();
      renderStudentInfoInputs();
      showToast(t('toastSaveInfo'));
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
  const lines = refStr.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.map(line => {
    const match = line.match(/(https?:\/\/[^\s]+)/);
    if (match) {
      const url = match[1];
      const prefix = line.replace(url, '').trim();
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

  container.innerHTML = blogs.map(b => `
    <div class="blog-card">
      <div class="blog-header">
        <span class="badge badge-purple" style="margin-bottom:8px;">AWS Study Group</span>
        <h3>${escapeHtml(b.title)}</h3>
        <span style="font-size:12px; color:var(--text-subtle);">${t('publishedDateLabel')} ${escapeHtml(b.date || '-')}</span>
      </div>
      <p class="blog-snippet">${escapeHtml(b.snippet)}</p>
      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #F1F5F9; padding-top:12px;">
        <a href="${escapeHtml(b.url)}" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:12px; padding:4px 12px;">${t('readArticleLink')}</a>
        <button type="button" class="btn-text-subtle" style="color:#EF4444;" onclick="deleteBlog('${b.id}')">${t('btnDelete')}</button>
      </div>
    </div>
  `).join('');
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
      const url = prompt(promptUrl, 'https://awsstudygroup.com');

      const lang = app.currentLang;
      if (!app.data.blogs[lang]) app.data.blogs[lang] = [];
      app.data.blogs[lang].push({
        id: 'blog-' + Date.now(),
        title,
        snippet,
        url: url || 'https://awsstudygroup.com',
        date: new Date().toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US')
      });

      app.saveData();
      renderBlogsList();
      showToast(t('toastAddBlog'));
    });
  }
}

// ==========================================
// 10. 4. EVENTS PARTICIPATED MODULE
// ==========================================
function renderEventsList() {
  const container = document.getElementById('events-report-container');
  if (!container) return;

  const lang = app.currentLang;
  const events = app.data.events[lang] || app.data.events.vi;

  container.innerHTML = events.map(ev => `
    <div class="event-card">
      <div class="event-header">
        <span class="badge badge-blue" style="margin-bottom:8px;">${t('eventBadge')}</span>
        <h3>${escapeHtml(ev.name)}</h3>
        <p style="font-size:12.5px; color:var(--text-muted); margin-bottom:8px;">
          ⏰ <strong>${escapeHtml(ev.dateTime)}</strong> • 📍 ${escapeHtml(ev.location)}<br>
          👤 ${t('eventRoleLabel')} <strong>${escapeHtml(ev.role)}</strong>
          ${ev.speakers ? ` • ${t('eventSpeakersLabel')} <em>${escapeHtml(ev.speakers)}</em>` : ''}
        </p>
      </div>
      <div class="event-snippet">
        <strong>${t('eventHighlightsLabel')}</strong><br>
        ${escapeHtml(ev.highlights)}
      </div>
      <div style="display:flex; justify-content:flex-end; border-top:1px solid #F1F5F9; padding-top:10px;">
        <button type="button" class="btn-text-subtle" style="color:#EF4444;" onclick="deleteEvent('${ev.id}')">${t('btnDeleteEvent')}</button>
      </div>
    </div>
  `).join('');
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
          if (parsed && parsed.studentInfo) {
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
      else if (q.includes('blog') || q.includes('eks') || q.includes('bài viết')) navigateTo('blogs-posted');
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
  const currentHash = window.location.hash.replace('#/', '') || 'thong-tin';
  navigateTo(currentHash);
});

// Expose functions globally for HTML onclick and event listeners
window.app = app;
window.navigateTo = navigateTo;
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
