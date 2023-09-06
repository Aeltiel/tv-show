import StarRating from "./StarRating";

function TVShowDetail({ tvshow }) {
  const rating = tvshow.vote_average / 2;
  return (
    <div>
      <div className="show__title">{tvshow.name}</div>
      <div className="show__ratingContainer">
        <StarRating rating={rating} />
        <div className="show__rating">{rating}/5</div>
      </div>
      <div className="show__overview">{tvshow.overview}</div>
    </div>
  );
}
export default TVShowDetail;
