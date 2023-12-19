/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
        remotePatterns: [{
            protocol: "https",
            hostname : "www.thecocktaildb.com",
           
        },
            {
                protocol: "https",
          
                hostname: "images.fineartamerica.com",
            }
        
        ]
    },

}

module.exports = nextConfig
