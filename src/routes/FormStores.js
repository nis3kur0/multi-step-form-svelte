// FormStores.js
import { writable } from 'svelte/store';

// Creamos un store para el paso 1 del formulario
export const step1Data = writable({
  // Define aquí las propiedades que quieras almacenar para el paso 1
  // Por ejemplo:
  firstName: '',
  lastName: '',
  email: '',
});

// Creamos un store para el paso 2 del formulario
export const step2Data = writable({
  // Define aquí las propiedades que quieras almacenar para el paso 2
  // Por ejemplo:
  billingType: '',
  selectedPlan: '',
  selectedPrice: '',
});

// Creamos un store para el paso 3 del formulario
export const step3Data = writable({
  // Define aquí las propiedades que quieras almacenar para el paso 3
});

// Creamos un store para el paso 4 del formulario
export const step4Data = writable({
  // Define aquí las propiedades que quieras almacenar para el paso 4
});

// Creamos un store para el paso 5 del formulario
export const step5Data = writable({
  // Define aquí las propiedades que quieras almacenar para el paso 5
});
