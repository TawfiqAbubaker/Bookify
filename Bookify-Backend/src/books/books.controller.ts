import { Book } from './book.model';
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, GetBookByGenreDto } from './dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.returnAllBooks();
  }
  @Post()
  createBook(@Body() Book: CreateBookDto) {
    const test = this.booksService.addBook(Book);
    return test;
  }
  @Delete()
  deleteAllBooks() {
    const test = this.booksService.emptyDatabase();
    return test;
  }
  @Get('/genre')
  getBookByGenre(@Query() genreParam: GetBookByGenreDto) {
    const test = this.booksService.getBookByGenre(genreParam.genre);
    return test;
  }
}
