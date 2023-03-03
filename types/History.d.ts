type Align = 'start' | 'center' | 'end'

interface TechChip {
  color: string
  label: string
}

interface Link {
  label: string
  url: string
}

interface HistoryItem {
  top: number
  type: 'card' | 'text'
  slot: 'left' | 'right'
  align?: [Align, Align]
  date: string
  title: string
  desc?: string
  img?: string
  tech?: TechChip[]
  links?: Link[]
}

export type { Align, HistoryItem, TechChip, Link }
