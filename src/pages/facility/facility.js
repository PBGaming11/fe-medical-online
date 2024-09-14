import classNames from 'classnames/bind';
import style from './facility.module.scss';
import { FaSearch } from "react-icons/fa";
import logo from '../../content/pic1.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";


const cx = classNames.bind(style);

function Facility() {
  return(
    <div className={cx('container')}>
      <div className={cx('title')}>
        <div className={cx('nav-link')}>
          <ul>
            <li><a href='#'>Trang chủ /</a></li>
            <li><a href='#'>Cơ sở y tế</a></li>
          </ul>
        </div>
        <div className={cx('big-title')}>
          <div className={cx('bib-title-head')}>
            <h1 className={cx('head-main-title')}>Cơ sở y tế</h1>
            <div className={cx('head-sub-title')}>Với những cơ sở Y Tế hàng đầu sẽ giúp trải nghiệm khám, chữa bệnh của bạn tốt hơn</div>
          </div>
          <div className={cx('bib-title-body')}>
              <div className={cx('body-form')}>
                <div className={cx('body-form-content')}>
                  <div className={cx('body-form-item')}>
                    <div className={cx('body-form-icon')}><FaSearch/></div>
                    <div className={cx('body-form-input')}>
                      <div className={cx('body-form-inputItem')}>
                        <span className={cx('input-form')}>
                          <input placeholder='Tìm kiếm' type='text'></input>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <ul className={cx('nav-menu')}>
          <li><button>Bệnh viện công(20)</button></li>
          <li><button>Bệnh viên tư(9)</button></li>
          <li><button>Phòng khám(6)</button></li>
          <li><button>Phòng mạch(17)</button></li>
          <li><button>Xét nghiệm(3)</button></li>
          <li><button>Y tế tại nhà(2)</button></li>
          <li><button>Tiêm chủng(25)</button></li>
        </ul>
      </div>
      <div className={cx('content ex')}>
        <div className={cx('content-item')}>
          <div className={cx('row','flex-row')}>
            <div className={cx('left-content')}>
              <div className={cx('content-detail')}>
                <div className={cx('conent-data')}>
                  <div className={cx('content-image')}><span><span><img src={logo}/></span></span></div>
                  <div className={cx('content-body')}>
                    <div className={cx('content-text')}>
                      <h3 className={cx('content-title-text')}>Phòng Khám Đa Khoa Pháp Anh</h3>
                      <p className={cx('content-address')}><IoLocationOutline/>222-224-226 Nguyễn Duy Dương, Phường 4, Quận 10, TP.HCM</p>
                      <p className={cx('content-ratting')}>(4,7)
                        <ul>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className={cx('content-button-ex')}>
                      <button><span>Xem chi tiết</span></button>
                      <button className={cx('content-button-color')}><span>Đặt khám ngay </span></button>
                    </div>
                </div>
              </div>
              <div className={cx('content-detail')}>
                <div className={cx('conent-data')}>
                  <div className={cx('content-image')}><span><span><img src={logo}/></span></span></div>
                  <div className={cx('content-body')}>
                    <div className={cx('content-text')}>
                      <h3 className={cx('content-title-text')}>Phòng Khám Đa Khoa Pháp Anh</h3>
                      <p className={cx('content-address')}><IoLocationOutline/>222-224-226 Nguyễn Duy Dương, Phường 4, Quận 10, TP.HCM</p>
                      <p className={cx('content-ratting')}>(4,7)
                        <ul>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                          <li><IoStar/></li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className={cx('content-button-ex')}>
                      <button><span>Xem chi tiết</span></button>
                      <button className={cx('content-button-color')}><span>Đặt khám ngay </span></button>
                    </div>
                </div>
              </div>
            </div>
            <div className={cx('right-content')}>
              <div>asadsadasdasdasdasda</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //className={cx('')}
  );
}

export default Facility;
