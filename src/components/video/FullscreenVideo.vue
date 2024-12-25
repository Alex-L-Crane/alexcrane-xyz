<template>
  <div class="w-full">
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
  import VideoPlayer from '~/components/VideoPlayer.vue';

  export default {
    name: 'FullscreenVideo',
    components: {
      VideoPlayer
    },
    data() {
      return {
        videoOptions: {
          autoplay: false,
          controls: true,
          aspectRatio: "16:9",
          disablePictureInPicture: true,
          sources: [
            {
              src:
                  'http://localhost/media/encoded/7/admin/f95da14bbbc741198331ef2ef01cbfe2.f95da14bbbc741198331ef2ef01cbfe2.DSC_0873.MOV.mp4',
              type: 'video/mp4'
            }
          ]
        }
      };
    }
  }
</script>