export const getCurrentWebsiteUrl = (): string => {
  const { host, pathname } = window.location
  const baseUrl = `https://${host}`
  return `${baseUrl}${pathname}`
}
