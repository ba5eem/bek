export function loginUser(user) {
  console.log(user);
  return {
    type: 'LOGIN_USER',
    user
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}