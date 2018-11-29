import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    // update that fish
    //1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <form className="fish-edit">
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="price"
          value={price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          ref={this.statusRef}
          value={status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          placeholder="desc"
          value={desc}
          onChange={this.handleChange}
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="image"
          value={image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </form>
    );
  }
}

export default EditFishForm;
