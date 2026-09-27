// ============================================================
// PROFILE DATA — Edit your personal info here
// ============================================================
// This file controls all personal details shown across the site.
// Replace every value marked with ← before publishing.
// ============================================================

export const profileData = {
  // ── Identity ──────────────────────────────────────────────
  name:        'Phan Nhật Uyên',         // ← your full name (Vietnamese)
  englishName: 'Uyen Phan',              // ← your name in English
  role:        'Cloud & Security Engineering Trainee',
  university:  'FPT University',
  major:       'Information Assurance (Cyber Security)',
  program:     'First Cloud AI Journey (FCAJ) 2026',
  location:    'Vietnam',                // ← your city / country

  // ── Biography (shown on About page) ───────────────────────
  // Write 2–4 sentences. Displayed in the selected language via translations.js
  bio: '[Write your biography here in 2–4 sentences. Share your passion and journey.]',

  // ── Career Goal (shown on About page) ─────────────────────
  careerGoal: '[Write your career objective here.]',

  // ── Contact Info ───────────────────────────────────────────
  contacts: {
    email:        'your.email@example.com',         // ← your email
    github:       'https://github.com/your-username', // ← your GitHub URL
    linkedin:     'https://linkedin.com/in/your-profile', // ← your LinkedIn URL
    portfolioUrl: 'https://your-username.github.io/fcaj-portfolio/', // ← after deploy
  },

  // ── Skills ─────────────────────────────────────────────────
  // Add or remove skills. Available icons (Lucide): Cloud, Terminal, Code, Activity,
  // ShieldAlert, Cpu, Network, Lock, Globe, Database, Server, Wifi
  // Levels: 'Advanced' | 'Proficient' | 'Intermediate' | 'Beginner'
  // Colors: use any pastel hex, e.g. '#CDB4DB', '#A2D2FF', '#FFC8DD', '#95D5B2'
  skills: [
    {
      name:        'AWS',
      level:       'Intermediate',   // ← adjust your level
      badgeColor:  '#CDB4DB',
      description: '[List the AWS services you use, e.g. VPC, EC2, IAM, S3, CloudWatch]',
      category:    'Cloud Security',
      icon:        'Cloud',
    },
    {
      name:        'Linux',
      level:       'Intermediate',
      badgeColor:  '#A2D2FF',
      description: '[e.g. Ubuntu, Bash Scripting, SSH Hardening, UFW, Systemd]',
      category:    'System Administration',
      icon:        'Terminal',
    },
    {
      name:        'Python',
      level:       'Intermediate',
      badgeColor:  '#CDB4DB',
      description: '[e.g. Security Automation, Scapy, Socket Programming, Boto3]',
      category:    'Programming',
      icon:        'Code',
    },
    {
      name:        'Networking',
      level:       'Intermediate',
      badgeColor:  '#A2D2FF',
      description: '[e.g. TCP/IP, Subnetting, DNS, SSL/TLS, Firewalls, VPN]',
      category:    'Infrastructure',
      icon:        'Network',
    },
    {
      name:        'Burp Suite',
      level:       'Intermediate',
      badgeColor:  '#FFC8DD',
      description: '[e.g. Web Vulnerability Assessment, OWASP Top 10, Proxy]',
      category:    'Penetration Testing',
      icon:        'ShieldAlert',
    },
    {
      name:        'Wireshark',
      level:       'Intermediate',
      badgeColor:  '#BDE0FE',
      description: '[e.g. Packet Analysis, TCP/IP, DDoS Pattern Detection]',
      category:    'Network Forensics',
      icon:        'Activity',
    },
    {
      name:        'Java',
      level:       'Intermediate',
      badgeColor:  '#FFC8DD',
      description: '[e.g. OOP, Secure Coding, Cryptography APIs]',
      category:    'Software Development',
      icon:        'Cpu',
    },
    // Add more skills by copying a block above ↑
  ],

  // ── Stats shown on Home page ───────────────────────────────
  // Edit values when you have completed the program
  stats: [
    { label: 'Tuần thực hành', value: '12 Tuần' },
    { label: 'Dự án hoàn thành', value: '4' },
    { label: 'Dịch vụ AWS', value: '—' },  // ← fill in when done
    { label: 'Kỹ năng cốt lõi', value: '—' }, // ← fill in when done
  ],
}
