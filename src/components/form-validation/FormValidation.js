import React, { useState } from "react";
import { useForm } from "react-hook-form"
import "./FormValidation.css"

const FormValidation = () => {
  const [successMsg, setSuccessMsg] = useState("");
  // React Hook Form (RHF) example, you don’t need useState like const [form, setForm] = useState() because RHF handles all the form state internally.
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error("Network resposne is not ok")
      }
      setSuccessMsg("Registration successful!");
      reset();

      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (error) {
      console.log("Something went wrong!")
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            {...register("name", {            // Register "name" field with validation rules
              required: "Name is required",  // Name is required with this error message
              minLength: {                   // Minimum length validation
                value: 3,
                message: "Name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,   // Only alphabets allowed
                message: "Only alphabets are allowed"
              }
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          {/* <input name="email" type="email" /> */}
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email"
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password can have maximum 20 characters"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <button className="submit-form" type="submit">Submit</button>
      </form>
      {successMsg && (
        <div className="success-tooltip">
          {successMsg}
        </div>
      )}
    </>
  );
};

export default FormValidation;
