import NavComponent from 'components/NavComponents';
import TitleComponent from 'components/TitleComponents';
import MainComponent from 'components/MainComponents';
import NewsComponent from 'components/NewsComponents';

import { useState } from 'react';

import * as S from './styles';
import { Profile } from './styles';

const HomeTemplate = () => {
    interface InterfacePosts {
        text: string;
        image: string;
        user: string;
        name: string;
        like: string;
        rp: string;
        comments: string;
    }

    const [postArray, setPostArray] = useState<InterfacePosts[]>([
        {
            text: 'only love can hurt like this... only love can hurt like this',
            image: '/assets/icon.svg',
            user: '@artadsm',
            name: 'Artur Anacleto',
            like: '3',
            rp: '2',
            comments: '1'
        },

        {
            text: 'NÃO há imoralidade em furar a fila do bandejão quem não defende é porque não tem amigos',
            image: '/assets/icon.svg',
            user: '@pebaiano',
            name: 'Pedro Souza',
            like: '5',
            rp: '3',
            comments: '1'
        },
        {
            text: 'oiiiii (na intencao de furar a fila do bandejao',
            image: '/assets/icon.svg',
            user: '@nnakarol',
            name: 'Anna Karoline',
            like: '27',
            rp: '3',
            comments: '12'
        }
    ]);
    const [text2, setText] = useState('Quero dar um Piu');

    function handleClick() {
        setText(text2);
        setPostArray([
            {
                text: text2,
                image: '/assets/icon.svg',
                user: '@nnakarol',
                name: 'Anna Karoline',
                like: '0',
                rp: '0',
                comments: '0'
            },
            ...postArray
        ]);
        setText(' ');
    }

    return (
        <>
            <S.MainBody>
                <S.SideBarContainer>
                    <TitleComponent
                        Word="PiuPiuwer"
                        Image="/assets/logo-logo.svg"
                    />
                    <S.NavBarContainer>
                        <NavComponent
                            Word="Página Inicial"
                            Image="/assets/Home.svg"
                            selected
                        />
                        <NavComponent
                            Word="Notificações"
                            Image="/assets/notification.svg"
                            selected={false}
                        />
                        <NavComponent
                            Word="Mensagens"
                            Image="/assets/mensagens.svg"
                            selected={false}
                        />
                        <NavComponent
                            Word="Salvos"
                            Image="/assets/saved.svg"
                            selected={false}
                        />
                        <NavComponent
                            Word="Perfil"
                            Image="/assets/profile.svg"
                            selected={false}
                        />
                        <NavComponent
                            Word="Configurações"
                            Image="/assets/config.svg"
                            selected={false}
                        />
                    </S.NavBarContainer>
                    <S.ProfileContainer>
                        <Profile src="/assets/icon.svg" />
                    </S.ProfileContainer>
                </S.SideBarContainer>

                <S.MainContainer>
                    <S.SearchContainer>
                        <S.Search value="Quero ouvir um Piu" />
                    </S.SearchContainer>
                    <S.PiuWriteContainer>
                        <S.PiuInput
                            value={text2}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <S.SendButton onClick={handleClick}>Send</S.SendButton>
                    </S.PiuWriteContainer>
                    <S.MainCont>
                        {postArray.map((post) => (
                            <MainComponent
                                text={post.text}
                                image={post.image}
                                user={post.user}
                                name={post.name}
                                like={post.like}
                                rp={post.rp}
                                comments={post.comments}
                            />
                        ))}
                    </S.MainCont>
                </S.MainContainer>

                <S.NewsContainer>
                    <NewsComponent
                        Word="Eleições em São Paulo: Veja os pius sobre a disputa do 2º turno"
                        Image="/assets/news1.svg"
                        Title="Eleições 2022"
                    />
                    <NewsComponent
                        Word="Na semana do Dia do Professor, agradecemos sua paixão e dedicação! "
                        Image="/assets/news2.svg"
                        Title=" #AppleTeacher"
                    />
                    <NewsComponent
                        Word="'A Fazenda 14': Veja os Pius sobre o programa 🤠"
                        Image="/assets/news3.svg"
                        Title="A Fazenda"
                    />
                    <NewsComponent
                        Word="Sérvia derrota o Brasil e é campeã mundial de vôlei feminino"
                        Image="/assets/news4.svg"
                        Title="Vôlei "
                    />
                    <NewsComponent
                        Word="Gomes é apelidado de Campos e se  irrita com companheiros"
                        Image="/assets/news5.svg"
                        Title="Clima tenso no Ntec"
                    />
                </S.NewsContainer>
            </S.MainBody>
        </>
    );
};

export default HomeTemplate;
