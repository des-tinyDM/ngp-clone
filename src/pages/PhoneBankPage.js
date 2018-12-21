import React, { Component } from "react";

class PhoneBankPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page">
        <header className="page__header">
          <h1>Phone Bank</h1>
        </header>

        <section className="page__body">
          <p>Body</p>
        </section>
      </div>
    );
  }
}

export default PhoneBankPage;
