export default function Footer () {
  const date = new Date().getFullYear()

  return (
    <div className="footer">
      <footer>Made with ❤️ in Indonesian, copyright @ {date} - RAIN.DEV.</footer>
    </div>
  )
}