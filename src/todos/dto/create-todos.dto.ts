import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTodosDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
}
