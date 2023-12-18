import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';
import Filter from './components/Filter';

const App = () => {
  const [one, two] = useState('');
  const [marksList, setMarksList] = useState([
    { id: 1, name: 'gopi', hallTicket: 1234, group: 'mca', marks: 75 },
  ]);
  const filteredmarksList = one
    ? marksList.filter((expense) => expense.group === one)
    : marksList;
  return (
    <>
      <div className="mb-4">
        <Input
          onSubmit={(data) =>
            setMarksList([...marksList, { ...data, id: marksList.length + 1 }])
          }
        />
      </div>
      <Filter selectedItem={(c) => two(c)} />
      <Output
        marksList={filteredmarksList}
        onDelete={(id) => setMarksList(marksList.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;
