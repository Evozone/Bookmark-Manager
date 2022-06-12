import styled from 'styled-components';
import TrashIcon from '../TrashIcon/TrashIcon';
import EditIcon from '../EditIcon/EditIcon';

export const Item = styled.div`
    user-select: none;
    position: absolute;
    margin: 10px;
    z-index: 1;
    will-change: transform;
    border-radius: 20px;
    transition: box-shadow 0.2s;
`;

export const ItemContent = styled.div`
    font-size: 20px;
    padding: 5px 5px 17px;
    font-weight: 300;
    background-color: ${(props) => props.theme.BookmarkBg};
    border-radius: 15px;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;

    &:hover {
        background-color: ${(props) => props.theme.BookmarkHoverBg};
    }
`;

export const CustomTrashIcon = styled(TrashIcon)`
    float: right;
    color: ${(props) => props.theme.BookmarkTxtColor};
    cursor: pointer;
    z-index: 2;
    height: 23px;
`;

export const CustomEditIcon = styled(EditIcon)`
    position: absolute;
    right: 34px;
    color: ${(props) => props.theme.BookmarkTxtColor};
    cursor: pointer;
    z-index: 2;
    height: 23px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const WebsiteName = styled.a`
    margin-right: 5px;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.theme.BookmarkTxtColor};

    &:hover {
        text-decoration: underline;
    }
`;

export const WebsiteFavicon = styled.img`
    height: 20px;
    width: 20px;
    vertical-align: sub;
    margin-left: 3px;
    margin-right: 7px;
`;
