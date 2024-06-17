import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import styless from '../../pages/MyPlayer/MyPlayer.module.scss';
import Images from '../Image';
import Loading from '../../pages/Loading/Loading';
import { ImgFooter } from '../../assets/images/Footer';
import { combinedStatusSelector } from '../../redux/selector';

const cx = classNames.bind(styles);
const cxx = classNames.bind(styless);

function Footer() {
    const { isLoadingPage } = useSelector(combinedStatusSelector);
    const renderPartner = () => {
        const result = ImgFooter.map((img, index) => {
            return isLoadingPage ? (
                <Loading key={index} styles={{ height: '8vh', maxWidth: '10vw' }} />
            ) : (
                <figure className={cx('item_partner')} key={index}>
                    <Images type={cx('img_partner')} src={img} />
                </figure>
            );
        });
        return result;
    };
    return (
        <div>
        <div className={cx('wrapper')}>
            <h3 className={cx('title_footer')}>ĐỐI TÁC ÂM NHẠC</h3>
            <div className={cx('container')}>{renderPartner()}</div>
        </div>

        <div className={cxx('container_copyright_mine')} id={cxx('container_copyright_mine_khampha')}>
                <h1 className={cxx('copyright_mine')}>&copy; Mọi Bản Quyền Thuộc Về <a href='https://github.com/hvtienprotv84'><span className={cxx('copyright_mine_myname')}>Huỳnh Vĩnh Tiến</span></a></h1>
        </div>
        
        </div>
        
    );
}

export default Footer;
