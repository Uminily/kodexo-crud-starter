import { ApiProperty } from '@kodexo/openapi'
import { IsEmail, MinLength } from 'class-validator'

export abstract class CommonUserDto {
  @ApiProperty({
    description: 'User email to log in',
    example: 'john.doe@acme.com',
    required: true
  })
  @IsEmail()
  email: string

  @ApiProperty({
    description: 'User password',
    example: '$zaJEa45£de^',
    required: true
  })
  @MinLength(6)
  password: string
}
