<template>
  <div class="col white--text">
    <form @submit.prevent="search">
      <v-text-field class="white--text" color="#fff" label="Serach..."></v-text-field>
    </form>
  </div>
</template>
<script>
export default {
  methods:{
    search(){
      alert('a')
    }
  }
}
</script>