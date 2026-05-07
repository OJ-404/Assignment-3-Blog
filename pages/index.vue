<template>
  <div class="home">
    <h1 class="headline center">My Blog</h1>
    <div class="sections">
      <div class="group">
        <div v-for="blog in blogs" v-bind:key="blog.documentId" class="section">
          <div class="entry">
           <NuxtLink :to="{ path: '/' + blog.slug, query: { documentId: blog.documentId } }">
              <h3>
                {{ blog.title }}
                <span class="subtitle"> {{ blog.date }}</span>
              </h3>
            </NuxtLink>

            <p> {{ blog.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { allBlogsQuery } from '../graphql/queries';

  export default{
    data() {
      return {
        blogs: []
      }
    },
    apollo: {
      blogs: {
        prefetch: true,
        query: allBlogsQuery
      }
    }
  }
</script>