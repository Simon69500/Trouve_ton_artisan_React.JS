
const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {

      // étoile pleine
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {

      // étoile demi-pleine
      stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
    } else {
        
      // étoile vide
      stars.push(<i key={i} className="bi bi-star text-warning"></i>);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
