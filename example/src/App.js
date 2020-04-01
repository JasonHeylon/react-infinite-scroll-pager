import React from "react";

import { InfiniteScrollPager } from "react-infinite-scroll-pager";

const getUrl = page => `https://cnodejs.org/api/v1/topics?page=${page}`;

const fetchArticles = page => {
  return fetch(getUrl(page))
    .then(res => res.json())
    .then(json => json.data);
};

const Article = ({ article: { id, title, create_at: createdAt } }) => {
  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
      <h3>{title}</h3>
      <address>{new Date(createdAt).toLocaleString()}</address>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);

    this.state = {
      page: 1,
      isLoading: false,
      articles: []
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.fetchData(page);
  }

  fetchData(page) {
    this.setState({ isLoading: true });

    fetchArticles(page).then(articles => {
      this.setState({
        articles: [...this.state.articles, ...articles],
        isLoading: false,
        page: page
      });
    });
  }

  handlePageChange(page) {
    this.fetchData(page);
  }

  render() {
    const { page, isLoading, articles } = this.state;
    return (
      <div>
        <h1>React infiniteScrollPager Example</h1>
        <InfiniteScrollPager
          page={page}
          totalPage={5}
          isLoading={isLoading}
          loader={<div style={{ textAlign: "center" }}>loading...</div>}
          noMoreTip={
            <div style={{ textAlign: "center" }}>No more articles</div>
          }
          onPageChange={this.handlePageChange}
        >
          {articles.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </InfiniteScrollPager>
      </div>
    );
  }
}

export default App;
