import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PortfolioFilters from './PortfolioFilters';
import type { PortfolioFilters as PortfolioFiltersType } from '../../lib/types/portfolio';

const mockProps = {
  filters: {} as PortfolioFiltersType,
  onUpdateFilter: vi.fn(),
  onClearFilters: vi.fn(),
  searchTerm: '',
  onSearchChange: vi.fn(),
  totalProjects: 10,
  filteredCount: 10,
};

describe('PortfolioFilters', () => {
  it('renders filter sections correctly', () => {
    render(<PortfolioFilters {...mockProps} />);
    
    expect(screen.getByText('Filter Portfolio')).toBeInTheDocument();
    expect(screen.getByText('10 of 10 projects')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search projects...')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('Industries')).toBeInTheDocument();
  });

  it('calls onSearchChange when typing in search input', () => {
    render(<PortfolioFilters {...mockProps} />);
    
    const searchInput = screen.getByPlaceholderText('Search projects...');
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    
    expect(mockProps.onSearchChange).toHaveBeenCalledWith('test search');
  });

  it('shows clear filters button when filters are active', () => {
    const filtersWithActive = {
      ...mockProps,
      filters: { category: 'ai-ml' as const } as PortfolioFiltersType,
    };
    
    render(<PortfolioFilters {...filtersWithActive} />);
    
    expect(screen.getByText('Clear All Filters')).toBeInTheDocument();
  });

  it('calls onUpdateFilter when clicking filter buttons', () => {
    render(<PortfolioFilters {...mockProps} />);
    
    const featuredButton = screen.getByText('Featured');
    fireEvent.click(featuredButton);
    
    expect(mockProps.onUpdateFilter).toHaveBeenCalledWith('featured', true);
  });

  it('calls onClearFilters when clicking clear button', () => {
    const filtersWithActive = {
      ...mockProps,
      filters: { featured: true } as PortfolioFiltersType,
    };
    
    render(<PortfolioFilters {...filtersWithActive} />);
    
    const clearButton = screen.getByText('Clear All Filters');
    fireEvent.click(clearButton);
    
    expect(mockProps.onClearFilters).toHaveBeenCalled();
  });
});