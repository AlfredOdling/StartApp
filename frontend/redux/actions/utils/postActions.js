export function posting(type, data) {
  return {
    type,
    data,
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
