import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function Fleet() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const fleetItems = [
    {
      id: 1,
      name: "CAT 336 GC Excavator",
      category: "Excavator",
      brand: "Caterpillar",
      weightClass: "25-50 TONS",
      specs: {
        weight: "34,900 kg",
        power: "204 kW",
        depth: "7,530 mm"
      },
      status: "Ready to Ship",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmH2BNfC2bcoYQQaQBvJ9x5hA-h_QMmLAA5evCnY_JX4CgeGkuZMCsiWcSeYnnbnT3Jrj22prT6HsiHEti-xsWpNm_EQ-V4dGab2xk7nESeTGiqRy0kefUYkS8085nYksDUEZWQLI09z0910HqJh38oGK9vxanewSdEEHMgg3KRwZzLnipbAH--5ooMTMmBe8DOFkdpDkrqKYicntcAVB-0-cRsWnUTqDS-2xJ9Vw1Ec7M98DxcfYGJl1oRuRp50YlAHsnHOZXEQ"
    },
    {
      id: 2,
      name: "PC210LC-11 Excavator",
      category: "Excavator",
      brand: "Komatsu",
      weightClass: "10-25 TONS",
      specs: {
        weight: "22,120 kg",
        power: "123 kW",
        depth: "6,620 mm"
      },
      status: "Available",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQMTylLmvCN3yLm2IXct64CMLcDDGNrUCcXEDQmyKc2NGwnXcIzgAQuSvKaBk0RWS7amC6NxlyiNBAAfdYIKEgbHpnQW8nzeH--wnUjC8TrBBfv0G_gjR7hV01ionG0hgkggLypsjqUpaycD5RURziaTQwzn02MEet61BNCuhKS0uthi4b2mzfiIX96T2InQ4BZ6-3jwOq83ib51EVtqGhYN4hlSpq1PlcFi6GBV-Aix66wzCaUPXok70KXmTT0xyKq59tm18BXA"
    },
    {
      id: 3,
      name: "EC480D Crawler Excavator",
      category: "Excavator",
      brand: "Volvo CE",
      weightClass: "25-50 TONS",
      specs: {
        weight: "47,300 kg",
        power: "265 kW",
        depth: "9,170 mm"
      },
      status: "Reserved",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaIgJ9QMwWwWa-DUBkhDm8t93mvAWb7odqNMtNsSW7KT2EHI_BHWk7HoTj5Y4IEEXUfzmbzeZ2qjlbXgELOd1eEFlkdy86nBW51eCgJtn2u0kQOVEzDz9-NjlsgAwO1AaUZT-xVdoc3R94n2-LqXYzj8iJgOM-nzX0DOT5H5ICZDQuzCMklIJjupcmZElaa3evEJgNe6691NUDzhqYnXUezdTXAc64Q1UMKcAE480tBlBlRlyB4WtmuYf9_siZNEL2qmWyd-ZnZA"
    },
    {
      id: 4,
      name: "CAT 140 Motor Grader",
      category: "Grader",
      brand: "Caterpillar",
      weightClass: "10-25 TONS",
      specs: {
        weight: "19,135 kg",
        power: "186 kW",
        width: "3.7 m blade"
      },
      status: "Available",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC5D6z6BJEUzLVFMqjH_OlzutaTA0YqhG4qGFj8EJubB9HRY8L_EiJGFbPl4gsQvXze51yuEK-o44oy8Vfxme3NtpBAWgKpRmFe7aWcIFTMrCpZxGl_ocsS9Hu-3xG0ByUJP7g3Z_5DYvjiQxJ0w9LFj4uGDc-jG3pWfeI9swpIJsTuLKgrXaMI854Kxul-6NV30OBwdMsjKc-PaPXdNbPUOYgZwy8NJ1BhnKSi2GQPTUqk7b0mcMvc705RajfV3ztAfBwVOINfQ"
    },
    {
      id: 5,
      name: "L150H Wheel Loader (Shovel)",
      category: "Shovel",
      brand: "Volvo CE",
      weightClass: "25-50 TONS",
      specs: {
        weight: "25,600 kg",
        power: "220 kW",
        capacity: "4.4 m³ bucket"
      },
      status: "Available",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqTxSfoqmpVKoJL189VXeVEYUtlL2jcI1c_S5UdfnYiJax0yEy35rK3jvn9qqa_DhaHwkJSh4ne_2vI2dGdZo5inj2N7E4x9an18IQcfFlILm90b0ifdHX1U1zlyQAXBSHmyy63kFZRUS5_YJGPsridW4lBBaiw_PLnQKXiSouVKLCNtJ-mWEmXI-_jxj2RFr_7_7lZG5ds4tUoGm6ycjamnjn0PjvbcetcJ4uRq7hkK5VaRmmqRMyhl-QHtSKmXIoXn8sF3bt2w"
    },
    {
      id: 6,
      name: "Hamm 3411 Soil Compactor (Roller)",
      category: "Roller",
      brand: "Hamm",
      weightClass: "10-25 TONS",
      specs: {
        weight: "11,310 kg",
        power: "100 kW",
        width: "2,140 mm drum"
      },
      status: "Available",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyA3RPRWnfWAT5XXgvYSEIIjuwJTzfEHojmY_rUsPkA2ipVDb1cJl-nUVSGeMEH5hsqVrxS0Zys9WQXCn7XK1qY55mVI8Jslc54_YRf8cL2nwvzakwNLT6cImbi-bQJPNyo2BoUyoZPy8tOlUiUaUqM1pfnHwswNXmo0_CyYXFlKQrr0fpxRZ2Di3aSmpdxfM-QXhcDTrnAfX1nbZhRqeiIv29GPIkgSwtx0bnkb-5kN_h5Z89PZk6tZPwed9p-AcIroRaey44fw"
    }
  ];

  const categories = ["Excavator", "Roller", "Grader", "Shovel", "Boom Loader", "Recovery", "Bulldozer", "Crane"];
  const weightClasses = ["0-10 TONS", "10-25 TONS", "25-50 TONS", "50+ TONS"];
  const brands = ["Caterpillar", "Komatsu", "Volvo CE", "Hamm", "Sany", "Liebherr"];

  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleWeightChange = (wt) => {
    setSelectedWeights(prev => 
      prev.includes(wt) ? prev.filter(w => w !== wt) : [...prev, wt]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedWeights([]);
    setSelectedBrands([]);
    setSearch('');
  };

  const filteredFleet = useMemo(() => {
    return fleetItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                            item.brand.toLowerCase().includes(search.toLowerCase()) ||
                            item.category.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const matchesWeight = selectedWeights.length === 0 || selectedWeights.includes(item.weightClass);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);

      return matchesSearch && matchesCategory && matchesWeight && matchesBrand;
    });
  }, [search, selectedCategories, selectedWeights, selectedBrands]);

  return (
    <div>
      
      {/* Header Section */}
      <header className="pt-8 pb-12 bg-surface px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-lg">
          <div>
            <span className="font-label-bold text-primary uppercase tracking-widest block mb-2 text-sm font-semibold">Fleet Solutions</span>
            <h1 className="font-display-xl text-3xl sm:text-5xl uppercase font-black text-on-background">Heavy Equipment Catalog</h1>
          </div>
          <div className="flex items-center gap-4 border border-outline px-4 py-2 bg-white w-full md:w-auto max-w-md">
            <span className="material-symbols-outlined text-primary">search</span>
            <input 
              className="border-none focus:ring-0 font-body-md w-full md:w-64 bg-transparent" 
              placeholder="Search machinery, specs, or brands..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text" 
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap flex flex-col lg:flex-row gap-gutter">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-stack-lg">
          
          {/* Category Filter */}
          <div className="border border-outline-variant bg-white p-6">
            <h3 className="font-headline-sm text-lg uppercase mb-stack-md border-b-2 border-primary pb-2 font-bold">Equipment Type</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="form-checkbox text-primary rounded-none border-outline focus:ring-primary h-5 w-5" 
                  />
                  <span className={`font-label-bold text-sm uppercase group-hover:text-primary transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-bold' : ''}`}>
                    {cat}s
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Weight Class Filter */}
          <div className="border border-outline-variant bg-white p-6">
            <h3 className="font-headline-sm text-lg uppercase mb-stack-md border-b-2 border-primary pb-2 font-bold">Operating Weight</h3>
            <div className="space-y-2">
              {weightClasses.map((wt) => (
                <button 
                  key={wt} 
                  onClick={() => handleWeightChange(wt)}
                  className={`w-full text-left p-2 border font-label-bold text-xs uppercase transition-all ${selectedWeights.includes(wt) ? 'border-primary bg-primary text-on-primary font-bold' : 'border-outline-variant bg-surface hover:bg-primary-fixed-dim'}`}
                >
                  {wt}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Filter */}
          <div className="border border-outline-variant bg-white p-6">
            <h3 className="font-headline-sm text-lg uppercase mb-stack-md border-b-2 border-primary pb-2 font-bold">Top Brands</h3>
            <div className="grid grid-cols-2 gap-2">
              {brands.map((brand) => (
                <div 
                  key={brand} 
                  onClick={() => handleBrandChange(brand)}
                  className={`border p-2 flex items-center justify-center cursor-pointer transition-all ${selectedBrands.includes(brand) ? 'border-primary bg-primary/10 font-bold text-primary' : 'border-outline-variant grayscale hover:grayscale-0'}`}
                >
                  <span className="font-bold text-[10px] uppercase text-center">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reset Filters */}
          <button 
            onClick={clearFilters}
            className="w-full py-3 bg-on-surface text-white font-label-bold text-sm uppercase hover:bg-primary transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Reset Filters
          </button>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-grow">
          {/* Results Bar */}
          <div className="flex justify-between items-center mb-stack-lg">
            <p className="font-body-md text-on-surface-variant text-sm">
              Showing <span className="font-bold text-on-surface">{filteredFleet.length}</span> units available for rent
            </p>
          </div>

          {/* Grid */}
          {filteredFleet.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-outline-variant bg-white">
              <span className="material-symbols-outlined text-5xl text-outline mb-4">search_off</span>
              <p className="font-label-bold text-lg uppercase">No Equipment Found</p>
              <p className="text-secondary text-sm mt-2">Try clearing your filters or widening your search term.</p>
              <button 
                onClick={clearFilters}
                className="mt-6 px-6 py-2 bg-primary text-on-primary font-label-bold uppercase text-xs hover:bg-on-surface transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {filteredFleet.map((item) => (
                <div key={item.id} className="equipment-card bg-white border border-outline-variant flex flex-col transition-all duration-300">
                  <div className="relative h-56 overflow-hidden group">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={item.img} 
                      alt={item.name} 
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 font-label-bold text-xs uppercase ${item.status === 'Ready to Ship' ? 'bg-primary text-on-primary' : item.status === 'Reserved' ? 'bg-error text-white' : 'bg-on-surface text-white'}`}>
                      {item.status}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-primary font-label-bold text-xs uppercase tracking-wider">{item.brand}</span>
                      <h4 className="font-headline-sm text-xl uppercase mt-1 mb-4 font-semibold text-on-surface">{item.name}</h4>
                      
                      <div className="space-y-2 border-t border-b border-surface-container py-4 mb-6 text-sm">
                        {Object.entries(item.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="font-label-sm text-on-surface-variant uppercase text-xs">{key}</span>
                            <span className="font-label-bold text-on-surface font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        to="/contact" 
                        state={{ selectedEquipment: item.name }}
                        className="btn-quote flex-grow text-center py-3 bg-primary text-on-primary font-label-bold text-sm uppercase tracking-wide transition-all"
                      >
                        Request Quote
                      </Link>
                      <Link 
                        to="/contact"
                        className="p-3 border-2 border-on-surface hover:bg-on-surface hover:text-white transition-all flex items-center justify-center"
                      >
                        <span className="material-symbols-outlined">visibility</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
