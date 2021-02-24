export interface ContactNumber {
  name: string;
  number: string;
  coordinator?: string;
}

export interface BuildingContacts {
  title: string;
  principal: string | undefined;
  contacts: ContactNumber[];
}
