import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Token } from '../../config'
import FormButton from '../../hooks/FormButton'
import FormInput from '../../hooks/FormInput'
import cls from './Login.module.scss'

const Login = () => {
  const [responseErrors, setResponseErrors] = useState(false)
  const navigate = useNavigate()


  const DarkMode = localStorage.getItem('isDarkMode')


  console.log(DarkMode);



  const {
    register,
    handleSubmit,
		formState: { errors, isValid },
    reset,
  } = useForm({
    mode:'onChange'
  })

  const onSubmit = (data) => {
    if(data){
      Token(data).then(r => {
        console.log(r);
        if(r.data){
          localStorage.setItem('accessToken', r.data.access)

          // access
          navigate('/account')
        }
      })
    }
  }
  
  return (
    <div 
      className={`${cls.container} ${DarkMode === 'true' ? `${cls.active}` : `${cls.inactive}`}`}
      
      // className={cls.container}
      
    >

      <div className={cls.center_login_data}>
        <div className={cls.login_data}>
          <div className={cls.login_image}>
            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="" />
            <Link to='/user/register'>Еще нет аккаунта</Link> 
          </div>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className={cls.login_form}
          >
            <h1>Sign up</h1>
            {responseErrors && (
              <span style={{ fontSize: 14, color: '#c72f31' }}>
                Непраильный Логин или пароль
              </span>
            )}
            <div>

              <FormInput
                inputType='text'
                placeholder='Ваш username'
                registerName='username'
                register={register}
                errors={errors.username?.message}
              />
              <FormInput
                inputType='password'
                placeholder='Введите пароль'
                registerName='password'
                register={register}
                errors={errors.password?.message}
              />
              <FormButton isValid={isValid} buttonText='Войти' />
            </div>
            {/* <Link to='/user/register'>Еще нет аккаунта</Link> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login