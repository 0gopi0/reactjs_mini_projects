import { z } from 'zod';
import results from './Results';

z.object({});

interface props {
  selectedItem: (c: string) => void;
}
const Filter = ({ selectedItem }: props) => {
  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(event) => selectedItem(event.target.value)}
      >
        <option value="">All Elements</option>
        {results.map((category) => (
          <option id={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
