export interface EventDto {
    id?: string
    text: string
    lineup: Map<Date, string>
    startDate: Date
    publishDate: Date
    media: ArrayBuffer
}
