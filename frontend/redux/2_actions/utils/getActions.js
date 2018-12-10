export function getting(type, body) {
  return {
    type,
    body,
  }
}

export function getSuccess(type, status, data) {
  return {
    type,
    status,
    data,
  }
}

export function getFailure(type, status, errorMsg) {
  return {
    type,
    status,
    errorMsg,
  }
}
