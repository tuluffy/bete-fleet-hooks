import {useLocation, useParams, useNavigate, useMatches} from 'react-router-dom';
import {useMemo} from 'react';
import queryString from 'query-string';

const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const match = useMatches();

    return useMemo(() => {
        return {
            push: navigate,
            pathname: location.pathname,
            query: {
                ...queryString.parse(location.search),
                ...params,
            },
            match,
            location,
            navigate,
        };
    }, [params, location, navigate, match]);
};

export { useRouter };