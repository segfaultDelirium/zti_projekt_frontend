
export type CountryCode = {
    countryCodeId: number | null,
    isActive: boolean | null,
    countryCode: string | null
}

export type Location = {
    locationId: number;
    isActive: boolean;
    streetAddress: string;
    city: string;
    zipcode: string;
    state: string;
    countryCode: CountryCode;
    activity: Activity;
    companyName: string;
}

export type LocationToSend = {
    locationId: number;
    isActive: boolean | null;
    streetAddress: string | null;
    city: string | null;
    zipcode: string | null;
    state: string | null;
    countryCode: CountryCode | null;
    activity: Activity | null;
    companyName: string | null;
}

export type Activity = {
    activityId: number | null;
    isActive: boolean | null;
    activityName: string | null;
}

export type ModificationResult = {
    success: boolean;
    message: string;
}