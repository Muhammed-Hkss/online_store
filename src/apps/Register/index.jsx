import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../../config'
import FormButton from '../../hooks/FormButton'
import FormInput from '../../hooks/FormInput'
import cls from './Register.module.scss'

const Register = () => {
  const [responseErrors, setResponseErrors] = useState(false)
  const navigate = useNavigate()

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
      signUp(data).then(r => {
        console.log(r);
        if(r){
          // localStorage.setItem('accessToken', r.data.access)
          navigate('/')
        }
      })
    }
  };

  // signUp

  // const fileRef = createRef<HTMLInputElement>();


  return (
    <div className={cls.container}>
      <button onClick={() => navigate('/')}>sdfsf</button>
      <div className={cls.center_login_data}>
        <div className={cls.login_data}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cls.login_form}
          >
            <div className={cls.formBody}>
              {responseErrors && (
                <span style={{ fontSize: 14, color: '#c72f31' }}>
                  Короткий пароль или Email уже существует
                </span>
              )}
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
                // type="file"
                // id="avatar" name="avatar"
                // accept=".jpg, .jpeg, .png"
                Inputaccept="image/png,image/jpeg,image/gif"
                inputType='file'
                placeholder='Введите avatarka'
                registerName='avatarka'
                register={register}
                errors={errors.avatarka?.message}
              />
              <FormInput
                inputType='text'
                placeholder='Введите text'
                registerName='about'
                register={register}
                errors={errors.about?.message}
              />
             
              
              <FormButton isValid={isValid} buttonText='Создать' />
            </div>
            {/* <Link className={cls.route} to='/auth/login'>Уже есть аккаунт</Link> */}
          </form>
          <div className={cls.login_image}>
            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
            <Link to='/auth/login'>Уже есть аккаунт</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register