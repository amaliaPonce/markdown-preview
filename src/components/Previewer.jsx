import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Previewer = ({ markdown }) => {
  return (
    <div id="preview" className="card mt-3">
      <div className="card-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

Previewer.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Previewer;
