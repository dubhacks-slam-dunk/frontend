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
  photoEntries: PhotoEntry[];
  gossipCorner: GossipEntry[];
  signOff: string;
}

export class Edition {
  title: string;
  publishDate: Date;
  summary: string;
  thingsToCelebrate: CelebrateEntry[];
  media: MediaEntry[];
  photoEntries: PhotoEntry[];
  gossipCorner: GossipEntry[];
  signOff: string;

  constructor(editionProps: EditionProps) {
    const {
      title,
      publishDate,
      summary,
      thingsToCelebrate,
      media,
      photoEntries,
      gossipCorner,
      signOff,
    } = editionProps;

    this.title = title;
    this.publishDate = publishDate;
    this.summary = summary;
    this.thingsToCelebrate = thingsToCelebrate;
    this.media = media;
    this.photoEntries = photoEntries;
    this.gossipCorner = gossipCorner;
    this.signOff = signOff;
  }
}
