import PropTypes from 'prop-types';

const FormRow = ({ labelText, type, name, defaultValue, onChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id='name'
        name={name}
        className='form-input'
        required
        defaultValue={defaultValue || ''}
        onChange={onChange}
      />
    </div>
  );
};

FormRow.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormRow;
