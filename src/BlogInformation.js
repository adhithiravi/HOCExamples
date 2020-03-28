import React from "react";
import "./styles.css";

class BlogInformation extends React.Component {
  render() {
    return (
      <div className="blogInfo">
        <h3>Blog Author: {this.props.author}</h3>
        <h3>
          Article:{" "}
          {this.props.article ? this.props.article : "No articles written"}
        </h3>
      </div>
    );
  }
}

const myHOCFunction = MyComponent => {
  return class extends MyComponent {
    render() {
      if (this.props.author) {
        return <MyComponent {...this.props} />;
      } else {
        return (
          <div className="UserInfo">
            <h3>There are no authors at this time</h3>
          </div>
        );
      }
    }
  };
};

export default myHOCFunction(BlogInformation);
