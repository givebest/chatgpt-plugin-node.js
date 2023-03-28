import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class GetTodosDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
}
