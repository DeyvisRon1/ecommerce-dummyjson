import './FilterBar.css';

function FilterBar({ categories, selected, onSelect }) {
  return (
    <select
      className="filter-bar"
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Todas las categorías</option>
      {categories.map((cat) => (
        <option key={cat.slug} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}

export default FilterBar;