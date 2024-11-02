import React from 'react'
import Modal from 'react-modal'
import {RiCloseCircleFill} from 'react-icons/ri'
import './modal.scss'

Modal.setAppElement('#root')

const ModalWrapper = ({ isOpen, toggleModal }) => {
  const languages = [
    { name: 'Arabic', value: '100%' },
    { name: 'English', value: '60%' },
    { name: 'French', value: '35%' },
  ]
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      <div className="modalbox_about">
        <button className="close-modal" onClick={toggleModal}>
          <RiCloseCircleFill />
        </button>
        {/* END POPUP CLOSE BUTTON */}
        <div className="box-inner">
          <div className="description_wrap scrollable">
            <div className="my_box">
              <div className="left">
                <div className="about_title">
                  <h3>Photography Skills</h3>
                </div>
                {/* END ABOUT TITLE */}

                <div className="progress">
                  {languages.map((lang, i) => (
                    <div
                      className="progress_inner"
                      data-value={`${lang.value}`}
                      key={i}
                    >
                      <span>
                        <span className="label">{lang.name}</span>
                        <span className="number">{lang.value}</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width:lang.value }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="right">
                <div className="about_title">
                  <h3>Language Skills</h3>
                </div>
                <div className="progress">
                  {languages.map((lang, i) => (
                    <div
                      className="progress_inner"
                      data-value={`${lang.value}`}
                      key={i}
                    >
                      <span>
                        <span className="label">{lang.name}</span>
                        <span className="number">{lang.value}</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width:lang.value }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalWrapper