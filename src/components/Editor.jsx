import PropTypes from 'prop-types';

const Editor = ({ handleChange, defaultValue }) => {
  return (
    <textarea
      id="editor"
      className="form-control"
      style={{ minHeight: '200px' }}
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

Editor.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default Editor;
