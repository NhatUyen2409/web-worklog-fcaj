// ============================================================
// TRANSLATIONS — Complete Bilingual Content (VI | EN)
// AWS First Cloud AI Journey (FCAJ) 2026 Portfolio & Worklog
// ============================================================

export const translations = {
  // ════════════════════════════════════════════════════════════
  // VIETNAMESE (Default)
  // ════════════════════════════════════════════════════════════
  vi: {
    // Common / UI
    common: {
      program: 'Chương Trình',
      university: 'Trường Đại học',
      major: 'Chuyên Ngành',
      location: 'Địa Điểm',
      backToTop: 'Về đầu trang',
      viewDetails: 'Xem chi tiết',
      status: 'Trạng thái',
      all: 'Tất cả',
      inProgress: 'Đang thực hiện',
      completed: 'Đã hoàn thành',
    },

    // Navigation
    nav: {
      home:         'Trang Chủ',
      about:        'Về Tôi',
      team:         'Nhóm',
      workshop:     'Workshop',
      worklog:      'Nhật Ký',
      projects:     'Dự Án',
      certificates: 'Chứng Chỉ',
      contact:      'Liên Hệ',
    },

    // Home Page
    home: {
      greeting:   'Xin chào, mình là',
      name:       'Phan Nhật Uyên',
      role:       'Sinh viên An toàn Thông tin · Thực tập sinh Cloud & Security',
      badge:      'AWS First Cloud AI Journey 2026',
      intro:
        'Sinh viên chuyên ngành An toàn Thông tin tại Đại học FPT và thực tập sinh kỹ thuật tại chương trình AWS First Cloud AI Journey 2026. Đam mê thiết kế kiến trúc đám mây an toàn, DevSecOps, phòng thủ mạng và phân tích mối đe dọa trên nền tảng AWS Well-Architected Framework.',
      ctaWorklog:  'Xem Nhật Ký 12 Tuần',
      ctaProjects: 'Khám Phá Dự Án',
      scrollDown:  'Cuộn để khám phá',
      stats: {
        weeks:    { value: '12',   label: 'Tuần thực tập' },
        projects: { value: '4',    label: 'Dự án kỹ thuật' },
        services: { value: '16+',  label: 'Dịch vụ AWS' },
        skills:   { value: '8+',   label: 'Kỹ năng chuyên sâu' },
      },
      featuredBadge: 'Đặc điểm nổi bật',
      highlightsTitle: 'Năng Lực & Trọng Tâm Chuyên Môn',
      highlights: [
        {
          title: 'Kiến Trúc Đám Mây An Toàn',
          desc: 'Thiết kế hệ thống Multi-tier VPC với cơ chế phòng thủ chuyên sâu, bảo mật danh tính IAM và mã hóa dữ liệu đầu cuối qua AWS KMS.',
          icon: 'Shield',
          color: '#CDB4DB',
        },
        {
          title: 'Phòng Thủ Mạng & Giám Sát',
          desc: 'Tự động phát hiện bất thường với Amazon GuardDuty, AWS WAF, Security Hub và phân tích lưu lượng gói tin chuyên sâu.',
          icon: 'Network',
          color: '#A2D2FF',
        },
        {
          title: 'DevSecOps & Tự Động Hóa',
          desc: 'Triển khai hạ tầng dưới dạng mã (IaC) với Terraform/CloudFormation kết hợp CI/CD bảo mật và kiểm thử lỗ hổng tự động.',
          icon: 'Code',
          color: '#FFC8DD',
        },
        {
          title: 'Trí Tuệ Nhân Tạo & Điện Toán Mây',
          desc: 'Tích hợp mô hình AI tạo sinh qua Amazon Bedrock và xử lý sự cố an ninh mạng thông minh với serverless AWS Lambda.',
          icon: 'Sparkles',
          color: '#D8F3E3',
        },
      ],
    },

    // About Page
    about: {
      pageTitle:    'Về Tôi',
      pageSubtitle: 'Hành trình học tập, đam mê bảo mật và định hướng nghề nghiệp trong kỷ nguyên Cloud & AI',
      biography: {
        title: 'Tiểu Sử',
        text:
          'Tôi là Phan Nhật Uyên, hiện là sinh viên năm cuối chuyên ngành An toàn Thông tin (Information Assurance) tại Đại học FPT. Ngay từ những ngày đầu tiếp cận công nghệ thông tin, tôi đã đặc biệt bị cuốn hút bởi cách các kiến trúc mạng vận hành và cách bảo vệ dữ liệu người dùng trước các mối đe dọa không gian mạng tinh vi. Tham gia chương trình AWS First Cloud AI Journey 2026 là cột mốc quan trọng giúp tôi chuyển hóa kiến thức lý thuyết về phòng thủ mạng, mật mã học thành kỹ năng thực chiến trên hạ tầng đám mây quy mô lớn hàng đầu thế giới.',
      },
      education: {
        title:       'Học Vấn & Quá Trình Đào Tạo',
        degree:      'Cử nhân An toàn Thông tin (Information Assurance)',
        institution: 'Đại học FPT (FPT University - TP. Hồ Chí Minh)',
        duration:    '2022 – 2026',
        focus:
          'Trọng tâm nghiên cứu: Kiến trúc bảo mật đám mây AWS, An ninh mạng nâng cao (TCP/IP & Firewalls), Kiểm thử thâm nhập ứng dụng web (OWASP Top 10), Mật mã học ứng dụng và Quản trị hệ điều hành Linux/Unix.',
        internship: {
          company:     'Amazon Web Services (AWS) Vietnam — FCAJ 2026',
          role:        'Cloud & Security Engineering Trainee',
          duration:    '12 Tuần · Khóa 2026',
          description:
            'Chương trình đào tạo chuyên sâu về AWS Solutions Architecture, bảo mật hạ tầng đa tầng, tự động hóa phản ứng sự cố an ninh và ứng dụng Generative AI trong việc vận hành đám mây doanh nghiệp.',
        },
      },
      careerObjective: {
        title: 'Mục Tiêu Nghề Nghiệp',
        text:
          'Định hướng trở thành một Cloud Security Architect / DevSecOps Engineer chuyên nghiệp, có năng lực xây dựng các hệ sinh thái đám mây kiên cố, tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật quốc tế (ISO 27001, NIST, CIS Benchmarks). Tôi mong muốn áp dụng tư duy an ninh đa lớp và tự động hóa để giúp các tổ chức khai phóng tối đa sức mạnh của đám mây AWS một cách an tâm và bền vững.',
      },
      interests: {
        title: 'Lĩnh Vực Yêu Thích',
        items: [
          { icon: '🔐', label: 'Cloud Security Architecture' },
          { icon: '🛡️', label: 'Threat Hunting & Blue Teaming' },
          { icon: '📡', label: 'Network Packet Forensics' },
          { icon: '🤖', label: 'GenAI & Cloud Automation' },
          { icon: '⚙️', label: 'DevSecOps & Infrastructure as Code' },
          { icon: '📖', label: 'Mật mã học & Zero Trust' },
        ],
      },
      softSkills: {
        title: 'Kỹ Năng Mềm',
        items: [
          { icon: '🧠', label: 'Tư duy phân tích nguyên nhân gốc rễ' },
          { icon: '🤝', label: 'Giao tiếp & phối hợp nhóm Agile' },
          { icon: '📝', label: 'Viết tài liệu kỹ thuật & SOP' },
          { icon: '💡', label: 'Giải quyết vấn đề dưới áp lực cao' },
          { icon: '🎤', label: 'Thuyết trình kiến trúc giải pháp' },
          { icon: '🚀', label: 'Tự học và nghiên cứu công nghệ mới' },
        ],
      },
      skills: {
        title: 'Kỹ Năng Chuyên Môn (Technical Skills)',
      },
    },

    // Team Page
    team: {
      pageTitle:    'Đội Ngũ Dự Án',
      pageSubtitle: 'Nhóm nghiên cứu và triển khai giải pháp Cloud Security trong chương trình FCAJ 2026',
      membersTitle: 'Thành Viên Trong Nhóm',
      infoLabels: {
        groupName:  'Tên nhóm',
        groupId:    'Mã nhóm',
        mentor:     'Mentor hướng dẫn (AWS)',
        supervisor: 'Giảng viên hướng dẫn (FPT)',
        role:       'Vai trò của tôi',
        program:    'Chương trình',
      },
      valuesTitle: 'Giá Trị Cốt Lõi Của Nhóm',
      values: [
        { title: 'Tôn Trọng Bảo Mật Tuyệt Đối', desc: 'Mọi thiết kế kiến trúc đều đặt nguyên tắc Zero Trust và bảo vệ dữ liệu lên hàng đầu.' },
        { title: 'Hợp Tác Bền Bỉ', desc: 'Thường xuyên trao đổi, code review chéo và chia sẻ kiến thức chuyên sâu giữa các thành viên.' },
        { title: 'Không Ngừng Học Hỏi', desc: 'Liên tục cập nhật công nghệ AWS mới và áp dụng thực tiễn vào các bài lab thực tế.' },
      ],
    },

    // Workshop Page
    workshop: {
      pageTitle:       'Chuyên Đề Workshop',
      pageSubtitle:    'Buổi thực hành chuyên sâu: Thiết kế & Triển khai Kiến trúc Bảo mật Đa tầng trên AWS',
      overviewTitle:   'Tổng Quan Workshop',
      objectivesTitle: 'Mục Tiêu Buổi Học',
      servicesTitle:   'Dịch Vụ AWS Áp Dụng',
      sectionsTitle:   'Nội Dung Các Bài Thực Hành (Hands-on Labs)',
      archTitle:       'Sơ Đồ Kiến Trúc Hệ Thống (Architecture Blueprint)',
      notesTitle:      'Bài Học & Lưu Ý Kỹ Thuật (Key Takeaways)',
      resourcesTitle:  'Tài Liệu Nghiên Cứu & Tham Khảo',
      dateLabel:       'Thời gian',
      durationLabel:   'Thời lượng',
      locationLabel:   'Hình thức / Địa điểm',
      organizerLabel:  'Đơn vị tổ chức',
      tasksLabel:      'Các bước thực hiện chính',
      outcomeLabel:    'Kết quả nghiệm thu',
      screenshotLabel: 'Minh họa & Cấu hình',
      viewResource:    'Xem tài liệu',
      addArchHint:     'Sơ đồ kiến trúc Multi-Tier Cloud Defense đạt chuẩn AWS Well-Architected Framework',
      addScreenHint:   'Ảnh chụp màn hình quá trình cấu hình và kiểm thử bài lab',
    },

    // Weekly Worklog Page
    worklog: {
      pageTitle:       'Nhật Ký Thực Tập 12 Tuần',
      pageSubtitle:    'Tiến trình học tập, nghiên cứu và triển khai dự án thực tế xuyên suốt hành trình FCAJ 2026',
      progress:        'Tiến độ chương trình',
      filterAll:       'Tất cả tuần',
      filterCompleted: 'Đã hoàn thành',
      filterProgress:  'Đang tiến hành',
      statusCompleted: 'Hoàn thành',
      statusProgress:  'Đang làm',
      statusPending:   'Kế hoạch',
      weekLabel:       'Tuần',
      sectionObjective:'Mục tiêu trọng tâm',
      sectionTasks:    'Nhiệm vụ đã thực hiện',
      sectionServices: 'Dịch vụ AWS đã sử dụng',
      sectionTech:     'Công nghệ & Công cụ',
      sectionResult:   'Kết quả đạt được',
      sectionReflect:  'Bài học & Cảm nhận',
      sectionDaily:    'Chi tiết các ngày trong tuần (Mon – Fri)',
      screenshotLabel: 'Ảnh minh họa & Kết quả thực hành',
    },

    // Projects Page
    projects: {
      pageTitle:       'Dự Án Tiêu Biểu',
      pageSubtitle:    'Các giải pháp bảo mật đám mây, an ninh mạng và phát hiện tấn công đã thực hiện',
      statusCompleted: 'Hoàn thành',
      statusProgress:  'Đang tối ưu',
      readMore:        'Xem chi tiết dự án',
      readLess:        'Thu gọn',
      timeline:        'Thời gian thực hiện',
      technologies:    'Công nghệ áp dụng',
      keyHighlights:   'Điểm nổi bật & Đóng góp chính',
      githubLink:      'Mã nguồn GitHub',
      liveDemo:        'Xem bản demo',
    },

    // Certificates Page
    certificates: {
      pageTitle:    'Chứng Chỉ & Bằng Cấp',
      pageSubtitle: 'Các chứng chỉ công nghệ điện toán đám mây và an toàn thông tin chuyên môn',
      totalLabel:   'Tổng số chứng chỉ đạt được',
      issuedBy:     'Tổ chức cấp',
      issuedDate:   'Thời gian',
      viewCert:     'Xác minh chứng chỉ',
    },

    // Contact Page
    contact: {
      pageTitle:       'Kết Nối Với Tôi',
      pageSubtitle:    'Tôi luôn sẵn sàng đón nhận cơ hội hợp tác, học hỏi và trao đổi về Cloud & Security',
      contactInfo:     'Thông Tin Liên Hệ',
      availability:    'Sẵn sàng cho cơ hội thực tập & dự án Cloud Security',
      responseTime:    'Phản hồi trong vòng 24 giờ làm việc',
      emailLabel:      'Hòm thư điện tử (Email)',
      githubLabel:     'Kho lưu trữ mã nguồn (GitHub)',
      linkedinLabel:   'Mạng lưới nghề nghiệp (LinkedIn)',
      nameLabel:       'Họ và tên của bạn',
      namePlaceholder: 'VD: Nguyễn Văn A',
      emailPlaceholder:'VD: email@example.com',
      messageLabel:    'Nội dung tin nhắn',
      msgPlaceholder:  'Hãy chia sẻ về dự án hoặc lời nhắn của bạn...',
      sendButton:      'Gửi tin nhắn ngay',
      sentSuccess:     'Tin nhắn đã được gửi thành công! Cảm ơn bạn.',
    },

    // Footer
    footer: {
      tagline: 'Sinh viên An toàn Thông tin · Đại học FPT | Thực tập sinh AWS First Cloud AI Journey 2026.',
      quickLinks: 'Liên Kết Nhanh',
      academicInfo: 'Học Viện & Chương Trình',
      copyright: 'Thiết kế với sự tỉ mỉ dành cho FCAJ 2026.',
      madeWith: 'React 19 · Vite · Tailwind CSS · Framer Motion',
    },
  },

  // ════════════════════════════════════════════════════════════
  // ENGLISH
  // ════════════════════════════════════════════════════════════
  en: {
    // Common / UI
    common: {
      program: 'Program',
      university: 'University',
      major: 'Major',
      location: 'Location',
      backToTop: 'Back to Top',
      viewDetails: 'View Details',
      status: 'Status',
      all: 'All',
      inProgress: 'In Progress',
      completed: 'Completed',
    },

    // Navigation
    nav: {
      home:         'Home',
      about:        'About Me',
      team:         'Team',
      workshop:     'Workshop',
      worklog:      'Worklog',
      projects:     'Projects',
      certificates: 'Certificates',
      contact:      'Contact',
    },

    // Home Page
    home: {
      greeting:   'Hello, I am',
      name:       'Phan Nhat Uyen',
      role:       'Information Assurance Student · Cloud & Security Trainee',
      badge:      'AWS First Cloud AI Journey 2026',
      intro:
        'Final-year Information Assurance undergraduate at FPT University and engineering trainee in the AWS First Cloud AI Journey 2026. Passionate about secure cloud architectures, DevSecOps, network defense, and threat analysis aligned with the AWS Well-Architected Framework.',
      ctaWorklog:  'Explore 12-Week Worklog',
      ctaProjects: 'View Projects',
      scrollDown:  'Scroll to explore',
      stats: {
        weeks:    { value: '12',   label: 'Internship Weeks' },
        projects: { value: '4',    label: 'Technical Projects' },
        services: { value: '16+',  label: 'AWS Services Used' },
        skills:   { value: '8+',   label: 'Core Competencies' },
      },
      featuredBadge: 'Core Capabilities',
      highlightsTitle: 'Key Expertise & Technical Focus',
      highlights: [
        {
          title: 'Secure Cloud Architecture',
          desc: 'Designing multi-tier VPC topologies with defense-in-depth, granular IAM least-privilege, and end-to-end KMS encryption.',
          icon: 'Shield',
          color: '#CDB4DB',
        },
        {
          title: 'Network Defense & Observability',
          desc: 'Automating anomaly detection with Amazon GuardDuty, AWS WAF, Security Hub, and in-depth packet inspection.',
          icon: 'Network',
          color: '#A2D2FF',
        },
        {
          title: 'DevSecOps & Automation',
          desc: 'Deploying Infrastructure as Code (IaC) via Terraform/CloudFormation with secure CI/CD and vulnerability scanning.',
          icon: 'Code',
          color: '#FFC8DD',
        },
        {
          title: 'Cloud AI & Incident Response',
          desc: 'Leveraging Generative AI models on Amazon Bedrock and automating security remediation workflows with AWS Lambda.',
          icon: 'Sparkles',
          color: '#D8F3E3',
        },
      ],
    },

    // About Page
    about: {
      pageTitle:    'About Me',
      pageSubtitle: 'My learning journey, passion for cyber security, and vision in Cloud & AI engineering',
      biography: {
        title: 'Biography',
        text:
          'I am Phan Nhat Uyen, a final-year Information Assurance (Cyber Security) undergraduate at FPT University. Since the early days of my academic journey, I have been deeply fascinated by how computer networks operate and how sensitive data can be shielded against sophisticated cyber threats. Participating in the AWS First Cloud AI Journey 2026 has been a pivotal milestone, allowing me to bridge the gap between theoretical defense mechanisms and enterprise-scale, production-ready cloud implementations.',
      },
      education: {
        title:       'Education & Academic Foundation',
        degree:      'Bachelor of Information Assurance (Cyber Security)',
        institution: 'FPT University (Ho Chi Minh City Campus)',
        duration:    '2022 – 2026',
        focus:
          'Core coursework: AWS Cloud Architecture, Advanced Computer Networking (TCP/IP & Firewalls), Web Application Penetration Testing (OWASP Top 10), Applied Cryptography, and Linux/Unix System Administration.',
        internship: {
          company:     'Amazon Web Services (AWS) Vietnam — FCAJ 2026',
          role:        'Cloud & Security Engineering Trainee',
          duration:    '12 Weeks · Class of 2026',
          description:
            'Hands-on immersion in AWS Solutions Architecture, multi-tier perimeter hardening, automated incident response, and integrating Generative AI for proactive enterprise cloud operations.',
        },
      },
      careerObjective: {
        title: 'Career Objective',
        text:
          'Aspiring to grow into an enterprise Cloud Security Architect / DevSecOps Engineer capable of engineering resilient, compliant cloud ecosystems that adhere to international security benchmarks (ISO 27001, NIST, CIS). I aim to leverage defense-in-depth principles and automation to help organizations embrace the power of AWS with complete confidence.',
      },
      interests: {
        title: 'Fields of Interest',
        items: [
          { icon: '🔐', label: 'Cloud Security Architecture' },
          { icon: '🛡️', label: 'Threat Hunting & Blue Teaming' },
          { icon: '📡', label: 'Network Packet Forensics' },
          { icon: '🤖', label: 'GenAI & Cloud Automation' },
          { icon: '⚙️', label: 'DevSecOps & Infrastructure as Code' },
          { icon: '📖', label: 'Applied Cryptography & Zero Trust' },
        ],
      },
      softSkills: {
        title: 'Soft Skills',
        items: [
          { icon: '🧠', label: 'Root Cause & Analytical Thinking' },
          { icon: '🤝', label: 'Cross-functional Agile Collaboration' },
          { icon: '📝', label: 'Technical Writing & Architecture SOPs' },
          { icon: '💡', label: 'Calm Problem Solving Under Pressure' },
          { icon: '🎤', label: 'Solution Architecture Pitching' },
          { icon: '🚀', label: 'Fast Continuous Learner & Explorer' },
        ],
      },
      skills: {
        title: 'Technical Skills & Proficiencies',
      },
    },

    // Team Page
    team: {
      pageTitle:    'Project Team',
      pageSubtitle: 'The cloud security research and engineering team in the FCAJ 2026 program',
      membersTitle: 'Team Members',
      infoLabels: {
        groupName:  'Group Name',
        groupId:    'Group ID',
        mentor:     'AWS Mentor',
        supervisor: 'Faculty Supervisor',
        role:       'My Role',
        program:    'Program',
      },
      valuesTitle: 'Core Team Values',
      values: [
        { title: 'Security First', desc: 'Every architectural design rigorously enforces Zero Trust and data protection.' },
        { title: 'Relentless Collaboration', desc: 'Conducting routine peer reviews, brainstorming, and deep knowledge sharing.' },
        { title: 'Continuous Experimentation', desc: 'Continuously adopting bleeding-edge AWS services into practical real-world labs.' },
      ],
    },

    // Workshop Page
    workshop: {
      pageTitle:       'Specialized Workshop',
      pageSubtitle:    'Hands-on Immersion: Architecting & Securing Multi-Tier Enterprise Cloud on AWS',
      overviewTitle:   'Workshop Overview',
      objectivesTitle: 'Learning Objectives',
      servicesTitle:   'AWS Services Leveraged',
      sectionsTitle:   'Hands-on Lab Exercises',
      archTitle:       'Architecture Blueprint',
      notesTitle:      'Key Architectural Takeaways',
      resourcesTitle:  'Documentation & References',
      dateLabel:       'Date',
      durationLabel:   'Duration',
      locationLabel:   'Location / Format',
      organizerLabel:  'Organizer',
      tasksLabel:      'Key Execution Steps',
      outcomeLabel:    'Verification Outcome',
      screenshotLabel: 'Illustration & Topology',
      viewResource:    'Read Guide',
      addArchHint:     'AWS Well-Architected Framework 3-tier secure deployment blueprint',
      addScreenHint:   'Live console snapshot during security baseline verification',
    },

    // Weekly Worklog Page
    worklog: {
      pageTitle:       '12-Week Internship Worklog',
      pageSubtitle:    'A comprehensive diary tracking technical progression, labs, and deliverables throughout FCAJ 2026',
      progress:        'Internship Progress',
      filterAll:       'All Weeks',
      filterCompleted: 'Completed',
      filterProgress:  'In Progress',
      statusCompleted: 'Completed',
      statusProgress:  'In Progress',
      statusPending:   'Planned',
      weekLabel:       'Week',
      sectionObjective:'Core Objectives',
      sectionTasks:    'Key Tasks Executed',
      sectionServices: 'AWS Services Utilized',
      sectionTech:     'Technologies & Tools',
      sectionResult:   'Key Deliverables & Results',
      sectionReflect:  'Retrospective & Insights',
      sectionDaily:    'Daily Breakdown (Mon – Fri)',
      screenshotLabel: 'Lab Verification Screenshot',
    },

    // Projects Page
    projects: {
      pageTitle:       'Featured Projects',
      pageSubtitle:    'Practical cloud architectures, system hardening, and threat mitigation projects',
      statusCompleted: 'Completed',
      statusProgress:  'Optimizing',
      readMore:        'Read More',
      readLess:        'Show Less',
      timeline:        'Timeline',
      technologies:    'Tech Stack',
      keyHighlights:   'Key Achievements & Features',
      githubLink:      'GitHub Repository',
      liveDemo:        'Live Demo',
    },

    // Certificates Page
    certificates: {
      pageTitle:    'Certifications & Badges',
      pageSubtitle: 'Industry-recognized cloud computing and cybersecurity credentials',
      totalLabel:   'Total Credentials Earned',
      issuedBy:     'Issuing Body',
      issuedDate:   'Issue Date',
      viewCert:     'Verify Certificate',
    },

    // Contact Page
    contact: {
      pageTitle:       'Get In Touch',
      pageSubtitle:    'Open to meaningful discussions, technical collaborations, and Cloud Security opportunities',
      contactInfo:     'Contact Information',
      availability:    'Available for Cloud Security internship & entry-level engineering roles',
      responseTime:    'Typical response time: within 24 hours',
      emailLabel:      'Email Address',
      githubLabel:     'GitHub Profile',
      linkedinLabel:   'LinkedIn Profile',
      nameLabel:       'Your Full Name',
      namePlaceholder: 'e.g. Alex Johnson',
      emailPlaceholder:'e.g. alex@example.com',
      messageLabel:    'Message Content',
      msgPlaceholder:  'Share details about your project or inquiry...',
      sendButton:      'Send Message',
      sentSuccess:     'Your message has been sent successfully! Thank you.',
    },

    // Footer
    footer: {
      tagline: 'Information Assurance Student · FPT University | AWS First Cloud AI Journey 2026 Trainee.',
      quickLinks: 'Quick Links',
      academicInfo: 'Academic & Program',
      copyright: 'Crafted with care for FCAJ 2026.',
      madeWith: 'React 19 · Vite · Tailwind CSS · Framer Motion',
    },
  },
};
