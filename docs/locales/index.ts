import en from './en-US';

type Locale<T> = {
  [keys in keyof T]: T[keys];
};

export type ENDict = Locale<typeof en>;

export type Dict = {
  en: ENDict;
};

const dict: Dict = {
  en: en
};

export function getMessages(key?: any) {
  if (key === 'zh' || key === 'en-US') {
    return en as ENDict;
  }
  return en as ENDict;
}

export default dict;
