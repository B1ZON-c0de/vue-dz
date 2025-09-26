import { ref } from 'vue';
import route from '../routes/route';

if (!localStorage.getItem('isLogged')) {
  localStorage.setItem('isLogged', 'true');
}

export const isLoggedIn = ref(
  JSON.parse(localStorage.getItem('isLogged') || 'false')
);

export function login() {
  isLoggedIn.value = !isLoggedIn.value;
  localStorage.setItem('isLogged', 'true');
  route.push('/');
}

export function logout() {
  isLoggedIn.value = !isLoggedIn.value;
  localStorage.setItem('isLogged', 'false');
  route.push('/login');
}
