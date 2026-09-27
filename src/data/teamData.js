// ============================================================
// TEAM DATA — FCAJ 2026 Project Team
// Editable group information and realistic members
// ============================================================

export const teamData = {
  // ── Group Info ─────────────────────────────────────────────
  groupName:  'Cloud Sentinel Team',
  groupId:    'FCAJ-2026-SEC-09',
  mentor:     'Nguyễn Hoàng Long (Senior Solutions Architect, AWS)',
  supervisor: 'TS. Lê Văn Tuấn (Khoa ATTT, Đại học FPT)',
  myRole: {
    vi: 'Trưởng nhóm & Chuyên viên Bảo mật Đám mây (Team Lead & Cloud Security Specialist)',
    en: 'Team Lead & Cloud Security Specialist',
  },
  program:    'AWS First Cloud AI Journey 2026',

  // ── Team Members ──────────────────────────────────────────
  members: [
    {
      name:       'Phan Nhật Uyên',
      role: {
        vi: 'Trưởng nhóm · Bảo mật Đám mây',
        en: 'Team Lead · Cloud Security',
      },
      university: 'FPT University',
      avatar:     '👩‍💻',
      isMe:       true,
      bio: {
        vi: 'Chịu trách nhiệm thiết kế kiến trúc bảo mật tổng thể, phân bổ VPC, IAM Policies và điều phối tiến độ chung.',
        en: 'Responsible for end-to-end security architecture design, VPC segmentation, IAM policies, and sprint coordination.',
      },
    },
    {
      name:       'Trần Minh Khoa',
      role: {
        vi: 'Kỹ sư Hạ tầng Đám mây',
        en: 'Cloud Infrastructure Engineer',
      },
      university: 'FPT University',
      avatar:     '👨‍💻',
      isMe:       false,
      bio: {
        vi: 'Chuyên trách triển khai hạ tầng EC2 Auto Scaling, cân bằng tải Application Load Balancer và cấu hình Route 53.',
        en: 'Specializes in provisioning EC2 Auto Scaling, Application Load Balancers, and DNS routing via Route 53.',
      },
    },
    {
      name:       'Lê Hoàng Yến',
      role: {
        vi: 'Kỹ sư Bảo mật Dữ liệu & AI',
        en: 'Data & AI Security Engineer',
      },
      university: 'FPT University',
      avatar:     '👩‍🔬',
      isMe:       false,
      bio: {
        vi: 'Phụ trách mã hóa cơ sở dữ liệu RDS/DynamoDB với AWS KMS, quản lý khóa và tích hợp Amazon Bedrock an toàn.',
        en: 'Handles database encryption for RDS/DynamoDB using AWS KMS, key management, and secure Bedrock AI integration.',
      },
    },
    {
      name:       'Nguyễn Gia Bảo',
      role: {
        vi: 'Kỹ sư DevSecOps & Tự động hóa',
        en: 'DevSecOps & Automation Engineer',
      },
      university: 'FPT University',
      avatar:     '👨‍🔧',
      isMe:       false,
      bio: {
        vi: 'Thiết lập pipeline tự động hóa CI/CD, viết kịch bản Terraform/CloudFormation và giám sát cảnh báo CloudWatch.',
        en: 'Builds CI/CD automation pipelines, authors Terraform/CloudFormation IaC templates, and monitors CloudWatch alarms.',
      },
    },
  ],

  // ── Team Quote ─────────────────────────────────────────────
  quote: {
    vi: '“Bảo mật trên đám mây không phải là rào cản ngăn bước, mà là nền tảng kiên cố giải phóng tiềm năng sáng tạo.”',
    en: '“Cloud security is never an impediment; it is the resilient foundation that unleashes boundless innovation.”',
  },
};
