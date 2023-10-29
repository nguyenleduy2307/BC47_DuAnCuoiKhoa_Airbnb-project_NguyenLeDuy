import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import qs from 'qs'


export const useQueryUrl = () => {

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const location = useLocation();

    const queryParams = Object.fromEntries(searchParams)

    const setQueryParam = (param) => {
        const queryString = qs.stringify(param, {
            addQueryPrefix: true,
        })

        navigate(location.pathname + queryString)
    }

    return [queryParams, setQueryParam]

}
