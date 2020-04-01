import * as React from "react";

const HEIGHT_FIX = 5;

interface IProps {
  page: number;
  totalPage: number;
  isLoading: boolean;
  loader: string | JSX.Element;
  noMoreTip: string | JSX.Element;

  onPageChange: (page: number) => void;
}

export default class InfiniteScrollPager extends React.Component<IProps> {
  private wrapperRef = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount(): void {
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (): void => {
    const { isLoading, totalPage, page } = this.props;
    const wrapper = this.wrapperRef.current;

    if (!wrapper || isLoading || totalPage <= page) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    if (wrapperRect.bottom < window.innerHeight + HEIGHT_FIX) {
      this.loadNextPage();
    }
  };

  loadNextPage(): void {
    const { page, onPageChange } = this.props;

    onPageChange(page + 1);
  }

  render(): JSX.Element {
    const {
      children,
      isLoading,
      loader,
      totalPage,
      page,
      noMoreTip
    } = this.props;

    return (
      <div ref={this.wrapperRef}>
        {children}
        {isLoading && loader}
        {totalPage <= page && noMoreTip}
      </div>
    );
  }
}
