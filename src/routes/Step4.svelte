<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { step1Data, step2Data, step3Data } from './FormStore.js';
  import { supabase } from "$lib/supabaseClient";

  async function sendData() {
  try {
    const tableName = 'User'; 

    const FormData = {
      ...$step1Data,
      ...$step2Data,
      selectedAddons: JSON.stringify($step3Data.selectedAddons), 
    };

    const { error } = await supabase.from(tableName).insert(FormData);
    if (error) throw error;
    console.log('Datos enviados correctamente a Supabase!');
  } catch (error) {
    console.error('Error al enviar datos a Supabase:', error);
  }
}

  let selectedPlan = '';
  let selectedPrice = '';
  let billingType = '';
  let selectedAddons = [];
  
  onMount(() => {
    const unsubscribeStep2 = step2Data.subscribe(data => {
      selectedPlan = data.selectedPlan;
      selectedPrice = data.selectedPrice;
      billingType = data.billingType;
    });

    const unsubscribeStep3 = step3Data.subscribe(data => {
      selectedAddons = data;
    });


    return () => {
      unsubscribeStep2();
      unsubscribeStep3();
    };
  });

  

  const dispatch = createEventDispatcher();

  const nextStep = () => {
    dispatch("next");
  };

  const prevStep = () => {
    dispatch("back");
  };

  
</script>

<main>
  <div class="container">
    <section class="form-container"> 
      <div> 
      <h1 class="info">Finishing Up</h1>
      <p>Double check everything looks OK before confirming.</p>
    </div>
      <div class="sumary">

        <div class="data">
         <div class="selectedPlan"> {selectedPlan} ({billingType})</div> <div class="selectedPrice"> {selectedPrice} </div> 
        </div>

        <div class="adds-container">
          <p>Add-ons:</p>
          {#each selectedAddons as addon}
          <div class="adds"> 
            <p>{addon.Title}:</p> <p> {addon.price}</p></div>
          {/each}
        </div>
      </div>
        

      <div class="total"> 
        <p> Total </p>
        <p>  </p>
      </div>
      <div class="btn-group">
        
        <button on:click={prevStep} class="back">Go back</button>
        <button class="next" on:click={sendData} on:click={nextStep} > Confirm </button>
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
    justify-content: space-between;
    padding: 25px;
    width: 55%;
    height: 100%;
}
.sumary{ 
  padding: 20px;
    width: 90%;
  background-color: hsl(217, 100%, 97%);
  border-radius: 10px;


}

.selectedPlan {
  color: var(--marine-blue);
  font-weight: 700;
}

.data {

  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--marine-blue);
}
.adds-container {
  justify-content: space-between;
    align-items: center;

}

.adds {
  display: flex;
  justify-content: space-between;
}
.total {

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

  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  .back {
    background-color: white;
    border:1px solid gray;
    font-family: "ubuntu", sans-serif;
    color: black;
    margin: 0px;
    padding: 0px;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }

  
  #cuatro {
    background-color: var(--light-gray);
    color: black;
  }
</style>
