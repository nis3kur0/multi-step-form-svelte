import { writable } from 'svelte/store';

export const step1Data = writable({
  
  name: '',
  email: '',
  phone: '',
});

export const step2Data = writable({
 
  billingType: 'Monthly',
  selectedPlan: '',
  selectedPrice: '',
});

export const step3Data = writable({
    selectedAddons: [],
    
});


