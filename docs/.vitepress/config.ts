import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
	lang: 'zh-CN',
	title: 'VitePress',
	description: '由Vite和Vue驱动的静态站点生成器',
	themeConfig: {
		logo: '/logo-mini.svg',
		siteTitle: 'VitePress',
		nav: [
			{ text: '指南', link: '/guide/' },
			{ text: '组件', link: '/components/' },
			{ text: '示例 ↗', link: '/examples/' },
			{
				text: '其他',
				items: [
					{ text: '更新日志', link: '/others/changelog' },
					{ text: '常见问题', link: '/others/faq' }
				]
			},
			{
				text: 'v1.11.2',
				items: [
					{ text: 'v1.11.2', link: '/others/changelog' },
					{ text: 'v1.10.x', link: '/others/changelog' }
				]
			}
		],
		search: {
			provider: 'local'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/guohaolian/vitepress' }
		]
	}
})
