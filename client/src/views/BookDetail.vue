<template>
  <div class="container mt-5">
    <div v-if="book" class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">{{ book.title }}</h1>
            
            <div class="card-text">
              <p><strong>ผู้แต่ง:</strong> {{ book.author }}</p>
              <p><strong>ISBN:</strong> {{ book.isbn }}</p>
              <p><strong>ปีพิมพ์:</strong> {{ book.publishedYear }}</p>
              <p><strong>จำนวนหน้า:</strong> {{ book.pages }}</p>
              <p><strong>หมวดหมู่:</strong> {{ book.category }}</p>
              <p><strong>รายละเอียด:</strong></p>
              <p>{{ book.description }}</p>
            </div>

            <div class="d-flex gap-2">
              <button @click="editBook" class="btn btn-warning">แก้ไข</button>
              <button @click="goBack" class="btn btn-secondary">กลับ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-info">
      กำลังโหลด...
    </div>
  </div>
</template>

<script>
import bookService from '../services/bookService'

export default {
  name: 'BookDetail',
  data() {
    return {
      book: null
    }
  },
  mounted() {
    this.loadBook()
  },
  methods: {
    async loadBook() {
      try {
        const response = await bookService.getOne(this.$route.params.id)
        this.book = response.data
      } catch (error) {
        console.error('Error loading book:', error)
      }
    },
    editBook() {
      this.$router.push(`/books/edit/${this.book._id}`)
    },
    goBack() {
      this.$router.push('/books')
    }
  }
}
</script>