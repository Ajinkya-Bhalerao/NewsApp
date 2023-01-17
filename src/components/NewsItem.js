import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div>
        <Card style={{ width: "18rem" }} className="mx-3 my-2">
          <Card.Img variant="top" src="https://cdn.24.co.za/files/Cms/General/d/2131/47fdb2e39d3345d8a7c74639df5913f6.jpg" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    );
  }
}

export default NewsItem;
