import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } =
      this.props;
    let convertedDate = new Date(date);
    return (
      <div>
        <div className="my-3">
          <Card className="mx-3 my-2">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>
                {title}
                <span
                  className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                  style={{ left: "90%", zIndex: "1" }}
                >
                  {source.name}
                </span>
              </Card.Title>
              <Card.Text>{description}</Card.Text>
              <hr></hr>
              <Card.Text>
                <small>
                  By {author ? author : "Unknown"} on
                  {convertedDate.toGMTString()}
                </small>
              </Card.Text>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default NewsItem;
