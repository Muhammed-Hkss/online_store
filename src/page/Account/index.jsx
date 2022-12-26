import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ChangeUser , GetUser } from '../../config'
import FormButton from '../../hooks/FormButton'
import FormInput from '../../hooks/FormInput'
import cls from './Account.module.scss'
import { BiXCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import Loading from '../../components/Loading'
import Test from '../../Test'


const Account = () => {
  const [users , setUser] = useState(null)
  const [open , setOpen] = useState(false)
  const navigate = useNavigate('')
  // const { id } = useParams()


  const {
    register,
    handleSubmit,
		formState: { errors, isValid },
    reset,
  } = useForm({
    mode:'onChange'
  })



  React.useEffect(() => {
    GetUser(localStorage.getItem('accessToken')).then(r => {
      setUser(r.data);
    })
  }, [])

  const onSubmit = (data) => {
    if(data){
      ChangeUser('6').then(r => {
        console.log(r);
        if(r){
          navigate('/')
        }
      })
    }
  };

  // function postUpdate(todoId){
  //   ChangeUser('6').then()
  // }



  // ChangeUser



















  if(!users) return <div style={{display:'flex' , justifyContent:'center' , position:'relative' , top:'20rem'}}><Loading /></div>
  return (
    <>
      <div>
        <Test />
      </div>

      <div className={cls.container}>

        <div 
          style={{
            position:'absolute',
            top:0 ,
            left:0
          }}
        >
          <button onClick={() => navigate('/')}>back</button>
        </div>

        <div 
          className={`${cls.left_profile_data} ${open? `${cls.active}` : `${cls.inactive}`}`}
        >

          <div className={cls.setting_btn}>
            <FiSettings onClick={() => navigate('/settings')}/>
          </div>
          <div className={cls.left_profile_image_data}>
            {
              users?.avatarka === null ? <img src='https://pbs.twimg.com/media/FbkmozNXgAMgVRX?format=jpg&name=large' alt="null" /> : <img src={users?.avatarka} alt="null" />
            }
            {/* <img src={users?.avatarka} alt="null" /> */}
          </div>
          <div className={cls.left_profile_tixt_data}>
            <h2>{users?.username}</h2>
            <p>{users?.phone_number}</p>
            <p>{users?.about}</p>
            <p>{users?.email}</p>
            <div style={{display:'flex' , gap:'20px' , justifyContent:'center'}}>
              <p>basket: {users?.basket_owner.length}</p>
              <p>favorite: {users?.user_favorite.length}</p>
            </div>
            {/* <p>{users?.about}</p> */}
            {/* <p>{users?.about}</p> */}
            <button onClick={() => {setOpen(!open)}}>
              change
            </button>
          </div>
          
          <form
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className={cls.formBody}>
              <div className={cls.bix_btn}>
                <BiXCircle onClick={() => {setOpen(!open)}}/>
              </div>
                  
              <FormInput
                inputType='text'
                    placeholder='Ваше имя'
                    registerName='username'
                    register={register}
                errors={errors.username?.message}
              />
              <FormInput
                inputType='email'
                    placeholder='Ваше email'
                    registerName='email'
                    register={register}
                errors={errors.email?.message}
              />
              <FormInput
                inputType='password'
                    placeholder='Введите пароль'
                    registerName='password'
                    register={register}
                errors={errors.password?.message}
              />
              <FormInput
                inputType='text'
                    placeholder='Введите тел номер'
                    registerName='phone_number'
                    register={register}
                errors={errors.phone_number?.message}
              />
              <FormInput
                inputType='text'
                    placeholder='Введите text'
                    registerName='about'
                    register={register}
                errors={errors.about?.message}
              />
              
              <div className={cls.change_btn}>
                <FormButton isValid={isValid} buttonText='change' />
              </div>

                  
            </div>
          </form>


          {/* <p>{users?.email}</p>
          <p>basket {users?.basket_owner.length}</p>
          <p>favorite {users?.user_favorite.length}</p> */}

        </div>
      </div>
    </>
  )
}

export default Account
