export interface Level {
  level: number;
  task: string;
  selector: string,
  markup: string;
  html: Markup;
}

export interface Markup {
  element: string;
  className?: string;
  id?: string;
  toWiev?: {
    selector: string
    value: string
  },
  isClosed?: boolean;
  attributes?: {
    attributeName: string
    attributeValue: string
  } [];
  children: Markup[] | null;
}
