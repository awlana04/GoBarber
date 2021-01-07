import Notification from '@notificationsEntitie/Notification';

import ICreateNotificationDTO from '../dtos/ICreateNotificationDTO';

export default interface INotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
