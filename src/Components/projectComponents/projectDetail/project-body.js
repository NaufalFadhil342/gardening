import React from 'react';
import gardening from '../../../Image/gardening/showering-plants.jpg';

const descriptions = (
  <>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in molestie massa, nec molestie purus. Pellentesque elementum blandit elit eu euismod. Etiam eu augue porttitor, convallis neque at, sodales elit. Nunc malesuada libero
      diam, non feugiat purus lobortis mollis. Morbi enim orci, hendrerit vel laoreet quis, commodo sed dui. Aenean laoreet urna ligula, in placerat diam consectetur ac. Nam viverra, turpis a bibendum commodo, ipsum libero viverra velit, et
      convallis leo mauris sit amet nisl. Nulla facilisis, turpis in malesuada bibendum, sem metus cursus ex, id volutpat arcu nisi vitae enim. Mauris molestie ornare arcu vitae ornare. Vestibulum ornare maximus aliquet.
    </span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in molestie massa, nec molestie purus. Pellentesque elementum blandit elit eu euismod. Etiam eu augue porttitor, convallis neque at, sodales elit. Nunc malesuada libero
      diam, non feugiat purus lobortis mollis. Morbi enim orci, hendrerit vel laoreet quis, commodo sed dui. Aenean laoreet urna ligula, in placerat diam consectetur ac. Nam viverra, turpis a bibendum commodo, ipsum libero viverra velit, et
      convallis leo mauris sit amet nisl. Nulla facilisis, turpis in malesuada bibendum, sem metus cursus ex, id volutpat arcu nisi vitae enim. Mauris molestie ornare arcu vitae ornare. Vestibulum ornare maximus aliquet.
    </span>
  </>
);

export const Projectbody = ({ images }) => {
  const rendered = images.map((image) => {
    return <div className="rendered" key={image.id} style={{ backgroundImage: `url(${image.src.original})` }} />;
  });

  const getImages = rendered;

  return (
    <div className="body">
      <h1>Steps of Gardening</h1>
      <div className="image" style={{ backgroundImage: `url(${gardening})` }} />
      <div className="before">
        <h1>Before</h1>
        <p>{descriptions}</p>
        <div className="firstStep">
          <div className="stepOne">{getImages[27]}</div>
          <div className="stepTwo">{getImages[18]}</div>
        </div>
      </div>
      <div className="after">
        <h1>After</h1>
        <p>{descriptions}</p>
        <div className="lastStep">
          <div className="stepOne">{getImages[13]}</div>
          <div className="stepTwo">{getImages[22]}</div>
        </div>
      </div>
    </div>
  );
};
