import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Tài khoản giả định
  const fakeAccount = {
    username: "admin",
    password: "1234",
  };

  // Trạng thái lưu thông tin nhập từ người dùng
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Trạng thái lỗi
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // Cập nhật thông tin nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Xóa lỗi khi người dùng nhập lại
  };

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu nhập
    let hasError = false;
    let newErrors = { username: "", password: "" };

    if (!credentials.username) {
      newErrors.username = "아이디를 입력해주세요."; // "Vui lòng nhập tên đăng nhập."
      hasError = true;
    }
    if (!credentials.password) {
      newErrors.password = "비밀번호를 입력해주세요."; // "Vui lòng nhập mật khẩu."
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Kiểm tra thông tin tài khoản giả định
    if (
      credentials.username === fakeAccount.username &&
      credentials.password === fakeAccount.password
    ) {
      navigate("/dashboard"); // Điều hướng đến trang Dashboard
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background.png')", // Đảm bảo ảnh nằm trong thư mục public
      }}
    >
      <div className="bg-[#1E2336] bg-opacity-90 rounded-lg p-8 w-96 shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="Ev BET Logo"
            className="w-24 h-auto"
          />
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="아이디"
              className={`w-full px-4 py-2 bg-[#1A1D2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                errors.username && "border border-red-500"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="비밀번호"
              className={`w-full px-4 py-2 bg-[#1A1D2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                errors.password && "border border-red-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <input
              id="remember"
              type="checkbox"
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-800 rounded border-gray-700 focus:ring-blue-500"
            />
            <label htmlFor="remember">아이디 기억하기</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
          >
            로그인
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4 text-sm hover:underline hover:text-blue-500">
          텔레그램: evbet89
        </p>
      </div>
    </div>
  );
};

export default Login;
