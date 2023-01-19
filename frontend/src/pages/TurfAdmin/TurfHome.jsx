import React,{useState} from 'react'
import Home from '../../components/TurfAdmin/Home'
import Nav from '../../components/TurfAdmin/Nav'
// import Modal from '../../components/TurfAdmin/Modal'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrectToken, selectCurrectUser } from '../../features/auth/authSlice'

const TurfHome = () => {

  const user = useSelector(selectCurrectUser)
  const token = useSelector(selectCurrectToken)

  const [showModal, setShowModal] = useState(false)

  const openModal = ()=>{
    setShowModal(prev=> !prev)
  }
  return (
    <div className='bg-white'>

        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    <div>
        <Nav setShowModal={setShowModal} showModal={showModal} openModal={openModal}/>

        <Home />
    </div>
    </div>
  )
}

export default TurfHome