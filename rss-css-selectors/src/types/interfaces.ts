export interface Level {
  level: number;
  goalElementsNumber: number
  task: string;
  selector: string,
  html: Markup;
}

export interface Attributes {
  attributeName: string
  attributeValue: string
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
  attributes?: Attributes [];
  commonAtributes?: Attributes [];
  children: Markup[] | null;
}
