import LoginForm from "@/components/forms/LoginForm";

export default function Login() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
      <LoginForm redirectTo="/dashboard" />
    </div>
  );
}
