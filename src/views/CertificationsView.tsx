import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  FileCheck,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Globe2,
  Lock,
  Search,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Eye,
  FileText
} from 'lucide-react';
import {
  COMPLIANCE_CERTIFICATES,
  EU_RESPONSIBLE_PERSON,
  UK_RESPONSIBLE_PERSON,
  PRODUCTS
} from '../data/mockData';
import { ComplianceCertificate } from '../types';

interface CertificationsViewProps {
  onOpenRFQ: () => void;
  onNavigate: (view: string, slug?: string) => void;
}

export const CertificationsView: React.FC<CertificationsViewProps> = ({
  onOpenRFQ,
  onNavigate
}) => {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'US' | 'EU' | 'CA' | 'UK' | 'Global'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [previewCert, setPreviewCert] = useState<ComplianceCertificate | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const filteredCerts = COMPLIANCE_CERTIFICATES.filter(cert => {
    const matchesRegion = selectedRegion === 'All' || cert.region === selectedRegion;
    const matchesSearch =
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.notifiedBodyOrLab.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.applicableProducts.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleCopy = (certNumber: string, id: string) => {
    navigator.clipboard.writeText(certNumber);
    setCopiedCertId(id);
    setTimeout(() => setCopiedCertId(null), 2000);
  };

  const handleDownload = (certName: string) => {
    setDownloadSuccessToast(`Downloading official lab dossier: ${certName}`);
    setTimeout(() => setDownloadSuccessToast(null), 3500);
  };

  const regionCounts = {
    All: COMPLIANCE_CERTIFICATES.length,
    US: COMPLIANCE_CERTIFICATES.filter(c => c.region === 'US').length,
    EU: COMPLIANCE_CERTIFICATES.filter(c => c.region === 'EU').length,
    CA: COMPLIANCE_CERTIFICATES.filter(c => c.region === 'CA').length,
    UK: COMPLIANCE_CERTIFICATES.filter(c => c.region === 'UK').length,
    Global: COMPLIANCE_CERTIFICATES.filter(c => c.region === 'Global').length
  };

  const complianceFaqs = [
    {
      q: 'How does Petora comply with the EU GPSR (General Product Safety Regulation) effective Dec 13, 2024?',
      a: 'We have appointed Petora EU Compliance B.V. (Amsterdam, Netherlands) as our legal Authorized Responsible Person. Our team ensures that our EU RP details are printed directly onto product packaging and technical dossiers are preserved in digital repositories for 10 years, ensuring complete adherence to Amazon EU and customs clearance protocols.'
    },
    {
      q: 'Are your WiFi and Bluetooth devices compliant with the mandatory EN 18031 IoT Cybersecurity directive?',
      a: 'Yes. All Petora wireless models are certified under EN 18031-1/2/3 by TÜV SÜD (Notified Body 0123), featuring secure boot, TLS 1.3 encrypted cloud communications, brute-force lockout, and tamper-resistant OTA firmware rollbacks.'
    },
    {
      q: 'Are your electrical products listed with OSHA-recognized NRTL (UL / ETL 62368-1)?',
      a: 'Yes. All AC/DC powered products carry verified Intertek cETLus listings (Control # 5029418) under ANSI/UL 62368-1 and CSA C22.2 No. 62368-1. We supply complete test report copies for Amazon US electrical listings and retailer vendor portals.'
    },
    {
      q: 'What food contact tests have been performed on feeder hoppers and fountain bowls?',
      a: 'We conduct full migration assays under FDA 21 CFR 177.1520/175.300 and German LFGB §30/§31 / EU 10/2011 with TÜV Rheinland. All materials (100% virgin PP and SUS304 food-grade stainless steel) show zero lead, cadmium, or BPA migration.'
    },
    {
      q: 'Can our wholesale company receive an official Certificate of Insurance (COI) for the $5,000,000 policy?',
      a: 'Yes. For verified wholesale distribution contracts and OEM orders, we issue a Certificate of Insurance (COI) through Allianz/Chubb naming your company as "Additional Insured".'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      {/* Toast Notification */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F3D2E] text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-500/30 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#FF7A45]" />
          <span className="text-sm font-medium">{downloadSuccessToast}</span>
        </div>
      )}

      {/* Hero Header */}
      <div className="bg-[#0F3D2E] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF7A45_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF7A45] text-white uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" /> Direct Factory Export Compliance
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-200 border border-emerald-700">
              <Globe2 className="w-3.5 h-3.5 text-[#FF7A45]" /> US • EU • CA • UK Authorized
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-200 border border-emerald-700">
              <Lock className="w-3.5 h-3.5 text-emerald-300" /> EU GPSR 2023/988 Ready
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            International Compliance, Laboratory Test Reports & <span className="text-[#FF7A45] italic">GPSR Dossier</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-3xl font-normal leading-relaxed">
            Every Petora smart pet feeder, fountain, and camera meets the rigorous regulatory thresholds for North American and European market entry. Complete accredited laboratory reports from TÜV, SGS, and Intertek are retained for 10-year audit defense.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-emerald-800/80">
            <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/50">
              <div className="text-2xl font-extrabold text-[#FF7A45]">100% Passed</div>
              <div className="text-xs text-emerald-200/80 mt-0.5">FCC & CE-RED Wireless Audits</div>
            </div>
            <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/50">
              <div className="text-2xl font-extrabold text-white">EN 18031</div>
              <div className="text-xs text-emerald-200/80 mt-0.5">2025/2026 IoT Cyber Standards</div>
            </div>
            <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/50">
              <div className="text-2xl font-extrabold text-white">10-Year</div>
              <div className="text-xs text-emerald-200/80 mt-0.5">GPSR Digital Technical Archive</div>
            </div>
            <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/50">
              <div className="text-2xl font-extrabold text-[#FF7A45]">$5,000,000</div>
              <div className="text-xs text-emerald-200/80 mt-0.5">Global Product Liability Policy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-10">
        
        {/* EU GPSR & UKRP High Priority Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* EU Responsible Person Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border-2 border-emerald-600/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0F3D2E] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
              Mandatory EU GPSR (EU) 2023/988
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E] flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#0F3D2E]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0F3D2E] flex items-center gap-2">
                  Official EU Authorized Responsible Person (RP)
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Enforced Dec 2024
                  </span>
                </h3>
                <p className="text-xs text-[#6B7269] mt-1">
                  Non-EU sellers cannot sell in the EU without a designated Responsible Person. Petora provides full EU RP authorization for all wholesale stockists.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FAF7F2] p-4 rounded-xl border border-[#E5E2DB] text-xs">
                  <div>
                    <span className="text-[#6B7269] block font-medium">Entity Name:</span>
                    <strong className="text-[#0F3D2E]">{EU_RESPONSIBLE_PERSON.companyName}</strong>
                  </div>
                  <div>
                    <span className="text-[#6B7269] block font-medium">Mandate Reference:</span>
                    <strong className="text-[#0F3D2E] font-mono">{EU_RESPONSIBLE_PERSON.mandateReference}</strong>
                  </div>
                  <div>
                    <span className="text-[#6B7269] block font-medium">Registered Address:</span>
                    <span className="text-[#2C3E35]">{EU_RESPONSIBLE_PERSON.address}, {EU_RESPONSIBLE_PERSON.cityCountry}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7269] block font-medium">Dedicated Compliance Contact:</span>
                    <span className="text-[#2C3E35]">{EU_RESPONSIBLE_PERSON.email}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleDownload('EU GPSR Compliance Dossier')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F3D2E] text-white text-xs font-bold hover:bg-[#165641] transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" /> Download EU GPSR Dossier & DoC
                  </button>
                  <button
                    onClick={onOpenRFQ}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] text-[#0F3D2E] text-xs font-bold hover:bg-[#E8F3EE] transition-colors cursor-pointer"
                  >
                    Request EU RP Authorization Letter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* UKRP & Social Audits Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E2DB] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A45]">UK & Global Facility Audits</span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">BSCI Grade A</span>
              </div>
              <h4 className="text-base font-bold text-[#0F3D2E]">UKCA Responsible Person & Social Compliance</h4>
              <p className="text-xs text-[#6B7269] mt-1">
                Post-Brexit UKCA compliance with London authorized representative, paired with SGS audited BSCI / Sedex SMETA 4-Pillar factory certifications.
              </p>

              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF7F2]">
                  <span className="font-semibold text-[#0F3D2E]">UK Authorized Rep (UKRP):</span>
                  <span className="text-[#6B7269] font-mono">{UK_RESPONSIBLE_PERSON.companyName} (London)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF7F2]">
                  <span className="font-semibold text-[#0F3D2E]">Factory Social Audit:</span>
                  <span className="text-emerald-700 font-bold">Sedex SMETA 6.1 / amfori BSCI</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF7F2]">
                  <span className="font-semibold text-[#0F3D2E]">Quality Management:</span>
                  <span className="text-[#0F3D2E] font-bold">ISO 9001:2015 (TÜV NORD)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E5E2DB] flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F3D2E]">Allianz $5M Liability Cover</span>
              <button
                onClick={() => handleDownload('Factory Audit & Liability COI Sample')}
                className="text-xs font-bold text-[#FF7A45] hover:underline flex items-center gap-1 cursor-pointer"
              >
                View Audit Report <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E5E2DB] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Region Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {(['All', 'US', 'EU', 'CA', 'UK', 'Global'] as const).map(reg => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#0F3D2E] text-white shadow-sm'
                      : 'bg-[#FAF7F2] text-[#6B7269] hover:bg-[#E8F3EE] hover:text-[#0F3D2E]'
                  }`}
                >
                  <span>{reg === 'All' ? 'All Regions' : reg === 'US' ? 'United States 🇺🇸' : reg === 'EU' ? 'European Union 🇪🇺' : reg === 'CA' ? 'Canada 🇨🇦' : reg === 'UK' ? 'United Kingdom 🇬🇧' : 'Global B2B 🌐'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedRegion === reg ? 'bg-white/20 text-white' : 'bg-[#E5E2DB] text-[#2C3E35]'}`}>
                    {regionCounts[reg]}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#6B7269] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search standard, FCC ID, lab..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#E5E2DB] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] text-[#0F3D2E]"
              />
            </div>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map(cert => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-[#E5E2DB] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    cert.region === 'US' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                    cert.region === 'EU' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                    cert.region === 'CA' ? 'bg-red-50 text-red-800 border border-red-200' :
                    cert.region === 'UK' ? 'bg-purple-50 text-purple-800 border border-purple-200' :
                    'bg-orange-50 text-orange-800 border border-orange-200'
                  }`}>
                    {cert.region === 'US' ? 'USA 🇺🇸' : cert.region === 'EU' ? 'EU 🇪🇺' : cert.region === 'CA' ? 'Canada 🇨🇦' : cert.region === 'UK' ? 'UK 🇬🇧' : 'Global 🌐'} · {cert.mandatoryType}
                  </span>

                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                {/* Title & Standard */}
                <h3 className="text-base font-bold text-[#0F3D2E] group-hover:text-[#FF7A45] transition-colors leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-[#6B7269] mt-1 bg-[#FAF7F2] p-1.5 rounded border border-[#E5E2DB]/80">
                  {cert.standard}
                </p>

                {/* Lab & Certificate Identifier */}
                <div className="mt-4 space-y-2 text-xs">
                  <div>
                    <span className="text-[#6B7269] block text-[11px]">Accredited Lab / Notified Body:</span>
                    <span className="font-semibold text-[#0F3D2E]">{cert.notifiedBodyOrLab}</span>
                  </div>

                  <div>
                    <span className="text-[#6B7269] block text-[11px]">Certificate / Report Reference:</span>
                    <div className="flex items-center justify-between bg-emerald-50/60 px-2.5 py-1.5 rounded-lg border border-emerald-100 font-mono text-emerald-900 font-bold">
                      <span className="truncate">{cert.certificateNumber}</span>
                      <button
                        onClick={() => handleCopy(cert.certificateNumber, cert.id)}
                        className="text-emerald-700 hover:text-emerald-950 ml-2 p-1 cursor-pointer"
                        title="Copy Certificate Number"
                      >
                        {copiedCertId === cert.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#6B7269] block text-[11px]">Applicable Products:</span>
                    <span className="text-[#2C3E35]">{cert.applicableProducts}</span>
                  </div>
                </div>

                {/* Key Bullet Requirements */}
                <div className="mt-4 pt-3 border-t border-[#E5E2DB]">
                  <p className="text-[11px] font-bold text-[#0F3D2E] uppercase tracking-wider mb-1.5">Key Audit Standards:</p>
                  <ul className="space-y-1">
                    {cert.keyRequirements.map((req, i) => (
                      <li key={i} className="text-xs text-[#6B7269] flex items-start gap-1.5">
                        <span className="text-[#FF7A45] font-bold mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-[#E5E2DB] flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewCert(cert)}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#E8F3EE] text-[#0F3D2E] text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF7A45]" /> Inspect
                </button>

                <button
                  onClick={() => handleDownload(cert.name)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0F3D2E] hover:bg-[#165641] text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" /> PDF Report
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Compliance Package Download & RFQ Banner */}
        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#165641] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A45]">Complete B2B Due Diligence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Need Verified Lab Test Reports for Amazon Listing or Customs Clearance?
            </h2>
            <p className="mt-3 text-sm text-emerald-100/90 leading-relaxed">
              We provide unredacted test reports, CAD technical drawings, BOM declarations, and official EU GPSR Responsible Person authorization letters for wholesale partners. Inquiries are handled by our dedicated regulatory compliance team within 4 hours.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRFQ}
                className="bg-[#FF7A45] hover:bg-[#e86935] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#FF7A45]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom Quote & Compliance Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleDownload('Petora Complete 2026 Compliance Master Pack (.ZIP)')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Compliance Master Pack (.ZIP)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory FAQ Accordion */}
        <div className="bg-white rounded-2xl border border-[#E5E2DB] p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A45]">Compliance Knowledge Base</span>
            <h2 className="text-2xl font-extrabold text-[#0F3D2E] mt-1">
              Frequently Asked Regulatory & Certification Questions
            </h2>
            <p className="text-xs text-[#6B7269] mt-1">
              Detailed guidance on FCC IDs, EU GPSR Responsible Person requirements, and retail electrical safety audits.
            </p>
          </div>

          <div className="divide-y divide-[#E5E2DB] max-w-3xl mx-auto">
            {complianceFaqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-sm font-bold text-[#0F3D2E] group-hover:text-[#FF7A45] transition-colors">
                    {faq.q}
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#0F3D2E] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6B7269] flex-shrink-0" />
                  )}
                </button>

                {activeFaq === idx && (
                  <p className="mt-3 text-xs text-[#6B7269] leading-relaxed pl-2 border-l-2 border-[#FF7A45]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal Preview for Single Certificate */}
      {previewCert && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E2DB] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setPreviewCert(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] text-[#6B7269] hover:text-[#0F3D2E] flex items-center justify-center cursor-pointer font-bold"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0F3D2E] flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-[#0F3D2E]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A45]">{previewCert.region} · {previewCert.mandatoryType}</span>
                <h3 className="text-lg font-bold text-[#0F3D2E]">{previewCert.name}</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs bg-[#FAF7F2] p-4 rounded-2xl border border-[#E5E2DB]">
              <div>
                <span className="text-[#6B7269] block font-medium">Standard / Directive:</span>
                <strong className="text-[#0F3D2E] font-mono">{previewCert.standard}</strong>
              </div>
              <div>
                <span className="text-[#6B7269] block font-medium">Accredited Laboratory:</span>
                <strong className="text-[#0F3D2E]">{previewCert.notifiedBodyOrLab}</strong>
              </div>
              <div>
                <span className="text-[#6B7269] block font-medium">Official Reference Number:</span>
                <strong className="text-emerald-800 font-mono">{previewCert.certificateNumber}</strong>
              </div>
              <div>
                <span className="text-[#6B7269] block font-medium">Validity Period:</span>
                <span className="text-[#2C3E35]">{previewCert.issueDate} to {previewCert.expiryDate}</span>
              </div>
              <div>
                <span className="text-[#6B7269] block font-medium">Summary & Purpose:</span>
                <p className="text-[#2C3E35] mt-0.5 leading-relaxed">{previewCert.summary}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setPreviewCert(null)}
                className="px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-xs font-bold text-[#6B7269] hover:bg-[#FAF7F2] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(previewCert.name);
                  setPreviewCert(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0F3D2E] hover:bg-[#165641] text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" /> Download Official PDF Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
