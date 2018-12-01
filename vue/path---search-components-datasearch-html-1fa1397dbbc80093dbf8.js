webpackJsonp([99033787998698],{441:function(e,n){e.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/QAYt2AN.png" alt="Image to be displayed"></p>\n<p><code>DataSearch</code> creates a search box UI component that is connected to one or more database fields.</p>\n<p>Example uses:</p>\n<ul>\n<li>Searching for a rental listing by its <code>name</code> or <code>description</code> field.</li>\n<li>Creating an e-commerce search box for finding products by their listing properties.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data-search</span>\n        <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchSensor<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[<span class="token punctuation">\'</span>group_venue<span class="token punctuation">\'</span>, <span class="token punctuation">\'</span>group_city<span class="token punctuation">\'</span>]<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n  componentId<span class="token operator">=</span><span class="token string">"SearchSensor"</span>\n  title<span class="token operator">=</span><span class="token string">"Search"</span>\n  defaultSelected<span class="token operator">=</span><span class="token string">"Songwriting"</span>\n  placeholder<span class="token operator">=</span><span class="token string">"Search for cities or venues"</span>\n  highlightField<span class="token operator">=</span><span class="token string">"group_city"</span>\n  queryFormat<span class="token operator">=</span><span class="token string">"or"</span>\n  filterLabel<span class="token operator">=</span><span class="token string">"City"</span>\n  <span class="token punctuation">:</span>highlight<span class="token operator">=</span><span class="token string">"true"</span>\n  <span class="token punctuation">:</span>showFilter<span class="token operator">=</span><span class="token string">"true"</span>\n  <span class="token punctuation">:</span>fieldWeights<span class="token operator">=</span><span class="token string">"[1, 3]"</span>\n  <span class="token punctuation">:</span>fuzziness<span class="token operator">=</span><span class="token string">"0"</span>\n  <span class="token punctuation">:</span>debounce<span class="token operator">=</span><span class="token string">"100"</span>\n  <span class="token punctuation">:</span>react<span class="token operator">=</span><span class="token template-string"><span class="token string">`{\n    and: [\'CategoryFilter\', \'SearchFilter\']\n  }`</span></span>\n  <span class="token punctuation">:</span>dataField<span class="token operator">=</span><span class="token string">"[\'group_venue\', \'group_city\']"</span>\n  <span class="token punctuation">:</span>URLParams<span class="token operator">=</span><span class="token string">"false"</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String or Array</code><br>\ndatabase field(s) to be connected to the component’s UI view. DataSearch accepts an Array in addition to String, useful for applying search across multiple fields.</li>\n<li><strong>title</strong> <code>String or JSX</code> [optional]<br>\nset the title of the component to be shown in the UI.</li>\n<li><strong>defaultSelected</strong> <code>string</code> [optional]<br>\npreset the search query text in the search box.</li>\n<li><strong>fieldWeights</strong> <code>Array</code> [optional]<br>\nset the search weight for the database fields, useful when dataField is an Array of more than one field. This prop accepts an array of numbers. A higher number implies a higher relevance weight for the corresponding field in the search results.</li>\n<li><strong>placeholder</strong> <code>String</code> [optional]<br>\nset the placeholder text to be shown in the searchbox input field. Defaults to “Search”.</li>\n<li><strong>showIcon</strong> <code>Boolean</code> [optional]\nwhether to display a search or custom icon in the input box. Defaults to <code>true</code>.</li>\n<li><strong>iconPosition</strong> <code>String</code> [optional]\nsets the position of the search icon. Can be <code>left</code> or <code>right</code>. Defaults to <code>right</code>.</li>\n<li><strong>icon</strong> <code>JSX</code> [optional]\ndisplays a custom search icon instead of the default 🔍</li>\n<li><strong>showClear</strong> <code>Boolean</code> [optional]<br>\nshow a clear text icon. Defaults to <code>false</code>.</li>\n<li><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</li>\n<li><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</li>\n<li><strong>clearIcon</strong> <code>JSX</code> [optional]<br>\nallows setting a custom icon for clearing text instead of the default cross.</li>\n<li><strong>debounce</strong> <code>Number</code> [optional]<br>\nsets the milliseconds to wait before executing the query. Defaults to <code>0</code>, i.e. no debounce.</li>\n<li><strong>highlight</strong> <code>Boolean</code> [optional]<br>\nwhether highlighting should be enabled in the returned results.</li>\n<li><strong>highlightField</strong> <code>String or Array</code> [optional]<br>\nwhen highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the <strong>dataField</strong> prop.</li>\n<li><strong>customHighlight</strong> <code>Function</code> [optional]<br>\na function which returns the custom <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-highlighting.html">highlight settings</a>. It receives the <code>props</code> and expects you to return an object with the <code>highlight</code> key. Check out the <a href="https://opensource.appbase.io/reactivesearch/demos/technews/" target="_blank">technews demo</a> where the <code>DataSearch</code> component uses a <code>customHighlight</code> as given below,</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n    componentId<span class="token operator">=</span><span class="token string">"title"</span>\n    highlight<span class="token operator">=</span><span class="token string">"true"</span>\n    <span class="token punctuation">:</span>dataField<span class="token operator">=</span><span class="token string">"[\'title\', \'text\']"</span>\n    <span class="token punctuation">:</span>customHighlight<span class="token operator">=</span><span class="token template-string"><span class="token string">`(props) => ({\n        highlight: {\n            pre_tags: [\'&lt;mark>\'],\n            post_tags: [\'&lt;/mark>\'],\n            fields: {\n                text: {},\n                title: {},\n            },\n            number_of_fragments: 0,\n        },\n    })`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p><strong>queryFormat</strong> <code>String</code> [optional]\nSets the query format, can be <strong>or</strong> or <strong>and</strong>. Defaults to <strong>or</strong>.</p>\n<ul>\n<li><strong>or</strong> returns all the results matching <strong>any</strong> of the search query text’s parameters. For example, searching for “bat man” with <strong>or</strong> will return all the results matching either “bat” or “man”.</li>\n<li>On the other hand with <strong>and</strong>, only results matching both “bat” and “man” will be returned. It returns the results matching <strong>all</strong> of the search query text’s parameters.</li>\n</ul>\n</li>\n<li><strong>defaultQuery</strong> <code>Function</code> [optional]<br>\nLets you append your own query along with the existing query for search. This works only if you’re not using <code>customQuery</code> since the query is applied to the existing one. The function receives <code>value</code> and the current <code>props</code> and expects you to return a query to append. For example, you may use this to limit your searches to harry potter books by something like:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n    dataField<span class="token operator">=</span><span class="token string">"original_title"</span>\n    <span class="token operator">...</span>\n    <span class="token punctuation">:</span>defaultQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`(value, props) => ({\n        match: {\n            original_title: \'Potter\'\n        }\n    })`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>fuzziness</strong> <code>String or Number</code> [optional]\nSets a maximum edit distance on the search parameters, can be <strong>0</strong>, <strong>1</strong>, <strong>2</strong> or <strong>“AUTO”</strong>. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, <strong>fox</strong> can become <strong>box</strong>. Read more about it in the elastic search <a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html">docs</a>.</li>\n<li><strong>innerRef</strong> <code>Function</code> [optional]<br>\nYou can pass a callback using <code>innerRef</code> which gets passed to the inner input element as <a href="https://reactjs.org/docs/refs-and-the-dom.html"><code>ref</code></a>.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/xpm7op166w" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>DataSearch</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n<li><code>input</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/vue/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>DataSearch</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>valueChange</code> and <code>queryChange</code>,</li>\n<li>specify how search suggestions should be filtered using <code>react</code> prop.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  <span class="token punctuation">:</span>customQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value, props) {\n      return {\n        match: {\n          data_field: "this is a test"\n        }\n      }\n    }\n  `</span></span>\n  <span class="token punctuation">:</span>beforeValueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      // called before the value is set\n      // returns a promise\n      return new Promise((resolve, reject) => {\n        // update state or component props\n        resolve()\n        // or reject()\n      })\n    }\n  `</span></span>\n  @valueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      console.log("current value: ", value)\n      // set the state\n      // use the value with other js code\n    }`</span></span>\n  @queryChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(prevQuery, nextQuery) {\n      // use the query with other js code\n      console.log(\'prevQuery\', prevQuery);\n      console.log(\'nextQuery\', nextQuery);\n    }`</span></span>\n  <span class="token comment">// specify how and which suggestions are filtered using `react` prop.</span>\n  <span class="token punctuation">:</span>react<span class="token operator">=</span><span class="token template-string"><span class="token string">`{\n    "and": ["pricingFilter", "dateFilter"],\n    "or": ["searchFilter"]\n  }`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>customQuery</strong> <code>Function</code><br>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>DataSearch</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\nspecify dependent components to reactively update <strong>DataSearch’s</strong> suggestions.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<ul>\n<li>\n<p><strong>queryChange</strong><br>\nis an event which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This event is handy in cases where you want to generate a side-effect whenever the component’s query would change.</p>\n</li>\n<li>\n<p><strong>valueChange</strong><br>\nis an event which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This event is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a list item is selected in a “Discounted Price” SingleList.</p>\n</li>\n<li>\n<p><strong>valueSelected</strong>\nis called when a search is performed either by pressing <strong>enter</strong> key or the input is blurred.</p>\n</li>\n</ul>\n<p> The following events to the underlying <code>input</code> element:</p>\n<ul>\n<li><strong>blur</strong></li>\n<li><strong>focus</strong></li>\n<li><strong>keyPress</strong></li>\n<li><strong>keyDown</strong></li>\n<li><strong>keyUp</strong></li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://reactivesearch-vue-playground.netlify.com/?selectedKind=Search%20Components%2FDataSearch&selectedStory=Basic&full=0&addons=1&stories=1&panelRight=0" target="_blank">DataSearch with default props</a></p>',frontmatter:{title:"DataSearch",next:null,prev:null,nextTitle:null,prevTitle:null},fields:{path:"docs/search-components/DataSearch.md",slug:"search-components/datasearch.html"}}},pathContext:{slug:"search-components/datasearch.html"}}}});
//# sourceMappingURL=path---search-components-datasearch-html-1fa1397dbbc80093dbf8.js.map