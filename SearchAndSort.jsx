import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SearchAndSort = ({ 
  searchQuery, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  totalGames,
  filteredGames 
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const sortOptions = [
    { value: 'popularity', label: 'Paling Populer' },
    { value: 'name-asc', label: 'Nama A-Z' },
    { value: 'name-desc', label: 'Nama Z-A' },
    { value: 'price-low', label: 'Harga Terendah' },
    { value: 'price-high', label: 'Harga Tertinggi' },
    { value: 'rating', label: 'Rating Tertinggi' },
    { value: 'newest', label: 'Terbaru' }
  ];

  const popularSearches = [
    'Mobile Legends',
    'Free Fire',
    'PUBG Mobile',
    'Genshin Impact',
    'Honkai Star Rail'
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Section */}
        <div className="flex-1 max-w-md relative">
          <div className="relative">
            <Input
              type="search"
              placeholder="Cari game favorit kamu..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e?.target?.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
            />
          </div>

          {/* Search Suggestions */}
          {isSearchFocused && searchQuery?.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-gaming-modal z-50">
              <div className="p-3">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Pencarian Populer
                </p>
                <div className="space-y-1">
                  {popularSearches?.map((search) => (
                    <button
                      key={search}
                      onClick={() => onSearchChange(search)}
                      className="flex items-center space-x-2 w-full px-2 py-1 text-sm text-text-secondary hover:text-text-primary hover:bg-muted rounded transition-colors duration-200"
                    >
                      <Icon name="TrendingUp" size={14} />
                      <span>{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sort and Results Info */}
        <div className="flex items-center space-x-4">
          {/* Results Count */}
          <div className="text-sm text-text-secondary">
            Menampilkan <span className="font-semibold text-text-primary">{filteredGames}</span> dari <span className="font-semibold text-text-primary">{totalGames}</span> game
          </div>

          {/* Sort Dropdown */}
          <div className="min-w-[200px]">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={onSortChange}
              placeholder="Urutkan berdasarkan"
            />
          </div>
        </div>
      </div>
      {/* Active Search Info */}
      {searchQuery && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Search" size={16} className="text-primary" />
              <span className="text-sm text-text-secondary">
                Hasil pencarian untuk: <span className="font-semibold text-text-primary">"{searchQuery}"</span>
              </span>
            </div>
            <button
              onClick={() => onSearchChange('')}
              className="flex items-center space-x-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Icon name="X" size={14} />
              <span>Hapus</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndSort;