export interface PageProps {
  params: PageParams;
  searchParams?: PageSearchParams;
}

// create a generic type for the page params
export type PageSearchParams = {
  [key: string]: string | string[] | undefined;
};

// create a generic type for the page params
export type PageParams = {
  [key: string]: string;
};
