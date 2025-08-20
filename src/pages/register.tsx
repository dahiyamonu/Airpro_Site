import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  const [step, setStep] = useState<"signup" | "otp">("signup");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate backend OTP send API
    console.log("Send OTP to:", email);
    setStep("otp");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate backend OTP verify API
    console.log("Verify OTP:", otp);
    alert("✅ Signup successful!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 rounded-2xl bg-white/90 backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            {step === "signup" ? "Create Account" : "Verify OTP"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === "signup" && (
            <form
              onSubmit={handleSendOtp}
              className="flex flex-col gap-4 bootstrap-signup"
            >
              <div>
                <Label htmlFor="email">Email / Phone</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email or phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                  required
                />
              </div>
              <Button type="submit" className="btn btn-primary w-100">
                Send OTP
              </Button>
            </form>
          )}

          {step === "otp" && (
            <form
              onSubmit={handleVerifyOtp}
              className="flex flex-col gap-4 bootstrap-otp"
            >
              <div>
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="form-control text-center tracking-widest"
                  required
                />
              </div>
              <Button type="submit" className="btn btn-success w-100">
                Verify & Sign Up
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="text-sm text-gray-500"
                onClick={() => setStep("signup")}
              >
                ⬅ Back to Signup
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
