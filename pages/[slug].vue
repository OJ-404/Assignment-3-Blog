<template>
  <div class="home">
    <h1 class="headline center">{{ blog.title }}</h1>
    <p class="descrip"> {{ blog.description }}</p>
    <div class="sections center">
      <div class="group center">
        <p class="paragraph" style="white-space: pre-line"> {{ formattedBody }}</p>
      </div>

      <NuxtLink to="/" class="back"> back </NuxtLink>
    </div>
  </div>
</template>

<script>
import { singleBlogQuery } from '../graphql/queries';

  export default{
    
    data() {
      return {
        blog: {}
      }
    },
    apollo: {
      blog: {
        prefetch: true,
        query: singleBlogQuery,
        variables (){
            return{
                documentId: this.$route.query.documentId
            }
        }
      }
    },

    computed: {
      formattedBody() {
        if (!this.blog.body) return ''

        return this.blog.body
          .map(block => {
            return block.children
              ?.map(child => child.text)
              .join('')
          })
          .join('\n\n')
      }
  }
  }
</script>

<style scoped>
.descrip{
  font-size: x-large;
}

p{
  padding-left: 10px;
}

.paragraph{
   background-color: black;
   padding-top: 30px;
   width: 60%;
   border-radius: 5px;
}

.back{
  background-color: white;
  padding: 5px;
  border-radius: 8px;
  text-decoration: none;
  color: black;
}
</style>