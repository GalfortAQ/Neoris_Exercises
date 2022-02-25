import { css } from 'lit-element';

export const navigatorStyles = css`
  :host {
    --background-color: #eae8e8;
    --dark-color: #3c3b3b;
  }

  .menu-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .menu-list li {
    color: black;
    background-color: var(--background-color);
    margin-bottom: 2px;
    font-size: 20px;
    cursor: pointer;
  }

  .menu-list li a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 20px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) {
    .menu-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }

    .menu-list li {
      margin: 20px;
      line-height: 150px;
      border-radius: 3px;
    }

    .menu-list li a {
      height: 150px;
      width: 150px;
    }

    .menu-list li a:hover {
      background-color: #3e5c7b;
      color: white;
    }
  }
`;

export const commonStyles = css`
  .container {
    padding: 20px;
  }

  .common-list {
    margin: 40px 0px;
  }

  .common-btn {
    background-color: transparent;
    border: 1px solid grey;
    padding: 10px;
    margin: 5px;
    outline: none;
    cursor: pointer;
  }

  .common-btn:hover {
    background-color: #f1f1f1;
  }
`;
export const userCardStyles = css`
  .alert-msg,
  .alert-msg > * {
    color: #e1504d;
    font-size: 14px;
  }
  .text-gray {
    color: gray;
  }
  h3.text-gray {
    margin-bottom: 20px;
  }
  img {
    border-radius: 50%;
  }
  .card {
    margin-top: 10px;
    max-width: 500px;
    padding: 30px;
  }
  h1 {
    font-weight: bold;
  }
  .card-principalData {
    padding-top: 20px;
  }
  .undefined {
    color: gray;
  }
  i:hover {
    cursor: pointer;
  }
  .car-infoBlock {
    margin: 10px 0px;
  }
`;