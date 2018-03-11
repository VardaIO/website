<template>
  <div class="hello">
   
    <h2 id="links">Links</h2>
    <ul>
      <li>
        <a
          href="https://github.com/VardaIO/varda"
          target="_blank"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="http://www.varda.io"
          target="_blank"
        >
          Varda
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
      msg: 'Varda'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
links {
  margin-top: 20px; 
}
ul {
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  /* color: #42b983; */
  color: #2c3e50;
}
</style>
