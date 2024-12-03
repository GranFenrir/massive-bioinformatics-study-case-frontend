import React from 'react';

interface FiltersProps {
  nameFilter: string;
  statusFilter: string;
  speciesFilter: string;
  onNameFilterChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
  onSpeciesFilterChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ nameFilter, statusFilter, speciesFilter, onNameFilterChange, onStatusFilterChange, onSpeciesFilterChange }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => onNameFilterChange(e.target.value)}
        className="border rounded p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Filter by status"
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        className="border rounded p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Filter by species"
        value={speciesFilter}
        onChange={(e) => onSpeciesFilterChange(e.target.value)}
        className="border rounded p-2"
      />
    </div>
  );
};

export default Filters;