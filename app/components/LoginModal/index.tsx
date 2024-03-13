'use client'
import styles from './index.module.css'
import 'swiper/css';
import classNames from 'classnames';
import { Checkbox, Flex, Modal } from 'antd';
import { useRequest } from 'ahooks';
import { checkLogin, getLoginQrCode, getUserInfo } from '@/app/api/user';
import Loading from '@/app/loading';
import { useCallback, useContext, useEffect, useState } from 'react';
import { TOKEN_KEY } from '@/app/constant';
import { GlobalContext } from '@/app/context';

let intervalId: any = null;

interface LoginModal {
    isAuth: boolean
}

interface QrCodeProps {
    url: string;
    scene: string;
}
const radiusClassName = (index: number) => classNames({
    [styles['border-radius']]: true,
    [styles[`border-radius-${index}`]]: true
});

const LoginModal = (props: LoginModal) => {
    const [loading, setLoading] = useState(false);
    const [qrcode, setQrcode] = useState<QrCodeProps>();
    const { setShowLoadingModal, showLoginModal } = useContext(GlobalContext)

    const handleOk = () => {
        setShowLoadingModal(false);
    };

    const handleCancel = () => {
        setShowLoadingModal(false);
    };

    const init = useCallback(() => {
        if (!props.isAuth) {
            setShowLoadingModal(true);
            setLoading(true)
            getLoginQrCode().then((res: QrCodeProps) => {
                setQrcode(res)
                // 设置定时器，每隔一段时间检测一次用户登录状态
                intervalId = setInterval(() => {
                    checkLoginStatus(res);
                }, 1000); // 1000毫秒
            }).finally(() => {
                setLoading(false)
            })
        }else{
            clearInterval(intervalId);
        }
    }, [props.isAuth])

    useEffect(() => {
        init();
        // 在组件卸载时清除定时器
        return () => clearInterval(intervalId);
    }, [props.isAuth])

    const checkLoginStatus = useCallback((res: QrCodeProps) => {
        if (res?.scene) {
            checkLogin(res?.scene).then((resp: any) => {
                if (resp.isSuccess) {
                    localStorage.setItem(TOKEN_KEY, resp.token)
                    clearInterval(intervalId);
                    setShowLoadingModal(false);
                    window.location.reload();
                }
            });
        }
    }, []);



    return (

        <Modal open={showLoginModal} width={400} footer={null} closeIcon={null} onOk={handleOk} onCancel={handleCancel}>
            <div className={styles.container}>
                <div className={styles['login-tip-container']}>
                    <span className={styles['wx-icon']}></span>
                    <p className={styles['wx-login-tip']}>打开微信扫一扫，快速登录/注册</p>
                </div>
                <div className={styles['inner-container']}>
                    {new Array(4).fill(1).map((item, index) => <div key={index} className={radiusClassName(index)}></div>)}
                    <div className={styles['qr-container']}>
                        {loading ? <Loading /> : <img style={{ zIndex: 2 }} width={'100%'} src={qrcode?.url} alt="" />}
                    </div>
                </div>
                <p className={styles['tips-text']} style={{ marginBottom: '5px' }}>首次扫码关注将自动注册新账号</p>
                <Checkbox style={{ marginLeft: '10px', marginBottom: '30px' }} checked={true}><Flex justify={'center'} align={'center'}>
                    <span className={styles['tips-text']}>同意</span>
                    <span className={styles['tips-text-primary']}>《用户协议》</span>
                    <span className={styles['tips-text']}>和</span>
                    <span className={styles['tips-text-primary']}>《隐私协议》</span>
                </Flex></Checkbox>

            </div>
        </Modal>
    );
};

export default LoginModal