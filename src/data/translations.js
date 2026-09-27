// ============================================================
// TRANSLATIONS — All bilingual UI text
// ============================================================
// HOW TO EDIT:
//  • Find the label you want to change.
//  • Edit both "vi" (Vietnamese) and "en" (English) values.
//  • DO NOT rename the keys — they are used by all components.
//  • To add a new language, duplicate the "en" block and
//    translate each value. Then add it to LanguageToggle.jsx.
// ============================================================

export const translations = {

  // ══════════════════════════════════════════════
  //  VIETNAMESE
  // ══════════════════════════════════════════════
  vi: {
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

    // Workshop page
    workshop: {
      pageTitle:       'Workshop',
      pageSubtitle:    'Buổi thực hành và học tập chuyên sâu',
      overviewTitle:   'Tổng Quan',
      objectivesTitle: 'Mục Tiêu',
      servicesTitle:   'Dịch Vụ AWS',
      sectionsTitle:   'Nội Dung Thực Hành',
      archTitle:       'Sơ Đồ Kiến Trúc',
      notesTitle:      'Bài Học & Ghi Chú',
      resourcesTitle:  'Tài Liệu Tham Khảo',
      dateLabel:       'Ngày',
      durationLabel:   'Thời lượng',
      locationLabel:   'Địa điểm',
      organizerLabel:  'Đơn vị tổ chức',
      tasksLabel:      'Các bước thực hiện',
      outcomeLabel:    'Kết quả đạt được',
      screenshotLabel: 'Ảnh thực hành',
      viewResource:    'Xem tài liệu',
      addArchHint:     'Thêm sơ đồ kiến trúc vào /public/workshop/',
      addScreenHint:   'Thêm ảnh lab vào /public/workshop/',
    },

    // Home page
    home: {
      greeting:   'Xin chào, mình là',
      name:       'Phan Nhật Uyên',          // ← your name
      role:       'Sinh viên An toàn Thông tin & Thực tập sinh Cloud',
      badge:      'AWS First Cloud AI Journey 2026',
      intro:      // ← Edit your short introduction here
        'Sinh viên Đại học FPT, chuyên ngành An toàn Thông tin. ' +
        'Tham gia chương trình AWS First Cloud AI Journey 2026. ' +
        'Điền phần giới thiệu của bạn vào đây.',
      ctaWorklog:  'Xem Nhật Ký',
      ctaProjects: 'Dự Án Của Tôi',
      scrollHint:  'Khám phá thêm',
      // Stats — edit the values and labels
      stats: {
        weeks:    { value: '12',  label: 'Tuần thực hành' },
        projects: { value: '4',   label: 'Dự án' },
        services: { value: '—',   label: 'Dịch vụ AWS' },    // fill in when done
        skills:   { value: '—',   label: 'Kỹ năng cốt lõi' }, // fill in when done
      },
    },

    // About page
    about: {
      pageTitle:    'Về Tôi',
      pageSubtitle: 'Câu chuyện của tôi — sinh viên, kỹ sư tương lai & người yêu bảo mật',
      biography: {
        title: 'Tiểu Sử',
        // ← Replace this with your actual biography
        text:  '[Viết tiểu sử của bạn tại đây. Chia sẻ đam mê, hành trình học tập và mục tiêu nghề nghiệp.]',
      },
      education: {
        title:       'Học Vấn',
        degree:      'Cử nhân An toàn Thông tin',
        institution: 'Đại học FPT (FPT University)',
        duration:    '2022 – 2026',              // ← adjust years
        focus:       '[Liệt kê các môn học hoặc lĩnh vực trọng tâm tại đây.]',
        internship: {
          company:     'Amazon Web Services Vietnam — FCAJ 2026',
          role:        'Cloud & Security Engineering Trainee',
          duration:    '12 Tuần · 2025',
          description: '[Mô tả ngắn về chương trình thực tập.]',
        },
      },
      careerObjective: {
        title: 'Mục Tiêu Nghề Nghiệp',
        text:  '[Viết mục tiêu nghề nghiệp của bạn tại đây.]',
      },
      interests: {
        title: 'Sở Thích',
        // ← Add/remove interests. icon = emoji, label = text
        items: [
          { icon: '🔐', label: 'Cloud Security' },
          { icon: '🛡️', label: 'Penetration Testing' },
          { icon: '📡', label: 'Network Defense' },
          { icon: '🤖', label: 'AI/ML Security' },
          { icon: '📖', label: '[Thêm sở thích]' },
          { icon: '🎨', label: '[Thêm sở thích]' },
        ],
      },
      softSkills: {
        title: 'Kỹ Năng Mềm',
        items: [
          { icon: '🧠', label: 'Tư duy phân tích' },
          { icon: '🤝', label: 'Làm việc nhóm' },
          { icon: '📝', label: 'Viết tài liệu kỹ thuật' },
          { icon: '🎤', label: 'Thuyết trình' },
          { icon: '⏱️', label: '[Thêm kỹ năng]' },
          { icon: '🔍', label: '[Thêm kỹ năng]' },
        ],
      },
      skills: { title: 'Kỹ Năng Kỹ Thuật' },
    },

    // Team page
    team: {
      pageTitle:    'Nhóm Thực Tập',
      pageSubtitle: 'Những người đồng hành trong hành trình FCAJ 2026',
      membersTitle: 'Thành Viên Nhóm',
      meLabel:      'Tôi',
      infoLabels: {
        groupName:  'Tên Nhóm',
        groupId:    'Mã Nhóm',
        mentor:     'Mentor',
        supervisor: 'Giảng viên hướng dẫn',
        role:       'Vai trò của tôi',
        program:    'Chương trình',
      },
    },

    // Worklog page
    worklog: {
      pageTitle:       'Nhật Ký Thực Tập',
      pageSubtitle:    '12 tuần hành trình AWS — ghi lại từng ngày học tập',
      filterAll:       'Tất cả',
      filterCompleted: 'Hoàn thành',
      filterProgress:  'Đang thực hiện',
      weekLabel:       'Tuần',
      statusCompleted: 'Hoàn thành',
      statusProgress:  'Đang thực hiện',
      statusPending:   'Chưa bắt đầu',
      sectionObjective: 'Mục Tiêu',
      sectionTasks:     'Nhiệm Vụ',
      sectionServices:  'Dịch Vụ AWS',
      sectionTech:      'Công Nghệ',
      sectionResult:    'Kết Quả',
      sectionReflect:   'Cảm Nhận',
      sectionDaily:     'Lịch Thực Hiện',
      screenshotLabel:  'Ảnh minh họa',
      readMore:         'Xem chi tiết',
      readLess:         'Thu gọn',
      progress:         'Tiến độ hoàn thành',
    },

    // Projects page
    projects: {
      pageTitle:       'Dự Án',
      pageSubtitle:    'Các dự án nghiên cứu và thực hành kỹ thuật',
      readMore:        'Đọc Thêm',
      readLess:        'Thu Gọn',
      technologies:    'Công nghệ sử dụng',
      status:          'Trạng thái',
      timeline:        'Thời gian',
      statusCompleted: 'Hoàn thành',
      statusProgress:  'Đang thực hiện',
    },

    // Certificates page
    certificates: {
      pageTitle:    'Chứng Chỉ',
      pageSubtitle: 'Các chứng chỉ và thành tựu trong hành trình học tập',
      issuedBy:     'Cấp bởi',
      issuedDate:   'Ngày cấp',
      viewCert:     'Xem chứng chỉ',
      totalLabel:   'Tổng số chứng chỉ',
    },

    // Contact page
    contact: {
      pageTitle:       'Liên Hệ',
      pageSubtitle:    'Hãy kết nối với tôi',
      contactInfo:     'Thông Tin Liên Hệ',
      availability:    'Sẵn sàng cho cơ hội hợp tác mới',
      responseTime:    'Thường phản hồi trong vòng 24 giờ',
      nameLabel:       'Họ và tên',
      namePlaceholder: 'Họ và tên của bạn',
      emailLabel:      'Email',
      emailPlaceholder:'Email của bạn',
      messageLabel:    'Tin nhắn',
      msgPlaceholder:  'Nội dung tin nhắn...',
      sendButton:      'Gửi Tin Nhắn',
      sentSuccess:     'Đã gửi thành công!',
      githubLabel:     'GitHub',
      linkedinLabel:   'LinkedIn',
    },

    // Footer
    footer: {
      copyright: '© 2026 Phan Nhật Uyên · FCAJ 2026',
      madeWith:  'Thiết kế với React + Vite + Tailwind CSS',
    },

    // Common / shared
    common: {
      university: 'Trường Đại Học',
      major:      'Chuyên Ngành',
      program:    'Chương Trình',
      backToTop:  'Về đầu trang',
    },
  },

  // ══════════════════════════════════════════════
  //  ENGLISH
  // ══════════════════════════════════════════════
  en: {
    nav: {
      home:         'Home',
      about:        'About',
      team:         'Team',
      workshop:     'Workshop',
      worklog:      'Worklog',
      projects:     'Projects',
      certificates: 'Certificates',
      contact:      'Contact',
    },

    workshop: {
      pageTitle:       'Workshop',
      pageSubtitle:    'Hands-on learning and deep-dive sessions',
      overviewTitle:   'Overview',
      objectivesTitle: 'Objectives',
      servicesTitle:   'AWS Services',
      sectionsTitle:   'Lab Sections',
      archTitle:       'Architecture Diagram',
      notesTitle:      'Key Takeaways & Notes',
      resourcesTitle:  'Resources',
      dateLabel:       'Date',
      durationLabel:   'Duration',
      locationLabel:   'Location',
      organizerLabel:  'Organizer',
      tasksLabel:      'Steps',
      outcomeLabel:    'Outcome',
      screenshotLabel: 'Lab Screenshot',
      viewResource:    'View resource',
      addArchHint:     'Add architecture diagram to /public/workshop/',
      addScreenHint:   'Add lab screenshot to /public/workshop/',
    },

    home: {
      greeting:   "Hi, I'm",
      name:       'Phan Nhật Uyên',
      role:       'Information Assurance Student & Cloud Trainee',
      badge:      'AWS First Cloud AI Journey 2026',
      intro:
        'Studying Information Assurance at FPT University. ' +
        'Participating in the AWS First Cloud AI Journey 2026 program. ' +
        'Fill in your introduction here.',
      ctaWorklog:  'View Worklog',
      ctaProjects: 'My Projects',
      scrollHint:  'Explore more',
      stats: {
        weeks:    { value: '12', label: 'Practice Weeks' },
        projects: { value: '4',  label: 'Projects' },
        services: { value: '—',  label: 'AWS Services' },
        skills:   { value: '—',  label: 'Core Skills' },
      },
    },

    about: {
      pageTitle:    'About Me',
      pageSubtitle: 'My story — student, future engineer & security enthusiast',
      biography: {
        title: 'Biography',
        text:  '[Write your biography here. Share your passion, learning journey, and career goals.]',
      },
      education: {
        title:       'Education',
        degree:      'Bachelor of Information Assurance',
        institution: 'FPT University',
        duration:    '2022 – 2026',
        focus:       '[List your key subjects or focus areas here.]',
        internship: {
          company:     'Amazon Web Services Vietnam — FCAJ 2026',
          role:        'Cloud & Security Engineering Trainee',
          duration:    '12 Weeks · 2025',
          description: '[Brief description of the internship program.]',
        },
      },
      careerObjective: {
        title: 'Career Objective',
        text:  '[Write your career objective here.]',
      },
      interests: {
        title: 'Interests',
        items: [
          { icon: '🔐', label: 'Cloud Security' },
          { icon: '🛡️', label: 'Penetration Testing' },
          { icon: '📡', label: 'Network Defense' },
          { icon: '🤖', label: 'AI/ML Security' },
          { icon: '📖', label: '[Add interest]' },
          { icon: '🎨', label: '[Add interest]' },
        ],
      },
      softSkills: {
        title: 'Soft Skills',
        items: [
          { icon: '🧠', label: 'Analytical Thinking' },
          { icon: '🤝', label: 'Teamwork' },
          { icon: '📝', label: 'Technical Writing' },
          { icon: '🎤', label: 'Presentation' },
          { icon: '⏱️', label: '[Add skill]' },
          { icon: '🔍', label: '[Add skill]' },
        ],
      },
      skills: { title: 'Technical Skills' },
    },

    team: {
      pageTitle:    'Internship Team',
      pageSubtitle: 'My companions on the FCAJ 2026 journey',
      membersTitle: 'Team Members',
      meLabel:      'Me',
      infoLabels: {
        groupName:  'Group Name',
        groupId:    'Group ID',
        mentor:     'Mentor',
        supervisor: 'Supervisor',
        role:       'My Role',
        program:    'Program',
      },
    },

    worklog: {
      pageTitle:        'Weekly Worklog',
      pageSubtitle:     '12 weeks exploring AWS Cloud — day by day, lesson by lesson',
      filterAll:        'All',
      filterCompleted:  'Completed',
      filterProgress:   'In Progress',
      weekLabel:        'Week',
      statusCompleted:  'Completed',
      statusProgress:   'In Progress',
      statusPending:    'Not Started',
      sectionObjective: 'Objective',
      sectionTasks:     'Tasks',
      sectionServices:  'AWS Services',
      sectionTech:      'Technologies',
      sectionResult:    'Result',
      sectionReflect:   'Reflection',
      sectionDaily:     'Daily Schedule',
      screenshotLabel:  'Screenshot',
      readMore:         'View Details',
      readLess:         'Collapse',
      progress:         'Completion Progress',
    },

    projects: {
      pageTitle:       'Projects',
      pageSubtitle:    'Security research & technical practice projects',
      readMore:        'Read More',
      readLess:        'Collapse',
      technologies:    'Technologies Used',
      status:          'Status',
      timeline:        'Timeline',
      statusCompleted: 'Completed',
      statusProgress:  'In Progress',
    },

    certificates: {
      pageTitle:    'Certificates',
      pageSubtitle: 'Certificates and achievements earned along the journey',
      issuedBy:     'Issued by',
      issuedDate:   'Issue Date',
      viewCert:     'View Certificate',
      totalLabel:   'Total Certificates',
    },

    contact: {
      pageTitle:       'Contact',
      pageSubtitle:    "Let's connect",
      contactInfo:     'Contact Information',
      availability:    'Open to internship & collaboration opportunities',
      responseTime:    'Usually responds within 24 hours',
      nameLabel:       'Full Name',
      namePlaceholder: 'Your full name',
      emailLabel:      'Email',
      emailPlaceholder:'Your email address',
      messageLabel:    'Message',
      msgPlaceholder:  'Your message...',
      sendButton:      'Send Message',
      sentSuccess:     'Sent successfully!',
      githubLabel:     'GitHub',
      linkedinLabel:   'LinkedIn',
    },

    footer: {
      copyright: '© 2026 Phan Nhật Uyên · FCAJ 2026',
      madeWith:  'Built with React + Vite + Tailwind CSS',
    },

    common: {
      university: 'University',
      major:      'Major',
      program:    'Program',
      backToTop:  'Back to top',
    },
  },
}
