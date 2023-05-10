
export type CountryCode = {
    countryCodeId: number,
    isActive: boolean,
    countryCode: string
}

export type Location = {
    locationId: number;
    isActive: boolean;
    streetAddress: string;
    city: string;
    zipcode: string;
    state: string;
    countryCode: string;
    activityName: string;
    companyName: string;
  }