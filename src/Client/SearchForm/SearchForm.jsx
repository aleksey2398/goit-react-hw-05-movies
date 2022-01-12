import { useForm } from "../../Shared/hooks";
import PropTypes from "prop-types";
import { initialState } from "./initianState";

const Form = ({ onSubmit }) => {
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={data.q} onChange={handleChange} type="text" />
    </form>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};