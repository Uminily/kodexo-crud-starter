import { BaseSerialized } from '@kodexo/crud'
import { ApiModel, ApiProperty } from '@kodexo/openapi'
import { Expose } from 'class-transformer'

@ApiModel({
  title: 'User'
})
export class UserSerialized extends BaseSerialized {
  @ApiProperty()
  @Expose()
  email: string
}
