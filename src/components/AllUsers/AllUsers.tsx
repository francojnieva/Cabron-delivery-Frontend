import { useEffect, useState } from 'react'
import { clientAxios } from '../../utils/axios'
import { BiSolidTrashAlt } from 'react-icons/bi';

type User = {
    _id: string;
    username: string;
    email: string;
    password: string;
    rol: string;
    blocked: boolean;
    __v: number;
    cart: Cart[];
}

type Cart = {
    _id: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    __v: number;
    quantity: number;
}

const AllUsers = () => {
    const token = localStorage.getItem('token')
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingDelete, setLoadingDelete] = useState<string | null>(null)

    const fetchData = async () => {
        try {
            const { data } = await clientAxios.get('/api/usuarios',
                {
                    headers: {
                        "auth": `${token}`
                    }
                }
            )
            setUsers(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteUser = async (userId: string) => {
        try {
            setLoadingDelete(userId)
            await clientAxios.delete(`/api/usuario?id=${userId}`)
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId))
        } catch (error) {
            console.log(error)
            setLoadingDelete(null)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <section className=' flex items-center space-y-3'>
            {loading ? <p className="loading mx-auto loading-spinner loading-md"></p>
                :
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user) =>
                                <tr key={user._id} className='transition-all hover:bg-[#ffd256]'>
                                    <td>{user._id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td className=' text-center'>
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="text-red-500 text-lg"
                                        >
                                            {loadingDelete === user._id ? 
                                            <span className="loading loading-spinner loading-xs"></span>
                                             : 
                                            <BiSolidTrashAlt />
                                            }
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </section>
    )
}

export default AllUsers