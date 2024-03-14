import { Inject, Injectable, Logger } from '@nestjs/common';
import { type SupabaseClient, type User, createClient } from '@supabase/supabase-js';
import { EnvService } from '#api/common/service/env/env.service';

@Injectable()
export class SupabaseService {
  private readonly client: SupabaseClient;

  private readonly logger = new Logger(SupabaseService.name);

  constructor(@Inject(EnvService) private readonly envService: EnvService) {
    this.client = createClient(this.envService.SupabaseUrl, this.envService.SupabaseServiceRoleKey);

    this.logger.debug(`${SupabaseService.name} constructed`);
  }

  async getUserByAccessToken(accessToken: string): Promise<User | null> {
    const { data, error } = await this.client.auth.getUser(accessToken);
    if (error) {
      this.logger.error(error.message);
      return null;
    }

    return data.user;
  }
}
