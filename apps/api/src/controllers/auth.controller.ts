import { createToken } from '@/helpers/createToken';
import { hashPass } from '@/helpers/hashpassword';
import { transporter } from '@/helpers/nodemailer';
import generateReferralCode from '@/helpers/refferalCode';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';

export class AuthController {
  async createUserData(req: Request, res: Response) {
    try {
      const newUser = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.username }, { email: req.body.email }],
        },
      });
      if (newUser?.username === req.body.username) throw 'Username Is Al Ready';

      if (newUser?.email === req.body.email) throw 'Email are used';

      const password = await hashPass(req.body.password);

      const referal = generateReferralCode();

      console.log(referal);

      const user = await prisma.user.create({
        data: {
          ...req.body,
          password,
          referal,
        },
      });

      // await transporter.sendMail({
      //   from: process.env.MAIL_USER,
      //   to: req.body?.email,
      //   subject: 'Welcome to TiConcer',
      //   html: '<h1>Thank You</h1>  ',
      // });

      return res.status(201).send({
        message: 'User created successfully',
        user,
      });
    } catch (error) {
      console.log(error);

      return res.status(400).send({
        status: 'create user failed',
        message: error,
      });
    }
  }

  async loginUserData(req: Request, res: Response) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.username }, { email: req.body.username }],
        },
      });

      if (!user) throw 'user not found';
      if (!user.isVerify) throw 'user not verified';

      const isValidPass = await compare(req.body.password, user.password);

      if (!isValidPass) throw 'password is not valid';

      const token = createToken({ id: user!.id, role: 'user' }, '1d');

      res.status(200).send({
        message: 'login success',
        token,
        user,
      });
    } catch (error) {
      res.status(400).send({
        status: 'login failed',
        message: error,
      });
    }
  }

  // async verifyUser(req: Request, res: Response) {
  //   try {
  //     const user = await prisma.user.findUnique({
  //       where: { id: req.user?.id },
  //     });
  //     if (user?.isVerify) throw 'User has already been Verified!';
  //     await prisma.user.update({
  //       where: { id: req.user?.id },
  //       data: { isVerify: true },
  //     });
  //     res.status(200).send({
  //       status: 'ok',
  //       msg: 'User Verified!',
  //     });
  //   } catch (error) {
  //     res.status(400).send({
  //       status: 'failed verify user',
  //       message: error,
  //     })
  //   }
  // }
}
