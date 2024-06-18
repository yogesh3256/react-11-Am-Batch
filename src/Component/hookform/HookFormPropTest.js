// Assume continuation from the previous example

import { useForm } from "react-hook-form";

const FormExample = () => {
    const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
      mode: 'onChange' // Validate on change
    });
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <p>Password is required</p>}
  
        <input type="password" {...register('confirmPassword', { required: true })} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
  
        <button type="submit" disabled={!isDirty}>Submit</button>
      </form>
    );
  };
  
  export default FormExample;
  