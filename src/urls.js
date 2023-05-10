// const HOSTNAME = 'http://ec2-3-83-250-10.compute-1.amazonaws.com/api'
const HOSTNAME = 'http://localhost:8000/api'

export const ME = `${HOSTNAME}/auth/me`
export const UPLOAD_PROFILE_IMG = `${HOSTNAME}/auth/me/profile_img`
export const PRESIGNED_URL = `${HOSTNAME}/auth/me/presigned_url`

export const LOGIN = `${HOSTNAME}/auth/token/`
export const REFRESH = `${HOSTNAME}/auth/token/refresh`

export const GOOGLE_LOGIN = `${HOSTNAME}/auth/token/google/`