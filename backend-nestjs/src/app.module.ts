import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PatientsModule } from './modules/patients/patients.module';
import { AutenticacasionModule } from './modules/autenticacasion/autenticacasion.module';
import { PacientesModule } from './modules/pacientes/pacientes.module';
import { CitasModule } from './modules/citas/citas.module';

@Module({
  imports: [AuthModule, PatientsModule, AutenticacasionModule, PacientesModule, CitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
