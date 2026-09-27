// ============================================================
// PROJECTS DATA — Phan Nhật Uyên
// 4 Key Engineering & Security Projects for FCAJ 2026
// ============================================================

export const projectsData = [
  // ──────────────────────────────────────────────────────────
  // PROJECT 1: FCAJ Cloud Labs
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-1',
    code:  'FCAJ-SEC-01',
    title: {
      vi: 'FCAJ Cloud Labs: Kiến Trúc Đám Mây Đa Tầng An Toàn',
      en: 'FCAJ Cloud Labs: Secure Multi-Tier Cloud Architecture',
    },
    subtitle: {
      vi: 'Thiết kế hạ tầng doanh nghiệp 3 tầng phân tán đạt chuẩn AWS Well-Architected',
      en: 'Enterprise 3-tier distributed cloud deployment adhering to AWS Well-Architected Framework',
    },
    shortDescription: {
      vi: 'Hạ tầng đám mây toàn diện được xây dựng trên AWS với mạng ảo VPC đa vùng (Multi-AZ), phân tách ranh giới mạng nghiêm ngặt giữa tầng Web, Application và Database. Tích hợp WAF chống tấn công lớp 7, cơ chế mở rộng tự động Auto Scaling và mã hóa toàn bộ dữ liệu với AWS KMS.',
      en: 'A comprehensive AWS enterprise infrastructure spanning multiple Availability Zones with strict network segmentation across Web, Application, and Database tiers. Features AWS WAF layer-7 mitigation, Auto Scaling compute elasticity, and holistic AWS KMS envelope encryption.',
    },
    longDescription: {
      vi: 'Dự án cốt lõi trong chương trình FCAJ 2026 nhằm chứng minh khả năng thiết kế hệ thống có tính sẵn sàng cao (High Availability) và khả năng chịu lỗi (Fault Tolerance). Hệ thống sử dụng Application Load Balancer để phân phối tải đến các cụm EC2 nằm trong Private Subnet, không mở IP public. Mọi truy cập quản trị hệ thống đều được thực hiện thông qua AWS Systems Manager Session Manager, loại bỏ hoàn toàn rủi ro từ việc mở port 22 SSH ra ngoài Internet.',
      en: 'The capstone architecture project of the FCAJ 2026 program demonstrating high availability and resilient fault tolerance. Employs Application Load Balancers distributing incoming traffic to compute EC2 instances residing solely within private subnets without public IPs. Administrative access is orchestrated entirely via AWS Systems Manager Session Manager, eliminating public SSH port exposure.',
    },
    technologies: [
      'AWS VPC',
      'Amazon EC2',
      'Auto Scaling',
      'Application Load Balancer',
      'AWS WAF',
      'AWS KMS',
      'Amazon RDS Multi-AZ',
      'Amazon CloudWatch',
      'AWS Systems Manager',
    ],
    features: [
      {
        vi: 'Mạng ảo Multi-AZ với 6 subnets phân bổ qua 2 Availability Zones, dự phòng NAT Gateway độc lập.',
        en: 'Multi-AZ VPC architecture across dual Availability Zones with resilient, redundant NAT Gateways.',
      },
      {
        vi: 'Lớp bảo vệ tường lửa AWS WAF chống SQL Injection, Cross-Site Scripting (XSS) và IP rate-limiting.',
        en: 'Perimeter protection with AWS WAF blocking SQLi, XSS, and automated volumetric IP rate-limiting.',
      },
      {
        vi: 'Mã hóa dữ liệu tại chỗ (Data-at-rest) với AWS KMS Customer Managed Keys cho cả S3, EBS và RDS.',
        en: 'Data-at-rest encryption powered by AWS KMS Customer Managed Keys across S3, EBS, and RDS databases.',
      },
      {
        vi: 'Hệ thống giám sát thời gian thực với CloudWatch Alarms và tự động thông báo qua Amazon SNS.',
        en: 'Real-time observability with CloudWatch Metrics, synthetic canaries, and automated SNS alerting.',
      },
    ],
    metrics: [
      { label: { vi: 'Độ sẵn sàng SLA', en: 'Uptime SLA' }, value: '99.99%' },
      { label: { vi: 'Tỷ lệ mã hóa dữ liệu', en: 'Encrypted Data' }, value: '100%' },
      { label: { vi: 'Cổng SSH Public', en: 'Public SSH Ports' }, value: '0 (Zero)' },
    ],
    category:   'Cloud Security',
    status:     'Completed',
    timeline:   'FCAJ 2026 · Tuần 1 – 6',
    badgeColor: '#CDB4DB',
    image: null,
    imageCaption: {
      vi: 'Sơ đồ kiến trúc Multi-tier VPC và luồng lưu lượng bảo mật trên AWS',
      en: 'Multi-tier VPC architecture topology and secure traffic flow on AWS',
    },
    githubUrl: 'https://github.com/NhatUyen2409/web-worklog-fcaj',
  },

  // ──────────────────────────────────────────────────────────
  // PROJECT 2: OSP201 SSH Security
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-2',
    code:  'OSP-201-SSH',
    title: {
      vi: 'OSP201: Tăng Cường Bảo Mật SSH & Tự Động Ngăn Chặn Brute-Force',
      en: 'OSP201: SSH Hardening & Automated Brute-Force Defense',
    },
    subtitle: {
      vi: 'Gia cố an ninh máy chủ Linux, xác thực khóa công khai Ed25519 và tích hợp Fail2ban',
      en: 'Linux server hardening, Ed25519 public key authentication, and automated Fail2ban defense',
    },
    shortDescription: {
      vi: 'Dự án an ninh hệ điều hành tập trung vào việc gia cố (hardening) dịch vụ OpenSSH trên Linux Ubuntu Server. Loại bỏ hoàn toàn phương thức xác thực bằng mật khẩu truyền thống, thiết lập xác thực đa yếu tố (MFA/Google Authenticator), và triển khai Fail2ban để tự động cô lập địa chỉ IP quét cổng trái phép.',
      en: 'Operating system hardening project dedicated to fortifying OpenSSH on Ubuntu Server instances. Eliminates legacy password authentication in favor of Ed25519 cryptographic key pairs, enforces Multi-Factor Authentication (MFA), and deploys Fail2ban to ban aggressive port-scanning and brute-force actors.',
    },
    longDescription: {
      vi: 'Trong môi trường điện toán đám mây công cộng, máy chủ Linux thường xuyên phải hứng chịu hàng ngàn cuộc tấn công dò mật khẩu tự động mỗi ngày. Dự án này thiết lập cấu hình sshd_config chuẩn CIS Benchmark, thay đổi cổng dịch vụ mặc định, giới hạn người dùng được phép đăng nhập (AllowUsers), cấu hình tường lửa UFW chặt chẽ và ghi log chi tiết mọi phiên đăng nhập để điều tra số hóa (Digital Forensics).',
      en: 'In public cloud environments, Linux servers encounter tens of thousands of automated brute-force attempts daily. This project implements CIS Benchmark-aligned sshd_config hardening, non-default ports, strict AllowUsers white-listing, granular UFW firewall rules, and centralized audit logging for digital forensic readiness.',
    },
    technologies: [
      'Linux Ubuntu Server',
      'OpenSSH Server',
      'Fail2ban',
      'Ed25519 Keys',
      'Google Authenticator PAM',
      'UFW / iptables',
      'Bash Scripting',
      'Syslog / Auditd',
    ],
    features: [
      {
        vi: 'Xác thực bắt buộc 2 lớp: Yêu cầu đồng thời Ed25519 Key và mã OTP từ ứng dụng di động.',
        en: 'Two-factor enforcement: Mandates both private cryptographic key and time-based OTP token.',
      },
      {
        vi: 'Tự động khóa IP (Fail2ban Jails): Chặn vĩnh viễn IP thử sai quá 3 lần trong vòng 10 phút.',
        en: 'Automated IP Jails via Fail2ban: Temporarily and permanently blacklists IPs exceeding threshold.',
      },
      {
        vi: 'Tập lệnh Bash tự động kiểm tra tính tuân thủ bảo mật và gửi báo cáo tóm tắt hàng ngày.',
        en: 'Automated Bash auditing script verifying CIS benchmark compliance and emailing daily digests.',
      },
      {
        vi: 'Bảo vệ chống Man-in-the-Middle bằng cách tối ưu hóa danh sách HostKeyAlgorithms và Ciphers.',
        en: 'Mitigates MitM attacks by strictly disabling obsolete SSH ciphers and insecure MAC algorithms.',
      },
    ],
    metrics: [
      { label: { vi: 'Tỷ lệ chặn Brute-Force', en: 'Brute-force Block' }, value: '100%' },
      { label: { vi: 'Thời gian phản ứng', en: 'Reaction Time' }, value: '< 2.5s' },
      { label: { vi: 'Điểm chuẩn CIS Benchmark', en: 'CIS Score' }, value: '98/100' },
    ],
    category:   'System Hardening',
    status:     'Completed',
    timeline:   'FPT Coursework · OSP201',
    badgeColor: '#A2D2FF',
    image: null,
    imageCaption: {
      vi: 'Giao diện giám sát Fail2ban và biểu đồ các cuộc tấn công SSH bị ngăn chặn',
      en: 'Fail2ban monitoring telemetry and visualization of blocked brute-force attempts',
    },
    githubUrl: 'https://github.com/NhatUyen2409/web-worklog-fcaj',
  },

  // ──────────────────────────────────────────────────────────
  // PROJECT 3: IAM302T GPS Spoofing Detection
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-3',
    code:  'IAM-302-GPS',
    title: {
      vi: 'IAM302T: Phát Hiện Tấn Công Giả Mạo Tín Hiệu GPS',
      en: 'IAM302T: GPS Spoofing Detection & Telemetry Anomaly Analysis',
    },
    subtitle: {
      vi: 'Phân tích bất thường dữ liệu viễn trắc NMEA và phát hiện tấn công GPS thời gian thực',
      en: 'Real-time telemetry anomaly detection and physical attack identification for GPS/NMEA sensors',
    },
    shortDescription: {
      vi: 'Nghiên cứu an toàn thông tin phần cứng và IoT chuyên sâu về các kỹ thuật giả mạo tín hiệu GPS (GPS Spoofing). Xây dựng thuật toán phân tích chuỗi thời gian dữ liệu NMEA (gồm vận tốc, gia tốc, độ lệch đồng hồ Doppler và tỷ lệ tín hiệu trên nhiễu SNR) để phát hiện và cảnh báo vị trí giả lập tức thì.',
      en: 'Hardware and IoT security research analyzing synthetic GPS spoofing vectors. Developed a statistical time-series pipeline analyzing NMEA sentence streams (velocity changes, Doppler clock drift, pseudorange variance, and SNR ratios) to immediately detect and flag spoofed location feeds.',
    },
    longDescription: {
      vi: 'Các phương tiện tự hành và thiết bị bay không người lái (UAV) phụ thuộc rất lớn vào tín hiệu định vị GPS không được mã hóa từ vệ tinh dân sự. Dự án này xây dựng mô hình phát hiện dựa trên các chỉ số vật lý khả thi (Physics-based validation): Khi kẻ tấn công phát tín hiệu giả mạo công suất cao, tỷ lệ SNR tăng đột biến và gia tốc thay đổi bất thường sẽ kích hoạt cảnh báo, chuyển thiết bị sang chế độ định vị quán tính (Dead Reckoning).',
      en: 'Autonomous systems and IoT edge nodes rely heavily on unencrypted civilian satellite signals. This project implements a physics-based telemetry validator: when an adversarial transmitter broadcasts high-power counterfeit signals, sudden SNR spikes and kinematic inconsistencies trigger immediate failsafe isolation and fallback to dead reckoning.',
    },
    technologies: [
      'Python',
      'Scapy & Socket',
      'NMEA 0183 Protocol',
      'NumPy / SciPy',
      'AWS IoT Core',
      'Amazon DynamoDB',
      'Matplotlib Visualization',
      'Time-Series Analysis',
    ],
    features: [
      {
        vi: 'Thuật toán kiểm định động học (Kinematic consistency check) phát hiện bước nhảy tọa độ bất khả thi.',
        en: 'Kinematic consistency algorithm detecting physically impossible instantaneous coordinate jumps.',
      },
      {
        vi: 'Giám sát tỷ lệ SNR (Signal-to-Noise Ratio) của từng chòm sao vệ tinh để nhận diện máy phát công suất cao.',
        en: 'Per-satellite SNR monitoring identifying anomalous signal power disparities indicative of spoofers.',
      },
      {
        vi: 'Đẩy dữ liệu cảnh báo lên AWS IoT Core và lưu trữ dữ liệu viễn trắc vào Amazon DynamoDB.',
        en: 'Dispatches real-time security alerts to AWS IoT Core and persists telemetry into Amazon DynamoDB.',
      },
      {
        vi: 'Bảng điều khiển trực quan hóa quỹ đạo thực tế so với quỹ đạo bị giả mạo theo thời gian thực.',
        en: 'Interactive dashboard visualizing ground-truth trajectory versus hijacked coordinates in real time.',
      },
    ],
    metrics: [
      { label: { vi: 'Độ chính xác phát hiện', en: 'Detection Accuracy' }, value: '97.4%' },
      { label: { vi: 'Độ trễ cảnh báo', en: 'Alert Latency' }, value: '< 450ms' },
      { label: { vi: 'Tỷ lệ báo động giả', en: 'False Alarm Rate' }, value: '< 1.8%' },
    ],
    category:   'IoT & Wireless Security',
    status:     'Completed',
    timeline:   'FPT Coursework · IAM302T',
    badgeColor: '#FFC8DD',
    image: null,
    imageCaption: {
      vi: 'Biểu đồ phân tích độ lệch SNR và bản đồ phát hiện tín hiệu GPS giả mạo',
      en: 'SNR deviation analysis graph and live GPS spoofing detection telemetry map',
    },
    githubUrl: 'https://github.com/NhatUyen2409/web-worklog-fcaj',
  },

  // ──────────────────────────────────────────────────────────
  // PROJECT 4: IAO202 DDoS Analysis
  // ──────────────────────────────────────────────────────────
  {
    id:    'project-4',
    code:  'IAO-202-DOS',
    title: {
      vi: 'IAO202: Phân Tích & Giảm Thiểu Tấn Công Từ Chối Dịch Vụ (DDoS)',
      en: 'IAO202: Volumetric & Application-Layer DDoS Defense Analysis',
    },
    subtitle: {
      vi: 'Mô phỏng tấn công mạng quy mô lớn và xây dựng chiến lược phòng thủ đa tầng với AWS Shield & WAF',
      en: 'Simulating large-scale cyber attacks and architecting defense-in-depth with AWS Shield & WAF',
    },
    shortDescription: {
      vi: 'Nghiên cứu toàn diện về cơ chế hoạt động của các cuộc tấn công DDoS ở tầng giao vận (SYN Flood, UDP Reflection) và tầng ứng dụng (HTTP Flood, Slowloris). Sử dụng Wireshark và Python để phân tích gói tin, đồng thời triển khai mô hình giảm thiểu đa tầng kết hợp AWS Shield, CloudFront và AWS WAF Rules.',
      en: 'A comprehensive study on volumetric transport-layer DDoS (SYN Flood, UDP Reflection) and application-layer exhaustion attacks (HTTP Flood, Slowloris). Combines deep Wireshark packet dissection with Python automation, deploying a layered mitigation strategy using AWS Shield, CloudFront, and AWS WAF rate-limiting.',
    },
    longDescription: {
      vi: 'Tấn công từ chối dịch vụ phân tán vẫn là mối đe dọa hàng đầu đối với tính khả dụng của các dịch vụ trực tuyến. Trong dự án này, một môi trường lab an toàn được thiết lập để mô phỏng lưu lượng tấn công lên tới 50,000 requests/giây. Thông qua việc phân tích đặc trưng luồng gói tin (Packet Flow Analysis), nhóm đã tối ưu hóa các quy tắc iptables, cấu hình SYN Cookies trên Linux kernel và áp dụng AWS WAF Token Inspection để chặn đứng botnet mà không ảnh hưởng đến người dùng thực.',
      en: 'Distributed Denial of Service remains a paramount threat to web service availability. In this project, an isolated sandbox simulated attack volumes exceeding 50,000 req/s. Through statistical flow fingerprinting, we tuned Linux kernel SYN cookies, iptables rate limiting, and configured AWS WAF managed rulesets with challenge tokens to eliminate botnet floods with zero legitimate user friction.',
    },
    technologies: [
      'Wireshark',
      'Python Scapy',
      'AWS Shield Standard',
      'AWS WAF',
      'Amazon CloudFront',
      'Linux iptables / ipset',
      'TCP SYN Cookies',
      'Snort IDS / Suricata',
    ],
    features: [
      {
        vi: 'Phân loại mẫu lưu lượng tấn công thời gian thực (Traffic Fingerprinting) dựa trên entropy gói tin.',
        en: 'Real-time traffic fingerprinting classifying attack profiles based on packet payload entropy.',
      },
      {
        vi: 'Quy tắc AWS WAF Rate-Based tự động phong tỏa các dải địa chỉ IP có hành vi cào dữ liệu hoặc spam HTTP.',
        en: 'AWS WAF rate-based rules automatically banning suspicious CIDR ranges sending aberrant HTTP floods.',
      },
      {
        vi: 'Tinh chỉnh nhân Linux (Kernel Hardening) tăng kích thước backlog queue và bật tcp_syncookies.',
        en: 'Linux kernel network tuning: optimizing TCP backlog queues, reducing timeouts, and enabling syncookies.',
      },
      {
        vi: 'Phân tích mẫu gói tin với Wireshark để trích xuất chữ ký tấn công (Attack Signature) đưa vào IDS Snort.',
        en: 'Packet dissection with Wireshark extracting novel attack signatures to generate custom Snort IDS rules.',
      },
    ],
    metrics: [
      { label: { vi: 'Tỷ lệ lọc gói tin rác', en: 'Malicious Filter' }, value: '99.2%' },
      { label: { vi: 'Tải lượng thử nghiệm', en: 'Simulated Load' }, value: '50k req/s' },
      { label: { vi: 'Tác động người dùng thật', en: 'Legit User Impact' }, value: '0.0%' },
    ],
    category:   'Network Defense',
    status:     'Completed',
    timeline:   'FPT Coursework · IAO202',
    badgeColor: '#95D5B2',
    image: null,
    imageCaption: {
      vi: 'Biểu đồ phân tích lưu lượng gói tin Wireshark trước và sau khi kích hoạt lớp phòng thủ DDoS',
      en: 'Wireshark packet capture telemetry contrasting unfiltered DDoS flood versus mitigated traffic',
    },
    githubUrl: 'https://github.com/NhatUyen2409/web-worklog-fcaj',
  },
];
