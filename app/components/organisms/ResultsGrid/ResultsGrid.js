import React, { Component } from 'react';
import ResultsGridItem from '../../molecules/ResultsGridItem/ResultsGridItem';

export default class ResultsGrid extends Component {
  render() {
    return (
      <section className="grid grid__4">
        <ResultsGridItem />
      </section>
    );
  }
}
