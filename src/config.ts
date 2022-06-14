import { ServerConfiguration } from '@kodexo/config'
import { RequestContextMiddleware } from '@kodexo/mikro-orm'
import { LoadStrategy } from '@mikro-orm/core'
import { StarterCrudModule } from './starter-crud.module'

export const config: ServerConfiguration = {
  appModule: StarterCrudModule,

  mikroORM: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    dbName: process.env.DB_NAME || 'kodexo-starter-crud',
    user: process.env.DB_USER || 'kodexo-starter-crud',
    password: process.env.DB_PASSWORD || 'kodexo-starter-crud',
    type: 'postgresql',
    debug: false,
    loadStrategy: LoadStrategy.JOINED,
    allowGlobalContext: true,
    migrations: {
      tableName: 'migrations',
      path: './migrations',
      transactional: true,
      allOrNothing: true,
      safe: true,
      emit: 'ts',
      disableForeignKeys: false
    },
    driverOptions: {
      connection: {
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
      }
    }
  },

  middlewares: [
    RequestContextMiddleware() // Needed for MikroORM & UoW system, each request must be unique and isolated
  ]
}
