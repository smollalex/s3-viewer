export type ImageProps = {
  url: string,
  filename: string
  tag: string
}

export type ItemProps = {
  item: ImageProps,
  onClick: (item: ImageProps) => void
}
