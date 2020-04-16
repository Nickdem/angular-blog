export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponce {
  idToken: string
  expiresIn: string
}