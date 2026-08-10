import { images } from './site'
import type { NewsItem } from './types'

export const news: NewsItem[] = [
  {
    id: 'cargo-preparation',
    slug: 'cargo-preparation',
    date: '2026-08-01',
    title: 'How cargo preparation improves freight timing',
    image: images.office,
    summary: 'Clear carton data, document checks and pickup instructions reduce avoidable delays before shipment handoff.',
    body: [
      'A reliable shipment starts before booking. Cargo teams should prepare carton counts, gross weight, dimensions, cargo description and delivery requirements in one shared record.',
      'When the freight plan includes document readiness and handoff ownership, the carrier selection becomes easier to compare and the shipment is less likely to stall.',
    ],
  },
  {
    id: 'mode-selection',
    slug: 'freight-mode-selection',
    date: '2026-07-20',
    title: 'Choosing ocean, air, rail or road for commercial cargo',
    image: images.aircraft,
    summary: 'Mode selection should balance lead time, cargo value, destination handoff and document complexity.',
    body: [
      'Ocean freight often fits planned volume, air freight fits urgent timing, rail can support multimodal planning, and road freight connects pickup and final delivery.',
      'The best choice depends on cargo readiness, route stability and how much flexibility the buyer has around arrival time.',
    ],
  },
  {
    id: 'warehouse-handoff',
    slug: 'warehouse-handoff',
    date: '2026-07-08',
    title: 'Why warehouse handoff details matter',
    image: images.warehouseDistribution,
    summary: 'Warehouse requirements affect labels, receiving windows, delivery appointments and split distribution.',
    body: [
      'Warehouse delivery is not only a final step. It can shape carton labels, pallet planning, appointment windows and the sequence of local distribution.',
      'Sharing warehouse instructions early helps the logistics team connect the main transport plan with the final receiving process.',
    ],
  },
  {
    id: 'quote-readiness',
    slug: 'freight-quote-readiness',
    date: '2026-06-18',
    title: 'What to include in a freight quote request',
    image: images.rail,
    summary: 'A complete quote request helps logistics teams respond with a practical route, not just a rate.',
    body: [
      'Origin, destination, cargo type, volume, timing, service need and special handoff notes are the core inputs for a usable quote.',
      'When these details are clear, the first response can focus on mode fit, route options and next steps.',
    ],
  },
  {
    id: 'documentation',
    slug: 'documentation-readiness',
    date: '2026-06-02',
    title: 'Documentation readiness for B2B logistics',
    image: images.team,
    summary: 'Commercial invoice, packing data and shipping instructions should be reviewed before cargo leaves origin.',
    body: [
      'Documentation readiness helps avoid inconsistent cargo descriptions, missing consignee details and avoidable rework during shipment handling.',
      'A simple document checklist keeps the freight plan aligned with the commercial order and destination requirements.',
    ],
  },
]
