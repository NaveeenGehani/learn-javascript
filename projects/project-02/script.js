const hour = document.getElementById("hour")
const min = document.getElementById("minute")
const sec = document.getElementById("second")
const ms = document.getElementById("milisecond")
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const resetBtn = document.getElementById("reset-btn")
const addNoteBtn = document.getElementById("add-note-btn")


let startTime = 0
let elapsedTime = 0
let timerId = null
let running = false

function startStopwatch() {
  if (running) return
  running = true
  startTime = Date.now() - elapsedTime
  timerId = setInterval(updateDisplay, 10)
}

function stopStopwatch() {
  if (!running) return
  running = false
  clearInterval(timerId)
  elapsedTime = Date.now() - startTime
}

function resetStopwatch() {
  running = false
  clearInterval(timerId)
  elapsedTime = 0
  startTime = 0
  updateDisplay()
}

function updateDisplay() {
  if (running) {
    const now = Date.now()
    elapsedTime = now - startTime
  }

  const totalSeconds = Math.floor(elapsedTime / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = totalSeconds % 60

  hour.textContent = String(hours).padStart(2, '0')
  min.textContent = String(minutes).padStart(2, '0')
  sec.textContent = String(seconds).padStart(2, '0')
  const milliseconds = elapsedTime % 1000
  ms.textContent = String(milliseconds).padStart(3, '0')
}

// Notes / sticky note functionality
const notesContainer = document.getElementById('notes')
const notePopup = document.getElementById('note-popup')
const noteText = document.getElementById('note-text')
const noteSaveBtn = document.getElementById('note-save-btn')
const noteCancelBtn = document.getElementById('note-cancel-btn')

function formatElapsed(msValue) {
  const totalSeconds = Math.floor(msValue / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = totalSeconds % 60
  const milliseconds = msValue % 1000
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(milliseconds).padStart(3,'0')}`
}

function showNotePopup() {
  notePopup.classList.remove('hidden')
  noteText.value = ''
  noteText.focus()
}

function hideNotePopup() {
  notePopup.classList.add('hidden')
}

addNoteBtn.addEventListener('click', () => {
  showNotePopup()
})

noteCancelBtn.addEventListener('click', () => {
  hideNotePopup()
})

noteSaveBtn.addEventListener('click', () => {
  const desc = noteText.value.trim()
  if (!desc) return

  // capture elapsed snapshot (ensure latest value)
  const snapshotElapsed = running ? (Date.now() - startTime) : elapsedTime

  const note = document.createElement('div')
  note.className = 'note'

  const meta = document.createElement('div')
  meta.className = 'meta'
  const now = new Date()
  meta.textContent = `Elapsed: ${formatElapsed(snapshotElapsed)} • At: ${now.toLocaleString()}`

  const d = document.createElement('div')
  d.className = 'desc'
  d.textContent = desc

  note.appendChild(meta)
  note.appendChild(d)

  notesContainer.prepend(note)
  hideNotePopup()
})