import type { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = [
  {
    text: 'Animations',
    collapsed: true,
    items: [
      {
        text: 'Waifu',
        collapsed: false,
        items: [
          {
            text: '2023 智乃生日快乐！',
            link: '/animations/waifu/kun-chino-2023',
          },
        ],
      },
    ],
  },
  {
    text: 'Visualnovels',
    collapsed: true,
    items: [
      {
        text: 'Koi',
        collapsed: false,
        items: [
          {
            text: 'Ting Dungeon (微小地牢)',
            link: '/visualnovels/koi/tiny-dungeon',
          },
        ],
      },
    ],
  },
]
