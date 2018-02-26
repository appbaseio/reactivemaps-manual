webpackJsonp([18625123672389],{462:function(a,s){a.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p>Currently in <code>v2</code>, ReactiveMaps components are not available under ReactiveSearch.</p>\n</blockquote>\n<h3 id="step-1-install-reactivemaps"><a href="#step-1-install-reactivemaps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Install ReactiveMaps</h3>\n<p>We will fetch the <a href="https://www.npmjs.com/package/@appbaseio/reactivemaps"><code>reactivemaps</code></a> module first from npm.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save @appbaseio/reactivemaps\n</code></pre>\n      </div>\n<h3 id="step-2-add-google-maps-js-lib"><a href="#step-2-add-google-maps-js-lib" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: Add Google Maps JS lib</h3>\n<p>ReactiveMaps uses Google Maps to render the maps. For including Google Maps, add the following  <code>&#x3C;script></code> tag in the <code>&#x3C;head></code> element.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://maps.google.com/maps/api/js?key<span class="token punctuation">=</span>Your_key_here<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="step-3-add-reactivemaps-style-file"><a href="#step-3-add-reactivemaps-style-file" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3: Add ReactiveMap’s style file</h3>\n<p>If you haven’t included any style framework, we recommend adding <strong>materialize</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>All ReactiveMap styles are present in a single file. We will import it in the <code>&#x3C;head></code> element as well.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.rawgit.com/appbaseio/reactivemaps/master/dist/css/style.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Make sure to import the stylesheets in the above order.</p>\n<hr>\n<h3 id="step-4-creating-an-app"><a href="#step-4-creating-an-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 4: Creating an App</h3>\n<p>Now that we have gotten the installation part out of the way, let’s create an app with reactivemaps.</p>\n<p>If you already have a React boilerplate setup, then let’s go ahead and import the components.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  ReactiveMap<span class="token punctuation">,</span>\n  SingleList<span class="token punctuation">,</span>\n  ReactiveBase\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivemaps\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Next, we will create a <a href="/getting-started/ReactiveBase.html"><code>ReactiveBase</code></a> component for connecting our UI view with data, where the data source is an <a href="https://appbase.io">appbase.io</a> app. This quick GIF will help with creating an app and getting its credentials.</p>\n<p><img src="https://i.imgur.com/r6hWKAG.gif" alt="create an appbase.io app"></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span><span class="token punctuation">(</span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n\t\t\t<span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>reactivemap-demo-app<span class="token punctuation">"</span></span>\n\t\t\t<span class="token attr-name">credentials</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2ZvCaw7CR:6664ec32-4e21-434d-836c-33af67b88c60<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-xs-6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleList</span>\n\t\t\t\t\t\t<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SingleList Sensor<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SingleListSensor<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>group.group_city<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span>\n\t\t\t\t\t\t<span class="token attr-name">showSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n\t\t\t\t\t<span class="token punctuation">/></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-xs-6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveMap</span>\n\t\t\t\t\t\t<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ReactiveMap Actuator<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ReactiveMapActuator<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>venue<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n\t\t\t\t\t\t\t<span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token string">"SingleListSensor"</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n\t\t\t\t\t<span class="token punctuation">/></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n\t<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Next, we have created a <code>SingleList</code> component with New York city selected by default and have added a <code>ReactiveMap</code> component which updates reactively every time the SingleList component’s selected value changes.</p>\n<p>If you have followed along, you should see something like this:</p>\n<p><img src="https://i.imgur.com/Xj9GIgs.png" alt="Image"></p>\n<p>You can also checkout a working demo of the above app directly at <a href="https://github.com/appbaseio-apps/reactivemaps-starter-app">https://github.com/appbaseio-apps/reactivemaps-starter-app</a>. The repo demonstrates the same example app in different ways:</p>\n<ol>\n<li><a href="https://github.com/appbaseio-apps/reactivemaps-starter-app/tree/master"><code>master</code></a> - The app as shown in the steps above.</li>\n<li><a href="https://github.com/appbaseio-apps/reactivemaps-starter-app/tree/browserify"><code>browserify</code></a> - A browserify based build (instead of webpack).</li>\n<li><a href="https://github.com/appbaseio-apps/reactivemaps-starter-app/tree/withbootstrap"><code>withbootstrap</code></a> - A bootstrap based theming (instead of Materialize).</li>\n<li><a href="https://github.com/appbaseio-apps/reactivemaps-starter-app/tree/umd"><code>umd</code></a> - A completely browser based app with no npm dependencies and webpack / browserify modules.</li>\n</ol>',frontmatter:{title:"ReactiveMaps Quickstart",next:"getting-started/data.html",prev:"getting-started/reactivesearch.html",nextTitle:"Importing Data",prevTitle:"ReactiveSearch Quickstart"},fields:{path:"getting-started/reactivemaps.md",slug:"getting-started/reactivemaps.html"}}},pathContext:{slug:"getting-started/reactivemaps.html"}}}});
//# sourceMappingURL=path---getting-started-reactivemaps-html-b9c84caccc148c6125fb.js.map