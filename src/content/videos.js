import placeholderThumb from '@/assets/images/feed/placeholder-thumb.jpg?w=800&format=webp&quality=82'
import placeholderThumbSrcset from '@/assets/images/feed/placeholder-thumb.jpg?w=480;800;1024&format=webp&quality=82&as=srcset'

export const drumVideos = [
  {
    slug: 'prepared-drums',
    title: 'Prepared Drums Improvisation',
    date: '01-03-2025',
    youtubeId: 'Avqj5Wl2h_E',
    description: 'A low volume improvisation with inspiration taken from prepared piano.',
    // TEMPORARY, for the custom-thumbnail mechanism screenshot -- remove
    // (or replace with a real photo) before this branch merges.
    thumbnail: placeholderThumb,
    thumbnailSrcset: placeholderThumbSrcset,
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
