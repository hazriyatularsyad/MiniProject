import { createToken } from '@/helpers/createToken';
import { hashPass } from '@/helpers/hashpassword';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';

export class EoController {
  async createEoData(req: Request, res: Response) {
    try {
      const newEvent = await prisma.eO.findFirst({
        where: {
          OR: [{ username: req.body.username }, { email: req.body.email }],
        },
      });
      if (newEvent?.username === req.body.username) throw 'Username is already';
      if (newEvent?.email === req.body.email) throw 'Email is already';

      const password = await hashPass(req.body.password);

      const event = await prisma.eO.create({
        data: {
          ...req.body,
          password,
        },
      });
      return res.status(201).send({
        message: 'User Created',
        event,
      });
    } catch (error) {
      return res.status(400).send({
        status: 'create user failed',
        message: error,
      });
    }
  }

  async loginEo(req: Request, res: Response) {
    try {
      const eo = await prisma.eO.findFirst({
        where: {
          OR: [{username: req.body.username}, {email: req.body.email}]
        }
      })

      if (!eo) throw 'eo not found'
      if (!eo.isVerify) throw 'eo is not verified'
      
      const isValidPass = await compare(req.body.password, eo.password)
      
      if (!isValidPass) throw 'password is not valid'

      const token = createToken({ id: eo.id, role: 'EO' }, '1d')
      
      res.status(200).send({
        message: 'login succes',
        token,
        eo
      })

    } catch (error) {
      res.status(400).send({
        status: 'login failed',
        message: error,

      })
    }
  }
}
