<script>
  import Step1 from "./Step1.svelte";
  import Step2 from "./Step2.svelte";
  import Step3 from "./Step3.svelte";
  import Step4 from "./Step4.svelte";
  import Step5 from "./Step5.svelte";


  let billingType = ''; 
  let currentPage = 0;
  
  function BillingTypeUpdate(e) {
    billingType = e.detail;
  }
  let selectedPlan = '';
  let selectedPrice = '';

    function handleSelected(event) {
        selectedPlan = event.detail.plan;
        selectedPrice = event.detail.price;
    }

  const nextPage = () => {
    currentPage += 1;
  };

  const prevPage = () => {
    currentPage -= 1;
  };

 

</script>


{#if currentPage === 0}
  <Step1 on:next={nextPage} />
{:else if currentPage === 1}
  <Step2 on:next={nextPage} on:back={prevPage} on:billingTypeUpdate={BillingTypeUpdate} on:selected={handleSelected} />
{:else if currentPage === 2}
  <Step3 on:next={nextPage} on:back={prevPage}  {billingType} />
{:else if currentPage === 3}
  <Step4 on:back={prevPage} on:next={nextPage} on:billingTypeUpdate={BillingTypeUpdate}  />
  {:else if currentPage === 4}
  <Step5 />
{/if}

<style>
   :global(:root) {
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);
    --strawberry-red: hsl(354, 84%, 57%);

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
    font-weight: 400; 
    font-size: 16px; 
    margin: 0;
    padding: 0;
  }

  :global(.steps-container) {
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

  :global(.step ) {
    display: flex;
    align-items: center;
    color: white;
    text-align: left;
    margin-left: 20px;
    gap: 15px;
  }

  :global(.circle) {
    width: 30px;
    height: 30px; 
    border-radius: 50%; 
    border: 2px solid white; 
    text-align: center;
    align-content: center;
  }
</style>