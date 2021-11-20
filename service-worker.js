                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/11/16/wechaty-landing-page-final-blog/","revision":"41ee6cee48498424d8cb4a108c1fec56"},{"url":"/2021/11/07/how-to-develop-wechaty-puppet-module-supporting-5g-messages/","revision":"1a86d22de686c6f7370b208924979e45"},{"url":"/2021/11/07/gsod-2021-improve-introduction-and-explanation-project-joint-report/","revision":"848b090e04e2c98a108133f5e28db933"},{"url":"/2021/11/05/kaiyuanshe-oss-con-2021-wechaty-gsod/","revision":"339bc1a8fa94d9b5bc51fe8e499bbec1"},{"url":"/2021/11/03/python-wechaty-outstanding-project-award/","revision":"397189b253c20e5aa07f21ba0a1f53e1"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
