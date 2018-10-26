webpackJsonp([0xd25c9a408a35],{420:function(e,t){e.exports={data:{markdownRemark:{html:'<p><strong>ReactiveSearch-Vue</strong> provides Vue UI components for Elasticsearch. This document explains the different kinds of components offered by the library and walks throughs scenarios of when to use which component.</p>\n<p>Components are divided into four broad categories:  </p>\n<ol>\n<li><code>List components</code> represent all kinds of list related UI components which typically create a term query.</li>\n<li><code>Range components</code> represent all kinds of numbers and dates related UI components which typically create a range based query.</li>\n<li><code>Search components</code> represent searchbar UIs, which typically apply search on full-text data.</li>\n<li><code>Result components</code> are components for displaying results (aka hits) from queries created by other components.</li>\n</ol>\n<h2 id="1-list-components"><a href="#1-list-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. List Components</h2>\n<p>List is one of the most used data-driven UI displays and hence naturally, we offer a variety of ways to use this UI style.</p>\n<h4 id="string-or-text-datatype"><a href="#string-or-text-datatype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String or Text Datatype</h4>\n<p>The following are all the possible UI components for a <code>Text</code> or <code>String</code> datatype field in your appbase.io app. These apply a <strong>term</strong> or <strong>terms</strong> database query on the selected item(s).</p>\n<p>The components can also be used with <code>Numeric</code> datatype fields.</p>\n<p>\n<img src="https://imgur.com/p2PBKh6.png" style="float:left"></p>\n<p><strong><a href="list-components/singlelist.html">SingleList</a></strong> is useful for displaying a list of values where only one item can be selected at a time, and the values are retrieved by a database query on the field specified in the <strong>dataField</strong> prop.</p>\n</p>\n<p>\n<img src="https://imgur.com/waVNdgr.png" style="float:left"></p>\n<p><strong><a href="list-components/multilist.html">MultiList</a></strong> is useful for displaying a list of values where multiple values can be selected at a time. Similar to SingleList, these values are retrieved by a database query on the field specified in the <strong>dataField</strong> prop.</p>\n</p>\n<h2 id="2-range-components"><a href="#2-range-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Range Components</h2>\n<p>The following are all the possible UI components for a numeric datatype field in your appbase.io app. These apply a <strong>range</strong> database query on the selected item(s).</p>\n<p>\n<img src="https://imgur.com/tPi76EU.png" style="float:left"></p>\n<p><strong><a href="range-components/singlerange.html">SingleRange</a></strong> displays a curated list of items where only one item can be selected at a time. Each item represents a range of values, specified in the <strong>data</strong> prop of the component.</p>\n</p>\n<h2 id="3-search-components"><a href="#3-search-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Search Components</h2>\n<p>The following are UI components that represent searchbar UIs. The datatype for the <code>dataField</code> in these components should be a <code>Text</code> (or <code>String</code>) or <code>Keyword</code>, along with custom analyzer (like ngrams) based mappings defined in sub-fields.</p>\n<h3 id="datasearch"><a href="#datasearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DataSearch</h3>\n<p>\n<img src="https://imgur.com/kbnVVkZ.png" style="float:left"></p>\n<p><strong><a href="search-components/datasearch.html">DataSearch</a></strong> displays a search input box.</p>\n</p>\n<h2 id="4-result-components"><a href="#4-result-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Result Components</h2>\n<p>Result components are used for displaying the results (aka hits).</p>\n<blockquote>\n<p>How do result components fetch results by combining queries from multiple components?</p>\n<p>They do this via <a href="advanced/react.html"><strong>react</strong></a> prop, which allows each component to specify their dependent components using a DSL that mirrors Elasticsearch’s compound query DSL for bool clause.</p>\n</blockquote>\n<h3 id="reactivelist"><a href="#reactivelist" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactiveList</h3>\n<p>\n<img src="https://imgur.com/PCBwK7t.png" style="float:left"></p>\n<p><strong><a href="result-components/reactivelist.html">ReactiveList</a></strong> displays the results in a configurable list layout. This is a more flexible display component (used internally by both ResultList and ResultCard) that allows more customization than ResultList and ResultCard.</p>\n</p>',frontmatter:{title:"Components Overview",next:"list-components/singlelist.html",prev:"getting-started/reactivebase.html",nextTitle:"Single List",prevTitle:"Base Component"},fields:{path:"getting-started/ComponentsIndex.md",slug:"getting-started/componentsindex.html"}}},pathContext:{slug:"getting-started/componentsindex.html"}}}});
//# sourceMappingURL=path---getting-started-componentsindex-html-7b102789c7b978be61c8.js.map