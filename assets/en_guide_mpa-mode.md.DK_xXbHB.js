import{_ as a,D as t,c as n,j as s,a as e,I as l,a4 as o,o as p}from"./chunks/framework.DJuOfWGg.js";const b=JSON.parse('{"title":"MPA Mode","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/mpa-mode.md","filePath":"en/guide/mpa-mode.md","lastUpdated":null}'),d={name:"en/guide/mpa-mode.md"},h={id:"mpa-mode",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "MPA Mode <Badge type="warning" text="experimental" />"'},"​",-1),c=o(`<p>MPA (Multi-Page Application) mode can be enabled via the command line via <code>vitepress build --mpa</code>, or via config through the <code>mpa: true</code> option.</p><p>In MPA mode, all pages are rendered without any JavaScript included by default. As a result, the production site will likely have a better initial visit performance score from audit tools.</p><p>However, due to the absence of SPA navigation, cross-page links will lead to full page reloads. Post-load navigations in MPA mode will not feel as instant as in SPA mode.</p><p>Also note that no-JS-by-default means you are essentially using Vue purely as a server-side templating language. No event handlers will be attached in the browser, so there will be no interactivity. To load client-side JavaScript, you will need to use the special <code>&lt;script client&gt;</code> tag:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;client side JavaScript!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Hello</span></span></code></pre></div><p><code>&lt;script client&gt;</code> is a VitePress-only feature, not a Vue feature. It works in both <code>.md</code> and <code>.vue</code> files, but only in MPA mode. Client scripts in all theme components will be bundled together, while client script for a specific page will be split for that page only.</p><p>Note that <code>&lt;script client&gt;</code> is <strong>not evaluated as Vue component code</strong>: it&#39;s processed as a plain JavaScript module. For this reason, MPA mode should only be used if your site requires absolutely minimal client-side interactivity.</p>`,7);function k(E,g,m,u,y,_){const i=t("Badge");return p(),n("div",null,[s("h1",h,[e("MPA Mode "),l(i,{type:"warning",text:"experimental"}),e(),r]),c])}const f=a(d,[["render",k]]);export{b as __pageData,f as default};
