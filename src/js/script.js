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

function hideAddBook() {
  add.className =
    'bg-gray-200 p-8 rounded-lg text-xl shadow-md fixed bottom-1/2 z-10 hidden'
}

function setBook(event) {
  event.target.name !== 'read'
    ? (book[event.target.name] = event.target.value)
    : event.target.checked
    ? (book.read = true)
    : (book.read = false)
}

function createBook(book) {
  const divBook = document.createElement('div')
  const title = document.createElement('h3')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const read = document.createElement('p')
  const edit = document.createElement('button')
  const remove = document.createElement('button')

  divBook.className =
    'bg-gray-200 p-8 rounded-lg text-2xl shadow-lg flex flex-col gap-4 w-80 text-center'
  title.className = 'font-bold'
  edit.className =
    'rounded-md font-bold text-white bg-purple-500 px-4 py-2 text-xl transition-colors hover:bg-purple-400'
  remove.className =
    'rounded-md font-bold text-white bg-gray-500 px-4 py-2 text-xl transition-colors hover:bg-gray-400'

  title.textContent = book.title
  author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  read.textContent = book.read ? 'Read' : 'Not read yet'
  edit.textContent = 'Edit'
  remove.textContent = 'Remove'

  divBook.appendChild(title)
  divBook.appendChild(author)
  divBook.appendChild(pages)
  divBook.appendChild(read)
  divBook.appendChild(edit)
  divBook.appendChild(remove)

  return divBook
}

function addBookToLibrary(event) {
  event.preventDefault()
  hideAddBook()

  const divBook = createBook(book)

  books.push(book)
  library.appendChild(divBook)
  localStorage.setItem('books', JSON.stringify(books))
}

function libraryBooks() {
  for (let book of JSON.parse(localStorage.getItem('books'))) {
    const divBook = createBook(book)
    library.appendChild(divBook)
  }
}
