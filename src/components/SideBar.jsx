import React from 'react'

export default function SideBar(props) {
  const { handleToggleModal, data } = props

  return (
    <div className='sidebar'>
      <div onClick={handleToggleModal} className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h2>The Brutal Martian Landscape</h2>
        <div className='descriptionContainer'>
          <p className='descriptionTitle'>Description</p>
          <p>njsadknakckjadncjkncjkndsjkcnkjdscnkjancjkadncksdncksjdn</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}
