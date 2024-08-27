import React, { useContext, useEffect, useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import { BASE_URL } from '../../../API/Api';
import { token, user } from '../../../App';
import { Link } from 'react-router-dom';
import demoPd from "../../../assets/images/pd1.png"
import Loader from '../../../PageComponents/Loader';
import { formContext } from '../../../ContextApi/ContextApi';

export default function PageList() {
    const [isLoading, setIsLoading] = useState(false);
    const { getUser, userInfo } = useContext(formContext)
    const { user, page } = userInfo

    useEffect(() => {

        setIsLoading(true)
        const getData = async () => {
            try {
                await getUser()
            } catch (error) {
                console.log(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        getData()

    }, []);

    if (isLoading) {
        return <Loader />
    }


    return (
        <DashboardLayout>
            <p>Total Page : {page.length}</p>
            <div className=' w-full h-[250px bg-gray-100 px-10 py-5 text-center my-5'>
                <h3>User : {user.name}</h3>
                <p>Business Name : {user.username}</p>
                <p>Email : {user.email}</p>
            </div>
            <div className='flex items-center justify-between flex-wrap'>

                {
                    page ? (
                        page.map(page => (
                            <SinglePage key={page._id} pageData={page} />
                        ))
                    ) : (
                        <p>No pages available</p>
                    )
                }

            </div>

        </DashboardLayout>
    );
}


const SinglePage = (props) => {

    const { _id, information, product } = props.pageData
    const { productName, productType } = information;
    const { image } = product;

    return (
        <div key={_id}
            className='w-[31%] my-3 border p-2 hover:shadow-md bg-gray-50'
        >
            <img src={image || demoPd} className='w-[70%] h-[150px] m-auto border' alt={productName} />
            <div className=' my-3'>
                <p>{productName}</p>
                <p>{productType}</p>
            </div>
            <Link to={`/page/${user.username}/${_id}`} className=' w-full py-2 bg-gray-200 inline-block text-center my-3'>
                full page
            </Link>
        </div>
    )
}