import React from 'react';

export const Location = () => {
  return (
    <div className="location">
      <div className="bogor">
        <h1>Bogor</h1>
        <div>
          <div className="address">16750 Citeko Puncak Bogor West Java, Indonesia</div>
          <div className="times">
            <span>Mon - Fri ( 8am - 5pm )</span>
            <span>Sat - Sun ( Close )</span>
          </div>
          <div className="cellPhone">(+62) 1234 567 890</div>
        </div>
      </div>
      <div className="jakarta">
        <h1>Jakarta</h1>
        <div>
          <div className="address">12330 Bintaro South Jakarta, Indonesia</div>
          <div className="times">
            <span>Mon - Fri ( 9am - 6pm )</span>
            <span>Sat - Sun ( Close )</span>
          </div>
          <div className="cellPhone">(+62) 1234 567 890</div>
        </div>
      </div>
      <div className="sukabumi">
        <h1>Sukabumi</h1>
        <div>
          <div className="address">43186 Buniasih Sukabumi West Java, Indonesia</div>
          <div className="times">
            <span>Mon - Fri ( 8am - 5pm )</span>
            <span>Sat - Sun ( Close )</span>
          </div>
          <div className="cellPhone">(+62) 1234 567 890</div>
        </div>
      </div>
    </div>
  );
};
