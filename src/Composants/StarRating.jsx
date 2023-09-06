import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

function StarRating({ rating }) {
  //tableau d'étoile qui servira au rendu final pourla notation
  const starList = [];

  //nombre d'étoile pleine
  const starFillCount = Math.floor(rating);

  //nombre de demi étoile
  const hasStarHalf = rating - starFillCount >= 0.5;

  //nombre d'étoile vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  //remplissage su tableau
  for (let s = 1; s <= starFillCount; s++) {
    starList.push(<StarFill key={"star-fill" + s} />);
  }
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  for (let s = 1; s <= emptyStarCount; s++) {
    starList.push(<StarEmpty key={"star-empty" + s} />);
  }

  return <div>{starList}</div>;
}
export default StarRating;
