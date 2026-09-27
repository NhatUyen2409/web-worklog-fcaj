import React from 'react';
import { 
  Cloud, Shield, Server, Database, Key, Radio, Terminal, 
  Activity, CheckCircle2, Lock, Cpu, Globe, Search, Layers
} from 'lucide-react';

export default function TechnicalIllustration({ type, title, height = "h-44", className = "" }) {
  // Theme gradients and icons based on type
  const renderContent = () => {
    switch (type) {
      case 'aws-intro':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#F8F5FF] to-[#E8F0FE] p-4">
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#FFC8DD]/40 blur-xl"></div>
            <div className="flex items-center gap-4 z-10">
              <div className="p-4 rounded-24 bg-white/80 shadow-pastel-soft border border-white flex flex-col items-center">
                <Cloud size={32} className="text-[#CDB4DB] mb-1" />
                <span className="text-[11px] font-bold text-pastel-text">AWS Global</span>
              </div>
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF]"></div>
              <div className="p-4 rounded-24 bg-white/80 shadow-pastel-soft border border-white flex flex-col items-center">
                <Lock size={32} className="text-[#A2D2FF] mb-1" />
                <span className="text-[11px] font-bold text-pastel-text">IAM & MFA</span>
              </div>
            </div>
          </div>
        );

      case 'vpc-topology':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F0F8FF] via-[#F8F5FF] to-[#FFF0F5] p-3">
            <div className="w-full max-w-[260px] rounded-20 bg-white/75 border border-[#A2D2FF]/40 p-2.5 shadow-pastel-soft">
              <div className="flex items-center justify-between text-[10px] font-semibold text-pastel-muted mb-2 px-1">
                <span>VPC 10.0.0.0/16</span>
                <span className="px-2 py-0.5 rounded-full bg-[#BDE0FE]/50 text-blue-700">2 AZs</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-16 bg-[#FFF0F5] border border-[#FFC8DD]/50 text-center">
                  <span className="text-[10px] font-medium text-pink-700 block">Public Subnet</span>
                  <span className="text-[9px] text-pastel-muted">NAT & IGW</span>
                </div>
                <div className="p-2 rounded-16 bg-[#F8F5FF] border border-[#CDB4DB]/50 text-center">
                  <span className="text-[10px] font-medium text-purple-700 block">Private Subnet</span>
                  <span className="text-[9px] text-pastel-muted">Isolated EC2</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ec2-security':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#F8F5FF] to-[#EBF4FF] p-4">
            <div className="flex items-center gap-3 z-10">
              <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-card border border-white flex flex-col items-center">
                <Server size={30} className="text-[#A2D2FF] mb-1" />
                <span className="text-[10px] font-semibold text-pastel-text">EC2 Ubuntu</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-[9px] text-pastel-muted font-medium">
                <Key size={16} className="text-[#CDB4DB]" />
                <span>Ed25519</span>
              </div>
              <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-card border border-white flex flex-col items-center">
                <Shield size={30} className="text-[#FFC8DD] mb-1" />
                <span className="text-[10px] font-semibold text-pastel-text">EBS KMS Enc</span>
              </div>
            </div>
          </div>
        );

      case 's3-encryption':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F5F8FF] via-[#FFF0F5] to-[#F8F5FF] p-4">
            <div className="relative p-4 rounded-24 bg-white/85 shadow-pastel-soft border border-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-20 bg-gradient-to-tr from-[#BDE0FE] to-[#A2D2FF] flex items-center justify-center text-white shadow-sm">
                <Layers size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-pastel-text">S3 Bucket Security</div>
                <div className="text-[10px] text-pastel-muted">Block Public Access · KMS SSE</div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-[9px] font-medium text-emerald-700">TLS 1.3 Enforced</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'rds-secrets':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF5FA] via-[#F8F5FF] to-[#EDF6FF] p-4">
            <div className="flex items-center gap-4 z-10">
              <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-soft border border-white text-center">
                <Database size={28} className="text-[#CDB4DB] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-pastel-text">RDS Multi-AZ</span>
              </div>
              <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-soft border border-white text-center">
                <Lock size={28} className="text-[#FFC8DD] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-pastel-text">Secrets Manager</span>
              </div>
            </div>
          </div>
        );

      case 'midterm-review':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF2F7] via-[#F5EEFF] to-[#E6F4FF] p-4">
            <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-soft border border-white flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#FFC8DD] to-[#CDB4DB] flex items-center justify-center text-white font-bold text-lg">
                ★
              </div>
              <div>
                <span className="text-xs font-bold text-pastel-text">Mid-term Architecture</span>
                <p className="text-[10px] text-pastel-muted">Well-Architected Review & OSP201</p>
                <div className="mt-1 text-[9px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full inline-block">
                  Passed with Distinction
                </div>
              </div>
            </div>
          </div>
        );

      case 'guardduty-logs':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F2F7FF] via-[#FFF0F5] to-[#F8F5FF] p-4">
            <div className="p-4 rounded-24 bg-white/85 shadow-pastel-soft border border-white flex items-center gap-4 w-full max-w-[270px]">
              <div className="w-12 h-12 rounded-20 bg-[#CDB4DB]/30 flex items-center justify-center text-[#4A4458]">
                <Activity size={26} className="text-[#CDB4DB]" />
              </div>
              <div>
                <div className="text-xs font-bold text-pastel-text">GuardDuty & Logs</div>
                <div className="text-[10px] text-pastel-muted">CloudTrail Realtime Auditing</div>
                <div className="mt-1 flex items-center gap-1 text-[9px] text-blue-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Active Threat Detection
                </div>
              </div>
            </div>
          </div>
        );

      case 'gps-spoofing':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#F8F5FF] to-[#EAF2FF] p-3">
            <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-soft border border-white flex items-center gap-3 w-full max-w-[260px]">
              <div className="w-11 h-11 rounded-20 bg-gradient-to-tr from-[#FFC8DD] to-[#FFAFCC] flex items-center justify-center text-white">
                <Radio size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-pastel-text">IAM302T Signal Anomaly</div>
                <div className="text-[10px] text-pastel-muted">Doppler & Pseudo-range Analysis</div>
                <div className="text-[9px] text-pink-700 font-semibold mt-0.5">RAIM Accuracy: 94.6%</div>
              </div>
            </div>
          </div>
        );

      case 'burp-suite':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#F8F5FF] to-[#EBF5FF] p-4">
            <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-soft border border-white flex items-center gap-3">
              <div className="w-11 h-11 rounded-20 bg-[#FFC8DD]/40 flex items-center justify-center text-pink-600">
                <Search size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-pastel-text">Burp Suite Pentest</div>
                <div className="text-[10px] text-pastel-muted">OWASP Top 10 · HTTP Intercept</div>
                <div className="text-[9px] text-purple-700 font-semibold mt-0.5">Repeater & Intruder Labs</div>
              </div>
            </div>
          </div>
        );

      case 'wireshark-ddos':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-[#F8F5FF] to-[#FFF0F5] p-3">
            <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-soft border border-white flex items-center gap-3 w-full max-w-[260px]">
              <div className="w-11 h-11 rounded-20 bg-[#A2D2FF]/40 flex items-center justify-center text-blue-600">
                <Activity size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-pastel-text">IAO202 DDoS Analysis</div>
                <div className="text-[10px] text-pastel-muted">SYN Flood & AWS WAF Filtering</div>
                <div className="text-[9px] text-blue-700 font-semibold mt-0.5">Rate Limit: 100 req/5min</div>
              </div>
            </div>
          </div>
        );

      case 'devsecops-pipeline':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF5F9] via-[#F8F5FF] to-[#EEF5FF] p-4">
            <div className="flex items-center gap-2">
              <div className="p-2.5 rounded-18 bg-white/85 border border-white shadow-sm text-center">
                <Terminal size={18} className="text-[#CDB4DB] mx-auto mb-0.5" />
                <span className="text-[9px] font-bold">Code</span>
              </div>
              <span className="text-xs text-[#CDB4DB]">→</span>
              <div className="p-2.5 rounded-18 bg-white/85 border border-white shadow-sm text-center">
                <Shield size={18} className="text-[#FFC8DD] mx-auto mb-0.5" />
                <span className="text-[9px] font-bold">SAST / IaC</span>
              </div>
              <span className="text-xs text-[#CDB4DB]">→</span>
              <div className="p-2.5 rounded-18 bg-white/85 border border-white shadow-sm text-center">
                <Cloud size={18} className="text-[#A2D2FF] mx-auto mb-0.5" />
                <span className="text-[9px] font-bold">Deploy</span>
              </div>
            </div>
          </div>
        );

      case 'graduation-capstone':
        return (
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#F8F5FF] to-[#E8F0FE] p-4">
            <div className="p-3.5 rounded-24 bg-white/85 shadow-pastel-card border border-white flex items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFC8DD] via-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center text-white">
                <CheckCircle2 size={26} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-pastel-text">FCAJ 2026 Graduation</div>
                <div className="text-[10px] text-pastel-muted">12 Weeks Journey Completed</div>
                <div className="text-[9px] text-pink-700 font-semibold mt-0.5">Outstanding Defense</div>
              </div>
            </div>
          </div>
        );

      // Project-specific illustrations
      case 'fcaj-cloud-labs':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#F8F5FF] to-[#E8F4FE] p-4">
            <div className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-white/80 text-[10px] font-semibold text-purple-700 border border-purple-100">
              AWS Cloud Security
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-14 h-14 rounded-24 bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center text-white shadow-pastel-soft">
                <Cloud size={28} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-pastel-text">Multi-Tier Architecture</div>
                <div className="text-[10px] text-pastel-muted">VPC · IAM · KMS · CloudWatch</div>
                <div className="text-[9px] font-medium text-emerald-600 mt-1">✓ CIS Benchmark Aligned</div>
              </div>
            </div>
          </div>
        );

      case 'osp201-ssh-security':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-[#F8F5FF] to-[#FFF0F5] p-4">
            <div className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-white/80 text-[10px] font-semibold text-blue-700 border border-blue-100">
              Linux Host Hardening
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-14 h-14 rounded-24 bg-gradient-to-br from-[#A2D2FF] to-[#BDE0FE] flex items-center justify-center text-[#4A4458] shadow-pastel-soft">
                <Terminal size={28} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-pastel-text">SSH Defense & Fail2ban</div>
                <div className="text-[10px] text-pastel-muted">RSA-4096 / Ed25519 · iptables</div>
                <div className="text-[9px] font-medium text-blue-600 mt-1">✓ 98.5% Brute-force blocked</div>
              </div>
            </div>
          </div>
        );

      case 'iam302t-gps-spoofing-detection':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF0F6] via-[#F8F5FF] to-[#EBF3FF] p-4">
            <div className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-white/80 text-[10px] font-semibold text-pink-700 border border-pink-100">
              RF Signal Security
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-14 h-14 rounded-24 bg-gradient-to-br from-[#FFC8DD] to-[#FFAFCC] flex items-center justify-center text-white shadow-pastel-soft">
                <Radio size={28} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-pastel-text">GPS Spoofing Detection</div>
                <div className="text-[10px] text-pastel-muted">Python · RAIM · Doppler Drift</div>
                <div className="text-[9px] font-medium text-pink-600 mt-1">✓ 94.6% Detection Accuracy</div>
              </div>
            </div>
          </div>
        );

      case 'iao202-ddos-analysis':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F1F6FF] via-[#F8F5FF] to-[#FFF1F6] p-4">
            <div className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-white/80 text-[10px] font-semibold text-cyan-800 border border-cyan-100">
              Network Forensics
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-14 h-14 rounded-24 bg-gradient-to-br from-[#BDE0FE] to-[#A2D2FF] flex items-center justify-center text-[#4A4458] shadow-pastel-soft">
                <Activity size={28} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-pastel-text">Wireshark DDoS Analysis</div>
                <div className="text-[10px] text-pastel-muted">SYN Flood · AWS WAF Shield</div>
                <div className="text-[9px] font-medium text-indigo-600 mt-1">✓ 12GB PCAP Dissected</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FFF5F8] to-[#F8F5FF] p-4">
            <div className="text-center">
              <Shield size={32} className="text-[#CDB4DB] mx-auto mb-1" />
              <span className="text-xs font-bold text-pastel-text">{title || "Security Diagram"}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`w-full ${height} rounded-24 overflow-hidden border border-white/80 shadow-inner ${className}`}>
      {renderContent()}
    </div>
  );
}
