import { injectable, inject } from 'tsyringe';

import User from '@usersEntitie/User';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

interface Request {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email }: Request): Promise<void> {}
}

export default SendForgotPasswordEmailService;
