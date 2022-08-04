import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  getUserId(@Param() params: { id: number }) {
    return this.userService.getUserId(params);
  }

  @Post()
  createUser(@Body() updateUserDto: { name: string; email: string }) {
    return this.userService.createUser(updateUserDto);
  }

  @Patch('/:id')
  updateUser(
    @Body() updateUserDto: { name: string; email: string },
    @Param() params: { id: number },
  ) {
    return this.userService.updateUser(updateUserDto, params);
  }

  @Delete('/:id')
  deleteUser(@Param() params: { id: number }) {
    return this.userService.getUserId(params);
  }
}
