<template>
  <div class="home">
    <h1 class="headline center">{{ blog.title }}</h1>
    <p class="center"> {{ blog.description }}</p>
    <div class="sections center">
      <div class="group center">
        <p style="white-space: pre-line"> {{ formattedBody }}</p>
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