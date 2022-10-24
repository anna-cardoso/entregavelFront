import * as S from './styles';

export type NewsComponentProps = {
    Word: string;
    Image: string;
    Title: string;
};

const NewsComponent: React.FC<NewsComponentProps> = ({
    Word,
    Image,
    Title
}) => {
    return (
        <S.Container>
            <S.Logo src={Image} />
            <S.TextContainer>
                <S.Title>{Title}</S.Title>
                <S.Word>{Word}</S.Word>
            </S.TextContainer>
        </S.Container>
    );
};

export default NewsComponent;
