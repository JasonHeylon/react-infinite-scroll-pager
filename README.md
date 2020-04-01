# react-infinite-scroll-pager

> A infinite scroller pager component for React

[![NPM](https://img.shields.io/npm/v/react-infinite-scroll-pager.svg)](https://www.npmjs.com/package/react-infinite-scroll-pager) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-infinite-scroll-pager
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'react-infinite-scroll-pager'

class Example extends Component {
  render() {
    return (
      <InfiniteScrollPager
        page={page}
        totalPage={5}
        isLoading={isLoading}
        loader={<div>loading...</div>}
        noMoreTip={<div>No more articles</div>}
        onPageChange={page => loadList(page)}
      >
        {list.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </InfiniteScrollPager>
    )
  }
}
```

## License

MIT © [JasonHeylon](https://github.com/JasonHeylon)
