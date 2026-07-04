export interface Ifairs {
    fairId: string
    fairName: string
    startDate: number
    endDate: number
    timezoneId: string
    location?: ILocation | null
    numberOfUsersRegistered: number
    numberOfSchoolsRegistered: number
    isCandidateRegistered: boolean
    bannerUrl: string
    showRegisteredUsersToCandidate: boolean
    showRegisteredUsersToSchools: boolean
    showRegisteredSchoolsToCandidate: boolean
    showRegisteredSchoolsToSchools: boolean
    fairStatus: string
    fairStartTime: string
    fairEndTime: string
    type: string
    candidateDescription: string
    schoolDescription: string
}

export interface ILocation {
    addressOne: string
    addressTwo: string
    city: string
    state: string
    country: string
    zip: string
}