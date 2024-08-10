<script setup lang="ts">
import { onMounted } from "vue"; 

const props = defineProps<{ 
  name: string;
  value: any;
}>();

onMounted(() => { 
  window.localStorage.setItem(props.name, JSON.stringify(props.value));
});
</script>
