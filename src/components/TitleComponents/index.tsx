import * as S from './styles';

export type TitleComponentsProp = {
    Word: string;
    Image: string;
};

const TitleComponent: React.FC<TitleComponentsProp> = ({ Word, Image }) => (
    <S.TitleContainer>
        <S.Logo src={Image} />
        <S.Title>{Word}</S.Title>
    </S.TitleContainer>
);

export default TitleComponent;
