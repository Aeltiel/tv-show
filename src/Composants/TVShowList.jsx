import TVShowListItem from "../Composants/TVShowListItem";

function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className="Reco__title">You may also like : </div>
      <div className="Reco__container">
        {tvShowList.map((tvShow) => {
          return (
            <span className="Reco__space" key={tvShow.id}>
              <TVShowListItem onClick={onClickItem} tvshow={tvShow} />
            </span>
          );
        })}
      </div>
    </>
  );
}
export default TVShowList;
