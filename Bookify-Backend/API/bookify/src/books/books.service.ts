import { PrismaClient } from '.prisma/client';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Book } from './book.model';
import { CreateBookDto, Genre } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  prisma = new PrismaClient();

  async returnAllBooks(): Promise<Book[]> {
    const returnedBooks = await this.prisma.book.findMany();
    return returnedBooks;
  }
  async addBook(bookparam: CreateBookDto) {
    const timePeriod = await this.prisma.book.findFirst({
      where: {
        title: bookparam.title,
        author: bookparam.author,
      },
    });
    if (!timePeriod) {
      const test = await this.prisma.book.create({
        data: {
          title: bookparam.title,
          genre: bookparam.genre,
          author: bookparam.author,
          cover: bookparam.cover,
        },
      });
      return test;
    } else {
      throw new HttpException('Already Exists', HttpStatus.NOT_FOUND);
    }
  }
  async emptyDatabase() {
    await this.prisma.book.deleteMany({});
  }
  async getBookByGenre(genreParam: Genre) {
    const test = await this.prisma.book.findMany({
      where: {
        genre: genreParam,
      },
    });
    return test;
  }
}
