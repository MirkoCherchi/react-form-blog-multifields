import { TiDeleteOutline as Delete } from "react-icons/ti";
import { FiEdit as Edit } from "react-icons/fi";

const Card = ({ post, onDelete, onEdit }) => {
  const { title, content, category, tags, image, published } = post;

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {image && <img src={image} alt={title} />}
        <p>{content}</p>
      </div>
      <div className="card-footer">
        <p>Category: {category}</p>
        <p>
          Tags:{" "}
          {tags.map((tag, index) => (
            <span className="tag" key={index}>
              {"#"}
              {tag}{" "}
            </span>
          ))}
        </p>
        <p>{published ? "Published" : "Not Published"}</p>
        <div className="btnFlex">
          <button onClick={onEdit} className="btnEdit">
            <Edit className="iconEdit" />
          </button>
          <button onClick={onDelete} className="btnDelete">
            <Delete className="iconDelete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
