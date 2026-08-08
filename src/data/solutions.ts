import { images } from './site'
import type { BusinessPage } from './types'

export const solutions: BusinessPage[] = [
  {
    slug: 'fba-logistics',
    name: 'FBA Logistics Solution',
    shortDescription: 'Inbound logistics support for marketplace sellers and commercial stock moves.',
    heroImage: images.fbaLogistics,
    overview: 'A practical workflow for sellers that need cartons, labels, appointments and delivery requirements coordinated before inventory moves.',
    capabilities: ['Carton and label checks', 'Warehouse receiving support', 'Delivery appointment coordination', 'Shipment status updates'],
    process: ['Shipment profile', 'Service selection', 'Warehouse preparation', 'Delivery appointment', 'Inbound completion'],
    relatedSlugs: ['commercial-cargo-shipping', 'warehouse-distribution'],
  },
  {
    slug: 'commercial-cargo-shipping',
    name: 'Commercial Cargo Shipping',
    shortDescription: 'B2B cargo programs for importers, trading teams and distributors.',
    heroImage: images.containers,
    overview: 'Commercial cargo shipping combines route planning, documentation support and delivery coordination for repeat trade flows.',
    capabilities: ['General cargo coordination', 'Mode comparison', 'Importer communication', 'Shipment reporting'],
    process: ['Cargo review', 'Quote plan', 'Booking', 'Transit management', 'Delivery closure'],
    relatedSlugs: ['door-to-door-delivery', 'warehouse-distribution'],
  },
  {
    slug: 'door-to-door-delivery',
    name: 'Door to Door Delivery',
    shortDescription: 'Origin pickup through destination delivery with fewer disconnected handoffs.',
    heroImage: images.doorDelivery,
    overview: 'Door to door delivery helps teams keep responsibility clear from pickup, export handling and transport to final consignee delivery.',
    capabilities: ['Origin pickup', 'Export and import support', 'Inland transfer', 'Final delivery coordination'],
    process: ['Pickup details', 'Export handoff', 'Main transport', 'Import coordination', 'Final delivery'],
    relatedSlugs: ['commercial-cargo-shipping', 'warehouse-distribution'],
  },
  {
    slug: 'warehouse-distribution',
    name: 'Warehouse & Distribution',
    shortDescription: 'Storage, sorting, split delivery and distribution coordination.',
    heroImage: images.warehouseDistribution,
    overview: 'Warehouse and distribution services support cargo teams that need short-term storage, order preparation or staged delivery.',
    capabilities: ['Storage coordination', 'Sorting and repacking support', 'Split delivery', 'Inventory handoff reporting'],
    process: ['Receiving plan', 'Storage setup', 'Order instruction', 'Dispatch', 'Completion report'],
    relatedSlugs: ['fba-logistics', 'door-to-door-delivery'],
  },
]
