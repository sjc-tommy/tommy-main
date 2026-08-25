import React from 'react';
import {
  PRODUCTS,
  CATEGORIES,
  GENERAL_FAQS,
  EXPERTS,
  BLOG_POSTS,
  COMPLIANCE_CERTIFICATES,
  EU_RESPONSIBLE_PERSON,
  UK_RESPONSIBLE_PERSON
} from '../data/mockData';

interface SEOJsonLdProps {
  view: string;
  selectedSlug?: string;
}

export const SEOJsonLd: React.FC<SEOJsonLdProps> = ({ view, selectedSlug }) => {
  const currentProduct = PRODUCTS.find(p => p.slug === selectedSlug) || PRODUCTS[0];
  const currentArticle = BLOG_POSTS.find(b => b.slug === selectedSlug) || BLOG_POSTS[0];
  const currentCategory = CATEGORIES.find(c => c.slug === selectedSlug) || CATEGORIES[0];
  const currentExpert = EXPERTS[0];

  // 1. Organization Schema (EEAT Authority + Credentials)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Petora Tech Co., Ltd.',
    alternateName: ['Petora Smart Pet Care', 'Petora Global IoT Hardware'],
    url: 'https://petoracare.com',
    logo: 'https://petoracare.com/logo.png',
    description:
      'Premier manufacturer and direct OEM/ODM exporter of veterinary-engineered smart pet feeders, 2K AI pet cameras, wireless water fountains, and robotic self-cleaning litter boxes.',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Dr. Sarah Jenkins',
        jobTitle: 'Chief Veterinary Officer & Board-Certified Internist (DACVIM)',
        sameAs: 'https://www.linkedin.com/in/dr-sarah-jenkins-dvm'
      }
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '19800 S Vermont Ave, Suite 200',
        addressLocality: 'Torrance',
        addressRegion: 'CA',
        postalCode: '90502',
        addressCountry: 'US'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'High-Tech Industrial Park, Yinzhou District',
        addressLocality: 'Ningbo',
        addressRegion: 'Zhejiang',
        postalCode: '315000',
        addressCountry: 'CN'
      },
      {
        '@type': 'PostalAddress',
        name: 'EU Authorized Responsible Person (GPSR 2023/988)',
        streetAddress: EU_RESPONSIBLE_PERSON.address,
        addressLocality: 'Amsterdam',
        postalCode: EU_RESPONSIBLE_PERSON.postalCode,
        addressCountry: 'NL'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-800-555-7386',
        email: 'sales@petoracare.com',
        contactType: 'sales',
        areaServed: ['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'AU'],
        availableLanguage: ['English', 'German', 'French', 'Mandarin']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+31-20-894-3320',
        email: EU_RESPONSIBLE_PERSON.email,
        contactType: 'regulatory compliance',
        areaServed: ['EU', 'EEA'],
        availableLanguage: ['English', 'German', 'Dutch']
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/petora-smart-pet',
      'https://www.facebook.com/petorapettech',
      'https://www.youtube.com/@PetoraSmartPet',
      'https://www.instagram.com/petorapettech'
    ],
    hasCredential: COMPLIANCE_CERTIFICATES.map(c => ({
      '@type': 'Certification',
      name: c.name,
      identifier: c.certificateNumber,
      issuedBy: {
        '@type': 'Organization',
        name: c.notifiedBodyOrLab
      },
      validFrom: c.issueDate,
      validUntil: c.expiryDate,
      audience: {
        '@type': 'Audience',
        name: c.region
      }
    }))
  };

  // 2. WebSite Schema (with SearchAction)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Petora - Smart Pet Hardware & B2B Global Export Hub',
    url: 'https://petoracare.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://petoracare.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // 3. BreadcrumbList Schema (Dynamic for subpages)
  const getBreadcrumbs = () => {
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://petoracare.com'
      }
    ];

    if (view === 'category' && selectedSlug) {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: currentCategory.name,
        item: `https://petoracare.com/collections/${currentCategory.slug}`
      });
    } else if (view === 'product' && selectedSlug) {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: currentProduct.categoryName,
        item: `https://petoracare.com/collections/${currentProduct.category}`
      });
      items.push({
        '@type': 'ListItem',
        position: 3,
        name: currentProduct.name,
        item: `https://petoracare.com/products/${currentProduct.slug}`
      });
    } else if (view.startsWith('blog') && selectedSlug) {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Clinical Research & Blog',
        item: 'https://petoracare.com/blog'
      });
      items.push({
        '@type': 'ListItem',
        position: 3,
        name: currentArticle.title,
        item: `https://petoracare.com/blog/${currentArticle.slug}`
      });
    } else if (view === 'certifications') {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Global Export Certifications & EU GPSR Dossier',
        item: 'https://petoracare.com/certifications'
      });
    } else if (view === 'b2b') {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: 'B2B Wholesale, OEM & RFQ Portal',
        item: 'https://petoracare.com/export'
      });
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items
    };
  };

  // 4. Homepage Category ItemList Schema
  const homepageCategoryListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Petora Smart Pet Ecosystem Product Lines',
    description: 'Complete veterinary-engineered smart pet hardware catalog',
    itemListElement: CATEGORIES.map((cat, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: cat.name,
      description: cat.description,
      url: `https://petoracare.com/collections/${cat.slug}`
    }))
  };

  // 5. Category CollectionPage + ItemList + FAQ Schema
  const categoryProducts = PRODUCTS.filter(p => p.category === currentCategory.slug);
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${currentCategory.name} - Wholesale & Direct Export`,
    description: currentCategory.description,
    url: `https://petoracare.com/collections/${currentCategory.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryProducts.map((prod, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: prod.name,
        image: prod.image,
        url: `https://petoracare.com/products/${prod.slug}`
      }))
    }
  };

  const categoryFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the minimum order quantity (MOQ) for ${currentCategory.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Standard brand wholesale MOQ starts at 50 units. Custom laser logo OEM requires 100 units, and full bespoke color/packaging ODM starts at 500 units.`
        }
      },
      {
        '@type': 'Question',
        name: `What regulatory certifications are included with ${currentCategory.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `All units include complete FCC Part 15C/B, CE-RED with EN 18031 cybersecurity, RoHS 2.0, REACH, and FDA/LFGB food contact safety test reports. EU GPSR Responsible Person details are pre-printed.`
        }
      },
      {
        '@type': 'Question',
        name: 'What is the standard production lead time for bulk container orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Evaluation samples ship within 3-5 business days. Mass production lead times are 25-32 days after deposit confirmation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you customize the firmware or provide mobile app SDK integration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide complete Tuya/Matter IoT SDKs, private cloud server deployment, and custom branded iOS/Android apps for tier-1 distributors.'
        }
      }
    ]
  };

  // 6. Product Detail View Schema (B2B + Consumer with CallForPrice & additionalProperty)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: currentProduct.name,
    image: [currentProduct.image, ...currentProduct.gallery],
    description: currentProduct.description,
    sku: currentProduct.id,
    mpn: currentProduct.id,
    brand: {
      '@type': 'Brand',
      name: 'Petora'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Petora Tech Co., Ltd.'
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'MOQ (Wholesale)',
        value: `${currentProduct.b2bSpecs?.moq || 50} units`
      },
      {
        '@type': 'PropertyValue',
        name: 'Standard Lead Time',
        value: '25-32 Days'
      },
      {
        '@type': 'PropertyValue',
        name: 'Global Warranty',
        value: '2 Years Factory Replacement'
      },
      {
        '@type': 'PropertyValue',
        name: 'HS Code',
        value: currentProduct.b2bSpecs?.hsCode || '8543.70.9960'
      },
      {
        '@type': 'PropertyValue',
        name: 'Connectivity',
        value: currentProduct.connectivity.join(', ')
      },
      {
        '@type': 'PropertyValue',
        name: 'Certifications',
        value: (currentProduct.b2bSpecs?.certifications || [
          'FCC Part 15C',
          'CE-RED (EN 18031)',
          'RoHS 2.0',
          'cETLus 62368-1',
          'FDA 21 CFR',
          'EU GPSR'
        ]).join(', ')
      },
      {
        '@type': 'PropertyValue',
        name: 'EU GPSR Responsible Person',
        value: `${EU_RESPONSIBLE_PERSON.companyName} (${EU_RESPONSIBLE_PERSON.cityCountry})`
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: currentProduct.rating.toString(),
      reviewCount: currentProduct.reviewsCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Direct Consumer Retail Price',
        priceCurrency: 'USD',
        price: currentProduct.price.toString(),
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `https://petoracare.com/products/${currentProduct.slug}`,
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          name: 'Petora'
        }
      },
      {
        '@type': 'Offer',
        name: 'B2B Wholesale / Container Quote',
        priceCurrency: 'USD',
        price: '0',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceType: 'https://schema.org/CallForPrice'
        },
        availability: 'https://schema.org/InStock',
        url: `https://petoracare.com/export?product=${currentProduct.slug}`,
        seller: {
          '@type': 'Organization',
          name: 'Petora Tech Co., Ltd.'
        }
      }
    ],
    hasCredential: COMPLIANCE_CERTIFICATES.filter(c => c.region === 'US' || c.region === 'EU').map(c => ({
      '@type': 'Certification',
      name: c.name,
      identifier: c.certificateNumber,
      issuedBy: {
        '@type': 'Organization',
        name: c.notifiedBodyOrLab
      }
    }))
  };

  // 7. Article Schema (GEO Triple-Stack: Article + ItemList + FAQ + Speakable)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: currentArticle.title,
    description: currentArticle.excerpt,
    image: [currentArticle.coverImage],
    datePublished: currentArticle.publishedAt || '2026-01-10T08:00:00+08:00',
    dateModified: currentArticle.updatedAt || '2026-02-24T09:00:00+08:00',
    author: {
      '@type': 'Person',
      name: currentArticle.author,
      jobTitle: currentArticle.authorRole,
      sameAs: 'https://www.linkedin.com/in/dr-sarah-jenkins-dvm'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Petora Tech Co., Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://petoracare.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://petoracare.com/blog/${currentArticle.slug}`
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.tldr-box', 'h1', '.article-summary']
    }
  };

  const articleFaqSchema = currentArticle.faqs && currentArticle.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: currentArticle.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  } : null;

  // 8. Person Schema for Veterinary Experts (EEAT)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: currentExpert.name,
    jobTitle: currentExpert.title,
    credential: currentExpert.credentials,
    identifier: currentExpert.licenseNumber,
    description: currentExpert.bio,
    image: currentExpert.avatar,
    worksFor: {
      '@type': 'Organization',
      name: 'Petora Veterinary Advisory Board'
    },
    sameAs: [
      'https://www.linkedin.com/in/dr-sarah-jenkins-dvm',
      'https://www.avma.org'
    ]
  };

  // 9. ContactPage Schema for RFQ / B2B Portal
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Petora B2B Wholesale & OEM Quote Request Portal',
    description: 'Request official factory proforma quotations, compliance dossiers, and wholesale distributor pricing.',
    url: 'https://petoracare.com/export',
    mainEntity: {
      '@type': 'Organization',
      name: 'Petora Tech Co., Ltd.',
      telephone: '+1-800-555-7386',
      email: 'sales@petoracare.com'
    }
  };

  // 10. Certifications Hub ItemList Schema
  const certificationsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Petora Global Regulatory Certifications & Lab Audit Reports',
    description: 'Complete compliance dossiers for United States (FCC, FDA, UL/ETL, CP65), European Union (CE-RED, EN 18031, GPSR, RoHS, LFGB), Canada (ISED), and United Kingdom (UKCA).',
    itemListElement: COMPLIANCE_CERTIFICATES.map((cert, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Certification',
        name: cert.name,
        identifier: cert.certificateNumber,
        issuedBy: {
          '@type': 'Organization',
          name: cert.notifiedBodyOrLab
        },
        validFrom: cert.issueDate,
        validUntil: cert.expiryDate,
        description: cert.summary,
        audience: {
          '@type': 'Audience',
          name: cert.region
        }
      }
    }))
  };

  return (
    <>
      {/* 1. Global Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 2. Global WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 3. Dynamic Breadcrumbs (Non-home) */}
      {view !== 'home' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbs()) }}
        />
      )}

      {/* 4. Global FAQ (Site-wide) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: GENERAL_FAQS.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer
            }
          }))
        }) }}
      />

      {/* 5. View-Specific Schemas */}
      {view === 'home' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageCategoryListSchema) }}
        />
      )}

      {view === 'category' && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema) }}
          />
        </>
      )}

      {view === 'product' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      {view.startsWith('blog') && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          {articleFaqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(articleFaqSchema) }}
            />
          )}
        </>
      )}

      {view === 'expert' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      )}

      {(view === 'b2b' || view === 'help') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      )}

      {view === 'certifications' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsListSchema) }}
        />
      )}
    </>
  );
};
