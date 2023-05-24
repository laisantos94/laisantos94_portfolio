module.exports = {
    locales: {
        '/': {
            lang: 'documentation-BR',
            title: 'Lais Santos ∙ Portfolio',
            description: '',
            head: [
                ['link', { rel: 'icon', href: '/favicon.ico' }]
              ],
        },
    },

themeConfig: {
    logo: "/laisantos.png",
    siteTitle: 'Lais Santos ∙ Portfolio',
    
    nav: [
		{ text: 'About', link: 'about/index' },
		{ text: 'Resume', link: 'resume/index' },
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/laisantos94' },
        { text: 'GitHub', link: 'https://github.com/laisantos94' },
	],
		
	footer: {
		message: '© 2023 Lais Santos ∙ Powered by <a href="https://vitepress.dev/guide/what-is-vitepress">VitePress</a>',
    }
}
}