"use client";
import { useState } from "react";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      body: JSON.stringify({ phone }),
    });
    if (res.ok) {
      setStep("otp");
      setMessage("OTP sent successfully ✅");
    } else {
      setMessage("Failed to send OTP ❌");
    }
  };

  const handleVerifyOtp = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ phone, otp }),
    });
    if (res.ok) {
      setMessage("✅ Login Successful");
    } else {
      setMessage("❌ Invalid OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="card shadow-lg rounded-2xl p-5 w-full max-w-md bg-white">
        <h2 className="text-center text-2xl font-bold mb-4 text-dark">Login with OTP</h2>
        {message && <p className="text-center text-sm text-success">{message}</p>}

        {step === "phone" && (
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              className="btn btn-primary w-100 mt-3 rounded-lg py-2 text-white"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
        )}

        {step === "otp" && (
          <div className="mb-3">
            <label className="form-label">Enter OTP</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className="btn btn-success w-100 mt-3 rounded-lg py-2 text-white"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
