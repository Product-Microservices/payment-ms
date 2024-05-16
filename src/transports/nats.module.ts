import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NatsService, envs } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NatsService,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServer,
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: NatsService,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServer,
        },
      },
    ]),
  ],
})
export class NatsModule {}