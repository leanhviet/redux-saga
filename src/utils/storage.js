export const setStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const getStorage = key => {
  return JSON.parse(localStorage.getItem(key))
}

export const removeStorage = key => {
  localStorage.removeItem(key)
}
