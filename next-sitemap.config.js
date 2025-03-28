/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://jmaloney.net',
    generateRobotsTxt: true, // will generate robots.txt too
    robotsTxtOptions: {
        policies: [
          { userAgent: 'GPTBot', disallow: '/' },
          { userAgent: 'Google-Extended', disallow: '/' },
          { userAgent: 'Claude-Web', disallow: '/' },
          { userAgent: 'CCBot', disallow: '/' },
          { userAgent: '*', allow: '/' },
        ],
      },
  };
  