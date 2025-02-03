// components/forms/RegisterForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";

interface RegisterFormProps {
  redirectTo?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  redirectTo = "/dashboard",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Hash password using bcrypt
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Add user to your Prisma database
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: hashedPassword, name }),
    });

    if (!response.ok) {
      setError("Registration failed.");
    } else {
      // Log user in immediately after registering
      const loginResult = await signIn("credentials", { email, password });
      if (loginResult?.error) {
        setError("Failed to log in after registration.");
      } else {
        router.push(redirectTo);
      }
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
