import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    //console.log(props.currentUser)

    const {register, formState:{errors}, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) =>{
        console.log(data)
        data.id=props.currentUser.id

        props.updateUser(props.currentUser.id, data)

        e.target.reset()
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                type="text" 
                name="name"
                {...register(
                    "name",
                    {
                        required: {value: true, message: 'campo obligatorio'}
                    }
                )}
            />
            <span className="text-danger">
                {errors?.name?.message}
            </span>
            <label>Username</label>
            <input 
                type="text" 
                name="username"
                {...register(
                    "username",
                    {
                        required: {value: true, message: 'campo obligatorio'}
                    }
                )}
            />
            <span>
                {errors?.username?.message}
            </span><br/>
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm