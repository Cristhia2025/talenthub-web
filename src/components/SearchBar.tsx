import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Buscar candidatos"
      aria-label="Buscar candidatos"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default SearchBar;
