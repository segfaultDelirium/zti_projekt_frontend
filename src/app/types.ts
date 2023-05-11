
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
    timestamp: string;
}

export const DEFAULT_LOCATION: Location = {
    locationId: 0,
    isActive: true,
    streetAddress: '',
    city: '',
    zipcode: '',
    state: '',
    countryCode: {
        countryCodeId: 0,
        countryCode: '',
        isActive: true
    },
    activity: {
        activityId: 0,
        activityName: '',
        isActive: true
    },
    companyName: '',
    timestamp: '2023-01-15'
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

export interface ModificationResult {
    success: boolean;
    message: string;
}

export interface CreationResult extends ModificationResult {
    createdRecordId: number
}

export type LocationActivitiesCountryCodes = {
    activities: Activity[],
    countryCodes: CountryCode[],
    location: Location,
    currentlySavedLocation: Readonly<Location>
}
