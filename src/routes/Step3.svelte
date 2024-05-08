<script>
  import { step3Data } from './FormStore.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

   export let billingType = 'Monthly';

  let selectedAddons = [];


  function changeCheckbox() {
    const checkboxes = document.querySelectorAll('.checkbox-type input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const checkboxType = checkbox.parentElement;
      if (checkbox.checked) {
        checkboxType.style.backgroundColor = 'var(--magnolia)';
        checkboxType.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      } else {
        checkboxType.style.backgroundColor = 'initial';
        checkboxType.style.boxShadow = 'none';
      }
    });
  }
  function nextStep() {
    step3Data.set(selectedAddons); 
    dispatch('next');
  }

  function prevStep() {
    dispatch('back');
  }

  function handleAddonSelection(e) {
    const clickedCheckbox = e.target;
    const addonId = clickedCheckbox.parentElement.id;
    const addonTitle = clickedCheckbox.parentElement.querySelector('h2').innerText;
    const addonPrice = clickedCheckbox.parentElement.querySelector('.price').textContent;
    if (clickedCheckbox.checked) {
      selectedAddons.push({ id: addonId,  price: addonPrice, Title: addonTitle });
      changeCheckbox()
    } else {
      selectedAddons = selectedAddons.filter(addon => addon.id !== addonId);
      changeCheckbox()
    }

  }
</script>

<main>
  <div class="container">
    <section class="form-container">

        <div class="title"> 
            <h1 class="info">Pick Add Onds </h1>
        <span>Help Add Onds to engage your gaming experience</span>

        </div>
        
        {#if billingType === "Monthly"}

        <div class="add-onds">

          <div class="checkbox-type" id="1">
    
            <input type="checkbox"  on:change={handleAddonSelection}/>
            <div class="chetext">
              <h2>Online Service</h2>
              <p>Access to multiplayer Games</p>
            </div>
            <p class="price"> +$1/mo</p>
          </div>
          <div class="checkbox-type" id="2">
            <input type="checkbox"  on:change={handleAddonSelection}/>
            <div class="chetext">
              <h2>Larger Storage</h2>
              <p>Extra TB of Cloud Save sssss</p>
            </div>
            <span class="price"> +$2/mo</span> 
          </div>

          <div class="checkbox-type" id="3">
            <input type="checkbox"  on:change={handleAddonSelection}/>
            <div class="chetext">
              <h2>Customizable Profile</h2>
              <p>Custom Theme in your profile</p>
            </div>
            <p class="price"> +$2/mo</p> 
          </div>
        </div>

      {:else if billingType === 'Yearly'}

      <div class="add-onds">
        <div class="checkbox-type" id="1">
          <input type="checkbox"  on:change={handleAddonSelection}/>
          <div class="chetext">
            <h2>Online Service</h2>
            <p>Access to multiplayer Games</p>
          </div>
          <p class="price"> +$10/yr</p> 
        </div>
        <div class="checkbox-type" id="2">
          <input type="checkbox"  on:change={handleAddonSelection}/>
          <div class="chetext">
            <h2>Larger Storage</h2>
            <p>Extra TB of Cloud Save sssss</p>
          </div>
          <p class="price"> $20/yr</p> 
        </div>
        <div class="checkbox-type" id="3">
          <input type="checkbox"  on:change={handleAddonSelection}/>
          <div class="chetext">
            <h2>Customizable Profile</h2>
            <p>Custom Theme in your profile</p>
          </div>
          <p class="price"> +$20/yr</p> 
        </div>
      </div>
     
      {/if}
      <div class="btn-grup">
        <button on:click={prevStep} class="back">Go back</button>
        <button class="next" on:click={nextStep}> Next Step </button>
      </div>
    </section>

    <section class="steps-container">
      <div class="scontainer">
        <div class="step" id="one">
          <div class="circle">1</div>
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
          <div class="circle" id="tres">3</div>
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

  .add-onds {

    width: 100%;
    height: 100%;
  }

  input {

    margin-right: 15px;
  }

  .checkbox-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 3px var(--light-blue) solid;
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px;
    cursor: pointer;
    
  }
  .checkbox-type div p {
    font-family: "ubuntu", sans-serif;
    color: hsl(231, 11%, 63%);
    font-size: 12px;
  }

  .checkbox-type div h2 {
    font-family: "ubuntu", sans-serif;
    font-size: 14px;
    color: hsl(213, 96%, 18%);
  }

  h1 {
    color: var(--marine-blue);
  }

  .price {
    margin-left: 40%;
    color: var(--purplish-blue);
  }

  .btn-grup {
    display: flex;
    flex-direction: row;
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

  
  #tres {
    background-color: var(--light-gray);
    color: black;
  }
</style>
