<script lang="ts" setup>
type License = {
  name: string
}
type Repo = {
  id: number
  name: string
  description: string
  stargazers_count: number
  watchers_count: number
  html_url: string
  language: string
  license: License
}
type SortFn<T> = (a: T, b: T) => number
const _sortString = (a: string, b: string) => a.localeCompare(b)
const _sortNumber = (a: number, b: number) => a - b

const { statusCode, isFetching, data: repos } = useFetch("https://api.github.com/users/szeweq/repos").json<Repo[]>()
const sortKeys: { [P in keyof Repo]?: string } = {
  name: "Name",
  stargazers_count: "Stars",
}
const sortedBy = ref<keyof typeof sortKeys>("name")
const reverse = ref(false)
const reposSorted = computed(() => {
  const sortBy = sortedBy.value
  const rev = reverse.value
  if (repos.value === undefined || repos.value === null) return []
  switch (sortBy) {
    case "name":
      return repos.value.sort((a, b) => rev ? _sortString(b.name, a.name) : _sortString(a.name, b.name))
    case "stargazers_count":
      return repos.value.sort((a, b) => rev ? _sortNumber(b.stargazers_count, a.stargazers_count) : _sortNumber(a.stargazers_count, b.stargazers_count))
    default:
      return repos.value
  }
})
const reverseSymbol = computed(() => reverse.value ? "▼" : "▲")

</script>
<template>
  <main class="w-full" aria-live="assertive" aria-atomic="true">
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="statusCode === 200" class="m-2">
      <div class="flex flex-row justify-between items-center">
        <h1 class="text-3xl mb-2 font-bold">My repositories</h1>
        <div>
          <div class="input-group input-group-sm">
            <select class="select select-sm" v-model="sortedBy" title="Sort by">
              <option v-for="(s, key) in sortKeys" :value="key" v-text="s" />
            </select>
            <button class="btn btn-sm" @click="reverse = !reverse">{{ reverseSymbol }}</button>
          </div>
        </div>
      </div>
      
      <ul>
        <li v-for="repo in reposSorted" :key="repo.id" class="card sheet-1 my-2 p-2">
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
            <div class="mt-2 justify-end card-actions">
              <a class="btn btn-sm tint-teal" :href="repo.html_url" target="_blank">Open repo</a>
            </div>
        </li>
      </ul>
    </div>
  </main>
</template>