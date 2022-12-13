/* eslint-disable @typescript-eslint/no-explicit-any */
import UserService from 'services/UserService';
import { useState } from 'react';
import * as S from './styles';

const LoginTemplate = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await UserService.login({ email, password });
            // eslint-disable-next-line no-console
            console.log(response);
        } catch (err) {
            setError((err as any).message);
            setEmail('');
            setPassword('');
        }
    };
    return (
        <S.Wrapper>
            <S.Login>
                <S.ImageBack src="/assets/BackArrow.svg" />
                <S.AuxII>
                    <S.LoginName>Login</S.LoginName>
                    <S.EmailInput
                        placeholder="Celular, e-mail ou nome de usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.PasswordInput
                        placeholder="Senha"
                        type="password"
                        value={email}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <S.RecuperarSenha>Esqueceu sua senha?</S.RecuperarSenha>
                    <S.ErrorWrapper>{error}</S.ErrorWrapper>
                    <S.SignInButton onClick={handleLogin}>
                        ENTRAR
                    </S.SignInButton>
                    <S.Aux>
                        <S.FootText>Ainda não tem uma conta?</S.FootText>
                        <S.RecuperarSenha>Cadastre-se</S.RecuperarSenha>
                    </S.Aux>
                </S.AuxII>
            </S.Login>
            <S.LoginBackground>
                <S.AuxII>
                    <S.ImageLogin src="/assets/passarinho.svg" />
                    <S.PiuPiuwer>PiuPiuwer</S.PiuPiuwer>
                </S.AuxII>
            </S.LoginBackground>
        </S.Wrapper>
    );
};
export default LoginTemplate;
