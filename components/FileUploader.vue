<script setup>
const defaultButtonText = ref('Upload document')
const selectedFile = ref(null)
const isSelecting = ref(false)

const buttonText = computed(() => {
  return selectedFile.value ? selectedFile.value.name : defaultButtonText.value
})

const uploader = ref()
const onButtonClick = () => {
  isSelecting.value = true
  window.addEventListener('focus', () => {
    isSelecting.value = false
  }, { once: true })

  uploader.value.click()
}

const onFileChanged = (e) => {
  selectedFile.value = e.target.files[0]
}

</script>

<template>
  <div>
    <v-btn color="green" size="x-large" class="w-100" stacked :loading="isSelecting" @click="onButtonClick"
      style="height:200px">
      <v-icon size="x-large">mdi-cloud-upload</v-icon>
      <p style="font-size:12px">{{ buttonText }}</p>
    </v-btn>
    <input ref="uploader" class="d-none" type="file" accept="image/*" @change="onFileChanged">
  </div>
</template>


<style lang="scss" scoped>
.v-icon--left {
  margin-right: 8px;
}
</style>