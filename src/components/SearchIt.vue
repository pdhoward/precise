<template>
    <div class=app3>
  <form>
    <p>
      <label for="search">Search</label>
      <input type="search" v-model="search">
    </p>
    <p>
      <label for="category">Category</label>
      <select v-model="category">
        <option></option>
        <option>Food</option>
        <option>Games</option>
      </select>
    </p>
    <button @click.prevent="searchProducts" :disabled="searchBtnDisabled">Search</button>
  </form>

    <div v-html="status"></div>
    <ul v-if="results">
      <li v-for="result in results">{{result.name}}</li>
    </ul>
</div>
</template>

<script>
   const productAPI = 'https://wt-c2bde7d7dfc8623f121b0eb5a7102930-0.sandbox.auth0-extend.com/productSearch';

export default {
  name: "SearchIt",
  data() {
    return {
      search: '',
      category: '',
      status: '',
      results: null,
      searchBtnDisabled: false
    }
  },
  methods: {
    searchProducts:function() {
      this.results = null;
      this.status = '';
      
      if(this.search === '' && this.category === '') {
        this.status = 'You must enter a term or select a category.';
        return;
      }

      this.searchBtnDisabled = true;
      this.status = 'Searching - please stand by...';
      
      fetch(productAPI, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({name:this.search,category:this.category})
      }).then(res => res.json())
      .then(res => {
        this.status = '';
        this.searchBtnDisabled = false;
        this.results = res.results;
        if(this.results.length === 0) this.status = '<p>Sorry, no results!</p>';
      });
      
    }
  }
}
</script>

<style lang="scss" scoped>
    .app3 {
        margin-top: 150px;

    }
</style>