import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Factory, 
  Stethoscope, 
  BookOpen, 
  Scale, 
  HelpCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/mockData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenRFQ: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenRFQ
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = searchQuery.trim() === '' ? [] : PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-[#E5E2DB]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] flex items-center justify-center text-white shadow-md shadow-[#0F3D2E]/10">
              <Sparkles className="w-5 h-5 text-[#FF7A45]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-[#0F3D2E]">PETORA</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E8F3EE] text-[#0F3D2E] uppercase tracking-wider">Tech</span>
              </div>
              <p className="text-[10px] text-[#6B7269] tracking-wider uppercase -mt-0.5 font-medium">Smart Pet Care · Global Export</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#1A1D1B]">
            {/* Shop with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button 
                onClick={() => onNavigate('categories')}
                className={`flex items-center gap-1 py-2 hover:text-[#0F3D2E] transition-colors ${
                  currentView.startsWith('category') ? 'text-[#0F3D2E] font-bold' : ''
                }`}
              >
                Shop Smart Tech
                <ChevronDown className={`w-4 h-4 text-[#6B7269] transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] -ml-16 bg-white rounded-2xl shadow-2xl border border-[#E5E2DB] p-5 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {CATEGORIES.map((cat) => (
                    <div 
                      key={cat.id}
                      onClick={() => {
                        onNavigate('category', cat.slug);
                        setShopDropdownOpen(false);
                      }}
                      className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#E8F3EE] transition-all cursor-pointer group"
                    >
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-lg object-cover bg-[#FAF7F2] border border-[#E5E2DB] group-hover:scale-105 transition-transform" 
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-[#0F3D2E] group-hover:text-[#FF7A45] transition-colors">{cat.name}</h4>
                          <span className="text-[11px] text-[#6B7269] font-medium">{cat.count} SKUs</span>
                        </div>
                        <p className="text-xs text-[#6B7269] line-clamp-1 mt-0.5">{cat.tldr}</p>
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-[#E5E2DB] flex items-center justify-between text-xs text-[#0F3D2E] px-2 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <ShieldCheck className="w-4 h-4 text-[#0F3D2E]" /> All products include 2-Year Factory Warranty & FCC/CE certification
                    </span>
                    <button 
                      onClick={() => {
                        onNavigate('categories');
                        setShopDropdownOpen(false);
                      }}
                      className="text-[#FF7A45] hover:underline"
                    >
                      View All Catalog →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Compare Models */}
            <button 
              onClick={() => onNavigate('compare')}
              className={`flex items-center gap-1.5 hover:text-[#0F3D2E] transition-colors ${
                currentView === 'compare' ? 'text-[#0F3D2E] font-bold' : ''
              }`}
            >
              <Scale className="w-4 h-4 text-[#6B7269]" />
              Compare Models
            </button>

            {/* B2B Wholesale Export */}
            <button 
              onClick={() => onNavigate('b2b')}
              className={`flex items-center gap-1.5 hover:text-[#0F3D2E] transition-colors ${
                currentView === 'b2b' ? 'text-[#0F3D2E] font-bold' : ''
              }`}
            >
              <Factory className="w-4 h-4 text-[#FF7A45]" />
              B2B Export
            </button>

            {/* Certifications & EU GPSR */}
            <button 
              onClick={() => onNavigate('certifications')}
              className={`flex items-center gap-1.5 hover:text-[#0F3D2E] transition-colors ${
                currentView === 'certifications' ? 'text-[#0F3D2E] font-bold' : ''
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certifications & GPSR</span>
            </button>

            {/* Explore / Blog Pillar Guides */}
            <button 
              onClick={() => onNavigate('blogs')}
              className={`flex items-center gap-1.5 hover:text-[#0F3D2E] transition-colors ${
                currentView.startsWith('blog') ? 'text-[#0F3D2E] font-bold' : ''
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#6B7269]" />
              Guides & Research
            </button>

            {/* Vet Experts */}
            <button 
              onClick={() => onNavigate('experts')}
              className={`flex items-center gap-1.5 hover:text-[#0F3D2E] transition-colors ${
                currentView === 'experts' ? 'text-[#0F3D2E] font-bold' : ''
              }`}
            >
              <Stethoscope className="w-4 h-4 text-[#6B7269]" />
              Vet Advisory Board
            </button>

            {/* Help / Support */}
            <button 
              onClick={() => onNavigate('help')}
              className={`hover:text-[#0F3D2E] transition-colors ${
                currentView === 'help' ? 'text-[#0F3D2E] font-bold' : ''
              }`}
            >
              Support
            </button>
          </nav>

          {/* Right Action Icons & B2B Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Trigger */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-xl hover:bg-[#E8F3EE] text-[#1A1D1B] transition-colors relative"
              aria-label="Search store"
            >
              <Search className="w-5 h-5 text-[#1A1D1B]" />
            </button>

            {/* Cart Trigger */}
            <button 
              onClick={onOpenCart}
              className="p-2.5 rounded-xl hover:bg-[#E8F3EE] text-[#1A1D1B] transition-colors relative flex items-center gap-1.5"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-5 h-5 text-[#0F3D2E]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF7A45] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Instant B2B RFQ Quote Button */}
            <button
              onClick={onOpenRFQ}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#FF7A45] hover:bg-[#e86935] text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-[#FF7A45]/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Factory className="w-4 h-4" />
              <span>Get Wholesale Quote</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1A1D1B] hover:bg-[#E8F3EE]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Instant Search Bar Dropdown */}
        {searchOpen && (
          <div className="py-4 border-t border-[#E5E2DB] animate-in fade-in duration-200">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search smart feeders, water fountains, litter boxes, clinical guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full px-5 py-3.5 pl-12 rounded-xl bg-white border border-[#E5E2DB] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] text-sm text-[#1A1D1B] shadow-inner"
              />
              <Search className="w-5 h-5 text-[#6B7269] absolute left-4 top-3.5" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-3.5 text-xs text-[#6B7269] hover:text-[#1A1D1B]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Search Suggestions */}
            {searchQuery && (
              <div className="max-w-2xl mx-auto mt-2 bg-white rounded-xl shadow-xl border border-[#E5E2DB] max-h-80 overflow-y-auto p-2">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onNavigate('product', prod.slug);
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#E8F3EE] cursor-pointer"
                    >
                      <img src={prod.image} alt={prod.name} referrerPolicy="no-referrer" className="w-12 h-12 object-cover rounded-md border" />
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-[#0F3D2E]">{prod.name}</h4>
                        <p className="text-[11px] text-[#6B7269]">{prod.subtitle}</p>
                      </div>
                      <span className="text-xs font-bold text-[#FF7A45]">${prod.price}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-[#6B7269] p-4 text-center">No matching products found. Try "feeder", "fountain", or "litter".</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E2DB] px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="space-y-2">
            <p className="text-xs font-bold text-[#6B7269] uppercase tracking-wider">Product Categories</p>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onNavigate('category', cat.slug);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left p-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#E8F3EE] text-xs font-semibold text-[#0F3D2E] flex items-center justify-between"
                >
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#E5E2DB] space-y-2">
            <button
              onClick={() => { onNavigate('compare'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm font-medium text-[#1A1D1B] flex items-center gap-2"
            >
              <Scale className="w-4 h-4 text-[#0F3D2E]" /> Model Comparison Matrix
            </button>
            <button
              onClick={() => { onNavigate('b2b'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm font-medium text-[#1A1D1B] flex items-center gap-2"
            >
              <Factory className="w-4 h-4 text-[#FF7A45]" /> B2B Wholesale & OEM/ODM Center
            </button>
            <button
              onClick={() => { onNavigate('certifications'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm font-medium text-[#1A1D1B] flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Export Certifications & GPSR Dossier
            </button>
            <button
              onClick={() => { onNavigate('blogs'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm font-medium text-[#1A1D1B] flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#0F3D2E]" /> Veterinary Guides & Research
            </button>
            <button
              onClick={() => { onNavigate('experts'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm font-medium text-[#1A1D1B] flex items-center gap-2"
            >
              <Stethoscope className="w-4 h-4 text-[#0F3D2E]" /> Vet Advisory Board
            </button>
            <button
              onClick={() => { onNavigate('help'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm font-medium text-[#1A1D1B] flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-[#0F3D2E]" /> Help & 2-Year Warranty
            </button>
          </div>

          <div className="pt-3 border-t border-[#E5E2DB]">
            <button
              onClick={() => { onOpenRFQ(); setMobileMenuOpen(false); }}
              className="w-full bg-[#FF7A45] text-white py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Factory className="w-4 h-4" /> Request B2B Wholesale Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
