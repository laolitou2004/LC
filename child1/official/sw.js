if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-O8884kld.js",revision:null},{url:"assets/ConfigTitle-DHyKRuSc.js",revision:null},{url:"assets/Connections-BQeVeXCM.js",revision:null},{url:"assets/global-mJZNxgPZ.js",revision:null},{url:"assets/index-Bmioxl3y.js",revision:null},{url:"assets/index-BuMbUX1G.js",revision:null},{url:"assets/index-wWDbL3LC.css",revision:null},{url:"assets/Logs-D2vgDgPb.js",revision:null},{url:"assets/Overview-DSvUT0_d.js",revision:null},{url:"assets/Proxies-BIUDbs8x.js",revision:null},{url:"assets/Rules-DtdVBYc3.js",revision:null},{url:"assets/Setup-DkYUwM2p.js",revision:null},{url:"assets/vendor-DW_s8V88.js",revision:null},{url:"index.html",revision:"dfbe60a10c9d40b949cad5601051adbc"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"f5b3372f312fbbe60a6ed8c03741ff80"},{url:"pwa-192x192.png",revision:"c45f48fc59b5bf47e6cbf1626aff51fc"},{url:"pwa-512x512.png",revision:"a311504ae6a46bd29b5678a410aaafc6"},{url:"manifest.webmanifest",revision:"4d78c8bc6207146065400ff644fe5a13"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
