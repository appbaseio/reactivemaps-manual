webpackJsonp([0x75f0d5f3a02f],{483:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/VVWxKNE.png" alt="Image to be displayed"></p>\n<p><code>GeoDistanceSlider</code> creates a location search based range slider UI component that is connected to a database field. It is used for distance based filtering.</p>\n<p>Example uses:</p>\n<ul>\n<li>finding restaurants in walking distance from your location.</li>\n<li>discovering things to do near a landmark.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>GeoDistanceSlider\n  componentId<span class="token operator">=</span><span class="token string">"locationUI"</span>\n  dataField<span class="token operator">=</span><span class="token string">"location"</span>\n  range<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>GeoDistanceSlider\n  componentId<span class="token operator">=</span><span class="token string">"GeoDistanceSensor"</span>\n  dataField<span class="token operator">=</span><span class="token string">"location"</span>\n  title<span class="token operator">=</span><span class="token string">"Geo Distance Slider"</span>\n  range<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  rangeLabels<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token string">"0 mi"</span><span class="token punctuation">,</span>\n      <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token string">"20 mi"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  defaultSelected<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    <span class="token string">"location"</span><span class="token punctuation">:</span> <span class="token string">"London, UK"</span><span class="token punctuation">,</span>\n    <span class="token string">"distance"</span><span class="token punctuation">:</span> <span class="token number">12</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  countries<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"uk"</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n  placeholder<span class="token operator">=</span><span class="token string">"Select a distance range.."</span>\n  unit<span class="token operator">=</span><span class="token string">"mi"</span>\n  autoLocation<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  showFilter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  filterLabel<span class="token operator">=</span><span class="token string">"Location"</span>\n  URLParams<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li>\n<p><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</p>\n</li>\n<li>\n<p><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view.</p>\n</li>\n<li>\n<p><strong>title</strong> <code>String or JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</p>\n</li>\n<li>\n<p><strong>range</strong> <code>Object</code><br>\nan object with <code>start</code> and <code>end</code> keys and corresponding numeric values denoting the minimum and maximum possible slider values.</p>\n</li>\n<li>\n<p><strong>rangeLabels</strong> <code>Object</code> [optional]<br>\nan object with <code>start</code> and <code>end</code> keys and corresponding <code>String</code> labels to show labels near the ends of the <code>GeoDistanceSlider</code> component.</p>\n</li>\n<li>\n<p><strong>defaultSelected</strong> <code>Object</code> [optional]<br>\npre-select the search query with <code>location</code> option and distance with <code>distance</code> option.</p>\n</li>\n<li>\n<p><strong>placeholder</strong> <code>String</code> [optional]<br>\nset the placeholder to show in the location search box, useful when no option is <code>defaultSelected</code>.</p>\n</li>\n<li>\n<p><strong>showIcon</strong> <code>Boolean</code> [optional]\nwhether to display a search or custom icon in the input box. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>iconPosition</strong> <code>String</code> [optional]\nsets the position of the search icon. Can be <code>left</code> or <code>right</code>. Defaults to <code>right</code>.</p>\n</li>\n<li>\n<p><strong>icon</strong> <code>JSX</code> [optional]\ndisplays a custom search icon instead of the default 🔍</p>\n</li>\n<li>\n<p><strong>unit</strong> <code>String</code> [optional]<br>\nunit for distance measurement, uses <code>mi</code> (for miles) by default. Distance units can be specified from the following:<br>\n<img src="https://i.imgur.com/STbeagk.png" alt="screenshot"></p>\n</li>\n<li>\n<p><strong>autoLocation</strong> <code>Boolean</code> [optional]<br>\nwhen enabled, preset the user’s current location in the location search box. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</p>\n</li>\n<li>\n<p><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected location from the slider. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</p>\n</li>\n<li>\n<p><strong>countries</strong> <code>String Array</code> [optional]\nrestricts predictions to specified country (ISO 3166-1 Alpha-2 country code, case insensitive). For example, ‘us’, ‘in’, or ‘au’. You can provide an array of up to five country code strings.</p>\n</li>\n<li>\n<p><strong>tooltipTrigger</strong> <code>String</code> [optional]<br>\ntrigger the tooltip according to the value specified. Can be <code>hover</code>, <code>focus</code>, <code>always</code> and <code>none</code>. Defaults to <code>none</code>.</p>\n</li>\n<li>\n<p><strong>renderTooltipData</strong> <code>Function</code> [optional]<br>\ncustomize the rendered tooltip content via a function which receives the tooltip content and expects a JSX or String back. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>renderTooltipData<span class="token operator">=</span><span class="token punctuation">{</span>data <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n        textDecoration<span class="token punctuation">:</span> <span class="token string">\'underline\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe height=\'500\' scrolling=\'no\' title=\'GeoDistanceSlider Example\' src=\'//codepen.io/dhruvdutt/embed/wjBddV/?height=500&theme-id=light&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/dhruvdutt/pen/wjBddV/\'>GeoDistanceSlider Example</a> by Dhruvdutt Jadhav (<a href=\'https://codepen.io/dhruvdutt\'>@dhruvdutt</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>GeoDistanceSlider</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n<li><code>input</code></li>\n<li><code>list</code></li>\n<li><code>slider</code></li>\n<li><code>select</code></li>\n<li><code>count</code></li>\n</ul>\n<p>Read more about it <a href="/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>GeoDistanceSlider</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>, <code>style</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>onValueChange</code> and <code>onQueryChange</code>.</li>\n<li>specify how options should be filtered or updated using <code>react</code> prop.</li>\n<li>\n<p>add the following <a href="https://reactjs.org/events.html">synthetic events</a> to the underlying <code>input</code> element:</p>\n<ul>\n<li>onBlur</li>\n<li>onFocus</li>\n<li>onKeyPress</li>\n<li>onKeyDown</li>\n<li>onKeyUp</li>\n<li>autoFocus</li>\n</ul>\n</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>GeoDistanceSlider\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> distance<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token comment">// query in the format of Elasticsearch Query DSL</span>\n        geo_distance<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          distance<span class="token punctuation">:</span> distance <span class="token operator">+</span> props<span class="token punctuation">.</span>unit<span class="token punctuation">,</span>\n          location_dataField<span class="token punctuation">:</span> location\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// called before the value is set</span>\n      <span class="token comment">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment">// set the state</span>\n      <span class="token comment">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS styles to be applied to the <strong>GeoDistanceSlider</strong> component.</li>\n<li><strong>customQuery</strong> <code>Function</code><br>\ntakes <strong>location</strong>, <strong>distance</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>GeoDistanceSlider</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called every time before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called every time the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example:  You want to show a pop-up modal with the valid discount coupon code when a user searches within a specific location area.</li>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\nspecify dependent components to reactively update <strong>GeoDistanceSlider’s</strong> options. Read more about it <a href="/advanced/react.html">here</a>.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Map%20Components%2FGeoDistanceSlider&selectedStory=Basic&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs" target="_blank">GeoDistance Slider with all the default props</a></p>',frontmatter:{title:"GeoDistanceSlider",next:"map-components/geodistancedropdown.html",prev:null,nextTitle:"GeoDistanceDropdown",prevTitle:null},fields:{path:"docs/map-components/GeoDistanceSlider.md",slug:"map-components/geodistanceslider.html"}}},pathContext:{slug:"map-components/geodistanceslider.html"}}}});
//# sourceMappingURL=path---map-components-geodistanceslider-html-d7fa92af75f61c6f8b07.js.map