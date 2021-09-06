const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://linuxonandroid.com',
    trailingSlash: false,
  },
  header: {
    logo: 'http://linuxonandroid.com.s3-website.eu-west-2.amazonaws.com/ic_launcher-web.png',
    logoLink: 'https://linuxonandroid.com',
    title:"LinuxOnAndroid",
    githubUrl: 'https://github.com/devwithzachary/LinuxOnAndroid',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/Linuxonandroid" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='http://linuxonandroid.com.s3-website.eu-west-2.amazonaws.com/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/ykMWxWzKrG" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='http://linuxonandroid.com.s3-website.eu-west-2.amazonaws.com/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      //'/introduction', // add trailing slash if enabled above
      //'/codeblock',
    ],
    collapsedNav: [
      //'/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'GitHub', link: 'https://github.com/devwithzachary/LinuxonAndroid-App' }],
    frontline: false,
    ignoreIndex: true,
    title:"",
  },
  siteMetadata: {
    title: 'LinuxOnAndroid',
    description: 'Site for the LinuxOnAndroid project, free and opensource way to get (GNU) Linux on your Android phone!',
    ogImage: null,
    docsLocation: 'https://github.com/devwithzachary/LinuxOnAndroid-Website/tree/main/content',
    favicon: 'http://linuxonandroid.com.s3-website.eu-west-2.amazonaws.com/ic_launcher-web.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
