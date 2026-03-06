<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>รายการหนังสือ</h1>
      <button class="btn btn-success" @click="goToCreate">
        สร้างหนังสือ
      </button>
    </div>

    <div v-if="books.length === 0" class="alert alert-info">
      ไม่มีข้อมูลหนังสือ
    </div>

    <table v-else class="table table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>ชื่อ</th>
          <th>ผู้แต่ง</th>
          <th>ปีพิมพ์</th>
          <th>หมวดหมู่</th>
          <th>การดำเนินการ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
  <td>{{ book.title }}</td>
  <td>{{ book.author }}</td>
  <td>{{ book.publishedYear }}</td>
  <td>{{ book.category }}</td>
  <td>
    <button class="btn btn-sm btn-info me-2" @click="viewBook(book.id)">
      ดูข้อมูล
    </button>

    <button class="btn btn-sm btn-warning me-2" @click="editBook(book.id)">
      แก้ไข
    </button>

    <button class="btn btn-sm btn-danger"
      @click="confirmDelete(book.id, book.title)">
      ลบ
    </button>
  </td>
</tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bookService from '../services/bookService'

export default {
  name: 'BookList',
  data() {
    return {
      books: []
    }
  },
  mounted() {
    this.loadBooks()
  },
  methods: {
    async loadBooks() {
      try {
        const response = await bookService.getAll()
        this.books = response.data
      } catch (error) {
        console.error('Error loading books:', error)
      }
    },
    goToCreate() {
      this.$router.push('/books/create')
    },
    viewBook(id) {
      this.$router.push(`/books/${id}`)
    },
    editBook(id) {
      this.$router.push(`/books/edit/${id}`)
    },
    confirmDelete(id, title) {
      if (confirm(`ยืนยันการลบ "${title}" หรือไม่?`)) {
        this.deleteBook(id)
      }
    },
    async deleteBook(id) {
      try {
        await bookService.delete(id)
        this.loadBooks()
      } catch (error) {
        console.error('Error deleting book:', error)
      }
    }
  }
}
</script>