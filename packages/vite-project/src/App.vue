<template>
  <div>
    <div style="background: pink">
      <h2>vue component</h2>
      <button @click="value++">点击2</button>
      {{ value }}
    </div>

    <hr>

    <react-component1 :setting="value"></react-component1>
    <react-component2 :setting="value"></react-component2>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const value = ref(1)

const test = async () => {
  try {
    // @ts-ignore
    const cocoRegister = (await import('remoteApp/cocoRegister')).default
    cocoRegister()
  } catch (e) {
    console.log(e)
  }
}
test()

</script>

<style></style>
