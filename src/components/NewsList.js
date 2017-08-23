import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';

class NewsList extends Component {
  state = { newsFeed: [] };

  componentWillMount() {
    const url = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy';
    axios.get(`${url}=top&apiKey=e53513dd44ad435abcdf2f4f098213c9`)
      .then(response => this.setState({ newsFeed: response.data.articles }));
  }

  renderAlbums() {
    return this.state.newsFeed.map(newsFeed =>
      <NewsDetail key={newsFeed.title} newsFeed={newsFeed} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default NewsList;
