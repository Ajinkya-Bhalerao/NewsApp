import "./App.css";
import React, { Component } from "react";
import TopNavBar from "./components/TopNavBar";
import News from "./components/News";

// MY API KEY : 28e2df57e43544eaa8e94f9b9d179520

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <News pageSize={5}/>
      </div>
    );
  }
}
