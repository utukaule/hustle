import { useParams } from 'react-router-dom'

export const UserDetailes = () => {
    const { id,first_name } = useParams();
    
    return <div>
        <h3>user id : {id}. {first_name}</h3>
    </div>
}