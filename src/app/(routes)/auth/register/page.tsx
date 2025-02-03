import RegisterForm from "@/components/forms/RegisterForm";

export default function Register() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">Register</h1>
      <RegisterForm redirectTo="/login" />
    </div>
  );
}
