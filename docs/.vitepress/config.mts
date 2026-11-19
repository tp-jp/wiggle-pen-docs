import { defineConfig } from 'vitepress'

const base = '/wiggle-pen-docs/'

export default defineConfig({
  lang: 'ja-JP',
  title: 'ぶるぶるペン',
  description: 'ぶるぶるペンの導入・操作・調整ガイド。QvPen拡張版とアバター版の使い方を紹介します。',
  base,
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#397864' }]
  ],
  sitemap: { hostname: 'https://tp-jp.github.io/wiggle-pen-docs/' },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'ぶるぶるペン',
    nav: [
      { text: 'はじめに', link: '/guide/' },
      { text: 'QvPen拡張版', link: '/world/' },
      { text: 'アバター版', link: '/avatar/' },
      { text: '困ったときは', link: '/troubleshooting' }
    ],
    sidebar: [
      { text: 'はじめに', items: [
        { text: 'ガイドの選び方', link: '/guide/' },
        { text: '導入前の準備', link: '/guide/requirements' }
      ] },
      { text: 'QvPen拡張版', items: [
        { text: 'ワールドに導入する', link: '/world/' },
        { text: '描く・消す', link: '/world/usage' },
        { text: '揺れを調整する', link: '/world/settings' }
      ] },
      { text: 'アバター版', items: [
        { text: 'アバターに導入する', link: '/avatar/' },
        { text: '描く・消す・色を変える', link: '/avatar/usage' },
        { text: '指先の位置を合わせる', link: '/avatar/placement' },
        { text: '描画設定', link: '/avatar/settings' }
      ] },
      { text: 'サポート', items: [
        { text: '困ったときは', link: '/troubleshooting' },
        { text: '利用規約', link: '/terms' },
        { text: '更新履歴', link: '/changelog' }
      ] }
    ],
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => Array.from(
              new Intl.Segmenter('ja', { granularity: 'word' }).segment(text)
            ).filter(part => part.isWordLike).map(part => part.segment)
          }
        },
        locales: { root: { translations: {
          button: { buttonText: '検索', buttonAriaLabel: 'ドキュメントを検索' },
          modal: {
            displayDetails: '詳細を表示', resetButtonTitle: '検索をクリア',
            backButtonTitle: '検索に戻る', noResultsText: '見つかりませんでした',
            footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' }
          }
        } } }
      }
    },
    outline: { label: 'このページの内容', level: [2, 3] },
    docFooter: { prev: '前のページ', next: '次のページ' },
    darkModeSwitchLabel: '表示テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    sidebarMenuLabel: '目次',
    returnToTopLabel: 'ページの先頭へ',
    skipToContentLabel: '本文へ移動',
    notFound: {
      title: 'ページが見つかりません',
      quote: '目次または検索からページを探してください。',
      linkLabel: 'トップページへ', linkText: 'トップページへ戻る'
    },
    footer: { message: 'ぶるぶるペン ドキュメント · WigglePen / WigglePenAvatar' }
  }
})
