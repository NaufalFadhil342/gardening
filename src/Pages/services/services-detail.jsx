import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../Styles/servicesDetail.css';
import detailImage from '../../Image/gardening/garden.jpg';
import { FeedServices } from '../../Components/serviceComponent/serviceDetail/feedservices';
import { ContactDetail } from '../../Components/serviceComponent/serviceDetail/contactDetail';
import { workIcon } from '../../Components/work/work';
import { JobDesk } from '../../Components/serviceComponent/serviceDetail/jobdesk';

const Servicesdetail = () => {
  const [jobdesk, setJobdesk] = useState(workIcon);
  const { id } = useParams();

  return (
    <div className="serviceDetail">
      <div className="header" style={{ backgroundImage: `url(${detailImage})` }}>
        <div className="backyard">
          <h1>Service Detail</h1>
          <Link to="/services">Services</Link>
        </div>
      </div>
      <div className="body">
        <JobDesk jobdesk={jobdesk} setJobdesk={setJobdesk} id={id} />
        <FeedServices />
        <ContactDetail contactImage={detailImage} />
      </div>
    </div>
  );
};

export default Servicesdetail;
