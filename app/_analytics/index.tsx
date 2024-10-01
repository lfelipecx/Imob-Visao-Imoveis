import React from "react"

const Analytics = () => (
    <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-2678Y3GXQH`} />
        <script
        dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-2678Y3GXQH', {page_path: window.location.pathname})
                `             
            
        }}
               
        />
       
    </>
)

export default Analytics