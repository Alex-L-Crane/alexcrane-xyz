<template>
  <div class="bg-almost-black md:h-[600px] pb-8">
    <div class="md:ml-8 lg:pt-64 p-4">
      <h2 class="text-3xl">Email Signup</h2>
      <p class="font-thin mb-2">For when there’s something worth saying.</p>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/alexcrane"
        method="post">
        <label
          for="email"
          class="inline-block text-sm/6 font-light text-white"></label>
        <input
          type="email"
          name="email"
          class="h-10
                inline-block min-w-full md:min-w-96
                py-1.5 pr-3 pl-2
                mb-2
                bg-almost-black border border-white rounded-sm
                text-sm/6 leading-none font-medium text-white
                placeholder:text-gray-400 focus:outline-none"
          placeholder="Email Address" />
        <label
          for="first-name"
          class="block text-sm/6 font-medium text-white"></label>
        <div class="md:flex">
          <input
            id="first-name"
            type="text"
            name="metadata__first-name"
            required
            placeholder="First Name"
            class="h-10 block min-w-full md:min-w-96
                  py-1.5 pr-3 pl-2
                  mb-2 mr-2
                  bg-almost-black border border-white rounded-sm
                  text-sm/6 leading-none font-medium text-white
                  placeholder:text-gray-400 focus:outline-none"
          />
          <input type="hidden" value="1" name="embed" />
          <input
            type="submit"
            value="Subscribe"
            class="h-10 px-6 py-0 rounded-sm text-sm/6
            leading-none font-medium text-white border
            border-white cursor-pointer"/>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
</script>
