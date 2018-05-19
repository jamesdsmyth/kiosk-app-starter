import React, { Component } from 'react';

/*
  The component renders the landing page.
 */
class LandingPage extends Component<Props> {
  render() {
    return (
      <div className="container">
        <h1>Main</h1>
        <section className="grid grid--3">
          <div className="">
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
