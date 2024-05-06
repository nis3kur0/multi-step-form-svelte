<script>
  import Step1 from "./Step1.svelte";
  import Step2 from "./Step2.svelte";
  import Step3 from "./Step3.svelte";
  import Step4 from "./Step4.svelte";
  import Step5 from "./Step5.svelte";

  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let billingType = ''; 
  let currentPage = 0;
  
  function handleBillingTypeUpdate(e) {
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

  const submitForm = () => {
    // Aquí puedes enviar los datos del formulario a Supabase
  };
onMount (() => {
    console.log(currentPage);
  });
</script>

{#if currentPage === 0}
  <Step1 on:next={nextPage} />
{:else if currentPage === 1}
  <Step2 on:next={nextPage} on:back={prevPage} on:billingTypeUpdate={handleBillingTypeUpdate} on:selected={handleSelected} />
{:else if currentPage === 2}
  <Step3 on:next={nextPage} on:back={prevPage}  {billingType} />
{:else if currentPage === 3}
  <Step4 on:back={prevPage} on:next={nextPage} on:billingTypeUpdate={handleBillingTypeUpdate}  />
  {:else if currentPage === 4}
  <Step5 />
{/if}
