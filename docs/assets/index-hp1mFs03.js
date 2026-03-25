(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <main class="page">
    <h1>Hello, hello!</h1>
    <p>I'm Mehedi Marof.</p>
    <p>
      This is my starter site for JOUR 628T, where I am beginning to work with
      JavaScript, HTML, and CSS in a data visualization class.
    </p>
    <a href="https://github.com/mehedi-marof/mehedi-marof628T" target="_blank" rel="noreferrer">
      View my GitHub repo
    </a>
  </main>
`;
