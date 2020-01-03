export const IMG_RAND_HOLDER = '{seed}'

export function getRandImage(
  width: number,
  height: number,
  seed?: string
): string {
  let rnd = IMG_RAND_HOLDER
  if (seed) rnd = seed
  return `https://picsum.photos/seed/${rnd}/${width}/${height}`
}
