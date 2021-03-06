
import { Document } from 'mongoose'

export interface IPost extends Document {
  _id: string,
  firstName: string,
  lastName: string,
  uid: string,
  avatar: string,
  createdAt: string,
  updatedAt: string
}
