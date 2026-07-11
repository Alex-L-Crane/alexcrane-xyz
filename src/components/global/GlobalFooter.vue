<template>
  <div class="bg-almost-black md:h-[600px] px-8 pb-36 flex items-end justify-between">
    <div class="w-[200px] flex items-center">
      <svg width="43" height="42" viewBox="0 0 43 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9837_606)">
          <path d="M0 0V42H43V0H0ZM27.4442 2.63386H40.2999V25.5687H27.4442V2.63386ZM13.7624 2.49204C20.0895 2.49204 25.2277 7.65847 25.2277 14.0203C25.2277 20.3821 20.0895 25.5485 13.7624 25.5485C7.43533 25.5485 2.29709 20.3821 2.29709 14.0203C2.27694 7.65847 7.41518 2.49204 13.7624 2.49204ZM40.3201 39.3054H2.15604V28.466H5.82334V28.4457H37.9021V28.466H40.3201V39.3054Z" fill="currentColor"/>
          <path d="M13.8647 18.3761C16.2827 18.3761 18.2373 16.4108 18.2373 13.9795C18.2373 11.5483 16.2827 9.58301 13.8647 9.58301C11.4467 9.58301 9.49219 11.5685 9.49219 13.9795C9.49219 16.3905 11.4669 18.3761 13.8647 18.3761ZM13.8647 10.7986C15.6178 10.7986 17.0283 12.2169 17.0283 13.9795C17.0283 15.7422 15.6178 17.1604 13.8647 17.1604C12.1117 17.1604 10.7012 15.7422 10.7012 13.9795C10.7012 12.2169 12.1318 10.7986 13.8647 10.7986Z" fill="currentColor"/>
          <path d="M37 11H31V17H37V11Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_9837_606">
            <rect width="43" height="42" fill="currentColor"/>
          </clipPath>
        </defs>
      </svg>
      <span class="font-bold pl-4">Ritual :: Rhythm</span>
    </div>
    <div class="pr-40 self-end">
      <ul>
        <li><h4 class="text-white inline-block mb-4 font-bold">About:</h4></li>
        <li><a href="/about" class="text-white font-thin inline-block mb-4">Overview</a></li>
        <li><a href="/music" class="text-white font-thin inline-block mb-4">Music</a></li>
        <li><a href="/design" class="text-white font-thin inline-block mb-4">Design</a></li>
        <li><a href="/philosophy" class="text-white font-thin inline-block mb-4">Philosophy</a></li>
        <li><a class="text-white font-thin inline-block mb-4" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </div>
    <div class="self-end">
      <h2 class="text-3xl">Email Signup</h2>
      <p class="font-thin mb-2">Drumming and technology</p>
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
                py-1.5 pr-3 pl-3 mr-2
                mb-2
                bg-almost-black border border-white rounded-sm
                text-sm/6 leading-none font-medium text-white
                placeholder:text-gray-400
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-white"
          placeholder="Email Address" />
          <input
            type="submit"
            value="Subscribe"
            class="h-10 px-6 py-0 rounded-sm text-sm/6
            leading-none font-medium text-white border
            border-white cursor-pointer"/>
      </form>
    </div>
  </div>
</template>
<script setup>
</script>
