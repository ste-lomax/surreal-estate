import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      bedrooms: "",
      bathrooms: "",
      type: "",
      price: "",
      city: "Manchester",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      Add Property Page
      <div className="add-property-items">
        <form onSubmit={handleAddProperty}>
          <div className="add-property-item">
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
                value={fields.title}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-item">
            <label htmlFor="bedrooms">
              Bedrooms
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                placeholder="0"
                min="1"
                required
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-item">
            <label htmlFor="bathrooms">
              Bathrooms
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                placeholder="0"
                min="1"
                required
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-item">
            <label htmlFor="type">
              Type
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-detached">Semi-detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
          </div>
          <div className="add-property-item">
            <label htmlFor="price">
              Price £
              <input
                type="number"
                id="price"
                name="price"
                min="1"
                placeholder="0"
                required
                value={fields.price}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-item">
            <label htmlFor="city">
              City
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </label>
          </div>
          <div className="add-property-item">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.smith@email.co.uk"
                required
                value={fields.email}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-item">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
