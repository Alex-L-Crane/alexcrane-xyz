/* Drumming thumbnails */
import vivaCascadiaThumb from '@/assets/images/feed/viva-cascadia-playthrough.png?w=800&format=webp&quality=82'
import vivaCascadiaThumbSrcset from '@/assets/images/feed/viva-cascadia-playthrough.png?w=480;800;1024&format=webp&quality=82&as=srcset'

import preparedDrumsThumb from '@/assets/images/feed/prepared-drums.png?w=800&format=webp&quality=82'
import preparedDrumsThumbSrcset from '@/assets/images/feed/prepared-drums.png?w=480;800;1024&format=webp&quality=82&as=srcset'

import fastWormsThumb from '@/assets/images/feed/intronaut-fast-worms-playthrough.png?w=800&format=webp&quality=82'
import fastWormsThumbSrcset from '@/assets/images/feed/intronaut-fast-worms-playthrough.png?w=480;800;1024&format=webp&quality=82&as=srcset'

/* Technology thumbnails */
import kineticBeatsThumb from '@/assets/images/feed/kinetic-beats-app.png?w=800&format=webp&quality=82'
import kineticBeatsThumbSrcset from '@/assets/images/feed/kinetic-beats-app.png?w=480;800;1024&format=webp&quality=82&as=srcset'

import oneManRigRundownThumb from '@/assets/images/feed/one-man-rig-rundown.png?w=800&format=webp&quality=82'
import oneManRigRundownThumbSrcset from '@/assets/images/feed/one-man-rig-rundown.png?w=480;800;1024&format=webp&quality=82&as=srcset'

import littleBitsThumb from '@/assets/images/feed/little-bits.png?w=800&format=webp&quality=82'
import littleBitsThumbSrcset from '@/assets/images/feed/little-bits.png?w=480;800;1024&format=webp&quality=82&as=srcset'

import guitarReampingThumb from '@/assets/images/feed/guitar-reamping.png?w=800&format=webp&quality=82'
import guitarReampingThumbSrcset from '@/assets/images/feed/guitar-reamping.png?w=480;800;1024&format=webp&quality=82&as=srcset'


export const drumVideos = [
  {
    slug: 'prepared-drums',
    title: 'Prepared Drums Improvisation',
    date: '01-03-2025',
    youtubeId: 'Avqj5Wl2h_E',
    description: 'A low volume improvisation with inspiration taken from prepared piano.',
    thumbnail: preparedDrumsThumb,
    thumbnailSrcset: preparedDrumsThumbSrcset,
    body: ``,
  },
  {
    slug: 'viva-cascadia',
    title: 'Viva Cascadia Playthrough',
    date: '01-08-2025',
    youtubeId: 'TyKsowvmngs',
    description: 'Playthrough of the drum parts I wrote for the song Viva Cascadia by Eugene band Red Cloud.',
    thumbnail: vivaCascadiaThumb,
    thumbnailSrcset: vivaCascadiaThumbSrcset,
    body: ``,
  },
  {
    slug: 'fast-worms',
    title: 'Fast Worms Playthrough',
    date: '07-30-2018',
    youtubeId: 'iWecdzFCryc',
    description: 'Playthrough of an Intronaut song called Fast worms.',
    thumbnail: fastWormsThumb,
    thumbnailSrcset: fastWormsThumbSrcset,
    body: ``,
  }
].sort((a, b) => new Date(b.date) - new Date(a.date))

export const techVideos = [
  {
    slug: 'kinetic-beats-app',
    title: 'Kinetic Beats App',
    date: '08-14-2026',
    youtubeId: 'dKy42f76F8Q',
    description: 'I collaborated with an engineer friend to create Kinetic Beats, an iPhone app for air drumming.',
    thumbnail: kineticBeatsThumb,
    thumbnailSrcset: kineticBeatsThumbSrcset,
    body: ``,
  },
  {
    slug: 'one-man-rig-rundown',
    title: 'One-man Rig Rundown',
    date: '06-27-2023',
    youtubeId: 'MrfHY10c9tU',
    description: 'An overly complicated version of a technical setup for one-person performance.',
    thumbnail: oneManRigRundownThumb,
    thumbnailSrcset: oneManRigRundownThumbSrcset,
    body: ``,
  },
  {
    slug: 'little-bits',
    title: 'Little Bits',
    date: '07-13-2015',
    youtubeId: 'byM-ahwx-y0',
    description: 'Messing around with a toy synth.',
    thumbnail: littleBitsThumb,
    thumbnailSrcset: littleBitsThumbSrcset,
    body: ``,
  },
  {
    slug: 'guitar-reamping',
    title: 'Guitar reamping',
    date: '03-15-2012',
    youtubeId: 'L9pwYj0oR4E',
    description: 'Reamping guitars for TCA album White Light and the Empire Collapse.',
    thumbnail: guitarReampingThumb,
    thumbnailSrcset: guitarReampingThumbSrcset,
    body: ``,
  }
].sort((a, b) => new Date(b.date) - new Date(a.date))
