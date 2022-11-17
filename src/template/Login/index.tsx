import * as S from './styles';

const HomeTemplate = () => {
    <S.Wrapper>
        <S.Login>
            <S.ImagemLogin src="/assets/passarinho.svg" />
        </S.Login>
        <S.Login>
            <S.EntradaEmail placeholder="E-mail" />
        </S.Login>
    </S.Wrapper>;
};
export default HomeTemplate;
