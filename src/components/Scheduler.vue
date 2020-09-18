<template>
  <div class="container mx-auto my-5">
    <scheduler 
        :allow-overlap="false"
        :config="schedulerConfig"
        :events="events"
        :resources="processedResources"
        :view-preset="timeLine"
        class="border-top h-100"
        ref="bScheduler"></scheduler>
  </div>
</template>

<script>
import Scheduler from "bryntum-vue-shared/src/Scheduler";

export default {
  components: {
    Scheduler
  },
  name: 'scheduler',
}
</script>