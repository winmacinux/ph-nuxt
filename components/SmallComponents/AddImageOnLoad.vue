<template>
<div>
  <v-btn color="black white--text" large icon @click="onPickFile" ><v-icon>add_a_photo</v-icon></v-btn>
  <input type="file" v-show="false" ref="imageInput" accept="image/*" @change="onImagePicked" multiple />
</div>
</template>
<script>
export default {
  props: ['data'],
  methods: {
    onImagePicked(){
      const files = event.target.files

      if (files) {
        [].forEach.call(files, this.readAndPreview)
        this.$emit('loadImages',this.newImage)
        this.$emit('dismissed')
      }
    },
    readAndPreview(file) {
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        let fileReader = new FileReader()
        fileReader.addEventListener("load", () => {
          this.newImage.images.push({
            image_file: fileReader.result,
            file_name: file.name
          })
        }, false);
        fileReader.readAsDataURL(file);
      }
    },
    // onImagePicked(){
    //   const files = event.target.files
    //   console.log(files);
      

    //   for (var key in files) {
    //     console.log(key);
    //     if(files.hasOwnProperty(key) ){
    //       let filename = files[key].name
    //       console.log(filename); 
    //       if (filename.lastIndexOf('.') <= 0) {
    //         alert.msg = 'Please add a valid file!'
    //         alert.status =  true
    //         console.log('here')
    //         return
    //       }
    //     }
    //   }
    //   const fileReader = new FileReader()
    //   fileReader.addEventListener('load', () => {
    //     this.newImage.image_file = fileReader.result
        
    //     this.$emit('loadImages',this.newImage)
    //   })

    //   for (var key in files) {
    //     console.log(key);

    //     if(files.hasOwnProperty(key) ){
    //       fileReader.readAsDataURL(files[key])
    //       this.newImage.file_name = files[key].name
    //     }
    //   }
    //   this.$emit('dismissed')
    // },
    onPickFile () {
      this.$refs.imageInput.click()
    },
  },
  data () {
    return {
      newImage: {
        content_type: this.data.content_type,
        object_id: this.data.object_id,
        images: [],
      },
      alert: {
        msg: '',
        status: false
      },
      file: ''
    }
  }
}
</script>
