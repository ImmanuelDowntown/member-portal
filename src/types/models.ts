export type Announcement = {
  id: string
  title: string
  body?: string
  createdAt?: number // millis
}

export type Group = {
  id: string
  name: string
  description?: string
  unread?: number
}

export type Membership = {
  groupId: string
  role?: 'admin' | 'member'
  unread?: number
}

export type EventItem = {
  id: string
  title: string
  startAt?: number // millis
  location?: string
}
