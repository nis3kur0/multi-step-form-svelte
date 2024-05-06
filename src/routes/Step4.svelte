<script>
  import { createEventDispatcher, onMount } from "svelte";
  

  const dispatch = createEventDispatcher();

  const nextStep = () => {
    dispatch("next");
  };

  const prevStep = () => {
    dispatch("back");
  };



  export let billingType ="Monthly";

  export let selectedPlan = '';
  export let selectedPrice = '';


  onMount(() => {
    // Escuchando el evento 'selected' enviado desde el componente 2
    const unsubscribe = dispatch('selected', (event) => {
      // Accediendo a los detalles del evento para obtener plan y precio
      selectedPlan = event.detail.plan;
      selectedPrice = event.detail.price;
    });

    // Asegurándose de desuscribirse del evento al desmontar el componente
    return unsubscribe;

  });

  console.log(selectedPlan);

</script>

<main>
  <div class="container">
    <section class="form-container">
      <h1 class="info">Finishing Up</h1>
      <p>Double check everything looks OK before confirming.</p>

      <div class="sumary">

        <div class="time">
         {selectedPlan} {selectedPrice} ({billingType})
        </div>

        <div class="adds">
          <p> add onn </p>
        </div>
        

      </div>
      <div class="total"> 
        <p> Total </p>
        <p> Precio total </p>
      </div>



 

      <div class="btn-group">
        <button on:click={prevStep}>Go back</button>
        <button class="next" on:click={nextStep}> Confirm </button>
      </div>
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
          <div class="circle" id="cuatro">4</div>
          <p>Step 4 <br />SUMMARY</p>
        </div>
      </div>
    </section>
  </div>
</main>

<style>
  
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
  /* formulario */
.form-container {
  display: flex;
    flex-direction: column;
    padding: 25px;
    width: 55%;
    height: 100%;
}
.sumary{ 
  padding: 20px;
    width: 100%;
    height: 100%;
  background-color: var(--cool-gray);
  border-radius: 10px;


}

.total {

  display: flex;
  justify-content: space-between;
}

.btn-group {
  display: flex;
  justify-content: space-between;
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
    justify-content: space-between;
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

  #cuatro {
    background-color: var(--light-gray);
    color: black;
  }
</style>
