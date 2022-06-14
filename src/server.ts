import { Configuration } from '@kodexo/config'
import { Inject } from '@kodexo/injection'
import { ConnectionDatabase } from '@kodexo/mikro-orm'
import { config } from './config'

@Configuration(config)
export class Server {
  constructor(@Inject private connection: ConnectionDatabase) {}

  /**
   * Hook after server is initialized
   * Eg. Start some DB migrations or else
   */
  async afterInit() {
    const isDev = true

    if (isDev) {
      const schemaGenerator = this.connection.orm.getSchemaGenerator()
      await schemaGenerator.updateSchema({ wrap: false })
    } else {
      const migrator = this.connection.orm.getMigrator()
      await migrator.up()
    }
  }
}
