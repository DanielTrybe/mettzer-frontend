export type cardProps = {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
    id: string;
    authors: Array<string>;
    citations: Array<string>;
    contributors: Array<string>;
    datePublished: string;
    deleted: string;
    description: string;
    fullText: string;
    fullTextIdentifier: string;
    identifiers: Array<string>;
    journals: string;
    language: string;
    duplicateId: string;
    publisher: string;
    rawRecordXml: string;
    relations: Array<string>;
    repositories: Array<{
      id: string;
      openDoarId: number;
      name: string;
      urlHomepage: string;
      urlOaipmh: string;
      uriJournals: string;
      physicalName: string;
      source: string;
      software: string;
      metadataFormat: string;
      description: string;
      journal: string;
      roarId: number;
      baseId: number;
      pdfStatus: string;
      nrUpdates: number;
      disabled: boolean;
      lastUpdateTime: string;
      repositoryLocation: string;
    }>;
    repositoryDocument: {
      pdfStatus: number;
      textStatus: number;
      metadataAdded: number;
      metadataUpdated: number;
      timestamp: number;
      depositedDate: number;
      indexed: number;
      deletedStatus: string;
      pdfSize: number;
      tdmOnly: boolean;
      pdfOrigin: string;
    };
    similarities: string;
    subjects: Array<string>;
    title: string;
    topics: Array<string>;
    types: Array<string>;
    urls: Array<string>;
    year: number;
    doi: string;
    oai: string;
    downloadUrl: string;
    pdfHashValue: string;
    documentType: string;
    documentTypeConfidence: string;
    citationCount: string;
    estimatedCitationCount: string;
    acceptedDate: string;
    depositedDate: number;
    publishedDate: number;
    issn: string;
    attachmentCount: number;
    repositoryPublicReleaseDate: string;
    extendedMetadataAttributes: string;
    crossrefDocument: string;
    magDocument: string;
    orcidAuthors: string;
  };
};

export type SearchList = Array<{
  data: Array<cardProps>;
  status: string;
  totalHits: number;
}>;

export type Card = {
  card: cardProps;
  children?: JSX.Element;
  index?: number;
};

export interface CardsContextProps {
  cardsList: SearchList;

  search: string;
  setSearch: (value: string) => void;
  setSelectTypeSearch: (value: string) => void;
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;

  numberOfPages: number;
  selectTypeSearch: string;
  getArticles: () => void;
  getArticlesChangePage: () => void;
  loading: boolean;
}
