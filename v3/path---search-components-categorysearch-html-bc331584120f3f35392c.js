webpackJsonp([73887481964516],{498:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/IsmEuyr.png" alt="Image to be displayed"></p>\n<p><code>CategorySearch</code> creates a category based data search UI component with an autosuggest functionality. It is used for applying full-text search across one or more fields.</p>\n<p>Example uses:</p>\n<ul>\n<li>Searching for a rental listing by its <code>name</code> or <code>description</code> field.</li>\n<li>Creating an e-commerce search box for finding products by their listing properties.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CategorySearch</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"group_venue"</span><span class="token punctuation">,</span> <span class="token string">"group_city"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">categoryField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>group_topics<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>CategorySearch\n  componentId<span class="token operator">=</span><span class="token string">"SearchSensor"</span>\n  dataField<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"group_venue"</span><span class="token punctuation">,</span> <span class="token string">"group_city"</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n  categoryField<span class="token operator">=</span><span class="token string">"group_topics"</span>\n  title<span class="token operator">=</span><span class="token string">"Search"</span>\n  defaultValue<span class="token operator">=</span><span class="token string">"Music"</span>\n  fieldWeights<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n  placeholder<span class="token operator">=</span><span class="token string">"Search for cities or venues"</span>\n  autoSuggest<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  defaultSuggestions<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span>label<span class="token punctuation">:</span> <span class="token string">"Programming"</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">"Programming"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n  highlight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n  highlightField<span class="token operator">=</span><span class="token string">"group_city"</span>\n  queryFormat<span class="token operator">=</span><span class="token string">"or"</span>\n  fuzziness<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>\n  debounce<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span>\n  react<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CategoryFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  showFilter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  filterLabel<span class="token operator">=</span><span class="token string">"Venue filter"</span>\n  URLParams<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String or Array</code><br>\ndata field(s) on which the search query will be applied to. If you want to search across multiple fields, pass them as an <code>Array</code>.</li>\n<li><strong>categoryField</strong> <code>String</code> [optional]<br>\ndata field which has the category values mapped.</li>\n<li><strong>title</strong> <code>String or JSX</code> [optional]<br>\nSets the title of the component to be shown in the UI.</li>\n<li><strong>defaultValue</strong> <code>string</code> [optional]<br>\nset the initial search query text on mount.</li>\n<li><strong>value</strong> <code>string</code> [optional]<br>\ncontrols the current value of the component. It sets the search query text (on mount and on update). Use this prop in conjunction with <code>onChange</code> function.</li>\n<li><strong>onChange</strong> <code>function</code> [optional]<br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called when you are using the <code>value</code> props and the component’s value changes. This prop is used to implement the <a href="https://reactjs.org/docs/forms.html#controlled-components">controlled component</a> behavior.</li>\n<li><strong>downShiftProps</strong> <code>Object</code> [optional]<br>\nallow passing props directly to <code>Downshift</code> component. You can read more about Downshift props <a href="https://github.com/paypal/downshift#--downshift-------">here</a>.</li>\n<li><strong>fieldWeights</strong> <code>Array</code> [optional]<br>\nset the search weight for the database fields, useful when dataField is an Array of more than one field. This prop accepts an array of numbers. A higher number implies a higher relevance weight for the corresponding field in the search results.</li>\n<li><strong>placeholder</strong> <code>String</code> [optional]<br>\nSets the placeholder text to be shown in the searhbox input field. Defaults to “Search”.</li>\n<li><strong>showIcon</strong> <code>Boolean</code> [optional]\nwhether to display a search or custom icon in the input box. Defaults to <code>true</code>.</li>\n<li><strong>iconPosition</strong> <code>String</code> [optional]\nsets the position of the search icon. Can be <code>left</code> or <code>right</code>. Defaults to <code>right</code>.</li>\n<li><strong>icon</strong> <code>JSX</code> [optional]\ndisplays a custom search icon instead of the default 🔍</li>\n<li><strong>showClear</strong> <code>Boolean</code> [optional]<br>\nshow a clear text icon. Defaults to <code>false</code>.</li>\n<li><strong>clearIcon</strong> <code>JSX</code> [optional]<br>\nallows setting a custom icon for clearing text instead of the default cross.</li>\n<li><strong>autosuggest</strong> <code>Boolean</code> [optional]<br>\nset whether the autosuggest functionality should be enabled or disabled. Defaults to <code>true</code>.</li>\n<li><strong>strictSelection</strong> <code>Boolean</code> [optional]<br>\ndefaults to <code>false</code>. When set to <code>true</code> the component will only set its value and fire the query if the value was selected from the suggestion. Otherwise the value will be cleared on selection. This is only relevant with <code>autosuggest</code>.</li>\n<li><strong>defaultSuggestions</strong> <code>Array</code> [optional]\npreset search suggestions to be shown on focus when the search box does not have any search query text set. Accepts an array of objects each having a <strong>label</strong> and <strong>value</strong> property. The label can contain either String or an HTML element.</li>\n<li><strong>debounce</strong> <code>Number</code> [optional]<br>\nsets the milliseconds to wait before executing the query. Defaults to <code>0</code>, i.e. no debounce.</li>\n<li><strong>highlight</strong> <code>Boolean</code> [optional]<br>\nWhether highlighting should be enabled in the returned results. Defaults to <code>false</code>.</li>\n<li><strong>highlightField</strong> <code>String</code> or <code>Array</code> [optional]<br>\nWhen highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the <strong>dataField</strong> prop.</li>\n<li><strong>customHighlight</strong> <code>Function</code> [optional]<br>\na function which returns the custom <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-highlighting.html">highlight settings</a>. It receives the <code>props</code> and expects you to return an object with the <code>highlight</code> key. Check out the <a href="https://opensource.appbase.io/reactivesearch/demos/technews/" target="_blank">technews demo</a> where the <code>DataSearch</code> component uses a <code>customHighlight</code> as given below,</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>DataSearch\n    componentId<span class="token operator">=</span><span class="token string">"title"</span>\n    dataField<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'title\'</span><span class="token punctuation">,</span> <span class="token string">\'text\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n    highlight\n    customHighlight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n        highlight<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            pre_tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'&lt;mark>\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            post_tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'&lt;/mark>\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            fields<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                text<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                title<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            number_of_fragments<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p><strong>queryFormat</strong> <code>String</code> [optional]\nSets the query format, can be <strong>or</strong> or <strong>and</strong>. Defaults to <strong>or</strong>.</p>\n<ul>\n<li><strong>or</strong> returns all the results matching <strong>any</strong> of the search query text’s parameters. For example, searching for “bat man” with <strong>or</strong> will return all the results matching either “bat” or “man”.</li>\n<li>On the other hand with <strong>and</strong>, only results matching both “bat” and “man” will be returned. It returns the results matching <strong>all</strong> of the search query text’s parameters.</li>\n</ul>\n</li>\n<li><strong>defaultQuery</strong> <code>Function</code> [optional]<br>\nLets you append your own query along with the existing query for search. This also works with <code>customQuery</code> and the query gets appended to the final query formed. The function receives <code>value</code> the current <code>props</code> and the <code>category</code> and expects you to return a query to append. For example, you may use this to limit your searches to harry potter books by something like:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>CategorySearch\n    dataField<span class="token operator">=</span><span class="token string">"original_title"</span>\n    <span class="token operator">...</span>\n    defaultQuery<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">,</span> category<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n        match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            original_title<span class="token punctuation">:</span> <span class="token string">\'Potter\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>fuzziness</strong> <code>String or Number</code> [optional]\nSets a maximum edit distance on the search parameters, can be <strong>0</strong>, <strong>1</strong>, <strong>2</strong> or <strong>“AUTO”</strong>. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, <strong>fox</strong> can become <strong>box</strong>. Read more about it in the elastic search <a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html">docs</a>.</li>\n<li><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</li>\n<li><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the current value of the search. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</li>\n<li><strong>onSuggestions</strong> <code>Function</code> [optional]\nYou can pass a callback function to listen for the changes in suggestions.The function receives <code>suggestions</code> list.</li>\n<li><strong>onError</strong> <code>Function</code> [optional]<br>\ngets triggered in case of an error and provides the <code>error</code> object, which can be used for debugging or giving feedback to the user if needed.</li>\n<li>\n<p><strong>renderError</strong> <code>String or JSX or Function</code> [optional]\ncan we used to render an error message in case of any error.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>renderError<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        Something went wrong<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>Error details<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span><span class="token punctuation">{</span>error<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/CategorySearch" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>CategorySearch</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n<li><code>input</code></li>\n<li><code>list</code></li>\n</ul>\n<p>Read more about it <a href="/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>CategorySearch</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>, <code>style</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>onValueChange</code>, <code>onValueSelected</code> and <code>onQueryChange</code>,</li>\n<li>specify how search suggestions should be filtered using <code>react</code> prop,</li>\n<li>use your own function to render suggestions using <code>renderSuggestion</code> prop. It expects an object back for each <code>suggestion</code> having keys <code>label</code> and <code>value</code>. The query is run against the <code>value</code> key and <code>label</code> is used for rendering the suggestions. <code>label</code> can be either <code>String</code> or JSX. For example,</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>DataSearch\n  <span class="token operator">...</span>\n  renderSuggestion<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>suggestion<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>original_title<span class="token punctuation">}</span> by<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'dodgerblue\'</span><span class="token punctuation">,</span> marginLeft<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>authors<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>original_title<span class="token punctuation">,</span>\n    source<span class="token punctuation">:</span> suggestion<span class="token punctuation">.</span>_source  <span class="token comment">// for onValueSelected to work with renderSuggestion</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>it’s also possible to take control of rendering individual suggestions with <code>renderSuggestion</code> prop or the entire suggestions rendering using the <code>renderAllSuggestion</code> prop. Check the <a href="/advanced/customsuggestions.html">custom suggestions</a> recipe for more info.</p>\n</li>\n<li>\n<p>add the following <a href="https://reactjs.org/events.html">synthetic events</a> to the underlying <code>input</code> element:</p>\n<ul>\n<li>onBlur</li>\n<li>onFocus</li>\n<li>onKeyPress</li>\n<li>onKeyDown</li>\n<li>onKeyUp</li>\n<li>autoFocus</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>CategorySearch\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          data_field<span class="token punctuation">:</span> <span class="token string">"this is a test"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// called before the value is set</span>\n      <span class="token comment">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment">// set the state</span>\n      <span class="token comment">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueSelected<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> category<span class="token punctuation">,</span> cause<span class="token punctuation">,</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value and category: "</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> category<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// specify how and which suggestions are filtered using `react` prop.</span>\n  react<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"pricingFilter"</span><span class="token punctuation">,</span> <span class="token string">"dateFilter"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"or"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"searchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code>\nCSS styles to be applied to the <strong>CategorySearch</strong> component.</li>\n<li><strong>customQuery</strong> <code>Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>CategorySearch</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for a product in a CategorySearch.</li>\n<li>\n<p><strong>onValueSelected</strong> <code>Function</code><br>\nis called with the value and the category selected via user interaction. If the search was performed by selecting the ‘in all categories’ suggestion, category is received as <code>*</code>. If it was performed for one of the categorized suggestion, the <code>category</code> is received. In other cases (either searching without selecting a suggestion or picking an uncategorized suggestion), <code>category</code> is received as <code>null</code>. It works only with <code>autosuggest</code> and is called whenever a suggestion is selected or a search is performed by pressing <strong>enter</strong> key. It also passes the <code>cause</code> of action and the <code>source</code> object if the cause of action was <code>\'SUGGESTION_SELECT\'</code>. The source would be <code>null</code> if a category based suggestion was selected. The possible causes are:</p>\n<ul>\n<li><code>\'SUGGESTION_SELECT\'</code></li>\n<li><code>\'ENTER_PRESS\'</code></li>\n<li>`‘CLEAR_VALUE’</li>\n</ul>\n</li>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\nspecify dependent components to reactively update <strong>CategorySearch’s</strong> suggestions.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Search%20components%2FCategorySearch" target="_blank">CategorySearch with default props</a></p>',
frontmatter:{title:"CategorySearch",next:"result-components/resultlist.html",prev:"search-components/datasearch.html",nextTitle:"Result Components: ResultList",prevTitle:"DataSearch"},fields:{path:"docs/search-components/CategorySearch.md",slug:"search-components/categorysearch.html"}}},pathContext:{slug:"search-components/categorysearch.html"}}}});
//# sourceMappingURL=path---search-components-categorysearch-html-bc331584120f3f35392c.js.map