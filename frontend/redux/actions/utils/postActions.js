export function posting(type, body) {
  return {
    type,
    body,
  }
}

export function postSuccess(type, status, data) {
  return {
    type,
    status,
    data,
  }
}

export function postFailure(type, status, errorMsg) {
  return {
    type,
    status,
    errorMsg,
  }
}
