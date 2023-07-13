<!-- md文档编辑器，可读可写版本 -->
<template>
  <div class="">
    <MdEditor v-model="content" />
  </div>
</template>

<script>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
export default {
  name: 'MdEditorPage',
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      content: ""
    }
  },
  components: {
    MdEditor
  },
  computed: {
    
  },
  watch: {
    text(oldValue, newValue){
      this.content = newValue;
    }
  },
  methods: {
    
  },
  created () {
    
  },
  mounted () {
    
  },
}
</script>

<style scoped>
  
</style>
