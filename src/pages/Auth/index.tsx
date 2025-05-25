import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react"
import { useAuthContext } from "../../providers/AuthProvider"
import logo from "../../assets/simhioxlogo.png"

import * as Styled from "./styles"
import { loginApi, registerApi } from "../../api/auth"

export const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { login, isAuthenticated, isLoading } = useAuthContext()
    const navigate = useNavigate()
    const location = useLocation()

    // Redirecionar se já estiver logado
    useEffect(() => {
        if (isAuthenticated && !isLoading) {
            const from = (location.state as any)?.from?.pathname || "/"
            navigate(from, { replace: true })
        }
    }, [isAuthenticated, isLoading, navigate, location])

    // Função para alternar entre login e registro
    const toggleAuthMode = () => {
        setIsLogin(!isLogin)
        setErrors({}) // Limpar erros ao alternar
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }) // Limpar formulário ao alternar
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        // Validação de email
        if (!formData.email) {
            newErrors.email = "Email é obrigatório"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido"
        }

        // Validação de senha
        if (!formData.password) {
            newErrors.password = "Senha é obrigatória"
        } else if (formData.password.length < 6) {
            newErrors.password = "Senha deve ter pelo menos 6 caracteres"
        }

        // Validações específicas para registro
        if (!isLogin) {
            if (!formData.name) {
                newErrors.name = "Nome é obrigatório"
            } else if (formData.name.length < 2) {
                newErrors.name = "Nome deve ter pelo menos 2 caracteres"
            }

            if (!formData.confirmPassword) {
                newErrors.confirmPassword = "Confirmação de senha é obrigatória"
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Senhas não coincidem"
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        setErrors({})

        try {
            if (isLogin) {
                const res = await loginApi(formData.email, formData.password);
                login(res.data)
            } else {
                await registerApi(formData.name, formData.email, formData.password)
                toggleAuthMode()
            }
        } catch (error: any) {
            console.log(error)
            setErrors({
                submit: error.response.data.message
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isLoading) {
        return (
            <Styled.AuthContainer>
                <Styled.LoadingContainer>
                    <Styled.LoadingSpinner />
                    <p>Verificando autenticação...</p>
                </Styled.LoadingContainer>
            </Styled.AuthContainer>
        )
    }

    return (
        <Styled.AuthContainer>
            <Styled.BackgroundOverlay />

            <Styled.AuthContent>
                <Styled.BackButton onClick={() => navigate("/")}>
                    <ArrowLeft size={20} />
                    <span>Voltar ao início</span>
                </Styled.BackButton>

                <Styled.AuthCard>
                    <Styled.AuthHeader>
                        <Styled.ContainerLogo onClick={() => navigate("/")}>
                            <Styled.Logo src={logo} />
                            <p>films</p>
                        </Styled.ContainerLogo>

                        <Styled.AuthTitle>{isLogin ? "Entrar" : "Criar Conta"}</Styled.AuthTitle>
                        <Styled.AuthSubtitle>
                            {isLogin ? "Acesse sua conta para continuar assistindo" : "Crie sua conta e comece a assistir agora"}
                        </Styled.AuthSubtitle>
                    </Styled.AuthHeader>

                    <Styled.AuthForm >
                        {!isLogin && (
                            <Styled.InputGroup>
                                <Styled.InputContainer hasError={!!errors.name}>
                                    <Styled.InputIcon>
                                        <User size={20} />
                                    </Styled.InputIcon>
                                    <Styled.Input
                                        type="text"
                                        name="name"
                                        placeholder="Nome completo"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        hasError={!!errors.name}
                                    />
                                </Styled.InputContainer>
                                {errors.name && <Styled.ErrorMessage>{errors.name}</Styled.ErrorMessage>}
                            </Styled.InputGroup>
                        )}

                        <Styled.InputGroup>
                            <Styled.InputContainer hasError={!!errors.email}>
                                <Styled.InputIcon>
                                    <Mail size={20} />
                                </Styled.InputIcon>
                                <Styled.Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    hasError={!!errors.email}
                                />
                            </Styled.InputContainer>
                            {errors.email && <Styled.ErrorMessage>{errors.email}</Styled.ErrorMessage>}
                        </Styled.InputGroup>

                        <Styled.InputGroup>
                            <Styled.InputContainer hasError={!!errors.password}>
                                <Styled.InputIcon>
                                    <Lock size={20} />
                                </Styled.InputIcon>
                                <Styled.Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Senha"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    hasError={!!errors.password}
                                />
                                <Styled.PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </Styled.PasswordToggle>
                            </Styled.InputContainer>
                            {errors.password && <Styled.ErrorMessage>{errors.password}</Styled.ErrorMessage>}
                        </Styled.InputGroup>

                        {!isLogin && (
                            <Styled.InputGroup>
                                <Styled.InputContainer hasError={!!errors.confirmPassword}>
                                    <Styled.InputIcon>
                                        <Lock size={20} />
                                    </Styled.InputIcon>
                                    <Styled.Input
                                        type={"password"}
                                        name="confirmPassword"
                                        placeholder="Confirmar senha"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        hasError={!!errors.confirmPassword}
                                    />
                                </Styled.InputContainer>
                                {errors.confirmPassword && <Styled.ErrorMessage>{errors.confirmPassword}</Styled.ErrorMessage>}
                            </Styled.InputGroup>
                        )}

                        {errors.submit && <Styled.ErrorMessage>{errors.submit}</Styled.ErrorMessage>}

                        <Styled.SubmitButton onClick={handleSubmit}>
                            {isSubmitting ? (
                                <>
                                    <Styled.ButtonSpinner />
                                    <span>{isLogin ? "Entrando..." : "Criando conta..."}</span>
                                </>
                            ) : (
                                <span>{isLogin ? "Entrar" : "Criar Conta"}</span>
                            )}
                        </Styled.SubmitButton>
                    </Styled.AuthForm>

                    <Styled.AuthToggle>
                        {isLogin ? (
                            <Styled.ForgotPassword>
                                Não tem uma conta?{" "}
                                <button type="button" onClick={toggleAuthMode}>
                                    Criar conta
                                </button>
                            </Styled.ForgotPassword>
                        ) : (
                            <Styled.ForgotPassword>
                                Já tem uma conta?{" "}
                                <button type="button" onClick={toggleAuthMode}>
                                    Fazer login
                                </button>
                            </Styled.ForgotPassword>
                        )}
                    </Styled.AuthToggle>
                </Styled.AuthCard>
            </Styled.AuthContent>
        </Styled.AuthContainer>
    )
}
