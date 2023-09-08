function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className="container">
        <img className="img" src={image} alt="logo" />
        <span className="title">{title}</span>
      </div>
      <span className="subtitle">{subtitle}</span>
    </>
  );
}
export default Logo;
