import { Inject, Injectable, Logger } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { EnvService } from '#api/common/service/env/env.service';
import { schema } from './schema';

@Injectable()
export class DrizzleService {
  readonly drizzle;

  private readonly logger = new Logger(DrizzleService.name);

  constructor(@Inject(EnvService) private readonly envService: EnvService) {
    const connectionString = this.envService.DatabaseUrl;
    const pool = new Pool({
      connectionString,
      ssl: true,
    });

    this.drizzle = drizzle(pool, { schema });

    this.logger.debug(`${DrizzleService.name} constructed`);
  }
}
