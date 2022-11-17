import * as S from './styles';

const LoginTemplate = () => (
    <S.Wrapper>
        <S.Login>
            <S.ImageBack src="/assets/BackArrow.svg" />
            <S.AuxII>
                <S.LoginName>Login</S.LoginName>
                <S.EmailInput placeholder="Celular, e-mail ou nome de usuário" />
                <S.PasswordInput placeholder="Senha" type="password" />
                <S.RecuperarSenha>Esqueceu sua senha?</S.RecuperarSenha>
                <S.SignInButton>ENTRAR</S.SignInButton>
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
export default LoginTemplate;
