import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DJuOfWGg.js";const c=JSON.parse('{"title":"CMS에 연결하기","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"ko/guide/cms.md","filePath":"ko/guide/cms.md","lastUpdated":null}'),t={name:"ko/guide/cms.md"},h=n(`<h1 id="connecting-to-a-cms" tabindex="-1">CMS에 연결하기 <a class="header-anchor" href="#connecting-to-a-cms" aria-label="Permalink to &quot;CMS에 연결하기 {#connecting-to-a-cms}&quot;">​</a></h1><h2 id="general-workflow" tabindex="-1">일반적인 워크플로우 <a class="header-anchor" href="#general-workflow" aria-label="Permalink to &quot;일반적인 워크플로우 {#general-workflow}&quot;">​</a></h2><p>VitePress를 CMS에 연결하는 것은 주로 <a href="./routing#dynamic-routes">동적 라우트</a>를 중심으로 이루어질 것입니다. 진행하기 전에 작동 방식을 이해해야 합니다.</p><p>각 CMS가 다르게 작동하므로, 여기서는 특정 상황에 맞게 조정해야 하는 일반적인 워크플로우만 제공할 수 있습니다.</p><ol><li><p>CMS가 인증을 요구하는 경우, <code>.env</code> 파일을 생성하여 API 토큰을 저장하고 다음과 같이 로드하세요:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// posts/[id].paths.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { loadEnv } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadEnv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div></li><li><p>CMS에서 필요한 데이터를 가져와 적절한 경로 데이터로 형식을 지정하세요:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 필요한 경우 해당 CMS 클라이언트 라이브러리 사용</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://my-cms-api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      headers: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 필요한 경우 토큰을 사용</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">entry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        params: { id: entry.id, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 제목, 저자, 날짜 등 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        content: entry.content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>페이지의 컨텐츠를 렌더링하세요:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># {{ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">$params</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">title</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"> }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 작성자: {{ $params.author }}, 작성일: {{ $params.date }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- @content --&gt;</span></span></code></pre></div></li></ol><h2 id="integration-guides" tabindex="-1">통합 가이드 <a class="header-anchor" href="#integration-guides" aria-label="Permalink to &quot;통합 가이드 {#integration-guides}&quot;">​</a></h2><p>VitePress를 특정 CMS와 통합하는 방법에 대한 가이드를 작성한 경우 아래의 &quot;이 페이지 편집 제안하기&quot; 링크를 클릭하여 여기에 제출하세요!</p>`,7),l=[h];function p(e,k,d,r,o,E){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
