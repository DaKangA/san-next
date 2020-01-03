import { getRandImage } from '~/src/core/utils'

test('生成随机图片', () => {
  expect(getRandImage(200, 300, 'sunshine')).toBe(
    'https://picsum.photos/seed/sunshine/200/300'
  )
})
