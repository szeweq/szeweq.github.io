<script setup lang="ts">
import { Repo } from '~/typings/repo'

const { repo } = defineProps<{repo: Repo}>()
const createdDur = useTimeAgo(repo.created_at)
const updatedDur = useTimeAgo(repo.updated_at)
</script>
<template>
  <li class="card sheet-1 my-2 p-2">
    <div class="flex justify-between">
      <a class="card-title" :href="repo.html_url">{{ repo.name }}</a>
      <div>
        <span class="badge badge-md badge-outline">{{ repo.stargazers_count }} ⭐</span>
      </div>
    </div>
    <div>
      <p v-text="repo.description" />
      <p>Language: {{ repo.language }}</p>
      <p>License: {{ repo.license?.name ?? "None" }}</p>
    </div>
    <div class="mt-2 justify-between items-center card-actions">
      <div class="text-xs">
        <span>Created <time :datetime="repo.created_at">{{ createdDur }}</time></span>
        <span>&nbsp;&CenterDot;&nbsp;</span>
        <span>Updated <time :datetime="repo.updated_at">{{ updatedDur }}</time></span>
      </div>
      <a class="btn btn-sm tint-teal" :href="repo.html_url" target="_blank">Open repo</a>
    </div>
  </li>
</template>