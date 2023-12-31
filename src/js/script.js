const book = {
  title: '',
  author: '',
  pages: '',
  read: false
}

let books = []

let id = 0

function showAddBook() {
  add.className =
    'bg-gray-200 p-8 rounded-lg text-xl shadow-md fixed bottom-1/2 z-10'

  overlay.className =
    'fixed w-full h-full top-0 right-0 bottom-0 left-0 bg-slate-400 opacity-50 z-10 cursor-pointer'
}

function hideAddBook() {
  add.className =
    'bg-gray-200 p-8 rounded-lg text-xl shadow-md fixed bottom-1/2 z-10 hidden'
  overlay.className =
    'fixed w-full h-full top-0 right-0 bottom-0 left-0 bg-slate-400 opacity-50 z-10 cursor-pointer hidden'
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

  book.id = id + 1
  divBook.id = book.id
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

  remove.addEventListener('click', event => {
    library.removeChild(event.target.parentElement)
    books = books.filter(
      element => element.id !== Number(event.target.parentElement.id)
    )
    localStorage.setItem('books', JSON.stringify(books))
  })

  edit.addEventListener('click', () => {})

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
  localStorage.setItem('id', id)
  id++
}

function libraryBooks() {
  id = Number(localStorage.getItem('id'))
  for (let book of JSON.parse(localStorage.getItem('books'))) {
    const divBook = createBook(book)
    library.appendChild(divBook)
  }
}
