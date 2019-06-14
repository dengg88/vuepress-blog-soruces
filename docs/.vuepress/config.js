module.exports = {
    title: "DengGang Blog",
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
    ],
    base:'/vuepress-blog/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '资料',
                items: [
                    { text: 'android', link: '/android/' },
                    { text: 'ios', link: '/ios/' }
                ]
            },
            { text: 'Google', link: 'https://google.com' },
            { text: 'GitHub', link: 'https://github.com/dengg88' },
        ],
        sidebar: {
            '/android/': [
                '',
                {
                    title: 'Android资料',
                    collapsable: false,
                    children: [
                        ['android1','kotlin从入门到精通'],
                    ]
                },
            ],
            '/ios/': [
                '',
                'ios1',
            ],
        }
    }
}