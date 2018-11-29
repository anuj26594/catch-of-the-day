import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    //first reinstate our local localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding = this.ref;
  }

  addFish = fish => {
    //create a copy
    const fishes = { ...this.state.fishes };
    //add new fish to fish variable
    fishes[`fish${Date.now()}`] = fish;
    //set new fishes object
    this.setState({
      fishes
    });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  deleteFish = key => {
    //1. copy of state
    const fishes = { ...this.state.fishes };
    //2. update the state
    fishes[key] = null;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1. Take a copy of State
    const order = { ...this.state.order };
    //2. Add to order or update the number in order
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update state
    this.setState({ order });
  };

  removeFromOrder = key => {
    //1. Take a copy
    const order = { ...this.state.order };
    //2. update order
    if (order[key] > 1) {
      order[key] = order[key] - 1;
    } else {
      delete order[key];
    }
    //update state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="FRESH SEAFOOD MARKET" age="100" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
                removeFromOrder={this.removeFromOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
