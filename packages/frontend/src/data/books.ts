// Books data - imported from centralized configuration
import booksConfig from '../../config/books.config.json';

export interface BookData {
  title: {
    it: string;
    en: string;
  };
  description: {
    it: string;
    en: string;
  };
  amazonLink: string;
  coverImage?: string;
}

// Map config data to match expected format
export const booksData: BookData[] = booksConfig.books.map(book => ({
  title: book.title,
  description: book.description,
  amazonLink: book.url,
  coverImage: book.coverImage
}));
