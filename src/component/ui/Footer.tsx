import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Container className="flex flex-col border-t border-slate-600 bg-slate-50">

      <div className="footer-content">
        <div className="mt-[20px] flex gap-[100px] info">
          <div className='flex-1'>
            <p className="font-700 text-20">
              <span>GIỚI THIỆU</span>
            </p>
            <NavLink to="">Phương thức hoạt động của Airbnb</NavLink>
            <NavLink to="">Trang tin tức</NavLink>
            <NavLink to="">Nhà đầu tư</NavLink>
            <NavLink to="">Airbnb Plus</NavLink>
            <NavLink to="">Airbnb Luxe</NavLink>
            <NavLink to="">HotelTonight</NavLink>
            <NavLink to="">Airbnb for Work</NavLink>
            <NavLink to="">Nhờ có Host, mọi điều có thể</NavLink>
            <NavLink to="">Cơ hội nghề nghiệp</NavLink>
            <NavLink to="">Thư của nhà sáng lập</NavLink>
          </div>
          <div className='flex-1'>
            <p className="font-700 text-20">
              <span>CỘNG ĐỒNG</span>
            </p>
            <NavLink to="">Sự đa dạng và cảm giác thân thuộc</NavLink>
            <NavLink to="">Tiện nghi phù hợp cho người khuyết tật</NavLink>
            <NavLink to="">Đối tác liên kết Airbnb</NavLink>
            <NavLink to="">Chỗ ở cho tuyến đầu</NavLink>
            <NavLink to="">Lượt giới thiệu của khách</NavLink>
            <NavLink to="">Airbnb.org</NavLink>
          </div>
          <div className='flex-1'>
            <p className="font-700 text-20">
              <span>ĐÓN TIẾP KHÁCH</span>
            </p>
            <NavLink to="">Cho thuê nhà</NavLink>
            <NavLink to="">Tổ chức trải nghiệm trực tuyến</NavLink>
            <NavLink to="">Tổ chức trả nghiệm</NavLink>
            <NavLink to="">Đón khách có trách nhiệm</NavLink>
            <NavLink to="">Trung tâm tài nguyên</NavLink>
            <NavLink to="">Trung tâm cộng đồng</NavLink>
          </div>
          <div className='flex-1'>
            <p className="font-700 text-20">
              <span>HỖ TRỢ</span>
            </p>
            <NavLink to="">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</NavLink>
            <NavLink to="">Trung tâm trợ giúp</NavLink>
            <NavLink to="">Các tùy chọn hủy</NavLink>
            <NavLink to="">Hỗ trợ khu dân cư</NavLink>
            <NavLink to="">Tin cậy và an toàn</NavLink>
          </div>
        </div>

        <div className='border-t border-slate-600  my-[20px] pt-16 flex justify-between '>
          <div>
            <p>&copy; 2021 Airbnb, Inc, All rights reserved &#8231; Quyền riêng tư &#8231; Điều khoản &#8231; Sơ đồ trang web</p>
          </div>
          <div className="social">
            <NavLink to="" target="_blank" className='nav !text-16 mr-16'>
              <i className="fa-solid fa-globe"></i>
              <span className='pl-4'>Tiếng Việt (VN)</span>
            </NavLink>
            <NavLink to="" target="_blank" className='nav !text-16 mr-16'>
              <i className="fa-solid fa-dollar-sign"></i>
              <span className='pl-4'>USD</span>
            </NavLink>
            <NavLink to="https://www.facebook.com" target="_blank" className='nav'>
              <i className="fa-brands fa-facebook"></i>
            </NavLink>
            <NavLink to="https://www.twitter.com" target="_blank" className='nav'>
              <i className="fa-brands fa-twitter"></i>
            </NavLink>
            <NavLink to="https://www.instagram.com" target="_blank" className='nav'>
              <i className="fa-brands fa-instagram"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.footer`
    .footer-content {
        max-width: var(--max-width);
        margin: auto;
        padding: 5px 80px;

        .social {
            font-size: 16px;
            color: #111;
            display: flex;
            gap: 20px;
            .nav {
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover {
                    color: var(--primary-color);
                }
            }
        }

        .info {
            a {
                transition: all 0.3s ease-in-out;
                display: block;
                margin-top: 8px;
                &:hover {
                    color: var(--primary-color);
                    text-shadow: var(--primary-color) 0 0 1px;
                }
            }
        }
    }
`