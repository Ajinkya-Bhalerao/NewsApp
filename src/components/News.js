import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28e2df57e43544eaa8e94f9b9d179520&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: false})
    let data = await fetch(url);
    let dataParse = await data.json();
    console.log(dataParse);
    this.setState({
      articles: dataParse.articles,
      totalResults: dataParse.totalResults,
      loading: false
    });
  }

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28e2df57e43544eaa8e94f9b9d179520&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let dataParse = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: dataParse.articles,
        loading: false,
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28e2df57e43544eaa8e94f9b9d179520&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let dataParse = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: dataParse.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.barrons.com/im-703207/social"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <Button
            disabled={this.state.page <= 1}
            variant="primary"
            className="my-3 mx-3"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </Button>
          <Button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            variant="primary"
            className="my-3 mx-3"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </Button>
        </div>
      </div>
    );
  }
}
export default News;
