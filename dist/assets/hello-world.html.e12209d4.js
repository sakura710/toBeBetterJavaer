import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e}from"./app.c8e9fe1d.js";const t={},i=e(`<p>\u7B2C\u4E00\u4E2A Java \u7A0B\u5E8F\u975E\u5E38\u7B80\u5355\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> \u5FAE\u4FE1\u641C\u300C\u6C89\u9ED8\u738B\u4E8C\u300D\uFF0C\u56DE\u590D\u5173\u952E\u5B57 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E09\u59B9\uFF0C\u5C11\u770B\u624B\u673A\u5C11\u6253\u6E38\u620F\uFF0C\u597D\u597D\u5B66\uFF0C\u7F8E\u7F8E\u54D2\u3002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IDEA \u4F1A\u81EA\u52A8\u4FDD\u5B58\uFF0C\u5728\u4EE3\u7801\u7F16\u8F91\u9762\u677F\u4E2D\u53F3\u952E\uFF0C\u5728\u5F39\u51FA\u7684\u83DC\u5355\u4E2D\u9009\u62E9\u300CRun &#39;HelloWorld.main()&#39;\u300D\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/four-01.png" alt=""></p><p>\u7B49\u4EE3\u7801\u7F16\u8BD1\u7ED3\u675F\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728 Run \u9762\u677F\u91CC\u770B\u5230\u4E0B\u9762\u7684\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E09\u59B9\uFF0C\u5C11\u770B\u624B\u673A\u5C11\u6253\u6E38\u620F\uFF0C\u597D\u597D\u5B66\uFF0C\u7F8E\u7F8E\u54D2\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C\u4E8C\u54E5\uFF0C\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u7684\u8F93\u51FA\u7ED3\u679C\u867D\u7136\u4EE4\u6211\u975E\u5E38\u5F00\u5FC3\uFF0C\u4F46\u662F\u6709\u597D\u591A\u751F\u758F\u7684\u5173\u952E\u5B57\u4EE4\u6211\u611F\u5230\u56F0\u60D1\uFF0C\u80FD\u7ED9\u6211\u89E3\u91CA\u4E00\u4E0B\u5417\uFF1F\u201D</p><p>\u201C\u5F53\u7136\u6CA1\u95EE\u9898\u554A\u3002\u201D</p><ul><li><p>class \u5173\u952E\u5B57\uFF1A\u7528\u4E8E\u5728 Java \u4E2D\u58F0\u660E\u4E00\u4E2A\u7C7B\u3002</p></li><li><p>public \u5173\u952E\u5B57\uFF1A\u4E00\u4E2A\u8868\u793A\u53EF\u89C1\u6027\u7684\u8BBF\u95EE\u4FEE\u9970\u7B26\u3002</p></li><li><p>static \u5173\u952E\u5B57\uFF1A\u6211\u4EEC\u53EF\u4EE5\u7528\u5B83\u6765\u58F0\u660E\u4EFB\u4F55\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u88AB static \u4FEE\u9970\u540E\u7684\u65B9\u6CD5\u79F0\u4E4B\u4E3A\u9759\u6001\u65B9\u6CD5\u3002\u9759\u6001\u65B9\u6CD5\u4E0D\u9700\u8981\u4E3A\u5176\u521B\u5EFA\u5BF9\u8C61\u5C31\u80FD\u8C03\u7528\u3002</p></li><li><p>void \u5173\u952E\u5B57\uFF1A\u8868\u793A\u8BE5\u65B9\u6CD5\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C\u3002</p></li><li><p>main \u5173\u952E\u5B57\uFF1A\u8868\u793A\u8BE5\u65B9\u6CD5\u4E3A\u4E3B\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u7A0B\u5E8F\u8FD0\u884C\u7684\u5165\u53E3\u3002<code>main()</code> \u65B9\u6CD5\u7531 Java \u865A\u62DF\u673A\u6267\u884C\uFF0C\u914D\u5408\u4E0A static \u5173\u952E\u5B57\u540E\uFF0C\u53EF\u4EE5\u4E0D\u7528\u521B\u5EFA\u5BF9\u8C61\u5C31\u53EF\u4EE5\u8C03\u7528\uFF0C\u53EF\u4EE5\u8282\u7701\u4E0D\u5C11\u5185\u5B58\u7A7A\u95F4\u3002</p></li><li><p><code>String [] args</code>\uFF1A<code>main()</code> \u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u7C7B\u578B\u4E3A String \u6570\u7EC4\uFF0C\u53C2\u6570\u540D\u4E3A args\u3002</p></li><li><p><code>System.out.println()</code>\uFF1A\u4E00\u4E2A Java \u8BED\u53E5\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u662F\u5C06\u4F20\u9012\u7684\u53C2\u6570\u6253\u5370\u5230\u63A7\u5236\u53F0\u3002System \u662F java.lang \u5305\u4E2D\u7684\u4E00\u4E2A final \u7C7B\uFF0C\u8BE5\u7C7B\u63D0\u4F9B\u7684\u8BBE\u65BD\u5305\u62EC\u6807\u51C6\u8F93\u5165\uFF0C\u6807\u51C6\u8F93\u51FA\u548C\u9519\u8BEF\u8F93\u51FA\u6D41\u7B49\u7B49\u3002out \u662F System \u7C7B\u7684\u9759\u6001\u6210\u5458\u5B57\u6BB5\uFF0C\u7C7B\u578B\u4E3A PrintStream\uFF0C\u5B83\u4E0E\u4E3B\u673A\u7684\u6807\u51C6\u8F93\u51FA\u63A7\u5236\u53F0\u8FDB\u884C\u6620\u5C04\u3002println \u662F PrintStream \u7C7B\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u901A\u8FC7\u8C03\u7528 print \u65B9\u6CD5\u5E76\u6DFB\u52A0\u4E00\u4E2A\u6362\u884C\u7B26\u5B9E\u73B0\u7684\u3002</p></li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,10),p=[i];function l(o,c){return a(),s("div",null,p)}var u=n(t,[["render",l],["__file","hello-world.html.vue"]]);export{u as default};
