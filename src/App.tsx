import { Accessor, Component, createResource, createSignal, For, Show } from 'solid-js'
import { format as timeAgo } from 'timeago.js'

type Repo = {
  id: number
  name: string
  description: string
  stargazers_count: number
  watchers_count: number
  html_url: string
  language: string
  license: {name: string}
  created_at: string
  updated_at: string
}
const sortKeys: { [P in keyof Repo]?: string } = {
  name: "Name",
  stargazers_count: "Stars",
  created_at: "Created",
  updated_at: "Updated",
}
type SortKey = keyof typeof sortKeys
const getRepos = async (): Promise<Repo[]> => (await fetch(`https://api.github.com/users/szeweq/repos`)).json()
const _sortDate = (a: string, b: string) => (+new Date(a)) - (+new Date(b))

const RepoCard: Component<{repo: Repo}> = ({repo}) => {
  const createdDur = () => timeAgo(repo.created_at)
  const updatedDur = () => timeAgo(repo.updated_at)

  return (
    <div class="rounded-xl sheet-1 p-2">
      <div class="flex justify-between">
        <a class="text-xl font-semibold" href={repo.html_url}>{ repo.name }</a>
        <div>
          <span class="border-2 py-1 px-2 text-xs rounded-full border-gray-800 dark:border-gray-100">{ repo.stargazers_count } ⭐</span>
        </div>
      </div>
      <div>
        <p class="py-1">{ repo.description }</p>
        <p>Language: { repo.language }</p>
        <p>License: { repo.license?.name ?? "None" }</p>
      </div>
      <div class="flex mt-2 justify-between items-baseline">
        <div class="text-xs">
          <span>Created <time datetime={repo.created_at}>{ createdDur }</time></span>
          <span>&nbsp;&CenterDot;&nbsp;</span>
          <span>Updated <time datetime={repo.updated_at}>{ updatedDur }</time></span>
        </div>
        <a class="btn btn-sm tinted" href={repo.html_url} target="_blank">Open repo</a>
      </div>
    </div>
  )
}

const RepoList: Component<{sortBy: Accessor<SortKey>, reverse: Accessor<boolean>}> = ({reverse, sortBy}) => {
  const [repos] = createResource(getRepos)
  const reposSorted = () => {
    const r = repos()
    if (r === undefined || r === null || r.length == 0) return []
    const rv = reverse()
    switch (sortBy()) {
      case "name":
        return r.sort((a, b) => rv ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name))
      case "stargazers_count":
        return r.sort((a, b) => rv ? b.stargazers_count - a.stargazers_count : a.stargazers_count - b.stargazers_count)
      case "created_at":
        return r.sort((a, b) => rv ? _sortDate(b.created_at, a.created_at) : _sortDate(a.created_at, b.created_at))
      case "updated_at":
        return r.sort((a, b) => rv ? _sortDate(b.updated_at, a.updated_at) : _sortDate(a.updated_at, b.updated_at))
      default:
        return r
    }
  }

  return (
    <div class="flex flex-col gap-2 justify-center items-stretch">
      <Show when={repos.loading}>
        <div class="text-center">Loading...</div>
      </Show>
      <Show when={!repos.error} fallback={<div class="text-center">Error: {repos.error}</div>}>
        <For each={reposSorted()}>{(item) => <RepoCard repo={item} />}</For>
      </Show>
    </div>
  )
}

const Page: Component = () => {
  const [sortBy, setSortBy] = createSignal<SortKey>("name")
  const [reverse, setReverse] = createSignal<boolean>(false)
  const reverseSymbol = () => reverse() ? "▼" : "▲"

  return (
    <main class="w-full p-2 mx-auto md:w-[80%] lg:w-[70%] xl:w-[60%]" aria-live="assertive" aria-atomic="true">
      <div class="flex flex-row justify-between items-center py-1 mb-2">
        <h1 class="text-2xl font-bold">My repositories</h1>
        <div class="flex">
          <select class="select h-8 border-2 stroked rounded-l" title="Sort by" onInput={(e) => setSortBy(e.currentTarget.value as SortKey)}>
            <For each={Object.entries(sortKeys)}>{([key, value]) => (<option value={key}>{value}</option>)}</For>
          </select>
          <button class="btn h-8 tinted !rounded-l-none" onClick={() => setReverse(!reverse())}>{ reverseSymbol() }</button>
        </div>
      </div>
      <RepoList sortBy={sortBy} reverse={reverse} />
    </main>
  )
}

const App: Component = () => {
  return (
    <>
      <header class="flex flex-row items-center p-4 h-16 min-h-16">
        <h1 class="text-xl font-semibold">
          Szeweq
        </h1>
        <div class="flex-grow" />
        <a class="btn border-2 stroked" href="https://github.com/Szeweq">GitHub</a>
      </header>
      <div id="page" class="sheet-0">
        <Page />
      </div>
    </>
  );
};

export default App;
