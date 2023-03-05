type LanguageVariation = {
  ko: string;
  en: string;
};

type ComponentSize = {
  sm: string;
  md: string;
  lg: string;
  full: string;
};

export type Language = keyof LanguageVariation;

export type Size = keyof ComponentSize;

export type Combine<T, K> = T & Omit<K, keyof T>;
