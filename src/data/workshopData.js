// ============================================================
// WORKSHOP DATA — AWS First Cloud AI Journey 2026
// Complete hands-on immersion curriculum & architecture
// ============================================================

export const workshopData = {
  // ── Header ──────────────────────────────────────────────────
  title: {
    vi: 'AWS Cloud Security & Multi-Tier Architecture Immersion',
    en: 'AWS Cloud Security & Multi-Tier Architecture Immersion',
  },
  subtitle: {
    vi: 'Thiết kế & Tối ưu hóa Phòng thủ Đa tầng cho Hệ thống Doanh nghiệp trên AWS',
    en: 'Enterprise Defense-in-Depth & Secure Multi-Tier Cloud Architecture Workshop',
  },
  date: '15/03/2026',
  duration: {
    vi: '2 Ngày (16 Giờ thực hành Lab)',
    en: '2 Days (16 Practical Lab Hours)',
  },
  location: {
    vi: 'Hybrid (AWS Vietnam Innovation Center & AWS Skill Builder)',
    en: 'Hybrid (AWS Vietnam Innovation Center & AWS Skill Builder)',
  },
  organizer: 'Amazon Web Services (AWS) Vietnam — FCAJ 2026',

  // ── Overview ────────────────────────────────────────────────
  overview: {
    vi: 'Chương trình Workshop chuyên sâu được thiết kế dành riêng cho thực tập sinh AWS First Cloud AI Journey 2026. Học viên trực tiếp xây dựng một hệ thống phân tán 3 tầng (Web Tier, Application Tier, Database Tier) tuân thủ nghiêm ngặt 6 trụ cột của AWS Well-Architected Framework. Trọng tâm của workshop là triển khai cơ chế phòng thủ chuyên sâu (Defense-in-Depth), kiểm soát truy cập đặc quyền tối thiểu (Least-Privilege IAM), cô lập mạng ảo với VPC Security Groups & NACLs, mã hóa toàn diện với AWS KMS và thiết lập luồng phản ứng sự cố an ninh tự động.',
    en: 'An intensive technical workshop designed specifically for AWS First Cloud AI Journey 2026 trainees. Participants architect and implement a production-grade 3-tier distributed application (Web, Application, and Database tiers) adhering strictly to the six pillars of the AWS Well-Architected Framework. The core focus centers on engineering defense-in-depth perimeters, enforcing least-privilege IAM policies, network isolation with VPC Security Groups & NACLs, holistic KMS data encryption, and automated security incident response.',
  },

  // ── Objectives ──────────────────────────────────────────────
  objectives: [
    {
      vi: 'Nắm vững kiến trúc mạng VPC phân tách: Thiết kế Public Subnets cho ALB, Private Subnets cho EC2 App và Isolated Subnets cho RDS.',
      en: 'Master secure VPC segmentation: Architect Public Subnets for ALBs, Private Subnets for Compute EC2, and Isolated Subnets for RDS.',
    },
    {
      vi: 'Áp dụng nguyên tắc Least Privilege: Cấu hình IAM Roles, Service Control Policies (SCPs) và Session Policies có kiểm soát MFA.',
      en: 'Enforce Least Privilege access control: Author fine-grained IAM Roles, Service Control Policies (SCPs), and MFA-enforced temporary sessions.',
    },
    {
      vi: 'Mã hóa dữ liệu toàn diện: Bảo vệ dữ liệu lưu trữ (Data-at-Rest) bằng AWS KMS Customer Managed Keys và dữ liệu truyền tải (Data-in-Transit) bằng TLS 1.3.',
      en: 'Holistic Data Protection: Secure data-at-rest using AWS KMS Customer Managed Keys (CMKs) and data-in-transit via TLS 1.3 certificates.',
    },
    {
      vi: 'Tự động hóa phát hiện mối đe dọa: Cấu hình Amazon GuardDuty, AWS WAF rate-limiting và kích hoạt Lambda tự động cô lập máy chủ bị thỏa hiệp.',
      en: 'Automated Threat Detection & Remediation: Integrate Amazon GuardDuty, AWS WAF rate-limiting, and trigger serverless Lambda to quarantine compromised instances.',
    },
  ],

  // ── AWS Services Covered ────────────────────────────────────
  awsServices: [
    'Amazon VPC',
    'Amazon EC2',
    'AWS IAM',
    'Amazon S3',
    'AWS KMS',
    'Amazon GuardDuty',
    'AWS WAF',
    'Application Load Balancer',
    'Amazon CloudWatch',
    'AWS Lambda',
    'Amazon RDS Multi-AZ',
    'AWS CloudTrail',
  ],

  // ── Lab Sections ────────────────────────────────────────────
  sections: [
    {
      id: 'lab-1',
      title: {
        vi: 'Lab 01: Thiết Kế VPC Đa Tầng & Bastion Host Có Kiểm Soát',
        en: 'Lab 01: Secure Multi-Tier VPC Segmentation & Bastion Architecture',
      },
      duration: '180 phút',
      description: {
        vi: 'Xây dựng một VPC tùy chỉnh với 6 subnets phân bổ qua 2 Availability Zones. Thiết lập Internet Gateway, NAT Gateway dự phòng, phân chia bảng định tuyến Route Tables và cấu hình Bastion Host an toàn thông qua AWS Systems Manager Session Manager (không mở port 22 public).',
        en: 'Construct a custom VPC spanning 2 Availability Zones with 6 subnets. Configure Internet Gateway, resilient NAT Gateways, segregated Route Tables, and access private instances securely via AWS Systems Manager Session Manager without exposing public SSH ports.',
      },
      tasks: [
        {
          vi: 'Khởi tạo Custom VPC (CIDR 10.0.0.0/16) với DNS hostnames và DNS resolution kích hoạt.',
          en: 'Provision custom VPC (CIDR 10.0.0.0/16) with DNS hostnames and DNS resolution enabled.',
        },
        {
          vi: 'Phân bổ Public, Private App, và Private DB Subnets trên us-east-1a và us-east-1b.',
          en: 'Allocate Public, Private App, and Private DB Subnets across dual Availability Zones.',
        },
        {
          vi: 'Triển khai NAT Gateway tại Public Subnet và cấu hình Route Table riêng cho Private Subnets.',
          en: 'Deploy resilient NAT Gateway in Public Subnet and point private route tables to the gateway.',
        },
        {
          vi: 'Cấu hình IAM Instance Profile cho phép AWS Systems Manager (SSM) quản lý máy chủ không cần SSH key.',
          en: 'Attach IAM Instance Profile allowing AWS Systems Manager (SSM) management without open port 22.',
        },
      ],
      outcome: {
        vi: 'Hạ tầng mạng ảo hoàn toàn phân lập, kiểm thử ping và kết nối thành công từ Private Subnet ra ngoài Internet thông qua NAT Gateway mà không thể bị quét cổng từ bên ngoài.',
        en: 'Fully segmented network verified: private workloads successfully reach outbound repositories via NAT Gateway with zero ingress vulnerability from the public internet.',
      },
      screenshot: null,
    },
    {
      id: 'lab-2',
      title: {
        vi: 'Lab 02: Phân Quyền Đặc Quyền Tối Thiểu (IAM) & Mã Hóa Dữ Liệu Với KMS',
        en: 'Lab 02: Fine-Grained Least Privilege IAM & Envelope Encryption with KMS',
      },
      duration: '150 phút',
      description: {
        vi: 'Thiết kế hệ thống chính sách IAM Policies sử dụng ABAC (Attribute-Based Access Control) và Policy Variables. Tạo Customer Managed Key (CMK) trong AWS KMS với chính sách Key Policy nghiêm ngặt, áp dụng mã hóa tự động cho S3 Buckets và EBS Volumes.',
        en: 'Architect granular IAM Policies utilizing ABAC (Attribute-Based Access Control) and Policy Variables. Provision Customer Managed Keys (CMKs) in AWS KMS with stringent Key Policies, enforcing envelope encryption on S3 buckets and attached EBS volumes.',
      },
      tasks: [
        {
          vi: 'Tạo Customer Managed Key (CMK) trong AWS KMS với quyền hạn tách biệt giữa Key Administrator và Key User.',
          en: 'Create Customer Managed Key (CMK) in AWS KMS segregating Key Administrators from Key Users.',
        },
        {
          vi: 'Viết IAM Policy điều kiện ip-restriction và yêu cầu MFA bắt buộc khi thực hiện thao tác nhạy cảm.',
          en: 'Author IAM JSON policies enforcing source-IP restrictions and mandatory MFA for privileged API actions.',
        },
        {
          vi: 'Cấu hình S3 Bucket Policy từ chối mọi yêu cầu tải lên không có header mã hóa x-amz-server-side-encryption.',
          en: 'Implement S3 Bucket Policy denying any upload that does not include the KMS encryption header.',
        },
        {
          vi: 'Kiểm thử mã hóa và giải mã dữ liệu thực tế thông qua AWS CLI và Python Boto3.',
          en: 'Verify cryptographic envelope operations using AWS CLI and Python Boto3 scripts.',
        },
      ],
      outcome: {
        vi: 'Toàn bộ dữ liệu tại S3 và EBS được mã hóa 100% bằng khóa riêng, mọi nỗ lực truy cập vượt quyền hoặc không thỏa mãn điều kiện MFA đều bị IAM chặn lại và ghi nhận vào CloudTrail.',
        en: '100% data-at-rest encryption verified across storage tiers; non-compliant requests lacking MFA were immediately denied and logged to CloudTrail.',
      },
      screenshot: null,
    },
    {
      id: 'lab-3',
      title: {
        vi: 'Lab 03: Phát Hiện Mối Đe Dọa Với GuardDuty & Tự Động Hóa Phản Ứng Sự Cố',
        en: 'Lab 03: Threat Detection with Amazon GuardDuty & Automated Remediation',
      },
      duration: '180 phút',
      description: {
        vi: 'Kích hoạt Amazon GuardDuty để giám sát liên tục VPC Flow Logs, DNS Logs và CloudTrail Events. Thiết lập kịch bản mô phỏng tấn công (DNS exfiltration & Port scanning), cấu hình Amazon EventBridge bắt sự kiện và kích hoạt Lambda tự động thay đổi Security Group để cách ly máy chủ bị nhiễm mã độc.',
        en: 'Enable Amazon GuardDuty continuous monitoring over VPC Flow Logs, DNS Logs, and CloudTrail Events. Simulate adversarial attacks (DNS exfiltration & port scan), route findings via Amazon EventBridge, and trigger Lambda to dynamically alter Security Groups to quarantine infected instances.',
      },
      tasks: [
        {
          vi: 'Kích hoạt Amazon GuardDuty và cấu hình bảo vệ mở rộng cho S3 và EKS.',
          en: 'Activate Amazon GuardDuty and enable enhanced protection for S3 and container workloads.',
        },
        {
          vi: 'Chạy script mô phỏng tạo truy vấn DNS độc hại (DNS Tunneling) từ EC2 testbed.',
          en: 'Execute simulated adversarial payloads generating abnormal DNS tunneling queries.',
        },
        {
          vi: 'Tạo EventBridge Rule lọc các GuardDuty Finding có mức độ nghiêm trọng High (Severity >= 7.0).',
          en: 'Create an EventBridge rule targeting GuardDuty findings with High Severity (>= 7.0).',
        },
        {
          vi: 'Triển khai hàm Lambda bằng Python để revoke Security Group hiện tại và gắn Quarantine Security Group (chặn mọi Ingress/Egress).',
          en: 'Deploy a serverless Python Lambda function that swaps the instance Security Group with an isolated Quarantine SG.',
        },
      ],
      outcome: {
        vi: 'Quy trình SOAR (Security Orchestration, Automation, and Response) hoạt động hoàn hảo: Khi phát hiện tấn công, máy chủ bị cách ly hoàn toàn trong vòng dưới 15 giây, đồng thời gửi thông báo khẩn cấp qua Amazon SNS.',
        en: 'Full SOAR pipeline validated: infected testbed instances were autonomously quarantined within 15 seconds of threat detection, with real-time alerting dispatched via SNS.',
      },
      screenshot: null,
    },
  ],

  // ── Architecture Blueprint Caption ──────────────────────────
  architectureCaption: {
    vi: 'Sơ đồ Kiến trúc Bảo mật 3 Tầng trên AWS: Multi-AZ VPC, ALB WAF, Private App Tier, Multi-AZ RDS và Hệ thống SOAR tự động cách ly mối đe dọa.',
    en: 'AWS 3-Tier Enterprise Security Architecture: Multi-AZ VPC, WAF-protected ALB, Private Compute Tier, Multi-AZ RDS, and EventBridge-Lambda automated SOAR.',
  },

  // ── Notes / Key Takeaways ───────────────────────────────────
  notes: [
    {
      vi: 'Nguyên lý Zero Trust: Không tin tưởng bất kỳ kết nối nào, dù là nội bộ bên trong VPC. Luôn xác thực và mã hóa dữ liệu giữa các dịch vụ.',
      en: 'Zero Trust Principle: Never implicitly trust internal VPC communications. Always enforce mutual authentication and transport encryption between tiers.',
    },
    {
      vi: 'Cơ chế Defense-in-Depth: Kết hợp nhiều lớp bảo vệ độc lập gồm AWS WAF ở tầng biên (Edge), Security Groups ở tầng host, và KMS ở tầng lưu trữ.',
      en: 'Defense-in-Depth: Layer defenses across the stack—AWS WAF at the perimeter, Security Groups at the host layer, and KMS at the storage tier.',
    },
    {
      vi: 'Giám sát chủ động thay vì thụ động: Không chỉ lưu trữ logs, mà phải phân tích theo thời gian thực với GuardDuty và CloudWatch Alarms để phản ứng tức thì.',
      en: 'Proactive vs Reactive Observability: Log collection is insufficient without real-time analytics like GuardDuty and CloudWatch Alarms to execute rapid remediation.',
    },
    {
      vi: 'Hạ tầng bất biến (Immutable Infrastructure): Không thực hiện thay đổi trực tiếp trên production server; mọi cấu hình phải được kiểm thử qua mã nguồn (IaC).',
      en: 'Immutable Infrastructure: Eliminate manual ad-hoc configuration drifts by provisioning everything declaratively through audited Infrastructure as Code.',
    },
  ],

  // ── Resources ───────────────────────────────────────────────
  resources: [
    {
      label: 'AWS Well-Architected Framework: Security Pillar (Trụ Cột Bảo Mật)',
      url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html',
    },
    {
      label: 'AWS Security Best Practices & Reference Blueprints (Tài Liệu Chuẩn)',
      url: 'https://aws.amazon.com/security/security-resources/',
    },
    {
      label: 'NIST Special Publication 800-145: Cloud Security Guidelines',
      url: 'https://csrc.nist.gov/publications/detail/sp/800-145/final',
    },
    {
      label: 'Amazon GuardDuty Finding Types & Remediation Playbooks',
      url: 'https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html',
    },
  ],
};
