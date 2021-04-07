import { Administrator } from './administrator.type';
import { ContactNumber } from './contact-number.type';
import { DetailContact } from './detail-contacts.type';

export interface BuildingContacts {
  name: string;
  buildingAdmin?: Administrator | undefined;
  contacts: ContactNumber[];
  detailContacts: DetailContact[];
}
