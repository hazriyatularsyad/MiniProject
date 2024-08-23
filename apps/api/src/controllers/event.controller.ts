import prisma from '@/prisma';
import { Request, Response } from 'express';

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      const eventName = await prisma.events.findFirst({
        where: { name: req.body },
      });
      const date = new Date(req.body.date);
      const price = parseFloat(req.body.price);
      const seats = parseInt(req.body.seats);
      if (eventName?.name) throw 'Nama event ini sudah terpakai';
      await prisma.events.create({ data: { ...req.body, seats, date, price } });
      return res.status(201).send({
        message: 'User created successfully',
      });
    } catch (error) {
      return res.status(400).send({
        status: 'create use failed',
        message: error,
      });
    }
  }
  async getEvent(req: Request, res: Response) {
    try {
      const event = await prisma.events.findMany({ orderBy: [{ id: 'desc' }] });
      return res.status(200).send({
        message: 'sucess',
        event,
      });
    } catch (error) {
      return res.status(400).send({
        status: 'create event failed',
        message: error,
      });
    }
  }
}
