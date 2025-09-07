import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeCategory === category?.id
              ? 'bg-primary text-primary-foreground shadow-gaming'
              : 'bg-muted text-text-secondary hover:text-text-primary hover:bg-muted/80'
          }`}
        >
          <Icon name={category?.icon} size={18} />
          <span>{category?.name}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeCategory === category?.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-text-secondary/20 text-text-secondary'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;