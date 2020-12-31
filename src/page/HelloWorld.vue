<template>
  <div class="hello">
    <img style="width:250px;height:250px;margin-top:5%;" src="../assets/logo.jpg">
    <h1>{{ msg }}</h1>
    <h2>Come to See My Nonsense</h2>
    <ul>
      <li>
        <router-link to="./account">A Simple Blog</router-link>
        
      </li>
      <li>
        <a
          href=""
          target=""
        >
          To Be Developed
        </a>
      </li>
      
    </ul>
    <h2>Jion Me</h2>
    <ul>
      <li>
        <a
          href=""
          target=""
        >
          Apply for The Qualification
        </a>
      </li>
      <li>
        <a
          href=""
          target=""
        >
          Jion Now
        </a>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'A Salted Fish is Talking Nonsense here.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: white;
  width:100%;
  height:100%;
}
h1, h2 {
  font-weight: normal;
  padding: 2%;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
