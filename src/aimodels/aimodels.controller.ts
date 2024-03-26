import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AimodelsService } from './aimodels.service';
import { CreateAimodelDto } from './dto/create-aimodel.dto';
import { UpdateAimodelDto } from './dto/update-aimodel.dto';
import { ConfigService } from '@nestjs/config/dist';

@Controller('aimodels')
export class AimodelsController {
  constructor(private readonly aimodelsService: AimodelsService,private readonly configService: ConfigService) {}

  @Post()
  create(@Body() createAimodelDto: CreateAimodelDto) {
    return this.aimodelsService.create(createAimodelDto);
  }

  @Get()
  findAll() {
    // return process.env.NODE_ENV;
    // return this.configService.get('MONGO_DATABASE_URL');
    // return this.aimodelsService.findAll();
  }
  @Get('enableModels')
  findEnable() {
    return this.aimodelsService.findEnable();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aimodelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAimodelDto: UpdateAimodelDto) {
    return this.aimodelsService.update(+id, updateAimodelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aimodelsService.remove(+id);
  }
}
