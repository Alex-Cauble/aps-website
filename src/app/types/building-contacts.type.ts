import { ContactNumber } from './contact-number.type';

export interface BuildingContacts {
  title: string;
  principal: string | undefined;
  contacts: ContactNumber[];
}
