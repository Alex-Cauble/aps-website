import { ContactNumber } from './contact-number.type';
import { DetailContact } from './detail-contacts.type';

export interface BuildingContacts {
  title: string;
  principal: string | undefined;
  contacts: ContactNumber[];
  detailContacts: DetailContact[];
}
