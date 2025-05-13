export const getFullWebsiteUrl = (): string => {
  const { host, pathname } = window.location
  const baseUrl = `https://${host}`
  return `${baseUrl}${pathname}`
}

export const getWebsiteBaseUrl = (): string => {
  const { host } = window.location
  return `https://${host}/`
}
