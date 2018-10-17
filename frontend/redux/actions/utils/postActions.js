export function posting(type, body) {
  return {
    type,
    body,
  }
}

export function postSuccess(type, status) {
  return {
    type,
    status,
  }
}

export function postFailure(type, status, errorMsg) {
  return {
    type,
    status,
    errorMsg,
  }
}