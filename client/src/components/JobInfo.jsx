import Wrapper from '../assets/wrappers/JobInfo';
import PropTypes from 'prop-types';

const JobInfo = ({ text, icon }) => {
  return (
    <Wrapper>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>{text}</span>
    </Wrapper>
  );
};

JobInfo.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
};
export default JobInfo;
