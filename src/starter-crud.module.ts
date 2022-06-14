import { controllersAutoDiscovery } from '@kodexo/app'
import { Module } from '@kodexo/common'
import { MikroModule } from '@kodexo/mikro-orm'
import { UsersModule } from './features/users.module'

@Module({
  routing: controllersAutoDiscovery(),
  imports: [MikroModule, UsersModule]
})
export class StarterCrudModule {}
