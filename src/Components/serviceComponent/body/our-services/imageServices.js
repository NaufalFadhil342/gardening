import { Link, useNavigate } from 'react-router-dom';

export const ImageServices = ({ className, image, work }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <div style={{ backgroundImage: `url(${image})` }} onClick={() => navigate(`/services/${work.id}`)}>
        <div className="backyard">
          <i>{work.ourworkIcon}</i>
          <h1>{work.label}</h1>
          <p>{work.text}</p>
          <Link>Read More</Link>
        </div>
      </div>
    </div>
  );
};
