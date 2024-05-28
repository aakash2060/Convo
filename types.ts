export type userType = {
    id: Number,
    profileImage?: string,
    username?: string,
    name?: string,
    bio?: string,
    audio?: string,
    convos?: Array<convoType>,
    // blockedUsers: Array<blockedUsersType>,
    // privateCircle: Array<privateCircleType>,
    dateCreated?: string,
    lastUpdated?: string
}

export type convoType = {
    id?: Number,
    user?: userType,
    convoStarter?: string,
    images?: string[],
    videos?: string[],
    chats?: Array<chatType>,
    activeInRoom: Number,
    location?: string,
    numberOfKeepUps: Number,
    dateCreated?: string,
    lastUpdated?: string
}

export type threadType = {
    id?: String,
    chats?: Array<chatType>,
}

export type chatType = {
    id: String,
    user: userType,
    chat: string,
    thread?: Array<threadType>,
    audio?: string,
    files?: Array<string>,
    dateCreated?: string,
    lastUpdated?: string
}

export type highlightsType = {
    id: Number,
    user: userType,
    image?: string,
    video?: string,
    chats?: Array<chatType>,
    activeInRoom: Number,
    location?: string,
    numberOfKeepUps: Number,
    dateCreated?: string,
    lastUpdated?: string,
    highLightUsers?: Array<userType>
}

export type externalInputBoxType = {
    placeholder: string,
    icon: any,
    inputValue: string,
    onChangeValue: (value: string) => void,
    action: (value: any) => void
}

export type notificationType = {
    id: string,
    to?: userType,
    from?: userType,
    type: string,
    convo?: convoType,
    highlights?: Array<highlightsType>,
    dateCreated?: string,
    topic?: string,
    message?: string,
    special?: boolean,
    listForSpecial?: Array<userType>,
    action?: (value: any) => void
}