export default function Footer(props) {
  const { showModal, handleToggleModal, data } = props

  return (
      <footer>
          <div className="bgGradient"></div>
          <div>
              <h1>APOD PROJECT</h1>
              <h2>The Brutal Martian Landscape</h2>
          </div>
          <button onClick={handleToggleModal}>
              <i className="fa-solid fa-circle-info"></i>
          </button>
      </footer>
  )
}