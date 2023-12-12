import { useRouteError } from "react-router"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return <div>
        <h1>Đã có lỗi xảy ra</h1>
        <p>{error.statusText || error.message}</p>
    </div>
}

export default ErrorPage