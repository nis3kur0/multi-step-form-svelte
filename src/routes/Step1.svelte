<script>
  import { step1Data } from './FormStores.js';
  import { createEventDispatcher } from 'svelte';
  import { onDestroy } from 'svelte';
  
  const dispatch = createEventDispatcher();

  // Declarar las variables del primer paso
  export let name = '';
  export let email = '';
  export let phone = '';

  const NextStep = () => {
    if (name && email && phone) {
      step1Data.set({ name, email, phone }); 
      dispatch('next');// Guardar los datos en el store
      dispatch('next'); // Emitir evento 'next'
    } else {
      alert('Por favor complete todos los campos antes de continuar.');
    }
  };

  let step1DataSubscription;
  step1DataSubscription = step1Data.subscribe(value => {
    console.log('Datos del Step 1 guardados en el store:', value);
  });

  // Al salir del componente, cancelar la suscripción al store
  onDestroy(() => {
    step1DataSubscription();
  });
</script>

<main>
  <div class="container">
    <section class="form-container">
      <div class="title"> 
        <h1 class="info">Personal Info</h1>
        <span>Please provide your name, email Adress and Phone Number.</span>
      </div>    
      <label for="name">
        <p>Name</p>
        <input bind:value={name} id="name" placeholder="e.g Stephen King" required />
      </label>
      <label for="email">
        <p>Email</p>
        <input type="email" bind:value={email} id="email" placeholder="stephen@example.com" required />
      </label>
      <label for="phone">
        <p>Phone</p>
        <input type="tel" bind:value={phone} id="phone" placeholder="+58 412 404 4040" required />
      </label>
      <br />
      <button class="next" on:click={NextStep}> Next Step </button>
    </section>

    <section class="steps-container">
      <div class="scontainer">
        <div class="step" id="one">
          <div class="circle" id="uno">1</div>
          <p>Step 1 <br /> YOUR INFO</p>
        </div>
        <div class="step" id="two">
          <div class="circle">2</div>
          <p>
            Step 2<br />
            SELECT PLAN
          </p>
        </div>
        <div class="step" id="three">
          <div class="circle">3</div>
          <p>Step 3<br /> ADD-ONS</p>
        </div>
        <div class="step" id="four">
          <div class="circle">4</div>
          <p>Step 4 <br />SUMMARY</p>
        </div>
      </div>
    </section>
  </div>
</main>


<style>
  :global(:root) {
    /* Colores Primarios */
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);
    --strawberry-red: hsl(354, 84%, 57%);

    /* Colores Neutros */
    --cool-gray: hsl(231, 11%, 63%);
    --light-gray: hsl(229, 24%, 87%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    --white: hsl(0, 0%, 100%);
  }

  :global(body) {
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400; /* Normal */
    font-size: 16px; /* Tamaño de fuente para párrafos */
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 100px;
    margin-bottom: 100px;
    align-items: center;
    justify-content: space-between;
    border: 1.5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    width: 800px;
    height: 600px;
    padding: 10px;
  }

  .title span {
    color: var(--cool-gray);
  }
  /* formulario */

  .form-container {
    display: flex;
    flex-direction: column;
    padding: 25px;
  }
  .next {
    background-color: hsl(213, 96%, 18%);
    border: none;
    font-family: "ubuntu", sans-serif;
    color: white;
    margin: 0px;
    padding: 0px;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }
  

  h1 {
    color: var(--marine-blue);
  }

  form {
    width: 320px;
    height: 430px;
    padding: 1.5em;
  }

  label {
    display: block;
    margin-bottom: 0, 5rem;
    color: var(--marine-blue);
    font-weight: 700;
  }

  input {
    display: block;
    width: 300px;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    text-align: left;
    text-decoration: none;
    margin-right: 10px;
  }

 

  .btn-group {
    display: flex;
    justify-content: right;
  }
  .next {
    padding: 0, 75rem;
    text-align: center;
    background-color: var(--marine-blue);
    color: white;
    border-radius: 0, 25;
    cursor: pointer;
  }

  /* Barra de pasos */

  .steps-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 274px;
    height: 568px;
    background-image: url("bg-sidebar-desktop.svg");
    background-size: cover;
    padding: 15px;
    border-radius: 20px;
  }

  .step {
    display: flex;
    align-items: center;
    color: white;
    text-align: left;
    margin-left: 20px;
    gap: 15px;
  }

  .circle {
    width: 30px; /* Ancho del círculo */
    height: 30px; /* Alto del círculo */
    border-radius: 50%; /* Hace que el div tenga forma circular */
    border: 2px solid white; /* Borde blanco */
    text-align: center;
    align-content: center;
  }

  #uno {
    background-color: var(--light-gray);
    color: black;
  }
</style>
