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
  locales: {
    root: { label: '日本語', lang: 'ja-JP' },
    en: {
      label: 'English',
      lang: 'en',
      title: 'WigglePen',
      description: 'Setup, controls, and settings for WigglePen, the QvPen extension, and WigglePenAvatar.',
      themeConfig: {
        siteTitle: 'WigglePen',
        nav: [
          { text: 'Getting started', link: '/en/guide/' },
          { text: 'For worlds', link: '/en/world/' },
          { text: 'For avatars', link: '/en/avatar/' },
          { text: 'Troubleshooting', link: '/en/troubleshooting' }
        ],
        sidebar: [
          { text: 'Getting started', items: [
            { text: 'Choose a guide', link: '/en/guide/' },
            { text: 'Requirements', link: '/en/guide/requirements' }
          ] },
          { text: 'QvPen extension', items: [
            { text: 'World setup', link: '/en/world/' },
            { text: 'Drawing and erasing', link: '/en/world/usage' },
            { text: 'Wiggle settings', link: '/en/world/settings' }
          ] },
          { text: 'Avatar version', items: [
            { text: 'Avatar setup', link: '/en/avatar/' },
            { text: 'Drawing, erasing, and colors', link: '/en/avatar/usage' },
            { text: 'Fingertip placement', link: '/en/avatar/placement' },
            { text: 'Drawing settings', link: '/en/avatar/settings' }
          ] },
          { text: 'Support', items: [
            { text: 'Troubleshooting', link: '/en/troubleshooting' },
            { text: 'Terms of use', link: '/en/terms' },
            { text: 'Changelog', link: '/en/changelog' }
          ] }
        ],
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        langMenuLabel: 'Change language',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        skipToContentLabel: 'Skip to content',
        notFound: {
          title: 'Page not found',
          quote: 'Use the menu or search to find a page.',
          linkLabel: 'Go to home', linkText: 'Go to home'
        },
        footer: { message: 'WigglePen / WigglePenAvatar Documentation' }
      }
    }
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'ぶるぶるペン',
    langMenuLabel: '言語を切り替え',
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
    footer: { message: 'ぶるぶるペン ドキュメント' }
  }
})
