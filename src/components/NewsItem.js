import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="my-3">
          <Card style={{ width: "18rem" }} className="mx-3 my-2">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <a rel ="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default NewsItem;
