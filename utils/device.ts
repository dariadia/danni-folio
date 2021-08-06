import { UserAgent } from 'next-useragent'

export const isDeviceDesktop = (userAgent: UserAgent): boolean =>
  userAgent.isDesktop
