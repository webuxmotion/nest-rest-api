import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductsService) {}

  @Get()
  //@Redirect('https://pereverziev.com', 301)
  getAll(): object {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Remove: ${id}`
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string
  ): string {
    return `Update: ${id}; Title: ${updateProductDto.title}; Price: ${updateProductDto.price}`
  }
}
