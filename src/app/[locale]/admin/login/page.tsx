"use client";
import React, { FormEvent, useEffect, useState, useRef } from "react";
import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { redirect, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";



export default function LoginPage() {
	const t = useTranslations("AdminLogin");
	const otpResendRef = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		const { accessToken } = parseCookies();
		if (accessToken) {
			redirect("/admin/dashboard");
		}
	}, []);
	const router = useRouter();
	const [step, setStep] = useState<"login" | "otp">("login");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [otp, setOtp] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [otpTimeout, setOtpTimeout] = useState(false);
	const [timer, setTimer] = useState(60);
	const [shakeTimer, setShakeTimer] = useState(false);

	// Animation: shake effect for resend OTP button and timer
	useEffect(() => {
		if (shakeTimer) {
			if (otpResendRef.current) {
				otpResendRef.current.classList.add("animate-shake-red");
			}
			const timeout = setTimeout(() => {
				if (otpResendRef.current) {
					otpResendRef.current.classList.remove("animate-shake-red");
				}
				setShakeTimer(false);
			}, 600);
			return () => clearTimeout(timeout);
		}
	}, [shakeTimer]);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (step === "otp" && otpTimeout) {
			interval = setInterval(() => {
				setTimer((prev) => {
					if (prev <= 1) {
						setOtpTimeout(false);
						clearInterval(interval);
						return 60;
					}
					return prev - 1;
				});
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [step, otpTimeout]);

		const handleLogin = async (e: FormEvent) => {
			e.preventDefault();
			setLoading(true);
			setError("");
			try {
				const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login-otp`, { email, password });
				if (res.status === 201) {
					setStep("otp");
					setOtpTimeout(true);
					toast.success(t("otpSent"));
				} else {
					setError(res.data?.message || t("loginFailed"));
					toast.error(res.data?.message || t("loginFailed"));
				}
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					setError(err.response?.data?.message || t("serverError"));
					toast.error(err.response?.data?.message || t("serverError"));
				} else {
					setError(t("serverError"));
					toast.error(t("serverError"));
				}
			}
			setLoading(false);
		};

		const handleVerifyOtp = async (e: FormEvent) => {
			e.preventDefault();
			setLoading(true);
			setError("");
			try {
				const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`, {
					email,
					code: otp,
				});
				const accessToken = res.data?.access_token;
				if ((res.status === 200 || res.status === 201) && accessToken) {
					setCookie(null, "accessToken", accessToken, {path: '/'});
					toast.success(t("loginSuccess"));
					window.dispatchEvent(new Event("user-profile-refresh"))
					router.push("/admin/dashboard");
				} else {
					setError(t("otpFailed"));
					toast.error(res.data?.message || t("otpFailed"));
				}
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					setError(err.response?.data?.message || t("serverError"));
					toast.error(err.response?.data?.message || t("serverError"));
				} else {
					setError(t("serverError"));
					toast.error(t("serverError"));
				}
			}
			setLoading(false);
		};

		const handleResendOtp = async () => {
			if (otpTimeout) {
				setShakeTimer(true);
				return;
			}
			setOtpTimeout(true);
			setTimer(60);
			setError("");
			try {
				await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login-otp`, { email, password });
				toast.success(t("otpResent"));
			} catch (err: unknown) {
				setError(t("otpResendFailed"));
				toast.error(t("otpResendFailed"));
			}
		};

			return (
					<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
						<ToastContainer position="top-right" autoClose={3000} />
						<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in">
							  <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700 drop-shadow animate-slide-down">{t('adminLoginTitle')}</h2>
							{step === "login" && (
								<form onSubmit={handleLogin} className="space-y-6">
													<input
														type="email"
														placeholder={t('emailPlaceholder')}
														value={email}
														onChange={e => setEmail(e.target.value)}
														required
														className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 focus:scale-105 focus:shadow-xl animate-input-pop"
													/>
													<input
														type="password"
														placeholder={t('passwordPlaceholder')}
														value={password}
														onChange={e => setPassword(e.target.value)}
														required
														className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 focus:scale-105 focus:shadow-xl animate-input-pop"
													/>
													<button
														type="submit"
														disabled={loading}
														className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-black py-3 rounded-lg font-bold text-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 active:scale-95 animate-btn-pop"
													>
														{loading ? t('loggingIn') : t('loginBtn')}
													</button>
									{error && <div className="text-red-500 text-sm mt-2 animate-shake">{error}</div>}
								</form>
							)}
							{step === "otp" && (
								<form onSubmit={handleVerifyOtp} className="space-y-6">
													<input
														type="text"
														placeholder={t('otpPlaceholder')}
														value={otp}
														onChange={e => setOtp(e.target.value)}
														required
														className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105 focus:shadow-xl animate-input-pop"
													/>
													<button
														type="submit"
														disabled={loading}
														className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-black py-3 rounded-lg font-bold text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 active:scale-95 animate-btn-pop"
													>
														{loading ? t('verifying') : t('verifyBtn')}
													</button>
									<div className="flex items-center justify-between">
										<button
											type="button"
											onClick={handleResendOtp}
											ref={otpResendRef}
											className={`text-blue-600 hover:underline text-sm font-semibold transition-all duration-200 ${otpTimeout ? 'cursor-not-allowed' : ''}`}
										>
											{t('resendBtn')}
										</button>
										{otpTimeout && (
											<span className={`text-xs text-red-500 font-bold transition ${shakeTimer ? "animate-shake-red" : "animate-pulse"}`}>{timer} {t('seconds')}</span>
										)}
									</div>
									{error && <div className="text-red-500 text-sm mt-2 animate-shake">{error}</div>}
								</form>
							)}
						</div>
						{/* Animations CSS */}
						<style jsx global>{`
							@keyframes shake {
								10%, 90% { transform: translateX(-2px); }
								20%, 80% { transform: translateX(4px); }
								30%, 50%, 70% { transform: translateX(-8px); }
								40%, 60% { transform: translateX(8px); }
							}
							.animate-shake {
								animation: shake 0.5s;
							}
							.animate-shake-red {
								animation: shake 0.6s;
								color: #dc2626 !important;
							}
							@keyframes fadeIn {
								from { opacity: 0; transform: scale(0.95); }
								to { opacity: 1; transform: scale(1); }
							}
							.animate-fade-in {
								animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
							}
							@keyframes slideDown {
								from { opacity: 0; transform: translateY(-30px); }
								to { opacity: 1; transform: translateY(0); }
							}
							.animate-slide-down {
								animation: slideDown 0.7s cubic-bezier(0.4,0,0.2,1);
							}
							@keyframes btnPop {
								0% { transform: scale(0.95); }
								60% { transform: scale(1.05); }
								100% { transform: scale(1); }
							}
							.animate-btn-pop {
								animation: btnPop 0.5s;
							}
							@keyframes inputPop {
								0% { transform: scale(0.97); }
								60% { transform: scale(1.03); }
								100% { transform: scale(1); }
							}
							.animate-input-pop {
								animation: inputPop 0.5s;
							}
						`}</style>
					</div>
				);
}
