<template>
  <div>
    <p>
      View with a
      <code>form</code>
    </p>
    <form @submit.prevent="$router.push('/')">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      something: Array(10000000).fill()
    };
  }
};
</script>