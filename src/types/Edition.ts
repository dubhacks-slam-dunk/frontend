import CelebrateEntry from './CelebrateEntry';
import GossipEntry from './GossipEntry';
import MediaEntry from './MediaEntry';
import PhotoEntry from './PhotoEntry';

export interface EditionProps {
  title: string;
  publishDate: Date;
  summary: string;
  thingsToCelebrate: CelebrateEntry[];
  media: MediaEntry[];
  images: PhotoEntry[];
  gossipCorner: GossipEntry[];
  signOff: string;
}

export class Edition {
  title: string;
  publishDate: Date;
  summary: string;
  thingsToCelebrate: CelebrateEntry[];
  media: MediaEntry[];
  images: PhotoEntry[];
  gossipCorner: GossipEntry[];
  signOff: string;

  constructor(editionProps: EditionProps) {
    const { title, publishDate, summary, thingsToCelebrate, media, images, gossipCorner, signOff } =
      editionProps;

    this.title = title;
    this.publishDate = publishDate;
    this.summary = summary;
    this.thingsToCelebrate = thingsToCelebrate;
    this.media = media;
    this.images = images;
    this.gossipCorner = gossipCorner;
    this.signOff = signOff;
  }
}
