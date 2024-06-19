import { useState } from "react";
import { TiDeleteOutline as Delete } from "react-icons/ti";
import { FiEdit as Edit, FiSave as Save } from "react-icons/fi";
import Card from "./Card";

const Form = () => {
  const listaTags = [
    "Viaggio",
    "Cucina",
    "Fitness",
    "Arte",
    "Musica",
    "Moda",
    "Sport",
    "Salute",
    "Film",
    "Libri",
    "Fotografia",
    "Natura",
    "Casa e Giardino",
    "Animazione",
    "Storia",
  ];
  const listaCategorie = [
    "Tecnologia",
    "Notizie",
    "Tutorial",
    "Viaggi",
    "Cucina",
    "Sport",
    "Musica",
    "Film e TV",
    "Libri",
    "Salute e benessere",
    "Moda",
    "Finanza",
    "Automobili",
    "Fai da te",
    "Animazioni e fumetti",
  ];

  const [postArray, setPostArray] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: [],
    image: "",
    published: false,
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedPosts = [...postArray];
      updatedPosts[editIndex] = { ...formData };
      setPostArray(updatedPosts);
      setEditIndex(null);
    } else {
      setPostArray([...postArray, { ...formData }]);
    }
    setFormData({
      title: "",
      content: "",
      category: "",
      tags: [],
      image: "",
      published: false,
    });
  };

  const handleDelete = (index) => {
    const newPostArray = postArray.filter((_, i) => i !== index);
    setPostArray(newPostArray);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const postToEdit = postArray[index];
    setFormData({
      title: postToEdit.title,
      content: postToEdit.content,
      category: postToEdit.category,
      tags: postToEdit.tags,
      image: postToEdit.image,
      published: postToEdit.published,
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => handleField("title", e.target.value)}
          />
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={(e) => handleField("content", e.target.value)}
          />
          <select
            name="category"
            value={formData.category}
            onChange={(e) => handleField("category", e.target.value)}
          >
            <option value="">Select Category</option>
            {listaCategorie.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div>
            <label>Tags:</label>
            {listaTags.map((tag, tagIndex) => (
              <label key={tagIndex}>
                <input
                  type="checkbox"
                  checked={formData.tags.includes(tag)}
                  onChange={() => {
                    const currentTags = formData.tags;
                    const updatedTags = currentTags.includes(tag)
                      ? currentTags.filter((t) => t !== tag)
                      : [...currentTags, tag];
                    handleField("tags", updatedTags);
                  }}
                />
                {tag}
              </label>
            ))}
          </div>
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => handleField("image", e.target.value)}
          />
          <label>
            <input
              name="published"
              type="checkbox"
              checked={formData.published}
              onChange={(e) => handleField("published", e.target.checked)}
            />
            Published
          </label>
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
                <Card
                  post={post}
                  onDelete={() => handleDelete(index)}
                  onEdit={() => handleEdit(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Form;
