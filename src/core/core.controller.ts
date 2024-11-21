import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Core')
@Controller('cores')
export class CoreController {}
