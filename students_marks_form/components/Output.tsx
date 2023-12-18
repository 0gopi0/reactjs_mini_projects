interface list {
  id: number;
  name: string;
  hallTicket: number;
  group: string;
  marks: number;
}
interface props {
  marksList: list[];
  onDelete: (id: number) => void;
}

const Output = ({ marksList, onDelete }: props) => {
  const average =
    parseInt(marksList.reduce((a, b) => b.marks + a, 0).toFixed(2)) /
    marksList.length;
  if (marksList.length === 0) return null;
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>hallTicket</th>
            <th>name</th>
            <th>group</th>
            <th>marks(%)</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {' '}
          {marksList.map((x) => (
            <tr key={x.id}>
              <td>{x.hallTicket}</td>
              <td>{x.name}</td>
              <td>{x.group}</td>
              <td>{x.marks}%</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(x.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>total</td>
            <td>{average.toFixed(2)}%</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Output;
