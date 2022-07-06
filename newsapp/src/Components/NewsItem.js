import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://s.yimg.com/os/creatr-uploaded-images/2022-01/353598f0-7765-11ec-bbbf-9f0ea07ea914" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Headline</h5>
            <p className="card-text">
              News Desc
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
