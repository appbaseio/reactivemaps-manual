webpackJsonp([94325899749574],{449:function(n,a){n.exports={data:{markdownRemark:{html:'<p>You can take advantage of search and click analytics when using <a href="https://appbase.io">Appbase.io</a> as a backend with ReactiveSearch. Search analytics work out of the box with <code>analytics</code> prop in <code>ReactiveBase</code>. This recipe explains how to implement click analytics for your app.</p>\n<h2 id="click-analytics"><a href="#click-analytics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Click Analytics</h2>\n<p>Click analytics have to be wired into the result components. Its supported in <code>ReactiveList</code>, <code>ResultCard</code> and <code>ResultList</code>. When using <code>ResultCard</code> or <code>ResultList</code> the click analytics will work on its own. However when using <code>ReactiveList</code>, the <code>render</code> or <code>renderAllData</code> prop receives two extra properties(<code>base</code> &#x26; <code>triggerClickAnalytics</code>) to make click analytics work which you have to invoke with <code>onClick</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n    <span class="token attr-name">...</span>\n    <span class="token attr-name">renderData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> triggerClickAnalytics<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div onClick<span class="token punctuation">=</span><span class="token punctuation">{</span>triggerClickAnalytics<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>When rendering your component using <code>renderAllData({ results, streamResults, loadMore, base, triggerClickAnalytics })</code> you have to call the <code>triggerClickAnalytics</code> after adding the <code>base</code> value to the <code>index</code> (<code>base</code> is calculated internally from <code>currentPage * size</code>). <code>index</code> is assumed to start from <code>0</code>. Example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveList\n    <span class="token operator">...</span>\n    renderAllData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        results<span class="token punctuation">,</span>\n        base<span class="token punctuation">,</span>\n        triggerClickAnalytics\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        results\n            <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n                    <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">}</span></span>\n                    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">triggerClickAnalytics</span><span class="token punctuation">(</span>base <span class="token operator">+</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">></span></span>\n                    <span class="token operator">...</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token operator">></span>\n</code></pre>\n      </div>',frontmatter:{title:"Analytics",next:"componentsusage.html",prev:"advanced/typescript.html",nextTitle:"Components Usage",prevTitle:"TypeScript Support"},fields:{path:"docs/advanced/Analytics.md",slug:"advanced/analytics.html"}}},pathContext:{slug:"advanced/analytics.html"}}}});
//# sourceMappingURL=path---advanced-analytics-html-e6837cd5f4006119eadf.js.map