(this["webpackJsonpreact-infinite-scroll-pager-example"]=this["webpackJsonpreact-infinite-scroll-pager-example"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);a(3);var n=a(0),r=a.n(n),o=a(1),i=a.n(o);var l=function(e){var t,a;function r(){var t;return(t=e.apply(this,arguments)||this).wrapperRef=Object(n.createRef)(),t.handleScroll=function(){var e=t.props,a=e.isLoading,n=e.totalPage,r=e.page,o=t.wrapperRef.current;!o||a||n<=r||o.getBoundingClientRect().bottom<window.innerHeight+5&&t.loadNextPage()},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){document.addEventListener("scroll",this.handleScroll)},o.componentWillUnmount=function(){document.removeEventListener("scroll",this.handleScroll)},o.loadNextPage=function(){var e=this.props,t=e.page;(0,e.onPageChange)(t+1)},o.render=function(){var e=this.props,t=e.children,a=e.isLoading,r=e.loader,o=e.totalPage,i=e.page,l=e.noMoreTip;return Object(n.createElement)("div",{ref:this.wrapperRef},t,a&&r,o<=i&&l)},r}(n.Component);const c=({article:{id:e,title:t,create_at:a}})=>r.a.createElement("div",{style:{padding:"20px",borderBottom:"1px solid #eee"}},r.a.createElement("h3",null,t),r.a.createElement("address",null,new Date(a).toLocaleString()));class s extends r.a.Component{constructor(e){super(e),this.handlePageChange=this.handlePageChange.bind(this),this.state={page:1,isLoading:!1,articles:[]}}componentDidMount(){const e=this.state.page;this.fetchData(e)}fetchData(e){this.setState({isLoading:!0}),(e=>fetch((e=>"https://cnodejs.org/api/v1/topics?page=".concat(e))(e)).then(e=>e.json()).then(e=>e.data))(e).then(t=>{this.setState({articles:[...this.state.articles,...t],isLoading:!1,page:e})})}handlePageChange(e){this.fetchData(e)}render(){const e=this.state,t=e.page,a=e.isLoading,n=e.articles;return r.a.createElement("div",null,r.a.createElement("h1",null,"React infiniteScrollPager Example"),r.a.createElement(l,{page:t,totalPage:5,isLoading:a,loader:r.a.createElement("div",{style:{textAlign:"center"}},"loading..."),noMoreTip:r.a.createElement("div",{style:{textAlign:"center"}},"No more articles"),onPageChange:this.handlePageChange},n.map(e=>r.a.createElement(c,{key:e.id,article:e}))))}}var p=s;i.a.render(r.a.createElement(p,null),document.getElementById("root"))},2:function(e,t,a){e.exports=a(10)},3:function(e,t,a){}},[[2,1,2]]]);
//# sourceMappingURL=main.09018050.chunk.js.map