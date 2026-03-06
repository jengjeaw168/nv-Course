<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 class="mb-4">{{ isEdit ? 'แก้ไขหนังสือ' : 'สร้างหนังสือใหม่' }}</h1>

        <form @submit.prevent="saveBook" class="card p-4">
          <div class="mb-3">
            <label class="form-label">ชื่อหนังสือ *</label>
            <input 
              v-model="form.title" 
              type="text" 
              class="form-control" 
              required
            >
          </div>

          <div class="mb-3">
            <label class="form-label">ผู้แต่ง *</label>
            <input 
              v-model="form.author" 
              type="text" 
              class="form-control" 
              required
            >
          </div>

          <div class="mb-3">
            <label class="form-label">ISBN</label>
            <input 
              v-model="form.isbn" 
              type="text" 
              class="form-control"
            >
          </div>

          <div class="mb-3">
            <label class="form-label">ปีพิมพ์</label>
            <input 
              v-model.number="form.publishedYear" 
              type="number" 
              class="form-control"
            >
          </div>

          <div class="mb-3">
            <label class="form-label">จำนวนหน้า</label>
            <input 
              v-model.number="form.pages" 
              type="number" 
              class="form-control"
            >
          </div>

          <div class="mb-3">
            <label class="form-label">หมวดหมู่</label>
            <input 
              v-model="form.category" 
              type="text" 
              class="form-control"
            >
          </div>

          <div class="mb-3">
            <label class="form-label">รายละเอียด</label>
            <textarea 
              v-model="form.description" 
              class="form-control" 
              rows="4"
            ></textarea>
          </div>

          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-success">บันทึก</button>
            <button type="button" @click="goBack" class="btn btn-secondary">
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import bookService from '../services/bookService'

export default {
  name: 'BookForm',
  data() {
    return {
      form: {
        title: '',
        author: '',
        isbn: '',
        publishedYear: '',
        pages: '',
        category: '',
        description: ''
      },
      isEdit: false
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.isEdit = true
      this.loadBook(this.$route.params.id)
    }
  },
  methods: {
    async loadBook(id) {
  try {
    const response = await bookService.getOne(id)

    this.form = {
      title: response.data.title,
      author: response.data.author,
      isbn: response.data.isbn,
      publishedYear: response.data.publishedYear,
      pages: response.data.pages,
      category: response.data.category,
      description: response.data.description
    }

  } catch (error) {
    console.error('Error loading book:', error)
  }
},
    async saveBook() {
  try {
    console.log(this.form)

    if (this.isEdit) {
      await bookService.update(this.$route.params.id, this.form)
    } else {
      await bookService.create(this.form)
    }

    this.$router.push('/books')

  } catch (error) {
    console.error(error)
  }
},
    goBack() {
      this.$router.push('/books')
    }
  }
}
</script>