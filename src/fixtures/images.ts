function generateImages(count = 10): Image[] {
  return Array.from({ length: count }, (_, i) => i).map((i) => ({
    src: 'https://picsum.photos/1230/922?random=' + i,
    caption: 'lorem ipsum img'
  }))
}

const ImagesPlaceholder: Image[] = generateImages(12)

export { ImagesPlaceholder, generateImages }
