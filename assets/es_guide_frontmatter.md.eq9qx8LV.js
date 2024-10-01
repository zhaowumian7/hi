import{_ as a,c as s,o as t,a4 as e}from"./chunks/framework.DJuOfWGg.js";const E=JSON.parse('{"title":"Frontmatter","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/frontmatter.md","filePath":"es/guide/frontmatter.md","lastUpdated":null}'),i={name:"es/guide/frontmatter.md"},n=e(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h1><h2 id="usage" tabindex="-1">Uso <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Uso {#usage}&quot;">​</a></h2><p>VitePress soporta frontmatter YAML en todos los archivos Markdown, procesandolos con <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>. El frontmatter debe estar en la parte superior del archivo Markdown (antes de cualquier elemento, incluyendo tags <code>&lt;script&gt;</code>), y debe tener la forma de un YAML válido entre lineas con trazos de triple guion. Ejemplo:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Documentación con VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Muchas opciones de configuración del sitio o del tema por defecto tienen opciones correspondientes en el frontmatter. Puede usar el frontmatter para sobreponer un comportamiento específico solamente para la página actual. Para más detalles, vea <a href="./../reference/frontmatter-config">Referencia de Configuración del Frontmatter</a>.</p><p>Puede también definir datos propios del frontmatter personalizados, para ser usados en expresiones Vue dinámicas en la página.</p><h2 id="accessing-frontmatter-data" tabindex="-1">Acceso a los Datos del Frontmatter <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;Acceso a los Datos del Frontmatter {#accessing-frontmatter-data}&quot;">​</a></h2><p>Los datos del frontmatter pueden ser accedidos por medio de la variable global especial <code>$frontmatter</code>:</p><p>Aqui está un ejemplo de como podría usarlo en su archivo Markdown:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Documentación con VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># {{ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">$frontmatter</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">title</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"> }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Contenido de guia</span></span></code></pre></div><p>Puede acceder los datos del frontmatter de la página actual en <code>&lt;script setup&gt;</code> con el auxiliar <a href="./../reference/runtime-api#usedata"><code>useData()</code></a>.</p><h2 id="alternative-frontmatter-formats" tabindex="-1">Formatos Alternativos del Frontmatter <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;Formatos Alternativos del Frontmatter {#alternative-frontmatter-formats}&quot;">​</a></h2><p>VitePress también soporta la sintaxis frontmatter JSON, comenzando y terminando con llaves:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Creando blog como un hacker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;editLink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div>`,14),r=[n];function l(o,p,h,d,k,c){return t(),s("div",null,r)}const m=a(i,[["render",l]]);export{E as __pageData,m as default};
