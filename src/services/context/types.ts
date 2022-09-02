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
  setPageAndSize: any;

  selectTypeSearch: string;
  getArticles: () => void;
  loading: boolean;
}

export type BranchList = Array<{
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}>;

type Commit = {
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
};

export interface CardsDetailsContextProps {
  getCommits: (owner: string, repo: string, sha: string) => void;
  loadingCommits: boolean;
  commits: Array<Commit>;
  cardDetail: BranchList;
  getOneRepo: (owner: string, repo: string) => void;
  loading: boolean;
}

export type CommitProps = Array<{
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  committer: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  parents: Array<{
    sha: string;
    url: string;
    html_url: string;
  }>;
}>;

export type PageAndSize = {
  page: number;
  pageSize: number;
};
