"use client";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <div className="grid place-items-center">
            <button
                onClick={() => signIn("google")}
                className="border rounded p-2"
            >
                Login with Google
            </button>
        </div>
    );
}
