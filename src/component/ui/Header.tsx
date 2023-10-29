import { NavLink, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { Popover, Button } from 'component'
import { PATH } from 'constant'
import { useAuth } from 'hooks'
import { useAppDispatch } from 'store'
import { quanLyNguoiDungActions } from 'store/quanLyNguoiDung'
import { useEffect, useState } from 'react'
import cn from 'classname'
import { getUser } from 'utils'


export const Header = () => {
  const navigate = useNavigate()


  // Lấy accessToken thông qua useAuth
  const { accessToken } = useAuth()

  let user = {}

  if (accessToken) {
    user = getUser()
  }

  console.log("user: ", user);
  console.log("accessToken: ", accessToken);

  const dispatch = useAppDispatch()

  const [scroll, setScroll] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setScroll(true)
      return
    }
    setScroll(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // remove để thoát khỏi page home, window không còn ăn lệnh này nữa
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container
      className={cn({
        'header-fixed': scroll
      })}
    >
      <div className="header-content">

        <h1
          className="brand flex items-center"
          onClick={() => { navigate('/') }}
        >
          <i className='fa-brands fa-airbnb text-[var(--primary-color)] font-500 text-[48px]'></i>
          <span className="mx-8 text-[var(--primary-color)]">airbnb</span>
        </h1>

        <nav className="flex items-center">
          <NavLink to="">Nơi ở</NavLink>
          <NavLink to="">Trải nghiệm</NavLink>
          <NavLink to="">Trải nghiệm trực tuyến</NavLink>
        </nav>

        <div>
          {
            !accessToken && (
              <Popover
                className='cursor-pointer border border-gray-400 py-12 px-12 rounded-full shadow shadow-blue-500/40 hover:shadow-indigo-400'
                content={<div className='p-4 w-[200px]'>
                  <p
                    className='cursor-pointer font-600 text-16 px-8 py-8 rounded-10 hover:bg-gray-100'
                    onClick={() => navigate(PATH.login)}
                  >
                    Đăng nhập
                  </p>
                  <p
                    className='cursor-pointer font-600 text-16 px-8 py-8 rounded-10 hover:bg-gray-100'
                    onClick={() => navigate(PATH.register)}
                  >
                    Đăng ký
                  </p>
                  <p
                    className='cursor-pointer text-[#e50914] font-600 text-16 px-8 py-8 rounded-10 hover:bg-gray-100'
                    onClick={() => navigate(PATH.loginAdmin)}
                  >
                    Admin page
                    <i className='fa-solid fa-repeat ms-24'></i>

                  </p>
                </div>}

                trigger={'click'}
                arrow={false}
              >
                <span>
                  <i className="fa-solid fa-bars me-16"></i>
                </span>
                <span className='py-8 px-10 rounded-full bg-stone-400'>
                  <i className="fa-solid fa-user text-white text-20"></i>
                </span>
              </Popover>
            )
          }
          {

            // Nếu có accessToken rồi: hiện thông tin tài khoản

            !!accessToken && (
              <Popover
                className='cursor-pointer border border-gray-400 py-4 px-4 rounded-full shadow shadow-blue-500/40 hover:shadow-indigo-400'
                content={<div className='p-4 w-[200px]'>
                  <p className='font-600 text-16 px-8 py-8'>User: {user?.name}</p>
                  <hr />
                  <p
                    className='mt-12 cursor-pointer font-600 text-16 px-8 py-8 rounded-10 bg-gray-300 hover:bg-gray-400'
                    onClick={() => navigate(PATH.account)}
                  >Thông tin tài khoản</p>

                  <Button
                    className='!h-[46px] mt-16 w-full'
                    type='primary'
                    onClick={() => {
                      dispatch(quanLyNguoiDungActions.logOut('abc'))
                      navigate('/')
                    }
                    }>
                    <i className="fa-solid fa-arrow-right-from-bracket text-16"></i>
                    <span className='ml-10 font-500 text-16'>Đăng xuất</span>
                  </Button>
                </div>}
                trigger={'click'}
                arrow={false}
              >

                <div className='grid grid-cols-2 w-[100px]'>
                  <div className="text-center">
                    <i className="fa-solid fa-bars pt-12"></i>
                  </div>
                  <div>
                    <img className='rounded-full w-[40px] h-[40px]' src='/public/images/logo.png' alt="..." />
                  </div>
                </div>

              </Popover>

            )
          }
        </div>

      </div>

    </Container>
  )
}

// Styled component
const Container = styled.header`
    height: var(--header-height);
    box-shadow: 0px 16px 10px -5px rgba(0, 0, 0, 0.1);


    &.header-fixed {
      position: fixed;
      width: 100%;
      z-index: 999;
      background: #fff;
    }

    .header-content {
        padding: 0 80px;
        max-width: var(--max-width);
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .brand {
            font-weight: 700;
            font-size: 30px;
            &:hover {
                cursor: pointer;
            }
        }
        nav {
            display: flex;
            gap: 30px;
            a {
                font-weight: 500;
                &::after {
                    content: '';
                    display: block;
                    height: 3px;
                    background: var(--primary-color);
                    width: 0;
                    transition: all 0.3s ease-in-out;
                }
                &:hover {
                    &::after {
                        width: 100%;
                    }
                }
            }
        }
    }
`