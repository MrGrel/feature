export interface IDataQueries {
  indexForLoads: number;
  order?: string;
  search?: string;
  category?: string;
}

export interface ICatalog {
  kind: string;
  totalItems: number;
  items: IProduct[];
}

export interface IProduct {
  kind: Kind;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
  saleInfo: ISaleInfo;
  accessInfo: IAccessInfo;
}

export interface IAccessInfo {
  country: string;
  viewability: Viewability;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: TextToSpeechPermission;
  epub: IEpub;
  pdf: IEpub;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface IEpub {
  isAvailable: boolean;
  downloadLink?: string;
}

export enum TextToSpeechPermission {
  Allowed = 'ALLOWED',
}

export enum Viewability {
  AllPages = 'ALL_PAGES',
}

export enum Kind {
  BooksVolume = 'books#volume',
}

export interface ISaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  buyLink: string;
}

export interface IVolumeInfo {
  title: string;
  authors?: string[];
  publishedDate: string;
  description?: string;
  industryIdentifiers: IIndustryIdentifier[];
  readingModes: IReadingModes;
  pageCount: number;
  printType: string;
  categories?: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: IPanelizationSummary;
  imageLinks: IImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  subtitle?: string;
}

export interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IIndustryIdentifier {
  type: string;
  identifier: string;
}

export interface IPanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface IReadingModes {
  text: boolean;
  image: boolean;
}
