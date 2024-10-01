import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.DJuOfWGg.js";const g=JSON.parse('{"title":"Интерфейс командной строки","description":"","frontmatter":{},"headers":[],"relativePath":"ru/reference/cli.md","filePath":"ru/reference/cli.md","lastUpdated":null}'),i={name:"ru/reference/cli.md"},d=s('<h1 id="command-line-interface" tabindex="-1">Интерфейс командной строки <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Интерфейс командной строки {#command-line-interface}&quot;">​</a></h1><h2 id="vitepress-dev" tabindex="-1"><code>vitepress dev</code> <a class="header-anchor" href="#vitepress-dev" aria-label="Permalink to &quot;`vitepress dev` {#vitepress-dev}&quot;">​</a></h2><p>Запуск сервера разработки VitePress, с использованием указанного каталога в качестве корневого. По умолчанию используется текущий каталог. Команду <code>dev</code> также можно опустить при работе в текущем каталоге.</p><h3 id="usage" tabindex="-1">Использование <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Использование {#usage}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># запуск в текущем каталоге, опускаем `dev`</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># запуск в подкаталоге</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options" tabindex="-1">Параметры <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Параметры {#options}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Параметр</th><th>Описание</th></tr></thead><tbody><tr><td><code>--open [path]</code></td><td>Открытие браузера при запуске (<code>boolean | string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>Номер порта (<code>number</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Публичный базовый путь (по умолчанию: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--cors</code></td><td>Включить CORS</td></tr><tr><td><code>--strictPort</code></td><td>Выйти, если указанный порт уже используется (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>Заставить оптимизатор игнорировать кэш и повторно объединять файлы (<code>boolean</code>)</td></tr></tbody></table><h2 id="vitepress-build" tabindex="-1"><code>vitepress build</code> <a class="header-anchor" href="#vitepress-build" aria-label="Permalink to &quot;`vitepress build` {#vitepress-build}&quot;">​</a></h2><p>Создание производственной сборки текущего сайта VitePress.</p><h3 id="usage-1" tabindex="-1">Использование <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Использование {#usage-1}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options-1" tabindex="-1">Параметры <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;Параметры {#options-1}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Параметр</th><th>Описание</th></tr></thead><tbody><tr><td><code>--mpa</code> (экспериментально)</td><td>Сборка в режиме <a href="./../guide/mpa-mode">MPA</a> без гидратации на стороне клиента (<code>boolean</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Публичный базовый путь (по умолчанию: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--target &lt;target&gt;</code></td><td>Транспилировать цель (по умолчанию: <code>&quot;modules&quot;</code>) (<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td>Выходной каталог относительно <strong>cwd</strong> (по умолчанию: <code>&lt;root&gt;/.vitepress/dist</code>) (<code>string</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>Включить/выключить минификацию или задать используемый минификатор (по умолчанию: <code>&quot;esbuild&quot;</code>) (<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>Статический встроенный порог ресурса base64 в байтах (по умолчанию: <code>4096</code>) (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-preview" tabindex="-1"><code>vitepress preview</code> <a class="header-anchor" href="#vitepress-preview" aria-label="Permalink to &quot;`vitepress preview` {#vitepress-preview}&quot;">​</a></h2><p>Локальный предварительный просмотр производственной сборки.</p><h3 id="usage-2" tabindex="-1">Использование <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Использование {#usage-2}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options-2" tabindex="-1">Параметры <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;Параметры {#options-2}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Параметр</th><th>Описание</th></tr></thead><tbody><tr><td><code>--base &lt;path&gt;</code></td><td>Публичный базовый путь (по умолчанию: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>Номер порта (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-init" tabindex="-1"><code>vitepress init</code> <a class="header-anchor" href="#vitepress-init" aria-label="Permalink to &quot;`vitepress init` {#vitepress-init}&quot;">​</a></h2><p>Запуск <a href="./../guide/getting-started#setup-wizard">Мастера настройки</a> в текущем каталоге.</p><h3 id="usage-3" tabindex="-1">Использование <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Использование {#usage-3}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div>',23),o=[d];function r(n,c,l,h,p,u){return a(),t("div",null,o)}const k=e(i,[["render",r]]);export{g as __pageData,k as default};
