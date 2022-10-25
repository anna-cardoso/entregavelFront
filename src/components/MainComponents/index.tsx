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
                    {name} {user}
                </S.NameUser>
                <S.Text>{text}</S.Text>
                <S.Interactions>
                    <S.Likes src={comments} />
                    <S.Likes src={rp} />
                    <S.Likes src={like} />
                </S.Interactions>
            </S.PiuContainer>
        </S.Container>
    );
};

export default MainComponent;
