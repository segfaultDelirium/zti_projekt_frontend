
export type CountryCode = {
    countryCodeId: number | null,
    isActive: boolean | null,
    countryCode: string | null
}

export type Location = {
    locationId: number;
    isActive: boolean | null;
    streetAddress: string | null;
    city: string | null;
    zipcode: string | null;
    state: string | null;
    countryCode: CountryCode;
    activity: Activity;
    companyName: string | null;
}

export type Activity = {
    activityId: number | null;
    isActive: boolean | null;
    activityName: string | null;
}
