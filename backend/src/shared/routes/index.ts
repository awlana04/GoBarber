import { Router } from 'express';

import appointmentsRouter from '@appointmentsRoutes/appointments.routes';
import usersRouter from '@usersRoutes/users.routes';
import sessionsRouter from '@usersRoutes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
