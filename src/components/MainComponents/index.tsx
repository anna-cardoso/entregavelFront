import api from 'services/api';
import { useState } from 'react';
import * as S from './styles';

export type MainComponentProps = {
    text: string;
    image: string;
    user: string;
    name: string;
    like: string;
    rp: string;
    comments: string;
    delete: string;
    id: string;
};

const MainComponent: React.FC<MainComponentProps> = ({
    text,
    image,
    user,
    name,
    like,
    rp,
    comments,
    delete: del,
    id
}) => {
    const [likes, setLikes] = useState(false);

    function LikeFunction() {
        setLikes(!likes);
        api.post('/pius/like', { user_id: id });
    }

    return (
        <S.Container>
            <S.Image src={image} />
            <S.PiuContainer>
                <S.NameUser>
                    {name} {user}
                </S.NameUser>
                <S.Text>{text}</S.Text>
                <S.Interactions>
                    <S.Likes
                        src={comments}
                        onClick={() => {
                            LikeFunction();
                        }}
                    />
                    <S.Rp src={rp} />
                    <S.Comments src={like} />
                    <S.DeleteButton src={del} />
                </S.Interactions>
            </S.PiuContainer>
        </S.Container>
    );
};
export default MainComponent;
