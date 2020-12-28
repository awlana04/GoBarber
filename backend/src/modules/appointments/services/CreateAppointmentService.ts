import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Appointment from '@appointmentsEntitie/Appointment';

import AppError from '@shared/errors/AppError';
import AppointmentRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInTheSameDate = await appointmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInTheSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await appointmentRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
