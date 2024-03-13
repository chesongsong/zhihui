import { getLoginQrCode } from "@/app/api/user";
import Loading from "@/app/loading";
import { useRequest } from "ahooks";

export interface QrCodeProps {
    url: string;
    scene: string;
}

const LoginQrCode = () => {
    const { data, loading } = useRequest<QrCodeProps, any>(getLoginQrCode);
    if (loading) {
        return <Loading />
    }
    return <img style={{ zIndex: 2 }} width={'100%'} src={data?.url} alt="" />
}

export default LoginQrCode;