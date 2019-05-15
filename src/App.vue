<template>
  <div id="app">
    <div id="header-nav" class="nav-bars">
      <ul class="nav">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/words">Words</router-link>
        </li>
        <li>
          <router-link :to="latestWord">{{ latestWord }}</router-link>
        </li>
        <li>
          <router-link to="/search">Search</router-link>
        </li>
        <li>
          <router-link to="/demo-1">DemoOne</router-link>
        </li>
        <li>
          <router-link to="/demo-2">DemoTwo</router-link>
        </li>
        <li>
          <router-link to="/demo-3">DemoThree</router-link>
        </li>
        <li>
          <router-link to="/demo-4">DemoFour</router-link>
        </li>
        <li>
          <router-link to="/demo-5">DemoFive</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div id="footer-nav" class="nav-bars">
            My Dictionary 2019 - {{ wordCount }} words has been added.
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      showWhich: 'DemoOne',
      wordCount: 0,
      latestWord: 'Latest_Word'
    }
  },
  mounted () {
      let words = this.$store.state.words
      this.wordCount = words.length
      let x = words.length
      this.latestWord = words[x - 1]    
    },
  computed: {        
    words () {
        return this.$store.state.words
    }      
}
}
</script>

<style lang='scss'>
 body {
        overflow: scroll;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        .nav-bars{
            background: cornflowerblue;
            position: fixed;
            width: 100%;
            padding: 10px;
            color: white;           

            a {
                color: white;
                text-decoration: none;
            }
        }

        #header-nav {
            top: 0;
            left: 0;           
        }

        #footer-nav {
            bottom: 0;
            left: 0;
        }
    }

ul.nav > li {
  display: inline;
  padding-left: 10px;
}
ul.nav > li::before {
  content: "\2630";
  padding-right: 5px;
}
</style>
