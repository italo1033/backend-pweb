import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Injectable()
export class AppService {
  constructor( private readonly prismaService: PrismaService){
    
  }

  async createTransaction ( data: CreateTransactionDTO){
    const createTransaction = await this.prismaService.transaction.create({
      data
    })

  }
}
