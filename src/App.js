import React from "react";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"
import { render } from "@testing-library/react";

const monday = mondaySdk();

const theme = {
  green: {
    default: "#99EE99",
    hover: "#c7f6b6"
  }
};

function recycle() {
  alert("This Item can be recyled!");
}

function notRecycle() {
  alert("This Item can not be recyled, please dispose of it properly!");
}
class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }



  render() {
    return <div className="App">
    <Tabs>
      <TabList>
        <Tab>Glass</Tab>
        <Tab>Metal</Tab>
        <Tab>Electronics</Tab>
      </TabList>



      <TabPanel>
        <h2>What type of glass item?</h2>
        <button onClick={recycle}>
          Drink Bottles
        </button>
        <button onClick={recycle}>
          Glass Jars
        </button>
        <button onClick={notRecycle}>
          Medicine Bottles
        </button>
      </TabPanel>

      <TabPanel>
        <h2>What type of metal item?</h2>
        <button onClick={recycle}>
          Soda Cans
        </button>
        <button onClick={recycle}>
          Paint Cans
        </button>
        <button onClick={notRecycle}>
          Pots and Pans
        </button>
      </TabPanel>

      <TabPanel>
        <h2>What type of electronics item?</h2>
        <button onClick={recycle}>
          Computers, Laptops, and Accessories
        </button>
        <button onClick={recycle}>
          Cell Phones, iPads/Tablets, iPods/MP3 players
        </button>
        <button onClick={notRecycle}>
          Batteries
        </button>
      </TabPanel>
  </Tabs>
    </div>;
  }
}

export default App;
