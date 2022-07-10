import { Component } from 'solid-js'

const App: Component = () => {
  return (
    <>
      <header class="flex flex-row items-center p-4 h-16 min-h-16">
        <h1 class="text-xl font-semibold">
          Szeweq
        </h1>
        <div class="flex-grow" />
        <a class="btn border-2 stroked mr-1" href="https://droogoo.szeweq.xyz/">Droogoo</a>
        <a class="btn border-2 stroked" href="https://github.com/Szeweq">GitHub</a>
      </header>
      <div id="page" class="sheet-0 items-center justify-center">
        <h2 class="text-[3rem] font-bold">Website moved</h2>
        <p class="my-4">Check new website – szeweq.xyz!</p>
        <a class="btn tinted text-xl font-medium !px-6 !py-3 !rounded-full" href="https://szeweq.xyz">Go to szeweq.xyz</a>
      </div>
    </>
  );
};

export default App;
