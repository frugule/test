<template>
  <div>
    <course-form></course-form>
    <b-container>
      <course-table></course-table>
    </b-container>
  </div>
</template>

<script>
import CourseForm from '../components/CourseForm'
import CourseTable from '../components/CourseTable'
export default {
  components:{
    CourseForm,
    CourseTable
  }
}
</script>

<style>

</style>
