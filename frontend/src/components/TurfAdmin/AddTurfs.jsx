import React,{useRef, useEffect, useCallback} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useSpring, animated} from 'react-spring'
import bgimg from '../../assets/bg4.jpg'
import styles from '../../styles/Username.module.css'


const AddTurfs = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const closeModal = e =>{
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }
  return (
    <div className='flex justify-center'>
        
        
    <div  style={{background: 'rgba(0, 0, 0, 0.73)'}} className='w-full h-full pb-20 fixed'>
    <div onClick={closeModal} ref={modalRef} className='flex justify-end p-3'>

        <AiOutlineCloseCircle aria-label='close-modal' size={35} className='text-white cursor-pointer m-1' onClick={()=>{
            setShowModal(prev => !prev)
        }} />
        </div>
            <div>
           
        <div className='mx-auto w-[500px]   h-[600px] shadow-lg bg-gray-500   z-10 rounded-md '>
        <form className='py-1'>
          
            <div className="textbox flex flex-col items-center gap-6">
              <input className='focus:outline-none w-[250px] rounded h-[30px]' name='' type="text" placeholder=''/>
            
            </div>  
         
          </form>

        </div>
     
            </div>
    </div>
    </div>
  )
}

export default AddTurfs