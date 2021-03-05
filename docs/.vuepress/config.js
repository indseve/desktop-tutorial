module.exports = {
    title: '后积先定界',
    description: '数无形时少直觉，形少数时难入微',
    markdown: {
      lineNumbers: true
    },
    theme: 'vuepress-theme-reco',
    themeConfig: {
      type: 'blog',
      author: 'indesve',
      nav: [
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
      ],
       // 博客配置
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        },
        socialLinks: [     // 信息栏展示社交信息
          { icon: 'reco-github', link: 'https://github.com/indseve' }
        ]
      },
      noFoundPageByTencent: false,
      authorAvatar: '/avatar.jpg'
    }
  }