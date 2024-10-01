import{_ as e,c as o,o as a,a4 as t}from"./chunks/framework.DJuOfWGg.js";const p=JSON.parse('{"title":"Переход с VitePress 0.x","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/migration-from-vitepress-0.md","filePath":"ru/guide/migration-from-vitepress-0.md","lastUpdated":null}'),i={name:"ru/guide/migration-from-vitepress-0.md"},d=t('<h1 id="переход-с-vitepress-0-x" tabindex="-1">Переход с VitePress 0.x <a class="header-anchor" href="#переход-с-vitepress-0-x" aria-label="Permalink to &quot;Переход с VitePress 0.x&quot;">​</a></h1><p>Если вы переходите с версии VitePress 0.x, то в ней есть несколько изменений, связанных с новыми функциями и улучшениями. Следуйте этому руководству, чтобы узнать, как перенести ваше приложение на последнюю версию VitePress.</p><h2 id="конфигурация-приложения" tabindex="-1">Конфигурация приложения <a class="header-anchor" href="#конфигурация-приложения" aria-label="Permalink to &quot;Конфигурация приложения&quot;">​</a></h2><ul><li>Функция интернационализации ещё не реализована.</li></ul><h2 id="конфигурация-темы" tabindex="-1">Конфигурация темы <a class="header-anchor" href="#конфигурация-темы" aria-label="Permalink to &quot;Конфигурация темы&quot;">​</a></h2><ul><li>Опция <code>sidebar</code> изменила свою структуру. <ul><li>Ключ <code>children</code> теперь называется <code>items</code>.</li><li>Элемент верхнего уровня может не содержать <code>link</code> в данный момент. Мы планируем вернуть его обратно.</li></ul></li><li><code>repo</code>, <code>repoLabel</code>, <code>docsDir</code>, <code>docsBranch</code>, <code>editLinks</code>, <code>editLinkText</code> удалены в пользу более гибкого api. <ul><li>Для добавления ссылки GitHub с иконкой в навигацию используйте функцию <a href="./../reference/default-theme-nav#navigation-links">Социальные ссылки</a>.</li><li>Для добавления ссылки «Редактировать эту страницу» используйте функцию <a href="./../reference/default-theme-edit-link">Ссылка для редактирования</a>.</li></ul></li><li>Опция <code>lastUpdated</code> теперь разделена на <code>config.lastUpdated</code> и <code>themeConfig.lastUpdatedText</code>.</li><li>Опция <code>carbonAds.carbon</code> заменена на <code>carbonAds.code</code>.</li></ul><h2 id="конфигурация-метаданных" tabindex="-1">Конфигурация метаданных <a class="header-anchor" href="#конфигурация-метаданных" aria-label="Permalink to &quot;Конфигурация метаданных&quot;">​</a></h2><ul><li>Опция <code>home: true</code> заменена на <code>layout: home</code>. Кроме того, многие настройки, связанные с главной страницей, были изменены для обеспечения дополнительных возможностей. Подробности см. в разделе <a href="./../reference/default-theme-home-page">Главная страница</a>.</li><li>Опция <code>footer</code> перенесена в <a href="./../reference/default-theme-config#footer"><code>themeConfig.footer</code></a>.</li></ul>',8),r=[d];function c(l,s,n,h,u,f){return a(),o("div",null,r)}const _=e(i,[["render",c]]);export{p as __pageData,_ as default};
