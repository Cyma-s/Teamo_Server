import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    PassportModule,
    UserModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
  exports: [AuthService],
})
export class AuthModule {}
