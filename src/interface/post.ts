
import { Document } from 'mongoose'

interface IPost extends Document {
  _id: string,
  firstName: string,
  lastName: string,
  uid: string,
  createdAt: string,
  updatedAt: string
}
