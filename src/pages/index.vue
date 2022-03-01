<script lang="ts" setup>
type License = {
  name: string
}
type Repo = {
  id: number
  name: string
  stargazers_count: number
  watchers_count: number
  html_url: string
  language: string
  license: License
}

const { statusCode, isFetching, data: repos } = useFetch("https://api.github.com/users/szeweq/repos").json<Repo[]>()

</script>
<template>
  <main class="w-full">
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="statusCode === 200" class="m-2">
      <h1 class="text-3xl mb-2 font-bold">My repositories</h1>
      <ul>
        <li v-for="repo in repos" :key="repo.id" class="card sheet-1 my-2 p-2">
            <div class="flex justify-between">
              <a class="card-title" :href="repo.html_url">{{ repo.name }}</a>
              <div>
                <span class="badge badge-md badge-outline">{{ repo.stargazers_count }} ⭐</span>
              </div>
            </div>
            <div>
              <p>Language: {{ repo.language }}</p>
              <p>License: {{ repo.license?.name ?? "None" }}</p>
            </div>
            <div class="mt-2 justify-end card-actions">
              <a class="btn btn-sm tint-teal" :href="repo.html_url" target="_blank">Open repo</a>
            </div>
        </li>
      </ul>
    </div>
  </main>
</template>