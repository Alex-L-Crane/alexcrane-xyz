import preparedDrumsThumb from '@/assets/images/feed/prepared-drums.png?w=800&format=webp&quality=82'
import preparedDrumsThumbSrcset from '@/assets/images/feed/prepared-drums.png?w=480;800;1024&format=webp&quality=82&as=srcset'

import vivaCascadiaThumb from '@/assets/images/feed/viva-cascadia-playthrough.png?w=800&format=webp&quality=82'
import vivaCascadiaThumbSrcset from '@/assets/images/feed/viva-cascadia-playthrough.png?w=480;800;1024&format=webp&quality=82&as=srcset'


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
    title: 'Viva Cascadia Song Playthrough',
    date: '01-08-2025',
    youtubeId: 'TyKsowvmngs',
    description: 'Plathrough of the drum parts I wrote for the song Viva Cascadia by Eugene band Red Cloud.',
    thumbnail: vivaCascadiaThumb,
    thumbnailSrcset: vivaCascadiaThumbSrcset,
    body: ``,
  }
].sort((a, b) => new Date(b.date) - new Date(a.date))

export const techVideos = [
  {
    slug: 'one-man-rig-rundown',
    title: 'One Man Rig Rundown',
    date: '06-27-2023',
    youtubeId: 'MrfHY10c9tU',
    description: 'An overly complicated version of a technical setup for one-person performance.',
    body: ``,
  }
].sort((a, b) => new Date(b.date) - new Date(a.date))
