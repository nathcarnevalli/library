const book = {
  title: '',
  author: '',
  pages: '',
  read: false
}

const books = []

function showAddBook() {
  add.className =
    'bg-gray-200 p-8 rounded-lg text-xl shadow-md fixed bottom-1/2 z-10'
}

function setBook(event) {
  event.target.name !== 'read'
    ? (book[event.target.name] = event.target.value)
    : event.target.checked
    ? (book.read = true)
    : (book.read = false)
}
