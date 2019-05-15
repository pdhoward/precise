<template>
  <div class='demo-cont'>
    <component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"  
               v-model="formData[field.name]"           
               v-bind="field">
    </component>
    <p>
      Hello {{formData.title}} {{formData.firstName}} {{formData.lastName}}, I hear you are {{formData.age}} years old.
    </p>
    <h1>Experiment</h1>
      <div id="app">
        <button @click="doSomething">Click Me!</button>
        <!-- On click, change text in this span -->
        <span>{{resultText}}</span>
    </div>
    <hr>
    <h1>Another Experiment</h1>
    <form id="myForm">
      <input type="number" v-model.number="first"> + 
      <input type="number" v-model.number="second"> =
      <input type="number" v-model.number="sum"> 
      <button @click.prevent="doSum">Sum</button>
    </form>
    <hr>
    <h1>Experiment 3</h1>
    <div >
      <h1>Github Repos</h1>
      <ul class="app2">
        <li v-for="repo in repos">{{repo.name}}</li>
      </ul>  
    </div>
  </div>
</template>

<script>

// notice we are tied into the formData v4 components, which
// are configured to emit the values entered -- which then bind
// I am also required to use v-model
// v-model is how Vue creates two way data binding between values in the DOM and in JavaScript.

import NumberInput from '../components/v4/NumberInput';
import SelectList from '../components/v4/SelectList';
import TextInput from '../components/v4/TextInput';

export default {
  name: "DemoThree",
  components: { NumberInput, SelectList, TextInput },
  data() {
    return {
      formData: {
        firstName: "Patrick"
      },
      repos: [],
      resultText: "",
      sum: 0,
      first: 0,
      second: 0,    
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
        },
        {
          fieldType: "TextInput",
          placeholder: "First Name",
          label: "First Name",
          name: "firstName"
        },
        {
          fieldType: "TextInput",
          placeholder: "Last Name",
          label: "Last Name",
          name: "lastName"
        },
        {
          fieldType: "NumberInput",
          placeholder: "Age",
          name: "age",
          label: "Age",
          minValue: 0
        }
      ]
    };
  },
   methods: {
        doSomething: function() {
          this.resultText = `Thanks ${this.formData.firstName}`;
        },
        doSum: function() {
          this.sum = this.first + this.second;
        }
      },
   created() {
    fetch('https://api.github.com/repositories')
    .then(res => res.json())
    .then(res => {
      //console.log(res)
      this.repos = res
      //this.repos.forEach(r => console.log(r.name))
    })
  }
};
</script>

<style lang="scss" scoped>
    .demo-cont {
        margin-top: 150px;
        overflow-y: auto; 
        overflow-x: hidden;
    }
    .app2 {
        margin-top: 10px;
        height: 200px;
        width: 600px;
        border: red;
        overflow: auto;         
    }
</style>
