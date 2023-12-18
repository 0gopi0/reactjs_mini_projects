import results from './Results';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//this is to show data validation errors
const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Discription should be minimum 3 characters' })
    .max(25, { message: 'Discription cannot  be more than 25 characters' }),
  hallTicket: z
    .number({ invalid_type_error: 'hallTicket number is required' })
    .min(2)
    .max(10000),
  group: z.enum(results),
  marks: z.number({ invalid_type_error: 'marks is required' }).min(1).max(100),
});

//creating structure for object like props
type expenceFormData = z.infer<typeof schema>;

interface props {
  onSubmit: (data: expenceFormData) => void;
}

const Input = ({ onSubmit }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<expenceFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data), reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="hallTicket" className="form-label">
            Hall Ticket
          </label>
          <input
            {...register('hallTicket', { valueAsNumber: true })}
            id="hallTicket"
            type="number"
            className="form-control"
          />
          {errors.hallTicket && (
            <p className="text-danger">{errors.hallTicket.message}</p>
          )}
        </div>

        <div className="md-3">
          <label htmlFor="group" className="form-label">
            Group
          </label>
          <select {...register('group')} id="group" className="form-select">
            <option value=""></option>
            {results.map((group) => (
              <option id={group} value={group}>
                {group}
              </option>
            ))}
          </select>
          {errors.group && <p className="text-danger">group is required</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="marks" className="form-label">
            %Marks
          </label>
          <input
            {...register('marks', { valueAsNumber: true })}
            id="marks"
            type="number"
            className="form-control"
          />
          {errors.marks && (
            <p className="text-danger">{errors.marks.message}</p>
          )}
        </div>
        <div className="mt-3">
          <button className="btn btn-primary">submit</button>
        </div>
      </form>
    </>
  );
};

export default Input;
