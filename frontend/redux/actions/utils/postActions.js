export function posting(type, body) {
  return {
    type,
    body,
  }
}

export function postSuccess(type) {
  return {
    type
  }
}

export function postFailure(type, errorMsg) {
  return {
    type,
    errorMsg,
  }
}