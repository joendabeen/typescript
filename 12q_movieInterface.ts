// MovieInfos - Movie

interface Movie {
  title: string;
  url: string;
  image: string;
  authorName: string;
  authorUrl: string;
  authorImage: string;
  createTime: string;
}

interface MovieInfos {
  articleList: Movie[];
  lastPublishTime: number;
  moreList: boolean;
}
