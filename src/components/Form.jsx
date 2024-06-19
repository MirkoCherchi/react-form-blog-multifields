import { useState } from "react";
import { TiDeleteOutline as Delete } from "react-icons/ti";
import { FiEdit as Edit, FiSave as Save } from "react-icons/fi";

const Form = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postArray, setPostArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedPosts = [...postArray];
      updatedPosts[editIndex] = editTitle;
      setPostArray(updatedPosts);
      setEditIndex(null);
      setEditTitle("");
    } else {
      setPostArray([...postArray, postTitle]);
      setPostTitle("");
    }
  };

  const handleDelete = (index) => {
    const newPostArray = postArray.filter((_, i) => i !== index);
    setPostArray(newPostArray);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(postArray[index]);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            {editIndex !== null ? "Modifica Post" : "Inserisci Post"}
          </label>
          <input
            type="text"
            value={editIndex !== null ? editTitle : postTitle}
            onChange={(e) =>
              editIndex !== null
                ? setEditTitle(e.target.value)
                : setPostTitle(e.target.value)
            }
          />
          <button
            className={`btnSubmit ${editIndex !== null ? "btnSave" : ""}`}
            type="submit"
          >
            {editIndex !== null ? <Save className="iconSave" /> : "Submit"}
          </button>
        </form>
        <div>
          <ul>
            {postArray.map((post, index) => (
              <li className="listItem" key={index}>
                <h5 className="postTitle">{post}</h5>
                <div className="btnFlex">
                  <button onClick={() => handleEdit(index)} className="btnEdit">
                    <Edit className="iconEdit" />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btnDelete"
                  >
                    <Delete className="iconDelete" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Form;
