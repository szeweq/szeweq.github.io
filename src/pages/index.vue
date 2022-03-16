<script lang="ts" setup>
import { Repo } from '~/typings/repo'

const _sortString = (a: string, b: string) => a.localeCompare(b)
const _sortNumber = (a: number, b: number) => a - b
const _sortDate = (a: string, b: string) => new Date(a).getTime() - new Date(b).getTime()

const { statusCode, isFetching, data: repos } = useFetch("https://api.github.com/users/szeweq/repos").json<Repo[]>()
const sortKeys: { [P in keyof Repo]?: string } = {
  name: "Name",
  stargazers_count: "Stars",
  created_at: "Created",
  updated_at: "Updated",
}
const sortedBy = ref<keyof typeof sortKeys>("name")
const [reverse, toggleReverse] = useToggle(false)
const reposSorted = computed(() => {
  if (repos.value === undefined || repos.value === null) return []
  const sortBy = sortedBy.value
  const rev = reverse.value
  switch (sortBy) {
    case "name":
      return repos.value.sort((a, b) => rev ? _sortString(b.name, a.name) : _sortString(a.name, b.name))
    case "stargazers_count":
      return repos.value.sort((a, b) => rev ? _sortNumber(b.stargazers_count, a.stargazers_count) : _sortNumber(a.stargazers_count, b.stargazers_count))
    case "created_at":
      return repos.value.sort((a, b) => rev ? _sortDate(b.created_at, a.created_at) : _sortDate(a.created_at, b.created_at))
    case "updated_at":
      return repos.value.sort((a, b) => rev ? _sortDate(b.updated_at, a.updated_at) : _sortDate(a.updated_at, b.updated_at))
    default:
      return repos.value
  }
})
const reverseSymbol = computed(() => reverse.value ? "▼" : "▲")

</script>
<template>
  <main class="w-full p-2 md:p-4" aria-live="assertive" aria-atomic="true">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-3xl mb-2 font-bold">My repositories</h1>
      <div>
        <div class="input-group input-group-sm">
          <select class="select select-sm" v-model="sortedBy" title="Sort by">
            <option v-for="(s, key) in sortKeys" :value="key" v-text="s" />
          </select>
          <button class="btn btn-sm" @click="toggleReverse()">{{ reverseSymbol }}</button>
        </div>
      </div>
    </div>
    <div v-if="isFetching">Loading...</div>
    <ul v-else-if="statusCode === 200">
      <RepoCard v-for="repo in reposSorted" :key="repo.id" :repo="repo" />
    </ul>
  </main>
</template>