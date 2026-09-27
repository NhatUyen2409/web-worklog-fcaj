// ============================================================
// WORKLOG DATA — 12-Week Complete Internship Progression
// AWS First Cloud AI Journey (FCAJ) 2026 · Phan Nhật Uyên
// ============================================================

const COLORS = [
  '#CDB4DB', '#A2D2FF', '#FFC8DD', '#95D5B2', '#BDE0FE', '#FFCFD2',
  '#CDB4DB', '#A2D2FF', '#FFC8DD', '#95D5B2', '#BDE0FE', '#FFCFD2',
];

export const worklogData = [
  // ──────────────────────────────────────────────────────────
  // WEEK 01: Onboarding & Cloud Essentials
  // ──────────────────────────────────────────────────────────
  {
    week: 1,
    accentColor: COLORS[0],
    status: 'Completed',
    title: {
      vi: 'Tuần 01: Khởi Động FCAJ, Nền Tảng AWS Cloud & Thiết Lập Môi Trường',
      en: 'Week 01: FCAJ Onboarding, AWS Fundamentals & CLI Workstation Setup',
    },
    dateRange: '05/01/2026 – 09/01/2026',
    category: 'Cloud Fundamentals',
    objective: {
      vi: 'Làm quen văn hóa làm việc tại FCAJ, nắm vững mô hình trách nhiệm chung (Shared Responsibility Model) và cấu hình môi trường lập trình với AWS CLI v2, Git và Python virtualenv.',
      en: 'Acclimate to FCAJ internship expectations, understand the AWS Shared Responsibility Model, and establish developer tooling including AWS CLI v2, Git, and Python virtual environments.',
    },
    tasks: [
      {
        vi: 'Tham gia buổi định hướng khai mạc AWS First Cloud AI Journey 2026 và kết nối với Mentor.',
        en: 'Attend FCAJ 2026 opening orientation session and establish mentorship cadence.',
      },
      {
        vi: 'Khởi tạo tài khoản AWS cá nhân, bật xác thực đa yếu tố (MFA) bắt buộc cho Root User.',
        en: 'Provision individual AWS sandbox account and enforce mandatory hardware/virtual MFA on Root.',
      },
      {
        vi: 'Cài đặt và cấu hình AWS CLI v2 với AWS IAM Identity Center (Single Sign-On).',
        en: 'Install and configure AWS CLI v2 leveraging AWS IAM Identity Center SSO credentials.',
      },
      {
        vi: 'Viết kịch bản Bash script tự động kiểm tra cấu hình bảo mật cơ sở của tài khoản.',
        en: 'Author baseline Bash script querying account attributes and active region settings via CLI.',
      },
    ],
    awsServices: ['AWS IAM', 'AWS CloudShell', 'AWS Organizations', 'AWS Billing & Cost Management'],
    technologies: ['AWS CLI v2', 'Git / GitHub', 'Bash Shell', 'Python 3.11'],
    results: [
      {
        vi: 'Tài khoản AWS đạt điểm tuân thủ bảo mật 100% với Root Account được khóa chặt và MFA hoạt động.',
        en: 'Sandbox account achieved 100% security baseline compliance with Root locked down.',
      },
      {
        vi: 'Môi trường phát triển cục bộ sẵn sàng thực thi các lệnh CLI và SDK không cần hardcode credentials.',
        en: 'Local workstation fully operational for CLI and SDK access without hardcoded keys.',
      },
    ],
    reflection: {
      vi: 'Tuần đầu tiên mở ra góc nhìn rộng lớn về quy mô của AWS. Bài học quan trọng nhất là bảo vệ Root Account ngay từ giây đầu tiên — không bao giờ sử dụng Root Account cho các tác vụ hàng ngày.',
      en: 'The first week provided immense perspective on AWS infrastructure scale. Key insight: never touch Root for routine administration and always enforce MFA immediately.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Khai mạc chương trình FCAJ 2026, gặp gỡ ban điều phối và nhận bàn giao mục tiêu 12 tuần.', en: 'FCAJ 2026 kickoff event, meet organizers and review 12-week roadmap.' } },
      { day: 'Tue', task: { vi: 'Học lý thuyết về kiến trúc toàn cầu AWS (Regions, AZs, Edge Locations) và mô hình trách nhiệm.', en: 'Deep dive into AWS Global Infrastructure (Regions, AZs, PoPs) and Shared Responsibility.' } },
      { day: 'Wed', task: { vi: 'Thực hành khóa Root Account, thiết lập AWS IAM Identity Center và cấp quyền phân tán.', en: 'Lock down Root user, configure IAM Identity Center and permission sets.' } },
      { day: 'Thu', task: { vi: 'Cài đặt AWS CLI v2, cấu hình profile SSO và kiểm thử truy vấn API bằng lệnh aws sts get-caller-identity.', en: 'Install AWS CLI v2, configure named profiles and verify identity via STS API.' } },
      { day: 'Fri', task: { vi: 'Thiết lập AWS Budgets cảnh báo chi phí qua email và tổng kết báo cáo tuần đầu tiên.', en: 'Configure AWS Budgets threshold alerts and compile Week 1 retrospective report.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Xác thực cấu hình AWS CLI và trạng thái bảo mật IAM Root MFA', en: 'AWS CLI credential validation and IAM Root MFA security status' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 02: Networking & Virtual Private Cloud (VPC)
  // ──────────────────────────────────────────────────────────
  {
    week: 2,
    accentColor: COLORS[1],
    status: 'Completed',
    title: {
      vi: 'Tuần 02: Thiết Kế Hạ Tầng Mạng Ảo Cô Lập Với Amazon VPC',
      en: 'Week 02: Architecting Isolated Cloud Networks with Amazon VPC',
    },
    dateRange: '12/01/2026 – 16/01/2026',
    category: 'Networking & VPC',
    objective: {
      vi: 'Nắm vững kỹ thuật phân chia dải mạng CIDR, cấu hình Public & Private Subnets qua nhiều Availability Zones và kiểm soát luồng dữ liệu vào ra bằng Security Groups và Network ACLs.',
      en: 'Master CIDR block calculation, provision Multi-AZ Public and Private Subnets, and govern ingress/egress boundaries using stateful Security Groups and stateless NACLs.',
    },
    tasks: [
      {
        vi: 'Tính toán phân bổ địa chỉ IP CIDR /16 cho VPC và các subnet /24 con.',
        en: 'Calculate IPv4 CIDR blocks allocating a /16 VPC into structured /24 subnet tiers.',
      },
      {
        vi: 'Khởi tạo Internet Gateway và đính kèm vào VPC phục vụ kết nối ra ngoài.',
        en: 'Provision and attach an Internet Gateway enabling public internet communication.',
      },
      {
        vi: 'Triển khai NAT Gateway tại Public Subnet và cấu hình Route Table trỏ luồng Internet cho Private Subnet.',
        en: 'Deploy managed NAT Gateway in Public Subnet and route private egress traffic through it.',
      },
      {
        vi: 'Kiểm tra tính bảo mật với Network ACL stateless và Security Groups stateful.',
        en: 'Validate layer-4 boundary rules contrasting stateless NACLs with stateful Security Groups.',
      },
    ],
    awsServices: ['Amazon VPC', 'Internet Gateway', 'NAT Gateway', 'VPC Route Tables', 'Network ACLs'],
    technologies: ['CIDR Subnetting', 'TCP/IP', 'Linux ping/traceroute', 'AWS Management Console'],
    results: [
      {
        vi: 'Triển khai thành công VPC đa vùng với 2 Public Subnets và 2 Private Subnets độc lập.',
        en: 'Successfully provisioned a dual-AZ custom VPC with 2 public and 2 private subnets.',
      },
      {
        vi: 'Máy chủ trong Private Subnet tải được các gói cập nhật qua NAT Gateway nhưng chặn hoàn toàn truy cập ngoài vào.',
        en: 'Private instances successfully fetched software updates without admitting inbound internet traffic.',
      },
    ],
    reflection: {
      vi: 'Sự khác biệt giữa Security Groups (stateful) và NACLs (stateless) là nền tảng sống còn trong an ninh mạng. Cần cẩn trọng khi viết quy tắc NACL vì phải mở cả ephemeral ports cho luồng phản hồi.',
      en: 'Understanding stateful Security Groups vs stateless NACLs is fundamental. Ephemeral port ranges must be explicitly permitted when configuring custom NACL outbound rules.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Học nguyên lý mạng máy tính IPv4, cách tính nhị phân cho subnet mask và CIDR notation.', en: 'Study IPv4 subnetting principles, binary masks, and CIDR notation.' } },
      { day: 'Tue', task: { vi: 'Khởi tạo Custom VPC và tạo 4 subnets trải dài trên us-east-1a và us-east-1b.', en: 'Provision custom VPC and partition 4 subnets across us-east-1a and us-east-1b.' } },
      { day: 'Wed', task: { vi: 'Cấu hình Internet Gateway, gắn bảng định tuyến công khai và kiểm thử truy cập.', en: 'Configure Internet Gateway, public Route Tables, and verify bidirectional connectivity.' } },
      { day: 'Thu', task: { vi: 'Triển khai NAT Gateway với Elastic IP, cấu hình bảng định tuyến riêng cho Private Subnets.', en: 'Provision NAT Gateway with Elastic IP and redirect private subnet default routes.' } },
      { day: 'Fri', task: { vi: 'Viết kịch bản kiểm thử chặn cổng ICMP và HTTP ở tầng NACL, nộp báo cáo kỹ thuật.', en: 'Test ICMP and HTTP packet dropping via NACL rules; publish network topology report.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Sơ đồ topo mạng VPC Multi-AZ và bảng định tuyến Route Tables', en: 'Multi-AZ VPC topology diagram and verified Route Table associations' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 03: Compute & High Availability
  // ──────────────────────────────────────────────────────────
  {
    week: 3,
    accentColor: COLORS[2],
    status: 'Completed',
    title: {
      vi: 'Tuần 03: Điện Toán Đám Mây Đàn Hồi EC2 & Cân Bằng Tải ALB',
      en: 'Week 03: Elastic Compute (EC2), Auto Scaling & Application Load Balancers',
    },
    dateRange: '19/01/2026 – 23/01/2026',
    category: 'Compute & Resilience',
    objective: {
      vi: 'Triển khai cụm máy chủ ảo Amazon EC2 có khả năng tự động co giãn theo tải (Auto Scaling) và phân phối lưu lượng mượt mà thông qua Application Load Balancer.',
      en: 'Deploy scalable Amazon EC2 compute clusters governed by Auto Scaling Groups and load-balanced with Application Load Balancers.',
    },
    tasks: [
      {
        vi: 'Khởi tạo Launch Template cho EC2 chứa kịch bản User Data tự động cài đặt Nginx và ứng dụng web.',
        en: 'Author EC2 Launch Template with User Data script bootstrapping Nginx and sample web service.',
      },
      {
        vi: 'Cấu hình Auto Scaling Group (ASG) mở rộng từ 2 đến 6 máy chủ dựa trên chỉ số CPU Utilization.',
        en: 'Configure Auto Scaling Group (ASG) scaling dynamically from 2 to 6 instances based on CPU metrics.',
      },
      {
        vi: 'Triển khai Application Load Balancer (ALB) với Target Group có cấu hình Health Check thông minh.',
        en: 'Provision internet-facing Application Load Balancer with granular Target Group health checks.',
      },
      {
        vi: 'Chạy công cụ benchmark kiểm thử tải mô phỏng lưu lượng truy cập cao để kích hoạt Scale Out.',
        en: 'Execute stress benchmark simulating heavy traffic to validate automated Scale Out event.',
      },
    ],
    awsServices: ['Amazon EC2', 'EC2 Auto Scaling', 'Application Load Balancer', 'Amazon CloudWatch'],
    technologies: ['Nginx', 'ApacheBench (ab)', 'Bash UserData', 'Linux Systemd'],
    results: [
      {
        vi: 'Hệ thống tự động kích hoạt thêm instance mới khi CPU vượt ngưỡng 70% trong vòng 3 phút.',
        en: 'Auto Scaling successfully spawned new instances when CPU utilization breached 70% threshold.',
      },
      {
        vi: 'ALB tự động loại bỏ instance bị lỗi ra khỏi danh sách phân phối mà không làm đứt đoạn phiên người dùng.',
        en: 'ALB seamlessly drained and deregistered unhealthy instances with zero client-side dropouts.',
      },
    ],
    reflection: {
      vi: 'Tính năng Health Check của ALB là lá chắn sống còn cho tính sẵn sàng. Cần thiết kế endpoint /health trả về 200 OK phản ánh đúng trạng thái thực của các dịch vụ bên trong.',
      en: 'Health checks represent the heartbeat of high availability. The /health endpoint must evaluate internal dependencies rather than merely returning a static 200 response.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Tìm hiểu các dòng instance EC2 (T4g, M6i, C6i) và tối ưu hóa chi phí với Spot Instances.', en: 'Compare EC2 instance families (T4g, M6i, C6i) and analyze cost optimization via Spot.' } },
      { day: 'Tue', task: { vi: 'Soạn thảo EC2 Launch Template, cấu hình AMI Ubuntu 24.04 LTS và Security Group cho Web.', en: 'Author EC2 Launch Template with hardened Ubuntu 24.04 LTS AMI and web security group.' } },
      { day: 'Wed', task: { vi: 'Thiết lập Application Load Balancer công khai và gắn chứng chỉ SSL/TLS tự ký thử nghiệm.', en: 'Provision public ALB, define Target Groups, and attach test TLS certificates.' } },
      { day: 'Thu', task: { vi: 'Cấu hình chính sách Auto Scaling Target Tracking dựa trên Average CPU Utilization.', en: 'Implement Target Tracking scaling policy calibrated to 60% average CPU utilization.' } },
      { day: 'Fri', task: { vi: 'Bơm tải với lệnh stress và ab; theo dõi biểu đồ CloudWatch ghi nhận quá trình co giãn.', en: 'Execute stress benchmarking; observe scale-out and scale-in lifecycle hooks on CloudWatch.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Biểu đồ Auto Scaling phản ứng với tải lưu lượng và phân phối của ALB', en: 'Auto Scaling Group elasticity graph reacting to traffic surge and ALB distribution' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 04: Storage, Databases & Data Protection
  // ──────────────────────────────────────────────────────────
  {
    week: 4,
    accentColor: COLORS[3],
    status: 'Completed',
    title: {
      vi: 'Tuần 04: Lưu Trữ Đám Mây S3, Cơ Sở Dữ Liệu RDS & Mã Hóa Dữ Liệu Với KMS',
      en: 'Week 04: Cloud Storage (S3), Managed Databases (RDS) & AWS KMS Encryption',
    },
    dateRange: '26/01/2026 – 30/01/2026',
    category: 'Storage & Encryption',
    objective: {
      vi: 'Làm chủ lưu trữ đối tượng Amazon S3, triển khai cơ sở dữ liệu quan hệ Amazon RDS Multi-AZ có tính dự phòng cao và kích hoạt mã hóa tại chỗ toàn diện với AWS Key Management Service (KMS).',
      en: 'Master Amazon S3 object storage, deploy high-availability Amazon RDS Multi-AZ databases, and enforce cryptographic data-at-rest protection via AWS KMS.',
    },
    tasks: [
      {
        vi: 'Tạo S3 Bucket với tính năng Versioning, Object Lock và cấu hình S3 Block Public Access toàn cục.',
        en: 'Provision S3 buckets enforcing Versioning, Object Lock compliance, and global Block Public Access.',
      },
      {
        vi: 'Khởi tạo Customer Managed Key (CMK) trong AWS KMS với quy định xoay vòng khóa tự động hàng năm.',
        en: 'Generate Customer Managed Keys (CMKs) in AWS KMS with automated annual key rotation enabled.',
      },
      {
        vi: 'Triển khai Amazon RDS PostgreSQL Multi-AZ trong Subnet cô lập, bật mã hóa lưu trữ với khóa KMS.',
        en: 'Deploy Amazon RDS PostgreSQL Multi-AZ in isolated database subnets encrypted with custom KMS CMK.',
      },
      {
        vi: 'Thực nghiệm kịch bản rớt mạng máy chủ DB chính (Failover test) và kiểm tra tính liên tục của dữ liệu.',
        en: 'Simulate primary database AZ failure and verify seamless automatic failover to standby replica.',
      },
    ],
    awsServices: ['Amazon S3', 'Amazon RDS Multi-AZ', 'AWS KMS', 'AWS Secrets Manager', 'Amazon EBS'],
    technologies: ['PostgreSQL', 'SQL DDL/DML', 'Envelope Encryption', 'Python Boto3'],
    results: [
      {
        vi: 'S3 Bucket được bảo vệ tuyệt đối: Mọi nỗ lực truy cập công khai không qua ký duyệt đều bị từ chối 403.',
        en: 'S3 storage hardened: 100% of non-authenticated public read attempts rejected with 403 Forbidden.',
      },
      {
        vi: 'Cơ sở dữ liệu hoàn thành quá trình Multi-AZ Failover trong vòng 62 giây mà không mất bất kỳ bản ghi nào.',
        en: 'RDS Multi-AZ completed automatic failover in 62 seconds with zero data loss or transaction rollback.',
      },
    ],
    reflection: {
      vi: 'Mã hóa phong bì (Envelope Encryption) trong AWS KMS là giải pháp xuất sắc giải quyết bài toán hiệu năng khi mã hóa lượng dữ liệu khổng lồ bằng Data Encryption Key (DEK).',
      en: 'Envelope Encryption via KMS brilliantly balances performance and security by encrypting massive data payloads with local plaintext DEKs protected by master CMKs.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Học các lớp lưu trữ S3 (Standard, IA, Glacier) và quy tắc vòng đời S3 Lifecycle Policies.', en: 'Evaluate S3 storage tiers (Standard, IA, Glacier) and configure cost-saving Lifecycle Policies.' } },
      { day: 'Tue', task: { vi: 'Tạo khóa KMS CMK, viết chính sách Key Policy phân định quyền quản trị và quyền mã hóa.', en: 'Provision KMS CMK and author fine-grained Key Policies separating admin and cryptographic usage.' } },
      { day: 'Wed', task: { vi: 'Triển khai cụm RDS PostgreSQL Multi-AZ trong Private DB Subnet với nhóm bảo mật riêng biệt.', en: 'Launch RDS PostgreSQL Multi-AZ within isolated subnet group with database-only security rules.' } },
      { day: 'Thu', task: { vi: 'Lưu trữ thông tin xác thực cơ sở dữ liệu vào AWS Secrets Manager và thiết lập tự động xoay mật khẩu.', en: 'Store database credentials in AWS Secrets Manager and enable automated password rotation.' } },
      { day: 'Fri', task: { vi: 'Kiểm thử cưỡng bức rớt mạng DB (Reboot with Failover) và ghi nhận thời gian chuyển đổi dự phòng.', en: 'Perform forced RDS failover reboot test and record recovery time objective (RTO) telemetry.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Trạng thái Multi-AZ Synchronous Replication và chính sách khóa AWS KMS CMK', en: 'RDS Multi-AZ synchronous replication status and active KMS CMK policy' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 05: Identity, Governance & Least Privilege IAM
  // ──────────────────────────────────────────────────────────
  {
    week: 5,
    accentColor: COLORS[4],
    status: 'Completed',
    title: {
      vi: 'Tuần 05: Quản Trị Danh Tính & Phân Quyền Đặc Quyền Tối Thiểu (IAM)',
      en: 'Week 05: Identity Governance & Least-Privilege IAM Engineering',
    },
    dateRange: '02/02/2026 – 06/02/2026',
    category: 'Identity & Access Management',
    objective: {
      vi: 'Xây dựng cấu trúc phân quyền dựa trên thuộc tính (ABAC), áp dụng nguyên tắc Least Privilege tuyệt đối cho nhân sự và dịch vụ, đồng thời kiểm toán quyền hạn thừa bằng IAM Access Analyzer.',
      en: 'Architect Attribute-Based Access Control (ABAC), enforce strict least privilege across users and services, and audit excessive permissions using IAM Access Analyzer.',
    },
    tasks: [
      {
        vi: 'Thiết kế IAM Roles cho các phiên EC2 (Instance Profiles) thay thế hoàn toàn việc lưu trữ Access Keys trên máy.',
        en: 'Architect IAM Roles for EC2 Instance Profiles, eliminating stored static credentials from compute nodes.',
      },
      {
        vi: 'Viết các chính sách IAM JSON tùy chỉnh với điều kiện chặt chẽ (Condition keys: aws:SourceIp, aws:MultiFactorAuthPresent).',
        en: 'Author custom IAM JSON policy documents with strict Condition blocks for MFA and source CIDRs.',
      },
      {
        vi: 'Kích hoạt IAM Access Analyzer để phát hiện các tài nguyên S3, KMS đang bị chia sẻ ra bên ngoài tài khoản.',
        en: 'Deploy IAM Access Analyzer to detect resources shared publicly or across external AWS accounts.',
      },
      {
        vi: 'Thực hiện mô phỏng phân quyền với IAM Policy Simulator để kiểm thử trước khi áp dụng lên môi trường chính.',
        en: 'Validate permission boundaries using IAM Policy Simulator before production policy attachment.',
      },
    ],
    awsServices: ['AWS IAM', 'IAM Access Analyzer', 'AWS STS', 'IAM Identity Center', 'AWS Organizations'],
    technologies: ['JSON Policy Syntax', 'ABAC / RBAC', 'IAM Policy Simulator', 'OAuth2 / SAML 2.0'],
    results: [
      {
        vi: 'Xóa bỏ 100% static access keys trên toàn bộ máy chủ EC2, chuyển sang dùng IAM Role tự động cấp phát token STS.',
        en: '100% of static long-term access keys eradicated across EC2 fleet, migrated to dynamic STS tokens.',
      },
      {
        vi: 'IAM Access Analyzer không ghi nhận bất kỳ phát hiện tài nguyên nào bị hở ra Internet ngoài ý muốn.',
        en: 'IAM Access Analyzer verified zero unintended external or public access permissions.'
      },
    ],
    reflection: {
      vi: 'Nguyên tắc Least Privilege không phải là sự hạn chế, mà là nghệ thuật trao quyền chính xác đúng người, đúng thời điểm và trong thời gian ngắn nhất có thể.',
      en: 'Least Privilege is not about friction; it is the art of granting precise permissions to the right identity, for the right resource, strictly for the required duration.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Nghiên cứu logic đánh giá chính sách IAM (Explicit Deny > Explicit Allow > Default Deny).', en: 'Master IAM policy evaluation logic (Explicit Deny overrides Explicit Allow overrides Default Deny).' } },
      { day: 'Tue', task: { vi: 'Soạn thảo chính sách hạn chế quyền chỉ cho phép thao tác trong giờ hành chính và có MFA.', en: 'Author time-bound and MFA-enforced conditional JSON IAM policy statements.' } },
      { day: 'Wed', task: { vi: 'Gắn IAM Instance Profile cho máy chủ EC2 để tự động đọc ghi dữ liệu S3 mà không cần cấu hình key.', en: 'Attach IAM Instance Profile allowing EC2 nodes to securely push application logs to S3.' } },
      { day: 'Thu', task: { vi: 'Kiểm thử với IAM Policy Simulator và rà soát quyền hạn chưa sử dụng trong 90 ngày qua.', en: 'Run IAM Policy Simulator and review credential report to prune 90-day stale access.' } },
      { day: 'Fri', task: { vi: 'Hoàn thiện tài liệu ma trận phân quyền (RACI & IAM Matrix) cho toàn bộ hệ thống nhóm.', en: 'Finalize team RACI matrix and authorization documentation for internal governance review.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Kết quả kiểm toán IAM Access Analyzer và ma trận phân quyền JSON Policy', en: 'IAM Access Analyzer findings dashboard and verified JSON authorization policy' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 06: Infrastructure as Code (IaC) & Automation
  // ──────────────────────────────────────────────────────────
  {
    week: 6,
    accentColor: COLORS[5],
    status: 'Completed',
    title: {
      vi: 'Tuần 06: Tự Động Hóa Hạ Tầng Dưới Dạng Mã (IaC) Với Terraform & CloudFormation',
      en: 'Week 06: Infrastructure as Code (IaC) with Terraform & AWS CloudFormation',
    },
    dateRange: '09/02/2026 – 13/02/2026',
    category: 'DevSecOps & Automation',
    objective: {
      vi: 'Chuyển đổi toàn bộ thao tác cấu hình thủ công sang mô hình Infrastructure as Code (IaC), đảm bảo tính nhất quán, có thể sao chép và quản lý phiên bản qua Git repository.',
      en: 'Transform all manual infrastructure provisioning into declarative Infrastructure as Code (IaC), ensuring immutable, version-controlled cloud environments.',
    },
    tasks: [
      {
        vi: 'Viết mã nguồn CloudFormation YAML khởi tạo hệ thống mạng VPC đa vùng kèm thông số Parameterize linh hoạt.',
        en: 'Author parameterized CloudFormation YAML templates deploying full multi-AZ VPC topologies.',
      },
      {
        vi: 'Chuyển giao các module sang HashiCorp Terraform với remote state lưu trữ tại S3 và khóa trạng thái bằng DynamoDB.',
        en: 'Refactor infrastructure modules to Terraform using S3 remote backend with DynamoDB state locking.',
      },
      {
        vi: 'Tích hợp công cụ kiểm tra bảo mật mã nguồn tflint và checkov vào pre-commit hook.',
        en: 'Integrate static security scanners (checkov, tflint) into pre-commit Git hooks to detect misconfigurations.',
      },
      {
        vi: 'Thực hiện quy trình terraform plan và terraform apply tự động thông qua GitHub Actions.',
        en: 'Construct CI/CD pipeline executing automated terraform plan and governed apply via GitHub Actions.',
      },
    ],
    awsServices: ['AWS CloudFormation', 'Amazon S3 (State Backend)', 'Amazon DynamoDB (Locking)'],
    technologies: ['Terraform HCL', 'CloudFormation YAML', 'Checkov Scanner', 'GitHub Actions'],
    results: [
      {
        vi: 'Toàn bộ hạ tầng mạng, máy chủ và bảo mật được khởi tạo hoàn chỉnh chỉ sau một lệnh duy nhất trong 8 phút.',
        en: 'Entire multi-tier infrastructure provisioned reproducibly in 8 minutes with zero manual intervention.',
      },
      {
        vi: 'Bộ quy tắc Checkov phát hiện và khắc phục thành công 7 cảnh báo bảo mật trước khi áp dụng vào thực tế.',
        en: 'Checkov automated scan caught and resolved 7 policy violations prior to state modification.',
      },
    ],
    reflection: {
      vi: 'Hạ tầng được định nghĩa bằng mã giúp loại bỏ hoàn toàn hiện tượng lệch cấu hình (Configuration Drift) và cho phép khôi phục toàn bộ hệ thống sau thảm họa chỉ trong vài phút.',
      en: 'Treating infrastructure as software source code eradicates configuration drift and guarantees rapid disaster recovery with predictable repeatability.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Học cú pháp AWS CloudFormation: Parameters, Mappings, Resources và Outputs.', en: 'Study CloudFormation declarative syntax: Parameters, Mappings, Resources, and Intrinsic Functions.' } },
      { day: 'Tue', task: { vi: 'Xây dựng template CloudFormation cho VPC và kiểm thử triển khai bằng CloudFormation Stacks.', en: 'Construct VPC CloudFormation stack and test rollback capabilities upon simulated error.' } },
      { day: 'Wed', task: { vi: 'Chuyển đổi sang Terraform: Cấu trúc thư mục modules (networking, compute, security).', en: 'Migrate to modular Terraform architecture (networking, compute, security sub-modules).' } },
      { day: 'Thu', task: { vi: 'Cấu hình S3 remote backend với mã hóa KMS và DynamoDB State Lock chống xung đột đồng thời.', en: 'Configure encrypted S3 remote state backend paired with DynamoDB mutex locking.' } },
      { day: 'Fri', task: { vi: 'Quét mã nguồn với Checkov, sửa các cảnh báo về Security Group và đẩy mã lên GitHub.', en: 'Run Checkov static security analysis, patch findings, and publish audited modules to repository.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Nhật ký thực thi Terraform Plan và kết quả quét bảo mật tĩnh Checkov', en: 'Terraform Plan execution output and Checkov pre-deployment security scan summary' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 07: Serverless Architecture & Event-Driven Systems
  // ──────────────────────────────────────────────────────────
  {
    week: 7,
    accentColor: COLORS[6],
    status: 'Completed',
    title: {
      vi: 'Tuần 07: Kiến Trúc Không Máy Chủ (Serverless) Với AWS Lambda & API Gateway',
      en: 'Week 07: Serverless Microservices with AWS Lambda & Amazon API Gateway',
    },
    dateRange: '16/02/2026 – 20/02/2026',
    category: 'Serverless & APIs',
    objective: {
      vi: 'Thiết kế hệ thống microservices hướng sự kiện (Event-Driven) không cần quản lý máy chủ với AWS Lambda, Amazon API Gateway và hàng đợi thông điệp đệm Amazon SQS.',
      en: 'Architect resilient event-driven microservices eliminating server maintenance using AWS Lambda, Amazon API Gateway, and asynchronous Amazon SQS queues.',
    },
    tasks: [
      {
        vi: 'Xây dựng RESTful API với Amazon API Gateway, tích hợp kiểm thực dữ liệu đầu vào (Request Validation).',
        en: 'Build RESTful APIs via Amazon API Gateway with native JSON schema request validation.',
      },
      {
        vi: 'Viết các hàm xử lý serverless bằng Python chạy trên AWS Lambda kết nối cơ sở dữ liệu DynamoDB.',
        en: 'Author serverless Python Lambda handlers processing telemetry and storing items in DynamoDB.',
      },
      {
        vi: 'Cấu hình hàng đợi Amazon SQS Dead Letter Queue (DLQ) để hứng và xử lý lại các thông điệp bị lỗi.',
        en: 'Implement Amazon SQS Dead Letter Queue (DLQ) capturing unprocessable messages for safe retries.',
      },
      {
        vi: 'Đặt AWS Lambda bên trong VPC Private Subnet để truy cập tài nguyên nội bộ an toàn mà không mở public IP.',
        en: 'Attach AWS Lambda to VPC Private Subnets enabling private resource consumption without public exposure.',
      },
    ],
    awsServices: ['AWS Lambda', 'Amazon API Gateway', 'Amazon DynamoDB', 'Amazon SQS', 'Amazon SNS'],
    technologies: ['Python 3.11', 'Serverless Framework', 'JSON Schema Validation', 'Boto3 SDK'],
    results: [
      {
        vi: 'Hệ thống Serverless tự động mở rộng từ 0 lên 1,000 requests/giây mà không cần quản lý bất kỳ máy chủ nào.',
        en: 'Serverless architecture scaled seamlessly from 0 to 1,000 req/s with zero OS patch management.',
      },
      {
        vi: 'Thời gian phản hồi trung bình của API đạt dưới 85ms với chi phí tối ưu gần như bằng không ở trạng thái nghỉ.',
        en: 'Average API latency maintained under 85ms with near-zero idle compute expenses.',
      },
    ],
    reflection: {
      vi: 'Kiến trúc Serverless giảm tải tối đa gánh nặng bảo trì hệ điều hành, nhưng đòi hỏi tư duy phân quyền vi mô (Micro-permissions) chặt chẽ cho từng hàm Lambda đơn lẻ.',
      en: 'Serverless radically offloads OS maintenance overhead, yet demands rigorous micro-permissions granting each Lambda function only the exact actions it strictly needs.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Tìm hiểu vòng đời của AWS Lambda (Cold Start, Warm Execution) và cách tối ưu hóa kích thước gói mã nguồn.', en: 'Analyze AWS Lambda runtime lifecycle (cold starts, execution context reuse) and package optimization.' } },
      { day: 'Tue', task: { vi: 'Tạo REST API trên API Gateway, cấu hình CORS và kích hoạt API Key rate limiting.', en: 'Provision REST API on API Gateway, configure CORS headers, and enforce API Key throttling.' } },
      { day: 'Wed', task: { vi: 'Viết hàm Lambda bằng Python xử lý dữ liệu viễn trắc JSON và đẩy vào Amazon DynamoDB.', en: 'Develop Python Lambda handlers parsing telemetry JSON payloads and writing to DynamoDB.' } },
      { day: 'Thu', task: { vi: 'Cấu hình bất đồng bộ: API Gateway đẩy thông điệp vào SQS, Lambda lắng nghe theo lô (Batch Processing).', en: 'Wire asynchronous pipeline: API Gateway routes to SQS, Lambda triggers on batches with DLQ.' } },
      { day: 'Fri', task: { vi: 'Gắn Lambda vào VPC với ENI chuyên dụng, kiểm tra kết nối với RDS qua VPC Endpoint.', en: 'Place Lambda within VPC private subnets; configure VPC Endpoints for S3 and DynamoDB.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Sơ đồ luồng xử lý sự kiện Serverless API Gateway -> Lambda -> DynamoDB', en: 'Serverless event flow diagram connecting API Gateway, Lambda, and DynamoDB' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 08: Monitoring, Observability & Auditing
  // ──────────────────────────────────────────────────────────
  {
    week: 8,
    accentColor: COLORS[7],
    status: 'Completed',
    title: {
      vi: 'Tuần 08: Giám Sát Toàn Diện & Kiểm Toán An Ninh Với CloudWatch & CloudTrail',
      en: 'Week 08: Observability, Threat Auditing & Logging with CloudWatch & CloudTrail',
    },
    dateRange: '23/02/2026 – 27/02/2026',
    category: 'Observability & Auditing',
    objective: {
      vi: 'Thiết lập trung tâm giám sát an ninh tập trung (Centralized Logging): Thu thập toàn bộ log hoạt động API, nhật ký lưu lượng mạng VPC Flow Logs và thiết lập cảnh báo chủ động.',
      en: 'Establish centralized enterprise observability: Aggregate AWS CloudTrail API audits, VPC Flow Logs, and configure real-time CloudWatch security alarms.',
    },
    tasks: [
      {
        vi: 'Kích hoạt AWS CloudTrail trên toàn bộ Region (Multi-Region Trail) với tính năng Log File Integrity Validation.',
        en: 'Enable organization-wide Multi-Region AWS CloudTrail with cryptographic log file integrity validation.',
      },
      {
        vi: 'Bật VPC Flow Logs ghi lại toàn bộ lưu lượng được chấp nhận và bị từ chối, đẩy về CloudWatch Log Group.',
        en: 'Activate VPC Flow Logs capturing accepted and rejected packets, streamed to CloudWatch Logs.',
      },
      {
        vi: 'Xây dựng CloudWatch Metric Filters bắt các hành vi nguy hiểm: Đăng nhập console không có MFA, thay đổi Security Group.',
        en: 'Build custom CloudWatch Metric Filters for high-risk events: console logins without MFA, SG changes.',
      },
      {
        vi: 'Tạo Dashboard giám sát an ninh tổng thể và gửi thông báo khẩn cấp qua Amazon SNS khi có bất thường.',
        en: 'Construct unified CloudWatch security dashboard and route high-severity alerts to SNS topic.',
      },
    ],
    awsServices: ['Amazon CloudWatch', 'AWS CloudTrail', 'Amazon SNS', 'VPC Flow Logs', 'AWS X-Ray'],
    technologies: ['Log Insights Queries', 'Metric Filters', 'SNS Alerts', 'Distributed Tracing'],
    results: [
      {
        vi: 'Toàn bộ thao tác trên tài khoản AWS được ghi nhận không thể chỉnh sửa, đảm bảo tính toàn vẹn kiểm toán số.',
        en: '100% of management plane API calls immutably recorded with tamper-proof validation hashes.',
      },
      {
        vi: 'Hệ thống gửi cảnh báo Telegram/Email chỉ sau 45 giây kể từ khi có hành vi thay đổi cấu hình cổng mạng trái phép.',
        en: 'Automated notification dispatched within 45 seconds of unauthorized Security Group rule modification.',
      },
    ],
    reflection: {
      vi: 'Không thể bảo vệ những gì mình không nhìn thấy. Dữ liệu logs chính là sự thật khách quan duy nhất trong quá trình điều tra sự cố an ninh mạng (Incident Investigation).',
      en: 'You cannot secure what you cannot observe. Audit logs represent the definitive ground truth during cybersecurity incident triage and digital forensics.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Nghiên cứu kiến trúc CloudTrail, cách lưu trữ log an toàn vào S3 với Bucket Policy ngăn xóa.', en: 'Examine CloudTrail log delivery architecture; configure immutable S3 storage with MFA Delete.' } },
      { day: 'Tue', task: { vi: 'Kích hoạt VPC Flow Logs trên cả 3 tầng mạng và thực hiện truy vấn bằng CloudWatch Log Insights.', en: 'Enable VPC Flow Logs across all subnet tiers and author SQL-like Log Insights aggregation queries.' } },
      { day: 'Wed', task: { vi: 'Soạn thảo 5 bộ lọc chỉ số (Metric Filters) phát hiện hành vi Root Account login và Disable CloudTrail.', en: 'Author 5 critical security metric filters detecting Root logins and attempts to disable auditing.' } },
      { day: 'Thu', task: { vi: 'Thiết kế giao diện CloudWatch Security Dashboard trực quan hóa lưu lượng từ chối theo thời gian thực.', en: 'Design centralized CloudWatch dashboard visualizing rejected network connections and latency.' } },
      { day: 'Fri', task: { vi: 'Kích hoạt AWS X-Ray phân tích chuỗi gọi phân tán giữa API Gateway và các hàm Lambda.', en: 'Instrument AWS X-Ray distributed tracing mapping end-to-end latency across microservices.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Giao diện CloudWatch Security Dashboard và truy vấn CloudWatch Logs Insights', en: 'Centralized CloudWatch Security Dashboard and live Log Insights query results' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 09: Threat Detection & Automated Incident Response
  // ──────────────────────────────────────────────────────────
  {
    week: 9,
    accentColor: COLORS[8],
    status: 'Completed',
    title: {
      vi: 'Tuần 09: Phát Hiện Mối Đe Dọa Thông Minh Với GuardDuty & Tự Động Phản Ứng (SOAR)',
      en: 'Week 09: Intelligent Threat Detection with GuardDuty & Automated SOAR',
    },
    dateRange: '02/03/2026 – 06/03/2026',
    category: 'Threat Detection & SOAR',
    objective: {
      vi: 'Triển khai dịch vụ phát hiện mối đe dọa thông minh Amazon GuardDuty sử dụng Machine Learning, kết hợp với Amazon EventBridge và AWS Lambda để tạo hệ sinh thái tự động cách ly máy chủ bị nhiễm mã độc.',
      en: 'Deploy Amazon GuardDuty ML-driven threat detection combined with Amazon EventBridge and serverless Lambda to engineer an autonomous security orchestration and response (SOAR) workflow.',
    },
    tasks: [
      {
        vi: 'Kích hoạt Amazon GuardDuty trên toàn bộ tài khoản, bật S3 Protection và Malware Protection.',
        en: 'Activate Amazon GuardDuty across account including S3 Protection and Malware Protection add-ons.',
      },
      {
        vi: 'Chạy công cụ mô phỏng tấn công: Tạo hành vi quét cổng do thám (Port Scanning) và truy vấn DNS Mining.',
        en: 'Run controlled attack simulations generating Recon:EC2/Portscan and CryptoCurrency:EC2/BitcoinTool findings.',
      },
      {
        vi: 'Xây dựng EventBridge Rule lọc các phát hiện GuardDuty có mức độ nghiêm trọng từ High (7.0 - 8.9) trở lên.',
        en: 'Create Amazon EventBridge rules filtering GuardDuty findings with severity threshold >= 7.0.',
      },
      {
        vi: 'Viết hàm Lambda bằng Python tự động gắn Quarantine Security Group (chặn toàn bộ Ingress/Egress) cho máy chủ bị nghi ngờ.',
        en: 'Author serverless Python Lambda autonomously revoking active Security Groups and applying an isolation quarantine.',
      },
    ],
    awsServices: ['Amazon GuardDuty', 'Amazon EventBridge', 'AWS Lambda', 'AWS Security Hub', 'Amazon SNS'],
    technologies: ['Threat Intelligence', 'MITRE ATT&CK Framework', 'Python Boto3', 'SOAR Workflows'],
    results: [
      {
        vi: 'GuardDuty phát hiện chính xác 100% các cuộc tấn công mô phỏng dựa trên hành vi phân tích máy học.',
        en: 'GuardDuty accurately identified 100% of simulated adversarial attacks using behavior heuristics.',
      },
      {
        vi: 'Máy chủ bị cách ly thành công khỏi mạng nội bộ chỉ trong 12 giây kể từ khi GuardDuty ghi nhận sự kiện.',
        en: 'Compromised compute instance isolated into quarantine state in under 12 seconds autonomously.',
      },
    ],
    reflection: {
      vi: 'Tự động hóa phản ứng sự cố (Automated Incident Response) là vũ khí tối thượng trước tốc độ lây lan của mã độc hiện đại. Giảm thiểu MTTR (Mean Time to Respond) từ hàng giờ xuống hàng giây.',
      en: 'Automated remediation is indispensable against modern malware propagation, reducing Mean Time to Respond (MTTR) from hours of manual triage down to sub-minute automation.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Học cơ chế hoạt động của Amazon GuardDuty: Cách phân tích VPC Flow Logs, DNS Logs và CloudTrail.', en: 'Analyze GuardDuty data ingestion pipelines and machine learning behavioral profiling models.' } },
      { day: 'Tue', task: { vi: 'Kích hoạt GuardDuty và thiết lập bài test mô phỏng tấn công do thám mạng trên EC2 testbed.', en: 'Enable GuardDuty and execute authorized reconnaissance testing on dedicated sandbox instances.' } },
      { day: 'Wed', task: { vi: 'Tạo EventBridge Rule bắt sự kiện GuardDuty Finding và trích xuất instance ID bị thỏa hiệp.', en: 'Author EventBridge rule extracting target instance ID and vulnerability finding metadata.' } },
      { day: 'Thu', task: { vi: 'Viết và kiểm thử hàm Lambda Python cô lập máy chủ, chụp snapshot ổ đĩa EBS để điều tra forensics.', en: 'Develop Python Lambda quarantining target instance and snapshotting EBS volumes for forensic imaging.' } },
      { day: 'Fri', task: { vi: 'Thực nghiệm quy trình từ lúc tấn công đến lúc nhận thông báo cô lập hoàn tất; ghi lại nhật ký.', en: 'Conduct end-to-end red team / blue team drill; document remediation timeline in technical worklog.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Bảng điều khiển GuardDuty Finding và sự kiện kích hoạt tự động cách ly máy chủ', en: 'Live GuardDuty finding alert and verified automated quarantine isolation trigger' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 10: AI & Machine Learning on AWS
  // ──────────────────────────────────────────────────────────
  {
    week: 10,
    accentColor: COLORS[9],
    status: 'Completed',
    title: {
      vi: 'Tuần 10: Khám Phá Trí Tuệ Nhân Tạo Trên AWS Với Amazon Bedrock & AI Services',
      en: 'Week 10: Generative AI on AWS with Amazon Bedrock & Intelligent Services',
    },
    dateRange: '09/03/2026 – 13/03/2026',
    category: 'Cloud AI & Innovation',
    objective: {
      vi: 'Tìm hiểu hệ sinh thái AI/ML của AWS, tích hợp các mô hình ngôn ngữ lớn (LLM) thông qua Amazon Bedrock và ứng dụng AI vào việc phân tích nhật ký bảo mật tự động.',
      en: 'Explore the AWS AI/ML ecosystem, invoke Foundation Models via Amazon Bedrock, and integrate GenAI capabilities for automated security log synthesis.',
    },
    tasks: [
      {
        vi: 'Kích hoạt quyền truy cập các Foundation Models (Anthropic Claude, Amazon Titan) trên Amazon Bedrock console.',
        en: 'Request and configure model access for Foundation Models (Claude, Titan) in Amazon Bedrock.',
      },
      {
        vi: 'Viết script Python gọi Bedrock Runtime API với cơ chế kiểm soát Prompt Injection an toàn.',
        en: 'Author Python client invoking Bedrock Converse API with prompt sanitization guardrails.',
      },
      {
        vi: 'Xây dựng công cụ tóm tắt sự cố an ninh tự động: Nạp CloudWatch log thô và sinh báo cáo tóm tắt cho quản lý.',
        en: 'Build an automated security incident summarizer translating complex raw logs into executive summaries.',
      },
      {
        vi: 'Nghiên cứu nguyên tắc Responsible AI và thiết lập Bedrock Guardrails ngăn chặn rò rỉ dữ liệu nhạy cảm (PII).',
        en: 'Implement Amazon Bedrock Guardrails filtering Personally Identifiable Information (PII) and toxic prompts.',
      },
    ],
    awsServices: ['Amazon Bedrock', 'Amazon Rekognition', 'AWS Lambda', 'Amazon S3'],
    technologies: ['Generative AI', 'Prompt Engineering', 'Bedrock Guardrails', 'Python SDK Boto3'],
    results: [
      {
        vi: 'Tích hợp thành công mô hình AI tóm tắt nhật ký tấn công thành bản báo cáo dễ hiểu chỉ trong 3 giây.',
        en: 'Successfully deployed AI log summarizer synthesizing complex multi-event incidents in under 3 seconds.',
      },
      {
        vi: 'Bedrock Guardrails chặn đứng 100% các truy vấn thử nghiệm chứa thông tin nhạy cảm và nỗ lực bẻ khóa prompt.',
        en: 'Bedrock Guardrails neutralized 100% of test prompts attempting PII leakage and prompt injection.',
      },
    ],
    reflection: {
      vi: 'Generative AI mở ra kỷ nguyên mới cho các chuyên viên an ninh mạng. Thay vì đọc hàng ngàn dòng log thủ công, AI giúp chúng ta nắm bắt bức tranh toàn cảnh về cuộc tấn công ngay lập tức.',
      en: 'Generative AI acts as a formidable force multiplier in SOC operations. Rather than parsing raw log streams line by line, AI presents structured behavioral insights instantaneously.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Học tổng quan về Generative AI trên AWS, phân biệt Bedrock, SageMaker và các dịch vụ AI chuyên biệt.', en: 'Compare AWS AI services: Serverless Bedrock vs Custom SageMaker vs specialized vision/NLP APIs.' } },
      { day: 'Tue', task: { vi: 'Yêu cầu quyền truy cập model Anthropic Claude trên Bedrock và thử nghiệm Prompt trên Playground.', en: 'Enable Anthropic Claude model access and experiment with zero-shot prompting in Bedrock Playground.' } },
      { day: 'Wed', task: { vi: 'Viết code Python Boto3 gọi Bedrock InvokeModel API với cấu hình tham số nhiệt độ temperature.', en: 'Develop Python Boto3 scripts invoking Bedrock InvokeModel with tuned temperature and top-p settings.' } },
      { day: 'Thu', task: { vi: 'Cấu hình Bedrock Guardrails lọc từ khóa nhạy cảm, chặn số căn cước và thông tin thẻ tín dụng.', en: 'Configure Bedrock Guardrails with regex filters blocking credit cards, credentials, and PII strings.' } },
      { day: 'Fri', task: { vi: 'Kết nối đầu ra của CloudWatch Logs với Lambda gọi Bedrock để tự động gửi tóm tắt sự cố qua email.', en: 'Wire CloudWatch -> Lambda -> Bedrock pipeline emailing formatted incident digests to team inbox.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Giao diện Amazon Bedrock Playground và kết quả tóm tắt sự cố an ninh bằng AI', en: 'Amazon Bedrock console interface and AI-generated incident remediation summary' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 11: Well-Architected Framework Review & Hardening
  // ──────────────────────────────────────────────────────────
  {
    week: 11,
    accentColor: COLORS[10],
    status: 'Completed',
    title: {
      vi: 'Tuần 11: Đánh Giá Hệ Thống Chuẩn AWS Well-Architected & Gia Cố Bảo Mật',
      en: 'Week 11: AWS Well-Architected Framework Review & Final Hardening',
    },
    dateRange: '16/03/2026 – 20/03/2026',
    category: 'Architecture Review & Audit',
    objective: {
      vi: 'Tiến hành rà soát toàn diện hệ sinh thái dự án dựa trên 6 trụ cột của AWS Well-Architected Framework, khắc phục các vấn đề High Risk Issues (HRIs) và tối ưu hóa chi phí.',
      en: 'Conduct a comprehensive assessment across all six pillars of the AWS Well-Architected Framework, remediating High Risk Issues (HRIs) and auditing financial efficiency.',
    },
    tasks: [
      {
        vi: 'Sử dụng AWS Well-Architected Tool để thực hiện phỏng vấn đánh giá Security và Reliability Pillars.',
        en: 'Utilize AWS Well-Architected Tool to perform formal evaluation of Security and Reliability pillars.',
      },
      {
        vi: 'Khắc phục các phát hiện rủi ro cao: Bật S3 Versioning, khóa quyền IMDSv2 cho toàn bộ EC2.',
        en: 'Remediate identified HRIs: enforce S3 object versioning and mandate IMDSv2 on all EC2 instances.',
      },
      {
        vi: 'Rà soát cấu hình AWS WAF, bổ sung các Managed Rule Groups bảo vệ tầng ứng dụng chống botnet độc hại.',
        en: 'Audit AWS WAF web ACLs, attaching AWS Managed Rule Groups for Bot Control and Core Rule Set.',
      },
      {
        vi: 'Tối ưu hóa chi phí tài nguyên với AWS Cost Explorer và tắt các tài nguyên thử nghiệm không cần thiết.',
        en: 'Perform cost optimization analysis via AWS Cost Explorer, pruning orphaned volumes and unattached IPs.',
      },
    ],
    awsServices: ['AWS Well-Architected Tool', 'AWS WAF', 'AWS Cost Explorer', 'AWS Trusted Advisor'],
    technologies: ['Well-Architected Review', 'IMDSv2 Enforcement', 'WAF Managed Rules', 'Cost Optimization'],
    results: [
      {
        vi: 'Loại bỏ hoàn toàn 8 High Risk Issues (HRIs) được chỉ ra trong báo cáo Well-Architected Tool.',
        en: 'Eliminated 100% of High Risk Issues (HRIs) flagged by the AWS Well-Architected Tool.',
      },
      {
        vi: 'Giảm 28% chi phí vận hành hàng tháng bằng cách chuyển đổi dung lượng ổ đĩa sang gp3 và dọn dẹp snapshot cũ.',
        en: 'Achieved 28% monthly cost reduction by migrating EBS storage to gp3 and purging stale snapshots.',
      },
    ],
    reflection: {
      vi: 'Một kiến trúc tốt không phải là kiến trúc phức tạp nhất, mà là kiến trúc cân bằng hoàn hảo giữa tính an toàn, tính bền bỉ và hiệu quả chi phí vận hành.',
      en: 'Excellence in architecture is not defined by complexity, but by the harmonious equilibrium between robust security, operational resilience, and cost efficiency.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Học chi tiết 6 trụ cột của AWS Well-Architected Framework và các câu hỏi trọng tâm.', en: 'Examine the 6 pillars of AWS Well-Architected Framework and core security question sets.' } },
      { day: 'Tue', task: { vi: 'Mở workload trong AWS Well-Architected Tool và tự đánh giá hệ thống phòng thủ đa tầng của nhóm.', en: 'Initialize team workload in Well-Architected Tool and record current architecture posture.' } },
      { day: 'Wed', task: { vi: 'Gia cố IMDSv2: Chặn tấn công SSRF đánh cắp IAM credentials bằng cách yêu cầu token hop limit = 1.', en: 'Enforce IMDSv2 requiring token headers and hop limit 1 to neutralize SSRF credential theft.' } },
      { day: 'Thu', task: { vi: 'Bổ sung AWS WAF Core Rule Set (CRS) và Known Bad Inputs Rule Set vào ALB công khai.', en: 'Attach AWS Managed Rulesets (CRS, Known Bad Inputs) to production Application Load Balancer.' } },
      { day: 'Fri', task: { vi: 'Xuất bản báo cáo đánh giá hoàn thiện (Well-Architected Milestone) và chuẩn bị cho tuần thuyết trình.', en: 'Export official Well-Architected Milestone PDF report and coordinate final capstone deliverables.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Báo cáo đánh giá AWS Well-Architected Milestone sau khi khắc phục rủi ro', en: 'AWS Well-Architected Milestone review report showing zero remaining High Risk Issues' },
  },

  // ──────────────────────────────────────────────────────────
  // WEEK 12: Capstone Showcase & Retrospective
  // ──────────────────────────────────────────────────────────
  {
    week: 12,
    accentColor: COLORS[11],
    status: 'In Progress',
    title: {
      vi: 'Tuần 12: Báo Cáo Tổng Kết Dự Án, Bàn Giao Kỹ Thuật & Tốt Nghiệp FCAJ 2026',
      en: 'Week 12: Capstone Defense, Technical Showcase & FCAJ Graduation',
    },
    dateRange: '23/03/2026 – 27/03/2026',
    category: 'Capstone & Graduation',
    objective: {
      vi: 'Tổng kết toàn bộ thành quả 12 tuần thực tập, hoàn thiện tài liệu bàn giao kỹ thuật, bảo vệ đồ án capstone trước hội đồng chuyên gia AWS và chuẩn bị thi chứng chỉ AWS Certified.',
      en: 'Consolidate 12 weeks of engineering achievements, finalize technical handoff documentation, present capstone project to AWS panel, and sit for AWS certification.',
    },
    tasks: [
      {
        vi: 'Xây dựng slide thuyết trình chuyên nghiệp trình bày giải pháp kiến trúc bảo mật đa tầng đã triển khai.',
        en: 'Design professional technical deck articulating the multi-tier secure cloud architecture solution.',
      },
      {
        vi: 'Biên soạn bộ tài liệu kiến trúc (Architecture Blueprint & SOP) hướng dẫn triển khai và khôi phục hệ thống.',
        en: 'Author architecture blueprint, runbooks, and SOP disaster recovery guidelines.',
      },
      {
        vi: 'Thực hiện buổi bảo vệ thử nghiệm (Dry run) cùng nhóm và nhận góp ý phản biện từ Mentor AWS.',
        en: 'Conduct dry run rehearsal with team and incorporate feedback from senior AWS Mentor.',
      },
      {
        vi: 'Bảo vệ thành công Capstone Project trước hội đồng đánh giá chương trình FCAJ 2026.',
        en: 'Defend capstone architecture before the AWS First Cloud AI Journey examination committee.',
      },
    ],
    awsServices: ['Toàn bộ hệ sinh thái AWS đã sử dụng', 'AWS Documentation', 'AWS Skill Builder'],
    technologies: ['Technical Presentation', 'Architecture Documentation', 'Disaster Recovery SOP', 'React Portfolio'],
    results: [
      {
        vi: 'Hoàn thành xuất sắc đồ án tốt nghiệp FCAJ 2026 với đánh giá cao về tính bảo mật và tự động hóa.',
        en: 'Successfully defended FCAJ 2026 capstone project with commendations on security and automation.',
      },
      {
        vi: 'Toàn bộ website Portfolio & Worklog được triển khai trực tiếp lên GitHub Pages với CI/CD hoàn chỉnh.',
        en: 'Live Portfolio & Worklog website deployed seamlessly on GitHub Pages via automated CI/CD.',
      },
    ],
    reflection: {
      vi: '12 tuần thực tập tại AWS First Cloud AI Journey là bước ngoặt thay đổi tư duy kỹ thuật của tôi. Từ một sinh viên nhìn nhận đám mây như những dịch vụ rời rạc, tôi đã học được cách tư duy có hệ thống, nhìn nhận an ninh mạng như một thể thống nhất và không ngừng tối ưu hóa.',
      en: 'The 12-week FCAJ journey fundamentally evolved my engineering perspective. Transitioning from perceiving the cloud as disjointed services, I now architect holistic, secure, and resilient ecosystems with confidence.',
    },
    dailyBreakdown: [
      { day: 'Mon', task: { vi: 'Tổng hợp số liệu kiểm thử hiệu năng, độ trễ và khả năng chịu tải của các dự án.', en: 'Aggregate performance telemetry, latency benchmarks, and stress test metrics across all projects.' } },
      { day: 'Tue', task: { vi: 'Hoàn thiện tài liệu bàn giao kỹ thuật (Runbooks) và lưu trữ mã nguồn lên GitHub.', en: 'Finalize technical runbooks and push well-documented code repositories to GitHub.' } },
      { day: 'Wed', task: { vi: 'Tập dượt thuyết trình cùng các thành viên nhóm Cloud Sentinel Team dưới sự hướng dẫn của Mentor.', en: 'Conduct capstone defense dry run with Cloud Sentinel Team under mentor supervision.' } },
      { day: 'Thu', task: { vi: 'Bảo vệ chính thức Capstone Project trước hội đồng AWS First Cloud AI Journey 2026.', en: 'Formal capstone defense presentation before the AWS FCAJ 2026 evaluation board.' } },
      { day: 'Fri', task: { vi: 'Tham gia lễ bế mạc, nhận chứng nhận tốt nghiệp và tổng kết hành trình thực tập.', en: 'Attend FCAJ graduation ceremony, receive program certification, and celebrate team milestone.' } },
    ],
    screenshot: null,
    screenshotCaption: { vi: 'Hình ảnh nhóm Cloud Sentinel Team bảo vệ Capstone Project tại FCAJ 2026', en: 'Cloud Sentinel Team capstone presentation and graduation milestone celebration' },
  },
];
