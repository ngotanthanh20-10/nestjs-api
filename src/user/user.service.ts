import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    const data = [
      { id: 1, name: 'Thanh', email: 'thanhngodev@gmail.com' },
      { id: 2, name: 'Thanh', email: 'thanhngodev@gmail.com' },
      { id: 3, name: 'Thanh', email: 'thanhngodev@gmail.com' },
      { id: 4, name: 'Thanh', email: 'thanhngodev@gmail.com' },
    ];
    return data;
  }

  getUserId(params: { id: number }) {
    const data = this.getUsers().find((user) => {
      if (user.id === params.id * 1) return user;
    });
    return data;
  }

  createUser(updateUserDto: { name: string; email: string }) {
    return updateUserDto;
  }

  updateUser(
    updateUserDto: { name: string; email: string },
    params: { id: number },
  ) {
    return { updateUserDto, params };
  }

  deleteUser(params: { id: number }) {
    const data = this.getUsers().find((user) => {
      if (user.id === params.id * 1) return user;
    });
    return data;
  }
}
