import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Appointment from '@models/Appointment';
import AppointmentRepository from '@repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInTheSameDate = await appointmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInTheSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
