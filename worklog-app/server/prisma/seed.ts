import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Helper to calculate week dates starting from Sept 1, 2026
function getWeekDates(weekNumber: number) {
  // Internship starts Sept 1, 2026 (Monday)
  const internshipStart = new Date('2026-09-01')
  const weekStart = new Date(internshipStart)
  weekStart.setDate(internshipStart.getDate() + (weekNumber - 1) * 7)
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekStart.getDate() + 6)
  return {
    startDate: weekStart.toISOString().split('T')[0],
    endDate: weekEnd.toISOString().split('T')[0],
  }
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

async function main() {
  console.log('🌱 Starting seed...')

  // ─── Clean existing data ───────────────────────────────────────────────
  await prisma.reference.deleteMany()
  await prisma.worklog.deleteMany()
  await prisma.week.deleteMany()
  await prisma.project.deleteMany()
  await prisma.user.deleteMany()

  // ─── User Profile ─────────────────────────────────────────────────────
  const user = await prisma.user.create({
    data: {
      fullName: 'Nguyen Pham Tuan Anh',
      phone: '0912345678',
      email: 'anhnguyenpham@email.com',
      studentId: 'B2100000',
      university: 'Ho Chi Minh City University of Technology and Education',
      major: 'Information Technology',
      company: 'Amazon Web Services Viet Nam Company Limited',
      position: 'Workforce Bootcamp - First Cloud AI Journey',
      internshipStartDate: '2026-09-01',
      internshipEndDate: '2026-11-28',
      class: 'AWS092026',
    },
  })
  console.log('✅ User created:', user.fullName)

  // ─── Projects ─────────────────────────────────────────────────────────
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        name: 'AWS Cloud Foundation',
        description: 'Learn and practice fundamental AWS services: EC2, S3, VPC, IAM, RDS, Lambda',
        status: 'COMPLETED',
        progress: 100,
        startDate: '2026-09-01',
        endDate: '2026-09-28',
        totalHours: 120,
        color: '#4F46E5',
      },
    }),
    prisma.project.create({
      data: {
        name: 'Security & Compliance',
        description: 'AWS Security services: IAM advanced, KMS, CloudTrail, GuardDuty, Security Hub',
        status: 'COMPLETED',
        progress: 100,
        startDate: '2026-09-29',
        endDate: '2026-10-19',
        totalHours: 85,
        color: '#DC2626',
      },
    }),
    prisma.project.create({
      data: {
        name: 'DevOps & Automation',
        description: 'CI/CD Pipeline, CloudFormation, CodePipeline, CodeDeploy, Terraform',
        status: 'IN_PROGRESS',
        progress: 70,
        startDate: '2026-10-20',
        endDate: '2026-11-09',
        totalHours: 60,
        color: '#059669',
      },
    }),
    prisma.project.create({
      data: {
        name: 'Final Workshop Report',
        description: 'Prepare and write comprehensive internship and workshop report',
        status: 'IN_PROGRESS',
        progress: 40,
        startDate: '2026-11-10',
        endDate: '2026-11-28',
        totalHours: 20,
        color: '#D97706',
      },
    }),
  ])
  console.log('✅ Projects created:', projects.length)

  // ─── Week data ────────────────────────────────────────────────────────
  const weeksData = [
    {
      weekNumber: 1,
      status: 'COMPLETED' as const,
      progress: 100,
      totalHours: 38.5,
      summaryEnglish: `During Week 1, I successfully oriented myself within the First Cloud AI Journey program and gained foundational knowledge of AWS cloud computing. I set up my development environment, created an AWS Free Tier account, and familiarized myself with the AWS Management Console and CLI. The week focused on understanding core AWS service categories including Compute, Storage, Networking, and Database. I also established daily work habits and began building a systematic approach to learning cloud technologies.`,
      summaryVietnamese: `Trong tuần 1, tôi đã định hướng thành công trong chương trình First Cloud AI Journey và có được kiến thức nền tảng về điện toán đám mây AWS. Tôi thiết lập môi trường phát triển, tạo tài khoản AWS Free Tier và làm quen với AWS Management Console và CLI. Tuần học tập trung vào việc hiểu các nhóm dịch vụ AWS cốt lõi bao gồm Compute, Storage, Networking và Database. Tôi cũng thiết lập thói quen làm việc hằng ngày và bắt đầu xây dựng phương pháp học công nghệ đám mây một cách có hệ thống.`,
    },
    {
      weekNumber: 2,
      status: 'COMPLETED' as const,
      progress: 100,
      totalHours: 40,
      summaryEnglish: `Week 2 was dedicated to deep-diving into Amazon EC2 and related services. I learned about instance types, AMIs, EBS volumes, and various connection methods. By the end of the week, I could confidently launch, configure, and manage EC2 instances. I also explored Auto Scaling Groups and Elastic Load Balancers, understanding their roles in building resilient architectures.`,
      summaryVietnamese: `Tuần 2 tập trung đào sâu vào Amazon EC2 và các dịch vụ liên quan. Tôi học về các loại instance, AMI, EBS volumes và các phương thức kết nối khác nhau. Đến cuối tuần, tôi có thể tự tin khởi chạy, cấu hình và quản lý EC2 instances. Tôi cũng khám phá Auto Scaling Groups và Elastic Load Balancers, hiểu vai trò của chúng trong việc xây dựng kiến trúc có tính đàn hồi cao.`,
    },
    {
      weekNumber: 3,
      status: 'COMPLETED' as const,
      progress: 100,
      totalHours: 39,
      summaryEnglish: `Week 3 focused on Amazon S3 and storage solutions. I mastered S3 bucket configuration, object lifecycle policies, versioning, and cross-region replication. I also learned about storage classes (Standard, IA, Glacier) for cost optimization. Additionally, I began exploring CloudFront CDN integration with S3 for global content delivery.`,
      summaryVietnamese: `Tuần 3 tập trung vào Amazon S3 và các giải pháp lưu trữ. Tôi thành thạo cấu hình S3 bucket, chính sách lifecycle object, versioning và cross-region replication. Tôi cũng học về các storage class (Standard, IA, Glacier) để tối ưu chi phí. Ngoài ra, tôi bắt đầu khám phá tích hợp CloudFront CDN với S3 để phân phối nội dung toàn cầu.`,
    },
    {
      weekNumber: 4,
      status: 'COMPLETED' as const,
      progress: 100,
      totalHours: 41,
      summaryEnglish: `Week 4 was intensive networking week. I thoroughly studied Amazon VPC architecture including subnets, route tables, Internet Gateways, NAT Gateways, and VPC peering. I designed and implemented a multi-tier network architecture with public and private subnets. Understanding Security Groups vs NACLs was a key milestone this week.`,
      summaryVietnamese: `Tuần 4 là tuần học về networking chuyên sâu. Tôi nghiên cứu kỹ kiến trúc Amazon VPC bao gồm subnets, route tables, Internet Gateways, NAT Gateways và VPC peering. Tôi thiết kế và triển khai kiến trúc mạng nhiều tầng với public và private subnets. Hiểu sự khác biệt giữa Security Groups và NACLs là một cột mốc quan trọng trong tuần này.`,
    },
    {
      weekNumber: 5,
      status: 'COMPLETED' as const,
      progress: 100,
      totalHours: 38,
      summaryEnglish: `Week 5 centered on AWS database services, primarily RDS and DynamoDB. I learned to set up Multi-AZ RDS deployments for high availability and Read Replicas for performance. I also explored DynamoDB's NoSQL model, partition keys, and Global Tables. The week concluded with hands-on practice setting up a complete LAMP stack on EC2 with RDS backend.`,
      summaryVietnamese: `Tuần 5 tập trung vào các dịch vụ database AWS, chủ yếu là RDS và DynamoDB. Tôi học cách thiết lập Multi-AZ RDS để đảm bảo tính sẵn sàng cao và Read Replicas để tăng hiệu suất. Tôi cũng khám phá mô hình NoSQL của DynamoDB, partition keys và Global Tables. Tuần kết thúc với thực hành thiết lập LAMP stack đầy đủ trên EC2 với backend RDS.`,
    },
    {
      weekNumber: 6,
      status: 'COMPLETED' as const,
      progress: 100,
      totalHours: 37.5,
      summaryEnglish: `Week 6 covered IAM security fundamentals in depth. I practiced creating fine-grained IAM policies, roles, and permission boundaries. I learned about AWS Organizations, Service Control Policies (SCPs), and multi-account strategies. The week also introduced AWS SSO (Identity Center) for centralized access management across multiple AWS accounts.`,
      summaryVietnamese: `Tuần 6 bao gồm các nguyên tắc bảo mật IAM chuyên sâu. Tôi thực hành tạo IAM policies chi tiết, roles và permission boundaries. Tôi học về AWS Organizations, Service Control Policies (SCPs) và các chiến lược multi-account. Tuần cũng giới thiệu AWS SSO (Identity Center) để quản lý truy cập tập trung cho nhiều tài khoản AWS.`,
    },
    {
      weekNumber: 7,
      status: 'IN_PROGRESS' as const,
      progress: 70,
      totalHours: 28,
      summaryEnglish: `Week 7 (ongoing): Focusing on advanced security services including AWS KMS for encryption key management, CloudTrail for audit logging, and GuardDuty for threat detection. I am currently working on implementing encryption at rest and in transit for a complete application stack.`,
      summaryVietnamese: `Tuần 7 (đang tiến hành): Tập trung vào các dịch vụ bảo mật nâng cao bao gồm AWS KMS để quản lý khóa mã hóa, CloudTrail để ghi audit log và GuardDuty để phát hiện mối đe dọa. Tôi đang triển khai mã hóa at rest và in transit cho một application stack hoàn chỉnh.`,
    },
    {
      weekNumber: 8,
      status: 'NOT_STARTED' as const,
      progress: 0,
      totalHours: 0,
      summaryEnglish: '',
      summaryVietnamese: '',
    },
    {
      weekNumber: 9,
      status: 'NOT_STARTED' as const,
      progress: 0,
      totalHours: 0,
      summaryEnglish: '',
      summaryVietnamese: '',
    },
    {
      weekNumber: 10,
      status: 'NOT_STARTED' as const,
      progress: 0,
      totalHours: 0,
      summaryEnglish: '',
      summaryVietnamese: '',
    },
    {
      weekNumber: 11,
      status: 'NOT_STARTED' as const,
      progress: 0,
      totalHours: 0,
      summaryEnglish: '',
      summaryVietnamese: '',
    },
    {
      weekNumber: 12,
      status: 'NOT_STARTED' as const,
      progress: 0,
      totalHours: 0,
      summaryEnglish: '',
      summaryVietnamese: '',
    },
  ]

  const weeks: Record<number, { id: string }> = {}
  for (const wData of weeksData) {
    const dates = getWeekDates(wData.weekNumber)
    const week = await prisma.week.create({
      data: {
        weekNumber: wData.weekNumber,
        startDate: dates.startDate,
        endDate: dates.endDate,
        status: wData.status,
        progress: wData.progress,
        totalHours: wData.totalHours,
        summaryEnglish: wData.summaryEnglish,
        summaryVietnamese: wData.summaryVietnamese,
      },
    })
    weeks[wData.weekNumber] = week
  }
  console.log('✅ 12 weeks created')

  // ─── Week 1 Worklogs ──────────────────────────────────────────────────
  const w1 = weeks[1].id
  const w1Logs = await Promise.all([
    prisma.worklog.create({
      data: {
        weekId: w1, projectId: projects[0].id,
        date: '2026-09-01', startTime: '08:00', endTime: '12:00', duration: 4,
        title: 'Program orientation & team introductions',
        description: 'Attended the program kickoff meeting, got introduced to team members and mentors. Read through all internship rules, regulations, and code of conduct documents. Set up communication channels (Slack, email).',
        result: 'Successfully onboarded into the FCAJ program. All communication channels configured. Internship schedule and goals are clear.',
        status: 'COMPLETED', category: 'MEETING',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w1, projectId: projects[0].id,
        date: '2026-09-02', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'AWS Cloud Fundamentals - Overview of AWS Services',
        description: 'Studied AWS cloud computing concepts: on-demand delivery, pay-as-you-go pricing. Explored AWS service categories: Compute, Storage, Networking, Database, Security, AI/ML. Watched AWS skill builder courses and took notes.',
        result: 'Gained solid understanding of cloud computing paradigm and AWS service portfolio. Created summary notes on 20+ AWS services.',
        status: 'COMPLETED', category: 'TRAINING',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w1, projectId: projects[0].id,
        date: '2026-09-03', startTime: '08:30', endTime: '17:00', duration: 7.5,
        title: 'AWS Account Setup & Console/CLI Configuration',
        description: 'Created AWS Free Tier account. Set up MFA on root account. Created first IAM admin user. Installed and configured AWS CLI v2 on local machine. Configured AWS credentials (Access Key, Secret Key, default region ap-southeast-1).',
        result: 'AWS account fully secured with MFA. AWS CLI configured and verified. Successfully ran first CLI commands to list regions and EC2 instances.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w1, projectId: projects[0].id,
        date: '2026-09-04', startTime: '08:30', endTime: '17:30', duration: 8.5,
        title: 'EC2 Introduction - Instance Types, AMI, EBS',
        description: 'Studied EC2 instance types: General Purpose, Compute Optimized, Memory Optimized, Storage Optimized. Understood AMI concepts (Amazon Machine Image). Learned about EBS volume types: gp3, io1, st1, sc1. Studied pricing models: On-Demand, Reserved, Spot.',
        result: 'Can explain differences between EC2 instance families. Understand EBS volume selection criteria. Created comparison table of pricing models.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w1, projectId: projects[0].id,
        date: '2026-09-05', startTime: '08:30', endTime: '18:00', duration: 9,
        title: 'EC2 Hands-on: Launch, Connect via SSH, EBS Attach',
        description: 'Launched first EC2 instance (t3.micro, Amazon Linux 2023, Singapore region). Created key pair and security group. Connected via SSH from local machine. Attached and mounted EBS volume. Installed Apache web server. Tested with Elastic IP.',
        result: 'Successfully launched and configured EC2 instance. Web server running and accessible via public IP. EBS volume attached and formatted. Documented complete step-by-step guide.',
        status: 'COMPLETED', category: 'DEVELOPMENT',
      },
    }),
  ])
  console.log('✅ Week 1 worklogs created:', w1Logs.length)

  // Week 1 References
  await Promise.all([
    prisma.reference.create({ data: { title: 'AWS Cloud Practitioner Essentials', url: 'https://cloudjourney.awsstudygroup.com/', source: 'AWS Study Group', category: 'Cloud Computing', description: 'Comprehensive AWS fundamentals course for beginners', accessDate: '2026-09-02', weekId: w1, worklogId: w1Logs[1].id } }),
    prisma.reference.create({ data: { title: 'AWS Free Tier Overview', url: 'https://aws.amazon.com/free/', source: 'AWS Documentation', category: 'Cloud Computing', description: 'Overview of free tier services and limitations', accessDate: '2026-09-03', weekId: w1, worklogId: w1Logs[2].id } }),
    prisma.reference.create({ data: { title: 'AWS CLI Installation Guide', url: 'https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html', source: 'AWS Documentation', category: 'DevOps', description: 'Step-by-step guide to install and configure AWS CLI v2', accessDate: '2026-09-03', weekId: w1, worklogId: w1Logs[2].id } }),
    prisma.reference.create({ data: { title: 'Amazon EC2 Instance Types', url: 'https://aws.amazon.com/ec2/instance-types/', source: 'AWS Documentation', category: 'Cloud Computing', description: 'Complete list of EC2 instance types with specs and use cases', accessDate: '2026-09-04', weekId: w1, worklogId: w1Logs[3].id } }),
    prisma.reference.create({ data: { title: 'EC2 Getting Started Workshop', url: 'https://workshops.aws/card/ec2', source: 'AWS Workshops', category: 'Cloud Computing', description: 'Hands-on workshop for EC2 fundamentals', accessDate: '2026-09-05', weekId: w1, worklogId: w1Logs[4].id } }),
  ])

  // ─── Week 2 Worklogs ──────────────────────────────────────────────────
  const w2 = weeks[2].id
  const w2Logs = await Promise.all([
    prisma.worklog.create({
      data: {
        weekId: w2, projectId: projects[0].id,
        date: '2026-09-08', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'EC2 Auto Scaling Groups - Theory & Configuration',
        description: 'Studied Auto Scaling Groups (ASG) concepts: launch templates, scaling policies (target tracking, step, simple). Understood health checks (EC2 vs ELB). Configured warm pools for faster scaling. Practiced creating ASG with CloudWatch alarms.',
        result: 'Created functional ASG with min:1, max:5, desired:2 instances. Scaling triggers working based on CPU utilization. CloudWatch alarms properly configured.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w2, projectId: projects[0].id,
        date: '2026-09-09', startTime: '08:30', endTime: '17:00', duration: 7.5,
        title: 'Elastic Load Balancing - ALB Configuration',
        description: 'Studied ELB types: ALB, NLB, GLB. Configured Application Load Balancer with target groups, listeners, and routing rules. Set up path-based routing for microservices. Configured health checks and sticky sessions.',
        result: 'ALB successfully routing traffic to 2 EC2 instances. Path-based routing /api/* and /web/* working correctly. Health checks passing.',
        status: 'COMPLETED', category: 'NETWORKING',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w2, projectId: projects[0].id,
        date: '2026-09-10', startTime: '08:30', endTime: '18:00', duration: 8.5,
        title: 'EC2 Advanced: User Data, Metadata, Placement Groups',
        description: 'Practiced EC2 User Data scripts for automated setup on launch. Studied Instance Metadata Service (IMDS). Learned about placement groups: Cluster, Spread, Partition. Explored EC2 Image Builder for AMI automation.',
        result: 'EC2 User Data script successfully installs Nginx and deploys sample app on launch. Created custom AMI from running instance. Documented placement group use cases.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w2, projectId: projects[0].id,
        date: '2026-09-11', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'AWS CloudWatch - Monitoring & Alarms',
        description: 'Set up CloudWatch dashboards for EC2 monitoring. Created custom metrics and log groups. Configured metric alarms for CPU, memory, disk. Studied CloudWatch Logs Insights for log querying. Set up SNS notifications for alarm state changes.',
        result: 'CloudWatch dashboard displaying 8 key metrics. CPU alarm triggers correctly at 80% threshold. SNS email notification received when alarm fires.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w2, projectId: projects[0].id,
        date: '2026-09-12', startTime: '08:30', endTime: '17:00', duration: 8,
        title: 'Week 2 Review & Documentation',
        description: 'Reviewed all Week 2 concepts: ASG, ELB, CloudWatch. Wrote detailed technical documentation for each service. Created architecture diagrams. Prepared Q&A summary. Began reading about Amazon S3 for Week 3.',
        result: 'Complete technical documentation for Week 2 (15 pages). Architecture diagrams created in draw.io. All Week 2 objectives achieved ahead of schedule.',
        status: 'COMPLETED', category: 'DOCUMENTATION',
      },
    }),
  ])

  await Promise.all([
    prisma.reference.create({ data: { title: 'Auto Scaling User Guide', url: 'https://docs.aws.amazon.com/autoscaling/ec2/userguide/', source: 'AWS Documentation', category: 'Cloud Computing', accessDate: '2026-09-08', weekId: w2, worklogId: w2Logs[0].id, description: 'Complete guide for EC2 Auto Scaling configuration' } }),
    prisma.reference.create({ data: { title: 'Application Load Balancer Docs', url: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/application/', source: 'AWS Documentation', category: 'Networking', accessDate: '2026-09-09', weekId: w2, worklogId: w2Logs[1].id, description: 'ALB configuration and routing rules documentation' } }),
    prisma.reference.create({ data: { title: 'Amazon CloudWatch Getting Started', url: 'https://docs.aws.amazon.com/cloudwatch/index.html', source: 'AWS Documentation', category: 'Monitoring', accessDate: '2026-09-11', weekId: w2, worklogId: w2Logs[3].id, description: 'CloudWatch monitoring, alarms and dashboards guide' } }),
  ])
  console.log('✅ Week 2 worklogs created')

  // ─── Week 3 Worklogs ──────────────────────────────────────────────────
  const w3 = weeks[3].id
  const w3Logs = await Promise.all([
    prisma.worklog.create({
      data: {
        weekId: w3, projectId: projects[0].id,
        date: '2026-09-15', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'Amazon S3 - Buckets, Objects, Permissions',
        description: 'Created S3 buckets with different configurations. Studied bucket policies vs ACLs vs CORS. Configured Block Public Access settings. Practiced presigned URLs for temporary access. Understood S3 object key naming conventions.',
        result: 'S3 bucket created with proper security configuration. Bucket policy restricting access to specific IPs. Presigned URL successfully grants 1-hour temporary access.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w3, projectId: projects[0].id,
        date: '2026-09-16', startTime: '08:30', endTime: '18:00', duration: 8.5,
        title: 'S3 Storage Classes & Lifecycle Policies',
        description: 'Studied all S3 storage classes: Standard, Standard-IA, One Zone-IA, Intelligent-Tiering, Glacier Instant, Glacier Flexible, Glacier Deep Archive. Created lifecycle policies to automatically transition objects. Calculated cost savings from tiering strategy.',
        result: 'Lifecycle policy configured: Standard → Standard-IA after 30 days → Glacier after 90 days → delete after 365 days. Estimated 60% cost reduction.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w3, projectId: projects[0].id,
        date: '2026-09-17', startTime: '08:30', endTime: '17:00', duration: 7.5,
        title: 'S3 Versioning & Cross-Region Replication',
        description: 'Enabled S3 versioning on buckets. Practiced restoring deleted objects. Configured Cross-Region Replication (CRR) from ap-southeast-1 to us-east-1. Tested replication with delete marker behavior. Set up replication rules with tag-based filtering.',
        result: 'Versioning active - deleted object restored successfully. CRR replication lag < 15 minutes. Objects tagged "archive:true" replicated to disaster recovery bucket.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w3, projectId: projects[0].id,
        date: '2026-09-18', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'Amazon CloudFront - CDN Setup with S3 Origin',
        description: 'Created CloudFront distribution with S3 origin. Configured OAC (Origin Access Control) to secure S3. Set up custom error pages. Configured cache behaviors and TTL settings. Enabled HTTPS with ACM certificate. Set up geographic restrictions.',
        result: 'CloudFront distribution serving static website globally. Page load time reduced from 2.1s to 0.4s for users in Europe. HTTPS enforced. S3 bucket no longer accessible directly.',
        status: 'COMPLETED', category: 'NETWORKING',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w3, projectId: projects[0].id,
        date: '2026-09-19', startTime: '08:30', endTime: '16:30', duration: 7,
        title: 'S3 Static Website Hosting & Week 3 Review',
        description: 'Deployed a static website to S3 with static hosting enabled. Configured index.html and error.html. Set up custom domain with Route 53. Reviewed all Week 3 learnings and wrote study notes.',
        result: 'Static website live at custom domain via CloudFront + S3. Week 3 study notes compiled (12 pages). All S3 objectives completed.',
        status: 'COMPLETED', category: 'DEVELOPMENT',
      },
    }),
  ])

  await Promise.all([
    prisma.reference.create({ data: { title: 'Amazon S3 Developer Guide', url: 'https://docs.aws.amazon.com/s3/index.html', source: 'AWS Documentation', category: 'Cloud Computing', accessDate: '2026-09-15', weekId: w3, worklogId: w3Logs[0].id, description: 'Complete S3 developer documentation' } }),
    prisma.reference.create({ data: { title: 'S3 Storage Classes Comparison', url: 'https://aws.amazon.com/s3/storage-classes/', source: 'AWS', category: 'Cloud Computing', accessDate: '2026-09-16', weekId: w3, worklogId: w3Logs[1].id, description: 'Detailed comparison of all S3 storage classes and pricing' } }),
    prisma.reference.create({ data: { title: 'CloudFront Getting Started', url: 'https://docs.aws.amazon.com/cloudfront/index.html', source: 'AWS Documentation', category: 'Networking', accessDate: '2026-09-18', weekId: w3, worklogId: w3Logs[3].id, description: 'CloudFront CDN setup and configuration guide' } }),
    prisma.reference.create({ data: { title: 'S3 Workshop - AWS', url: 'https://s3.workshop.aws/', source: 'AWS Workshops', category: 'Cloud Computing', accessDate: '2026-09-15', weekId: w3, description: 'Hands-on S3 workshop with practical exercises' } }),
  ])
  console.log('✅ Week 3 worklogs created')

  // ─── Week 4 Worklogs (VPC + Networking) ──────────────────────────────
  const w4 = weeks[4].id
  await Promise.all([
    prisma.worklog.create({
      data: {
        weekId: w4, projectId: projects[0].id,
        date: '2026-09-22', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'Amazon VPC - Architecture & Subnet Design',
        description: 'Studied VPC components: subnets (public/private), route tables, Internet Gateway, NAT Gateway. Designed multi-AZ VPC with CIDR 10.0.0.0/16. Created public subnets (10.0.1.0/24, 10.0.2.0/24) and private subnets (10.0.11.0/24, 10.0.12.0/24).',
        result: 'Custom VPC created with proper subnet segmentation. Route tables configured correctly. Public subnets route through IGW, private subnets through NAT GW.',
        status: 'COMPLETED', category: 'NETWORKING',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w4, projectId: projects[0].id,
        date: '2026-09-23', startTime: '08:30', endTime: '18:00', duration: 8.5,
        title: 'Security Groups vs NACLs - Deep Dive',
        description: 'Compared Security Groups (stateful, instance level) vs NACLs (stateless, subnet level). Created SG rules for web tier (80, 443), app tier (8080), and database tier (3306). Configured NACLs as additional layer. Tested connectivity with VPC Reachability Analyzer.',
        result: 'Three-tier security architecture implemented. Web tier accessible from internet. App tier only reachable from web tier. DB tier only reachable from app tier. Reachability analysis passed.',
        status: 'COMPLETED', category: 'SECURITY',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w4, projectId: projects[0].id,
        date: '2026-09-24', startTime: '08:30', endTime: '17:00', duration: 7.5,
        title: 'VPC Peering & Transit Gateway',
        description: 'Set up VPC Peering between two VPCs in the same region. Configured route tables for peered VPCs. Studied Transit Gateway for hub-spoke topology. Learned about VPC endpoints (Interface and Gateway types) for private AWS service access.',
        result: 'VPC Peering established and verified. Resources in VPC-A can communicate with VPC-B. S3 Gateway endpoint configured - S3 traffic no longer goes through internet.',
        status: 'COMPLETED', category: 'NETWORKING',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w4, projectId: projects[0].id,
        date: '2026-09-25', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'Three-Tier Architecture Implementation',
        description: 'Built complete three-tier architecture: ALB → EC2 web servers (public subnet) → EC2 app servers (private subnet) → RDS MySQL (private subnet). Configured all security groups and route tables. Deployed sample PHP application.',
        result: 'Three-tier app fully functional. Web tier serves HTML, app tier processes requests, RDS stores data. Architecture diagram created. No direct internet access to private resources.',
        status: 'COMPLETED', category: 'DEVELOPMENT',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w4, projectId: projects[0].id,
        date: '2026-09-26', startTime: '08:30', endTime: '17:00', duration: 9,
        title: 'AWS Route 53 - DNS & Routing Policies',
        description: 'Registered domain and configured Route 53 hosted zone. Practiced routing policies: Simple, Weighted, Latency-based, Failover, Geolocation. Set up health checks for failover routing. Configured alias records for ALB and CloudFront.',
        result: 'Custom domain routing to ALB via Route 53 alias record. Failover routing tested - traffic automatically switches to secondary region when primary fails.',
        status: 'COMPLETED', category: 'NETWORKING',
      },
    }),
  ])
  console.log('✅ Week 4 worklogs created')

  // ─── Week 5 Worklogs (Database) ───────────────────────────────────────
  const w5 = weeks[5].id
  await Promise.all([
    prisma.worklog.create({
      data: {
        weekId: w5, projectId: projects[0].id,
        date: '2026-09-29', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'Amazon RDS - Setup Multi-AZ MySQL',
        description: 'Created RDS MySQL instance with Multi-AZ enabled for high availability. Configured VPC security groups for RDS. Set up automated backups (7-day retention). Created read replica in same region. Practiced manual and automatic failover.',
        result: 'Multi-AZ RDS MySQL running. Automated failover completed in 45 seconds. Read replica syncing with < 2s replication lag. Connection from EC2 via private endpoint verified.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w5, projectId: projects[0].id,
        date: '2026-09-30', startTime: '08:30', endTime: '17:00', duration: 7.5,
        title: 'Amazon DynamoDB - NoSQL Fundamentals',
        description: 'Studied DynamoDB data model: partition key, sort key, attributes. Created tables with different key schemas. Practiced PutItem, GetItem, Query, Scan operations via Console and CLI. Explored DynamoDB Streams and Global Tables.',
        result: 'DynamoDB table created with composite key (userId + timestamp). CRUD operations working via CLI. Global Table replicating to 2 regions. DynamoDB Streams triggering Lambda function.',
        status: 'COMPLETED', category: 'CLOUD',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w5, projectId: projects[0].id,
        date: '2026-10-01', startTime: '08:30', endTime: '18:00', duration: 8.5,
        title: 'Amazon ElastiCache - Redis Caching Layer',
        description: 'Set up ElastiCache Redis cluster in private subnet. Integrated Redis caching with EC2 application. Implemented cache-aside pattern for database query results. Configured TTL and eviction policies. Measured performance improvement.',
        result: 'Redis caching reduced database load by 70%. API response time improved from 200ms to 15ms for cached queries. Cache hit ratio at 85% after warm-up period.',
        status: 'COMPLETED', category: 'DEVELOPMENT',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w5, projectId: projects[0].id,
        date: '2026-10-02', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'Complete LAMP Stack Deployment',
        description: 'Deployed full LAMP stack: EC2 (Linux + Apache + PHP 8.1) + RDS MySQL + ElastiCache Redis + S3 media storage. Configured application environment variables. Set up CloudFront for static assets. Performed load testing with Apache Bench.',
        result: 'LAMP stack handling 500 concurrent users without degradation. Static assets served via CloudFront. Database queries cached in Redis. Architecture handles 1000 req/s.',
        status: 'COMPLETED', category: 'DEVELOPMENT',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w5, projectId: projects[0].id,
        date: '2026-10-03', startTime: '08:30', endTime: '16:00', duration: 7,
        title: 'Week 5 Review & Database Architecture Design',
        description: 'Reviewed all database services learned. Designed decision tree: when to use RDS vs DynamoDB vs ElastiCache. Created cost comparison spreadsheet. Wrote technical blog post draft. Prepared for next week\'s security module.',
        result: 'Comprehensive database selection guide created. Week 5 notes finalized (14 pages). Blog post draft ready for review. All Week 5 objectives met.',
        status: 'COMPLETED', category: 'DOCUMENTATION',
      },
    }),
  ])
  console.log('✅ Week 5 worklogs created')

  // ─── Week 6 Worklogs (IAM) ───────────────────────────────────────────
  const w6 = weeks[6].id
  await Promise.all([
    prisma.worklog.create({
      data: {
        weekId: w6, projectId: projects[1].id,
        date: '2026-10-06', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'IAM Advanced - Policies, Roles, Permission Boundaries',
        description: 'Deep dive into IAM policy evaluation logic (identity-based, resource-based, SCPs, permission boundaries). Created fine-grained policies with conditions. Practiced role assumption with cross-account access. Configured permission boundaries to limit maximum permissions.',
        result: 'Least-privilege IAM policy created for EC2 management (specific resources only). Cross-account role assumption verified. Permission boundary prevents privilege escalation.',
        status: 'COMPLETED', category: 'SECURITY',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w6, projectId: projects[1].id,
        date: '2026-10-07', startTime: '08:30', endTime: '17:00', duration: 7.5,
        title: 'AWS Organizations & Service Control Policies',
        description: 'Studied AWS Organizations multi-account strategy. Created OU hierarchy: Root → Security OU → Production OU → Development OU. Applied SCPs to restrict regions and services. Practiced tag policies for cost allocation.',
        result: 'SCP blocking resource creation outside ap-southeast-1 region. Development OU cannot launch expensive instance types (>c5.xlarge). Tag policy enforces mandatory "Environment" and "Owner" tags.',
        status: 'COMPLETED', category: 'SECURITY',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w6, projectId: projects[1].id,
        date: '2026-10-08', startTime: '08:30', endTime: '18:00', duration: 8.5,
        title: 'AWS IAM Identity Center (SSO) Configuration',
        description: 'Configured IAM Identity Center for centralized SSO access. Set up permission sets for different roles (ReadOnly, PowerUser, Admin). Integrated with internal directory. Configured MFA requirements. Practiced accessing multiple accounts via SSO portal.',
        result: 'SSO portal configured. 3 permission sets created. Users can access 4 AWS accounts from single SSO login. MFA required for production account access.',
        status: 'COMPLETED', category: 'SECURITY',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w6, projectId: projects[1].id,
        date: '2026-10-09', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'IAM Security Assessment & Access Analyzer',
        description: 'Used IAM Access Analyzer to identify external access to resources. Reviewed IAM credential report. Used Trusted Advisor for security recommendations. Practiced rotating access keys. Set up AWS Config rules for IAM compliance.',
        result: 'Access Analyzer identified 3 S3 buckets with external access (1 intended, 2 misconfigurations). Config rule "root-account-mfa-enabled" passing. All IAM users now have MFA enabled.',
        status: 'COMPLETED', category: 'SECURITY',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w6, projectId: projects[1].id,
        date: '2026-10-10', startTime: '08:30', endTime: '16:30', duration: 7,
        title: 'Week 6 IAM Review & Security Best Practices',
        description: 'Compiled IAM security best practices checklist. Wrote security assessment report. Reviewed AWS Security Whitepaper. Prepared for advanced security services week.',
        result: 'IAM security checklist (25 items) created. Security assessment report written. All Week 6 IAM objectives completed successfully.',
        status: 'COMPLETED', category: 'DOCUMENTATION',
      },
    }),
  ])
  console.log('✅ Week 6 worklogs created')

  // ─── Week 7 Worklogs (Current Week - partial) ─────────────────────────
  const w7 = weeks[7].id
  await Promise.all([
    prisma.worklog.create({
      data: {
        weekId: w7, projectId: projects[1].id,
        date: '2026-09-15', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'AWS KMS - Key Management & Encryption',
        description: 'Studied AWS KMS key types: Customer Managed Keys (CMK), AWS Managed Keys, Data Keys. Practiced encrypting S3 objects with SSE-KMS. Enabled EBS volume encryption. Configured key policies and grants.',
        result: 'KMS CMK created with rotation enabled. S3 bucket using SSE-KMS for all objects. EBS volumes encrypted with KMS. Key policy restricting usage to specific roles.',
        status: 'COMPLETED', category: 'SECURITY',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w7, projectId: projects[1].id,
        date: '2026-09-16', startTime: '08:30', endTime: '17:00', duration: 7.5,
        title: 'AWS CloudTrail - Audit Logging Setup',
        description: 'Created multi-region CloudTrail trail logging all management events. Configured CloudTrail to write to S3 bucket with encryption. Set up CloudTrail Lake for advanced querying. Created CloudWatch alarms for suspicious activity (console logins without MFA, root account usage).',
        result: 'CloudTrail trail active in all regions. Log integrity validation enabled. CloudWatch alarm triggered test event successfully. CloudTrail Lake query returned last 30 days of API calls in < 5 seconds.',
        status: 'COMPLETED', category: 'SECURITY',
      },
    }),
    prisma.worklog.create({
      data: {
        weekId: w7, projectId: projects[1].id,
        date: '2026-09-17', startTime: '08:30', endTime: '17:30', duration: 8,
        title: 'Amazon GuardDuty - Threat Detection',
        description: 'Enabled GuardDuty in primary region. Studied GuardDuty finding types: reconnaissance, instance compromise, account compromise. Generated sample findings for testing. Set up EventBridge rule to route findings to Security Hub and SNS.',
        result: 'GuardDuty enabled and monitoring. Sample findings generated and alerts received via SNS email. EventBridge automation routing HIGH severity findings to incident response channel.',
        status: 'IN_PROGRESS', category: 'SECURITY',
      },
    }),
  ])
  console.log('✅ Week 7 worklogs created')

  // Add references for weeks 4-7
  await Promise.all([
    prisma.reference.create({ data: { title: 'VPC User Guide', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/', source: 'AWS Documentation', category: 'Networking', accessDate: '2026-09-22', weekId: w4, description: 'Complete VPC networking documentation' } }),
    prisma.reference.create({ data: { title: 'RDS Multi-AZ Deployments', url: 'https://aws.amazon.com/rds/features/multi-az/', source: 'AWS', category: 'Database', accessDate: '2026-09-29', weekId: w5, description: 'RDS Multi-AZ high availability documentation' } }),
    prisma.reference.create({ data: { title: 'IAM Best Practices', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html', source: 'AWS Documentation', category: 'Security', accessDate: '2026-10-06', weekId: w6, description: 'AWS IAM security best practices guide' } }),
    prisma.reference.create({ data: { title: 'AWS KMS Developer Guide', url: 'https://docs.aws.amazon.com/kms/latest/developerguide/', source: 'AWS Documentation', category: 'Security', accessDate: '2026-09-15', weekId: w7, description: 'KMS key management and encryption guide' } }),
    prisma.reference.create({ data: { title: 'AWS Security Workshops', url: 'https://workshops.aws/categories/Security', source: 'AWS Workshops', category: 'Security', accessDate: '2026-10-07', weekId: w6, description: 'Hands-on security workshops collection' } }),
  ])

  console.log('\n🎉 Seed completed successfully!')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`👤 User: ${user.fullName}`)
  console.log(`📅 12 weeks created`)
  console.log(`📝 Worklogs: Weeks 1-7 populated`)
  console.log(`📚 References: 15+ added`)
  console.log(`🗂️  Projects: 4 created`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
