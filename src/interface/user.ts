
import { Document } from 'mongoose'

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  address: string,
  email: string,
  uid: string,
  avatar: string,
  password: string,
  token: string,
  createdAt: string,
  updatedAt: string,
}

export interface _IUser {
  _id: string
  firstName: string,
  lastName: string,
  address: string,
  email: string,
  uid: string,
  avatar: string,
  createdAt: string,
  updatedAt: string,
}

export interface IEUser {
  Firstname?: string,
  Lastname?: string,
  Address?: string,
  Email?: string,
  Password?: string,
  ConfirmPassword?: string
}


export const DUser:_IUser = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  avatar: '',
  _id: '',
  createdAt: '',
  updatedAt: '',
  uid: ''
}
