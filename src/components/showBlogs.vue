<template>
  <div id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="search blogs" />
      <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | toUppercase }}</h2></router-link>
          <article>{{ blog.content | snippet }}</article>
      </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  components: {},
  data () {
    return {
        blogs: [],
        search: ''
    }
  },
  methods: {},
  created () {
    this.$http
    .get('https://vue-ninja-playlist.firebaseio.com/posts.json')
    .then(data => {
      return data.json();
    }).then(data => {
      var blogsArray = [];

      for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key])
      }

      this.blogs = blogsArray
    });
  },
  computed: {},
  filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
  },
  directives: {
      rainbow: {
        bind(el, binding, vnode) {
          el.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
      }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
