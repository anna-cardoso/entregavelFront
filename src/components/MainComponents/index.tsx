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
    const [deleted, setDeleted] = useState(false);
    function LikeFunction() {
        setLikes(!likes);
        api.post('/pius/like', { piu_id: id });
    }
    function DeleteFunction() {
        if (user === 'annaCardoso') {
            setDeleted(!deleted);
        }
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
                    <S.Interactions
                        onClick={() => {
                            LikeFunction();
                        }}
                    >
                        <S.Likes src={like} selected={likes} />
                    </S.Interactions>
                    <S.Rp src={rp} />
                    <S.Comments src={comments} />
                    <S.Interactions
                        onClick={() => {
                            DeleteFunction();
                        }}
                    >
                        <S.DeleteButton src={del} selected={deleted} />
                    </S.Interactions>
                </S.Interactions>
            </S.PiuContainer>
        </S.Container>
    );
};
export default MainComponent;
