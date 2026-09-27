// ============================================================
// PROFILE DATA — Phan Nhật Uyên
// AWS First Cloud AI Journey (FCAJ) 2026
// ============================================================

export const profileData = {
  // ── Identity ──────────────────────────────────────────────
  name:        'Phan Nhật Uyên',
  englishName: 'Uyen Phan',
  role:        'Information Assurance Student · Cloud & Security Trainee',
  university:  'FPT University',
  major:       'Information Assurance (Cyber Security)',
  program:     'AWS First Cloud AI Journey (FCAJ) 2026',
  location:    'Ho Chi Minh City, Vietnam',

  // ── Contact Info ───────────────────────────────────────────
  contacts: {
    email:        'nhatuyen.sec@gmail.com',
    github:       'https://github.com/NhatUyen2409',
    linkedin:     'https://linkedin.com/in/nhatuyen-phan',
    portfolioUrl: 'https://nhatuyen2409.github.io/web-worklog-fcaj/',
  },

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      name:        'AWS Cloud Security',
      level:       'Advanced',
      badgeColor:  '#CDB4DB',
      category:    'Cloud Infrastructure',
      icon:        'Cloud',
      description: {
        vi: 'Thiết kế VPC Multi-tier, IAM Least-Privilege, AWS KMS, Security Groups, WAF, CloudWatch & GuardDuty.',
        en: 'Multi-tier VPC architecture, IAM Least-Privilege, AWS KMS encryption, Security Groups, WAF, CloudWatch & GuardDuty.',
      },
    },
    {
      name:        'Linux & Hardening',
      level:       'Proficient',
      badgeColor:  '#A2D2FF',
      category:    'Operating Systems',
      icon:        'Terminal',
      description: {
        vi: 'Quản trị Ubuntu/Debian, SSH Key Authentication, cấu hình UFW/iptables, Fail2ban, Systemd và Bash scripting.',
        en: 'Ubuntu/Debian administration, SSH hardening, UFW/iptables firewall rules, Fail2ban, Systemd, and automation via Bash.',
      },
    },
    {
      name:        'Network Defense & Protocols',
      level:       'Advanced',
      badgeColor:  '#BDE0FE',
      category:    'Networking',
      icon:        'Network',
      description: {
        vi: 'Phân tích giao thức TCP/IP, DNSSEC, TLS/SSL Certificates, Subnetting CIDR, VPN Tunneling và phòng chống DDoS.',
        en: 'Deep TCP/IP analysis, DNSSEC, TLS/SSL certificate lifecycle, CIDR subnetting, site-to-site VPN, and DDoS mitigation.',
      },
    },
    {
      name:        'Python for Security',
      level:       'Proficient',
      badgeColor:  '#FFC8DD',
      category:    'Programming & Automation',
      icon:        'Code',
      description: {
        vi: 'Tự động hóa tác vụ bảo mật với Boto3 SDK, trích xuất log an ninh, Scapy packet manipulation và xử lý telemetry.',
        en: 'Security automation via AWS Boto3 SDK, log parsing pipelines, packet crafting with Scapy, and telemetry anomaly analysis.',
      },
    },
    {
      name:        'Packet Inspection & Forensics',
      level:       'Proficient',
      badgeColor:  '#95D5B2',
      category:    'Network Forensics',
      icon:        'Activity',
      description: {
        vi: 'Bắt và phân tích gói tin mạng chuyên sâu với Wireshark, phát hiện bất thường SYN Flood, ARP Spoofing và DNS tunneling.',
        en: 'Packet analysis via Wireshark, dissecting malicious payloads, detecting SYN Floods, ARP spoofing, and covert DNS tunnels.',
      },
    },
    {
      name:        'Web Security & OWASP',
      level:       'Intermediate',
      badgeColor:  '#FFAFCC',
      category:    'Application Security',
      icon:        'ShieldAlert',
      description: {
        vi: 'Đánh giá lỗ hổng ứng dụng web theo chuẩn OWASP Top 10, kiểm thử Burp Suite proxy, SQL Injection và XSS defense.',
        en: 'Web application vulnerability assessments targeting OWASP Top 10, Burp Suite proxy intercept, SQLi and XSS defenses.',
      },
    },
    {
      name:        'Infrastructure as Code (IaC)',
      level:       'Intermediate',
      badgeColor:  '#E9D5FF',
      category:    'DevSecOps',
      icon:        'Cpu',
      description: {
        vi: 'Mô hình hóa hạ tầng đám mây với AWS CloudFormation và Terraform, đảm bảo tính nhất quán và bất biến cho hệ thống.',
        en: 'Automating immutable cloud infrastructure provisioning with AWS CloudFormation templates and HashiCorp Terraform.',
      },
    },
    {
      name:        'Docker & Microservices',
      level:       'Intermediate',
      badgeColor:  '#D8F3E3',
      category:    'Containerization',
      icon:        'Server',
      description: {
        vi: 'Đóng gói ứng dụng containerized an toàn, quét lỗ hổng image và triển khai trên Amazon ECR / ECS Fargate.',
        en: 'Building lightweight, hardened container images, container vulnerability scanning, and deploying to Amazon ECS Fargate.',
      },
    },
  ],

  // ── Stats ──────────────────────────────────────────────────
  stats: [
    { label: { vi: 'Tuần thực tập', en: 'Internship Weeks' }, value: '12 Tuần' },
    { label: { vi: 'Dự án hoàn thành', en: 'Completed Projects' }, value: '4' },
    { label: { vi: 'Dịch vụ AWS', en: 'AWS Services' }, value: '16+' },
    { label: { vi: 'Kỹ năng chuyên sâu', en: 'Core Competencies' }, value: '8+' },
  ],
};
