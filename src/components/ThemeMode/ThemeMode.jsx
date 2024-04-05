import { useState, useEffect } from 'react'

export default function ThemeMode() {

  const [flag, setFlag] = useState(
    localStorage.getItem('themeMode') === 'light' ? true : false
  )

  useEffect(() => {
    document.body.style.backgroundColor = flag ? 'white' : 'black'
    document.body.style.color = flag ? 'black' : 'white'
    localStorage.setItem('themeMode', flag ? 'light' : 'dark')
  }, [flag])

  const handleThemeMode = () => {
    setFlag(!flag)
  }

  return (
    <>
      <button
        className='border px-3 py-1 rounded-full'
        onClick={handleThemeMode}
      >
        Mode
      </button>
    </>
  )
}
