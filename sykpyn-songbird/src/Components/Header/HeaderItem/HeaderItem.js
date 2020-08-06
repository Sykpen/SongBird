import React, { Component } from "react";

class HeaderItem extends Component {
  render() {
    const { species } = this.props;
    return (
      <div
        className={
          this.props.active ? "header_main_item active" : "header_main_item "
        }
      >
        {species}
      </div>
    );
  }
}

export default HeaderItem;
