<script setup lang="ts">
import { data as posts } from './blog.data'
</script>

<template>
  <h1>All Blog Posts</h1>
  <ul>
    <li v-for="post of posts">
      {{post.date.string}} <a :href="post.url">{{ post.title }}</a>
    </li>
  </ul>
</template>