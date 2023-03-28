import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class DelTodosDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
}
