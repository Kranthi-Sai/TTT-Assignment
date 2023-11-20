import "./Card.css";

export const Card = ({ card }) => {
  const { title, intro, author, name, date, time, views } = card;

  return (
    <div className="Content">
      <h3>{title}</h3>
      <p>{intro}</p>
      <div className="footer">
        <div className="left">
          <span className="author">{author}</span>
          <span className="name">{name}</span>
        </div>
        <div className="right">
          <span>
            {date} - {time} Read - {views}
          </span>
        </div>
      </div>
    </div>
  );
};
