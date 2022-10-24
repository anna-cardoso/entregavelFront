import * as S from './styles';

export type MainComponentProps = {
    text: string;
    image: string;
    user: string;
    name: string;
    like: string;
    rp: string;
    comments: string;
};

const MainComponent: React.FC<MainComponentProps> = ({
    text,
    image,
    user,
    name,
    like,
    rp,
    comments
}) => {
    return (
        <S.Container>
            <S.Image src={image} />
            <S.PiuContainer>
                <S.NameUser>
                    <S.Name>{name}</S.Name>
                    <S.User>{user}</S.User>
                </S.NameUser>
                <S.Text>{text}</S.Text>
                <S.Interactions>
                    <S.Comments>{comments}</S.Comments>
                    <S.Rp>{rp}</S.Rp>
                    <S.Likes>{like}</S.Likes>
                </S.Interactions>
            </S.PiuContainer>
        </S.Container>
    );
};

export default MainComponent;
