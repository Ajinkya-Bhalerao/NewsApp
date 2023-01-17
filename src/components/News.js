import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h3 style={{ marginLeft: "14px" }}>Top Headlines</h3>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="Cricket"
              description="This is the news for cricket game"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Cricket"
              description="This is the news for cricket game"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Cricket"
              description="This is the news for cricket game"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
