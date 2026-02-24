import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password, image, fullName } = data;

    setToast({ type: "", message: "" });
    setLoading(true);

    try {
      await createUser(email, password);

      await updateUserProfile(fullName, image);

      if (setUser) {
        setUser({
          email,
          displayName: fullName,
          photoURL: image,
        });
      }

      setToast({
        type: "success",
        message: "Registration successful!",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      let message = "Registration failed";

      if (error.code === "auth/email-already-in-use") {
        message = "This email is already registered. Please login instead.";
      } else if (error.code === "auth/invalid-email") {
        message = "Invalid email address.";
      } else if (error.code === "auth/weak-password") {
        message = "Password must be at least 6 characters.";
      }

      setToast({
        type: "error",
        message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-purple-100">
      <div className="flex w-full max-w-4xl overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-200 relative">

        {/* Left Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="https://i.ibb.co/2g7Nxq3/books-2596809-1920.jpg"
            alt="Books"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full px-8 py-10 lg:w-1/2 relative">

          <div className="flex justify-center mb-4">
            <img
              className="w-16"
              src="https://i.ibb.co/4dDWk3Q/books.png"
              alt="Logo"
            />
          </div>

          <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">
            Register Here!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-300"
                {...register("fullName", {
                  required: "Full Name is required",
                })}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-300"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Image URL */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                placeholder="Profile Image URL"
                className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-300"
                {...register("image")}
              />
            </div>

            {/* Password */}
            <div className="relative flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered rounded-xl border-gray-300 pr-12 w-full focus:ring-2 focus:ring-purple-300"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                <span
                  className="absolute right-3 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold transition duration-300 disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-2">
              Already have an account?{" "}
              <Link
                className="text-purple-600 font-bold hover:underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>

          {/* Toast */}
          {toast.message && (
            <div
              className={`absolute top-5 right-5 px-6 py-3 rounded-xl text-white font-semibold ${
                toast.type === "error"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            >
              {toast.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;