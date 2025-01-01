
"use client";

import Script from "next/script";

const BingTracking = () => {
  const UET_TAG_ID = process.env.NEXT_PUBLIC_BING_UET_TAG_ID;

  if (!UET_TAG_ID) {
    return null; // 如果没有 UET 标签 ID，则不渲染脚本
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://bat.bing.com/bat.js`}
      />
      <Script
        id="bing-uca"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.uetq = window.uetq || [];
            uetq.push('event_name', '${UET_TAG_ID}');
          `,
        }}
      />
      {/* 初始化 UET 标签 */}
      <Script
        id="bing-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"${UET_TAG_ID}"};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onerror=f,i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)}(window,document,"script","https://bat.bing.com/bat.js","uetq");
          `,
        }}
      />
    </>
  );
};

export default BingTracking;