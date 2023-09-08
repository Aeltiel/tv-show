import { SMALL_IMG_COVER_BASE_URL } from "../config";

function TVShowListItem({ tvshow, onClick }) {
  return (
    <div className="showItem__container" onClick={() => onClick(tvshow)}>
      <img
        className="showItem__img"
        src={SMALL_IMG_COVER_BASE_URL + tvshow.backdrop_path}
        alt="TVShowImg"
      />
      <div className="showItem__title">{tvshow.name}</div>
    </div>
  );
}
export default TVShowListItem;
