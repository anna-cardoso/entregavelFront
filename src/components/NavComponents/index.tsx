import * as S from './styles';

export type NavComponentProps = {
    Word: string;
    Image: string;
    selected: boolean;
};

const NavComponent: React.FC<NavComponentProps> = ({
    Word,
    Image,
    selected
}) => (
    <S.Container selected={selected}>
        <S.Logo src={Image} />
        <S.Title>{Word}</S.Title>
    </S.Container>
);

export default NavComponent;
