<script>
  import { step1Data } from './FormStore.js';
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  export let name = '';
  export let email = '';
  export let phone = '';

  const NextStep = () => {
    if (name && email && phone) {
      step1Data.set({ name, email, phone }); 
      dispatch('next');
    } else {
      alert('Por favor complete todos los campos antes de continuar');
    }
  };

  
</script>

<main>
  <div class="container">
    <section class="form-container">
      <div class="title"> 
        <h1 class="info">Personal Info</h1>
        <span>Please provide your name, email adress and phone number.</span>
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
      <div class="btn-group"> <button class="next" on:click={NextStep}> Next Step </button> </div>
      
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

  .title {
    display: flex;
    flex-direction: column;
  }

  .title span {
    color: var(--cool-gray);
  }


  .form-container {

    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 25px;
    width: 55%;
    height: 100%;

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

  #uno {
    background-color: var(--light-gray);
    color: black;
  }
</style>
