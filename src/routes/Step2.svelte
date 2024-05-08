<script>
  import { step2Data } from './FormStore.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let billingType = 'Monthly';
  let selectedCard = null;
  let checkboxChecked = false;
  let selectedPlan = '';
  let selectedPrice = '';

  function selectCard(e) {
    const clickedCard = e.currentTarget;

    const checkboxChecked = document.getElementById('checkbox').checked;

    const planText = e.currentTarget.querySelector('p').innerText;

    let priceText;

    if (checkboxChecked) {
        priceText = e.currentTarget.querySelector('span.price-yearly').innerText;
    } else {
        priceText = e.currentTarget.querySelector('span.price').innerText;
    }

    if (clickedCard.classList.contains("selected")) return;

    if (selectedCard) {
      selectedCard.classList.remove("selected");
    }

    clickedCard.classList.add("selected");
    selectedCard = clickedCard;
    selectedPlan = planText;
    selectedPrice = priceText;

    dispatch('selected', {
      plan: planText,
      price: priceText
    });
  }

  function toggleCheckbox() {
    checkboxChecked = !checkboxChecked;
    updatePrices();
  }

  function updatePrices() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const priceElement = card.querySelector(".price");
      const priceYearlyElement = card.querySelector(".price-yearly");
      const free = card.querySelector(".two-months-free");
      const monthlySpan = document.getElementById("mont");
      const yearlySpan = document.getElementById("year");

      if (checkboxChecked) {
        billingType = "Yearly";
        priceElement.style.display = "none";
        priceYearlyElement.style.display = "inline-block";
        free.style.display = "inline-block";
        yearlySpan.style.color = "var(--marine-blue)";
        monthlySpan.style.color = "";
      } else {
        billingType = "Monthly";
        priceElement.style.display = "inline-block";
        priceYearlyElement.style.display = "none";
        free.style.display = "none";
        monthlySpan.style.color = "var(--marine-blue)";
        yearlySpan.style.color = "";
      }
    });

    dispatch("billingTypeUpdate", billingType);
  }

  const nextStep = () => {
    step2Data.set({ billingType, selectedPlan, selectedPrice }); 
    dispatch("next");
  };

  const prevStep = () => {
    dispatch("back");
  };

  

 
</script>

<main>
  <div class="container">
    <section class="form-container">
      <div class="title">
        <h1 class="info">Select your plan</h1>
        <span>You have the option of yearly or monthly billing.</span>
      </div>

      <div class="plan-data">
        <div class="plans">
          <div
            class="card {selectedCard === 1 ? 'selected' : ''}"
            on:click={selectCard}
            data-id="1"
          >
            <div class="img"><img src="./icon-arcade.svg" alt="arcade" /></div>
            <div class="text">
              <p class="plan">Arcade</p>
              <span class="price">$9/mo</span>
              <span class="price-yearly" style="display: none;">$90/yr</span>
              <span class="two-months-free" style="display: none;"
                >2 months free</span
              >
             </div>
          </div>
          <div
            class="card {selectedCard === 2 ? 'selected' : ''}"
            on:click={selectCard}
            data-id="2"
          >
            <div class="img">
              <img src="./icon-advanced.svg" alt="advanced" />
            </div>
            <div class="text">
              <p class="plan">Advanced</p>
              <span class="price">$12/mo</span>
              <span class="price-yearly" style="display: none;">$120/yr</span>
              <span class="two-months-free" style="display: none;">
                2 months free</span
              >
            </div>
          </div>
          <div
            class="card {selectedCard === 3 ? 'selected' : ''}"
            on:click={selectCard}
            data-id="3"
          >
            <div class="img"><img src="./icon-pro.svg" alt="pro" /></div>
            <div class="text">
              <p class="plan">Pro</p>
              <span class="price">$15/mo</span>
              <span class="price-yearly" style="display: none;">$150/yr</span>
              <span class="two-months-free" style="display: none;"
                >2 months free</span
              >
            </div>
          </div>
        </div>

        <div class="checkbox-style checkbox-wrapper-2">
          <span id="mont">Monthly</span>
          <input
            name="checkbox"
            type="checkbox"
            class="choose ikxBAC"
            id ="checkbox"
            on:change={toggleCheckbox}
          />
          <span id="year">Yearly</span>
        </div>
      </div>
      <div class="btn-group">
        <button on:click={prevStep} class="back">Go back</button>
        <button class="next" on:click={nextStep}>Next Step</button>
      </div>
    </section>

    <section class="steps-container">
      <div class="scontainer">
        <div class="step" id="one">
          <div class="circle">1</div>
          <p>Step 1 <br /> YOUR INFO</p>
        </div>
        <div class="step" id="two">
          <div class="circle" id="dos">2</div>
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

      <style>
      </style>
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
    align-content: center;
    justify-content: space-between;
    border: 1.5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    width: 800px;
    height: 600px;
    padding: 10px;
  }

  h1 {
    color: var(--marine-blue);
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 25px;
    width: 55%;
    height: 100%;
  }
  
  .plan-data {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .plans {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40%;
    width: 100%;
  }

  .plans p {
    color: var(--marine-blue);
  }

  .card.selected {
    background-color: var(--magnolia);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .card {
    width: 60%;
    height: 100%;
    border: solid hsl(231, 11%, 63%) 1px;
    border-radius: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }

  .card img {
    width: 25px;
    height: auto;
  }

  .card:hover {
    border-color: #001352; 
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  .plan {
    color: var(--marine-blue);
    font-weight: 700;
  }

  .two-months-free {
    color: var(--marine-blue);
    font-weight: 700;
  }

  #year {
    font-weight: 700;
  }

  #mont {
    font-weight: 700;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
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
    border: 1px solid gray;
    font-family: "ubuntu", sans-serif;
    color: black;
    margin: 0px;
    padding: 0px;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }

 

  /* checkboxxddd  */

  .checkbox-style {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: hsl(229, 24%, 87%);
    display: flex;
    gap: 25px;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }

  .checkbox-wrapper-2 .ikxBAC {
    appearance: none;
    background-color: #dfe1e4;
    border-radius: 72px;
    border-style: none;
    flex-shrink: 0;
    height: 20px;
    margin: 0;
    position: relative;
    width: 30px;
  }

  .checkbox-wrapper-2 .ikxBAC::before {
    bottom: -6px;
    content: "";
    left: -6px;
    position: absolute;
    right: -6px;
    top: -6px;
  }

  .checkbox-wrapper-2 .ikxBAC,
  .checkbox-wrapper-2 .ikxBAC::after {
    transition: all 100ms ease-out;
  }

  .checkbox-wrapper-2 .ikxBAC::after {
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 14px;
  }

  .checkbox-wrapper-2 input[type="checkbox"] {
    cursor: default;
  }

  .checkbox-wrapper-2 .ikxBAC:hover {
    background-color: #c9cbcd;
    transition-duration: 0s;
  }

  .checkbox-wrapper-2 .ikxBAC:checked {
    background-color: var(--marine-blue);
  }

  .checkbox-wrapper-2 .ikxBAC:checked::after {
    background-color: #fff;
    left: 13px;
  }

  .checkbox-wrapper-2 :focus:not(.focus-visible) {
    outline: 0;
  }

  .checkbox-wrapper-2 .ikxBAC:checked:hover {
    background-color: #535db3;
  }

  

  #dos {
    background-color: var(--light-gray);
    color: black;
  }
</style>
