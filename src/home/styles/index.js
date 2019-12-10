import styled from 'styled-components';

const DeviceWidth = "800px"

export const ContainerStyled = styled.div `
    height: 100%;
    margin: 20px;
    position: relative;
    overflow-y: hidden;

    .top-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        position: sticky;
        width: 100%;
        left: 0;
        top: 20px;
        height: 40px;
    }
    .search-book-input {
        min-width: 200px;
        height: 30px;
    }
    .add-book-btn {
    }
`

export const Button = styled.button `
    padding: 5px 10px;
    color: #fff;
    background-color: #1976d2;
    height: 30px;
    ${props => props.styles}
`

export const GenreWrapper = styled.div `
    display: grid;
    grid-template-columns: 32% 32% 32%;
    justify-content: space-around;
    grid-row-gap: 20px;
    justify-content: space-between;
    overflow-y: auto;
    margin-bottom: 100px;
    // top: 20px;
    // position: relative;

    @media screen and (max-width: ${DeviceWidth}) {
        grid-template-columns: 100%;
        //max-height: 600px;
    }
`

export const GenreCard = styled.div `
    width: 100%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    outline: none;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    padding: 10px;

    .genre-name {
        text-align: center;
        font-weight: bold;
        padding-bottom: 10px;
        text-transform: capitalize;
    }
    .edit-book-icon {
        height: 20px;
    }
    .genre-books {
        .book-name-count {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 10px;
        }
        .book-name {
            text-transform: capitalize;
        }
        .no-books-msg {
            text-align: center;
            adding-bottom: 10px;
        }
    }
`

export const ModalStyled = styled.div `
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

export const AddBooksStyled = styled.div `
    background-color: white;
    height: 90%;
    width: 80%;
    margin: 20px auto;
    padding: 0px 20px;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid grey;

        .close-icon {
            cursor: pointer;
        }
    }
    .add-items-wrapper {
        .add-items {
            margin: 20px 0px;
            display: flex;
            justify-content: space-between;
        }
        label {
            margin-right: 5px;
        }
        input, select, textarea {
            background-color: #dfe8e8;
            min-height: 30px;
            min-width: 150px;
        }
        .add-books-btn-wrapper {
            display: flex;
            justify-content: center;
            margin-top : 40px;
        }
    } 
`
export const EditBooksStyled = styled. div `
    background-color: white;
    height: 90%;
    width: 80%;
    margin: 20px auto;
    padding: 0px 20px;
`