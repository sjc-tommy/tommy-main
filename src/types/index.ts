export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  category: 'smart-feeders' | 'water-fountains' | 'self-cleaning-litter-boxes' | 'pet-cameras' | 'gps-trackers' | 'smart-toys';
  categoryName: string;
  price: number;
  comparePrice?: number;
  b2bPriceTiers: {
    minUnits?: number;
    quantity?: number;
    pricePerUnit: number;
    leadTimeDays?: number;
  }[];
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  tag?: 'Bestseller' | 'New' | 'Vet-Choice' | 'OEM Popular';
  tldr?: string;
  description: string;
  features: string[];
  specs: { [key: string]: string | string[] };
  b2bSpecs?: {
    moq?: number;
    cartonQty?: number;
    cartonDimensions?: string;
    grossWeight?: string;
    cartonWeight?: string;
    container20GP?: number;
    container40HQ?: number;
    certifications?: string[];
    hsCode?: string;
    customization?: string[];
    customizationMOQ?: number;
  };
  inTheBox?: string[];
  colors: { name: string; hex: string; image?: string }[];
  capacities?: string[];
  connectivity: string[];
  clinicalNotes?: string;
  expertReviewer?: {
    id?: string;
    name?: string;
    role?: string;
    quote?: string;
  };
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
  tldr: string;
}

export interface Review {
  id: string;
  author: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Multi-Pet';
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  avatar: string;
  productName: string;
  helpfulCount: number;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  credentials: string;
  licenseNumber: string;
  avatar: string;
  bio: string;
  quote: string;
  specialty: string;
  affiliations: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  reviewedBy?: string;
  reviewedByDVM?: string;
  readTime: string;
  date?: string;
  publishedAt?: string;
  updatedAt?: string;
  tldr: string;
  excerpt: string;
  coverImage: string;
  relatedProductSlug?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
  contentSections?: {
    heading: string;
    body: string[];
    bullets?: string[];
    callout?: string;
  }[];
  faqs?: { question: string; answer: string }[];
  citations?: { title: string; source: string; year: string; link: string }[];
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: string;
  selectedCapacity?: string;
  selectedConnectivity?: string;
  quantity: number;
  isB2bTier?: boolean;
  isB2b?: boolean;
  unitPrice: number;
}

export interface RFQSubmission {
  companyName: string;
  contactName: string;
  email: string;
  country: string;
  productInterest: string;
  estimatedVolume: number;
  customizationType: string;
  targetIncoterm: string;
  message: string;
  requiredCertifications?: string[];
}

export interface ComplianceCertificate {
  id: string;
  name: string;
  standard: string;
  region: 'US' | 'EU' | 'CA' | 'UK' | 'Global';
  mandatoryType: 'Mandatory' | 'De Facto Mandatory (Retailer/Amazon)' | 'Buyer-Driven / Premium' | 'GPSR Compliance';
  applicableProducts: string;
  notifiedBodyOrLab: string;
  certificateNumber: string;
  issueDate: string;
  expiryDate: string;
  status: 'Active & Verified' | 'Updated (2025/2026 Ready)';
  keyRequirements: string[];
  pdfDownloadUrl?: string;
  summary: string;
}

export interface ResponsiblePersonInfo {
  companyName: string;
  contactPerson: string;
  address: string;
  cityCountry: string;
  postalCode: string;
  email: string;
  phone: string;
  mandateReference: string;
  gpsrEffectiveDate: string;
  technicalFileStoragePeriod: string;
}
