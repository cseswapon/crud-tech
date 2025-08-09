import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?_gl=1*e0qto*_ga*NzYxNzgyNDY2LjE3NTQ3MzY1MzI.*_ga_8JE65Q40S6*czE3NTQ3MzY1MzEkbzEkZzAkdDE3NTQ3MzY1MzEkajYwJGwwJGgw')] bg-cover bg-center flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default Login;
