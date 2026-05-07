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

<style>
    body{
        background-color: #000033;
        color:aliceblue;
        
    }

    h1{
        padding-left: 20px;
    }

    p{
        padding-bottom: 35px;
        padding-left: 90px;
        padding-right: 90px;
    }

    h3{
        padding-top: 35px;
    }

    .section{
        width: 70%;
        background-color: black;
        text-align: center;
        border-radius: 50%;
        box-shadow: 10px 10px grey;
    }

    .sections{
        padding-left: 23%;
    }

    .subtitle{
        display: flex;
        padding-left: 80% ;
       
    }

    .entry{
        font-size: 120%;
    }
</style>