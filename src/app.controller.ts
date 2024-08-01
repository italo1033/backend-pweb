import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/transaction')
  async createTranscation(@Body() data: CreateTransactionDTO){
    const createTransaction = await this.appService.createTransaction(data)
    return createTransaction
  }
}
