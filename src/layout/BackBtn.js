import {
  useNavigate,
} from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <a className="demo-back-link" onClick={() => navigate(-1)} href="#">
      <i className="fas fa-arrow-left" />
    </a>
  );
};
export default BackBtn;
